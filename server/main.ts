import { PrismaClient } from '@prisma/client';
import { enhance } from '@zenstackhq/runtime';
import { ZenStackMiddleware } from '@zenstackhq/server/express';
import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';

dotenv.config();

const prisma = new PrismaClient();
const app = express();
const port = process.env.PORT ?? 3000;

app.use(express.json());
app.use(cors());

app.use(
    '/api/model',
    ZenStackMiddleware({
        getPrisma: () => enhance(prisma, { user: undefined }),
    })
);

app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});
