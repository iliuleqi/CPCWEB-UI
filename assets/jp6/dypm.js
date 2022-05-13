function getP1_Dyjfpm(ks,vs)
{
    //var ks=['党改办支部', '党改办支部', '党改办支部', '党改办支部', '党改办支部'];
    //var vs=[50000000, 22000000, 10000000, 5000000, 1];

    var dypm_option = {
        grid: {
            left: '5%',
            right: '5%',
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
                    params[0].seriesName + ' : ' + Number((params[0].value.toFixed(4) / 1).toFixed(2)).toLocaleString() + ' 名<br/>'
            }
        },
        xAxis: {
            show: false,
            type: 'value'
        },
        yAxis: [{
            type: 'category',
            inverse: true,
            axisLabel: {
                show: true,
                textStyle: {
                    color: '#fff'
                },
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
            data: ks
        }, {
            type: 'category',
            inverse: true,
            axisTick: 'none',
            axisLine: 'none',
            show: true,
            axisLabel: {
                textStyle: {
                    color: '#ffffff',
                    fontSize: '12'
                },
                formatter: function(value) {
                    return value.toLocaleString()+ '名';
                },
            },
            data: vs
        }],
        series: [{
                name: '排名',
                type: 'bar',
                zlevel: 1,
                itemStyle: {
                    normal: {
                        barBorderRadius: 30,
                        color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
                            offset: 0,
                            color: 'rgb(57,89,255,1)'
                        }, {
                            offset: 1,
                            color: 'rgb(46,200,207,1)'
                        }]),
                    },
                },
                barWidth: 20,
                data: vs
            },
            {
                name: '背景',
                type: 'bar',
                barWidth: 20,
                barGap: '-100%',
                data: vs,
                itemStyle: {
                    normal: {
                        color: 'rgba(24,31,68,1)',
                        barBorderRadius: 30,
                    }
                },
            },
        ]
    };
    return dypm_option;
}