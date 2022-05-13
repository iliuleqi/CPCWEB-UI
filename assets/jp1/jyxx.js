function getP1_Jyxx(dyjy_data,dyjy_values)
{
    //console.log(dyjy_data,dyjy_values)
    // var dyjy_data = ["资料库数量", "师资库数量", "试题库数量", "课程数量","参训人次"]
    // var dyjy_values = [981,1230, 1021, 131, 11]

    var colorRgb = function(sColor){
        if (sColor) {
            sColor = sColor.toLowerCase();
            //十六进制颜色值的正则表达式
            var reg = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/;
            // 如果是16进制颜色
            if (sColor && reg.test(sColor)) {
                if (sColor.length === 4) {
                    var sColorNew = "#";
                    for (var i=1; i<4; i+=1) {
                        sColorNew += sColor.slice(i, i+1).concat(sColor.slice(i, i+1));    
                    }
                    sColor = sColorNew;
                }
                //处理六位的颜色值
                var sColorChange = [];
                for (var i=1; i<7; i+=2) {
                    sColorChange.push(parseInt("0x"+sColor.slice(i, i+2)));    
                }
                return "rgba(" + sColorChange.join(",") + ", 0.5)";
            }
        }
        return "rgba(223,42,42, 0.5)";
    };
    

    var dyjy_colors = ["#df2a2a", "#2cd982","#134fb3", "#2c9b0a", "#dd8e10", "#df2a2a", "#2cd982","#134fb3", "#2c9b0a", "#dd8e10", "#df2a2a", "#2cd982","#134fb3", "#2c9b0a", "#dd8e10"];
    
    var dyjy_data_1 = [];
    var dyjy_data_2 = [];
    var dyjy_data_3 = [];
    var dyjy_data_4 = [];
    var dyjy_data_5 = [];

    for (var i = 0; i < dyjy_data.length; i++) {
        var d = {
            name: dyjy_data[i],
            value: dyjy_values[i].value + 1,
            url: dyjy_values[i].url,
            code:dyjy_values[i].code,
            symbolPosition: 'end',
            itemStyle: {
                normal: {
                    color: dyjy_colors[i],
                } 
            },
            
        }
        dyjy_data_1.push(d)
    }

    for (var i = 0; i < dyjy_data.length; i++) {
        //console.log(dyjy_colors[index])
        var d = {
            name: dyjy_data[i],
            value: dyjy_values[i].value + 1,
            url: dyjy_values[i].url,
            code:dyjy_values[i].code,
            itemStyle: {
                normal: {
                    color: dyjy_colors[i], //圆柱底部颜色
                    // color: `${dyjy_colors[i]}`, //圆柱底部颜色
                    
                }
            },
            
        }
        dyjy_data_2.push(d)
    }

    for (var i = 0; i < dyjy_data.length; i++) {
        var d = {
            name: dyjy_data[i],
            value: dyjy_values[i].value +1,
            itemStyle: {
                normal: {
                    color: "transparent",
                    // borderColor: `${dyjy_colors[i]}`, //底部内圆圈颜色
                    borderColor: dyjy_colors[i], //底部内圆圈颜色
                    borderWidth: 10
                }
            },
            
        }
        dyjy_data_3.push(d)
    }

    for (var i = 0; i < dyjy_data.length; i++) {
        var d = {
            name: dyjy_data[i],
            value: dyjy_values[i].value +1,
            itemStyle: {
                normal: {
                    color: "transparent",
                    borderColor: dyjy_colors[i],  //底部外圆圈颜色
                    borderType: "dashed",
                    borderWidth: 10
                }
            }
        }
        dyjy_data_4.push(d)
    }
    for (var i = 0; i < dyjy_data.length; i++) {
        var d = {
            name: dyjy_data[i],
            value: dyjy_values[i].value +1,
            url: dyjy_values[i].url,
            code:dyjy_values[i].code,
            label: {
                normal: {
                    show: true,
                    position: "top",
                    distance: 20,
                    textStyle: {
                        color: dyjy_colors[i],
                        fontSize: 10
                    },
                    formatter: function(params) {
                        return params.value - 1;
                    },
                },
                
            },
            itemStyle: {
                "normal": {
                    "color": {
                        "x": 0,
                        "y": 0,
                        "x2": 0,
                        "y2": 1,
                        "type": "linear",
                        "global": false,
                        "colorStops": [{
                            "offset": 0,
                            "color": colorRgb(dyjy_colors[i])
                        }, {
                            "offset": 1,
                            "color": dyjy_colors[i] //底部渐变颜色
                        }]
                    }
                }
            }
        }
        dyjy_data_5.push(d)
    }
    // console.log(dyjy_data_1,dyjy_data_2,dyjy_data_3,dyjy_data_4,dyjy_data_5)
    var dyjy_option = {
        "grid": {
            top: 30,
            bottom: 70
        },
        "tooltip": {
            trigger: 'item', 
              formatter: function(data) 
              {
                  var color = data.color != 'transparent'? data.color : data.borderColor;
                  return '<div style="width:10px;height:10px;float:left; margin:5px 5px 0 0; background: '+ color +';border-radius: 50px;"></div>'+ data.name + '<span style="font-weight: bold;margin-left:5px">'+(data.value-1)+'</span>'; //将小数转化为百分数显示
               }
        },
        "xAxis": {
            "data": dyjy_data,
            "axisTick": {
                "show": false
            },
            "axisLine": {
                "show": false
            },
            "axisLabel": {
                interval:0,
                textStyle: {
                    color:  '#beceff',
                    fontSize: 12,
                },
                margin: 25, //刻度标签与轴线之间的距离。
            }
        },
        "yAxis": {
            "splitLine": {
                "show": false
            },
            "axisTick": {
                "show": false
            },
            "axisLine": {
                "show": false
            },
            "axisLabel": {
                "show": false
            }
        },
        "series": [
            {
                "name": "",
                "type": "pictorialBar",
                "symbolSize": [20, 10],
                "symbolOffset": [0, -5],
                "z": 12,
                "data": dyjy_data_1
            },
            {
                "name": "",
                "type": "pictorialBar",
                "symbolSize": [20, 10],
                "symbolOffset": [0, 5],
                "z": 12,
                "data": dyjy_data_2
            },
            {
                "name": "",
                "type": "pictorialBar",
                "symbolSize": [40, 20],
                "symbolOffset": [0, 15],
                "z": 11,
                "data": dyjy_data_3
            }, 
            {
                "name": "",
                "type": "pictorialBar",
                "symbolSize": [50, 20],
                "symbolOffset": [0, 20],
                "z": 10,
                "data": dyjy_data_4
            }, 
            {
                "name": "",
                "type": "bar",
                "silent": true,
                "barWidth": 20,
                "barGap": "-100%",            
                "data": dyjy_data_5
            }
        ]
    }
   // console.log(dyjy_option)
    return dyjy_option;
}
