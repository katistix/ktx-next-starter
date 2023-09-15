An opinonated Next.js starter template with Authentication, Payments and customizable components included.

## The stack

-   Authentication: NextAuth.js with providers for Discord, Google, Facebook, and Credentials (email and password)
-   Payments: Stripe

## How to run the dev server?

1. Compose the database container and run it with `docker compose up` or might need `docker compose up --build`
2. Start the local dev server with `npm run dev` or `npm run dev:migrate` to also apply any new Prisma migrations to the local dev database

## How to deploy to production?

Documentation not added yet.