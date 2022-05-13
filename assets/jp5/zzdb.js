function getp5_zzdb (k, v) {
  //组织督办 倒序输出
  k = k.reverse();
  v = v.reverse();

  /**
   * 
   */
  var zzdb_option = {
    grid: {
      left: "5%",
      top: 10,
      right: "15%",
      bottom: 10,
      containLabel: true
    },
    barWidth: 15,
    tooltip: {
      trigger: "axis",
      formatter: function (params) {
        var ret = "";
        var lineLength = 12;
        for (var i = 0; i < params.length; i++) {
          if (params[i].seriesName !== "") {
            var textMy = params[i].name;
            var valLength = textMy.length;
            var rowN = Math.ceil(valLength / lineLength);
            if (rowN > 1) {
              for (var k = 0; k < rowN; k++) {
                var temp = "";
                var start = k * lineLength;
                var end = start + lineLength;
                if (k == rowN - 1) {
                  temp = textMy.substring(start, end);
                } else {
                  temp = textMy.substring(start, end) + "<br>";
                }
                ret += temp;
              }
            } else {
              ret = textMy;
            }
          }
          ret += ": " + params[i].value + "<br>";
        }
        return ret;
      }
    },
    dataZoom: [//滑动条
      {
        yAxisIndex: 0,//这里是从X轴的0刻度开始
        show: true,//是否显示滑动条，不影响使用
        type: 'slider', // 这个 dataZoom 组件是 slider 型 dataZoom 组件
        startValue: 0, // 从头开始。
        endValue: 3, // 一次性展示6个。
        width: 10,
        right: "8%",
        showDetail: false,
        textStyle: {
          color: '#E1E1E1',
          fontStyle: 'normal',
          fontWeight: 'normal',
          fontFamily: 'sans-serif',
          fontSize: 12,
          lineHeight: 20,
          width: 100,
          height: 20,
          overflow: 'break',
          ellipsis: 'break',
          lineOverflow: 'break'
        }
      }
    ],
    xAxis: {
      type: 'value',
      minInterval: 1,
      splitLine: {
        lineStyle: {
          color: "rgba(255,255,255,0.2)"
        }
      },
      axisTick: {
        show: false
      },
      axisLine: { //  改变x轴颜色
        show: true,
        lineStyle: {
          color: '#26D9FF'
        }
      },
      axisLabel: { //  改变x轴字体颜色和大小
        textStyle: {
          color: "rgba(250,250,250,0.6)",
          fontSize: 12
        }
      }
    },
    yAxis: {
      type: 'category',
      minInterval: 1,
      data: k,//['组织一', '组织二', '组织三', '组织四', '组织五'],
      splitLine: {
        show: false
      },
      axisTick: {
        show: false
      },
      axisLine: { //  改变y轴颜色
        lineStyle: {
          color: '#26D9FF'
        }
      },
      axisLabel: { //  改变y轴字体颜色和大小
        //formatter: '{value} m³ ', //  给y轴添加单位
        textStyle: {
          color: "rgba(250,250,250,0.6)",
          fontSize: 15
        },
        //折行显示
        formatter: function (value) {
          var ret = "";
          var maxLength = 6;
          //截取15个汉字
          if (maxLength * 3 < value.length) {
            value = value.substring(0, maxLength * 2);
          }
          var valLength = value.length;
          var rowN = Math.ceil(valLength / maxLength);
          if (rowN > 1) {
            for (var i = 0; i < rowN; i++) {
              var temp = "";
              var start = i * maxLength;
              var end = start + maxLength;
              if (i == rowN - 1) {
                temp = value.substring(start, end);
              } else {
                temp = value.substring(start, end) + "\n";
              }
              ret += temp;
            }
            return ret + "......";
          }
          else {
            return value;
          }
        }
      }
    },
    series: [{
      type: 'bar',
      itemStyle: {
        normal: {
          label: {
            show: true, //开启显示
            position: 'right', //在上方显示
            textStyle: { //数值样式
              color: "rgba(250,250,250,0.6)",
              fontSize: 12,
              fontWeight: 600
            }
          },
          color: new echarts.graphic.LinearGradient(1, 0, 0, 0, [{
            offset: 0,
            color: 'rgba(61,126,235,1)'
          }, {
            offset: 1,
            color: 'rgba(61,126,235,0)'
          }]),
          borderColor: new echarts.graphic.LinearGradient(1, 0, 0, 0, [{
            offset: 0,
            color: 'rgba(160,196,225,1)'
          }, {
            offset: 1,
            color: 'rgba(61,126,235,1)'
          }]),
          borderWidth: 1
        }
      },
      data: v//[19, 29, 39, 81, 302]
    }
    ]
  };
  return zzdb_option;
}