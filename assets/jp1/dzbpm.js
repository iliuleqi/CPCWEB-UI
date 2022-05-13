function getP1_dzbpm(ks,vs)
{
    var dzbpm_option = {
        grid: {
            left: "5%",
            top: 20,
            right: "10%",
            bottom: 0,
            containLabel: true
        },
        barWidth: 15,
        yAxis: {
            type: 'value',
            splitLine: {
                show: false,
                lineStyle: {
                    color: "rgba(255,255,255,0.2)"
                }
            },
            axisTick: {
                show: false
            },
            axisLine: { //  改变x轴颜色
                show: vs.length?true:false,
                lineStyle: {
                    color: '#26D9FF'
                }
            },
            axisLabel: { //  改变x轴字体颜色和大小
                textStyle: {
                    color: "rgba(250,250,250,0.6)",
                    fontSize: 12
                }
            },
            minInterval: 1
        },
        // dataZoom: [//滑动条
        //     {
        //         yAxisIndex: 0,//这里是从X轴的0刻度开始
        //         show: true,//是否显示滑动条，不影响使用
        //         type: 'slider', // 这个 dataZoom 组件是 slider 型 dataZoom 组件
        //         startValue: 0, // 从头开始。
        //         endValue: 4  // 一次性展示6个。
        //     }
        // ],
        xAxis: {
            type: 'category',
            data: ks,//['组织一', '组织二', '组织三', '组织四', '组织五'],
            splitLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLine: { //  改变y轴颜色
                show: ks.length?true:false,
                lineStyle: {
                    color: '#26D9FF'
                }
            },
            axisLabel: { //  改变y轴字体颜色和大小
                //formatter: '{value} m³ ', //  给y轴添加单位
                textStyle: {
                    color: "rgba(250,250,250,0.6)",
                    fontSize: 12
                },
                formatter: function (value, index) {
                    var v = value.substring(0, 8) + '...'
                    return value.length > 12 ? v : value
                }
            }
        },
        series: [{
                type: 'bar',
                itemStyle: {
                    normal: {
                        label: {
                            show: true, //开启显示
                            position: 'top', //在上方显示
                            textStyle: { //数值样式
                                color: "rgba(250,250,250,0.6)",
                                fontSize: 12,
                                fontWeight: 600
                            }
                        },
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: 'rgba(61,126,235,1)'
                        }, {
                            offset: 1,
                            color: 'rgba(61,126,235,0)'
                        }]),
                        borderColor: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                            offset: 0,
                            color: 'rgba(160,196,225,1)'
                        }, {
                            offset: 1,
                            color: 'rgba(61,126,235,1)'
                        }]),
                        borderWidth: 1
                    }
                },
                data: vs//[19, 29, 39, 81, 302]
            }
        ]
    };
    // if(ks.length<5)dzbpm_option.dataZoom=[];
    
    return dzbpm_option;
    
    
    
}