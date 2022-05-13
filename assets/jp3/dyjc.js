var dyjc_xData = ["王强", "张峰", "李跃进", "孙丹", "赵瑞", "刘国恩"],
    dyjc_yData1 = [104, 56, 136, 86, 98, 86],
    dyjc_yData2 = [100, 206, 236, 106, 80, 160],
    dyjc_borderData = [],
    dyjc_legend = ["奖励", "惩罚"],
    dyjc_colorArr = [{
            start: "rgba(155, 101, 229,",
            end: "rgba(18, 58, 86,0.5)"
        },
        {
            start: "rgba(71, 173, 245,",
            end: "rgba(18, 58, 86,0.5)"
        }
    ];
var dyjc_normalColor = "rgba(255,255,255,0.5)";
//   var fontSize = 20;
let dyjc_seriesData = [];
var dyjc_borderHeight = 4;
dyjc_xData.forEach(element => {
    dyjc_borderData.push(dyjc_borderHeight);
});
[dyjc_yData1, dyjc_yData2].forEach((item, index) => {
    var obj1 = {};
    var obj2 = {};
    if (index < 3) {
        obj1 = {
            name: dyjc_legend[index],
            type: "bar",
            stack: dyjc_legend[index],
            data: item,
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
                                color: dyjc_colorArr[index].start + "0.7)"
                            },
                            {
                                offset: 0.5,
                                color: dyjc_colorArr[index].start + "0.3)"
                            },
                            {
                                offset: 1,
                                color: dyjc_colorArr[index].end
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
            stack: dyjc_legend[index],
            itemStyle: {
                normal: {
                    color: dyjc_colorArr[index].start + "1)"
                }
            },
            data: dyjc_borderData
        };
        dyjc_seriesData.push(obj1);
        dyjc_seriesData.push(obj2);
    } 
});

var dyjc_option = {
    grid: {
        left: "5%",
        top: "10%",
        right: "5%",
        bottom: "10%",
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
        data: dyjc_legend
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
    xAxis: [{
        type: "category",
        data: dyjc_xData,
        axisPointer: {
            type: "shadow"
        },
        axisLabel: {
            textStyle: {
                color: dyjc_normalColor,
                fontSize: 12
            }
        },
        axisLine: {
            lineStyle: {
                color: dyjc_normalColor
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
                color: dyjc_normalColor,
                fontSize: 12
            },
            // "min": 0,
            // "max": 50,
            axisLabel: {
                formatter: "{value}",
                textStyle: {
                    color: dyjc_normalColor,
                    fontSize: 12
                }
            },
            axisLine: {
                lineStyle: {
                    color: dyjc_normalColor
                }
            },
            axisTick: {
                show: false
            },
            splitLine: {
                show: false,
                lineStyle: {
                    type: "dashed",
                    color: dyjc_normalColor
                }
            }
        },
        {
            type: "value",
            nameTextStyle: {
                color: dyjc_normalColor,
                fontSize: 12
            },
            min: -100,
            max: 100,
            axisLabel: {
                formatter: "{value}",
                textStyle: {
                    color: dyjc_normalColor,
                    fontSize: 12
                }
            },
            axisLine: {
                lineStyle: {
                    color: dyjc_normalColor
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
        }
    ],
    series: dyjc_seriesData
};