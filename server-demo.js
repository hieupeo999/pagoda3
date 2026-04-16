const http = require('http');
const fs   = require('fs');
const path = require('path');

const ROOT = __dirname;
const PORT = 3001;

// Map /images/gallery-N.jpg → actual files in folder
const IMG_MAP = {
  'gallery-1.jpg':  'z7729041069295_3ccb764ef018b8dcd05733fe1c014312.jpg',
  'gallery-2.jpg':  'z7729041073279_66393273d6aeb4a43b0ae49edf083e6f.jpg',
  'gallery-3.jpg':  'z7729041083268_22dcc9f9098befb7776c9a05683a2b43.jpg',
  'gallery-4.jpg':  'z7729041090244_78c3bc5c699f98be85de39ec5bc1cad6.jpg',
  'gallery-5.jpg':  'z7729041093671_6b6f77e1367bd6a8fd9e1c93917a4c54.jpg',
  'gallery-6.jpg':  'z7729041113504_9d5fe54a2a514a8e9d60b418169dd7ff.jpg',
  'gallery-7.jpg':  'z7729041126917_327fb440ac2e8df93bbe1435beaa018e.jpg',
  'gallery-8.jpg':  'z7729202861837_f8010ee608514cdd753dda664c6d2a30.jpg',
  'gallery-9.jpg':  'z7729202883171_cab8e48c6810709caaec221d99a69d93.jpg',
  'gallery-10.jpg': 'z7729234198787_a747e366b3eca969f2ad6d8b4f46b36d.jpg',
  'hero-1.jpg':     'z7729041113840_b1dc153c555fb53e7e8eb18baaac60ba.jpg',
  'hero-2.jpg':     'z7729202868458_7b108997936b2982ee38537f50beff86.jpg',
  'hero-3.jpg':     'z7729202872473_db823285e4583e027928fd43ef5a19b5.jpg',
};

const MIME = { '.html':'text/html', '.js':'application/javascript', '.css':'text/css', '.jpg':'image/jpeg', '.png':'image/png', '.ico':'image/x-icon' };

http.createServer((req, res) => {
  let url = req.url.split('?')[0];
  if (url === '/' || url === '') url = '/index.html';

  // Image mapping
  if (url.startsWith('/images/')) {
    const name = path.basename(url);
    const mapped = IMG_MAP[name];
    if (mapped) {
      const file = path.join(ROOT, mapped);
      if (fs.existsSync(file)) {
        res.writeHead(200, { 'Content-Type': 'image/jpeg' });
        fs.createReadStream(file).pipe(res);
        return;
      }
    }
    res.writeHead(404); res.end('Not found'); return;
  }

  const file = path.join(ROOT, url);
  if (!fs.existsSync(file) || fs.statSync(file).isDirectory()) {
    res.writeHead(404); res.end('Not found'); return;
  }
  const ext = path.extname(file);
  res.writeHead(200, { 'Content-Type': MIME[ext] || 'text/plain' });
  fs.createReadStream(file).pipe(res);

}).listen(PORT, () => console.log(`✅ Demo chùa Phúc Sinh Tự → http://localhost:${PORT}`));
