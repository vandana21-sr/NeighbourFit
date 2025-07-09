# 🌆 NeighborFit

**NeighborFit** is a full-stack web application that helps users find the most compatible neighborhoods based on their lifestyle preferences. It uses real-world data, algorithmic matching, and user-driven filters to generate smart neighborhood recommendations.

---

## 📌 Table of Contents

- [About the Project](#about-the-project)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [How It Works](#how-it-works)
- [Project Structure](#project-structure)
- [Data Sources](#data-sources)
- [Screenshots](#screenshots)
- [Contributing](#contributing)
- [License](#license)

---

## 📖 About the Project

Many people struggle to choose a neighborhood that suits their lifestyle—whether it's safety, affordability, walkability, or nearby amenities. **NeighborFit** solves this by analyzing real neighborhood data and computing a personalized "fit score" for each user.

This project was built under resource constraints:
- 💸 Zero budget (uses only free APIs and tools)
- ⏱️ 2-week timeline
- 🧪 Limited data access (creatively sourced)

---

## ✨ Features

- 🔍 Match users to neighborhoods using lifestyle preferences
- 📊 Algorithm calculates and ranks compatibility scores
- 📡 Real data integration (cost, safety, walkability, etc.)
- 💬 User-friendly React frontend
- 🔧 Express backend API for processing and serving data
- 🧪 Handles edge cases and incomplete data gracefully

---

## ⚙️ Tech Stack

**Frontend:**
- React
- Tailwind CSS / custom styles

**Backend:**
- Node.js
- Express
- CORS / JSON handling

**Other:**
- MongoDB (optional for full data)
- Git / GitHub
- Open APIs (WalkScore, Numbeo, etc.)

---

## 🚀 Getting Started

### 🖥️ Clone the Repository

```bash
git clone https://github.com/yourusername/NeighbourFit.git
cd NeighbourFit
📦 Install Dependencies
# For backend
cd backend
npm install

# For frontend
cd ../frontend
npm install
▶️ Run the App Locally
# Start backend server (port 3000)
cd backend
node index.js

# Start frontend app (port 3001 if conflict)
cd ../frontend
npm start
🧠 How It Works
User inputs preferences (e.g., high safety, low cost)

Backend fetches data from datasets/APIs

Algorithm normalizes scores and applies weights

Neighborhoods are ranked and top results displayed
function computeFitScore(userPrefs, data) {
  let score = 0;
  const total = Object.values(userPrefs).reduce((a, b) => a + b, 0);
  for (let key in userPrefs) {
    score += userPrefs[key] * (data[key] || 0);
  }
  return score / total;
}
🗂️ Project Structure
NeighbourFit/
├── frontend/       # React app
│   ├── src/
│   └── public/
├── backend/        # Express API server
│   └── index.js
├── README.md
└── .gitignore
🧾 Data Sources
OpenStreetMap

Numbeo

Walk Score API

[Local open data portals] (e.g., city crime or school data)

🤝 Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you'd like to change.

📄 License
This project is open source under the MIT License.

🙋‍♀️ Author
Vandana Srivastava
GitHub

---
