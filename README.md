# Deliveries System &middot; [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)

A simple delivery system

## Installing / Getting started

Install dependencies

```shell
$ npm install
```

Create a database in postgres

```shell
$ docker run --name delivery -e POSTGRES_DB=YOUR_DATABASE_NAME -e POSTGRES_PASSWORD=YOUR_PASSWORD -p 5432:5432 -d postgres
```

Run migrations

```shell
$ npx prisma migrate dev
```

Start the server

```shell
$ npm run start
```

## Developing

### Built With

Node.js

TypeScript

Prisma
