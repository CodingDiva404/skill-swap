# 🤝 Skill Swap

Skill Swap is a matchmaking-based web application that connects users who want to **teach a skill** with users who want to **learn a skill**.  
Think of it as **Tinder for skills** — swipe, match, and collaborate 🚀

---

## ✨ Features

- 🔁 **Skill Matching Engine**  
  Matches users based on:
  - Skill you can teach
  - Skill you want to learn

- 💖 **Tinder-like Match Experience**
  - Swipe-style UI for matches
  - Visual feedback on successful matches
  - Sound / notification on new match (optional enhancement)

- 🧑‍🤝‍🧑 **Peer-to-Peer Connection**
  - Users can connect via meeting links (Jitsi / Google Meet based)

- 🌍 **Multi-language Ready (i18n)**
  - Easily extendable translation support

- 💾 **Local Persistence**
  - User profiles stored using `localStorage`
  - No backend required for MVP

- 🌙 **Modern UI**
  - Dark + neon-inspired theme
  - Responsive layout

---

## 🛠️ Tech Stack

- **Frontend:** React + Vite
- **Styling:** CSS (custom, lightweight)
- **State Management:** React Hooks
- **Build Tool:** Vite
- **Deployment:** Netlify

---

## 📂 Project Structure

```
skill-swap/
│
├── public/
│ ├── logo.svg
│ └── _redirects
│
├── src/
│ ├── Components/
│ │ ├── Header.jsx
│ │ ├── ProfileForm.jsx
│ │ ├── MatchList.jsx
│ │
│ ├── Data/
│ │ └── Skills.js
│ │
│ ├── i18n/
│ │ └── index.js
│ │
│ ├── App.jsx
│ ├── main.jsx
│ └── App.css
│
├── index.html
├── package.json
├── vite.config.js
└── README.md
```


---

## 🚀 Getting Started (Local Setup)

Follow these steps to run the project on your local machine.

---

### ✅ Prerequisites

Make sure you have:
- **Node.js** (v18+ recommended)
- **npm** (comes with Node.js)

Check versions:
```bash
node -v
npm -v
```

### 📥 Clone the Repository
```bash
git clone https://github.com/your-username/skill-swap.git
cd skill-swap
```

💡 Future Enhancements

🔐 Authentication (Firebase / Auth0)

🗄️ Backend (Node + DB)

💬 In-app chat

🔔 Real-time notifications

🎥 Integrated video calls
### 📦 Install Dependencies
```bash
npm install
```
### ▶️ Run the App Locally
``` bash
npm run dev
```

## 💡 Future Enhancements

- 🔐 Authentication (Firebase / Auth0)
- 🗄️ Backend (Node + Database)
- 💬 In-app chat
- 🔔 Real-time notifications
- 🎥 Integrated video calls

## 🧑‍💻 Author

Built with ❤️ by Shraddha G
Lingo Hackathon Project | Skill-based Networking
