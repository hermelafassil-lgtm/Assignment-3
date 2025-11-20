let express = require('express');
let router = express.Router();
// Connects to mongoose
let mongoose = require('mongoose');
// connect to our assignment model
let Assignment = require('../model/assignment');

// gets the route for displaying the data  
router.get('/',async(req,res,next)=>{
    try{
        const AssignmentList = await Assignment.find();
        res.render('Assignments/list',{ 
            title:'Assignments',
            AssignmentList:AssignmentList
        })
    }
    catch(err)
    {
        console.log(err);
        res.render('Assignments/list',
            {
                error:'Error on the Server'
            }
        )
    }
});
// gets the route for displaying the add Page  
router.get('/add',async(req,res,next)=>{
    try
    {
        res.render('Assignments/add',{
            title:'Add Assignment'
        });
    }
    catch(err)
    {
        console.log(err);
        res.render('Assignments/list',
            {
                error:'Error on the Server'
            }
        )
    }
})
// gets the route for displayign the infomratoin to edit
router.post('/add',async(req,res,next)=>{
    try
    {
        let newAssignment = Assignment({
            "title":req.body.title,
            "course":req.body.course,
            "duedate":req.body.duedate,
            "priority":req.body.priority,
            "status":req.body.status,
            "chapter":req.body.chapter
        })
        Assignment.create(newAssignment).then(()=>{
            res.redirect('/assignments')
        });
    }
     catch(err)
    {
        console.log(err);
        res.render('asignments/list',
            {
                error:'Error on the Server'
            }
        )
    }
})
// gets the route for displaying the Edit Page 
router.get('/edit/:id',async(req,res,next)=>{
    try
    {
        const id = req.params.id;
        const AssignmentToEdit = await Assignment.findById(id);
        res.render("Assignments/edit",
            {
                title: 'Edit Assignment',
                Assignment: AssignmentToEdit,
            }
        )
    }
    catch(err)
    {
        console.log(err);
        next(err);
    }
 
})
//posts roude for update Operation
router.post('/edit/:id',async(req,res,next)=>{
    try{
        let id = req.params.id;
        let updateAssignment = Assignment({
            "_id":id,
            "title":req.body.title,
            "course":req.body.course,
            "duedate":req.body.duedate,
            "priority":req.body.priority,
            "status":req.body.status,
            "chapter":req.body.chapter
        })
        Assignment.findByIdAndUpdate(id,updateAssignment).then(()=>{
            res.redirect("/assignments")
        })
    }
    catch(err)
    {
        console.log(err);
        next(err);
    }

})
// GET route to perform Delete Operation
router.get('/delete/:id',async(req,res,next)=>{
    try{
        let id = req.params.id;
        Assignment.deleteOne({_id:id}).then(()=>{
            // redirects to the assignemts page
            res.redirect("/assignments")
        })
    }
    catch(err)
    {
        console.log(err);
        next(err);
    }
    
})
// exports the routuer
module.exports = router;