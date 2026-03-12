import { Hono } from "hono";

const app = new Hono<{ Bindings: CloudflareBindings }>();

app.use("/api/*", async (c, next) => {
  // Não recomendado: vários usuários podem compartilhar o mesmo IP
  // especialmente em redes móveis ou corporativas.
  const ipAddr = c.req.header("cf-connecting-ip") || "";
  const path = c.req.path;

  const key = `${path}:${ipAddr}`;

  const { success } = await c.env.RATELIMITER.limit({ key });

  if (!success) {
    return c.text("Too Many Requests", 429);
  }

  await next();
});

app.get("/api/message", (c) => {
  return c.json({
    message: "Access granted to protected API data!",
  });
});

app.get("/", (c) => {
  const cf = c.req.raw.cf;

  return c.json({
    message: "Welcome! This main page is not rate-limited.",
    location: cf ? `${cf.city}, ${cf.country}` : "Unknown location",
  });
});

export default app;
