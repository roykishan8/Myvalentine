# 💝 Valentine Week - Enhanced Edition

A beautiful, interactive Valentine Week website (February 7-14) with modern animations, music player, photo gallery, and much more! Perfect for celebrating your love story.

## ✨ Features

### 🎯 Core Features
- **8 Days of Valentine Week** - Each day (Feb 7-14) has unique content, videos, and themes
- **Dynamic Timeline** - Visual navigation through all 8 days
- **YouTube Integration** - Embedded videos for each special day
- **Responsive Design** - Works perfectly on mobile, tablet, and desktop

### 🎨 Visual Effects
- **Animated Starfield** - Twinkling stars in the background
- **Floating Hearts** - Romantic particles floating across the screen
- **Gradient Backgrounds** - Beautiful color transitions
- **Glass-morphism UI** - Modern, frosted glass effects
- **Photo Glow Effects** - Animated glow around couple photos
- **Confetti Celebration** - Special confetti on Valentine's Day

### 🎵 Interactive Elements
- **Music Player** - Add and play your favorite romantic songs
- **Photo Gallery** - Showcase your memories together
- **Heart Burst Effect** - Click the photo for heart animations
- **Floating Messages** - Random love messages appear periodically
- **Countdown Timer** - Live countdown to Valentine's Day
- **Keyboard Navigation** - Use arrow keys to navigate days

### 🎭 Modern UI/UX
- **Modal Dialogs** - Elegant popups for music and gallery
- **Toast Notifications** - Beautiful notifications for interactions
- **Smooth Transitions** - Polished animations throughout
- **Fullscreen Mode** - Immersive viewing experience
- **Loading Screen** - Animated heart while page loads
- **Theme Colors** - Each day has its own color theme

## 🚀 Quick Start

### 1. Clone or Download
```bash
cd valentine-week
```

### 2. Add Your Content

#### Update `config.js`:
```javascript
personal: {
  fromName: "Your Name",        // Replace with your name
  toName: "Their Name",          // Replace with their name
  couplePhoto: "assets/images/couple.jpg",
  relationshipStart: "2023-02-14",
  tagline: "Our Love Story"
}
```

#### Add Your Assets:
- **Couple Photo**: `assets/images/couple.jpg` (main photo)
- **Gallery Photos**: `assets/images/photo1.jpg`, `photo2.jpg`, etc.
- **Music Files**: `assets/music/track1.mp3`, `track2.mp3`, etc.

### 3. Customize Days
Edit each day in `config.js`:
```javascript
{
  id: 1,
  name: "Rose Day",
  date: 7,
  emoji: "🌹",
  color: "#ff6b9d",
  videoId: "YOUR_YOUTUBE_VIDEO_ID",  // YouTube video ID
  message: "Your custom message here",
  memories: [
    "Your first memory",
    "Another special moment"
  ]
}
```

### 4. Host on GitHub Pages

#### Option A: Using GitHub Desktop or Git
```bash
# Initialize git repository
git init
git add .
git commit -m "Initial commit: Valentine Week site"

# Create GitHub repository and push
git remote add origin https://github.com/yourusername/valentine-week.git
git branch -M main
git push -u origin main
```

#### Enable GitHub Pages:
1. Go to your repository on GitHub
2. Click **Settings** → **Pages**
3. Under **Source**, select **main** branch
4. Click **Save**
5. Your site will be live at: `https://yourusername.github.io/valentine-week/`

#### Option B: Direct Upload
1. Create a new repository on GitHub
2. Upload all files from this directory
3. Enable GitHub Pages in Settings
4. Done! Your site is live

## 📁 Project Structure

```
valentine-week/
├── index.html              # Main HTML file
├── style.css              # All styles and animations
├── script.js              # Interactive features and logic
├── config.js              # Your customization (edit this!)
├── README.md              # This file
└── assets/
    ├── images/
    │   ├── couple.jpg     # Your couple photo
    │   ├── photo1.jpg     # Gallery photos
    │   ├── photo2.jpg
    │   └── ...
    ├── music/
    │   ├── track1.mp3     # Your music files
    │   ├── track2.mp3
    │   └── ...
    └── sounds/            # Optional sound effects
```

## 🎨 Customization Guide

### Personal Information
```javascript
personal: {
  fromName: "John",
  toName: "Jane",
  couplePhoto: "assets/images/couple.jpg",
  relationshipStart: "2023-02-14",
  tagline: "Forever & Always"
}
```

### Page Settings
```javascript
page: {
  title: "Valentine Week 2026",
  favicon: "❤️",
  lang: "en",
  themeColor: "#ff6b9d"
}
```

### Gallery Photos
```javascript
gallery: [
  { src: "assets/images/photo1.jpg", caption: "Our first date" },
  { src: "assets/images/photo2.jpg", caption: "Beach vacation" },
  // Add more photos...
]
```

### Music Tracks
```javascript
musicTracks: [
  {
    id: "track1",
    name: "Our Song",
    src: "assets/music/track1.mp3",
    emoji: "🎵"
  },
  // Add more tracks...
]
```

