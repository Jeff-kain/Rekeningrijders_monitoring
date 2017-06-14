<style scoped>
  .icons {
    overflow: hidden;
    zoom: 1;
    background-color: #464c5b;
    height: 50px;
  }
  
  .icons-item {
    float: left;
    margin: 0 6px 12px 6px;
    width: 30px;
    text-align: center;
    list-style: none;
    cursor: pointer;
    height: 100px;
    color: #ffffff;
    -webkit-transition: all 0.2s ease;
    transition: all 0.2s ease;
    position: relative;
    padding-top: 15px;
  }
  
  .icons-item p {
    padding-top: 15px;
  }
  
  .rotate {
    /* Safari */
    -webkit-transform: rotate(-90deg);
    /* Firefox */
    -moz-transform: rotate(-90deg);
    /* IE */
    -ms-transform: rotate(-90deg);
    /* Opera */
    -o-transform: rotate(-90deg);
    /* Internet Explorer */
    filter: progid: DXImageTransform.Microsoft.BasicImage(rotation=3);
  }
  
  .icard-container {
    overflow-y: scroll;
    height: 70vh;
  }
  
  .icard {
    cursor: pointer;
    background: white;
    margin-top: 10px;
  }
  
  .icard:hover {
    background: azure;
  }
  
  @media only screen and (max-width: 768px) {
    /* For mobile phones: */
    [class*="col-"] {
      width: 100%;
    }
  }
</style>

<template>
  <Row>
    <i-col span="6">
      <Input placeholder="Search..." icon="ios-search" size="large" />
      <div class="icard-container">
        <Card v-for="vehicle in vehicles" :key="vehicle" class="icard">
          <div @click="setCurrentCar(vehicle)">
            <Row>
              <i-col span="4 ">
                <Icon type="clipboard " size="64">
                </Icon>
              </i-col>
              <i-col span="18 " offset="2 ">
                <h3>{{vehicle.licenseplate}}</h3>
                <h3>{{vehicle.brand}} {{vehicle.model}} {{vehicle.buildyear}}</h3>
              </i-col>
            </Row>
          </div>
        </Card>
      </div>
      <div class="icons ">
        <i-col span="12" offset="18 ">
          <div class="icons-item ">
            <Tooltip placement="left" content="Sort">
              <Icon type="arrow-swap " class="rotate" size="24 "></Icon>
            </Tooltip>
          </div>
          <div class="icons-item">
            <Tooltip placement="left" content="Filter">
              <Icon type="funnel " size="24 "></Icon>
            </Tooltip>
          </div>
        </i-col>
      </div>
    </i-col>
    <i-col span="17" offset="1">
      <ownershipsdetails :owners="ownerData"></ownershipsdetails>
    </i-col>
  </Row>
</template>
<script>
  import ownershipsdetails from './ownershipsDetails.vue';
  export default {
    components: { ownershipsdetails },
    data() {
      return {
        currentvehicle: {},
        vehicles: [],
        ownerData: {},
      }
    },
    methods: {
      getvehicles() {
        this.$http
          .get('vehicle')
          .then((response) => {
            this.vehicles = response
          })
          .catch((error) => {
            console.log(error);
          });
      },
      setCurrentCar(val) {
        this.currentvehicle = val;
        this.getOwnerShip(val);
      },
      getOwnerShip(val) {
        this.$http
          .get('vehicle/ownerships/' + val.id)
          .then((response) => {
            console.log(response);
            this.ownerData = response
          })
          .catch((error) => {
            console.log(error);
          });
      },
    },
    mounted() {
      this.getvehicles()
    }
  }

</script>