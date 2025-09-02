import express from 'express';
import cors from 'cors';
import multer from 'multer';
import { error } from 'console';

const upload = multer({ dest: 'uploads/' })
const app = express();

app.use(cors());

app.get('/server', (req, res, next) => {
    res.json({ msg: 'server up and running!' })
})

app.post('/upload/pdf', upload.single('pdf'), (req, res, next) => {
    res.json({ msg: 'File uploaded!' })
});

app.listen(8000, () => {
    console.log('CORS-enabled web server listening on port 8000')
})