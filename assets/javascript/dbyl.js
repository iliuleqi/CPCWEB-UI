var dbyl_xData = ["1月", "2月", "3月", "4月", "5月", "6月"],
    dbyl_yData1 = [104, 56, 136, 86, 98, 86],
    dbyl_yData2 = [100, 206, 236, 106, 80, 160],
    dbyl_borderData = [],
    dbyl_legend = ["待办", "督办"],
    dbyl_colorArr = [{
            start: "rgba(155, 101, 229,",
            end: "rgba(18, 58, 86,0.5)"
        },
        {
            start: "rgba(71, 173, 245,",
            end: "rgba(18, 58, 86,0.5)"
        }
    ];
var dbyl_normalColor = "rgba(255,255,255,0.5)";
//   var fontSize = 20;
let dbyl_seriesData = [];
var dbyl_borderHeight = 4;
dbyl_xData.forEach(element => {
    dbyl_borderData.push(dbyl_borderHeight);
});
[dbyl_yData1, dbyl_yData2].forEach((item, index) => {
    var obj1 = {};
    var obj2 = {};
    if (index < 3) {
        obj1 = {
            name: dbyl_legend[index],
            type: "bar",
            stack: dbyl_legend[index],
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
                                color: dbyl_colorArr[index].start + "0.7)"
                            },
                            {
                                offset: 0.5,
                                color: dbyl_colorArr[index].start + "0.3)"
                            },
                            {
                                offset: 1,
                                color: dbyl_colorArr[index].end
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
            stack: dbyl_legend[index],
            itemStyle: {
                normal: {
                    color: dbyl_colorArr[index].start + "1)"
                }
            },
            data: dbyl_borderData
        };
        dbyl_seriesData.push(obj1);
        dbyl_seriesData.push(obj2);
    } 
});

var dbyl_option = {
    grid: {
        left: "5%",
        top: "20%",
        right: "5%",
        bottom: 20,
        containLabel: true
    },
    legend: {
        show: true,
        icon: "rect",
        itemWidth: 20,
        itemHeight: 3,
        right: "15%",
        top: "0%",
        textStyle: {
            color: "#fff"
        },
        data: dbyl_legend
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
        data: dbyl_xData,
        axisPointer: {
            type: "shadow"
        },
        axisLabel: {
            textStyle: {
                color: dbyl_normalColor,
                fontSize: 12
            }
        },
        axisLine: {
            lineStyle: {
                color: dbyl_normalColor
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
                color: dbyl_normalColor,
                fontSize: 12
            },
            // "min": 0,
            // "max": 50,
            axisLabel: {
                formatter: "{value}",
                textStyle: {
                    color: dbyl_normalColor,
                    fontSize: 12
                }
            },
            axisLine: {
                lineStyle: {
                    color: dbyl_normalColor
                }
            },
            axisTick: {
                show: false
            },
            splitLine: {
                show: false,
                lineStyle: {
                    type: "dashed",
                    color: dbyl_normalColor
                }
            }
        },
        {
            type: "value",
            nameTextStyle: {
                color: dbyl_normalColor,
                fontSize: 12
            },
            min: -100,
            max: 100,
            axisLabel: {
                formatter: "{value}",
                textStyle: {
                    color: dbyl_normalColor,
                    fontSize: 12
                }
            },
            axisLine: {
                lineStyle: {
                    color: dbyl_normalColor
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
    series: dbyl_seriesData
};