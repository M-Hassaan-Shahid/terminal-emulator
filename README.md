# Terminal Emulator

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)
![Node](https://img.shields.io/badge/node-%3E%3D14-brightgreen.svg)
![License](https://img.shields.io/badge/license-MIT-green.svg)

A modern, cross-platform terminal emulator built with React, Redux, WebSockets, and Electron. Features a beautiful, responsive UI with real-time command execution.

## ✨ Features

- 🎨 **Modern UI Design** - Beautiful, dark-themed interface with smooth animations
- 🚀 **Real-time Execution** - WebSocket-based command execution
- 📱 **Responsive** - Works on desktop and mobile browsers
- 🖥️ **Cross-platform** - Runs on Windows, macOS, and Linux
- ⚡ **Fast & Lightweight** - Built with performance in mind
- 🎯 **Electron Support** - Run as a standalone desktop application

## 🖼️ Screenshots

The terminal features:

- Catppuccin-inspired color scheme
- macOS-style window controls
- Smooth animations and transitions
- Custom scrollbar styling
- Responsive design for all screen sizes

## 🚀 Quick Start

### Prerequisites

- Node.js 14 or higher
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd terminal-emulator

# Install dependencies
npm install

# Build the project
npm run build

# Start the development server
npm run dev
```

The terminal will be available at `http://localhost:9001`

## 📜 Available Scripts

| Command            | Description                              |
| ------------------ | ---------------------------------------- |
| `npm run build`    | Build the project for production         |
| `npm run dev`      | Start development server with hot reload |
| `npm run electron` | Run as Electron desktop application      |
| `npm test`         | Run all unit tests                       |

## 🏗️ Project Structure

```
terminal-emulator/
├── src/
│   ├── backend/          # Node.js backend server
│   │   ├── server.js     # Express & WebSocket server
│   │   ├── session.js    # Terminal session management
│   │   └── CommandRunner.js
│   ├── frontend/         # React frontend
│   │   ├── components/   # React components
│   │   ├── actions/      # Redux actions
│   │   ├── reducers/     # Redux reducers
│   │   ├── clients/      # WebSocket client
│   │   └── index.jsx     # Entry point
│   └── electron.js       # Electron main process
├── tasks/
│   └── build.js          # Cross-platform build script
├── test/                 # Test files
└── dist/                 # Built files (generated)
```

## 🛠️ Technology Stack

### Frontend

- **React 17** - UI library
- **Redux** - State management
- **React-Redux** - React bindings for Redux
- **Redux Thunk** - Async action handling
- **Sass** - CSS preprocessing

### Backend

- **Node.js** - Runtime environment
- **Express** - Web server
- **WebSocket (ws)** - Real-time communication
- **Child Process** - Command execution

### Build Tools

- **Browserify** - Module bundler
- **Babel 7** - JavaScript transpiler
- **Sass** - CSS compiler

### Desktop

- **Electron 28** - Desktop application framework

## 🎨 UI Design

The terminal features a modern design with:

- **Color Scheme**: Catppuccin-inspired dark theme
- **Typography**: Monospace fonts (Consolas, Monaco, Courier New)
- **Animations**: Smooth fade-in effects and hover transitions
- **Responsive**: Mobile-friendly with adaptive layouts
- **Accessibility**: Proper ARIA labels and semantic HTML

## 🧪 Testing

The project includes comprehensive unit tests:

```bash
npm test
```

Tests cover:

- Command runner functionality
- Session management
- Redux actions and reducers
- React component rendering

All tests use:

- **Mocha** - Test framework
- **Chai** - Assertion library
- **Sinon** - Mocking and stubbing
- **jsdom** - DOM testing

## 🔧 Configuration

### Server Ports

- **Frontend**: `9001`
- **WebSocket**: `9002`

You can modify these in `src/backend/server.js`

### Build Configuration

The build process is configured in `tasks/build.js` and supports:

- JavaScript bundling with Browserify
- JSX transformation with Babel
- SCSS compilation with Sass
- File copying and directory management

## 📝 Development

### Adding New Features

1. Create components in `src/frontend/components/`
2. Add Redux actions in `src/frontend/actions/`
3. Update reducers in `src/frontend/reducers/`
4. Style with SCSS in component directories

### Running in Development Mode

```bash
npm run dev
```

This will:

1. Build the project
2. Start the Express server
3. Initialize WebSocket server
4. Serve the frontend

### Building for Production

```bash
npm run build
```

Output will be in the `dist/` directory.

## 🖥️ Electron Desktop App

Run as a standalone desktop application:

```bash
npm run electron
```

This launches the terminal in an Electron window with native OS integration.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- Original concept inspired by iTerm2 and modern terminal emulators
- UI design inspired by Catppuccin color scheme
- Built with modern web technologies and best practices

## 📞 Support

If you encounter any issues or have questions, please open an issue on GitHub.

---

**Made with ❤️ using React, Redux, and Electron**
