var dzzjc_xData = ["组织一", "组织二", "组织三", "组织四", "组织五", "组织六"],
    dzzjc_yData1 = [104, 56, 136, 86, 98, 86],
    dzzjc_yData2 = [100, 206, 236, 106, 80, 160],
    dzzjc_borderData = [],
    dzzjc_legend = ["待办", "督办"],
    dzzjc_colorArr = [{
            start: "rgba(155, 101, 229,",
            end: "rgba(18, 58, 86,0.5)"
        },
        {
            start: "rgba(71, 173, 245,",
            end: "rgba(18, 58, 86,0.5)"
        }
    ];
var dzzjc_normalColor = "rgba(255,255,255,0.5)";
//   var fontSize = 20;
let dzzjc_seriesData = [];
var dzzjc_borderHeight = 4;
dzzjc_xData.forEach(element => {
    dzzjc_borderData.push(dzzjc_borderHeight);
});
[dzzjc_yData1, dzzjc_yData2].forEach((item, index) => {
    var obj1 = {};
    var obj2 = {};
    if (index < 3) {
        obj1 = {
            name: dzzjc_legend[index],
            type: "bar",
            stack: dzzjc_legend[index],
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
                                color: dzzjc_colorArr[index].start + "0.7)"
                            },
                            {
                                offset: 0.5,
                                color: dzzjc_colorArr[index].start + "0.3)"
                            },
                            {
                                offset: 1,
                                color: dzzjc_colorArr[index].end
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
            stack: dzzjc_legend[index],
            itemStyle: {
                normal: {
                    color: dzzjc_colorArr[index].start + "1)"
                }
            },
            data: dzzjc_borderData
        };
        dzzjc_seriesData.push(obj1);
        dzzjc_seriesData.push(obj2);
    } 
});

var dzzjc_option = {
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
        data: dzzjc_legend
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
        data: dzzjc_xData,
        axisPointer: {
            type: "shadow"
        },
        axisLabel: {
            textStyle: {
                color: dzzjc_normalColor,
                fontSize: 12
            }
        },
        axisLine: {
            lineStyle: {
                color: dzzjc_normalColor
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
                color: dzzjc_normalColor,
                fontSize: 12
            },
            // "min": 0,
            // "max": 50,
            axisLabel: {
                formatter: "{value}",
                textStyle: {
                    color: dzzjc_normalColor,
                    fontSize: 12
                }
            },
            axisLine: {
                lineStyle: {
                    color: dzzjc_normalColor
                }
            },
            axisTick: {
                show: false
            },
            splitLine: {
                show: false,
                lineStyle: {
                    type: "dashed",
                    color: dzzjc_normalColor
                }
            }
        },
        {
            type: "value",
            nameTextStyle: {
                color: dzzjc_normalColor,
                fontSize: 12
            },
            min: -100,
            max: 100,
            axisLabel: {
                formatter: "{value}",
                textStyle: {
                    color: dzzjc_normalColor,
                    fontSize: 12
                }
            },
            axisLine: {
                lineStyle: {
                    color: dzzjc_normalColor
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
    series: dzzjc_seriesData
};