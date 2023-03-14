import prisma from "$lib/prisma";
import type { PageServerLoad } from "./$types";

export const load = (async ({ params }) => {
  const orders = await prisma.order.findMany({
    skip: 10 * Number(params.page) - 10,
    take: 10,
    orderBy: {
      id: "desc",
    },
  });

  const orderCount = await prisma.order.count();

  return { orders, orderCount, page: Number(params.page) };
}) satisfies PageServerLoad;
