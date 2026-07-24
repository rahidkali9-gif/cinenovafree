# CineNova Free - Professional Streaming Platform

🎬 Complete production-ready streaming platform for movies, series, music, podcasts, and more.

## 🚀 Features

✅ Movies, Web Series, TV Shows, Short Films
✅ Music, Songs, Albums, Podcasts, Ringtones
✅ Google OAuth + Email Authentication
✅ Email OTP Verification (Resend API)
✅ Modern Video Player (360p-4K)
✅ Multiple Audio Tracks & Subtitles
✅ Cast & Crew Management
✅ Comments, Likes, Share
✅ Search, Filter, Categories
✅ Admin Panel (Complete Management)
✅ User Profiles & Watch History
✅ Analytics Dashboard
✅ Mobile-First Responsive Design
✅ PWA Support
✅ 4K Device Compatible

## 🛠️ Tech Stack

- **Frontend:** Next.js 14, React 18, TypeScript, Tailwind CSS
- **Backend:** Node.js, Express, PostgreSQL (Supabase)
- **Admin:** Next.js 14, React 18, Recharts
- **Authentication:** JWT, Google OAuth, Resend OTP
- **Deployment:** Vercel (Frontend/Admin), Render (Backend)

## 📁 Project Structure

```
cinenovafree/
├── backend/
│   ├── src/
│   ├── package.json
│   ├── tsconfig.json
│   └── .env.example
├── frontend/
│   ├── app/
│   ├── components/
│   ├── package.json
│   └── .env.example
├── admin-panel/
│   ├── app/
│   ├── components/
│   ├── package.json
│   └── .env.example
└── docs/
    ├── API_DOCUMENTATION.md
    ├── DATABASE_SCHEMA.md
    └── DEPLOYMENT.md
```

## 🔧 Installation

```bash
# Clone repository
git clone https://github.com/rahidkali9-gif/cinenovafree.git
cd cinenovafree

# Backend
cd backend
npm install
cp .env.example .env.local
# Update .env.local with your credentials
npm run dev

# Frontend (new terminal)
cd frontend
npm install
cp .env.example .env.local
npm run dev

# Admin Panel (new terminal)
cd admin-panel
npm install
cp .env.example .env.local
npm run dev
```

## 📍 URLs

- Frontend: http://localhost:3000
- Admin Panel: http://localhost:3001
- Backend API: http://localhost:5000/api

## 👨‍💼 Admin

Email: arahid466@gmail.com

## 📚 Documentation

- [API Documentation](docs/API_DOCUMENTATION.md)
- [Database Schema](docs/DATABASE_SCHEMA.md)
- [Deployment Guide](docs/DEPLOYMENT.md)
