# RePlate - Community Food Redistribution

A Next.js application for connecting communities through food redistribution to reduce waste and fight hunger.

## Overview

RePlate is a community-driven platform that helps redistribute surplus food from restaurants, events, and individuals to those in need. The application features:

- Food listing and discovery
- Pickup request management
- Impact tracking and analytics
- User dashboard for donors and recipients

## Getting Started

First, install the dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Features

- **Food Listings**: Browse available food items in your area
- **Pickup Requests**: Request pickup for surplus food
- **Impact Dashboard**: Track your contribution to reducing food waste
- **Analytics**: View community impact statistics
- **Responsive Design**: Works on desktop and mobile devices

## Tech Stack

- **Framework**: Next.js 14
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI
- **Icons**: Lucide React
- **Forms**: React Hook Form with Zod validation
- **Charts**: Recharts

## Project Structure

```
app/
├── dashboard/          # Dashboard pages
├── impact/            # Impact tracking
├── listings/          # Food listings
├── login/             # Authentication
components/
├── ui/               # Reusable UI components
lib/
├── utils.ts          # Utility functions
public/               # Static assets
styles/
├── globals.css       # Global styles
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
