import { app, BrowserWindow } from 'electron';
import path from 'path';
import { fileURLToPath } from 'url';
import { startServer } from 'next/dist/server/lib/start-server.js';
import chokidar from 'chokidar';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const isDev = process.env.NODE_ENV === 'development';
let win;

async function createWindow() {
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
      // Use a fixed port
      const port = 4000;
      const appDir = path.join(__dirname, 'app'); // or wherever your Next.js app is located

      await startServer({
        dir: appDir,
        isDev: false,
        hostname: 'localhost',
        port,
        customServer: true,
        allowRetry: false,
        keepAliveTimeout: 5000,
        minimalMode: false,
      });

      console.log(`[🚀] Next.js production server started at http://localhost:${port}`);
      win.loadURL(`http://localhost:${port}`);
    }
  } catch (err) {
    console.error('[❌ Electron Error]', err);
  }
}

app.whenReady().then(() => {
  createWindow();

  if (isDev) {
    chokidar
      .watch(['./app', './pages', './components', './main.js'], {
        ignored: /node_modules/,
        ignoreInitial: true,
      })
      .on('all', () => {
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
  if (process.platform !== 'darwin') app.quit();
});
