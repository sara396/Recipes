import fs from 'fs'
const userMiddleWare={
    writeInTextNewUser:(req,res,next)=>{
        try {
            // fs.appendFileSync('./ListNewUsers.txt', JSON.stringify(req.body) + '\n');  
            fs.appendFileSync('./ListNewUsers.txt',`Id:${req.body._id}, name:${req.body.nameUser},  password:${req.body.password} ,  date: ${new Date()}`+ '\n');            
        } catch (err) {
            console.error("Error writing to file", err);
        }
        next()
    }
}

export default userMiddleWare