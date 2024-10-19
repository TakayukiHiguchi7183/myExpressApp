import express from 'express';
const router = express.Router();

import path from 'path';
import { fileURLToPath } from 'url';

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

// ルートハンドラを修正
router.get('/', (req, res, next) => {
  res.sendFile(path.join(dirname, '../public/index.html'));  // 静的なindex.htmlを返す
});

export default router;