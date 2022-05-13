var HyyhCubeLeft = echarts.graphic.extendShape({
    shape: {
        x: 0,
        y: 0
    },
    buildPath: function(ctx, shape) {
        var xAxisPoint = shape.xAxisPoint
        var c0 = [shape.x, shape.y]
        var c1 = [shape.x - 9, shape.y - 9]
        var c2 = [xAxisPoint[0] - 9, xAxisPoint[1] - 9]
        var c3 = [xAxisPoint[0], xAxisPoint[1]]
        ctx.moveTo(c0[0], c0[1]).lineTo(c1[0], c1[1]).lineTo(c2[0], c2[1]).lineTo(c3[0], c3[1]).closePath()
    }
})
var HyyhCubeRight = echarts.graphic.extendShape({
    shape: {
        x: 0,
        y: 0
    },
    buildPath: function(ctx, shape) {
        var xAxisPoint = shape.xAxisPoint
        var c1 = [shape.x, shape.y]
        var c2 = [xAxisPoint[0], xAxisPoint[1]]
        var c3 = [xAxisPoint[0] + 18, xAxisPoint[1] - 9]
        var c4 = [shape.x + 18, shape.y - 9]
        ctx.moveTo(c1[0], c1[1]).lineTo(c2[0], c2[1]).lineTo(c3[0], c3[1]).lineTo(c4[0], c4[1]).closePath()
    }
})
var HyyhCubeTop = echarts.graphic.extendShape({
    shape: {
        x: 0,
        y: 0
    },
    buildPath: function(ctx, shape) {
        var c1 = [shape.x, shape.y]
        var c2 = [shape.x + 18, shape.y - 9]
        var c3 = [shape.x + 9, shape.y - 18]
        var c4 = [shape.x - 9, shape.y - 9]
        ctx.moveTo(c1[0], c1[1]).lineTo(c2[0], c2[1]).lineTo(c3[0], c3[1]).lineTo(c4[0], c4[1]).closePath()
    }
})
echarts.graphic.registerShape('CubeLeft', HyyhCubeLeft)
echarts.graphic.registerShape('CubeRight', HyyhCubeRight)
echarts.graphic.registerShape('CubeTop', HyyhCubeTop)


function getHyyh(HYYH_VALUE,arr_x)
{

    //var HYYH_MAX = [6000, 6000, 6000, 6000, 6000, 5000, 4000, 3000, 2000, 4000, 3000, 2000]
    //var HYYH_VALUE = [2012, 1230, 3790, 2349, 1654, 1230, 3790, 2349, 1654, 3790, 2349, 1654]
    var HYYH_MAX = HYYH_VALUE

    var hyyh_option = {
    
        grid: {
            left: 0,
            right: 0,
            bottom: '19%',
            top: 20,
            containLabel: true
        },
        xAxis: {
            type: 'category',
            data: arr_x,//['aaa', 'bbb', 'ccc', '11-12时'],
            axisLine: {
                show: true,
                lineStyle: {
                    color: 'white'
                }
            },
            offset: 20,
            axisTick: {
                show: false,
                length: 9,
                alignWithLabel: true,
                lineStyle: {
                    color: '#7DFFFD'
                }
            },
            axisLabel: {
                fontSize: 10
            }
        },
        yAxis: {
            type: 'value',
            minInterval:1,
            min: 0,
            axisLine: {
                show: true,
                lineStyle: {
                    color: 'white'
                }
            },
            splitLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                fontSize: 12,
                formatter:function(value){
                    if (value<0) {
                        return '';
                    }
                    return value;
                }
            },
            boundaryGap: ['20%', '20%']
        },
        series: [{
            type: 'custom',
            renderItem: function(params, api) {
                var location = api.coord([api.value(0), api.value(1)])
                return {
                    type: 'group',
                    children: [{
                        type: 'CubeLeft',
                        shape: {
                           // api,
                            xValue: api.value(0),
                            yValue: api.value(1),
                            x: location[0],
                            y: location[1],
                            xAxisPoint: api.coord([api.value(0), 0])
                        },
                        style: {
                            fill: 'rgba(7,29,97,.6)'
                        }
                    }, {
                        type: 'CubeRight',
                        shape: {
                           // api,
                            xValue: api.value(0),
                            yValue: api.value(1),
                            x: location[0],
                            y: location[1],
                            xAxisPoint: api.coord([api.value(0), 0])
                        },
                        style: {
                            fill: 'rgba(10,35,108,.7)'
                        }
                    }, {
                        type: 'CubeTop',
                        shape: {
                           // api,
                            xValue: api.value(0),
                            yValue: api.value(1),
                            x: location[0],
                            y: location[1],
                            xAxisPoint: api.coord([api.value(0), 0])
                        },
                        style: {
                            fill: 'rgba(11,42,106,.8)'
                        }
                    }]
                }
            },
            data: HYYH_MAX
        }, {
            type: 'custom',
            renderItem: function(params, api) {
                var location = api.coord([api.value(0), api.value(1)])
                return {
                    type: 'group',
                    children: [{
                        type: 'CubeLeft',
                        shape: {
                           // api,
                            xValue: api.value(0),
                            yValue: api.value(1),
                            x: location[0],
                            y: location[1],
                            xAxisPoint: api.coord([api.value(0), 0])
                        },
                        style: {
                            fill: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                    offset: 0,
                                    color: '#3B80E2'
                                },
                                {
                                    offset: 1,
                                    color: '#49BEE5'
                                }
                            ])
                        }
                    }, {
                        type: 'CubeRight',
                        shape: {
                            //api,
                            xValue: api.value(0),
                            yValue: api.value(1),
                            x: location[0],
                            y: location[1],
                            xAxisPoint: api.coord([api.value(0), 0])
                        },
                        style: {
                            fill: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                    offset: 0,
                                    color: '#3B80E2'
                                },
                                {
                                    offset: 1,
                                    color: '#49BEE5'
                                }
                            ])
                        }
                    }, {
                        type: 'CubeTop',
                        shape: {
                            //api,
                            xValue: api.value(0),
                            yValue: api.value(1),
                            x: location[0],
                            y: location[1],
                            xAxisPoint: api.coord([api.value(0), 0])
                        },
                        style: {
                            fill: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                    offset: 0,
                                    color: '#3B80E2'
                                },
                                {
                                    offset: 1,
                                    color: '#49BEE5'
                                }
                            ])
                        }
                    }]
                }
            },
            data: HYYH_VALUE
        }, {
            type: 'bar',
            label: {
                normal: {
                    show: true,
                    position: 'top',
                    fontSize: 12,
                    color: '#fff',
                    offset: [4, -25]
                }
            },
            itemStyle: {
                color: 'transparent'
            },
            data: HYYH_MAX
        }]
    }
    return  hyyh_option
}