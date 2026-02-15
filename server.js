const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3000;

const mimeTypes = {
    '.html': 'text/html',
    '.css': 'text/css',
    '.js': 'text/javascript',
    '.json': 'application/json'
};

const server = http.createServer((req, res) => {
    let filePath = path.join(__dirname, 'public', req.url === '/' ? 'index.html' : req.url);
    const ext = path.extname(filePath);
    const contentType = mimeTypes[ext] || 'text/plain';

    fs.readFile(filePath, (err, content) => {
        if (err) {
            if (err.code === 'ENOENT') {
                res.writeHead(404);
                res.end('404 - File Not Found');
            } else {
                res.writeHead(500);
                res.end('500 - Internal Server Error');
            }
        } else {
            res.writeHead(200, { 'Content-Type': contentType });
            res.end(content);
        }
    });
});

server.listen(PORT, () => {
    console.log('\n🎉 图形化计算器服务器已启动！');
    console.log('━'.repeat(50));
    console.log(`\n🌐 在浏览器中打开: http://localhost:${PORT}`);
    console.log(`\n✨ 功能特点:`);
    console.log('  • 漂亮的图形界面');
    console.log('  • 支持鼠标点击操作');
    console.log('  • 支持键盘输入');
    console.log('  • 实时计算历史记录');
    console.log('  • 所有高级运算（MOD, x^y, √）');
    console.log('\n按 Ctrl+C 停止服务器');
    console.log('━'.repeat(50) + '\n');
});
