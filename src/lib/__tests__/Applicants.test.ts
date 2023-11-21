// @ts-nocheck
import { render, fireEvent, screen } from "@testing-library/svelte";

import Applicants from "../Applicants.svelte";
import { applicantStore } from "../stores";

import { TEST_APPLICANT } from "./test_applicant";

beforeEach(() => {
  const { applicants } = applicantStore;
  applicants.set([]);
});

describe("Applicants", () => {
  it("does not add new applicant to the list with incomplete fields", async () => {
    const { getByText, getByTestId } = render(Applicants);
    const addButton = getByText("Add applicant");
    await fireEvent.click(addButton);
    const applicantsList = getByTestId("applicants-list");
    expect(applicantsList.children.length).toBe(0);
  });

  it("adds new applicant to the list", async () => {
    const { getByLabelText, getByTestId, getByText } = render(Applicants);

    const firstName = getByLabelText("First name");
    const lastName = getByLabelText("Last name");
    const mobileNumber = getByLabelText("Mobile number");
    const email = getByLabelText("Email");

    await fireEvent.change(firstName, {
      target: { value: TEST_APPLICANT.firstName },
    });
    await fireEvent.change(lastName, {
      target: { value: TEST_APPLICANT.lastName },
    });
    await fireEvent.change(mobileNumber, {
      target: { value: TEST_APPLICANT.mobileNumber },
    });
    await fireEvent.change(email, { target: { value: TEST_APPLICANT.email } });

    const addButton = getByText("Add applicant");
    await fireEvent.click(addButton);

    const applicantsList = getByTestId("applicants-list");
    expect(applicantsList.children.length).toBe(1);
  });

  it("is submittable when applicant exists and primary selected", async () => {
    const { getByLabelText, getByTestId, getByText } = render(Applicants);

    const firstName = getByLabelText("First name");
    const lastName = getByLabelText("Last name");
    const mobileNumber = getByLabelText("Mobile number");
    const email = getByLabelText("Email");
    const primary = getByLabelText("Primary applicant");

    await fireEvent.change(firstName, {
      target: { value: TEST_APPLICANT.firstName },
    });
    await fireEvent.change(lastName, {
      target: { value: TEST_APPLICANT.lastName },
    });
    await fireEvent.change(mobileNumber, {
      target: { value: TEST_APPLICANT.mobileNumber },
    });

    await fireEvent.change(email, { target: { value: TEST_APPLICANT.email } });
    await fireEvent.click(primary);

    const addButton = getByText("Add applicant");
    await fireEvent.click(addButton);

    const applicantsList = getByTestId("applicants-list");
    expect(applicantsList.children.length).toBe(1);

    const submitButton = getByText("Submit");
    expect(submitButton.disabled).toBe(false);
  });
});
