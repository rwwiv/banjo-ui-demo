<script lang="ts">
  import Modal from "../modal/Modal.svelte";
  import ModalWapper from "../modal/ModalWapper.svelte";
  import NewOrderForm from "./NewOrderForm.svelte";

  export let hidden = true;
</script>

<ModalWapper bind:hidden>
  <Modal>
    <div class="rounded-2xl bg-blue-50">
      <div class="flex flex-col space-y-12 items-center p-10">
        <div class="flex flex-col items-center space-y-5">
          <div class="text-3xl font-semibold">Create a New Order</div>
          <div class="text-gray-500">
            Fill out the required information to create a new order
          </div>
        </div>
        <NewOrderForm cancelFun={() => (hidden = !hidden)} />
      </div>
    </div>
  </Modal>
</ModalWapper>
