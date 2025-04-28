<script setup lang="ts">
import { defineProps } from 'vue';
import { useRouter } from 'vue-router';
const {quiz} = defineProps(['quiz'])
const router = useRouter()
const navigateToQuiz = () => {
  router.push(`/quiz/${quiz.id}`)
}
</script>

<template>   
  
<div class="card" @click="navigateToQuiz" >
    <img alt="math img" class="card-img" :src="quiz.img">
    <div class="card-text">
      <h2 class="card-title">{{ quiz.name }}</h2>
      <p class="card-paragraph"> {{quiz.questions.length}} questions </p>

    </div>
  </div> 

</template>

<style scoped>
.card {
  width: 310px;
  overflow: hidden;
  border-radius: 2%;
  box-shadow: 0 4px 10px rgba(0, 0, 0.15, 0.45);
  margin-bottom: 35px;
  margin-right: 20px;
  cursor: pointer;
  background-color: #E7EEFB;
  border: 2px solid rgba(235, 235, 235, 0.64);
}

.card-img {
  width: 100%;
  height: 190px;
  margin: 0;
}

.card-text {
  padding: 0 5px;
}

.card-title {
  font-weight: bold;
}

.card-paragraph {}
</style>