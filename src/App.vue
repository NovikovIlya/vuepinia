<script setup>
import { useMovieStore } from './stores/MovieStore'
import MovieSlice from './components/MovieSlice.vue'
import Button from 'primevue/button'

const movieStore = useMovieStore();
</script>

<template>
  <div class="container">
    <header class="container__header">
      <img
        class="container__image"
        src="https://www.freepnglogos.com/uploads/film-reel-png/film-reel-the-movies-owens-valley-12.png"
        alt="text"
      />
      <div class="container__head">My favorite movies</div>
    </header>
    <div class="tabs">
      <Button
        label="Favorite"
        :class="[`btn`, { btnGreen: movieStore.activeTabs === 1 }]"
        @click="movieStore.setActiveTab(1)"
        size="small"
      
      />
      <Button
        label="Search"
        :class="[`btn`, { btnGreen: movieStore.activeTabs === 2 }]"
        @click="movieStore.setActiveTab(2)"
        size="small"
     
      />
    </div>
    <div class="movies" v-if="movieStore.activeTabs === 1">
      <h3>Watched movies</h3>
      <MovieSlice v-for="movie of movieStore.watchedMovies" :key="movie.id" :movie="movie" />

      <h3>All movies {{ movieStore.totalCountMovies}}</h3>
      <MovieSlice v-for="movie of movieStore.movies" :key="movie.id" :movie="movie" />
    </div>
    <div v-else class="search">Search</div>
  </div>
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
  width: 100%;
}
</style>
