const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const fs = require('fs');
const path = require('path');

const router = express.Router();
const JWT_SECRET = process.env.ADMIN_JWT_SECRET || 'change_me';
const adminEmail = process.env.ADMIN_EMAIL || 'admin@cloudsync.com';
const adminHash = process.env.ADMIN_PASSWORD_HASH || bcrypt.hashSync('admin123', 10);

// simple login (for demo). In production use DB.
router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  if (email !== adminEmail) return res.status(401).json({ error:'Invalid' });
  const ok = await bcrypt.compare(password, adminHash);
  if (!ok) return res.status(401).json({ error:'Invalid' });
  const token = jwt.sign({ email }, JWT_SECRET, { expiresIn: '8h' });
  res.json({ token });
});

function authMiddleware(req, res, next){
  const auth = req.headers.authorization;
  if (!auth) return res.status(401).end();
  const token = auth.split(' ')[1];
  try {
    req.user = jwt.verify(token, JWT_SECRET);
    next();
  } catch {
    return res.status(401).end();
  }
}

// portfolio CRUD (file-based)
const dataPath = path.join(__dirname, 'data','portfolio.json');
function readData(){ return JSON.parse(fs.readFileSync(dataPath,'utf8')) }
function writeData(d){ fs.writeFileSync(dataPath, JSON.stringify(d,null,2)) }

router.get('/portfolio', authMiddleware, (req,res)=> res.json(readData()));
router.post('/portfolio', authMiddleware, (req,res)=>{
  const d = readData();
  const item = req.body;
  item.id = Date.now();
  d.push(item);
  writeData(d);
  res.json(item);
});
router.put('/portfolio/:id', authMiddleware, (req,res)=>{
  const id = parseInt(req.params.id);
  const d = readData();
  const idx = d.findIndex(x=>x.id===id);
  if (idx===-1) return res.status(404).end();
  d[idx] = {...d[idx], ...req.body};
  writeData(d);
  res.json(d[idx]);
});
router.delete('/portfolio/:id', authMiddleware, (req,res)=>{
  const id = parseInt(req.params.id);
  let d = readData();
  d = d.filter(x=>x.id!==id);
  writeData(d);
  res.json({ success:true });
});

module.exports = router;
