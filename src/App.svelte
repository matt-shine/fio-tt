<script lang="ts">
  import "./app.css";
  import Applicants from "./lib/Applicants.svelte";
  import DarkModeToggle from "./lib/components/DarkMode.svelte";
  import Header from "./lib/components/Header.svelte";
</script>

<div class="dark:bg-slate-800">
  <main class="main-container container mx-auto p-8">
    <div class="flex justify-end">
      <DarkModeToggle />
    </div>
    <Header />
    <Applicants />
  </main>
</div>

<style>
  .main-container {
    min-height: 100dvh;
  }
</style>
