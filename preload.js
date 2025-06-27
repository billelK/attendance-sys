const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electronAPI', {
  addStudent: (data) => ipcRenderer.send('add-student', data),
  getStudents: () => ipcRenderer.invoke('get-students'),
  print: () => ipcRenderer.send('print'),
  onQRScan: (callback) => ipcRenderer.on('qr-scan', (_, data) => callback(data))
});
