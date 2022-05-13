function getp4_dycf(k,v1,v2)
{
    var dycf_xData = k;//["王强", "张峰", "李跃进", "孙丹", "赵瑞", "刘国恩"],
    var dycf_yData1 = v1;//[104, 56, 136, 86, 98, 86],
    var dycf_yData2 = v2;//[100, 206, 236, 106, 80, 160],
    var dycf_yData = [dycf_yData2];
    dycf_borderData = [],
    dycf_legend = ["惩罚"],
    dycf_colorArr = [{
            start: "rgba(155, 101, 229,",
            end: "rgba(18, 58, 86,0.5)"
        },
        {
            start: "rgba(71, 173, 245,",
            end: "rgba(18, 58, 86,0.5)"
        }
    ];
var dycf_normalColor = "rgba(255,255,255,0.5)";
//   var fontSize = 20;
var dycf_seriesData = [];
var dycf_borderHeight = 4;
// dycf_xData.forEach(element => {
//     dycf_borderData.push(dycf_borderHeight);
// });
for(var i=0;i<dycf_xData.length;i++){
    dycf_borderData.push(dycf_borderHeight);
}
//[dycf_yData2].forEach((item, index) => {
    for(var index=0;index<dycf_yData.length;index++){
    var obj1 = {};
    var obj2 = {};
    if (index < 3) {
        obj1 = {
            name: dycf_legend[index],
            type: "bar",
            stack: dycf_legend[index],
            data: dycf_yData[index],
            barWidth: "15%",
            itemStyle: {
                normal: {
                    color: {
                        type: "linear",
                        x: 0,
                        y: 0,
                        x2: 0,
                        y2: 1,
                        colorStops: [{
                                offset: 0,
                                color: dycf_colorArr[index].start + "0.7)"
                            },
                            {
                                offset: 0.5,
                                color: dycf_colorArr[index].start + "0.3)"
                            },
                            {
                                offset: 1,
                                color: dycf_colorArr[index].end
                            }
                        ],
                        globalCoord: false
                    }
                }
            }
        };
        obj2 = {
            name: "",
            type: "bar",
            stack: dycf_legend[index],
            itemStyle: {
                normal: {
                    color: dycf_colorArr[index].start + "1)"
                }
            },
            data: dycf_borderData
        };
        dycf_seriesData.push(obj1);
        //dycf_seriesData.push(obj2);
    } 
};

var dycf_option = {
    grid: {
        left: "5%",
        top: "5%",
        right: "5%",
        bottom: "20%",
        containLabel: true
    },
    legend: {
        show: true,
        icon: "rect",
        itemWidth: 20,
        itemHeight: 3,
        right: "5%",
        bottom: "0%",
        orient: 'horizontal',
        textStyle: {
            color: "#fff"
        },
        data: dycf_legend
    },
    tooltip: {
        trigger: "axis",
        formatter: function(params) {
            var str = "";
            for (var i = 0; i < params.length; i++) {
                if (params[i].seriesName !== "") {
                    str +=
                        params[i].name +
                        ":" +
                        params[i].seriesName +
                        params[i].value +
                        "<br/>";
                }
            }
            return str;
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
            height:20
        }
    ],
    xAxis: [{
        type: "category",
        data: dycf_xData,
        axisPointer: {
            type: "shadow"
        },
        axisLabel: {
            textStyle: {
                color: dycf_normalColor,
                fontSize: 12
            }
        },
        axisLine: {
            lineStyle: {
                color: dycf_normalColor
            }
        },
        axisTick: {
            show: false
        },
        splitLine: {
            show: false
        }
    }],
    yAxis: [{
            type: "value",
            nameTextStyle: {
                color: dycf_normalColor,
                fontSize: 12
            },
            "min": 0,
            minInterval: 1,
            // "max": 50,
            axisLabel: {
                formatter: "{value}",
                textStyle: {
                    color: dycf_normalColor,
                    fontSize: 12
                }
            },
            axisLine: {
                lineStyle: {
                    color: dycf_normalColor
                }
            },
            axisTick: {
                show: false
            },
            splitLine: {
                show: true,
                lineStyle: {
                    type: "dashed",
                    color: "rgba(255,255,255,0.2)"
                }
            }
        },
        // {
        //     type: "value",
        //     nameTextStyle: {
        //         color: dycf_normalColor,
        //         fontSize: 12
        //     },
        //     min: -100,
        //     max: 100,
        //     axisLabel: {
        //         formatter: "{value}",
        //         textStyle: {
        //             color: dycf_normalColor,
        //             fontSize: 12
        //         }
        //     },
        //     axisLine: {
        //         lineStyle: {
        //             color: dycf_normalColor
        //         }
        //     },
        //     axisTick: {
        //         show: false
        //     },
        //     splitLine: {
        //         show: true,
        //         lineStyle: {
        //             type: "dashed",
        //             color: "rgba(255,255,255,0.2)"
        //         }
        //     }
        // }
    ],
    series: dycf_seriesData
};
    return dycf_option
}