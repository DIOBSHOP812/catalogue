# Overview

DIOBSHOP is a professional e-commerce catalog website designed as a single-page application for selling various products online. The platform features a comprehensive product catalog with three distinct categories: available items, special order items, and digital adult books. The site integrates WhatsApp for direct customer communication and ordering, providing a seamless shopping experience with cart functionality and persistent storage.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Single-file architecture**: The entire application is contained within a single index.html file, integrating HTML, CSS, and JavaScript for simplicity and ease of deployment
- **Responsive design**: Mobile-first approach ensuring compatibility across all device sizes
- **Component-based structure**: Organized into distinct sections (header, product categories, cart) for maintainable code

## Data Management
- **Client-side storage**: Uses localStorage for cart persistence, ensuring user data survives browser sessions
- **Static product catalog**: Product information is hardcoded in JavaScript objects for simplicity
- **No backend dependency**: Fully client-side application requiring no server infrastructure

## User Interface Design
- **Professional styling**: Gradient header design with modern CSS styling
- **Category-based organization**: Three distinct product sections with specific messaging and functionality
- **Interactive cart system**: Real-time cart updates with add/remove functionality

## Business Logic
- **Multi-category product system**: 
  - Regular available items
  - Special order items (minimum 50,000 FCFA with 25% deposit requirement)
  - Digital adult books (18+ restriction with instant delivery)
- **Pricing in FCFA**: Local currency support for target market
- **WhatsApp integration**: Direct ordering through pre-filled WhatsApp messages

# External Dependencies

## Third-party Services
- **WhatsApp Business**: Direct customer communication and order processing through WhatsApp Web API
- **Font Awesome CDN**: Icon library for UI elements and WhatsApp branding
- **Google Fonts**: Typography enhancement through web font integration

## Browser APIs
- **localStorage API**: Client-side data persistence for shopping cart functionality
- **Responsive Web Design**: CSS media queries for cross-device compatibility

## No Database Required
- **Static content**: All product information is embedded in the application
- **No user authentication**: Guest shopping experience without registration requirements
- **No payment gateway**: Orders processed through WhatsApp communication