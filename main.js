const { app, BrowserWindow } = require('electron')
function createWindow() {
    const win = new BrowserWindow({
        width: 1500,
        height: 800,
        icon: __dirname + '/wanaicon.ico'
    })
    win.setMenu(null)
    win.loadFile('index.html')
}
app.whenReady().then(() => {
    createWindow()
})