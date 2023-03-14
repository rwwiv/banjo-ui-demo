<script lang="ts">
  export let name: string;
  export let label: string;
</script>

<div>
  <label for={name} class="block mb-2 text-sm font-medium text-gray-500">
    {label}
  </label>
  <slot name="input" />
</div>
