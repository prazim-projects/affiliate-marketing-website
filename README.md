# Affiliate Marketing Website

**Tech Stack:**

* Frontend: Vue 3 (Composition API)
* Backend: Django (Graphene)
* Database: MySQL

![GitHub last commit](https://img.shields.io/github/last-commit/prazim-projects/affiliate-marketing-website)
![GitHub repo size](https://img.shields.io/github/repo-size/prazim-projects/affiliate-marketing-website)
![GitHub issues](https://img.shields.io/github/issues/prazim-projects/affiliate-marketing-website)

## 🚀 Getting Started

Follow these steps to run the project locally:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/prazim-projects/affiliate-marketing-website
   cd affiliate-marketing-website
   ```

2. **Set up the Python environment:**

   ```bash
   pipenv sync
   pipenv shell
   ```

3. **Configure the database:**

   * Update your **`settings.py`** file with your MySQL username and password.

4. **Start MySQL server and create the database.**

5. **Run Django migrations:**

   ```bash
   cd backend
   python manage.py makemigrations
   python manage.py migrate
   ```

6. **Start the Django development server:**

   ```bash
   python manage.py runserver
   ```

7. **Start the Vue frontend development server:**

   ```bash
   cd frontend
   npm install
   npm run dev
   ```

   ![Homepage](screenshots/vue-homepage.png)

## 🧪 GraphQL API

Interact with the API at:
[http://localhost:8000/graphql](http://localhost:8000/graphql)
Supports both **queries** and **mutations**.
![GraphQL Playground](screenshots/graphql_mutations.png)

## 🛠️ In Progress

* JWT authentication with `graphql_jwt`
* State management with `Pinia`
* Use of environment variables for configuration

## 📸 Screenshots

* `vue-homepage.png` – Vue app homepage
* `dynamic-graphql-query.png` – affiliate listing posts
* `graphql_mutations.png` – GraphQL playground (queries and mutations)





![Graphql_Query](screenshots/dynamic-graphql-query.png)



Feel free to contribute or open issues as the project evolves!
