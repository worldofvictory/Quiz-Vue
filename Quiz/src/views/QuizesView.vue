
<script setup lang="ts">
import q from '../data/quizes.json';
import {ref, watch} from "vue";
import Card from '../components/Card.vue'

const quizes = ref(q);
const search = ref<string>("");
//da fare il classe quiz???? con i tipi 

watch(search, ()=> {
  quizes.value = q.filter(quiz => quiz.name.toLowerCase().includes(search.value.toLowerCase()))
} 
//ascolta e la funzion si esegue nel momento quando in iput ci sono le modifiche

)
</script>

<template>
  <div> <!--abbiamo rimosso il classe qui, perchè lo abbiamo dichiarato in file generale App.vue, quindi viene usato lo style per tutte le pagine ed sara uguale-->
    <header class="header">
      <h1 class="header-title">Quizes</h1>
      <input v-model.trim="search" type="text" placeholder="Search...." class="header-input">
    </header>
  
    <div class="options-container">
      <Card  v-for ="quiz in quizes" :key= "quiz.id" :quiz="quiz"/>
     <!-- <div v-for ="quiz in quizes" :key= "quiz.id" class="card">
        <img
          :src="quiz.img"
          alt="math img" class="card-img">
        <div class="card-text">
          <h2 class="card-title">{{quiz.name}}</h2>
          <p class="card-paragraph"> {{quiz.questions.length}} questions </p>

        </div>
      </div> -->
   
   
    </div>
  </div>
</template>

<style scoped>


.header {
  margin-bottom: 10px;
  margin-top: 30px;
  display: flex;
  align-items: center;
}

.header-title {
  font-weight: bold;
  margin-right: 30px;
}

.header-input {
  border: none;
  background-color: rgba(235, 235, 235, 0.64);
  padding: 10px;
  border-radius: 5px;
}

.options-container {
  display: flex;
  flex-wrap: wrap;
  margin-top: 40px;
}

</style>