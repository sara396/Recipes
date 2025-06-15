// import multer from 'multer'
// import storage from '../uploudImg.js';

// const uploudMidlleWere = {
//     fileFilter: (req, file, cb) => {
//         console.log("in midlle were file");
//         console.log(req);

//         if (file.originalname.match(/\.(png|jpg|webp|jpeg|gif)$/))
//             cb(null, true)
//         else
//             cb(new Error('Invalid file type'))
//     }
// }

// // export default uploudMidlleWere
// //כאן צריך ליצא גם את 
// //midlle were && storage

// const uploud = multer({
//     storage: storage,
//     fileFilter: uploudMidlleWere.fileFilter
// })

// export default uploud



import multer from "multer";
import fs from 'fs'
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        const uploadPath='public/uploud'
        fs.mkdirSync(uploadPath, { recursive: true });
        cb(null, uploadPath)
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname)
    }
})

const upload = multer({ storage });

export default upload