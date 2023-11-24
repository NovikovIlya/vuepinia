<script setup>
import InputText from 'primevue/inputtext';
import ProgressSpinner from 'primevue/progressspinner';
import {useSearchStore} from '../stores/SearchStore';
import MovieSlice from './MovieSlice.vue';

import { ref } from 'vue';

const searcText = ref('');
const searchStore = useSearchStore();
</script>

<template>
    <form class="InpParent" @submit.prevent="searchStore.getActors(searcText)">
        <InputText  type="text" placeholder="input text" v-model="searcText"/>
    </form>
    
    <div v-if="searchStore.loader" class="spinn">
        <ProgressSpinner/>
    </div>

    <div v-else>
        <MovieSlice v-for="movie of searchStore.actors" :key="movie.id" :movie="movie" :isSearch="true"/>
    </div>
</template>


<style lang="scss" scoped>
.InpParent{
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
}
.spinn{
    margin-top: 10px;
    display: flex;
    justify-content: center;
}
</style>