<script lang="ts">
  import PaginationButton from "./PaginationButton.svelte";

  export let page = 1;
  export let orderCount: number;

  $: pageCount =
    orderCount % 10 == 0
      ? orderCount / 10
      : Math.floor((orderCount + (10 - (orderCount % 10))) / 10);

  $: pageList = () => {
    const bPages =
      page > 2 ? (pageCount - page < 2 ? 4 - (pageCount - page) : 2) : page - 1;
    const fPages =
      pageCount > page + 2 ? (page > 2 ? 2 : 5 - page) : pageCount - page;
    const pages: number[] = [];
    for (let i = page - bPages; i < page; i++) {
      pages.push(i);
    }
    pages.push(page);
    for (let i = page + 1; i <= page + fPages; i++) {
      pages.push(i);
    }
    return pages;
  };
</script>

<div class="flex space-x-1 items-center">
  <PaginationButton disabled={page == 1} href="/orders/{page - 1}">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      class="w-4 h-4"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M15.75 19.5L8.25 12l7.5-7.5"
      />
    </svg>
  </PaginationButton>
  {#each pageList() as i}
    <PaginationButton active={page == i} href="/orders/{i}">
      <div class="text-sm">{i}</div>
    </PaginationButton>
  {/each}
  <PaginationButton disabled={page == pageCount} href="/orders/{page + 1}">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      class="w-4 h-4"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M8.25 4.5l7.5 7.5-7.5 7.5"
      />
    </svg>
  </PaginationButton>
</div>
