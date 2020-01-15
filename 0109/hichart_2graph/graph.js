$(function () {
    var chart = new Highcharts.Chart({
        chart: {
            renderTo: "container1",
            height: 200,
            type : 'area',
            //margin: 0,
            padding: 0,
            spacingLeft: 0,
            spacingRight: 0,
            spacingBottom: 0,
            width: 250
        },
        credits:{
        enabled: false
        },
        legend: {
            enabled: false    
        },
        title: {
        text: '',
        },
        series: [{
            data: [31,30.2,30,30,31,32,31,30]
        }],
        yAxis: [{
            title: {
                enabled: false,
            }, 
            labels: {
                formatter: function () {
                    return ((Math.floor(this.value * 100)/100).toFixed(2));
                }
            },
            gridLineWidth: 1,
            gridLineDashStyle: 'Solid',
            gridLineColor: '#ccc',
            tickInterval:1
          
        }],
        plotOptions: {
            area: {
                fillColor: 'rgba(91,138,211,0.5)'
            }, 
        }
    });
    var chart2 = new Highcharts.Chart({
        chart: {
            renderTo: "container2",
            height: 200,
            type : 'area',
            //margin: 0,
            padding: 0,
            spacingLeft: 0,
            spacingRight: 0,
            spacingBottom: 0,
            width: 250
        },
        credits:{
        enabled: false
        },
        legend: {
            enabled: false    
        },
        title: {
        text: '',
        },
        series: [{
            data: [31,30.2,30,30,31,32,31,30]
        }],
        yAxis: [{
            title: {
                enabled: false,
            }, 
            labels: {
                enabled: false,
            },
            gridLineWidth: 1,
            gridLineDashStyle: 'Solid',
            gridLineColor: '#ccc',
            tickInterval:1
          
        }],
        plotOptions: {
            area: {
                fillColor: 'rgba(91,138,211,0.5)'
            }, 
        }
    });
    var chart3 = new Highcharts.Chart({
        chart: {
            renderTo: "container3",
            height: 200,
            type : 'area',
            //margin: 0,
            padding: 0,
            spacingLeft: 0,
            spacingRight: 0,
            spacingBottom: 0,
            width: 250
        },
        credits:{
        enabled: false
        },
        legend: {
            enabled: false    
        },
        title: {
        text: '',
        },
        series: [{
            data: [31,30.2,30,30,31,32,31,30]
        }],
        yAxis: [{
            title: {
                enabled: false,
            }, 
            labels: {
                enabled: false,
            },
            gridLineWidth: 1,
            gridLineDashStyle: 'Solid',
            gridLineColor: '#ccc',
            tickInterval:1
          
        }],
        plotOptions: {
            area: {
                fillColor: 'rgba(91,138,211,0.5)'
            }, 
        }
    });
});