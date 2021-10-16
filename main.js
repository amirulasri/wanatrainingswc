const { app, BrowserWindow } = require('electron')
function createWindow() {
    const win = new BrowserWindow({
        width: 1500,
        height: 800
    })
    win.setMenu(null)
    win.loadFile('index.html')
}
app.whenReady().then(() => {
    createWindow()
})