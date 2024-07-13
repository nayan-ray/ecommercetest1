const express = require('express');
var morgan = require('morgan');
const cors = require('cors')
const app = express();
const mongoose = require('mongoose');
const port = 3505;
const authRouter = require("./routers/auths");
const fakefilter = require("./routers/testFilterroute");
const multer  = require('multer');
const path = require('node:path'); 



app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
// app.use("/Images", express.static(path.join(__dirname,"/Public/Images")))
mongoose.connect("mongodb+srv://niranzanroy1:01737650473@nayanproject.ww3uvvb.mongodb.net/blog")
.then(()=>console.log('database is connected'))
.catch((error)=>{
  console.log('database is not connected');
  console.log(error.message);
});


const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './Public/Images');
   
  },
  filename: function (req, file, cb) {
    console.log(file)
    return cb(null, `${file.fieldname}_${Date.now()}${path.extname
    (file.originalname)}`);
   
  }
})


const upload = multer({ storage: storage })
app.use( "/Images" ,express.static(__dirname + '/Public/Images'));
// console.log(__dirname);
// app.use(express.static('file'));
//creating upload endpoint
app.post("/uploads", upload.single('file'),(req, res)=>{
  console.log(req.file)
    res.json({
       success:true,
       img_url:`http://localhost:${port}/images/${req.file.filename}`
    })
})

app.get('/', (req, res) => {
  res.json({message:"hello"})
})
app.use("/api/auth", authRouter);
app.use("/api/test", fakefilter);



app.listen(port, () => {
  console.log(`app is runnign on port http://localhost:${port}`)
})