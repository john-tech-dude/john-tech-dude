# Nazumi Ronin Project

## Overview
Nazumi Ronin is a themed cryptocurrency website that tells the story of a legendary warrior through a manga-style narrative. The website features responsive design, dark mode support, and wallet integration for the Solana blockchain.

## How to Run the Website Locally

### Method 1: Direct File Opening (Simple)
1. Navigate to the project directory in your file explorer
2. Double-click on `index.html` to open it in your default web browser
3. The website should load immediately in your browser

### Method 2: Using a Local Server (Recommended)
Running on a local server provides a more realistic environment and avoids certain browser security restrictions.

#### Using Python's built-in server:
1. Open Terminal
2. Navigate to the project directory:
   ```
   cd "/Users/g/Desktop/Nazumi Ronin Website/Nazumi Ronin V1.0"
   ```
3. Start a simple HTTP server:
   - Python 3:
     ```
     python3 -m http.server 8000
     ```
   - Python 2:
     ```
     python -m SimpleHTTPServer 8000
     ```
4. Open your browser and go to: `http://localhost:8000/index.html`

#### Using Node.js (if installed):
1. Install `http-server` globally if you haven't already:
   ```
   npm install -g http-server
   ```
2. Navigate to the project directory in Terminal:
   ```
   cd "/Users/g/Desktop/Nazumi Ronin Website/Nazumi Ronin V1.0"
   ```
3. Start the server:
   ```
   http-server
   ```
4. Open your browser to the URL shown in the terminal (typically `http://localhost:8080/index.html`)

### Live Editing
For real-time editing:
1. Open the project folder in a code editor like Visual Studio Code, Sublime Text, or Atom
2. Make changes to the HTML, CSS, or JavaScript files
3. Save your changes
4. Refresh your browser to see the updates

For an even better development experience, consider using browser extensions like "Live Server" for VS Code or tools like Browser Sync that automatically refresh the page when files change.

## File Structure
```
.
├── index.html                    # Main HTML file (clean, separated structure)
├── README.md                     # Project documentation
├── assets/
│   ├── css/
│   │   └── styles.css           # All CSS styles (3,527 lines)
│   ├── js/
│   │   └── main.js              # All JavaScript functionality (474 lines)
│   ├── images/                  # Local image assets
│   ├── fonts/                   # Custom fonts (if any)
│   └── vendors/                 # Third-party libraries (if any)
├── legacy/
│   └── NazumiV6.2.html          # Legacy all-in-one HTML file (backup reference)
└── .history/                    # Version history (editor backup)
```

## Features
- ✅ Responsive design for all device sizes
- ✅ Dark mode toggle with localStorage persistence
- ✅ Smooth scroll animations (AOS library)
- ✅ Interactive elements with manga-style visuals
- ✅ Parallax scrolling effects
- ✅ Solana wallet integration (Phantom, Solflare, Backpack)
- ✅ Animated splash screen with loading bar
- ✅ Ink splash click effects
- ✅ Contract address copy to clipboard
- ✅ Floating buy button (mobile)
- ✅ Image preloading for performance

## How to Use
1. Open `index.html` in a web browser
2. Wait for the splash screen to load (~2 seconds)
3. Navigate through the story sections (Origin, Training, Awakening, Enlightenment, Journey, Community)
4. Toggle dark mode using the moon/sun button (bottom-left)
5. Click "Buy Now" to see purchase options
6. Connect your Solana wallet via the buy panel

## Development Notes
- The site uses external libraries:
  - AOS (Animate On Scroll) for scroll animations
  - Font Awesome for icons
  - Google Fonts (Bangers, Oswald)
  - Solana Web3.js and wallet SDKs
- Wallet functionality requires a Solana wallet browser extension to be installed
- The project follows web development best practices with separated concerns:
  - HTML for structure
  - CSS for styling (in assets/css/styles.css)
  - JavaScript for functionality (in assets/js/main.js)
- NazumiV6.2.html is kept as a backup reference with all code inline

## External Dependencies
- Font Awesome 6.4.0 (CDN)
- Google Fonts (Bangers, Oswald)
- AOS 2.3.4 (CDN)
- Solana Web3.js (CDN)
- Solflare Wallet SDK (CDN)
- Wallet Standard (CDN)
- Phantom Wallet SDK (CDN)
- Images hosted on imgur.com

## Optimization
- CSS and JavaScript separated into external files for better caching and maintenance
- Images hosted on imgur.com for fast delivery
- Animations optimized with hardware acceleration
- Image preloading for critical assets
- Smooth scrolling enabled
- Performance optimizations with will-change and backface-visibility
