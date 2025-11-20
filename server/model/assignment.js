let mongoose = require('mongoose')

// creates a model class with the 
let assignmentModel = mongoose.Schema({
    title:String,
    course:String,
    duedate:Date,
    priority:String,
    status: String,
    chapter:String
},
{   // collection named assignments
    collection:"assignments"
}
);
// Exports module 
module.exports = mongoose.model('Assignment',assignmentModel);