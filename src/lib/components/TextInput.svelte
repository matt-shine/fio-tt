<script lang="ts">
  export let name: string;
  export let label: string;
  export let value: string;
  export let disabled: boolean = false;
</script>

<div class="flex flex-col">
  <label for={name}>{label}</label>
  <input
    bind:value
    {name}
    {disabled}
    required
    type="text"
    class="border rounded h-10 p-2"
  />
</div>
