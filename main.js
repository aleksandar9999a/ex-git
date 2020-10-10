const { app, BrowserWindow } = require('electron')

let win;

function createWindow() {
    return new BrowserWindow({
        width: 600,
        height: 670,
        icon: `file://${__dirname}/dist/assets/logo.png`
    })
}

app.on('ready', () => {
    win = createWindow();

    win.loadURL(`file://${__dirname}/dist/index.html`)

    win.on('closed', function () {
        win = null
    })
})

app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})

app.on('activate', function () {
    if (win === null) {
        createWindow()
    }
})