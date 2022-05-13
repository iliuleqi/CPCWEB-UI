function getP2_dlfb(k,v)
{
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
            "bottom": 0,
            "top": 30
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
            "data": k,
            "type": "category"
        },
        "yAxis": {
            "minInterval": 1,
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
            "data": v,
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
        }, ],
        "tooltip": {
            "trigger": "axis",
            "show": false
        }
    }
    return dlfb_option
}