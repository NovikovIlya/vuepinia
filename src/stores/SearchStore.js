import { defineStore } from 'pinia'
import { useMovieStore } from './MovieStore'
import { ref } from 'vue'

const url = 'https://api.kinopoisk.dev/v1.4/person/search?query='

export const useSearchStore = defineStore('searchStore', () => {
  const loader = ref(false)
  const actors = ref([])

  const getActors = async (search) => {
    loader.value = true
    try {
      const res = await fetch(`${url}${search}`, {
        headers: {
          'X-API-KEY': '1EDBRR5-VBQ4W08-QBDF41V-KZSDBV8'
        }
      })

      const data = await res.json()
      console.log('data', data.docs)
      actors.value = data.docs
    } catch (error) {
      console.log(error)
    } finally {
      loader.value = false
    }
  }

  const addToFavoriteActor = (object) => {
    const movieStore = useMovieStore()
    movieStore.movies.push({ ...object, isWatched: false })
    movieStore.activeTabs = 1
  }

  return { loader, actors, getActors, addToFavoriteActor }
})
