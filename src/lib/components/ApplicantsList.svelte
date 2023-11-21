<script lang="ts">
  import ApplicantForm from "./ApplicantForm.svelte";
  import DeleteApplicantButton from "./DeleteApplicantButton.svelte";
  import { applicantStore } from "../stores";

  const { applicants, newApplicant } = applicantStore;

  /**
   * Called when an applicants 'primary' status changes.
   * If toggled off we don't need to do anything, else find any other applicants with primary=true and toggle them off
   *
   * @param applicant - the applicant that primary was toggled for
   * @param primary - the new value of primary
   */
  const handlePrimaryChanged = (index: number, primary: boolean) => {
    if (primary) {
      applicants.set(
        $applicants.map((a, i) => {
          if (i != index && a.primary) a.primary = false;
          return a;
        }),
      );
      $newApplicant.primary = false;
    }
  };

  /**
   * Removes applicant at applicants[index]
   *
   * @param index
   */
  const handleDeleteApplicant = (index: number) => {
    $applicants = $applicants.toSpliced(index, 1);
  };
</script>

<article>
  <div class="flex align-center mb-6">
    <h2 class="font-semibold text-lg">Applicants</h2>
  </div>
  {#if !$applicants.length}
    <p class="italic">No applicants added</p>
  {/if}
  {#each $applicants as applicant, i (applicant.email)}
    <ApplicantForm
      bind:applicant
      on:primaryChange={({ detail }) => handlePrimaryChanged(i, detail)}
      disableFields={true}
    >
      <DeleteApplicantButton on:click={() => handleDeleteApplicant(i)} />
    </ApplicantForm>
  {/each}
</article>
