import { Prisma, PrismaClient } from "@prisma/client";
import { Priority, Team } from "../src/lib/enums.js"; // .js since we're transpiling

const prisma = new PrismaClient();

const orderData: Prisma.OrderCreateInput[] = [];

/*
Useless little function to convert index to suffix on names
From https://stackoverflow.com/a/41358305
*/
function convertToRoman(index: number) {
  const roman: Record<string, number> = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  };
  let str = "";
  let num = index + 1;

  for (const i of Object.keys(roman)) {
    const r = roman[i];
    const q = Math.floor(num / r);
    num -= q * r;
    str += i.repeat(q);
  }

  return str;
}

for (let index = 0; index < 250; index++) {
  const teamKeys = Object.keys(Team);
  const priorityList = Object.values(Priority).filter(
    (v) => typeof v === "number"
  );
  const team = teamKeys[Math.floor(Math.random() * teamKeys.length)];

  let suffix = "";

  if (index === 1) {
    suffix = "Jr";
  } else if (index > 1) {
    suffix = convertToRoman(index);
  }

  const order: Prisma.OrderCreateInput = {
    priority: Math.floor(Math.random() * priorityList.length),
    team,
    dueDate: new Date(2024, 0, 1),
    userName: `Testy McTesterson ${suffix}`,
  };

  orderData.push(order);
}

async function main() {
  let i = 1;
  for (const o of orderData) {
    await prisma.order.upsert({
      where: { id: i },
      update: {},
      create: o,
    });
    i++;
  }
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
