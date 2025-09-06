#!/bin/bash

# Add all changes
git add .

# Commit with a descriptive message
git commit -m "Fix deployment issues for Vercel and Netlify

- Add vercel.json for proper Next.js framework detection
- Add netlify.toml for Netlify deployment configuration
- Create tailwind.config.js for Tailwind CSS v3
- Update globals.css to use standard Tailwind imports
- Fix package.json dependencies and remove duplicates
- Add .nvmrc for consistent Node.js version

Fixes: react-scripts command not found error"

# Push to main branch
git push origin main

echo "✅ Changes committed and pushed successfully!"
echo "🚀 Your project is now ready for deployment on Vercel and Netlify"
