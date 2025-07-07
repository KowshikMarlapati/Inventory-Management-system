# React Inventory Management System

This is a full-stack Inventory Management System built using the **MERN stack (MongoDB, Express.js, React.js, Node.js)**. 
The application allows users to manage products, track purchases and sales, and organize store-related inventory with a clean and responsive interface.

---

## 📌 Features

- User Registration and Login
- Product Management (Create, Read, Update, Delete)
- Store Management
- Sales and Purchase Tracking
- Responsive Design using Tailwind CSS
- RESTful API integration between frontend and backend
- MongoDB schema-based data storage

---

## 🚀 Tech Stack

| Layer        | Technology                 |
|--------------|----------------------------|
| Frontend     | React.js, Tailwind CSS     |
| Backend      | Node.js, Express.js        |
| Database     | MongoDB (Mongoose ODM)     |
| Authentication | Basic credential matching |

---

## 📁 Folder Structure

```bash
Inventory-Management-System/
├── Backend/
│   ├── models/           # Mongoose models (User, Product, Store, etc.)
│   ├── router/           # API route definitions (product, store, purchase, sales)
│   └── index.js          # Express server entry point
│
├── Frontend/
│   ├── public/           # Public assets
│   └── src/
│       ├── components/   # Reusable UI components
│       ├── pages/        # Screens like login, dashboard
│       └── App.js        # Main React app
│
├── .env                  # Environment variables (MongoDB URI, etc.)
├── .gitignore            # Git ignore rules
└── README.md             # Project documentation




git clone https://github.com/KowshikMarlapati/Inventory-Management-system.git
cd Inventory-Management-system


cd Backend
npm install


cd ../Frontend
npm install


```

connect to your local mongoDB or cloud cluster after creating a environment variable

## 🌐 Live Website

[🔗 Click here to view the live demo](https://inventory-management-rosy.vercel.app/)

