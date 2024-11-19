import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
async function main() {
    const user = await prisma.user.upsert({
        where: { email: 'yiming@zenstack.dev' },
        update: {},
        create: {
            email: 'yiming@zenstack.dev',
            name: 'Yiming',
            posts: {
                create: [
                    {
                        title: 'Welcome to ZenStack',
                        content: 'https://zenstack.dev',
                        published: true,
                    },
                    {
                        title: 'A unpublished post',
                        content: 'https://zenstack.dev',
                        published: false,
                    },
                ],
            },
        },
        include: { posts: true },
    });
    console.log(user);
}
main()
    .then(async () => {
        await prisma.$disconnect();
    })
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    });
