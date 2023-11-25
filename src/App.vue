<script setup>
import MovieSlice from './components/MovieSlice.vue';
import SearchSlice from './components/SearchSlice.vue';
import Button from 'primevue/button'
import { useMovieStore } from './stores/MovieStore'


const movieStore = useMovieStore();
// console.log('1',movieStore.totalCountMovies)
// console.log('2',movieStore.totalCountMovies1)

</script>

<template>
     <RouterView></RouterView>
</template>

<style lang="scss" scoped>
.container {
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  box-sizing: border-box;
  width: 50%;
  &__header {
    display: flex;
    justify-content: center;
    width: 100%;
    margin-top: 10px;
    margin-bottom: 10px;
  }
  &__image {
    width: 30px;
  }
  &__head {
    margin-left: 8px;
    text-align: center;
    font-size: 25px;
  }
}
.btn {
  padding: 10px;
  margin: 10px;
  text-align: center;
}
.btnGreen {
  color: aqua;
}
.movies {
  width: 100%;
}
.search{
  margin-bottom: 20px;
  width: 100%;
}
</style>
