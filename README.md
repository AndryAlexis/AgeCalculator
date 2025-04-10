# Age Calculator

This project is an **Angular-based Age Calculator** application that allows users to input their birth date and calculates the exact difference in years, months, and days between the provided date and the current date. The application is deployed using **GitHub Pages**.

---

![Age Calculator Screenshot](./src/assets/images/preview.jpg)

---

## Features

- **Reactive Forms**: The application uses Angular's `ReactiveFormsModule` for form validation and user input handling.
- **Custom Components**:
  - `app-form`: Handles user input for the date (day, month, year) and emits the calculated result.
  - `app-result`: Displays the calculated age difference.
  - `app-separator`: Provides a visual separator with a button for form submission.
- **Date Validation**:
  - Ensures valid dates using the `date-fns` library.
  - Prevents invalid inputs like `31/02/2025` or future dates.
- **Responsive Design**:
  - The application is styled using SCSS and includes responsive layouts for smaller screens.
- **GitHub Pages Deployment**:
  - The application is deployed and accessible via GitHub Pages.

---

## Project Structure

### Components

1. **`app-form`**:
   - Handles user input for day, month, and year.
   - Validates the input using Angular's `FormControl` and `Validators`.
   - Emits the calculated age difference to the parent component via `@Output`.

   **Key Features**:
   - Validates user input (e.g., ensures days are between 1-31, months are between 1-12, and years are valid).
   - Uses the `date-fns` library to validate dates and calculate differences.

2. **`app-result`**:
   - Displays the calculated age difference (years, months, days).
   - Accepts the result as an `@Input` from the parent component.

3. **`app-separator`**:
   - Provides a visual separator with a button for submitting the form.
   - Includes hover and focus styles for better user experience.

---

### SCSS Styling

- **Global Styles**:
  - The application uses SCSS for styling, ensuring modular and maintainable styles.
- **Responsive Design**:
  - Media queries are used to adjust layouts for smaller screens (e.g., `@media (width <= 46.875rem)`).
- **Custom Styling**:
  - Components like `app-separator` and `app-form` have custom styles for buttons, inputs, and layout.

---

### Key Libraries and Tools

1. **Angular**:
   - Framework for building the application.
   - Uses standalone components for modularity.

2. **date-fns**:
   - Used for date validation and calculations.
   - Functions like `isExists` ensure valid dates, and `differenceInCalendarYears`, `differenceInCalendarMonths`, and `differenceInDays` calculate the exact age difference.

3. **Angular CLI**:
   - Used for scaffolding, building, and deploying the application.

4. **GitHub Pages**:
   - The application is deployed using the `angular-cli-ghpages` package.

---

## How to Run the Project Locally

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/<username>/<repository-name>.git
   cd <repository-name>
   ```

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
