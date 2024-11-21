import quizzesData from './quizzes-data.json'
import { defineAsyncComponent, Component } from 'vue'
const iconsImport = import.meta.glob('@src/components/icon/*.svg.vue')

export const useQuizzesData = {
    getAllSubjectId: () => quizzesData.map(quiz => quiz.subjectId),
    getQuiz: (subjectId) => quizzesData.find(quiz => quiz.subjectId === subjectId),
    getTitle: (subjectId) => useQuizzesData.getQuiz(subjectId)?.title,
    getIcon: (subjectId) => useQuizzesData.getQuiz(subjectId)?.icon,
    getQuestions: (subjectId) => useQuizzesData.getQuiz(subjectId)?.questions,
    getIconComponent:(subjectId)=>defineAsyncComponent(
        () => iconsImport[`@src/components/icon/${useQuizzesData.getIcon(subjectId)}.svg.vue`]() as Promise<{ default: Component }>
    )
}