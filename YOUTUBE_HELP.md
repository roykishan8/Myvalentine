# 🎥 YouTube Video Setup & Troubleshooting

## How to Add YouTube Videos

### Step 1: Find a Video
1. Go to YouTube
2. Find a video you want to use
3. Look at the URL

### Step 2: Get the Video ID

**From regular YouTube video:**
```
https://www.youtube.com/watch?v=dQw4w9WgXcQ
                                  ↑
                          This is the video ID
```

**From YouTube Shorts:**
```
https://www.youtube.com/shorts/abc123xyz
                                ↑
                        This is the video ID
```

### Step 3: Add to Config
Open `config.js` and update the `videoId`:

```javascript
{
  name: "Rose Day",
  videoId: "dQw4w9WgXcQ",  // ← Paste your video ID here
  // ... other settings
}
```

## ⚠️ Common Issues & Solutions

### Issue: "Video cannot be embedded" or "Error 150"

**Why this happens:**
- The video owner has disabled embedding
- The video is age-restricted
- The video is region-restricted
- The video is copyrighted content

**Solution:**
1. Try a different video
2. Look for videos that are meant to be shared
3. YouTube Shorts usually work better
4. If you see the error, click "Watch on YouTube" button to view directly

### Issue: "Invalid video ID" or "Error 2"

**Why this happens:**
- The video ID is wrong
- The video has been deleted
- Typo in the video ID

**Solution:**
1. Double-check you copied the entire video ID
2. Make sure there are no spaces
3. Try the video on YouTube first to confirm it exists

### Issue: "Video not found" or "Error 100"

**Why this happens:**
- Video was deleted
- Video is private
- Wrong video ID

**Solution:**
1. Verify the video exists on YouTube
2. Make sure it's public or unlisted (not private)
3. Copy the video ID again

### Issue: "HTML5 player error" or "Error 5"

**Why this happens:**
- Browser issue
- Internet connection problem
- YouTube API issue

**Solution:**
1. Refresh the page
2. Try a different browser
3. Check your internet connection
4. Wait a few minutes and try again

## 🎬 Best Practices

### ✅ DO Use:
- **YouTube Shorts** - Great vertical format, usually embeddable
- **Music videos** - Often allow embedding
- **Creative Commons** videos
- **Your own uploaded videos**
- **Videos with share button enabled**

### ❌ AVOID:
- Official movie trailers (often restricted)
- News clips (usually not embeddable)
- Premium music videos (may be restricted)
- Age-restricted content
- Region-locked videos

## 🔍 How to Test if a Video is Embeddable

### Method 1: Try it in your site
1. Add the video ID to config.js
2. Refresh your page
3. If it doesn't work, try a different video

### Method 2: Check YouTube
1. Go to the video on YouTube
2. Click "Share" button
3. Click "Embed"
4. If you see embed code, it's embeddable
5. If it says "Video cannot be embedded", find another video

## 🎯 Finding Good Videos

### For Rose Day:
Search YouTube for:
- "rose day shorts"
- "romantic rose video"
- "red rose animation"

### For Valentine's Day:
Search for:
- "valentine's day shorts"
- "happy valentine's day video"
- "love song shorts"

### General Tips:
- Add "shorts" to your search for vertical videos
- Filter by "Creative Commons" license
- Look for animations and motion graphics
- Check channels that make shareable content

## 🆘 Fallback Option

If a video won't embed, users can still:
1. See the video placeholder with an error message
2. Click the **"Watch on YouTube →"** button
3. The video opens in a new tab on YouTube

This ensures they can still watch the video even if it can't be embedded!

## 📝 Example Config with Working Videos

Here are some video types that usually work:

```javascript
days: [
  {
    name: "Rose Day",
    videoId: "YOUR_VIDEO_ID",  // Try searching "rose animation short"
    // ...
  },
  {
    name: "Valentine's Day",
    videoId: "YOUR_VIDEO_ID",  // Try searching "valentine animation short"
    // ...
  }
]
```

## 🔧 Advanced: Using Your Own Videos

The BEST solution is to upload your own videos:

1. **Create/record a video** (phone videos work great!)
2. **Upload to YouTube:**
   - Go to YouTube Studio
   - Click "Create" → "Upload video"
   - Upload your video
   - Set visibility to "Unlisted" (so only people with the link can see it)
3. **Get the video ID** from the URL
4. **Add to your config**

**Benefits:**
- ✅ Always embeddable
- ✅ Personal and unique
- ✅ No copyright issues
- ✅ Complete control

## 💡 Pro Tips

1. **Test early**: Test all videos before Valentine's Day
2. **Have backups**: Keep alternative video IDs ready
3. **Short is better**: 15-30 second videos work best
4. **Vertical format**: Looks better in the player
5. **Sound on**: Make sure videos have good audio
6. **Check mobile**: Test on phone before sharing

## 🎬 Alternative: Disable Videos

If you can't find good videos, you can disable them:

In `config.js`, just leave videoId empty:

```javascript
{
  name: "Rose Day",
  videoId: "",  // Empty = no video
  // ... rest of config
}
```

The site will show "No video available" and still look great!

---

## Need More Help?

- Check the main README.md
- Look at browser console (F12) for error details
- Try different videos until you find ones that work
- Remember: The site works great even without videos!

---

**Remember:** The goal is to create something special for your loved one. Even if some videos don't work perfectly, the thought and effort you put in is what really matters! ❤️
