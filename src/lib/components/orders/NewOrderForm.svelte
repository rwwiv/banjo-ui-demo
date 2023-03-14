<script lang="ts">
  import { enhance } from "$app/forms";
  import { Priority, Team } from "$lib/enums";
  import InputGroup from "../input/InputGroup.svelte";
  import SelectInput from "../input/SelectInput.svelte";
  import TextInput from "../input/TextInput.svelte";

  export let cancelFun: () => void;
</script>

<form
  class="space-y-6 w-full text-left"
  method="POST"
  action="/orders"
  use:enhance={() => {
    return async ({ update }) => {
      update();
      cancelFun();
    };
  }}
>
  <InputGroup name="name" label="Team Member Name">
    <span slot="input">
      <TextInput placeholder="Jane Doe" required={true} name="name" />
    </span>
  </InputGroup>
  <InputGroup name="priority" label="Priority">
    <span slot="input">
      <SelectInput
        name="priority"
        prompt="Choose a priority"
        options={new Map(
          Object.entries(Priority).filter(([_, v]) => typeof v === "number")
        )}
      />
    </span>
  </InputGroup>
  <InputGroup name="team" label="Team">
    <span slot="input">
      <SelectInput
        name="team"
        prompt="Choose a team"
        options={new Map(Object.entries(Team))}
      />
    </span>
  </InputGroup>
  <InputGroup name="date" label="Due Date">
    <span slot="input">
      <TextInput
        name="date"
        placeholder="mm/dd/yyy"
        required={true}
        icon={true}
      >
        <span slot="icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-5 h-5 text-gray-400"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
            />
          </svg>
        </span>
      </TextInput>
      <div class="text-xs text-gray-400 -mt-4 px-1">
        Date format must be mm/dd/yyyy
      </div>
    </span>
  </InputGroup>
  <div class="flex w-full justify-between pt-5">
    <button
      on:click|preventDefault={cancelFun}
      class="rounded-md bg-gray-300 text-gray-500 px-6 py-2"
    >
      Cancel
    </button>
    <button type="submit" class="rounded-md bg-indigo-500 text-white px-6 py-2">
      Submit
    </button>
  </div>
</form>
