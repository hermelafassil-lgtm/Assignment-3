let mongoose = require('mongoose')

// create a model class
let assignmentModel = mongoose.Schema({
    title:String,
    course:String,
    duedate:Date,
    priority:String,
    status: String,
    chapter:String
},
{
    collection:"assignments"
}
);

module.exports = mongoose.model('Assignment',assignmentModel);