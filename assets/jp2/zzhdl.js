var zzhdl_xData = ["组织一", "组织二", "组织三", "组织四", "组织五", "组织六"],
    zzhdl_yData1 = [104, 56, 136, 86, 98, 86],
    zzhdl_yData2 = [100, 206, 236, 106, 80, 160],
    zzhdl_yData3 = [50, 206, 236, 106, 80, 160],
    zzhdl_yData4 = [20, 106, 26, 16, 40, 90],
    zzhdl_borderData = [],
    zzhdl_legend = ["计划", "安排","召开", "完成"],
    zzhdl_colorArr = [{
            start: "rgba(155, 101, 229,",
            end: "rgba(18, 58, 86,0.5)"
        },
        {
            start: "rgba(71, 173, 245,",
            end: "rgba(18, 58, 86,0.5)"
        },
        {
            start: "rgba(71, 173, 245,",
            end: "rgba(18, 58, 86,0.5)"
        },
        {
            start: "rgba(71, 173, 245,",
            end: "rgba(18, 58, 86,0.5)"
        }
    ];
var zzhdl_normalColor = "rgba(255,255,255,0.5)";
//   var fontSize = 20;
let zzhdl_seriesData = [];
var zzhdl_borderHeight = 4;
zzhdl_xData.forEach(element => {
    zzhdl_borderData.push(zzhdl_borderHeight);
});
[zzhdl_yData1, zzhdl_yData2,zzhdl_yData3, zzhdl_yData4].forEach((item, index) => {
    var obj1 = {};
    var obj2 = {};
        obj1 = {
            name: zzhdl_legend[index],
            type: "bar",
            stack: zzhdl_legend[index],
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
                                color: zzhdl_colorArr[index].start + "0.7)"
                            },
                            {
                                offset: 0.5,
                                color: zzhdl_colorArr[index].start + "0.3)"
                            },
                            {
                                offset: 1,
                                color: zzhdl_colorArr[index].end
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
            stack: zzhdl_legend[index],
            itemStyle: {
                normal: {
                    color: zzhdl_colorArr[index].start + "1)"
                }
            },
            data: zzhdl_borderData
        };
        zzhdl_seriesData.push(obj1);
        zzhdl_seriesData.push(obj2);
});

var zzhdl_option = {
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
        data: zzhdl_legend
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
        data: zzhdl_xData,
        axisPointer: {
            type: "shadow"
        },
        axisLabel: {
            textStyle: {
                color: zzhdl_normalColor,
                fontSize: 12
            }
        },
        axisLine: {
            lineStyle: {
                color: zzhdl_normalColor
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
                color: zzhdl_normalColor,
                fontSize: 12
            },
            // "min": 0,
            // "max": 50,
            axisLabel: {
                formatter: "{value}",
                textStyle: {
                    color: zzhdl_normalColor,
                    fontSize: 12
                }
            },
            axisLine: {
                lineStyle: {
                    color: zzhdl_normalColor
                }
            },
            axisTick: {
                show: false
            },
            splitLine: {
                show: false,
                lineStyle: {
                    type: "dashed",
                    color: zzhdl_normalColor
                }
            }
        },
        {
            type: "value",
            nameTextStyle: {
                color: zzhdl_normalColor,
                fontSize: 12
            },
            min: -100,
            max: 100,
            axisLabel: {
                formatter: "{value}",
                textStyle: {
                    color: zzhdl_normalColor,
                    fontSize: 12
                }
            },
            axisLine: {
                lineStyle: {
                    color: zzhdl_normalColor
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
    series: zzhdl_seriesData
};
