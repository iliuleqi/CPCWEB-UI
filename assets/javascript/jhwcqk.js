var jhwcqk_xData = ["计划一", "计划二", "计划三", "计划四", "计划五", "计划六"],
    jhwcqk_yData1 = [104, 56, 136, 86, 98, 86],
    jhwcqk_yData2 = [100, 206, 236, 106, 80, 160],
    jhwcqk_borderData = [],
    jhwcqk_legend = ["类一", "类二"],
    jhwcqk_colorArr = [{
            start: "rgba(155, 101, 229,",
            end: "rgba(18, 58, 86,0.5)"
        },
        {
            start: "rgba(71, 173, 245,",
            end: "rgba(18, 58, 86,0.5)"
        }
    ];
var jhwcqk_normalColor = "rgba(255,255,255,0.5)";
//   var fontSize = 20;
let jhwcqk_seriesData = [];
var jhwcqk_borderHeight = 4;
jhwcqk_xData.forEach(element => {
    jhwcqk_borderData.push(jhwcqk_borderHeight);
});
[jhwcqk_yData1,jhwcqk_yData2].forEach((item, index) => {
    var obj1 = {};
    var obj2 = {};
    if (index < 3) {
        obj1 = {
            name: jhwcqk_legend[index],
            type: "bar",
            stack: jhwcqk_legend[index],
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
                                color: jhwcqk_colorArr[index].start + "0.7)"
                            },
                            {
                                offset: 0.5,
                                color: jhwcqk_colorArr[index].start + "0.3)"
                            },
                            {
                                offset: 1,
                                color: jhwcqk_colorArr[index].end
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
            stack: jhwcqk_legend[index],
            itemStyle: {
                normal: {
                    color: jhwcqk_colorArr[index].start + "1)"
                }
            },
            data: jhwcqk_borderData
        };
        jhwcqk_seriesData.push(obj1);
        jhwcqk_seriesData.push(obj2);
    } 
});

var jhwcqk_option = {
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
        data: jhwcqk_legend
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
        data: jhwcqk_xData,
        axisPointer: {
            type: "shadow"
        },
        axisLabel: {
            textStyle: {
                color: jhwcqk_normalColor,
                fontSize: 12
            }
        },
        axisLine: {
            lineStyle: {
                color: jhwcqk_normalColor
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
                color: jhwcqk_normalColor,
                fontSize: 12
            },
            // "min": 0,
            // "max": 50,
            axisLabel: {
                formatter: "{value}",
                textStyle: {
                    color: jhwcqk_normalColor,
                    fontSize: 12
                }
            },
            axisLine: {
                lineStyle: {
                    color: jhwcqk_normalColor
                }
            },
            axisTick: {
                show: false
            },
            splitLine: {
                show: false,
                lineStyle: {
                    type: "dashed",
                    color: jhwcqk_normalColor
                }
            }
        },
        {
            type: "value",
            nameTextStyle: {
                color: jhwcqk_normalColor,
                fontSize: 12
            },
            min: -100,
            max: 100,
            axisLabel: {
                formatter: "{value}",
                textStyle: {
                    color: jhwcqk_normalColor,
                    fontSize: 12
                }
            },
            axisLine: {
                lineStyle: {
                    color: jhwcqk_normalColor
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
    series: jhwcqk_seriesData
};