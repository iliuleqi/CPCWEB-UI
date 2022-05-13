function getp3_hdcql(kv)
{
    var hdcql_data = kv;
    var hdcql_xAxisData = [];
    var hdcql_seriesData1 = [];
    var hdcql_seriesData2 = [];
    var hdcql_sum = 0;
    var hdcql_barTopColor = ["#02c3f1", "#53e568", "#a154e9", "#02c3f1", "#53e568", "#a154e9", "#a154e9", "#a154e9"];
    var hdcql_barBottomColor = ["rgba(2,195,241,0.1)", "rgba(83, 229, 104, 0.1)", "rgba(161, 84, 233, 0.1)","rgba(2,195,241,0.1)", "rgba(83, 229, 104, 0.1)", "rgba(161, 84, 233, 0.1)", "rgba(161, 84, 233, 0.1)", "rgba(161, 84, 233, 0.1)"];
    for(var i=0;i<hdcql_data.length;i++){
        var item = hdcql_data[i];
        hdcql_xAxisData.push(item.name);
        hdcql_seriesData1.push(item.value);
        hdcql_seriesData2.push(item.value+1);
        hdcql_sum += item.value;
    }
    
 
    // hdcql_data.forEach(item => {
    //     hdcql_xAxisData.push(item.name);
    //     hdcql_seriesData1.push(item.value);
    //     hdcql_sum += item.value;
    // });
    var hdcql_option = {
        
        grid:{
            top:'15%',
            bottom:'25%',
            left: '5%',
            right: '5%'
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
                margin: 10,
                align: 'center',
                formatter: function(params, index) {
                    //return '{a|' + (hdcql_seriesData1[index] / hdcql_sum * 100).toFixed(2) + '%}' + '\n' + '{b|' + params + '}';
                    return '{b|' + params + '}';
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
            minInterval: 1,
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
        dataZoom: [//滑动条
            {
                //yAxisIndex: 0,//这里是从X轴的0刻度开始
                show: true,//是否显示滑动条，不影响使用
                type: 'slider', // 这个 dataZoom 组件是 slider 型 dataZoom 组件
                startValue: 0, // 从头开始。
                endValue: 4,  // 一次性展示6个。
                bottom: '10%',
                height:15
            }
        ],
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
                color: "#FFF",
                formatter:'{c}%'
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
            data: hdcql_seriesData2
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
            data: hdcql_seriesData2
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
    return hdcql_option
}