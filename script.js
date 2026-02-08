/**
 * Valentine Week - Enhanced JavaScript
 * Interactive features and animations
 */

(function() {
  'use strict';

  // ============================================
  // Configuration & State
  // ============================================
  
  const CONFIG = window.VALENTINE_CONFIG || {};
  const state = {
    currentDayIndex: 1,
    ytPlayer: null,
    isYTReady: false,
    activeAudio: null,
    particles: [],
    stars: []
  };

  // ============================================
  // DOM Elements Cache
  // ============================================
  
  const DOM = {
    loader: null,
    mainContainer: null,
    fromName: null,
    toName: null,
    tagline: null,
    musicBtn: null,
    galleryBtn: null,
    fullscreenBtn: null,
    countdownContainer: null,
    countdownTimer: null,
    timeline: null,
    daySection: null,
    photoFrame: null,
    couplePhoto: null,
    photoInteractionBtn: null,
    dayEmoji: null,
    dayTitle: null,
    dayDate: null,
    dayMessage: null,
    videoContainer: null,
    videoPlaceholder: null,
    memoriesList: null,
    prevDay: null,
    nextDay: null,
    currentDayNum: null,
    floatingMessages: null,
    musicModal: null,
    closeMusicModal: null,
    musicPlayer: null,
    galleryModal: null,
    closeGalleryModal: null,
    galleryGrid: null,
    toastContainer: null,
    starsCanvas: null,
    particlesContainer: null,
    confettiCanvas: null
  };

  // ============================================
  // Initialization
  // ============================================
  
  function init() {
    cacheDOMElements();
    applyConfig();
    setupEventListeners();
    initStarfield();
    initParticles();
    detectCurrentDay();
    renderTimeline();
    renderDay(state.currentDayIndex);
    initMusicPlayer();
    initGallery();
    startCountdown();
    startFloatingMessages();
    
    // Check if YouTube API is already loaded
    if (typeof YT !== 'undefined' && YT.loaded) {
      window.onYouTubeIframeAPIReady();
    }
    
    // Remove loader after everything is ready
    setTimeout(() => {
      document.body.classList.add('loaded');
    }, 1000);
  }

  function cacheDOMElements() {
    DOM.loader = document.getElementById('loader');
    DOM.mainContainer = document.getElementById('mainContainer');
    DOM.fromName = document.getElementById('fromName');
    DOM.toName = document.getElementById('toName');
    DOM.tagline = document.getElementById('tagline');
    DOM.musicBtn = document.getElementById('musicBtn');
    DOM.galleryBtn = document.getElementById('galleryBtn');
    DOM.fullscreenBtn = document.getElementById('fullscreenBtn');
    DOM.countdownContainer = document.getElementById('countdownContainer');
    DOM.countdownTimer = document.getElementById('countdownTimer');
    DOM.timeline = document.getElementById('timeline');
    DOM.daySection = document.getElementById('daySection');
    DOM.photoFrame = document.getElementById('photoFrame');
    DOM.couplePhoto = document.getElementById('couplePhoto');
    DOM.photoInteractionBtn = document.getElementById('photoInteractionBtn');
    DOM.dayEmoji = document.getElementById('dayEmoji');
    DOM.dayTitle = document.getElementById('dayTitle');
    DOM.dayDate = document.getElementById('dayDate');
    DOM.dayMessage = document.getElementById('dayMessage');
    DOM.videoContainer = document.getElementById('videoContainer');
    DOM.videoPlaceholder = document.getElementById('videoPlaceholder');
    DOM.watchOnYouTube = document.getElementById('watchOnYouTube');
    DOM.memoriesList = document.getElementById('memoriesList');
    DOM.prevDay = document.getElementById('prevDay');
    DOM.nextDay = document.getElementById('nextDay');
    DOM.currentDayNum = document.getElementById('currentDayNum');
    DOM.floatingMessages = document.getElementById('floatingMessages');
    DOM.musicModal = document.getElementById('musicModal');
    DOM.closeMusicModal = document.getElementById('closeMusicModal');
    DOM.musicPlayer = document.getElementById('musicPlayer');
    DOM.galleryModal = document.getElementById('galleryModal');
    DOM.closeGalleryModal = document.getElementById('closeGalleryModal');
    DOM.galleryGrid = document.getElementById('galleryGrid');
    DOM.toastContainer = document.getElementById('toastContainer');
    DOM.starsCanvas = document.getElementById('starsCanvas');
    DOM.particlesContainer = document.getElementById('particlesContainer');
    DOM.confettiCanvas = document.getElementById('confettiCanvas');
  }

  function applyConfig() {
    // Apply personal info
    if (CONFIG.personal) {
      if (DOM.fromName && CONFIG.personal.fromName) {
        DOM.fromName.textContent = CONFIG.personal.fromName;
      }
      if (DOM.toName && CONFIG.personal.toName) {
        DOM.toName.textContent = CONFIG.personal.toName;
      }
      if (DOM.tagline && CONFIG.personal.tagline) {
        DOM.tagline.textContent = CONFIG.personal.tagline;
      }
      if (DOM.couplePhoto && CONFIG.personal.couplePhoto) {
        DOM.couplePhoto.src = CONFIG.personal.couplePhoto;
        DOM.couplePhoto.onerror = () => {
          DOM.couplePhoto.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400"%3E%3Crect fill="%23ff6b9d" width="400" height="400"/%3E%3Ctext x="50%25" y="50%25" text-anchor="middle" fill="white" font-size="100" dy=".3em"%3E❤️%3C/text%3E%3C/svg%3E';
        };
      }
    }

    // Apply page settings
    if (CONFIG.page) {
      if (CONFIG.page.title) {
        document.title = CONFIG.page.title;
      }
      if (CONFIG.page.lang) {
        document.documentElement.lang = CONFIG.page.lang;
      }
    }
  }

  // ============================================
  // Event Listeners
  // ============================================
  
  function setupEventListeners() {
    // Navigation
    if (DOM.prevDay) {
      DOM.prevDay.addEventListener('click', () => navigateDay(-1));
    }
    if (DOM.nextDay) {
      DOM.nextDay.addEventListener('click', () => navigateDay(1));
    }

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowLeft') navigateDay(-1);
      if (e.key === 'ArrowRight') navigateDay(1);
    });

    // Photo interaction
    if (DOM.photoInteractionBtn) {
      DOM.photoInteractionBtn.addEventListener('click', handlePhotoInteraction);
    }

    // Control buttons
    if (DOM.musicBtn) {
      DOM.musicBtn.addEventListener('click', () => openModal(DOM.musicModal));
    }
    if (DOM.galleryBtn) {
      DOM.galleryBtn.addEventListener('click', () => openModal(DOM.galleryModal));
    }
    if (DOM.fullscreenBtn) {
      DOM.fullscreenBtn.addEventListener('click', toggleFullscreen);
    }

    // Modal close buttons
    if (DOM.closeMusicModal) {
      DOM.closeMusicModal.addEventListener('click', () => closeModal(DOM.musicModal));
    }
    if (DOM.closeGalleryModal) {
      DOM.closeGalleryModal.addEventListener('click', () => closeModal(DOM.galleryModal));
    }

    // Close modal on backdrop click
    [DOM.musicModal, DOM.galleryModal].forEach(modal => {
      if (modal) {
        modal.addEventListener('click', (e) => {
          if (e.target === modal) closeModal(modal);
        });
      }
    });

    // Escape key to close modals
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        closeModal(DOM.musicModal);
        closeModal(DOM.galleryModal);
      }
    });
  }

  // ============================================
  // Day Detection & Management
  // ============================================
  
  function detectCurrentDay() {
    const now = new Date();
    const month = now.getMonth() + 1; // 0-indexed
    const date = now.getDate();
    
    // Check if we're in Valentine week (Feb 7-14)
    if (month === 2 && date >= 7 && date <= 14) {
      state.currentDayIndex = date - 6; // 7th becomes index 1, 14th becomes index 8
    } else if (month < 2 || (month === 2 && date < 7)) {
      // Before Valentine week
      state.currentDayIndex = 1;
      showBeforeWeekMessage();
    } else {
      // After Valentine week
      state.currentDayIndex = 8;
      showAfterWeekMessage();
    }
  }

  function showBeforeWeekMessage() {
    if (DOM.videoPlaceholder && CONFIG.messages) {
      DOM.videoPlaceholder.textContent = CONFIG.messages.beforeWeek || 'Valentine Week is coming soon! ❤️';
      DOM.videoPlaceholder.classList.remove('hidden');
      if (DOM.videoContainer) {
        DOM.videoContainer.style.display = 'flex';
      }
    }
  }

  function showAfterWeekMessage() {
    if (DOM.videoPlaceholder && CONFIG.messages) {
      DOM.videoPlaceholder.textContent = CONFIG.messages.afterWeek || 'Until next year, my love! 💕';
      DOM.videoPlaceholder.classList.remove('hidden');
    }
  }

  function navigateDay(direction) {
    const newIndex = state.currentDayIndex + direction;
    const days = CONFIG.days || [];
    
    if (newIndex >= 1 && newIndex <= days.length) {
      state.currentDayIndex = newIndex;
      renderDay(state.currentDayIndex);
    }
  }

  // ============================================
  // Timeline
  // ============================================
  
  function renderTimeline() {
    if (!DOM.timeline || !CONFIG.days) return;
    
    DOM.timeline.innerHTML = '';
    
    CONFIG.days.forEach((day, index) => {
      const item = document.createElement('div');
      item.className = 'timeline-item';
      if (index + 1 === state.currentDayIndex) {
        item.classList.add('active');
      }
      
      item.innerHTML = `
        <span class="timeline-emoji">${day.emoji || '❤️'}</span>
        <div class="timeline-name">${day.name}</div>
        <div class="timeline-date">Feb ${day.date}</div>
      `;
      
      item.addEventListener('click', () => {
        state.currentDayIndex = index + 1;
        renderDay(state.currentDayIndex);
      });
      
      DOM.timeline.appendChild(item);
    });
  }

  // ============================================
  // Day Rendering
  // ============================================
  
  function renderDay(dayIndex) {
    const days = CONFIG.days || [];
    const day = days[dayIndex - 1];
    
    if (!day) return;

    // Update timeline active state
    const timelineItems = DOM.timeline?.querySelectorAll('.timeline-item');
    timelineItems?.forEach((item, index) => {
      if (index + 1 === dayIndex) {
        item.classList.add('active');
      } else {
        item.classList.remove('active');
      }
    });

    // Update day info
    if (DOM.dayEmoji) DOM.dayEmoji.textContent = day.emoji || '❤️';
    if (DOM.dayTitle) DOM.dayTitle.textContent = day.name;
    if (DOM.dayDate) DOM.dayDate.textContent = `February ${day.date}, 2026`;
    if (DOM.dayMessage) DOM.dayMessage.textContent = day.message || '';

    // Update current day number
    if (DOM.currentDayNum) DOM.currentDayNum.textContent = dayIndex;

    // Update navigation buttons
    if (DOM.prevDay) {
      DOM.prevDay.disabled = dayIndex === 1;
    }
    if (DOM.nextDay) {
      DOM.nextDay.disabled = dayIndex === days.length;
    }

    // Update memories
    renderMemories(day.memories || []);

    // Load YouTube video
    loadVideo(day.videoId);

    // Update theme color
    if (day.color) {
      updateThemeColor(day.color);
    }

    // Trigger confetti on Valentine's Day
    if (dayIndex === 8 && CONFIG.animations?.confettiOnValentineDay) {
      triggerConfetti();
    }

    // Smooth scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function renderMemories(memories) {
    if (!DOM.memoriesList) return;
    
    DOM.memoriesList.innerHTML = '';
    
    if (!memories || memories.length === 0) {
      DOM.memoriesList.innerHTML = '<div class="memory-item">No memories added yet</div>';
      return;
    }
    
    memories.forEach(memory => {
      const item = document.createElement('div');
      item.className = 'memory-item';
      item.textContent = memory;
      DOM.memoriesList.appendChild(item);
    });
  }

  function updateThemeColor(color) {
    document.documentElement.style.setProperty('--primary-color', color);
    
    // Update meta theme-color
    let metaTheme = document.querySelector('meta[name="theme-color"]');
    if (!metaTheme) {
      metaTheme = document.createElement('meta');
      metaTheme.name = 'theme-color';
      document.head.appendChild(metaTheme);
    }
    metaTheme.content = color;
  }

  // ============================================
  // YouTube Player
  // ============================================
  
  window.onYouTubeIframeAPIReady = function() {
    state.isYTReady = true;
    const days = CONFIG.days || [];
    const firstDay = days[state.currentDayIndex - 1];
    const videoId = firstDay?.videoId || '';
    
    if (!videoId) {
      showVideoPlaceholder('No video ID configured');
      return;
    }
    
    try {
      state.ytPlayer = new YT.Player('ytPlayer', {
        height: '100%',
        width: '100%',
        videoId: videoId,
        playerVars: {
          autoplay: 1,
          mute: 0,
          playsinline: 1,
          modestbranding: 1,
          rel: 0,
          controls: 1,
          fs: 1
        },
        events: {
          onReady: onPlayerReady,
          onStateChange: onPlayerStateChange,
          onError: onPlayerError
        }
      });
    } catch (error) {
      console.error('YouTube Player initialization error:', error);
      showVideoPlaceholder('Failed to load video player');
    }
  };

  function onPlayerReady(event) {
    console.log('YouTube player ready');
    if (DOM.videoPlaceholder) {
      DOM.videoPlaceholder.classList.add('hidden');
    }
    // Try to unmute and play
    try {
      event.target.unMute();
      event.target.playVideo();
    } catch (error) {
      console.error('Player ready error:', error);
    }
  }

  function onPlayerStateChange(event) {
    // When video starts playing, pause any active music
    if (event.data === YT.PlayerState.PLAYING && state.activeAudio) {
      state.activeAudio.pause();
      state.activeAudio = null;
      updateMusicPlayerUI();
    }
  }

  function onPlayerError(event) {
    console.error('YouTube player error:', event.data);
    let errorMessage = 'Video unavailable';
    
    switch(event.data) {
      case 2:
        errorMessage = 'Invalid video ID';
        break;
      case 5:
        errorMessage = 'HTML5 player error';
        break;
      case 100:
        errorMessage = 'Video not found';
        break;
      case 101:
      case 150:
        errorMessage = 'Video cannot be embedded';
        break;
    }
    
    showVideoPlaceholder(errorMessage, true);
  }

  function showVideoPlaceholder(message, showYouTubeLink = false) {
    if (DOM.videoPlaceholder) {
      const messageElement = document.getElementById('placeholderMessage');
      if (messageElement) {
        messageElement.textContent = message;
      }
      DOM.videoPlaceholder.classList.remove('hidden');
      
      // Show/hide YouTube link button
      if (DOM.watchOnYouTube) {
        if (showYouTubeLink) {
          const days = CONFIG.days || [];
          const currentDay = days[state.currentDayIndex - 1];
          if (currentDay && currentDay.videoId) {
            DOM.watchOnYouTube.href = `https://www.youtube.com/watch?v=${currentDay.videoId}`;
            DOM.watchOnYouTube.classList.remove('hidden');
          }
        } else {
          DOM.watchOnYouTube.classList.add('hidden');
        }
      }
    }
  }

  function loadVideo(videoId) {
    if (!videoId) {
      showVideoPlaceholder('No video available', false);
      return;
    }

    // Update YouTube link
    if (DOM.watchOnYouTube) {
      DOM.watchOnYouTube.href = `https://www.youtube.com/watch?v=${videoId}`;
    }

    if (state.ytPlayer && state.isYTReady && typeof state.ytPlayer.loadVideoById === 'function') {
      try {
        state.ytPlayer.loadVideoById({
          videoId: videoId,
          startSeconds: 0
        });
        if (DOM.videoPlaceholder) {
          DOM.videoPlaceholder.classList.add('hidden');
        }
        if (DOM.watchOnYouTube) {
          DOM.watchOnYouTube.classList.add('hidden');
        }
      } catch (error) {
        console.error('Error loading video:', error);
        showVideoPlaceholder('Failed to load video', true);
      }
    } else {
      console.log('YouTube player not ready yet');
      showVideoPlaceholder('Loading video player...', false);
    }
  }

  // ============================================
  // Music Player
  // ============================================
  
  function initMusicPlayer() {
    if (!DOM.musicPlayer || !CONFIG.musicTracks) return;
    
    DOM.musicPlayer.innerHTML = '';
    
    CONFIG.musicTracks.forEach((track, index) => {
      const trackElement = document.createElement('div');
      trackElement.className = 'music-track';
      trackElement.dataset.trackId = track.id;
      
      trackElement.innerHTML = `
        <div class="music-track-emoji">${track.emoji || '🎵'}</div>
        <div class="music-track-info">
          <div class="music-track-name">${track.name}</div>
          <div class="music-track-status">Tap to play</div>
        </div>
      `;
      
      // Create audio element
      const audio = new Audio(track.src);
      audio.loop = true;
      audio.id = track.id;
      
      trackElement.addEventListener('click', () => {
        toggleMusic(audio, trackElement);
      });
      
      DOM.musicPlayer.appendChild(trackElement);
    });
  }

  function toggleMusic(audio, trackElement) {
    // If this track is already playing, pause it
    if (state.activeAudio === audio) {
      audio.pause();
      state.activeAudio = null;
      DOM.musicBtn?.classList.remove('active');
    } else {
      // Pause current audio if any
      if (state.activeAudio) {
        state.activeAudio.pause();
      }
      
      // Pause YouTube video
      if (state.ytPlayer && state.isYTReady) {
        state.ytPlayer.pauseVideo();
      }
      
      // Play new audio
      audio.play().catch(err => {
        console.error('Audio play failed:', err);
        showToast('Unable to play audio. Please try again.');
      });
      state.activeAudio = audio;
      DOM.musicBtn?.classList.add('active');
    }
    
    updateMusicPlayerUI();
  }

  function updateMusicPlayerUI() {
    const tracks = DOM.musicPlayer?.querySelectorAll('.music-track');
    tracks?.forEach(track => {
      const audio = document.getElementById(track.dataset.trackId);
      const statusElement = track.querySelector('.music-track-status');
      
      if (audio === state.activeAudio && !audio.paused) {
        track.classList.add('playing');
        if (statusElement) statusElement.textContent = 'Now playing...';
      } else {
        track.classList.remove('playing');
        if (statusElement) statusElement.textContent = 'Tap to play';
      }
    });
  }

  // ============================================
  // Gallery
  // ============================================
  
  function initGallery() {
    if (!DOM.galleryGrid || !CONFIG.gallery) return;
    
    DOM.galleryGrid.innerHTML = '';
    
    if (CONFIG.gallery.length === 0) {
      DOM.galleryGrid.innerHTML = '<p style="text-align: center; color: var(--text-muted);">No photos yet. Add some memories!</p>';
      return;
    }
    
    CONFIG.gallery.forEach((photo, index) => {
      const item = document.createElement('div');
      item.className = 'gallery-item';
      
      item.innerHTML = `
        <img src="${photo.src}" alt="${photo.caption || 'Memory ' + (index + 1)}" 
             onerror="this.src='data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 400 400%22%3E%3Crect fill=%22%23ff6b9d%22 width=%22400%22 height=%22400%22/%3E%3Ctext x=%2250%25%22 y=%2250%25%22 text-anchor=%22middle%22 fill=%22white%22 font-size=%2260%22 dy=%22.3em%22%3E📷%3C/text%3E%3C/svg%3E'">
        <div class="gallery-item-caption">${photo.caption || 'Memory ' + (index + 1)}</div>
      `;
      
      DOM.galleryGrid.appendChild(item);
    });
  }

  // ============================================
  // Photo Interaction
  // ============================================
  
  function handlePhotoInteraction() {
    // Create heart burst effect
    createHeartBurst();
    
    // Show random love message
    const messages = CONFIG.loveMessages || ['I love you! ❤️'];
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    showToast(randomMessage);
  }

  function createHeartBurst() {
    const rect = DOM.photoFrame?.getBoundingClientRect();
    if (!rect) return;
    
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    for (let i = 0; i < 20; i++) {
      const heart = document.createElement('div');
      heart.textContent = '❤️';
      heart.style.position = 'fixed';
      heart.style.left = centerX + 'px';
      heart.style.top = centerY + 'px';
      heart.style.fontSize = Math.random() * 20 + 10 + 'px';
      heart.style.pointerEvents = 'none';
      heart.style.zIndex = '999';
      
      document.body.appendChild(heart);
      
      const angle = (Math.PI * 2 * i) / 20;
      const velocity = Math.random() * 3 + 2;
      const vx = Math.cos(angle) * velocity;
      const vy = Math.sin(angle) * velocity;
      
      animateHeart(heart, vx, vy);
    }
  }

  function animateHeart(element, vx, vy) {
    let x = 0, y = 0;
    let opacity = 1;
    
    const animate = () => {
      x += vx;
      y += vy;
      opacity -= 0.02;
      
      element.style.transform = `translate(${x}px, ${y}px)`;
      element.style.opacity = opacity;
      
      if (opacity > 0) {
        requestAnimationFrame(animate);
      } else {
        element.remove();
      }
    };
    
    animate();
  }

  // ============================================
  // Countdown Timer
  // ============================================
  
  function startCountdown() {
    if (!DOM.countdownContainer || !CONFIG.features?.countdownTimer) {
      DOM.countdownContainer?.classList.add('hidden');
      return;
    }
    
    const updateCountdown = () => {
      const now = new Date();
      const valentineDay = new Date(2026, 1, 14, 0, 0, 0); // Feb 14, 2026
      
      // If Valentine's Day has passed, hide countdown
      if (now > valentineDay) {
        DOM.countdownContainer.classList.add('hidden');
        return;
      }
      
      const diff = valentineDay - now;
      
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((diff % (1000 * 60)) / 1000);
      
      document.getElementById('days').textContent = String(days).padStart(2, '0');
      document.getElementById('hours').textContent = String(hours).padStart(2, '0');
      document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
      document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
    };
    
    updateCountdown();
    setInterval(updateCountdown, 1000);
  }

  // ============================================
  // Floating Messages
  // ============================================
  
  function startFloatingMessages() {
    if (!DOM.floatingMessages || !CONFIG.loveMessages) return;
    
    setInterval(() => {
      createFloatingMessage();
    }, 8000); // Every 8 seconds
  }

  function createFloatingMessage() {
    if (!CONFIG.loveMessages || CONFIG.loveMessages.length === 0) return;
    
    const message = CONFIG.loveMessages[Math.floor(Math.random() * CONFIG.loveMessages.length)];
    const element = document.createElement('div');
    element.className = 'floating-message';
    element.textContent = message;
    element.style.left = Math.random() * 80 + 10 + '%';
    
    DOM.floatingMessages.appendChild(element);
    
    setTimeout(() => {
      element.remove();
    }, 8000);
  }

  // ============================================
  // Modal Management
  // ============================================
  
  function openModal(modal) {
    if (!modal) return;
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeModal(modal) {
    if (!modal) return;
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }

  // ============================================
  // Toast Notifications
  // ============================================
  
  function showToast(message, duration = 3000) {
    if (!DOM.toastContainer) return;
    
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = message;
    
    DOM.toastContainer.appendChild(toast);
    
    setTimeout(() => {
      toast.classList.add('removing');
      setTimeout(() => toast.remove(), 300);
    }, duration);
  }

  // ============================================
  // Fullscreen
  // ============================================
  
  function toggleFullscreen() {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(err => {
        console.error('Fullscreen error:', err);
      });
      DOM.fullscreenBtn?.classList.add('active');
    } else {
      document.exitFullscreen();
      DOM.fullscreenBtn?.classList.remove('active');
    }
  }

  // ============================================
  // Starfield Animation
  // ============================================
  
  function initStarfield() {
    if (!DOM.starsCanvas || !CONFIG.animations?.starsEnabled) return;
    
    const canvas = DOM.starsCanvas;
    const ctx = canvas.getContext('2d');
    
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    
    const starCount = CONFIG.animations?.starCount || 100;
    
    // Create stars
    for (let i = 0; i < starCount; i++) {
      state.stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 1.5 + 0.5,
        opacity: Math.random(),
        fadeSpeed: Math.random() * 0.02 + 0.01,
        fadingIn: Math.random() > 0.5
      });
    }
    
    function animateStars() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      state.stars.forEach(star => {
        // Update opacity
        if (star.fadingIn) {
          star.opacity += star.fadeSpeed;
          if (star.opacity >= 1) {
            star.opacity = 1;
            star.fadingIn = false;
          }
        } else {
          star.opacity -= star.fadeSpeed;
          if (star.opacity <= 0) {
            star.opacity = 0;
            star.fadingIn = true;
          }
        }
        
        // Draw star
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
        ctx.fill();
      });
      
      requestAnimationFrame(animateStars);
    }
    
    animateStars();
  }

  // ============================================
  // Particle System
  // ============================================
  
  function initParticles() {
    if (!DOM.particlesContainer || !CONFIG.animations?.floatingHeartsEnabled) return;
    
    const particleCount = CONFIG.animations?.particleCount || 50;
    
    for (let i = 0; i < particleCount; i++) {
      setTimeout(() => createParticle(), i * 100);
    }
  }

  function createParticle() {
    if (!DOM.particlesContainer) return;
    
    const particle = document.createElement('div');
    particle.textContent = ['❤️', '💕', '💖', '💗', '💓'][Math.floor(Math.random() * 5)];
    particle.style.position = 'absolute';
    particle.style.fontSize = Math.random() * 20 + 10 + 'px';
    particle.style.left = Math.random() * 100 + '%';
    particle.style.bottom = '-50px';
    particle.style.opacity = Math.random() * 0.6 + 0.2;
    particle.style.pointerEvents = 'none';
    
    DOM.particlesContainer.appendChild(particle);
    
    const duration = Math.random() * 10000 + 15000;
    const drift = Math.random() * 100 - 50;
    
    particle.animate([
      { transform: 'translateY(0) translateX(0) rotate(0deg)', opacity: particle.style.opacity },
      { transform: `translateY(-${window.innerHeight + 100}px) translateX(${drift}px) rotate(360deg)`, opacity: 0 }
    ], {
      duration: duration,
      easing: 'linear'
    }).onfinish = () => {
      particle.remove();
      createParticle(); // Create a new one
    };
  }

  // ============================================
  // Confetti
  // ============================================
  
  function triggerConfetti() {
    if (!DOM.confettiCanvas) return;
    
    const canvas = DOM.confettiCanvas;
    const ctx = canvas.getContext('2d');
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    const particles = [];
    const particleCount = 150;
    const colors = ['#ff6b9d', '#ff1493', '#ffd700', '#ff69b4', '#ff1493'];
    
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: canvas.width / 2,
        y: canvas.height / 2,
        vx: (Math.random() - 0.5) * 10,
        vy: Math.random() * -10 - 5,
        color: colors[Math.floor(Math.random() * colors.length)],
        size: Math.random() * 8 + 4,
        rotation: Math.random() * 360,
        rotationSpeed: (Math.random() - 0.5) * 10
      });
    }
    
    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      let activeParticles = 0;
      
      particles.forEach(particle => {
        particle.vy += 0.3; // Gravity
        particle.x += particle.vx;
        particle.y += particle.vy;
        particle.rotation += particle.rotationSpeed;
        
        if (particle.y < canvas.height) {
          activeParticles++;
          
          ctx.save();
          ctx.translate(particle.x, particle.y);
          ctx.rotate((particle.rotation * Math.PI) / 180);
          ctx.fillStyle = particle.color;
          ctx.fillRect(-particle.size / 2, -particle.size / 2, particle.size, particle.size);
          ctx.restore();
        }
      });
      
      if (activeParticles > 0) {
        requestAnimationFrame(animate);
      } else {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
      }
    }
    
    animate();
  }

  // ============================================
  // Start Application
  // ============================================
  
  // Wait for DOM to be fully loaded
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
