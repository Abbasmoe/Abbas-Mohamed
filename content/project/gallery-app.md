---
title: 'Gallery App – Vue 2 + Axios + JSON Server'
description: 'A lightweight image gallery app built with Vue 2 and Axios, using JSON Server as a fake backend for uploading and managing image data.'
date: 09.21.2021
tags: [vue, vue2, axios, json-server, image-upload, frontend]
image: gallery-app-screenshot.webp
imageAlt: Galerie App Logo
---

### 📸 Gallery App

This is a personal project I built to explore and reinforce concepts around **Vue 2**, **API integration with Axios**, and using **JSON Server** to simulate a backend. It's a minimal but functional **image gallery application**, ideal for learning how to build CRUD-based frontends without setting up a full backend stack.

The core idea was to create a clean, responsive interface that lets users upload images, view them in a gallery layout, and manage them easily. It’s also a good example of working with legacy frontend tech that’s still widely used in older codebases.

### 🔧 Technologies Used

- **Vue 2** – JavaScript framework for building UI
- **Axios** – For handling all HTTP requests to the mock API
- **JSON Server** – Lightweight mock REST API server using local JSON files
- **SCSS/CSS** – For simple, clean styling

---

### 🧠 Why I Built It

While modern Vue 3 and frameworks like Nuxt 3 dominate the current frontend landscape, Vue 2 is still maintained and present in many real-world projects. I wanted a simple environment to practice:

- Making **API calls** with Axios
- Handling **form submissions and file uploads**
- Simulating **data persistence** with a fake backend
- Structuring a clean, **component-based SPA**

The result is this Gallery App — quick to spin up, easy to extend, and great for prototyping.

---

### 🚀 Getting Started

To start the project locally:

```bash
npm install
npm run serve
```

In a separate terminal, run:

```bash
json-server --watch db.json
```

This will start the fake backend at `http://localhost:3000`.

---

✅ Features:

- Upload and list images
- Basic gallery layout
- Uses mock data with JSON Server
- Built as a single-page app (SPA)

This project is useful for learning how frontend apps interact with APIs and how local JSON servers can simulate a full backend for testing.

> Want to try it or contribute? [Check it out on GitHub](https://github.com/Abbasmoe/gallery-app)
