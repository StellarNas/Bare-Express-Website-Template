# Bare Express Website Template

A minimal and clean website template built with Express.js, perfect for quickly starting a new web project. This template provides a solid foundation with essential security features, error handling, logging, and best practices baked in.

## ✨ Features

- 🚀 Simple Express.js server setup with modern best practices
- 🔒 Built-in security with Helmet.js
- 📁 Organized project structure (HTML, CSS, JavaScript)
- 🎨 Pre-configured static file serving
- 💡 Clean and minimal starting point
- ⚡ Easy to customize and extend
- 🛡️ Comprehensive error handling (404 and global error handlers)
- 📝 Request logging with Morgan
- 🗜️ Response compression for better performance
- 🔧 Environment variable configuration
- 🌐 CORS enabled
- 💚 Health check endpoint
- 🔄 Graceful shutdown handling

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- [Node.js](https://nodejs.org/en) (version 14.x or higher)
- npm (comes with Node.js)

## 🚀 Quick Start

1. **Clone the repository**
   ```bash
   git clone https://github.com/StellarNas/Bare-Express-Website-Template.git
   cd Bare-Express-Website-Template
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   ```
   Edit `.env` to customize your configuration (optional - defaults work out of the box)

4. **Start the server**
   
   For development (with auto-reload):
   ```bash
   npm run dev
   ```
   
   For production:
   ```bash
   npm start
   ```

5. **View your website**
   
   Open your browser and navigate to:
   - `http://localhost:3000` 
   
   You should see the welcome page with a functional button!

## 📁 Project Structure

```
Bare-Express-Website-Template/
├── public/              # Static files directory
│   ├── css/
│   │   └── style.css    # Stylesheet
│   ├── js/
│   │   └── script.js    # Client-side JavaScript
│   └── index.html       # Main HTML file
├── server.js            # Express server configuration
├── package.json         # Project dependencies and scripts
├── .env.example         # Environment variables template
├── .gitignore          # Git ignore rules
├── LICENSE              # License file
└── README.md            # This file
```

## ⚙️ Configuration

### Environment Variables

Create a `.env` file in the root directory (use `.env.example` as a template):

```env
# Server Configuration
PORT=3000
NODE_ENV=development
```

**Available Variables:**
- `PORT` - The port number for the server (default: 3000)
- `NODE_ENV` - Environment mode: `development` or `production` (default: development)

### Scripts

The following npm scripts are available:

```bash
npm start       # Start the server in production mode
npm run dev     # Start the server with nodemon for development
npm test        # Run tests (placeholder - add your tests)
```

## 🔌 Built-in Endpoints

### Home Page
- **GET** `/` - Serves the main HTML page

### Health Check
- **GET** `/health` - Returns server health status and uptime
  ```json
  {
    "status": "healthy",
    "timestamp": "2024-01-01T00:00:00.000Z",
    "uptime": 123.456,
    "environment": "development"
  }
  ```

## 🛠️ Usage

### Customizing Your Website

1. **HTML**: Edit `public/index.html` to change the page structure and content
2. **CSS**: Modify `public/css/style.css` to update the styling
3. **JavaScript**: Update `public/js/script.js` to add interactive functionality
4. **Server**: Configure `server.js` to add routes, middleware, or change settings

### Adding More Pages

To add additional pages to your website:

1. Create a new HTML file in the `public` directory (e.g., `about.html`)
2. Access it at `http://localhost:3000/about.html`

Express automatically serves static files from the `public` directory!

### Adding API Routes

Add new routes in `server.js` before the error handling middleware:

```javascript
// Example API endpoint
app.get('/api/data', (req, res) => {
  res.json({ message: 'Hello from API!' });
});

app.post('/api/submit', (req, res) => {
  const data = req.body;
  // Process the data
  res.json({ success: true, data });
});
```

## 🔒 Security Features

This template includes several security best practices:

- **Helmet.js** - Sets various HTTP headers for security
- **Content Security Policy** - Prevents XSS attacks
- **CORS** - Configurable cross-origin resource sharing
- **Input Validation** - Ready for body parsing with Express
- **Error Handling** - Prevents information leakage in production

## 📊 Logging

The template uses Morgan for HTTP request logging:
- **Development mode**: Detailed colored output
- **Production mode**: Apache combined log format

## 🚦 Error Handling

### 404 Errors
Unmatched routes return a JSON response:
```json
{
  "error": "Not Found",
  "message": "Cannot GET /unknown-route",
  "path": "/unknown-route"
}
```

### 500 Errors
Server errors are caught and handled gracefully:
- Development: Full error details with stack trace
- Production: Generic error message (prevents information leakage)

## 🔄 Graceful Shutdown

The server handles shutdown signals properly:
- Closes all connections gracefully
- Waits for ongoing requests to complete
- Force shutdown after 10 seconds if needed

## 🧪 Testing

To add tests, install a testing framework like Jest or Mocha:

```bash
npm install --save-dev jest
```

Then update the test script in `package.json` and create your test files.

## 🚀 Deployment

### Heroku

```bash
heroku create your-app-name
git push heroku main
```

### Vercel

```bash
npm install -g vercel
vercel
```

### Docker

Create a `Dockerfile`:
```dockerfile
FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install --production
COPY . .
EXPOSE 3000
CMD ["npm", "start"]
```

Build and run:
```bash
docker build -t bare-express-app .
docker run -p 3000:3000 bare-express-app
```

## 📦 Dependencies

### Production
- **express** - Fast, unopinionated web framework
- **helmet** - Security middleware
- **morgan** - HTTP request logger
- **cors** - CORS middleware
- **compression** - Response compression
- **dotenv** - Environment variable management

### Development
- **nodemon** - Auto-restart server on file changes

## 🤝 Contributing

Contributions are welcome! Feel free to:
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the GPL-3.0 License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

Built with [Express.js](https://expressjs.com/) - Fast, unopinionated, minimalist web framework for Node.js

## 📚 Additional Resources

- [Express.js Documentation](https://expressjs.com/)
- [Node.js Best Practices](https://github.com/goldbergyoni/nodebestpractices)
- [Helmet.js Documentation](https://helmetjs.github.io/)

## 💬 Support

If you have any questions or run into issues, please open an issue on GitHub.

---

Made with ❤️ using Express.js
