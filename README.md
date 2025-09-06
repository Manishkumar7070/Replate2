# RePlate - Community Food Redistribution Platform

![RePlate Logo](https://img.shields.io/badge/RePlate-Food%20Redistribution-green?style=for-the-badge&logo=heart)

A modern Next.js web application that connects communities through food redistribution, helping reduce food waste and fight hunger by connecting restaurants, grocery stores, and event organizers with local charities and shelters.

## 🌟 Features

- **Interactive Food Map**: Discover available food donations in your area with real-time location tracking
- **Easy Listing Creation**: Restaurants and stores can easily post surplus food with photos and details
- **Request Management**: Charities and shelters can request and manage food pickups
- **User Dashboard**: Track your impact and manage your food redistribution activities
- **Real-time Updates**: Get instant notifications about food availability and requests
- **Mobile Responsive**: Works seamlessly on desktop and mobile devices
- **Modern UI**: Beautiful interface built with Tailwind CSS and Radix UI components

## 🚀 Tech Stack

- **Frontend**: Next.js 14, React 18, TypeScript
- **Styling**: Tailwind CSS, Radix UI Components
- **Icons**: Lucide React
- **Forms**: React Hook Form with Zod validation
- **State Management**: React Hooks
- **Build Tool**: Next.js built-in bundler

## 📱 Application Structure

### Public Pages
- **Homepage** (`/`): Landing page with features, testimonials, and impact stats
- **Food Map** (`/map`): Interactive map showing available food donations
- **Listings** (`/listings`): Browse all available food donations
- **Impact** (`/impact`): View community impact and statistics

### User Pages
- **Dashboard** (`/dashboard`): Personal dashboard with analytics and activity tracking
- **Create Listing** (`/listings/create`): Form to post new food donations
- **Requests** (`/requests`): Manage incoming and outgoing food requests
- **Authentication**: Login (`/login`) and registration (`/register`) pages

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Manishkumar7070/replate-1.git
   cd replate-1
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
replate-1/
├── app/                    # Next.js app directory
│   ├── dashboard/         # User dashboard pages
│   │   ├── analytics/     # Analytics dashboard
│   │   └── impact/        # Impact tracking
│   ├── listings/          # Food listing pages
│   │   ├── [id]/         # Individual listing details
│   │   └── create/       # Create new listing
│   ├── map/              # Interactive map page
│   ├── requests/         # Request management
│   ├── login/            # Authentication pages
│   ├── register/         # User registration
│   ├── impact/           # Public impact page
│   ├── globals.css       # Global styles
│   └── layout.tsx        # Root layout
├── components/            # Reusable UI components
│   ├── ui/               # Base UI components (Radix UI)
│   ├── map-marker.tsx    # Map marker component
│   ├── pickup-request-form.tsx
│   └── theme-provider.tsx
├── lib/                  # Utility functions
├── public/               # Static assets
│   ├── *.jpg            # Food images
│   └── *.png            # UI assets
├── styles/              # Additional stylesheets
├── package.json         # Dependencies
├── next.config.mjs      # Next.js configuration
├── tailwind.config.js   # Tailwind CSS config
└── tsconfig.json        # TypeScript configuration
```

## 🎨 Key Components

- **Map Integration**: Interactive map with custom markers for food locations
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Form Handling**: Comprehensive forms with validation using React Hook Form
- **State Management**: React hooks for local state management
- **Type Safety**: Full TypeScript implementation
- **UI Components**: Custom components built with Radix UI primitives

## 🌍 Impact & Mission

RePlate helps communities by:
- **Reducing Food Waste**: Connecting surplus food with those who need it
- **Fighting Hunger**: Making fresh food accessible to shelters and food banks
- **Building Community**: Creating connections between local businesses and organizations
- **Environmental Impact**: Reducing food waste that would otherwise end up in landfills

## 🚀 Development

### Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

### Environment Setup

The application uses standard Next.js environment variables. No additional configuration is required for basic functionality.

## 🤝 Contributing

We welcome contributions! Please feel free to submit a Pull Request. For major changes, please open an issue first to discuss what you would like to change.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Authors

- **Manish Kumar** - *Initial work* - [Manishkumar7070](https://github.com/Manishkumar7070)

## 🙏 Acknowledgments

- Thanks to all the contributors who help make this project better
- Inspired by the need to reduce food waste and help communities
- Built with modern web technologies for optimal performance
- UI components powered by Radix UI and styled with Tailwind CSS

## 📞 Contact

- **Email**: manishkumards37@gmail.com
- **GitHub**: [@Manishkumar7070](https://github.com/Manishkumar7070)
- **Project Link**: [https://github.com/Manishkumar7070/replate-1](https://github.com/Manishkumar7070/replate-1)

## 🔗 Live Demo

Visit the live application: [http://localhost:3000](http://localhost:3000) (when running locally)

---

⭐ **Star this repository if you found it helpful!**

![Made with ❤️](https://img.shields.io/badge/Made%20with-❤️-red?style=for-the-badge)
![Next.js](https://img.shields.io/badge/Next.js-14.2.16-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-18-blue?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)