var zzdb_option = {
    grid: {
        left: "5%",
        top: -10,
        right: "10%",
        bottom: 20,
        containLabel: true
    },
    barWidth: 15,
    xAxis: {
        type: 'value',
        splitLine: {
            lineStyle: {
                color: "rgba(255,255,255,0.2)"
            }
        },
        axisTick: {
            show: false
        },
        axisLine: { //  改变x轴颜色
            show: true,
            lineStyle: {
                color: '#26D9FF'
            }
        },
        axisLabel: { //  改变x轴字体颜色和大小
            textStyle: {
                color: "rgba(250,250,250,0.6)",
                fontSize: 12
            }
        }
    },
    yAxis: {
        type: 'category',
        data: ['组织一', '组织二', '组织三', '组织四', '组织五'],
        splitLine: {
            show: false
        },
        axisTick: {
            show: false
        },
        axisLine: { //  改变y轴颜色
            lineStyle: {
                color: '#26D9FF'
            }
        },
        axisLabel: { //  改变y轴字体颜色和大小
            //formatter: '{value} m³ ', //  给y轴添加单位
            textStyle: {
                color: "rgba(250,250,250,0.6)",
                fontSize: 12
            }
        }
    },
    series: [{
            type: 'bar',
            itemStyle: {
                normal: {
                    label: {
                        show: true, //开启显示
                        position: 'right', //在上方显示
                        textStyle: { //数值样式
                            color: "rgba(250,250,250,0.6)",
                            fontSize: 12,
                            fontWeight: 600
                        }
                    },
                    color: new echarts.graphic.LinearGradient(1, 0, 0, 0, [{
                        offset: 0,
                        color: 'rgba(61,126,235,1)'
                    }, {
                        offset: 1,
                        color: 'rgba(61,126,235,0)'
                    }]),
                    borderColor: new echarts.graphic.LinearGradient(1, 0, 0, 0, [{
                        offset: 0,
                        color: 'rgba(160,196,225,1)'
                    }, {
                        offset: 1,
                        color: 'rgba(61,126,235,1)'
                    }]),
                    borderWidth: 1
                }
            },
            data: [19, 29, 39, 81, 302]
        }
    ]
};