### Love Messages
```javascript
loveMessages: [
  "You make my heart smile ❤️",
  "Every moment with you is special 💕",
  // Add your own messages...
]
```

### Visual Settings
```javascript
animations: {
  particleCount: 50,           // Number of floating hearts
  heartRainEnabled: true,      // Enable/disable heart rain
  starsEnabled: true,          // Enable/disable starfield
  starCount: 100,              // Number of stars
  confettiOnValentineDay: true // Confetti on Feb 14
}
```

### Feature Toggles
```javascript
features: {
  countdownTimer: true,    // Show countdown to Valentine's Day
  memoryBoard: true,       // Show memories section
  photoGallery: true,      // Enable gallery
  loveLetters: true,       // Floating love messages
  musicPlayer: true,       // Music player
  shareButton: true,       // Social sharing
  fullscreenMode: true     // Fullscreen button
}
```

## 🎥 YouTube Video Setup

1. Find a YouTube video you like
2. Copy the video ID from the URL
   - Example: `https://youtube.com/watch?v=dQw4w9WgXcQ`
   - Video ID: `dQw4w9WgXcQ`
3. Add it to your day configuration:
```javascript
videoId: "dQw4w9WgXcQ"
```

**Tip**: YouTube Shorts work great for this! They have a 9:16 aspect ratio perfect for the vertical video player.

## 🎵 Music File Formats

Supported audio formats:
- **MP3** - Best compatibility (recommended)
- **WebM** - Good quality, smaller file size
- **OGG** - Alternative format
- **WAV** - Highest quality, larger file size

**Recommendation**: Use MP3 format for maximum browser compatibility.

## 📱 Mobile Optimization

The site is fully responsive and optimized for:
- ✅ Mobile phones (portrait & landscape)
- ✅ Tablets
- ✅ Desktop browsers
- ✅ Touch interactions
- ✅ Keyboard navigation

## 🎯 Browser Support

Works on all modern browsers:
- ✅ Chrome/Edge (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Mobile browsers

**Note**: Some older browsers may not support all animations. The site will still work but with reduced visual effects.

## 🔧 Advanced Customization

### Change Theme Color
Edit CSS variables in `style.css`:
```css
:root {
  --primary-color: #ff6b9d;
  --secondary-color: #ff1493;
  --accent-color: #ffd700;
}
```

### Add Custom Fonts
Add Google Fonts in `index.html`:
```html
<link href="https://fonts.googleapis.com/css2?family=Your+Font&display=swap" rel="stylesheet">
```

Then update CSS:
```css
--font-display: 'Your Font', serif;
```

### Modify Animations
Adjust animation speeds in `config.js`:
```javascript
animations: {
  transitionDuration: 800  // milliseconds
}
```

## 💡 Tips & Tricks

1. **Image Size**: Keep images under 2MB for faster loading
2. **Music Files**: Use compressed audio (128-192 kbps) for web
3. **YouTube Videos**: Use Shorts for better vertical format
4. **Personal Touch**: Add custom messages and memories
5. **Test Early**: Check on mobile before the big day!
6. **Backup**: Keep original high-quality photos elsewhere

## 🎁 Ideas for Enhancement

- Add a custom domain name
- Create a surprise timer for a specific time on Feb 14
- Include voice messages or video messages
- Add a "Reasons I Love You" section
- Create a memory timeline with dates
- Add a virtual love letter
- Include a special message that unlocks on Valentine's Day

## 🐛 Troubleshooting

### Videos Not Playing
- Check if YouTube video ID is correct
- Ensure video is not private or restricted
- Try a different video

### Music Not Playing
- Check audio file path in `config.js`
- Verify audio file format is supported
- Check browser console for errors

### Images Not Loading
- Verify image paths are correct
- Check file names match exactly (case-sensitive)
- Ensure images are in `assets/images/` folder

### Site Not Loading on GitHub Pages
- Ensure all files are in the repository
- Check GitHub Pages settings
- Wait a few minutes after enabling Pages
- Clear browser cache

## 🌟 Deployment Checklist

Before going live:
- [ ] Update personal names and info
- [ ] Add couple photo
- [ ] Upload gallery photos
- [ ] Add music files
- [ ] Customize all 8 day messages
- [ ] Update YouTube video IDs
- [ ] Test on mobile device
- [ ] Test on desktop browser
- [ ] Check all interactive features
- [ ] Enable GitHub Pages
- [ ] Share the link! 💕

## 📄 License

Free to use and modify for personal projects. Share the love! ❤️

## 🤝 Credits

Built with:
- Vanilla JavaScript (no frameworks!)
- Modern CSS3 (animations & effects)
- YouTube Iframe API
- Google Fonts (Playfair Display & Poppins)

## 💌 Share Your Creation

Made something awesome? We'd love to see it! Consider sharing:
- Screenshot on social media
- Star this project if it helped you
- Share with friends who need Valentine inspiration

---

## 📞 Need Help?

If you encounter any issues:
1. Check this README carefully
2. Review the `config.js` file
3. Check browser console for errors
4. Ensure all file paths are correct

---

**Made with ❤️ for Valentine's Day 2026**

*Remember: The best gift is the love and thought you put into it!*
