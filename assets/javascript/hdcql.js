var hdcql_data = [{
    name: "组织一",
    value: 175.17
},
{
    name: "组织二",
    value: 148.35
},
{
    name: "组织三",
    value: 95.36
},
{
    name: "组织四",
    value: 95.36
},
{
    name: "组织五",
    value: 95.36
},
{
    name: "组织六",
    value: 95.36
}
];
var hdcql_xAxisData = [];
var hdcql_seriesData1 = [];
var hdcql_sum = 0;
var hdcql_barTopColor = ["#02c3f1", "#53e568", "#a154e9", "#02c3f1", "#53e568", "#a154e9"];
var hdcql_barBottomColor = ["rgba(2,195,241,0.1)", "rgba(83, 229, 104, 0.1)", "rgba(161, 84, 233, 0.1)","rgba(2,195,241,0.1)", "rgba(83, 229, 104, 0.1)", "rgba(161, 84, 233, 0.1)"];
hdcql_data.forEach(item => {
    hdcql_xAxisData.push(item.name);
    hdcql_seriesData1.push(item.value);
    hdcql_sum += item.value;
});
var hdcql_option = {
    
    grid:{
        top:'20%',
        bottom:'20%',
        left: '10%',
        right: '10%'
    },
    xAxis: {
        data: hdcql_xAxisData,
        axisTick: {
            show: false
        },
        axisLine: {
            show: true
        },
        axisLabel: {
            show: true,
            margin: 25,
            align: 'center',
            formatter: function(params, index) {
                return '{a|' + (hdcql_seriesData1[index] / hdcql_sum * 100).toFixed(2) + '%}' + '\n' + '{b|' + params + '}';
            },
            textStyle: {
                fontSize: 14,
                color: '#ffffff',
                rich: {
                    a: {
                        fontSize: 12,
                        color: '#ffffff'
                    },
                    b: {
                        height: 20,
                        fontSize: 14,
                        color: '#ffffff'
                    }
                }
            }
        },
        interval: 0
    },
    yAxis: {
        splitLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLine: {
            show: true
        },
        axisLabel: {
            show: true
        }
    },
    series: [{
        name: '柱顶部',
        type: 'pictorialBar',
        symbolSize: [26, 10],
        symbolOffset: [0, -5],
        z: 12,
        itemStyle: {
            normal: {
                color: function(params) {
                    return hdcql_barTopColor[params.dataIndex];
                }
            }
        },
        label: {
            show: true,
            position: 'top',
            fontSize: 16,
            color: "#FFF"
        },
        symbolPosition: 'end',
        data: hdcql_seriesData1,
    }, {
        name: '柱底部',
        type: 'pictorialBar',
        symbolSize: [26, 10],
        symbolOffset: [0, 5],
        z: 12,
        itemStyle: {
            normal: {
                color: function(params) {
                    return hdcql_barTopColor[params.dataIndex];
                }
            }
        },
        data: hdcql_seriesData1
    }, {
        name: '第一圈',
        type: 'pictorialBar',
        symbolSize: [47, 16],
        symbolOffset: [0, 11],
        z: 11,
        itemStyle: {
            normal: {
                color: 'transparent',
                borderColor: '#3ACDC5',
                borderWidth: 2
            }
        },
        data: hdcql_seriesData1
    }, {
        name: '第二圈',
        type: 'pictorialBar',
        symbolSize: [62, 22],
        symbolOffset: [0, 17],
        z: 10,
        itemStyle: {
            normal: {
                color: 'transparent',
                borderColor: hdcql_barTopColor[0],
                borderWidth: 2
            }
        },
        data: hdcql_seriesData1
    }, {
        type: 'bar',
        itemStyle: {
            normal: {
                color: function(params) {
                    return new echarts.graphic.LinearGradient(
                        0, 0, 0, 1,
                        [{
                                offset: 1,
                                color: hdcql_barTopColor[params.dataIndex]
                            },
                            {
                                offset: 0,
                                color: hdcql_barBottomColor[params.dataIndex]
                            }
                        ]
                    );
                },
                opacity: 0.8
            }
        },
        z: 16,
        silent: true,
        barWidth: 26,
        barGap: '-100%', // Make series be overlap
        data: hdcql_seriesData1
    }]
};