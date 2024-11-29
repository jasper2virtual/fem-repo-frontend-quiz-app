<template>

  <div class="mcq" tabindex="0" @keyup.a="selectedOption = curQuestion?.options[0]"
    @keyup.b="selectedOption = curQuestion?.options[1]" @keyup.c="selectedOption = curQuestion?.options[2]"
    @keyup.d="selectedOption = curQuestion?.options[3]" @keyup.enter="submited ? nextQuestion() : submitAns()">
    <div class="mcq__block1">

      <span class="mcq__number">Question {{ curIndex + 1 }} of {{ questions!.length }}</span>
      <p class="mcq__question">{{ curQuestion?.question }}</p>
      <progress class="mcq__progress daisy-progress" :value="(curIndex + 1) * 100 / questions!.length"
        max="100"></progress>
    </div>
    <div class="mcq__block2">

      <div class="mcq__options">

        <label v-for="(option, index) in curQuestion?.options" :key="index" :class="['mcq__optionBtn group border-base-100',
          selectedOption === option && submited && correct && 'mcq__optionBtn--correct',
          selectedOption === option && submited && !correct && 'mcq__optionBtn--wrong',
          !submited && 'has-[:checked]:border-primary'
        ]">
          <input :disabled="submited" class="mcq__optionInput" type="radio" name="mcq__optionBtn" :value="option"
            v-model="selectedOption" />
          <span :class="['mcq__optionBtnLetter',
            !submited && 'group-hover:bg-primary/10 group-hover:text-primary group-has-[:checked]:bg-primary group-has-[:checked]:text-primary-content'
          ]">{{ String.fromCharCode(index + 65) }}</span>
          <span>{{ option }}</span>
          <img class="mcq__correctIcon" src="@src/assets/images/icon-correct.svg" />
          <img class="mcq__incorrectIcon" src="@src/assets/images/icon-incorrect.svg" />
        </label>

      </div>
      <button v-if="submited" class="app-submit-btn" @click="nextQuestion">Next Question</button>
      <button v-else class="app-submit-btn" @click="submitAns">Submit Answer</button>
      <p v-if="errorMsg" class="mcq__error"><img src="@src/assets/images/icon-error.svg" />{{ errorMsg }}</p>
    </div>

  </div>

</template>

<script lang="ts" setup>
import { computed, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useQuizzesData } from '@data/useData'
const route = useRoute()
const router = useRouter()
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
    router.push({ name: 'score', params: { outOf: questions.length, score: score.value, subjectId: subjectId } })
  }
}

</script>

<style lang="scss" scoped>
.mcq {
  @apply flex flex-col gap-4;
  @apply app-desktop:grid app-desktop:grid-cols-2 app-desktop:gap-x-24;
}

.mcq__block1,.mcq__block2 {
  @apply flex flex-col gap-4;
}


.mcq__number {
  @apply text-app-body-s text-neutral-content;
}

.mcq__question {
  @apply text-app-heading-m;
}

.mcq__progress {
  @apply my-4 bg-base-100;
  @apply app-desktop:mt-auto app-desktop:mb-24;
}

.mcq__progress::-moz-progress-bar,
.mcq__progress::-webkit-progress-value,
.mcq__progress::-webkit-progress-bar {
  @apply bg-primary;
}

.mcq__options {
  @apply flex flex-col gap-4;
}

.mcq__optionBtn {
  @apply flex flex-row items-center rounded-md shadow-md bg-base-100 p-2 border-2 text-app-heading-s;
  @apply min-h-16;
  @apply app-tablet:min-h-20;
  @apply app-desktop:min-h-24 app-desktop:p-4;
}

.mcq__optionInput {
  @apply w-0 h-0;
}

.mcq__optionBtnLetter {
  @apply bg-neutral text-neutral-content p-2 aspect-square min-w-10 rounded-md mr-4 grid place-content-center;
}

.mcq__optionBtn--correct {
  @apply border-success;
}

.mcq__optionBtn--wrong {
  @apply border-error;
}

.mcq__correctIcon,
.mcq__incorrectIcon {
  @apply ml-auto hidden;
}

.mcq__optionBtn--correct .mcq__correctIcon {
  @apply block;
}

.mcq__optionBtn--correct .mcq__optionBtnLetter {
  @apply bg-success text-base-100;
}

.mcq__optionBtn--wrong .mcq__incorrectIcon {
  @apply block;
}

.mcq__optionBtn--wrong .mcq__optionBtnLetter {
  @apply bg-error text-base-100;
}

.mcq__error {
  @apply flex flex-row gap-2 justify-center items-center text-error text-app-body-m;
}
</style>