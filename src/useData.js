import quizzesData from './quizzes-data.json'

export const useQuizzesData = {
    getAllSubjectId: () => quizzesData.map(quiz => quiz.subjectId),
    getQuiz: (subjectId) => quizzesData.find(quiz => quiz.subjectId === subjectId),
    getTitle: (subjectId) => useQuizzesData.getQuiz(subjectId).title,
    getIcon: (subjectId) => useQuizzesData.getQuiz(subjectId).icon,
    getQustions: (subjectId) => useQuizzesData.getQuiz(subjectId).questions,
}