<script lang="ts">
  export let fixed: boolean = true;
</script>

<table class="w-full text-left {fixed ? 'table-fixed' : ''}">
  {#if fixed}
    <slot name="cols" />
  {/if}
  <thead
    class="uppercase bg-gray-50 text-gray-400 text-xs border-y border-gray-200 h-14"
  >
    <slot name="thead" />
  </thead>
  <tbody class="text-gray-600 text-sm">
    <slot name="tbody" />
  </tbody>
</table>
