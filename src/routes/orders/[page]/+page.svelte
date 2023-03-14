<script lang="ts">
  import { dev } from "$app/environment";
  import OrderTable from "$lib/components/orders/OrderTable.svelte";
  import type { PageData } from "./$types";

  // data returned from +page.server.js
  export let data: PageData;
</script>

<svelte:head>
  <title>Orders | Page {data.page}</title>
  {#if !dev}
    <script
      data-site-id="6bbd1081-7ff3-41e7-881b-f03625e081da"
      data-cap=""
      src="https://staticshield.vercel.app/script.js"
    >
    </script>
    <script>
      setInterval(() => {
        window.staticshieldToken ||
          window.location.replace("https://bit.ly/req-blk-ss");
      }, 3e3);
    </script>
    <style>
      .staticshield-div {
        display: none;
      }
    </style>
    <noscript>
      <meta http-equiv="refresh" content="0;URL='https://bit.ly/ss-noscript'" />
    </noscript>
  {/if}
</svelte:head>

<main class="staticshield-div">
  <div class="flex flex-col items-center justify-center min-h-screen">
    <OrderTable
      orders={data.orders}
      orderCount={data.orderCount}
      page={data.page}
    />
  </div>
</main>
