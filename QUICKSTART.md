# 🚀 Quick Start Guide

Get your Valentine Week site running in **5 minutes**!

## Step 1: Add Your Photos

1. Add your couple photo:
   - Name it `couple.jpg`
   - Place it in `assets/images/`
   - Recommended size: 500x500px or larger (square)

2. Add gallery photos (optional):
   - Name them `photo1.jpg`, `photo2.jpg`, etc.
   - Place in `assets/images/`
   - Any size works, but 800x800px is good

## Step 2: Add Music (Optional)

1. Add music files:
   - Name them `track1.mp3`, `track2.mp3`, `track3.mp3`
   - Place in `assets/music/`
   - MP3 format recommended

## Step 3: Edit config.js

Open `config.js` and update:

```javascript
personal: {
  fromName: "Your Name",      // ← Change this
  toName: "Their Name",       // ← Change this
  couplePhoto: "assets/images/couple.jpg",
  relationshipStart: "2023-02-14",  // ← Your relationship start date
  tagline: "Our Love Story"   // ← Your tagline
}
```

## Step 4: Customize Each Day

For each day in the `days` array, update:

```javascript
{
  id: 1,
  name: "Rose Day",
  date: 7,
  emoji: "🌹",
  color: "#ff6b9d",
  videoId: "oDSfEuErIEc",     // ← YouTube video ID
  message: "Your message",     // ← Personal message
  memories: [
    "Memory 1",                // ← Add memories
    "Memory 2"
  ]
}
```

### How to Get YouTube Video ID:
1. Go to any YouTube video
2. Look at the URL: `youtube.com/watch?v=VIDEO_ID_HERE`
3. Copy the part after `v=`
4. Paste it in the `videoId` field

## Step 5: Test Locally

Open `index.html` in your browser to preview!

## Step 6: Deploy to GitHub Pages

### Quick Method:
1. Create a new repository on GitHub
2. Upload all files
3. Go to Settings → Pages
4. Select "main" branch as source
5. Save and wait 2-3 minutes
6. Visit: `https://your-username.github.io/your-repo-name/`

### With Git:
```bash
git init
git add .
git commit -m "My Valentine Week site"
git remote add origin https://github.com/username/repo-name.git
git push -u origin main
```

Then enable GitHub Pages in Settings.

## 🎉 Done!

Share your site URL with your special someone! 💕

---

## Common Issues

**Photos not showing?**
- Check file path matches exactly
- File names are case-sensitive!
- Make sure photos are in `assets/images/`

**Music not playing?**
- Use MP3 format
- Check file is in `assets/music/`
- Try clicking music button in top controls

**Videos not loading?**
- Check YouTube video ID is correct
- Make sure video is public (not private)

---

**Need more help?** Check the full README.md
