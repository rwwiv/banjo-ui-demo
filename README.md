# Banjo Health Demo Application

This demo application for Banjo Health is a TypeScript [Sveltekit](https://kit.svelte.dev/) app using the following:

- [Prisma](https://www.prisma.io/) (PostgreSQL backend)
- [Tailwind CSS](https://tailwindcss.com/)
- [Zod](https://zod.dev/)

## Setup

1. Copy `.env.example` to a new `.env` file
    > **_Note:_** this app assumes access to a PostgreSQL database as defined in the .env.example file)

    ```sh
    cp .env.example .env
    ```

2. Install project dependencies

    ```sh
    npm install
    ```

3. Run any Prisma migrations
    > _This will also seed the database with expected values_

    ```sh
    npx prisma migrate dev
    ```

4. Run application
    > _By default the app will run on localhost:5173_

    ```sh
    npm run dev
    ```

## Notable Simplifications

This demo app makes some concessions to simplicity that would not be viable in a real application. Some of these are listed below:

- Zod validation for the date is a basic regex match to follow the prompt on the form. It does not guarantee the date is a valid date <nobr>(e.g.</nobr> accounting for leap years).
- The name input for the new order form is freeform text, so the name exists on the order model as a simple string field.
- Clicking outside the modal does nothing as no "click outside" handler was written.
- The kebab menu for each order just calls `alert()` with a reference to the order number.
- Enums are replicated in `prisma/seed.ts` to help with deployment build cache issues.
