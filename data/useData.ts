import quizzesDataJson from './quizzes-data.json'
import { defineAsyncComponent, type Component } from 'vue'
const iconsImport = import.meta.glob('@src/components/icon/*.svg.vue')

type Question=string;
type Option=string;
type Answer=string;
type MCQ={
    question:Question;
    options:Option[];
    answer:Answer;
}
type Questions=MCQ[];
type SubjectId=string;
type Title=string;
type Icon=string;
type Subject={
    subjectId:SubjectId;
    title:Title;
    icon:Icon;
    questions:Questions;
}
type Quizzes=Subject[];

const quizzesData: Quizzes = quizzesDataJson as Quizzes;

export const useQuizzesData = {
    getAllSubjectId: () => quizzesData.map(subject => subject.subjectId),
    getQuiz: (subjectId:SubjectId) => quizzesData.find(subject => subject.subjectId === subjectId),
    getTitle: (subjectId:SubjectId) => useQuizzesData.getQuiz(subjectId)?.title,
    getIcon: (subjectId:SubjectId) => useQuizzesData.getQuiz(subjectId)?.icon,
    getQuestions: (subjectId:SubjectId) => useQuizzesData.getQuiz(subjectId)?.questions,
    getIconComponent: (subjectId:SubjectId) => {
        const icon = useQuizzesData.getIcon(subjectId)
        if (icon)
            return defineAsyncComponent(() => iconsImport[`/src/components/icon/${icon}.svg.vue`]() as Promise<Component>)
        return null
    }



}