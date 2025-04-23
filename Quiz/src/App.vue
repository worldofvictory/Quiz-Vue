<script setup lang="ts">

</script>

<template>
  <div class="container">
    <header class="header">
      <h1 class="header-title">Quizes</h1>
      <input type="text" placeholder="Search" class="header-input">
    </header>
    <div class="options-container">

    </div>
  </div>
</template>

<style scoped>
.container {
  max-width: 1000px;
  margin: 0 auto;
}

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
</style>
