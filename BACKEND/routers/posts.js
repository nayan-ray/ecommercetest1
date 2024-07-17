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
        
   
    } catch (error) {
         res.status(500).json(error)
    }
})

//update a post

router.put("/:id", async(req, res)=>{
      try {
          const post = await Post.findById(req.params.id);
          if(post.username === req.body.username){
               try {
                   const updatePost = await Post.findByIdAndUpdate(req.params.id, {
                     $set : req.body
                   }, {new : true});

                   res.status(200).json(updatePost);
                
               } catch (error) {
                   res.status(500).json(error)
               }
          }else{
              res.status(200).json("you can update only your account");
          }
      } catch (error) {
          res.status(500).json(error)
      }
})
//get a post 
router.get("/:id", async(req, res)=>{
   try {
       const getPost = await Post.findById(req.params.id);
        res.status(200).json(getPost);
    
   } catch (error) {
       res.status(500).json(error)
   }
})
//delete a post
router.delete("/:id", async(req, res)=>{
     try {
        // console.log("hello");
        // console.log(req.headers['username']);
      const getPost = await Post.findById(req.params.id);
       if(getPost.username === req.headers.username){
          try {
            await Post.findByIdAndDelete(req.params.id);
            res.status(200).json("your post has been deleted");
          } catch (error) {
            res.status(500).json(error)
          }
       }else{
           res.status(200).json("you can delete only your account");
       }
      
     } catch (error) {
         res.status(500).json(error)
     }
})

//get all post
router.get("/", async(req, res)=>{
    const username = req.query.username;
    const catName = req.query.catName;
    try {
    let posts;
       if(username){
          posts = await Post.find({username : username})
       } else if(catName){
          posts = await Post.find({categories : {$in :[catName]}})
       } else{
          posts = await Post.find({});
       }

       res.status(200).json(posts);
    } catch (error) {
       res.status(500).json(error)
    }
})
//delete post for the developer
router.delete("/delete/delete", async(req, res)=>{
      try {
        await Post.deleteMany(); 
        res.status(200).json("all post has been deleted");
      } catch (error) {
        res.status(500).json("something is wrong");
      }
})


module.exports = router;