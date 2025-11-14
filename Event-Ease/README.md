# EventEase – Full Stack Event Booking Platform

A full‑stack event booking platform built using **React**, **Tailwind CSS**, **Redux**, **Node.js**, **Express**, and **JWT authentication**. The application allows users to browse and book events, while admins can manage events and view attendees.

---

## 🚀 Features

### 👤 Public User

* View marketing landing page
* Browse all events
* Filter events by category, location, and date range
* Register / Login

### 🔐 Logged‑in User

* Book up to **2 seats** per event
* View bookings in **list** or **calendar** view
* Cancel bookings (before event start)
* See booking confirmation & status



---

## 🧠 Core Logic

### 📌 Booking Rules

* Maximum **2 seats per user per event**
* Prevent booking when event is full
* Custom Event IDs: `EVT-[MMM][YYYY]-[RANDOM3]`

  * Example: `EVT-AUG2025-X4T`

### 📅 Event Status Logic

* **Upcoming:** Date is in the future
* **Ongoing:** Event date is today
* **Completed:** Event date has passed

### 🔒 Authentication

* JWT‑based login / register
* Role‑based access control
* Protected routes for users


### 📆 Date Format

* Standard format across frontend & backend: **DD-MMM-YYYY** (e.g., `30-Jul-2025`)

---

## 🛠 Tech Stack

### Frontend

* **React**
* **Tailwind CSS**
* **Redux Toolkit**
* React Router

### Backend

* **Node.js + Express**
* MongoDB  
* JWT Authentication

---

## 📂 Folder Structure (Suggested)

```
root/
  server/
    src/
      controllers/
      models/
        Booking.js
        User.js
      routes/
        auth.js
        booking.js
        event.js
      middleware/
      utils/
    index.js

  client/
    src/
      components/
        EventCard.jsx
        Navbar.jsx
      pages/
        Bookings.jsx
        Events.jsx
        Home.jsx
        Login.jsx
        Register.jsx
      features/
        auth/
        bookings/
        events/
      redux/
      hooks/
      utils/
    index.jsx
```

---

## ▶️ Running the Project

### 1. Clone the Repository

```
git clone https://github.com/dilshad383/Event-Ease.git
cd Event-Ease
```

### 2. Backend Setup

```
cd backend
npm install
```

Create `.env` file:

```
PORT=5000
MONGO_URI=your_db_url
JWT_SECRET=your_secret
```

Run the server:

```
npm start
```

### 3. Frontend Setup

```
cd frontend
npm install
npm start
```

---


Include endpoints for:

* Auth
* Events
* Bookings

---



---

## 🧪 Testing

Add unit or integration tests for:

* Auth
* Booking logic

---

## 📌 Notes

This project was developed as part of the **Koders Full‑Stack Developer Assignment**.

---

## 📧 Contact

For queries, reach out to **[pzanpk123@gmail.com](mailto:pzanpk123@gmail.com)**
