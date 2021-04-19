
const quizzesDao = require('../daos/quizzes-dao')
const findAllQuizzes = () => quizzesDao.findAllQuizzes()
const findQuizById = (qid) => quizzesDao.findQuizById(qid)


module.exports = { findAllQuizzes, findQuizById }


// const quizzes = require('./quizzes.json')
//
// const quizzesModel = require("../models/quizzes/quizzes-model")
// //TODO: node.js assignment this week
//
// const findAllQuizzes = () => {
//     return quizzesModel.find()
//     // return quizzes
// }
//
// const findQuizById = (quizId) => {
//     // return quizzes.find((quiz) => {
//     //     return quiz._id === quizId
//     // })
//
//     return quizzesModel
//         .find({_id: quizId})
//         .populate("questions")
//         .exec()
// }
//
// console.log(findAllQuizzes())
//
// //TODO: mongoDB assignment next week
// const createQuiz = () => {}
// const deleteQuiz = () => {}
// const updateQuiz = () => {}
//
// module.exports = {
//     createQuiz,
//     findAllQuizzes,
//     deleteQuiz,
//     findQuizById,
//     updateQuiz
// }