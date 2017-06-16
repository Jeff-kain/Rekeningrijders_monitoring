<style>
.echarts {
    min-width: 100%;
}
</style>

<template>
    <div>
        <Card>
            <div v-show="!error">
                <p1>{{name}}</p1>
                <chart :options="uptime" ref="uptime" auto-resize></chart>
            </div>
            <div v-show="error">
                <Alert type="error" show-icon>
                    Kan Server niet bereiken !
                    <span slot="desc">
                        Laatste succesvolle connectie was om {{lasttimestamp}}
                    </span>
                </Alert>
            </div>
        </Card>
        <br>
    </div>
</template>
<script>
import { initial as lineInit, async as lineAsync } from './charts/uptime.js'

export default {
    props: ['name', 'url'],
    components: {
    },
    data() {
        return {
            error: false,
            lasttimestamp: '',
            uptime: lineInit,
            async: {
                xAxis: {
                    data: []
                },
                yAxis: {
                    axisLabel: { show: true }
                },
                series: [{
                    name: this.name,
                    data: []
                }]
            }
        }
    },
    methods: {
        getResponse() {
            this.$http
                .get(this.url)
                .then((response) => {
                    this.error = false
                    var d = new Date(); // for now
                    var time = d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds();
                    this.async.xAxis.data.push(time)
                    this.lasttimestamp = new Date().toLocaleString()
                    this.async.series[0].data.push(response.rstimestamp - response.config.rqtimestamp)
                    this.$refs.uptime.mergeOptions(this.async)
                })
                .catch((error) => {
                    this.error = true
                    this.async.xAxis.data = []
                    this.async.series[0].data = []
                    console.log(error)
                });
        }
    },
    mounted() {
        var self = this
        window.setInterval(function () {
            self.getResponse()
        }, 5000);


    },
}
</script>