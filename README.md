# 🗨️ Connexus — Real-Time Chat & Social Platform  

![Python](https://img.shields.io/badge/Python-3.10+-blue.svg)
![Django](https://img.shields.io/badge/Django-5.0-green.svg)
![React](https://img.shields.io/badge/React-18.0-blue.svg)
![Database](https://img.shields.io/badge/Database-MySQL-lightblue.svg).

---

### 💬 Overview

**Connexus** is a **real-time communication and social networking platform** built using  
**Django Channels**, **WebRTC**, **React**, **MySQL**, and **AES Encryption**.  
It offers **instant messaging, group chats, video calls**, and a **social feed**, ensuring both performance and security.

---

## 🚀 Tech Stack

### 🧠 Backend
- **Django** — core web framework  
- **Django Channels** — real-time WebSocket communication  
- **Django REST Framework (DRF)** — API management  
- **MySQL** — structured and scalable data storage  
- **AES Encryption** — ensures secure and private messaging  
- **SMTP Protocol** — sends welcome emails to new users  

### 💻 Frontend
- **React.js** — responsive and dynamic user interface  
- **WebRTC** — peer-to-peer video calls  
- **MDB React UI Kit** — elegant UI components and layout  

---

## ✨ Features

| Feature | Description |
|----------|-------------|
| 💬 **Real-Time Messaging** | Chat instantly with users via WebSockets |
| 🎥 **Video Calls** | Peer-to-peer video calls using WebRTC |
| 👥 **Group & Private Chats** | One-on-one or group messaging support |
| 🖼️ **Social Feed** | Post, like, comment, and delete posts |
| 🔐 **End-to-End Encryption** | AES-based secure message exchange |
| 📧 **Welcome Emails** | Automated SMTP emails to new users |
| 🧩 **Secure Auth System** | Token & session-based authentication |
| ⚙️ **Django REST Framework APIs** | Structured, RESTful backend endpoints |
| 🪄 **Modern UI** | Clean React-based responsive interface |

---

## ⚙️ Installation & Setup

### 🧩 Clone the Repository
    ```bash
    git clone --recursive https://github.com/fadingreality1/connexus.git


### 🐍 Backend Setup (Django)
    #switch to virtual env

    cd connexus/server
    pip install -r requirements.txt
    python manage.py migrate
    python manage.py runserver 7890

### ⚛️ Frontend Setup (React)

    cd ..
    cd client
    npm install
    npm start
