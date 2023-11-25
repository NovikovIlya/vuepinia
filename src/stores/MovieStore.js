import { defineStore } from 'pinia'
import { ref, computed, watch } from 'vue'

export const useMovieStore = defineStore('movieStore', () => {
  const movies = ref([])
  const activeTabs = ref(1)

  const movieOnLocalStorage = localStorage.getItem('movies')
  if (movieOnLocalStorage) {
    movies.value = JSON.parse(movieOnLocalStorage)._value
    console.log(JSON.parse(movieOnLocalStorage))
  }

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
  //массив?   следим    меняем
  watch(() => movies, (state) => {
      localStorage.setItem('movies', JSON.stringify(state))

      //так как следим за массивом
    },
    { deep: true }
  )

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
