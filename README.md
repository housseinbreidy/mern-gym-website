# MERN Gym Website

A full MERN gym website with:

- React frontend
- Node.js / Express backend
- MongoDB database using Mongoose
- JWT authentication
- Login / Sign up pages
- Home page
- Services page
- Reviews page connected to MongoDB
- About us page
- Protected review creation for logged-in users

---

## 1. Requirements

Install these first:

- Node.js
- MongoDB locally, or use MongoDB Atlas
- VS Code

---

## 2. Open the project

Open the folder `mern-gym-website` in VS Code.

---

## 3. Backend setup

Go to the backend folder:

```bash
cd backend
npm install
```

Create a `.env` file inside `backend` by copying `.env.example`:

```env
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/gym_website
JWT_SECRET=change_this_secret_key
CLIENT_URL=http://localhost:5173
```

If you use MongoDB Atlas, replace `MONGO_URI` with your Atlas connection string.

Start backend:

```bash
npm run dev
```

Backend runs on:

```txt
http://localhost:5000
```

---

## 4. Frontend setup

Open a new terminal:

```bash
cd frontend
npm install
npm run dev
```

Frontend runs on:

```txt
http://localhost:5173
```

---

## 5. Run both from root

After installing dependencies in both folders, you can also run both together from the root folder:

```bash
npm install
npm run install-all
npm run dev
```

---

## 6. Main features

### Auth
Users can create an account, log in, and log out.

### Reviews
Everyone can see reviews. Logged-in users can submit reviews.

### MongoDB collections
The app creates:

- `users`
- `reviews`

---

## 7. Important

Do not commit your real `.env` file to GitHub.

Use `.env.example` as the template.
