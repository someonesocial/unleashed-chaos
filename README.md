# 🌪️ Unleashed Chaos - Digitale Kunstinstallation

**Eine sinnlich-stimulierende, interaktive digitale Erfahrung, die alle Sinne anspricht und Besucher in eine traumhafte Welt eintauchen lässt.**

![Unleashed Chaos Banner](https://img.shields.io/badge/Status-Live-brightgreen) ![React](https://img.shields.io/badge/React-19.1.0-blue) ![Vite](https://img.shields.io/badge/Vite-6.3.5-purple) ![Framer Motion](https://img.shields.io/badge/Framer%20Motion-12.16.0-pink)

## 🎨 Über das Projekt

Unleashed Chaos ist das perfekte Gegenteil von "Eternal Void" - während Eternal Void maximale Langeweile verkörpert, bietet Unleashed Chaos eine Explosion der Sinne. Diese Website nutzt modernste Web-Technologien, um ein unvergessliches digitales Kunstwerk zu schaffen.

### ✨ Features

- **🎭 Interaktive Partikel**: Reagieren auf Mausbewegungen und Klicks
- **🎵 Sound-Visualisierung**: Musik wird zu visueller Kunst
- **🌈 Morphing Geometrie**: Formen, die sich kontinuierlich verwandeln
- **📱 Responsive Design**: Perfekt auf allen Geräten
- **🎢 Scroll-Magie**: Atemberaubende Parallax-Effekte
- **🎯 Chaos-Galerie**: Interaktive Kunstwerke zum Entdecken
- **🎪 Custom Cursor**: Einzigartige Mauszeiger-Erfahrung

## 🚀 Technologien

### Frontend Framework
- **React 19.1.0** - Modernste React-Features
- **Vite 6.3.5** - Blitzschnelle Entwicklung

### Animationen & Interaktionen
- **Framer Motion 12.16.0** - Hochperformante Animationen
- **GSAP 3.13.0** - Professionelle Timeline-Animationen
- **React Spring 10.0.1** - Physics-basierte Animationen

### 3D & Visuelle Effekte
- **Three.js 0.177.0** - 3D-Grafiken im Browser
- **@react-three/fiber** - React-Integration für Three.js
- **@react-three/drei** - Nützliche Three.js-Komponenten
- **TSParticles** - Interaktive Partikel-Systeme

### Styling & UI
- **Styled Components 6.1.18** - CSS-in-JS mit Theming
- **React Intersection Observer** - Scroll-basierte Animationen

## 🛠️ Installation & Entwicklung

### Voraussetzungen
```bash
Node.js >= 18
npm >= 8
```

### Lokale Entwicklung
```bash
# Repository klonen
git clone https://github.com/yourusername/unleashed-chaos.git
cd unleashed-chaos

# Abhängigkeiten installieren
npm install

# Entwicklungsserver starten
npm run dev
```

Die Website ist dann unter `http://localhost:5173` verfügbar.

### Produktions-Build
```bash
# Optimierten Build erstellen
npm run build

# Build lokal testen
npm run preview
```

## 🌐 Deployment auf GitHub Pages

### Automatisches Deployment
Das Repository ist bereits für automatisches Deployment konfiguriert:

1. **GitHub Actions** wird bei jedem Push auf `main` ausgelöst
2. Die Website wird automatisch gebaut und auf GitHub Pages deployed
3. Verfügbar unter: `https://yourusername.github.io/unleashed-chaos`

### Manuelles Deployment
```bash
# Build und Deploy in einem Schritt
npm run deploy
```

### GitHub Pages Setup
1. Repository Settings → Pages
2. Source: "GitHub Actions"
3. Die Website wird automatisch deployed

## 🎯 Projektstruktur

```
unleashed-chaos/
├── public/                 # Statische Assets
├── src/
│   ├── components/        # React-Komponenten
│   │   ├── ParticleBackground.jsx    # Interaktive Partikel
│   │   ├── HeroSection.jsx          # Haupt-Landing-Bereich
│   │   ├── InteractiveShapes.jsx    # Morphing-Geometrie
│   │   ├── SoundReactive.jsx        # Audio-Visualisierung
│   │   ├── ChaosGallery.jsx         # Kunst-Galerie
│   │   └── ScrollMagic.jsx          # Scroll-Effekte
│   ├── App.jsx           # Haupt-App-Komponente
│   ├── App.css           # Globale Styles
│   └── main.jsx          # Einstiegspunkt
├── .github/workflows/     # GitHub Actions
└── README.md             # Diese Datei
```

## 🎨 Komponentenübersicht

### ParticleBackground
- Interaktive Partikel, die auf Mausbewegungen reagieren
- Verschiedene Formen und Farben
- Collision-Detection und physikalische Effekte

### HeroSection
- Dramatischer Einstieg mit morphing Titel
- Floating Shapes die der Maus folgen
- "Chaos entfesseln" Button für Interaktion

### InteractiveShapes
- 20+ morphing geometrische Formen
- Maus-Verfolgung mit physikalischen Eigenschaften
- Klick-Interaktionen für Chaos-Effekte

### SoundReactive
- Audio-File Upload und Live-Visualisierung
- 50-Bar Audio-Spektrum-Analyzer
- Beat-Generator für Demo-Zwecke

### ChaosGallery
- 6 interaktive Kunstwerke
- Modal-System für detaillierte Ansichten
- Hover-Effekte und Transformationen

### ScrollMagic
- Parallax-Effekte beim Scrollen
- Morphing Background-Elemente
- Timeline-basierte Animationen

## 🎮 Interaktive Features

- **Mausbewegungen**: Partikel und Formen folgen dem Cursor
- **Klick-Effekte**: Explosive Animationen bei Klicks
- **Scroll-Animationen**: Elemente animieren beim Scrollen
- **Audio-Upload**: Eigene Musik visualisieren
- **Responsive Touch**: Touch-Gesten auf mobilen Geräten

## 🎓 Lernziele & Techniken

### React-Konzepte
- Hooks (useState, useEffect, useRef)
- Custom Hooks für Wiederverwendbarkeit
- Component Composition
- Performance-Optimierung

### Animation-Techniken
- CSS-in-JS Animationen
- Framer Motion Variants
- GSAP Timeline-Animationen
- Intersection Observer API

### Moderne Web-APIs
- Web Audio API für Soundverarbeitung
- Canvas API für komplexe Grafiken
- Intersection Observer für Scroll-Effekte
- File API für Audio-Upload

## 🚀 Performance-Optimierungen

- **Code Splitting**: Separate Chunks für Vendor-Libraries
- **Lazy Loading**: Komponenten laden bei Bedarf
- **Memoization**: React.memo für schwere Komponenten
- **Asset Optimization**: Komprimierte Bilder und Fonts

## 🌟 Erweiterte Features

### Für zukünftige Versionen geplant:
- WebGL-Shader für noch komplexere Effekte
- VR/AR-Integration mit WebXR
- Multiplayer-Interaktionen über WebSockets
- KI-generierte Kunstwerke
- Blockchain-Integration für NFT-Kunst

## 🤝 Beitragen

1. Fork das Repository
2. Erstelle einen Feature-Branch (`git checkout -b feature/amazing-feature`)
3. Committe deine Änderungen (`git commit -m 'Add amazing feature'`)
4. Pushe den Branch (`git push origin feature/amazing-feature`)
5. Öffne einen Pull Request

## 📄 Lizenz

Dieses Projekt steht unter der MIT-Lizenz. Siehe [LICENSE](LICENSE) für Details.

## 🙏 Danksagungen

- **Framer Motion** für unglaublich smooth Animationen
- **Three.js** für 3D-Grafiken im Browser
- **React Team** für das beste Frontend-Framework
- **Vite** für blitzschnelle Entwicklung

---

**Erstellt mit ❤️ und viel ☕ für die ultimative digitale Kunst-Erfahrung**

> "In der Technologie liegt die Kunst, und in der Kunst liegt das Chaos - und im Chaos liegt die pure Schönheit." - Unleashed Chaos Team+ Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
