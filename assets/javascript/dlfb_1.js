// 学历
var dyfb_yList = [45, 86, 100];
var dyfb_xList = ["本科以下", "本科", "本科以上"];
var dyfb_color = ['#FFF', '#FFF', '#FFF'];

var dyfb_xData = [];
for (var index = 0; index < dyfb_xList.length; index++) {
    var obj =  {
        value: dyfb_xList[index],
        textStyle: {
            color: dyfb_color[index]
        }
    }
    dyfb_xData.push(obj);
    
}

// var dyfb_xData = dyfb_xList.map((item, index) => {
//     return {
//         value: item,
//         textStyle: {
//             color: dyfb_color[index]
//         }
//     };
// });

var dyfbbarWidth = 12;
var dyfbcolors = [{
        type: 'linear',
        x: 0,
        x2: 1,
        y: 0,
        y2: 0,
        colorStops: [{
            offset: 0,
            color: '#FF3FDA'
        }, {
            offset: 0.5,
            color: '#FF3FDA'
        }, {
            offset: 0.5,
            color: '#CC1BAA'
        }, {
            offset: 1,
            color: '#CC1BAA'
        }]
    },
    {
        type: 'linear',
        x: 0,
        x2: 1,
        y: 0,
        y2: 0,
        colorStops: [{
            offset: 0,
            color: '#602CFF'
        }, {
            offset: 0.5,
            color: '#602CFF'
        }, {
            offset: 0.5,
            color: '#4915E6'
        }, {
            offset: 1,
            color: '#4915E6'
        }]
    },
    {
        type: 'linear',
        x: 0,
        x2: 1,
        y: 0,
        y2: 0,
        colorStops: [{
            offset: 0,
            color: '#00FFFF'
        }, {
            offset: 0.5,
            color: '#00FFFF'
        }, {
            offset: 0.5,
            color: '#11A6D0'
        }, {
            offset: 1,
            color: '#11A6D0'
        }]
    },
    {
        type: 'linear',
        x: 0,
        x2: 1,
        y: 0,
        y2: 0,
        colorStops: [{
            offset: 0,
            color: '#89FF5E'
        }, {
            offset: 0.5,
            color: '#89FF5E'
        }, {
            offset: 0.5,
            color: '#48DD12'
        }, {
            offset: 1,
            color: '#48DD12'
        }]
    },
    {
        type: 'linear',
        x: 0,
        x2: 1,
        y: 0,
        y2: 0,
        colorStops: [{
            offset: 0,
            color: '#FFD05C'
        }, {
            offset: 0.5,
            color: '#FFD05C'
        }, {
            offset: 0.5,
            color: '#DEA821'
        }, {
            offset: 1,
            color: '#DEA821'
        }]
    },
    {
        type: 'linear',
        x: 0,
        x2: 1,
        y: 0,
        y2: 0,
        colorStops: [{
            offset: 0,
            color: '#FF7853'
        }, {
            offset: 0.5,
            color: '#FF7853'
        }, {
            offset: 0.5,
            color: '#DB3E13'
        }, {
            offset: 1,
            color: '#DB3E13'
        }]
    },
    {
        type: 'linear',
        x: 0,
        x2: 1,
        y: 0,
        y2: 0,
        colorStops: [{
            offset: 0,
            color: '#AA48FF'
        }, {
            offset: 0.5,
            color: '#AA48FF'
        }, {
            offset: 0.5,
            color: '#8E15F8'
        }, {
            offset: 1,
            color: '#8E15F8'
        }]
    }
];
var dyfb_option = {
    /**区域位置*/
      grid: {
          left: 30,
          right: 20,
          top: 20,
          bottom: 30,
        },
    /**图例大小*/
    //  legend: {
    //   type: 'plain',
    //   left: 0,
    //   top: 20,
    //   itemGap: 20,
    //   itemWidth: 35,
    //   itemHeight: 20
    // },
    //X轴
    xAxis: {
        nameTextStyle: {
            color: '#FFFFFF',
            padding: [0, 0, 0, 20]

        },
        data: dyfb_xData,
        show: true,
        type: 'category',
        axisLine: {
            show: false,
            lineStyle: {
                color: 'rgba(255,255,255,1)',
                shadowColor: 'rgba(255,255,255,1)',
                shadowOffsetX: '20',
            },
            symbol: ['none', 'none'],
            symbolOffset: [0, 25]
        },
        splitLine: {
            show: false,
            lineStyle: {
                color: 'rgba(255,255,255,0.2)'
            },
        },
        axisLabel: {
            rotate: 0,
            fontSize: 10,
        },
    },
    yAxis: {
        show: true,
        splitNumber: 3,
        axisLine: {
            show: false,
            lineStyle: {
                color: 'rgba(255,255,255,0)'
            },
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: 'rgba(255,255,255,0.2)'

            },
        },
        axisLabel: {
            color: '#FFF',
        }
    },
    series: [{
            type: 'bar',
            barWidth: 12,
            itemStyle: {
                normal: {
                    color: function(params) {
                        return dyfbcolors[params.dataIndex % 7];
                    }
                }
            },
            label: {
                show: true,
                position: [dyfbbarWidth / 2, -(dyfbbarWidth + 20)],
                color: '#ffffff',
                fontSize: 10,
                fontStyle: 'bold',
                align: 'center',
            },
            data: dyfb_yList
        },
        {
            z: 2,
            type: 'pictorialBar',
            data: dyfb_yList,
            symbol: 'diamond',
            symbolOffset: [0, '50%'],
            symbolSize: [dyfbbarWidth, dyfbbarWidth * 0.5],
            itemStyle: {
                normal: {
                    color: function(params) {
                        return dyfbcolors[params.dataIndex % 7];
                    },
                }
            },
        },
        {
            z: 3,
            type: 'pictorialBar',
            symbolPosition: 'end',
            data: dyfb_yList,
            symbol: 'diamond',
            symbolOffset: [0, '-50%'],
            symbolSize: [dyfbbarWidth, dyfbbarWidth * 0.5],
            itemStyle: {
                normal: {
                    borderWidth: 0,
                    color: function(params) {
                        return dyfbcolors[params.dataIndex % 7].colorStops[0].color;
                    },

                }
            },
        },
        {
            z: 8,
            type: 'pictorialBar',
            symbolPosition: 'end',
            data: dyfb_yList,
            symbol: 'circle',
            symbolOffset: [0, -dyfbbarWidth],
            symbolSize: [dyfbbarWidth * 0.5, dyfbbarWidth * 0.5],
            itemStyle: {
                normal: {
                    borderWidth: 0,
                    color: function(params) {
                        return dyfbcolors[params.dataIndex % 7].colorStops[0].color;
                    },

                }
            },
        },
    ],
};