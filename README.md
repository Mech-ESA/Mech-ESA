# MechEsa Club Website

A modern, responsive website for the MechEsa Club - the premier mechanical engineering student association at IIT Indore.

## 🚀 Features

- **Modern Design**: Beautiful, responsive design with smooth animations and micro-interactions
- **Event Management**: Comprehensive event listing with registration capabilities
- **Gallery**: Interactive photo gallery with category filtering
- **Team Showcase**: Professional team member profiles and organizational structure
- **Contact System**: Contact form with validation and automated responses
- **Newsletter**: Email subscription system for updates and announcements
- **Mobile Responsive**: Optimized for all device sizes and screen resolutions

## 🛠️ Tech Stack

### Frontend
- **Next.js 13** - React framework with App Router
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **Shadcn/ui** - Modern UI component library
- **Lucide React** - Beautiful icons

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web application framework
- **MongoDB** - NoSQL database (optional)
- **JWT** - Authentication tokens
- **Nodemailer** - Email sending
- **Express Validator** - Input validation

## 📁 Project Structure

```
mechesa-club-website/
├── public/                         # Static assets (images, icons, etc.)
│   ├── favicon.ico
│   └── assets/
│       ├── gallery/
│       ├── events/
│       └── team/
├── src/
│   ├── components/                 # Reusable components
│   │   ├── ui/                     # UI components (buttons, cards, etc.)
│   │   ├── Hero.jsx                # Hero section
│   │   ├── Navbar.jsx              # Navigation bar
│   │   ├── Footer.jsx              # Footer
│   │   └── ...                     # Other reusable components
│   │
│   ├── pages/                      # Page components (replaces Next.js app directory)
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Events.jsx
│   │   ├── Gallery.jsx
│   │   ├── Team.jsx
│   │   └── Contact.jsx
│   │
│   ├── data/                       # Static data (JSON or JS exports)
│   │   ├── events.js
│   │   ├── gallery.js
│   │   └── team.js
│   │
│   ├── lib/                        # Utility/helper functions
│   │   └── utils.js
│   │
│   ├── backend/                    # Express backend (optional if using full-stack)
│   │   ├── routes/
│   │   ├── models/
│   │   ├── middleware/
│   │   └── server.js
│   │
│   ├── styles/                     # CSS and global styles
│   │   ├── globals.css
│   │   └── variables.css
│   │
│   ├── App.jsx                     # Main React component
│   ├── main.jsx                    # Entry point (Vite) / index.js (CRA)
│   └── router.jsx                  # React Router configuration
│
├── package.json
├── vite.config.js / webpack.config.js
├── README.md
└── .gitignore
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ and npm
- MongoDB (optional, for database features)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/mechesa-club-website.git
   cd mechesa-club-website
   ```

2. **Install frontend dependencies**
   ```bash
   npm install
   ```

3. **Install backend dependencies**
   ```bash
   cd backend
   npm install
   cd ..
   ```

4. **Set up environment variables**
   ```bash
   # Frontend (.env.local)
   NEXT_PUBLIC_API_URL=http://localhost:5000/api
   
   # Backend (.env)
   cp backend/.env.example backend/.env
   # Edit backend/.env with your configuration
   ```

5. **Start the development servers**
   
   **Frontend (Terminal 1):**
   ```bash
   npm run dev
   ```
   
   **Backend (Terminal 2):**
   ```bash
   cd backend
   npm run dev
   ```

6. **Open your browser**
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:5000

## 📱 Pages

- **Home** (`/`) - Hero section, featured events, success stories, company logos
- **About** (`/about`) - Club mission, vision, values, and history
- **Events** (`/events`) - Upcoming and past events with registration
- **Gallery** (`/gallery`) - Photo gallery with category filtering
- **Team** (`/team`) - Leadership, core team, and volunteers
- **Contact** (`/contact`) - Contact form and club information

## 🎨 Design Features

- **Gradient Backgrounds**: Beautiful gradient overlays and backgrounds
- **Smooth Animations**: Framer Motion powered animations and transitions
- **Responsive Design**: Mobile-first approach with breakpoints for all devices
- **Modern Typography**: Clean, readable fonts with proper hierarchy
- **Interactive Elements**: Hover effects, micro-interactions, and smooth scrolling
- **Color System**: Consistent color palette with proper contrast ratios

## 🔧 API Endpoints

### Events
- `GET /api/events` - Get all events
- `GET /api/events/:id` - Get specific event
- `POST /api/events/:id/register` - Register for event

### Gallery
- `GET /api/gallery` - Get gallery items
- `GET /api/gallery/categories` - Get categories

### Team
- `GET /api/team` - Get team members
- `GET /api/team/:id` - Get specific member

### Contact
- `POST /api/contact` - Submit contact form
- `GET /api/contact/info` - Get contact information

### Newsletter
- `POST /api/newsletter/subscribe` - Subscribe to newsletter
- `POST /api/newsletter/unsubscribe` - Unsubscribe from newsletter

## 🚀 Deployment

### Frontend (Vercel)
1. Push code to GitHub
2. Connect repository to Vercel
3. Set environment variables
4. Deploy automatically

### Backend (Railway/Heroku)
1. Create new project
2. Connect GitHub repository
3. Set environment variables
4. Deploy

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Team

- **MechEsa Club** - *Initial work* - [MechEsa Club](https://github.com/mechesa-club)

## 🙏 Acknowledgments

- IIT Indore for providing the platform
- All club members and contributors
- Open source community for amazing tools and libraries

---

**Made with ❤️ by MechEsa Club, IIT Indore**
