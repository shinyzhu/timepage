import express from 'express';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(join(__dirname, 'public'), {
  maxAge: '1h',
  etag: true,
}));

app.listen(PORT, () => {
  console.log(`TimePage running at http://localhost:${PORT}`);
});
