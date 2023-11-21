<script lang="ts">
  import { createEventDispatcher } from "svelte";

  import TextInput from "./TextInput.svelte";
  import TelInput from "./TelInput.svelte";
  import EmailInput from "./EmailInput.svelte";
  import Checkbox from "./Checkbox.svelte";

  export let applicant: Applicant;
  export let disableFields: boolean = false;

  const dispatch = createEventDispatcher<{
    add: undefined;
    primaryChange: boolean;
  }>();

  const handleAdd = () => {
    dispatch("add");
  };

  const handlePrimaryChange = () => {
    dispatch("primaryChange", applicant.primary);
  };
</script>

<div class="form-main">
  <form
    on:submit|preventDefault={handleAdd}
    class="grid grid-cols-1 sm:grid-cols-2 gap-2"
  >
    <TextInput
      bind:value={applicant.firstName}
      name="firstName"
      label="First name"
      disabled={disableFields}
    />

    <TextInput
      bind:value={applicant.lastName}
      name="lastName"
      label="Last name"
      disabled={disableFields}
    />

    <!-- Curly braces need to be escaped in the pattern below or svelte will interpret it as string interpolation -->
    <TelInput
      bind:value={applicant.mobileNumber}
      name="mobileNumber"
      label="Mobile name"
      pattern="^04[0-9]&#123;8&#125;"
      disabled={disableFields}
    />

    <EmailInput
      bind:value={applicant.email}
      name="email"
      label="Email"
      disabled={disableFields}
    />

    <Checkbox
      bind:checked={applicant.primary}
      label="Primary applicant"
      name="primary"
      on:change={handlePrimaryChange}
    />
    <div class="col-span-1 sm:col-span-2 flex justify-end">
      <slot />
    </div>
  </form>
</div>
