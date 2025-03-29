# zen

a minimal, opinionated next.js starter with modern tooling to help you ship faster.

### core

- [next.js](https://nextjs.org/)
- [typescript](https://www.typescriptlang.org/)

### linting & formatting

- [eslint](https://eslint.org/)
  - [eslint-config-prettier](https://github.com/prettier/eslint-config-prettier)
  - [eslint-plugin-check-file](https://github.com/dukeluo/eslint-plugin-check-file)
- [prettier](https://prettier.io/)
  - [prettier-plugin-sort-imports](https://github.com/trivago/prettier-plugin-sort-imports)
  - [prettier-plugin-tailwindcss](https://github.com/tailwindlabs/prettier-plugin-tailwindcss)

### ui & styling

- [tailwind css v4](https://tailwindcss.com/)
- [shadcn/ui](https://ui.shadcn.com/)
- [lucide-react](https://lucide.dev/)

### authentication

- [better auth](https://www.better-auth.com/)
- [drizzle adapter](https://www.better-auth.com/docs/adapters/drizzle)

### database

- [drizzle orm](https://orm.drizzle.team/docs/get-started/postgresql-new)
- postgresql


### setup

install dependencies:

```bash
bun install
```

copy the .env file:

```bash
cp .env.example .env
```

update the following values in the .env file.

start the database:

```bash
docker compose up
```

migrate the database:

```bash
bun run db:migrate
```

start the app:

```bash
bun run dev
```

### license

this project is licensed under the mit license.

