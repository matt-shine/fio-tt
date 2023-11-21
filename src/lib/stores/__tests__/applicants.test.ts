// @ts-nocheck
import { get } from "svelte/store";
import ApplicantStore from "../applicants";
import { TEST_APPLICANT } from "../../__tests__/test_applicant";

describe("ApplicantStore", () => {
  describe("submittable", () => {
    it("has a false value when no applicants exist", () => {
      const { applicants, submittable } = ApplicantStore();
      expect(get(applicants).length).toBe(0);
      expect(get(submittable)).toBe(false);
    });

    it("has a false value when applicants exist but no primary applicant selected", () => {
      const { applicants, submittable } = ApplicantStore();
      applicants.set([TEST_APPLICANT]);
      expect(get(applicants).length).toBe(1);
      expect(get(submittable)).toBe(false);
    });

    it("has a true value when applicants exist and primary applicant selected", () => {
      const { applicants, submittable } = ApplicantStore();
      applicants.set([{ ...TEST_APPLICANT, primary: true }]);
      expect(get(applicants).length).toBe(1);
      expect(get(submittable)).toBe(true);
    });
  });

  describe("resetNewApplicant", () => {
    it("resets the new applicant store", () => {
      const { newApplicant, resetNewApplicant } = ApplicantStore();
      newApplicant.set(TEST_APPLICANT);
      expect(get(newApplicant).firstName).toBe(TEST_APPLICANT.firstName);
      resetNewApplicant();
      expect(get(newApplicant).firstName).toBe("");
    });
  });
});
