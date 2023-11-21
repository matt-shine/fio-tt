import { derived, writable } from "svelte/store";
import type { Readable, Writable } from "svelte/store";

const DEFAULT_NEW_APPLICANT = {
  firstName: "",
  lastName: "",
  mobileNumber: "",
  email: "",
  primary: false,
};

type ApplicantStore = {
  applicants: Writable<Applicant[]>;
  newApplicant: Writable<Applicant>;
  submittable: Readable<boolean>;
  resetNewApplicant: () => void;
};

export default function (): ApplicantStore {
  const applicants: Writable<Applicant[]> = writable([]);
  const newApplicant: Writable<Applicant> = writable({
    ...DEFAULT_NEW_APPLICANT,
  });

  const submittable: Readable<boolean> = derived(
    applicants,
    ($applicants) =>
      $applicants.length > 0 && $applicants.some((a) => a.primary),
  );

  const resetNewApplicant = () => {
    newApplicant.set({ ...DEFAULT_NEW_APPLICANT });
  };

  return {
    applicants,
    newApplicant,
    submittable,
    resetNewApplicant,
  };
}
