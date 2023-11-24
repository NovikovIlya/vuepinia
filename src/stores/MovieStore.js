import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useMovieStore = defineStore('movieStore', () => {
  const movies = ref([])
  const activeTabs = ref(1)
  const movieOnLocalStorage = localStorage.getItem('movies')

  const setActiveTab = (id) => {
    activeTabs.value = id
  }  

  const toggleWatched = (id) => {
    const idx = movies.value.findIndex((el) => el.id === id)
    movies.value[idx].isWatched = !movies.value[idx].isWatched
  }

  const deleteMovie = (id) => {
    movies.value = movies.value.filter((item) => item.id !== id)
  }

  const watchedMovies = computed(() => {
    return movies.value.filter((el) => el.isWatched)
  })

  const totalCountMovies1 = () => {
    return movies.value.length
  }

  const totalCountMovies = computed(() => {
    return movies.value.length
  })

  return {
    activeTabs,
    deleteMovie,
    movies,
    setActiveTab,
    toggleWatched,
    watchedMovies,
    totalCountMovies,
    totalCountMovies1
  }
})
