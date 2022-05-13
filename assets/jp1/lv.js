function getLvOption(k,v)
{
    var lv_option = {
        tooltip: {
            show: false
        },
        legend: {
            show: false
        },
        toolbox: {
            show: false
        },
        title: [{
            text: v + '%',
            top: '40%',
            textAlign: "center",
            left: "45%",
            textStyle: {
                color: '#fff',
                fontSize: 16,
                fontWeight: '400'
            }
        },{
            text: k,
            top: '70%',
            textAlign: "center",
            left: "45%",
            textStyle: {
                color: '#fff',
                fontSize: 12,
                fontWeight: '400'
            }
        },],
        series: [{
            name: '1233',
            type: 'pie',
            startAngle: 232,
            radius: [40, 40],
            hoverAnimation: false,
            itemStyle: {
                normal: {
                    label: {
                        show: false,
                    },
                }
            },
            data: [{
                    value: v,
                    name: 'A',
                    itemStyle: {
                        normal: {
                            borderWidth: 15,
                            shadowBlur: 20,
                            borderColor: '#00ffff',
                            shadowColor: '#00ffff'
                        }
                    }
                }, {
                    value: 100 - v,
                    name: 'B',
                    guid:'1111',
                    url:'xxxx',
                    itemStyle: {
                        normal: {
                            borderWidth: 15,
                            shadowBlur: 20,
                            borderColor: '#666666',
                            shadowColor: '#666666'
                        }
                    }
                },
                {
                    value: 25,
                    name: 'C',
                    itemStyle: {
                        normal: {
                            color: 'rgba(0, 0, 0, 0)',
                            borderColor: 'rgba(0, 0, 0, 0)',
                            borderWidth: 0
                        }
                    }
                }
            ]
        }]
    }
    return lv_option;
}
