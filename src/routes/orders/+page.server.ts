import { Priority, Team } from "$lib/enums";
import prisma from "$lib/prisma";
import { redirect } from "@sveltejs/kit";
import { z } from "zod";
import type { Actions, PageServerLoad } from "./$types";

export const load = (async () => {
  throw redirect(307, "/orders/1");
}) satisfies PageServerLoad;

const dateRegex =
  /^((((0[13578])|([13578])|(1[02]))[\/](([1-9])|([0-2][0-9])|(3[01])))|(((0[469])|([469])|(11))[\/](([1-9])|([0-2][0-9])|(30)))|((2|02)[\/](([1-9])|([0-2][0-9]))))[\/]\d{4}$|^\d{4}$/;

const orderSchema = z.object({
  name: z.string(),
  priority: z.preprocess((val) => Number(val), z.nativeEnum(Priority)),
  team: z.nativeEnum(Team),
  date: z.string().regex(dateRegex),
});

export const actions = {
  default: async ({ request }) => {
    const formData = await request.formData();
    const orderData = orderSchema.safeParse(Object.fromEntries(formData));
    if (!orderData.success) {
      return { success: false };
    }
    await prisma.order.create({
      data: {
        userName: orderData.data.name,
        priority: orderData.data.priority,
        team: orderData.data.team,
        dueDate: new Date(orderData.data.date),
      },
    });
    return { success: true };
  },
} satisfies Actions;
