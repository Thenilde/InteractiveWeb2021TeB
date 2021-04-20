const express=require('express');
const router=express.Router();
const Post=require('../models/Post');


//GET BACK ALL THE POSTS
router.get('/', async (req,res)=>{
    try{
        const posts=await Post.find();
        res.json(posts);
    }catch(err){
        res.json({ message:err});

    }
  

});
 
 //SUBMITS A POST
router.post('/', async (req ,res)=> {
  const post= new Post({

      Instrument:req.body.Instrument,
      Price:req.body.Price,
      Color:req.body.Color,
      Year:req.body.Year,
      Comments:req.body.Comments
  });

   try{
       const savedPost=await post.save();
       res.json(savedPost);

   }catch(err){
       res.json({message:err});
   }
});

 ///SPECIFIC POST

  router.get('/:postId', async (req ,res)=>{
     try{
         const post=await Post.findById(req.params.postId);
         res.json(post);

     }catch(err){
         res.json({message: err});
     }
  });

  // Delete Post

  router.delete('/:postId', async (req ,res)=>{
     try{
         const removedPost=await Post.remove({_id: req.params.postId});
         res.json(removedPost);

     }catch(err){
         res.json({message: err});
     }
  });


  // Update Post

  router.patch('/:postId', async (req ,res)=>{
     try{
         const updatedPost=await Post.updateOne(
             {_id: req.params.postId},
             {$set: {Instrument: req.body.Instrument,
              Price:req.body.Price}}
              
             );
         res.json(updatedPost);

     }catch(err){
         res.json({message: err});
     }
  });

module.exports=router;