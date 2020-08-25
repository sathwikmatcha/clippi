const { app, BrowserWindow } = require('electron');
function boot() {
    let win = new BrowserWindow({
        width: 200,
        height: 59,
        title: 'Clippi',
        frame: false,
    });
    win.loadURL(`file://${__dirname}/index.html`);
    win.removeMenu();
    win.setMaximizable(false);
    win.setResizable(false);
}
app.on('ready', () => {
    boot();
})