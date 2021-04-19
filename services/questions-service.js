

const questionsDao = require('../daos/questions-dao')
const findAllQuestions = () => questionsDao.findAllQuestions()
const findQuestionById = (qid) => questionsDao.findQuestionById(qid)
const findQuestionsForQuiz = (qid) => questionsDao.findQuestionsForQuiz(qid)
module.exports = { findAllQuestions, findQuestionById, findQuestionsForQuiz }

// const questions = require('./questions.json')
// const questionsModel = require("../models/questions/questions-model")
//
// const findAllQuestions=() => {
//     return questionsModel.find()
//     // return questions;
// }
//
// const findQuestionsForQuiz=(quizId) =>{
//     return questionsModel.find({quizId : quizId})
//
//     // return questions.filter(question => question.quizId === quizId)
// }
//
// const findQuestionById=(questionId) =>{
//     return questions.find((question)=>{
//         return question._id === questionId;
//     });
// }
//
// module.exports ={
//     findAllQuestions,
//     findQuestionsForQuiz,
//     findQuestionById
// }