let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
// connect to our assignment model
let Assignment = require('../model/assignment');

// GET route for displaying the data from DB --> Read Operation
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
// GET route for displaying the Add Page --> Create Operation
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
// POST route for processing the Add Page --> Create Operation
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
// GET route for displaying the Edit Page --> Update Operation
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
// POST route for processing the Edit Page --> Update Operation
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
            res.redirect("/assignments")
        })
    }
    catch(err)
    {
        console.log(err);
        next(err);
    }
    
})

module.exports = router;