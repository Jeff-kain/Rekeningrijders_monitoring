<template>
  <div>
    <Card>
      <p slot="title">{{owners[0].vehicle.licenseplate}}</p>
      <div v-for="owner in owners" :key="owner">
        <p>{{owner.citizen.firstName}} {{owner.citizen.prefix}} {{owner.citizen.lastName}} ({{owner.citizen.bsn}})</p>
        <p>start date: {{owner.startdate}}</p> <p>end date: {{owner.enddate}}</p>
        <hr>
      </div>
    </Card>
  </div>
</template>
<script>
  export default {
    props: {
      owners: {
        type: Object,
        default: function () {
          return {}
        }
      },
    },
    data: function () {
      return {
      }
    },
    mounted: function () {

    },
    beforeDestroy: function () {

    },
    methods: {

    }
  }

</script>