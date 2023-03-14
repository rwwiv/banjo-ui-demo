<script>
  import { page } from "$app/stores";
</script>

<div class="flex flex-col justify-center items-center w-full min-h-screen">
  <h1 class="text-3xl">{$page.status}</h1>
  <h2 class="text-2xl">{$page.error?.message}</h2>
</div>
