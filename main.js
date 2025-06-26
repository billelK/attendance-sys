import { app, BrowserWindow } from 'electron';
import path from 'path';
import express from 'express';
import { fileURLToPath } from 'url';
import chokidar from 'chokidar';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const isDev = process.env.NODE_ENV === 'development';
let server;
let win;

function createWindow() {
  try {
    win = new BrowserWindow({
      width: 1280,
      height: 800,
      webPreferences: {
        contextIsolation: true,
      },
    });

    if (isDev) {
      win.loadURL('http://localhost:3000');
    } else {
      const expressApp = express();
      const outPath = path.join(__dirname, 'out');
      expressApp.use(express.static(outPath));

      server = expressApp.listen(4000, () => {
        win.loadURL('http://localhost:4000');
      });
    }
  } catch (err) {
    console.error('[❌ Electron Error]', err);
  }
}

app.whenReady().then(() => {
  createWindow();

  if (isDev) {
    chokidar.watch(['./app', './pages', './components', './main.js'], {
      ignored: /node_modules/,
      ignoreInitial: true,
    }).on('all', () => {
      if (win) {
        console.log('[🔄] Reloading Electron window');
        win.webContents.reload();
      }
    });
  }

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on('window-all-closed', () => {
  if (server) server.close();
  if (process.platform !== 'darwin') app.quit();
});
