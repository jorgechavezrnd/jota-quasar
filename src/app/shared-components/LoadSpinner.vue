<template>
  <div v-if="isLoading" class="spinner">
    <!-- <p>Loading...</p> -->
    <q-spinner color="primary" size="3em" />
  </div>
</template>

<script>
  export default {
    props: ['isLoading']
  }
</script>

<style>
</style>
