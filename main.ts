import { app, BrowserWindow, screen } from 'electron';
import * as path from 'path';
import * as url from 'url';
import { DefaultApiKeys } from './src/app/default-api-keys';

let win, serve;
const args = process.argv.slice(1);
serve = args.some(val => val === '--serve');

const settings = require('electron-settings');

// Set up Google API key for geolocation
process.env.GOOGLE_API_KEY =
  settings.get('keys.google.apiKey') === ''
    ? DefaultApiKeys.google.apiKey
    : settings.get('keys.google.apiKey');

try {
  require('dotenv').config();
} catch {
  console.log('asar');
}

function createWindow() {
  const workAreaSize = screen.getPrimaryDisplay().workAreaSize;

  // Create the browser window.
  win = new BrowserWindow({
    frame: false,
    minWidth: 800,
    minHeight: 600,
    width: workAreaSize.width,
    height: workAreaSize.height,
    webPreferences: {
      webSecurity: false
    }
  });

  win.maximize();

  if (serve) {
    require('electron-reload')(__dirname, {
      electron: require(`${__dirname}/node_modules/electron`)
    });
    win.loadURL('http://localhost:4200');
  } else {
    win.loadURL(
      url.format({
        pathname: path.join(__dirname, 'dist/index.html'),
        protocol: 'file:',
        slashes: true
      })
    );
  }

  // Logic to open external links in browser

  function isExternalURL(_url) {
    if (serve && _url.startsWith('http://localhost:4200')) {
      return false;
    }

    return _url.startsWith('http:') || _url.startsWith('https:');
  }

  const shell = require('electron').shell;

  win.webContents.on('will-navigate', (event, _url) => {
    if (isExternalURL(_url)) {
      event.preventDefault();
      shell.openExternal(_url);
    }
  });

  // Emitted when the window is closed.
  win.on('closed', () => {
    // Dereference the window object, usually you would store window
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    win = null;
  });
}

try {
  // This method will be called when Electron has finished
  // initialization and is ready to create browser windows.
  // Some APIs can only be used after this event occurs.
  app.on('ready', createWindow);

  // Quit when all windows are closed.
  app.on('window-all-closed', () => {
    // On OS X it is common for applications and their menu bar
    // to stay active until the user quits explicitly with Cmd + Q
    if (process.platform !== 'darwin') {
      app.quit();
    }
  });

  app.on('activate', () => {
    // On OS X it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (win === null) {
      createWindow();
    }
  });
} catch (e) {
  // Catch Error
  // throw e;
}
