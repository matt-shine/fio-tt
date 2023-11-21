<script lang="ts">
  import ApplicantForm from "./components/ApplicantForm.svelte";
  import AddApplicantButton from "./components/AddApplicantButton.svelte";
  import { applicantStore } from "./stores";
  import ApplicantsList from "./components/ApplicantsList.svelte";
  import SubmitApplicants from "./components/SubmitApplicants.svelte";

  const { applicants, newApplicant, resetNewApplicant } = applicantStore;
  /**
   * Called when the new applicant form is submitted.
   */
  const handleApplicantAdded = () => {
    // Add the newApplicant into the applicants store
    $applicants = [...$applicants, $newApplicant];

    // reset newApplicant
    resetNewApplicant();
  };

  /**
   * Handles primary being toggled for on the new applicant form
   *
   * @param primary
   */
  const handlePrimaryChanged = (primary: boolean) => {
    if (primary) {
      applicants.set(
        $applicants.map((a, i) => {
          if (a.primary) a.primary = false;
          return a;
        }),
      );
    }
  };
</script>

<div class="applicants-main pt-8 flex flex-col gap-8">
  <!-- New applicant -->
  <ApplicantForm
    bind:applicant={$newApplicant}
    on:add={handleApplicantAdded}
    on:primaryChange={({ detail }) => handlePrimaryChanged(detail)}
  >
    <AddApplicantButton />
  </ApplicantForm>

  <ApplicantsList />

  <SubmitApplicants on:click={() => console.log("hmmm click")} />
</div>
