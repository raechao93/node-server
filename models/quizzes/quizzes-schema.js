const mongoose =  require("mongoose")
const questionsSchema = require("../questions/questions-schema")
const quizzesSchema = mongoose.Schema({
    _id: String,
    title: String,
    questions: [{
        //Mark relationship here
        type: String,
        ref: "QuestionsModel"
    }],
    embeddedQuestions: [questionsSchema]
}, {collection:"quizzes"});

module.exports = quizzesSchema;