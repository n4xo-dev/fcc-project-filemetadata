import express from "express";

const router = express.Router();

router.post('/', (req, res) => {
  const file = req.file
  if(!file)
    res.status(400).send('No file provided!');
  else {
    res.status(201).json({
      name: file.originalname,
      type: file.mimetype,
      size: file.size,
    })
  }
});

export default router;