import dotenv from 'dotenv';

dotenv.config();

export default {
  schema: "prisma/schema.prisma",
  migration: {
    path: "prisma/migrations"
  },
  datasource: {
    url: process.env.DATABASE_URL
  }
};