export let initial = {
color: ['#21FF5E', '#0DFF53'],
    tooltip: {
        trigger: 'axis'
    },
    toolbox: {
        show: true,
        feature: {
            dataZoom: {
                yAxisIndex: 'none',
                title: {
                    zoom: 'selecteren',
                    back: 'herstel'
                }
            },
            magicType: {
                show: true,
                title: {
                    line: 'lijn',
                    bar: 'staaf'
                },
                type: ['line', 'bar']
            },
            saveAsImage: {
                show: true,
                title: 'opslaan',
                type: 'png',
                name: 'rapport',
                pixelRatio: 10
            }
        }
    },
    xAxis: {
        name: 'time (HH:mm:ss)',
        type: 'category',
        boundaryGap: false,
        data: []
    },
    yAxis: [
        {
            name: 'response time (ms)',
            type: 'value',
        },],
    series: [{
        name: 'Kilometers',
        type: 'line',
        data: [],
        markPoint: {
            data: [
                { type: 'max', name: 'Max' },
                { type: 'min', name: 'Min' }
            ]
        },
        markLine: {
            data: [
                { type: 'average', name: 'Average' }
            ]
        },
       
    }, ]
}

let asyncData = {
    categories: ['JAN', 'FEB', 'MRT', 'APR', 'MEI', 'JUN'],
    data: [5, 20, 36, 10, 10, 20]
}

export let async = {
    xAxis: {
        data: asyncData.categories
    },
    yAxis: {
        axisLabel: { show: true }
    },
    series: [{
        name: 'Kilometers',
        data: asyncData.data
    }]
}