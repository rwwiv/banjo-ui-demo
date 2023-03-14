<script lang="ts">
  export let name: string;
  export let placeholder = "Placeholder";
  export let required = false;
  export let icon = false;
</script>

<div class="relative mb-6">
  <input
    type="text"
    class="bg-gray-50 borderborder-gray-200 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 shadow-md
  {icon ? 'pr-10' : ''}
  "
    {name}
    {placeholder}
    {required}
  />
  {#if icon}
    <div
      class="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none"
    >
      <slot name="icon" />
    </div>
  {/if}
</div>
