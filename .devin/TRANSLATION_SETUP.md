# Translation System Setup Guide - GTranslate

## Overview
Your Nazumi Ronin website now includes a professional translation system powered by **GTranslate**, supporting Japanese, Korean, and Chinese translations.

## What's Actually Free?

### GTranslate - FREE TIER
- **Completely free** - no API key required
- **Unlimited translations** - no character limits
- **Google Translate quality** - decent for Asian languages
- **Customizable styling** - matches your Japanese aesthetic
- **No registration** - just embed the widget

### Why GTranslate?
✅ **Completely free** - no API key, no signup, no credit card
✅ **Unlimited usage** - no character limits or quotas
✅ **Easy to customize** - styled to match your design
✅ **Asian language support** - Japanese, Korean, Chinese included
✅ **Reliable** - uses Google's translation engine

## What Was Added

### 1. GTranslate Widget
- Embedded in navigation bar
- Dropdown selector with custom styling
- Supports: English, Japanese, Korean, Chinese (Simplified & Traditional)
- Styled to match your Japanese manga aesthetic

### 2. Custom Styling
- Red background matching your primary color
- Japanese-inspired design elements
- Dark mode support
- Responsive for mobile
- Custom dropdown menu styling

### 3. Language Options
- 🇺🇸 English (default)
- 🇯🇵 日本語 (Japanese)
- 🇰🇷 한국어 (Korean)
- 🇨🇳 中文 (Chinese Simplified)
- 🇹🇼 中文 (Chinese Traditional)

## How It Works

### Automatic Translation
- GTranslate uses Google's translation engine
- Translates all text content automatically
- Preserves Japanese kanji and symbols
- Works in real-time as users browse

### User Experience
- Click the language dropdown in navigation
- Select preferred language
- Page translates instantly
- No page reload required

## Supported Languages

Currently configured:
- **English (en)**: Default language
- **Japanese (ja)**: Perfect for your Japanese-themed project
- **Korean (ko)**: Expand to Korean crypto community
- **Chinese Simplified (zh-CN)**: Reach Chinese-speaking audiences
- **Chinese Traditional (zh-TW)**: Taiwan/Hong Kong audiences

Can add more languages by editing `index.html`.

## Customization

### Add More Languages
Edit the `gtranslateSettings` in `index.html` (around line 1560):

```javascript
window.gtranslateSettings = {
  "default_language": "en",
  "languages": ["en", "ja", "ko", "zh-CN", "zh-TW", "fr", "de", "es"],
  // ... rest of settings
};
```

### Change Widget Position
Options:
- `"wrapper_selector": ".gtranslate_wrapper"` - In navigation (current)
- `"position": "inline"` - Inline with content
- `"position": "bottom_left"` - Floating bottom left
- `"position": "bottom_right"` - Floating bottom right
- `"position": "top_left"` - Floating top left
- `"position": "top_right"` - Floating top right

### Custom Styling
The widget is styled in `assets/css/nazumi-enhancements.css`. You can modify:
- Colors (currently using your primary red)
- Fonts (currently using Oswald)
- Border radius
- Shadows
- Hover effects

## Translation Quality

### Google Translate Engine
- **Good for Asian languages**: Japanese, Korean, Chinese work well
- **Context-aware**: Understands sentence structure
- **Natural phrasing**: Translations sound relatively natural
- **Limitations**: May struggle with:
  - Crypto/manga-specific terminology
  - Cultural nuances
  - Complex sentence structures

### Improving Quality
For better translations of specific terms:
1. **Manual editing**: After translation, manually fix key terms
2. **Professional review**: Have native speakers review important content
3. **Custom glossary**: GTranslate Pro offers glossary features
4. **Hybrid approach**: Use GTranslate for most content, manually translate key sections

## API Costs

### Free Tier (GTranslate)
- **100% free** - no costs
- **Unlimited translations**
- **No character limits**
- **No credit card required**
- **Commercial use allowed**

### Paid Tiers (if needed)
- GTranslate Pro: ~$9.99/month
- Adds SEO-friendly URLs
- Better translation memory
- Professional support

## Example Usage

Once set up, users can:
- Click the language dropdown in the navigation bar
- Choose 日本語 (Japanese)
- See the entire website translate to Japanese
- Click again to switch to 한국어 (Korean) or back to English

## Troubleshooting

### Widget Not Appearing
1. Check browser console for errors (F12)
2. Verify the GTranslate script loaded
3. Check that `.gtranslate_wrapper` div exists
4. Ensure no CSS conflicts

### Translation Not Working
1. Check internet connection
2. Verify GTranslate script is loading
3. Check browser console for JavaScript errors
4. Try refreshing the page

### Styling Issues
1. Check CSS specificity
2. Verify dark mode styles are applied
3. Test on different screen sizes
4. Check for conflicting styles

## Alternative: Professional Translation

For production-quality translations, consider:

1. **Lokalise** - Professional localization platform
2. **Crowdin** - Community-driven translation
3. **Gengo** - Human translation services
4. **Professional translators** - For the best quality

These services provide:
- Human-verified translations
- Cultural context awareness
- Consistent terminology
- Manga/crypto expertise

## Support

For issues with:
- **GTranslate**: https://gtranslate.io/
- **Google Translate**: https://translate.google.com/
- **Translation quality**: Consider human translation for key content
- **Technical issues**: Check browser console for error messages

## Future Upgrades

If you need better translation quality later:
1. **GTranslate Pro** - Better SEO, translation memory
2. **Microsoft Translator** - Higher quality, still has free tier
3. **DeepL** - Best quality, but limited free tier
4. **Professional translation** - Human translators for key content

---

Generated for Nazumi Ronin V1.2
