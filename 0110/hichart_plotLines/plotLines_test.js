Highcharts.chart('container', {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Column chart with negative values'
    },
    xAxis: {
        categories: ['Apples', 'Oranges', 'Pears', 'Grapes', 'Bananas']
    },
    yAxis: {
    	plotLines: [
                {
                    value: 0,
                    width: 1,
                    color: '#000',
                    width: 1,
                    zIndex: 4
                },
                {
                    color: '#86e067',
                    width: 1,
                    value: 2.9,
                    dashStyle: 'LongDash',
                    zIndex: 4, // Added zIndex
                    label: {
                    		text: 'Median (On Task)',
                        align: 'left',
                        style: {
                            color: 'gray'
                        }
                    }
                },
                {
                    color: 'red',
                    width: 1,
                    dashStyle: 'LongDash',
										value: -1.9,
                    zIndex: 4, // Added zIndex
                    label: {
                        text: 'Median (Off Task)',
                        align: 'left',
                        style: {
                            color: 'gray'
                        },
                        y: 15,
                    allowOverlap:true
                    }
                }
        ]
    },
    credits: {
        enabled: false
    },
    series: [{
        name: 'John',
        data: [5, 3, 4, 7, 2]
    }, {
        name: 'Jane',
        data: [2, -2, -3, 2, 1]
    }, {
        name: 'Joe',
        data: [3, 4, 4, -2, 5]
    }]
});