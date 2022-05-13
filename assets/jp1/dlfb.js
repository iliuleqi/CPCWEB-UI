var dlfb_option = {
    "textStyle": {
        "color": "#c0c3cd",
        "fontSize": 14
    },
    "toolbox": {
        "show": false,
        "feature": {
            "saveAsImage": {
                "backgroundColor": "#031245"
            },
            "restore": {}
        },
        "iconStyle": {
            "borderColor": "#c0c3cd"
        }
    },
    "legend": {
        "top": 10,
        "itemWidth": 8,
        "itemHeight": 8,
        "icon": "circle",
        "left": "center",
        "padding": 0,
        "textStyle": {
            "color": "#c0c3cd",
            "fontSize": 14,
            "padding": [2, 0, 0, 0]
        }
    },
    "color": ["#63caff", "#49beff", "#03387a", "#03387a", "#03387a", "#6c93ee", "#a9abff", "#f7a23f", "#27bae7", "#ff6d9d", "#cb79ff", "#f95b5a", "#ccaf27", "#38b99c", "#93d0ff", "#bd74e0", "#fd77da", "#dea700"],
    "grid": {
        "containLabel": true,
        "left": 20,
        "right": 20,
        "bottom": 10,
        "top": 20
    },
    "xAxis": {
        "nameTextStyle": {
            "color": "#c0c3cd",
            "padding": [0, 0, -10, 0],
            "fontSize": 14
        },
        "axisLabel": {
            "color": "#c0c3cd",
            "fontSize": 14,
            "interval": 0
        },
        "axisTick": {
            "lineStyle": {
                "color": "#384267",
                "width": 1
            },
            "show": true
        },
        "splitLine": {
            "show": false
        },
        "axisLine": {
            "lineStyle": {
                "color": "#384267",
                "width": 1,
                "type": "dashed"
            },
            "show": true
        },
        "data": ["5年", "5-10年", "15-20年", "20年以上"],
        "type": "category"
    },
    "yAxis": {
        "nameTextStyle": {
            "color": "#c0c3cd",
            "padding": [0, 0, -10, 0],
            "fontSize": 14
        },
        "axisLabel": {
            "color": "#c0c3cd",
            "fontSize": 14
        },
        "axisTick": {
            "lineStyle": {
                "color": "#384267",
                "width": 1
            },
            "show": true
        },
        "splitLine": {
            "show": true,
            "lineStyle": {
                "color": "#384267",
                "type": "dashed"
            }
        },
        "axisLine": {
            "lineStyle": {
                "color": "#384267",
                "width": 1,
                "type": "dashed"
            },
            "show": true
        },
        "name": ""
    },
    "series": [{
        "data": [200, 85, 112, 405],
        "type": "bar",
        "barMaxWidth": "auto",
        "barWidth": 30,
        "itemStyle": {
            "color": {
                "x": 0,
                "y": 0,
                "x2": 0,
                "y2": 1,
                "type": "linear",
                "global": false,
                "colorStops": [{
                    "offset": 0,
                    "color": "#63caff"
                }, {
                    "offset": 1,
                    "color": "#49beff"
                }]
            }
        },
        "label": {
            "show": true,
            "position": "top",
            "distance": 10,
            "color": "#fff"
        }
    }, {
        "data": [1, 1, 1, 1, 1, 1, 1, 1],
        "type": "pictorialBar",
        "barMaxWidth": "20",
        "symbol": "diamond",
        "symbolOffset": [0, "50%"],
        "symbolSize": [30, 15]
    }, {
        "data": [200, 85, 112, 405],
        "type": "pictorialBar",
        "barMaxWidth": "20",
        "symbolPosition": "end",
        "symbol": "diamond",
        "symbolOffset": [0, "-50%"],
        "symbolSize": [30, 12],
        "zlevel": 2
    }, {
        "data": [900, 900, 900, 900, 900, 900, 900, 900],
        "type": "bar",
        "barMaxWidth": "auto",
        "barWidth": 30,
        "barGap": "-100%",
        "zlevel": -1
    }, {
        "data": [1, 1, 1, 1, 1, 1, 1, 1],
        "type": "pictorialBar",
        "barMaxWidth": "20",
        "symbol": "diamond",
        "symbolOffset": [0, "50%"],
        "symbolSize": [30, 15],
        "zlevel": -2
    }, {
        "data": [900, 900, 900, 900, 900, 900, 900, 900],
        "type": "pictorialBar",
        "barMaxWidth": "20",
        "symbolPosition": "end",
        "symbol": "diamond",
        "symbolOffset": [0, "-50%"],
        "symbolSize": [30, 12],
        "zlevel": -1
    }],
    "tooltip": {
        "trigger": "axis",
        "show": false
    }
}