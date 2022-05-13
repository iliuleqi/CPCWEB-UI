function getP1_Dyjfpm(ks,vs){
    var dypm_option = {
        grid: {
            left: '5%',
            right: '10%',
            bottom: -20,
            top: '10%',
            containLabel: true
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'none'
            },
            formatter: function(params) {
                return params[0].name + '<br/>' +
                    "<span style='display:inline-block;margin-right:5px;border-radius:10px;width:9px;height:9px;background-color:rgba(36,207,233,0.9)'></span>" +
                    params[0].seriesName + ' : ' + Number((params[0].value.toFixed(4) / 1).toFixed(2)).toLocaleString() + ' 分<br/>'
            }
        },
        xAxis: {
            show: false,
            type: 'value'
        },
        yAxis: [
            {
            type: 'category',
            inverse: true,
            axisLabel: {
                show: true,
                textStyle: {
                    color: '#fff',
                },
                formatter: function (value, index) {
                    var v = value.substring(0, 8) + '...'
                    return value.length > 12 ? v : value
                }
            },
            label: {
                show: true,
                position: 'right',
                valueAnimation: true
            },
            splitLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLine: {
                show: false
            },
            data: ks,
            
        }],
        dataZoom: [//滑动条
            {
                yAxisIndex: 0,//这里是从X轴的0刻度开始
                show: vs.length?true:false,//是否显示滑动条，不影响使用
                type: 'slider', // 这个 dataZoom 组件是 slider 型 dataZoom 组件
                startValue: 0, // 从头开始。
                endValue: 4,  // 一次性展示6个。
                width: 15,
                right:15,
                bottom:20,
                top:20,
                textStyle: {
                    fontSize: 12,
                    color: "#ffffff",
                    // width: 100,
                    // heigth: 20,
                }
            }
        ],
        series: [
            {
                name: '分数',
                type: 'bar',
                zlevel: 1,
                itemStyle: {
                    normal: {
                        label: {
                            show: true, //开启显示
                            position: 'right', //在上方显示
                            textStyle: { //数值样式
                                color: '#ffffff',
                                fontSize: 12
                            }
                        },
                        barBorderRadius: 30,
                        color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                            offset: 0,
                            color: 'rgba(57,89,255,1)'
                        }, {
                            offset: 1,
                            color: 'rgba(46,200,207,1)'
                        }])
                        
                    },
                },
                barWidth: 15,
                data: vs
            }
        ]
    };
    return dypm_option;
}