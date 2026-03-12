# 🛡️ Rate Limiting com Hono e Cloudflare Workers

Este projeto demonstra a implementação de uma camada de segurança utilizando a API nativa de **Rate Limiting** da Cloudflare e o framework **Hono**. O objetivo é proteger rotas críticas da API contra abusos e exaustão de recursos diretamente no ponto de presença mais próximo do usuário.

### 🚀 Por que Rate Limiting na Edge?

* **Proteção Preemptiva:** Bloqueia acessos maliciosos antes mesmo da requisição atingir a lógica de negócio ou servidores centrais.
* **Performance Nativa:** Utiliza contadores em memória na infraestrutura global da Cloudflare, garantindo validação com latência quase zero.
* **Economia de Recursos:** Reduz o uso de CPU e banda ao encerrar requisições indesejadas (HTTP 429) no início do ciclo de vida.

### ✅❌ Prós e Contras:

| Prós | Contras |
| --- | --- |
| Bloqueio imediato na borda, economizando recursos de infraestrutura | O limite é local por datacenter (permissivo), não global estrito |
| Uso de Middlewares permite proteção seletiva e granular | A contagem é eventualmente consistente para garantir performance |

---

### 🛠️ Tecnologias

* [Hono](https://hono.dev/) - Framework minimalista para construção de APIs com suporte a Middlewares
* [Cloudflare Rate Limiting API](https://developers.cloudflare.com/workers/runtime-apis/bindings/rate-limit/) - Infraestrutura nativa para controle de tráfego
* [TypeScript](https://www.typescriptlang.org/) - Tipagem estática para maior segurança no desenvolvimento
* [Wrangler](https://developers.cloudflare.com/workers/wrangler/) - CLI para gestão de bindings e deploy

---

### 💻 Como rodar o projeto

**1. Instale as dependências:**

```bash
npm install

```

**2. Inicie o servidor de desenvolvimento local:**

```bash
npm run dev

```

**3. Faça o deploy para a Cloudflare:**

```bash
npm run deploy

```
