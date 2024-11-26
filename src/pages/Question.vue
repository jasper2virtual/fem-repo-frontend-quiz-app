<template>

  <div class="mcq">
    <span class="mcq__number">Question {{ curIndex + 1 }} of {{ questions!.length }}</span>
    <p class="mcq__question">{{ curQuestion?.question }}</p>
    <progress class="mcq__progress daisy-progress" :value="(curIndex + 1) * 100 / questions!.length"
      max="100"></progress>
    <div class="mcq__options">

      <label v-for="(option, index) in curQuestion?.options" :key="index" :class="['mcq__optionBtn group',
        selectedOption === option && submited && correct && 'mcq__optionBtn--correct',
        selectedOption === option && submited && !correct && 'mcq__optionBtn--wrong',
        !submited && 'hover:border-app-purple has-[:focus]:border-app-purple has-[:checked]:border-app-purple'
      ]">
        <input :disabled="submited" class="mcq__optionInput" type="radio" name="mcq__optionBtn" :value="option"
          v-model="selectedOption" />
        <span :class="['mcq__optionBtnLetter',
          !submited && 'group-hover:bg-app-purple group-hover:text-base-100 group-has-[:focus]:bg-app-purple group-has-[:focus]:text-base-100 group-has-[:checked]:bg-app-purple group-has-[:checked]:text-base-100'
        ]">{{ String.fromCharCode(index + 65) }}</span>
        <span>{{ option }}</span>
        <img class="mcq__correctIcon" src="@src/assets/images/icon-correct.svg" />
        <img class="mcq__incorrectIcon" src="@src/assets/images/icon-incorrect.svg" />
      </label>

    </div>
    <button v-if="submited" class="mcq__next daisy-btn" @click="nextQuestion">Next Question</button>
    <button v-else class="mcq__submit daisy-btn" @click="submitAns">Submit Answer</button>
    <p v-if="errorMsg" class="mcq__error"><img src="@src/assets/images/icon-error.svg" />{{ errorMsg }}</p>

  </div>

</template>

<script lang="ts" setup>
import { computed, ref } from 'vue'
import { useRoute } from 'vue-router'
import { useQuizzesData } from '@data/useData'
const route = useRoute()
const subjectId = route.params.subjectId as string
const { getQuestions } = useQuizzesData
const questions = getQuestions(subjectId)
const curIndex = ref(0)
const curQuestion = computed(() => questions?.[curIndex.value])
const selectedOption = ref<string | null>(null)
const errorMsg = ref<string | null>(null)
const score = ref<number>(0)
const submited = ref<boolean>(false)
const correct = ref<boolean | null>(null)
const submitAns = () => {
  if (!selectedOption.value) {
    errorMsg.value = 'Please select an option'
    return
  }
  submited.value = true
  if (selectedOption.value === curQuestion.value?.answer) {
    score.value++
    correct.value = true
  } else {
    correct.value = false
  }
}

const nextQuestion = () => {
  if (curIndex.value < questions.length - 1) {
    curIndex.value++
    selectedOption.value = null
    submited.value = false
    correct.value = null
    errorMsg.value = null
  } else {
    console.log('Score:', score.value)
  }
}

</script>

<style lang="scss" scoped>
.mcq {
  @apply flex flex-col gap-4;
}

.mcq__number {
  @apply text-app-body-s;
}

.mcq__question {
  @apply text-app-heading-m;
}

.mcq__progress::-moz-progress-bar,
.mcq__progress::-webkit-progress-value,
.mcq__progress::-webkit-progress-bar
 {
  @apply bg-app-purple;
}

.mcq__options {
  @apply flex flex-col gap-4;
}

.mcq__optionBtn {
  @apply flex flex-row items-center rounded-md shadow-md bg-white p-2 border-2 text-app-heading-s;
}

.mcq__optionInput {
  @apply w-0 h-0;
}

.mcq__optionBtnLetter {
  @apply bg-app-light-grey p-2 aspect-square min-w-10 rounded-md text-center mr-4;
}

.mcq__optionBtn--correct {
  @apply border-app-green;
}

.mcq__optionBtn--wrong {
  @apply border-app-red;
}


.mcq__submit,
.mcq__next {
  @apply bg-app-purple text-base-100 text-app-heading-s;
}

.mcq__correctIcon,
.mcq__incorrectIcon {
  @apply ml-auto hidden;
}

.mcq__optionBtn--correct .mcq__correctIcon {
  @apply block;
}

.mcq__optionBtn--correct .mcq__optionBtnLetter {
  @apply bg-app-green text-base-100;
}

.mcq__optionBtn--wrong .mcq__incorrectIcon {
  @apply block;
}

.mcq__optionBtn--wrong .mcq__optionBtnLetter {
  @apply bg-app-red text-base-100;
}

.mcq__error {
  @apply flex flex-row gap-2 justify-center items-center text-app-red text-app-body-m;
}
</style>