# FLK it over Technical test

To run:

```
npm install
npm start
```

## Considerations

I've made some assumptions/interpretations where necessary. I think they're fairly benign so have opted not to reach out for clarification, I'll explain reasoning below.

**Requirements interpretation**

_The form will allow the user to add and remove applicants, however, there must be at least one applicant._

I have interpreted this to mean the form is not submittable unless there is at least one applicant (i.e. it's perfectly fine to delete all applicants, it will just disable submission).

**Framework choice**

As the choice of framework was given I've decided to use Svelte, primarily because I've been working with Svelte daily for the last ~1.5 years so I'm fairly comfortable with it, but also because I suspect you'll get a lot of React applications - so hopefully this will be something a little different for you 😊

**Use of Tailwind**

I've opted to use Tailwind for improved Developer Experience, I'm assuming this is okay as it's essentially just shorthand for CSS.

**Didn't do/Could do differently**

For a production app, I'd prefer to:

- Improve validation messages for form fields.
- Added applicants aren't editable (outside of the 'primary applicant' checkbox) - this is to prevent clearing details from already added applicants. In reality I'd either handle that scenario properly (ensure the submission button is disabled and an appropriate error is displayed) or display added applicants in a card or something similar (i.e without inputs).
- Improve feedback on why the submit button is disabled (maybe a tooltip)
- Improve UI look & feel (I've tried to balance functionality and usability against my own time constraints)
- Unit testing - I've added unit testing for the applicants store and Applicants.svelte (covering basic functionality). As I'm a bit time constrained I hope serves to demonstrate how I would approach unit testing such an application.
- Minor, but I'm not super happy with the repository structure. Namely the `components` folder - I'd typically organize that better.
