<script setup>
import Button from 'primevue/button'
import { useMovieStore } from '../stores/MovieStore';

const movieStore = useMovieStore()
const props = defineProps({
  movie: {
    type: Object,
    required: true,
    default: () => {}
  }
});
</script>

<template>
  <div class="movie">
    <img :src="`${movie.poster_path}`" alt="text" class="poster" />
    <div class="movie__block">
      <div class="movie__block__text">
        <span class="high">{{ movie.original_title }}</span> ({{ movie.release_date }})
      </div>
      <div class="text">
        {{ movie.overview }}
      </div>
    </div>
    <div class="movie__buttons">
     
    </div>
    <div class="movie__buttons">
      <Button  size="small">Delete</Button>
      <Button  size="small"  class="movie__buttons__watched" @click="movieStore.toggleWatched(movie.id)">
        <span v-if="!movie.isWatched">Watched</span>
        <span v-else>Unwatched</span>
      </Button>
    </div>
  </div>
</template>



<style lang="scss" scoped>
.movie {
  display: grid;
  grid-template-columns: 50% 50%;
  margin-bottom: 20px;
  border: 2px solid rgb(196, 196, 196);
  border-radius: 20px;
  padding: 10px;
  &__buttons{
    display: flex;
    justify-content: space-between;
    &__watched{
      width: 193px;
      text-align: center;
      display:block;
    }
  }
  &__block {
    &__text {
      margin-bottom: 20px;
      
      
    }
  }
}
.high {
  font-size: 27px;
}
.text{
  margin-bottom: 20px;
}
.poster {
  width: 220px;
  height: 220px;
  border-radius: 50%;
  grid-row: 1/4;
}
</style>
