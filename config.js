/**
 * Valentine Week - Enhanced Configuration
 * Customize your Valentine Week experience by editing this file
 */
window.VALENTINE_CONFIG = {
  // Personal Information
  personal: {
    fromName: "KISHAN RAY",
    toName: "BABY KUMARI",
    couplePhoto: "assets/images/couple.jpg",
    relationshipStart: "2025-11-26", // YYYY-MM-DD format
    tagline: "Our Love Story"
  },

  // Page Settings
  page: {
    title: "Valentine Week 2026",
    favicon: "❤️",
    lang: "en",
    themeColor: "#ff6b9d"
  },

  // Valentine Week Days (Feb 7-14)
  // IMPORTANT: YouTube Video IDs
  // - Get the ID from the URL: youtube.com/watch?v=VIDEO_ID_HERE
  // - Make sure the video allows embedding (not all videos do)
  // - If a video shows "cannot be embedded", try a different video
  // - YouTube Shorts work great! Format: youtube.com/shorts/VIDEO_ID
  days: [
    {
      id: 1,
      name: "Rose Day",
      date: 7,
      month: 2, // February
      emoji: "🌹",
      color: "#ff6b9d",
      videoId: "dQw4w9WgXcQ", // YouTube video ID (change this to your video)
      message: "A rose for you, my love",
      memories: [
        "Remember our first date?",
        "You looked so beautiful that day"
      ]
    },
    {
      id: 2,
      name: "Propose Day",
      date: 8,
      month: 2,
      emoji: "💍",
      color: "#ffd700",
      videoId: "Hy4LJYKIsQ0",
      message: "I choose you every day",
      memories: [
        "Will you be mine?",
        "Forever and always"
      ]
    },
    {
      id: 3,
      name: "Chocolate Day",
      date: 9,
      month: 2,
      emoji: "🍫",
      color: "#8b4513",
      videoId: "h2tv4PmSaKU",
      message: "Life with you is sweeter than chocolate",
      memories: [
        "Sweet moments together",
        "Our favorite chocolate dates"
      ]
    },
    {
      id: 4,
      name: "Teddy Day",
      date: 10,
      month: 2,
      emoji: "🧸",
      color: "#d2691e",
      videoId: "Bxl2MunBIt8",
      message: "You're my cuddly companion",
      memories: [
        "Cozy nights together",
        "Warm hugs and comfort"
      ]
    },
    {
      id: 5,
      name: "Promise Day",
      date: 11,
      month: 2,
      emoji: "🤝",
      color: "#ff69b4",
      videoId: "43VHF4Q6wfU",
      message: "I promise to love you forever",
      memories: [
        "My commitment to you",
        "Through thick and thin"
      ]
    },
    {
      id: 6,
      name: "Hug Day",
      date: 12,
      month: 2,
      emoji: "🤗",
      color: "#ff1493",
      videoId: "BwGQIv_m_wg",
      message: "In your arms is where I belong",
      memories: [
        "Your warm embrace",
        "Safe in your arms"
      ]
    },
    {
      id: 7,
      name: "Kiss Day",
      date: 13,
      month: 2,
      emoji: "💋",
      color: "#dc143c",
      videoId: "1i0Jo8ml2pg",
      message: "Every kiss tells our story",
      memories: [
        "Our first kiss",
        "Stolen moments"
      ]
    },
    {
      id: 8,
      name: "Valentine's Day",
      date: 14,
      month: 2,
      emoji: "❤️",
      color: "#ff0000",
      videoId: "yYHGvhs06Xc",
      message: "You are my forever Valentine",
      memories: [
        "Celebrating our love",
        "Today and always"
      ]
    }
  ],

  // Photo Gallery (add your photos here)
  gallery: [
    { src: "assets/images/photo1.jpg", caption: "Our first date" },
    { src: "assets/images/photo2.jpg", caption: "Summer vacation" },
    { src: "assets/images/photo3.jpg", caption: "Cozy winter nights" },
    { src: "assets/images/photo4.jpg", caption: "Happy moments" }
  ],

  // Love Messages (random messages that appear)
  loveMessages: [
    "You make my heart smile ❤️",
    "Every moment with you is special 💕",
    "You're my favorite person 🌟",
    "Together is my favorite place to be 🏠",
    "You complete me 💑",
    "Forever isn't long enough with you ♾️",
    "You're my sunshine on cloudy days ☀️",
    "Love you to the moon and back 🌙",
    "You're my greatest adventure 🗺️",
    "My heart beats for you 💓"
  ],

  // Music Tracks
  musicTracks: [
    {
      id: "track1",
      name: "Romantic Melody",
      src: "assets/music/track1.mp3",
      emoji: "🎵"
    },
    {
      id: "track2",
      name: "Love Song",
      src: "assets/music/track2.mp3",
      emoji: "🎶"
    },
    {
      id: "track3",
      name: "Our Song",
      src: "assets/music/track3.mp3",
      emoji: "🎼"
    }
  ],

  // Animation & Visual Settings
  animations: {
    particleCount: 50,
    heartRainEnabled: true,
    starsEnabled: true,
    starCount: 100,
    floatingHeartsEnabled: true,
    confettiOnValentineDay: true,
    transitionDuration: 800 // milliseconds
  },

  // Interactive Features
  features: {
    countdownTimer: true,
    memoryBoard: true,
    photoGallery: true,
    loveLetters: true,
    musicPlayer: true,
    shareButton: true,
    fullscreenMode: true
  },

  // Messages for different states
  messages: {
    beforeWeek: "Valentine Week is coming soon! ❤️",
    afterWeek: "Until next year, my love! 💕",
    loading: "Preparing something special..."
  },

  // Social Sharing
  sharing: {
    enabled: true,
    message: "Celebrating Valentine Week with my special someone! ❤️",
    hashtags: ["ValentineWeek", "Love", "Valentine2026"]
  }
};
