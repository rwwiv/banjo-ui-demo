import { redirect } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";

export const load = (async () => {
  throw redirect(307, "/orders/1");
}) satisfies PageServerLoad;
