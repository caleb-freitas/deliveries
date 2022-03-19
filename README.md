<h1 align="center">Deliveries System</h1>

## Project

A simple delivery system

## How to execute

- Clone the repository
- Go to the folder that was cloned `deliveries`
- Add database credentials to `.env.example` file and rename it to `.env`
- Run `npm install` to install the dependencies
- Start a database on `localhost:5432`
- Run `npx prisma migrate dev` to create the tables on the database
- Run `npm start`

The application will be available on `http://localhost:3000`

## Technologies

- [Node.js](https://nodejs.org/en/)
- [TypeScript](https://www.typescriptlang.org/)
- [Express](https://expressjs.com/pt-br/)
- [Prisma](https://www.prisma.io/)
- [PostgreSQL](https://www.postgresql.org/)
