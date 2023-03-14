<script lang="ts">
  import { Priority } from "$lib/enums";
  export let priority: number;

  let priorityColors = ["bg-green-500", "bg-orange-500", "bg-red-500"];

  $: priorityString = Priority[priority];
</script>

<div class="flex items-center space-x-2">
  <div class="{priorityColors[priority]} rounded-full w-2 h-2" />
  <p>{priorityString}</p>
</div>
