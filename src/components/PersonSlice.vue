<script setup>
import { useQuery } from '@tanstack/vue-query'
import { onMounted, ref } from 'vue'

const getTodos = async (limit) =>
  await fetch(`https://jsonplaceholder.typicode.com/posts${limit.value}`).then((response) =>
    response.json()
  )
const limit = ref('?_limit=10')
const { isPending, isFetching, isError, data, error } = useQuery({
  queryKey: ['todos', limit],
  queryFn: () => getTodos(limit),
  // enabled:false,
})
console.log('limit', limit.value)

const changeLimit = () => {
  limit.value = '?_limit=20'
  console.log('limit', limit.value)
};
</script>

<template>
  <div>
    <div>123</div>
    <button @click="changeLimit">Сменить</button>
    <div v-if="isPending">Идет загрузка...</div>
    <span v-else-if="isError">Error: {{ error.message }}</span>
    <div v-else>
      <li v-for="todo in data" :key="todo.id">{{ todo.title }}</li>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
