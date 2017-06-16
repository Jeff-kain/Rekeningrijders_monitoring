<style>
  .echarts {
    min-width: 100%;
  }
</style>

<template>
  <div>
    <monitoring name="Overheid" url="http://192.168.25.214:8080/api/invoice"></monitoring>
    <br>
  </div>
</template>
<script>
  import monitoring from './monitoring'
  export default {
    components: {
      monitoring
    },
    data() {
      return {
      }
    },
    methods: {
    },
    mounted() {
    },
  }
</script>