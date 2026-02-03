/**
 * Bare Express Website Template
 * A minimal and clean website template with essential security and error handling
 */

// Load environment variables
require('dotenv').config();

// Import dependencies
const express = require('express');
const path = require('path');
const helmet = require('helmet');
const morgan = require('morgan');
const cors = require('cors');
const compression = require('compression');

// Initialize Express app
const app = express();

// Configuration
const port = process.env.PORT || 3000;
const environment = process.env.NODE_ENV || 'development';

// Security middleware - Helmet helps secure Express apps by setting various HTTP headers
app.use(helmet({
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      scriptSrc: ["'self'"],
      styleSrc: ["'self'", "'unsafe-inline'"],
      imgSrc: ["'self'", "data:", "https:"],
    },
  },
}));

// CORS - Enable Cross-Origin Resource Sharing
app.use(cors());

// Compression middleware - Compress all routes
app.use(compression());

// Logging middleware
if (environment === 'development') {
  app.use(morgan('dev')); // Detailed logging for development
} else {
  app.use(morgan('combined')); // Standard Apache combined log format for production
}

// Body parsing middleware
app.use(express.json()); // Parse JSON request bodies
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded request bodies

// Static files middleware
app.use(express.static(path.join(__dirname, 'public')));

/**
 * Routes
 */

// Home route
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Health check endpoint
app.get('/health', (req, res) => {
  res.status(200).json({
    status: 'healthy',
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
    environment: environment
  });
});

/**
 * Error Handling Middleware
 */

// 404 Handler - Catch all unmatched routes
app.use((req, res, next) => {
  res.status(404).json({
    error: 'Not Found',
    message: `Cannot ${req.method} ${req.path}`,
    path: req.path
  });
});

// Global Error Handler
app.use((err, req, res, next) => {
  // Log error for debugging
  console.error('Error:', err.stack);

  // Determine status code
  const statusCode = err.statusCode || 500;

  // Send error response
  res.status(statusCode).json({
    error: environment === 'development' ? err.message : 'Internal Server Error',
    ...(environment === 'development' && { stack: err.stack })
  });
});

/**
 * Server Startup with Graceful Shutdown
 */

const server = app.listen(port, () => {
  const url = `http://localhost:${port}`;
  const urlPadding = 51 - url.length;
  
  console.log(`
╔════════════════════════════════════════════════════════╗
║  Server is running!                                    ║
║  ------------------------------------------------      ║
║  Environment: ${environment.padEnd(36)} ║
║  Port: ${String(port).padEnd(45)} ║
║  URL: ${url}${' '.repeat(urlPadding)} ║
║  ------------------------------------------------      ║
║  Press Ctrl+C to stop the server                       ║
╚════════════════════════════════════════════════════════╝
  `);
});

// Graceful shutdown handler
const gracefulShutdown = (signal) => {
  console.log(`\n${signal} received. Starting graceful shutdown...`);
  
  server.close(() => {
    console.log('Server closed. All connections terminated.');
    process.exit(0);
  });

  // Force shutdown after 10 seconds
  setTimeout(() => {
    console.error('Forced shutdown due to timeout.');
    process.exit(1);
  }, 10000);
};

// Listen for termination signals
process.on('SIGTERM', () => gracefulShutdown('SIGTERM'));
process.on('SIGINT', () => gracefulShutdown('SIGINT'));

// Handle uncaught exceptions
process.on('uncaughtException', (err) => {
  console.error('Uncaught Exception:', err);
  gracefulShutdown('uncaughtException');
});

// Handle unhandled promise rejections
process.on('unhandledRejection', (reason, promise) => {
  console.error('Unhandled Rejection at:', promise, 'reason:', reason);
  gracefulShutdown('unhandledRejection');
});
