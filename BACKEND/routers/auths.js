const router = require("express").Router();
const { json } = require("express");
const User = require("../models/UserModel");
const bcript =require("bcrypt");

//register

router.post("/register", async(req, res)=>{
    try {
        const salt =await bcript.genSalt(10);
        const hashpass = await bcript.hash(req.body.password, salt);
         const newUser = new User({
            username : req.body.username,
            email : req.body.email,
            password : hashpass,
            photo : req.body.photo,
            //in this way i have to set all property defined in schema
         })

         const user = await newUser.save();
         res.status(200).json(user)
    } catch (error) {
        res.status(500).json(error);
    }
})


//login
router.post("/login", async(req, res)=>{
    try {
        const user =await User.findOne({email : req.body.email});
        if(user){
            try {
                const match = await bcript.compare(req.body.password, user.password);
                if(match){
                    // const{username } =user._doc;
                   res.status(200).json({user});
                }else{
                    res.status(500).json({message:"passord is wrong"});
                }
            } catch (error) {
                res.status(500).json(error);
            }
        }else{
            res.status(500).json({message:"email is wrong"});
        }
    } catch (error) {
        res.status(500).json(error);
    }
})
//getuser
router.get("/alluser", async(req, res)=>{
    try {
        const alldata = await User.find();
        res.status(200).json(alldata);
    } catch (error) {
        res.status(500).json(error);
    }
})

//put
router.put("/:id", async(req, res)=>{
    if(req.body.userid === req.params.id){
         if(req.body.password){
            const salt =await bcript.genSalt(10);
            req.body.password = await bcript.hash(req.body.password, salt); 
         }
         try {
             const updateUser= await User.findByIdAndUpdate(
                {
                    _id : req.params.id
                },
                {
                   $set : req.body,
                   //{username : req.body.username, password : req.body.password, photo: req.body.photo} 
                   $currentDate: { lastModified: true} 
                },
                {new : true}
             )
             res.status(200).json({ user :updateUser})
         } catch (error) {
            res.status(500).json(error);
         }
    }else{
        res.status(500).json({message: "you can't update other account"})
    }
})

//deleteall
router.delete("/delete", async(req, res)=>{
    try {
        await User.deleteMany();
        res.status(200).json({message: "all documents has deletd"});
    } catch (error) {
        res.status(500).json(error);
    }
})




module.exports = router;