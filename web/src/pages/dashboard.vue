<template>
  <div>
    <monitoring name="Overheid" url="http://192.168.25.214:8080/api/invoice"></monitoring>
    <br>
    <monitoring name="Movement" url="http://192.168.25.217:8080/api/"></monitoring>
    <br>
    <monitoring name="Politie" url="http://192.168.25.213:8080/api/"></monitoring>
    <br>
    <monitoring name="Rekeningrijders" url="http://192.168.25.212:8080/api"></monitoring>
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