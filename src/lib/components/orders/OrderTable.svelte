<script lang="ts">
  import type { Order } from "@prisma/client";
  import StyledTable from "../table/StyledTable.svelte";
  import NewOrderModal from "./NewOrderModal.svelte";
  import OrderPaginator from "./OrderPaginator.svelte";
  import OrderRow from "./OrderRow.svelte";

  export let orders: Order[];
  export let orderCount: number;
  export let page: number;

  // The below are used for an alternate pagination hint
  // $: startIndex = 10 * page - 10;
  // $: startVal = startIndex + 1;
  // $: endVal = startVal + 9 > orderCount ? orderCount : startVal + 9;

  let modalHidden = true;
</script>

<NewOrderModal bind:hidden={modalHidden} />

<div class="bg-white rounded-lg max-w-6xl mx-4">
  <div class="flex justify-between items-center px-6 py-4">
    <h1 class="text-xl text-gray-600">Orders</h1>
    <button
      on:click={() => (modalHidden = !modalHidden)}
      class="text-sm px-5 py-2 rounded-lg bg-blue-500 hover:bg-blue-600 active:bg-blue-800 text-white"
    >
      New Order
    </button>
  </div>
  <div class="relative overflow-x-auto ">
    <StyledTable fixed={true}>
      <svelte:fragment slot="cols">
        <col class="w-1/3" />
        <col />
        <col />
        <col />
        <col />
        <col class="w-10" />
      </svelte:fragment>
      <svelte:fragment slot="thead">
        <th scope="col" class="text-left pl-6">Team Member</th>
        <th scope="col">Priority</th>
        <th scope="col">Order Number</th>
        <th scope="col">Team</th>
        <th scope="col">Due Date</th>
        <th scope="col" />
      </svelte:fragment>
      <svelte:fragment slot="tbody">
        {#if orders.length == 10}
          {#each orders as order}
            <OrderRow {order} />
          {/each}
        {:else if orders.length < 10 && orders.length > 0}
          {#each orders as order}
            <OrderRow {order} />
          {/each}
          {#each Array(10 - orders.length) as _}
            <OrderRow />
          {/each}
        {:else}
          {#each Array(10) as _}
            <OrderRow />
          {/each}
        {/if}
      </svelte:fragment>
    </StyledTable>
  </div>
  <div class="flex justify-between items-center px-6 py-3">
    <!--
      This shows more useful information but does not match Figma design
      <div class="text-gray-500 text-sm">
        Showing items {startVal} - {endVal} out of {orderCount} results found
      </div>
     -->
    <div class="text-gray-500 text-sm">
      Showing {orders.length}
      {orders.length > 1 ? "items" : "item"} out of {orderCount} results found
    </div>
    <OrderPaginator bind:page bind:orderCount />
  </div>
</div>
