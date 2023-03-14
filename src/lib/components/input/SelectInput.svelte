<script lang="ts">
  export let options: Map<string, unknown>;
  export let prompt: string;
  export let name: string;
</script>

<select
  required
  {name}
  class="bg-gray-50 border border-gray-200 invalid:text-gray-400 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 shadow-md"
>
  <option value="" disabled selected>{prompt}</option>
  {#each [...options.entries()] as [k, v]}
    <option value={v}>{k}</option>
  {/each}
</select>
