

## Blog Application

### 1. Prerequisites
Ensure the following are set up before testing:
- Backend server is running on `http://localhost:5000`.
- Frontend server is running on `http://localhost:3000`.
- The database `blog_app` is set up and seeded with sample data (optional).

---
## How to Run the Application

### Backend Setup

1. **Prerequisites**  
   Ensure you have the following installed:
   - Node.js (v16 or above)
   - MySQL database (you can use tools like MySQL Workbench for easier management)

2. **Steps to Set Up the Backend**  
   1. Clone the repository or download the backend code.  
   2. Open a terminal and navigate to the `backend` directory:
      ```bash
      cd backend
      ```
   3. Install dependencies:
      ```bash
      npm install
      ```
   4. Set up the database:
      - Create a database named `blog_app` in MySQL.
      - Update the database credentials in the `.env` file located in the `backend` directory:
        ```env
        DB_NAME=blog_app
        DB_USER=<your_username>
        DB_PASSWORD=<your_password>
        DB_HOST=localhost
        DB_PORT=3306
        ```
   5. Run database migrations to set up the tables:
      ```bash
      npx sequelize db:migrate
      ```
   6. Start the backend server:
      ```bash
      npm run dev
      ```
   7. The backend will be running at `http://localhost:5000`.

---

### Frontend Setup

1. **Prerequisites**  
   Ensure you have the following installed:
   - Node.js (v16 or above)

2. **Steps to Set Up the Frontend**  
   1. Clone the repository or download the frontend code.  
   2. Open a terminal and navigate to the `frontend` directory:
      ```bash
      cd frontend
      ```
   3. Install dependencies:
      ```bash
      npm install
      ```
   4. Update the backend API URL:
      - Open `next.config.js` in the `frontend` directory and set the correct backend API URL (if different from default):
        ```javascript
        module.exports = {
          env: {
            BACKEND_API_URL: "http://localhost:5000",
          },
        };
        ```
   5. Start the frontend development server:
      ```bash
      npm run dev
      ```
   6. The frontend will be running at `http://localhost:3000`.

---
