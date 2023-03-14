<script lang="ts">
  export let disabled: boolean = false;
  export let active: boolean = false;
  export let href: string;
</script>

<div
  aria-disabled={disabled}
  class="w-12 h-8 aria-disabled:text-gray-300 border border-gray-200 rounded-md shadow-sm select-none {active
    ? 'text-blue-500 bg-blue-50'
    : ''}"
>
  <a
    class="w-full h-full flex justify-center items-center {disabled
      ? 'pointer-events-none'
      : ''}"
    {href}
  >
    <slot />
  </a>
</div>
