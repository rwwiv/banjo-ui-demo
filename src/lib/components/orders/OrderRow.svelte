<script lang="ts">
  import type { Order } from "@prisma/client";
  import PriorityLabel from "./PriorityLabel.svelte";

  export let order: Order | undefined = undefined;
</script>

<tr class="bg-white h-14 border-b border-gray-200">
  {#if order}
    <th scope="row" class="text-left pl-6">{order ? order.userName : "..."}</th>
    <td><PriorityLabel priority={order.priority} /></td>
    <td>{order.id}</td>
    <th scope="row">{order.team}</th>
    <td>{order.dueDate.toLocaleDateString("en-US")}</td>
    <td class="text-gray-500">
      <button on:click={() => alert(`Order #${order?.id} menu clicked`)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z"
          />
        </svg>
      </button>
    </td>
  {/if}
</tr>
