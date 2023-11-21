<script lang="ts">
  import { applicantStore } from "../stores";

  const { submittable } = applicantStore;
</script>

<div class="flex justify-end">
  <button
    class="border rounded py-2 px-6 mt-6 disabled:cursor-not-allowed"
    type="button"
    on:click
    disabled={!$submittable}>Submit</button
  >
</div>
