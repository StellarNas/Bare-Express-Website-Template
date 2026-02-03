# Bare Express Website Template

A minimal and clean website template built with Express.js, perfect for quickly starting a new web project. This template provides a basic structure with static file serving, HTML, CSS, and JavaScript ready to go.

## Features

- 🚀 Simple Express.js server setup
- 📁 Organized project structure (HTML, CSS, JavaScript)
- 🎨 Pre-configured static file serving
- 💡 Clean and minimal starting point
- ⚡ Easy to customize and extend

## Prerequisites

Before you begin, ensure you have the following installed:
- [Node.js](https://nodejs.org/en) (version 12.x or higher recommended)
- npm (comes with Node.js)

## Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/StellarNas/Bare-Express-Website-Template.git
   cd Bare-Express-Website-Template
   ```

2. **Initialize npm and install dependencies**
   ```bash
   npm init -y
   npm install express
   ```

3. **Start the server**
   ```bash
   node server.js
   ```

4. **View your website**
   
   Open your browser and navigate to:
   - `http://localhost:3000` 
   - or `http://127.0.0.1:3000`

   You should see the welcome page with a functional button!

## Project Structure

```
Bare-Express-Website-Template/
├── public/              # Static files directory
│   ├── css/
│   │   └── style.css    # Stylesheet
│   ├── js/
│   │   └── script.js    # Client-side JavaScript
│   └── index.html       # Main HTML file
├── server.js            # Express server configuration
├── LICENSE              # License file
└── README.md            # This file
```

## Usage

### Starting the Server

```bash
node server.js
```

The server will start on port 3000 by default. You'll see the message:
```
Server running at http://localhost:3000
```

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

### Changing the Port

To run the server on a different port, modify the `port` variable in `server.js`:

```javascript
const port = 3000; // Change this to your desired port
```

## Development Tips

- Use `nodemon` for automatic server restart during development:
  ```bash
  npm install -g nodemon
  nodemon server.js
  ```
- Add a `.gitignore` file to exclude `node_modules` from version control
- Consider adding a `package.json` with proper scripts and dependencies

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contributing

Contributions are welcome! Feel free to submit issues or pull requests to improve this template.

## Acknowledgments

Built with [Express.js](https://expressjs.com/) - Fast, unopinionated, minimalist web framework for Node.js 
