# Choose Your Own Adventure - Christmas Gift

A web-based interactive choose-your-own-adventure book with three different themed storylines for your kids!

## Story Themes

1. **Star Wars** - `starwars.html`
2. **Harry Potter** - `harrypotter.html`
3. **Minecraft** - `minecraft.html`

## How to Use

Each child gets their own URL:
- Star Wars: Open `starwars.html` in a web browser
- Harry Potter: Open `harrypotter.html` in a web browser
- Minecraft: Open `minecraft.html` in a web browser

## Story Structure

Each story features:
- Multiple decision points that branch into different adventures
- Unique paths that shape the story
- All paths eventually lead to a final gift reveal
- The final decision allows them to choose between:
  - Universal Studios Annual Pass
  - Disney Annual Pass
  - Busch Gardens Annual Pass

## Adding Images

Image placeholders are included throughout the stories. To add your custom images:

1. Create an `images` folder in the project directory
2. Create subfolders for each theme:
   - `images/starwars/`
   - `images/harrypotter/`
   - `images/minecraft/`
3. Add images with the following naming convention (as referenced in `stories.js`):
   - `start.png` or `start.jpg` - Opening scene (both .png and .jpg are supported)
   - `[node-name].png` or `[node-name].jpg` - Each story node has an image reference
   - `gift-reveal.png` or `gift-reveal.jpg` - The gift selection page
   
   **Note:** Both .png and .jpg image formats are fully supported throughout the application.

## Image Dimensions

**Good news!** You can use images of **any size or aspect ratio** - the app will automatically adjust them to fit perfectly on both phones and computers!

- Images will automatically scale to fit the screen width (up to 600px on desktop, full width on mobile)
- Images maintain their original aspect ratio (no distortion)
- Images are never cropped - the full image is always visible
- Works great on phones, tablets, and computers

**No specific dimensions required!** Just create your images in whatever size works best for your image creator tool, and the app will handle the rest.

## File Structure

```
ChristmasGift/
├── index.html          # Main entry (can be used as landing page)
├── starwars.html       # Star Wars adventure
├── harrypotter.html    # Harry Potter adventure
├── minecraft.html      # Minecraft adventure
├── styles.css          # All styling
├── app.js              # Application logic and routing
├── stories.js          # All story data
└── images/             # Your custom images (create this folder)
    ├── starwars/
    ├── harrypotter/
    └── minecraft/
```

## Customization

You can customize the stories by editing `stories.js`. Each story node contains:
- `title`: The page title
- `text`: The story text
- `image`: Path to the image (optional)
- `decisions`: Array of choices the player can make
- `type`: Special node types like "gift-reveal" or "final-gift"

## Running Locally

Simply open any of the HTML files in a web browser. No server required! However, if you want to serve it properly (especially for sharing), you can:

1. Use a simple HTTP server:
   ```bash
   python -m http.server 8000
   ```
   Then visit `http://localhost:8000/starwars.html`

2. Or use any static file hosting service

## Notes

- The app uses localStorage to remember the selected theme park choice
- Each story has multiple branching paths that all converge at the gift reveal
- Image placeholders will display if images are not found
- The design is responsive and works on mobile devices

Enjoy your adventure! 🎁

