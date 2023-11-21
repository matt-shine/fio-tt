<script lang="ts">
  export let checked: boolean = false;
  export let label: string;
  export let name: string;
</script>

<label>
  <input type="checkbox" id={name} bind:checked on:change />
  {label}
</label>
