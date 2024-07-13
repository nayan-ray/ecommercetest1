const router = require("express").Router();

const Post = require("../models/PostModel");

//create post
router.post("/post", async(req, res)=>{
    try {
        const post = new Post({
              title : req.body.title,
              desc : req.body.desc,
              photo : req.body.photo,
              username : req.body.username,
              categories : req.body.categories
        })

        const savePost = await post.save();
        res.status(200).json(savePost);
        console.log(savePost);
   
    } catch (error) {
        
    }
})

//get all post
//delete post
router.delete("/delete", async(req, res)=>{
      try {
        await Post.deleteMany(); 
        res.status(200).json("all post has been deleted");
      } catch (error) {
        res.status(500).json("something is wrong");
      }
})


module.exports = router;