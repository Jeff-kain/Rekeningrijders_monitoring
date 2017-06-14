<style>
  .echarts {
    min-width: 100%;
  }
</style>

<template>
  <div>
    <Card>
      <chart :options="uptime" ref="uptime" auto-resize></chart>
    </Card>
    <br>
  </div>
</template>
<script>
  import { initial as lineInit, async as lineAsync } from './charts/uptime.js'
  export default {
    components: {
    },
    data() {
      return {
        uptime: lineInit,
        invoices: [],
        vehicles: [],
        ownershipDetails: [],
        vehiclePager: {
          start: 0,
          size: 15,
        },
        totalVehicles: 0,
        overheid: [],
        movement:[],
        politie: [],
        simulatie: [],
        rekeningrijden: [],

      }
    },
    methods: {
      getOverheid() {
        this.$http
          .get('http://192.168.25.214:8080/api')
          .then((response) => {
            this.overheid = response
          })
          .catch((error) => {
            console.log(error);
          });
      },
            getmovement() {
        this.$http
          .get('http://192.168.25.217:8080/api')
          .then((response) => {
            this.overheid = response
          })
          .catch((error) => {
            console.log(error);
          });
      },
      getRekeningrijden() {
        this.$http
          .get('http://192.168.25.211:8080/api')
          .then((response) => {
            this.rekeningrijden = response
          })
          .catch((error) => {
            console.log(error);
          });
      },
    },
    mounted() {
      this.$refs.uptime.mergeOptions(lineAsync)
    },
  }
</script>