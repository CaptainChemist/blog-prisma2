# Fullstack Blog Application with Prisma 2, Next.js and Docker

Based on Blog Posts at:

https://www.codemochi.com/blog/2019-07-08-prisma-2-nextjs-docker/

https://www.codemochi.com/blog/2019-07-10-prisma-2-nextjs-docker/ (coming soon!)

https://www.codemochi.com/blog/2019-07-12-prisma-2-nextjs-docker/ (coming soon!)

This repo is for a fullstack javascript application that uses Next.js for server side rendering on the frontend and a GraphQL Yoga server with Prisma 2 on the backend. We use Prisma Studio for an admin portal and a MySQL database.

Here's what the stack looks like:

![Our Fullstack Prisma 2 + Next.js Application](https://www.codemochi.com/static/830e0429aee7223aae900ed1157ddd57/65f42/architecture.png)

**What does it look like?**

![Screenshot of ui](https://www.codemochi.com/static/38f05743b628162730a007394db815e8/9424f/finished-app.png)

We are building a blog web app based on the example blog project that comes with the Prisma 2 CLI. Here are the actions we can perform from the backend:

Queries:

- Read all published blog posts
- Read all draft blog posts
- Read all users

Mutations:

- Create a user
- Create a blog draft
- Publish a blog
- Delete a blog

Obviously in a real application, you’d never allow anyone to see all the users or unpublished blog posts- but doing this for here so we can see all the posts and users as they are created and modified right from our Next.js website.

**Helpful commands**

In the root directory:

`npm run build` This will build your frontend, backend and prisma docker containers

`npm start` This will start up your docker compose docker containers

`npm stop` This will bring down the cluster and remove containers

`npm run clean` This will delete all containers, images, docker networks

`npm run clean:volumes` This will delete all docker volumes

`npm run generate` This will build the `frontend/generated/apollo-components.tsx` based on the queries and mutations in the `frontend/graphql` folder that it will run against the the backend server itself.
