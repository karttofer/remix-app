# Exam (https://remix.run/)

## Instructions

1. This exam is designed to assess your proficiency in using the Remix web framework for building web applications.
2. You have 8 hours to complete the exam.
3. You are allowed to use any online resources, documentation, or tutorials related to Remix during the exam.
4. Make sure to adhere to best practices and follow Remix conventions when completing the tasks.

## Tasks

### Task 1: Setup and Configuration (20 points)

- Fork this project.
- Configure the project to use TypeScript.
- Set up a basic file structure adhering to Remix conventions.
- Set up a public git repository where you will push your code as you work on the tasks and later submit it.

### Task 2: Routing and Navigation (20 points)

- Create two routes:
    - Route 1: Path "/home" should render a component named "Home".
    - Route 2: Path "/people" should render a  dynamic component named "By People Name". Do first 10.
- Implement navigation links to switch between the "Home" and "People" pages.

### Task 3: Data Fetching (30 points)

- Create a data fetching function named "fetchPosts" in the "Home" component.
- Use the `useEffect` hook to fetch data from the endpoint "https://swapi.dev/people" when the component mounts.
- Display the fetched data as a list on the "Home" page that will go to each "People" page when clicked.

### Task 4: Forms and Form Submission (30 points)

- Create a form component named "ContactForm" with fields for "name", "email", and "message".
- Implement form validation ensuring all fields are required.
- Upon form submission, console log the form data.
- Display a success message if everything is valid.

### Task 5: Styling (10 points)

- Use Tailwind CSS to style the application components and layout.

### Bonus Task: Authentication (Extra 20 points)

- Implement authentication using Remix's built-in session management.
- Create a login page with email and password fields.
- Upon successful login, store the user session and redirect them to the "Home" page.

## Submission

- Once completed, share your public repository via email back go goran@bemeir.com.

**Note:** Ensure your code is clean, well-commented, and follows best practices. Good luck!
