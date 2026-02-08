# Music Folder

Place your music files here!

## Supported Formats

- **MP3** - Best compatibility (recommended) ✅
- **WebM** - Good quality, smaller file size
- **OGG** - Alternative format
- **WAV** - Highest quality, larger file size

## Recommended Settings

For MP3 files:
- **Bitrate**: 128-192 kbps (good quality, reasonable file size)
- **Sample Rate**: 44.1 kHz
- **Channels**: Stereo

## File Naming

Default names in config.js:
- `track1.mp3`
- `track2.mp3`
- `track3.mp3`

You can use any names, just update the `src` path in `config.js`:

```javascript
musicTracks: [
  {
    id: "track1",
    name: "Our Song",
    src: "assets/music/your-song-name.mp3",  // ← Update this
    emoji: "🎵"
  }
]
```

## Tips

- Keep files under 10MB each
- Use compressed audio (128-192 kbps MP3) for web
- Test audio playback in browser before deploying
- Make sure files are not copyrighted if sharing publicly
- Use royalty-free music or your own recordings

## Free Royalty-Free Music Sources

- YouTube Audio Library
- Free Music Archive
- Incompetech
- Bensound
- Purple Planet

---

**Current Files in This Folder:**
- Add your music files here!
