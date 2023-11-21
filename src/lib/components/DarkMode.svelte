<script lang="ts">
  import { onMount } from "svelte";

  let darkMode: boolean = true;

  onMount(() => {
    document.body.classList.add("dark");
  });

  const toggle = () => {
    darkMode = !darkMode;
    if (!darkMode) {
      document.body.classList.remove("dark");
    } else {
      document.body.classList.add("dark");
    }
  };
</script>

<button on:click={toggle}>
  {#if darkMode}
    🌕
  {:else}
    🌑
  {/if}
</button>
