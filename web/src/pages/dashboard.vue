<template>
  <div>
      <Row>
        <Col span="12"><monitoring name="Overheid" url="http://192.168.25.214:8080/api/invoice"></monitoring></Col>
        <Col span="12"> <monitoring name="Rekeningrijden" url="http://192.168.25.212:8080/rekeningrijders_app-1.0-SNAPSHOT/api/vehicle"></monitoring></Col>
        <Col span="12"><monitoring name="Movement" url="http://192.168.25.215:8080/rekeningrijden-movement-1.0-SNAPSHOT/api/point"></monitoring></Col>
        <Col span="12"><monitoring name="Politie" url="http://192.168.25.222:8080/rekeningrijders-police-1.0-SNAPSHOT/api/vehicle/1"></monitoring></Col>
    </Row>
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