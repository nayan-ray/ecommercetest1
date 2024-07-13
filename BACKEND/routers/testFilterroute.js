const router = require("express").Router();
const users = require("./fake_users");



router.get("/fakefilter", async(req, res)=>{
    try {
        const {q} = req.query;
        const search = (data)=>{
            return data.filter((item)=>
              item.first_name.toLowerCase().includes(q) 
            || item.last_name.toLowerCase().includes(q)
            || item.email.toLowerCase().includes(q)
             || item.gender.toLowerCase().includes(q)   
            );
        }


        res.status(200).json(search(users).slice(0 , 7));
    } catch (error) {
        res.status(500).json(error);
    } 

})



module.exports = router;