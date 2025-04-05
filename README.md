# Ride-Hailing App Selection

A fun React application that lets users select their preferred ride-hailing app and shows encouraging messages about Namma Yatri!

## Features

- Interactive UI with animated buttons
- Fun celebration messages
- Responsive design
- Smooth animations
- Docker support for production deployment

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Docker (for production deployment)

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

### Development

To run the app in development mode:
```bash
npm start
```

The app will be available at `http://localhost:3000`

### Production Build

To create a production build:
```bash
npm run build
```

### Docker Deployment

To build and run the Docker container:
```bash
docker build -t ride-hailing-app .
docker run -p 8000:8000 ride-hailing-app
```

The app will be available at `http://localhost:8000`

## Technologies Used

- React
- CSS3 (with animations)
- Docker
- Nginx

## License

MIT 