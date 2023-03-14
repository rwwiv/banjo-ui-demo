import prisma from "$lib/prisma";
import { error } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";

export const load = (async ({ params }) => {
  if (isNaN(+params.page)) {
    throw error(404, "Page does not exist");
  }

  const orderCount = await prisma.order.count();
  const pageCount =
    orderCount % 10 == 0
      ? orderCount / 10
      : Math.floor((orderCount + (10 - (orderCount % 10))) / 10);

  if (Number(params.page) > pageCount) {
    throw error(404, "Page does not exist");
  }

  const orders = await prisma.order.findMany({
    skip: 10 * Number(params.page) - 10,
    take: 10,
    orderBy: {
      id: "desc",
    },
  });

  return { orders, orderCount, page: Number(params.page) };
}) satisfies PageServerLoad;
