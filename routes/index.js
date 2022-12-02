const router = require('express').Router()
const Microagression = require('../models/microagressions')
const User = require('../models/user')
//importing middleware
const { ensureAuth, ensureGuest } = require('../middleware/auth')

// router.get('/', ensureGuest ,(req, res) => {
//     res.render('login')
//   })

router
.get('/add', ensureAuth, async(req, res) => {
    try {
        Microagression.find({}, (err, microagressions) => {
			res.render("add.ejs", {
				microagressionsList: microagressions});
    }); 
}   catch (err) {
        if (err) return res.status(500).send(err)
}
}); 

// router.post('/add', ensureAuth, async (req,res) => {
//         const newMicroagression = new Microagression ( 
//             { 
//                 title: req.body.title, 
//                 content: req.body.content
//             }
//         )
//         console.log(newMicroagression)
//         try {
//             await newMicroagression.save() 
//             console.log(newMicroagression)
//             res.redirect("/examples")
//         } catch(err) {
//             if (err) return res.status(500).send(err)
//             res.redirect('/examples')
//         }
//     })

// router.get("/edit/:id", ensureAuth, async (req,res) => {
//     const id = req.params.id 
//     Microagression.find({}, (err,microagressions) => {
//         res.render('edit.ejs', { 
//             microagressionsList:microagressions, 
//             idMicroagression:id })
//     })
// })
   

// router.post("/edit/:id", ensureAuth, async (req,res) => {
//     const id = req.params.id 
//     Microagression.findByIdAndUpdate ( //Finds a matching document, updates it according to the update arg, and returns the found document 
//     //(if any) to the callback. The query executes if callback is passed.
//         id,  //ID ARGUMENT
//         {
//             title:req.body.title,        //UPDATE ARGUMENT
//             content: req.body.content

//         },
//         err => { //ERR argument
//             if (err) console.log(err) //check the error 500 
//             res.redirect('/')
//         })
// })


// router.get("/auth/google/callback",ensureAuth, async(req,res)=>{
//     res.render('index',{userinfo:req.user})
// })
module.exports=router;