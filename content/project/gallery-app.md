---
title: 'Gallery App – Vue 2 + Axios + JSON Server'
description: 'A lightweight image gallery app built with Vue 2 and Axios, using JSON Server as a fake backend for uploading and managing image data.'
date: 09.21.2021
tags: [vue, vue2, axios, json-server, image-upload, frontend]
image: https://raw.githubusercontent.com/Abbasmoe/gallery-app/refs/heads/master/src/assets/Galerie-Logo.png
imageAlt: Galerie App Logo
---

## 📸 Gallery App

This is a personal project I've been working on to explore **legacy Vue 2 development** with **Axios** and **JSON Server** as a mock API backend.

The app allows users to upload images and manage gallery entries stored in a JSON file, simulating a real database. It’s a great starting point for experimenting with frontend CRUD operations without needing a full backend setup.

### 🔧 Technologies Used

- Vue 2
- Axios
- JSON Server
- SCSS/CSS

### 🚀 Getting Started

To start the project locally:

```bash
npm install
npm run serve
````

In a separate terminal, run:

```bash
json-server --watch db.json
```

This will start the fake backend at `http://localhost:3000`.

---

✅ Features:

* Upload and list images
* Basic gallery layout
* Uses mock data with JSON Server
* Built as a single-page app (SPA)

This project is useful for learning how frontend apps interact with APIs and how local JSON servers can simulate a full backend for testing.

> Want to try it or contribute? [Check it out on GitHub](https://github.com/Abbasmoe/gallery-app)
