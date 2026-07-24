# CineNova Free - Professional Streaming Platform

🎬 **CineNova Free** - Complete production-ready streaming platform for movies, series, music, podcasts, and more.

## 🚀 Quick Start

### Prerequisites
- Node.js 18+
- npm or yarn
- Supabase Account
- Resend Email API Key

### Installation

```bash
# Clone the repository
git clone https://github.com/rahidkali9-gif/cinenovafree.git
cd cinenovafree

# Backend
cd backend
npm install
cp .env.example .env.local
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

## 📋 Features

### User Features
✅ Google OAuth + Email/Password Authentication
✅ Email OTP Verification (Resend API)
✅ User Profile Management
✅ Watch History & Favorites
✅ Modern Video/Audio Player (360p-4K)
✅ Search, Filter, Categories
✅ Comments, Likes, Share
✅ Mobile-first Responsive Design
✅ PWA Support
✅ 4K Device Compatible

### Admin Panel Features
✅ **Content Management:**
- Movies, Web Series, TV Shows
- Short Films, Videos, Trailers
- MP3 Songs, Music Albums
- Audio Files, Podcasts, Ringtones

✅ **Upload & Management:**
- Posters, Banners, Backdrops, Screenshots
- Cast & Crew Management
- Multiple Quality Support (360p-4K)
- Multiple Audio Tracks & Subtitles
- Streaming & Download Links
- SEO Settings

✅ **Content Control:**
- Featured & Trending Content
- Schedule Publishing
- Categories, Genres, Languages
- Tags & Release Dates

✅ **User Management:**
- View all users
- Ban/Delete users
- User analytics

✅ **Website Management:**
- Logo, Theme, Colors
- Menus, Footer, Pages
- Email Settings
- Social Media Links
- Notifications

✅ **Analytics:**
- Dashboard statistics
- User engagement
- Content performance

## 🛠️ Tech Stack

**Frontend:**
- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- Zustand (State Management)
- Axios (API Client)

**Backend:**
- Node.js
- Express.js
- PostgreSQL (Supabase)
- JWT Authentication
- Resend Email API

**Admin Panel:**
- Next.js 14
- React 18
- React Hook Form
- Recharts (Analytics)
- TypeScript

## 📁 Project Structure

```
cinenovafree/
├── backend/                    # Node.js API Server
│   ├── src/
│   │   ├── server.ts          # Main server file
│   │   ├── models/            # Database models
│   │   ├── routes/            # API routes
│   │   ├── controllers/       # Business logic
│   │   ├── middleware/        # Auth, validation
│   │   ├── utils/             # Utilities
│   │   └── config/            # Configuration
│   ├── .env.example
│   ├── tsconfig.json
│   └── package.json
│
├── frontend/                   # Next.js User Website
│   ├── app/                   # App router
│   ├── components/            # Reusable components
│   ├── lib/                   # Utilities
│   ├── public/                # Static files
│   ├── .env.example
│   └── package.json
│
├── admin-panel/               # Next.js Admin Dashboard
│   ├── app/                   # Admin routes
│   ├── components/            # Admin components
│   ├── lib/                   # Utilities
│   ├── .env.example
│   └── package.json
│
└── docs/
    ├── DATABASE_SCHEMA.md     # Database schema
    ├── API_DOCUMENTATION.md   # API docs
    └── DEPLOYMENT.md          # Deployment guide
```

## 🔐 Security

✅ JWT Authentication
✅ Password Encryption (bcryptjs)
✅ Rate Limiting
✅ CORS Protection
✅ SQL Injection Prevention
✅ XSS Protection
✅ CSRF Protection
✅ Secure Headers (Helmet)
✅ Audit Logs

## 📱 Supported Devices

✅ iOS & Android Phones
✅ Tablets & iPads
✅ Laptops & Desktops
✅ Smart TVs
✅ Chromebooks
✅ All Modern Browsers

## 📊 Browser Support

✅ Chrome/Chromium
✅ Safari
✅ Firefox
✅ Edge
✅ Opera
✅ Brave

## 📧 Admin

**Admin Email:** arahid466@gmail.com

## 📚 Documentation

- [API Documentation](docs/API_DOCUMENTATION.md)
- [Database Schema](docs/DATABASE_SCHEMA.md)
- [Deployment Guide](docs/DEPLOYMENT.md)

## 📄 License

Private - All rights reserved

## 📞 Support

For issues and support, contact: arahid466@gmail.com
