const express = require('express');
const router = express.Router();
const db = require('../../../../../database/nicobu');
const app = express();
const multer = require('multer');
const Jimp = require('jimp');

const storage = multer.diskStorage({
  destination: (req, res, cb) => {
    cb(null, './uploads');
  },
  filename: (req, res, cb) => {
    cb(null, res.originalname);
  },
});
const upload = multer({ storage: storage });

router.post('/images', upload.single('file'), (req, res) => {
  // CONFIGURE SHARP

  let thumb_width = 300;
  let thumb_height = 300;

  Jimp.read(req.file.path, (err, img) => {
    if (err) throw err;
    img
      .resize(thumb_width, thumb_height) // resize
      .quality(60) // set JPEG quality
      .write('uploads/thumbnail_' + req.file.originalname); // save
  });

  if (req.file == null) {
    return res.status(400).json({ msg: 'No File uploaded' });
  }
  try {
    res.send(req.file);
  } catch (err) {
    res.send(400);
  }
});

module.exports = router;
