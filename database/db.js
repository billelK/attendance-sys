import sqlite3 from 'sqlite3';
import { join } from 'path';
import { app } from 'electron';

let db;

export function initDatabase() {
  const dbPath = join(app.getPath('userData'), 'students.db');
  db = new sqlite3.Database(dbPath);
  db.serialize(() => {
    db.run(`
      CREATE TABLE IF NOT EXISTS students (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        email TEXT
      )
    `);
  });
}

export function handleStudentIPC(ipcMain) {
  ipcMain.on('add-student', (event, data) => {
    db.run('INSERT INTO students (name, email) VALUES (?, ?)', [data.name, data.email]);
  });

  ipcMain.handle('get-students', () => {
    return new Promise((resolve, reject) => {
      db.all('SELECT * FROM students', (err, rows) => {
        if (err) reject(err);
        else resolve(rows);
      });
    });
  });

  ipcMain.on('print', () => {
    // Will call the renderer print function (which could call window.print())
    BrowserWindow.getFocusedWindow().webContents.print();
  });
}
