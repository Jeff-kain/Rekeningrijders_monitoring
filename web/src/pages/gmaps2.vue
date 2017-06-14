<template>
    <div>
        <div id="street-view"
             style='width:50%;height:500px;float:right'></div>
        <input type="text"
               v-model="routeFrom"
               name="routeFrom"
               value="Patrick's St, Cork, Ireland" />
        <input type="text"
               v-model="routeTo"
               name="routeTo"
               value="The Square, Blarney, Cork, Ireland" />
        <button id="routeGo"
                @click="calcRoute">Route</button>
    
        <div id='location-canvas'
             style='width:50%;height:500px;float:left'>
    
        </div>
    
        <div id="directions"></div>
    
    </div>
</template>

<script>
var directionsDisplay = new google.maps.DirectionsRenderer({ draggable: true });
var directionsService = new google.maps.DirectionsService();

export default {
    data() {
        return {
            routeTo: 'tilburg',
            routeFrom: 'leibeemd 32',
            map: '',
            line: 'yoyo',
            lineCoordinates: '',
            polyline: '',
            path: [],
            path2: [],
            panorama: ''
        }
    },
    methods: {
        calcRoute() {
            var self = this;
            var request = {
                origin: this.routeFrom,
                destination: this.routeTo,
                travelMode: "DRIVING"
            };

            directionsService.route(request, function (response, status) {
                if (status == google.maps.DirectionsStatus.OK) {
                    directionsDisplay.setDirections(response);
                    self.createPolyline(response);
                }
            });
        },
        createPolyline(directionResult) {
            this.line = new google.maps.Polyline({
                path: directionResult.routes[0].overview_path,
                strokeColor: '#FF0000',
                strokeOpacity: 0.5,
                strokeWeight: 4
            });
            //this.line.setMap(this.map);

            this.polyline = new google.maps.Polyline({
                strokeColor: '#000000',
                strokeOpacity: 1.0,
                strokeWeight: 3,
                icons: [{
                    icon: {
                        path: google.maps.SymbolPath.CIRCLE,
                        scale: 8,
                        strokeColor: '#393'
                    }
                }]
            });
            this.polyline.setMap(this.map);
            this.animate();
        },
        animate() {
            var self = this;
            var count = 0;
            this.lineCoordinates = [
                new google.maps.LatLng(this.line.latLngs.b[0].b[0].lat(), this.line.latLngs.b[0].b[0].lng()),
                new google.maps.LatLng(this.line.latLngs.b[0].b[this.line.latLngs.b[0].length - 1].lat(), this.line.latLngs.b[0].b[this.line.latLngs.b[0].length - 1].lng())
            ];
            this.map.setCenter(this.lineCoordinates[0])
            this.map.setZoom(14);

            this.path = this.line.getPath();
            this.path2 = this.polyline.getPath();

            var refreshIdmap = window.setInterval(function () {
                var lastloc = self.path2.b[self.path2.b.length - 1]

                self.map.setCenter(lastloc)

            }, 2000);


            var refreshId = window.setInterval(function () {
                if (count < self.path.b.length) {
                    self.path2.push(self.path.b[count])
                    var icons = self.polyline.get('icons');
                    icons[0].offset = 100 + '%';
                    self.line.set('icons', icons);


                    var lastloc = self.path2.b[self.path2.b.length - 1]
                    var heading = 180
                    if (self.path2.b.length > 1) {
                        var lastloc2 = self.path2.b[self.path2.b.length - 2]
                        heading = google.maps.geometry.spherical.computeHeading(lastloc2, lastloc);
                    }

                    console.log(heading)
                    // update position of StreetView
                    self.panorama.setPosition(lastloc);

                    google.maps.event.addListener(self.panorama, 'links_changed', function () {
                        var links = self.panorama.getLinks();

                        self.panorama.setPov({
                            heading: heading,
                            pitch: 0,
                            zoom: 1
                        });
                    });

                    count++
                } else {
                    clearInterval(refreshId);
                    clearInterval(refreshIdmap);
                }
            }, 1000);
        }
    },
    mounted() {
        console.log(directionsDisplay)
        var myOptions = {
            zoom: 1,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            center: new google.maps.LatLng(0, 0)
        };
        this.map = new google.maps.Map(document.getElementById("location-canvas"), myOptions);
        //directionsDisplay.setMap(this.map); Tekent de blauwe lijn met begin en eind marker.
        directionsDisplay.setPanel(document.getElementById("directions"));

        this.panorama = new google.maps.StreetViewPanorama(
            document.getElementById('street-view'),
            {
                position: { lat: 37.869260, lng: -122.254811 },
                addressControlOptions: {
                    position: google.maps.ControlPosition.BOTTOM_CENTER
                },
                pov: { heading: 165, pitch: 0 },
                zoom: 1
            });
    }
}
</script>
<style>
#directions {
    width: 38%;
    float: right;
}

#street-view {
    height: 100%;
}
</style>