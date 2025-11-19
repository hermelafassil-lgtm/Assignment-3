let mongoose = require('mongoose')

// create a model class
let assignmentModel = mongoose.Schema({
    title:String,
    course:String,
    duedate:String,
    priority:Date,
    status: String,
    chapter:Number
},
{
    collection:"assignments"
}
);

module.exports = mongoose.model('Assignment',assignmentModel);