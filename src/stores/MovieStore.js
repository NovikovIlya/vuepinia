import { defineStore } from 'pinia'

export const useMovieStore = defineStore('movieStore', {
  state: () => ({
    movies: [
      {
        id: 1,
        original_title: 'Spider',
        overview:
          'Waits for a specific time before continuing replay with the next command (timed delay).',
        poster_path:
          'https://assets-global.website-files.com/6009ec8cda7f305645c9d91b/6408f76710a9935109f855d4_smile-min.png',
        release_date: '2002-05-01',
        isWatched: false
      },
      {
        id: 2,
        original_title: 'Batman',
        overview: 'before being',
        poster_path:
          'https://assets-global.website-files.com/6009ec8cda7f305645c9d91b/6408f76710a9935109f855d4_smile-min.png',
        release_date: '2001-05-01',
        isWatched: true
      }
    ],
    activeTabs: 1
  }),
  //Получить что-то
  getters: {
    watchedMovies() {
      return this.movies.filter((el) => el.isWatched)
    },
    totalCountMovies() {
      return this.movies.length
    }
  },
  actions: {
    setActiveTab(id) {
      this.activeTabs = id
    },
  toggleWatched(id){
    const idx = this.movies.findIndex(el=>el.id===id);
    this.movies[idx].isWatched = !this.movies[idx].isWatched
  }
  }
})
