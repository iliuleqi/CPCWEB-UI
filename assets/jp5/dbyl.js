function getp5_dbyl (k, v1, v2, year) {

  var current_time = new Date();
  var current_y = current_time.getFullYear();
  var current_m = current_time.getMonth() + 1;
  var temp_k = [];
  var temp_v1 = [];
  var temp_v2 = [];
  /**
   * 生成12个月份空数据
   * {
   * url:"",
   * value:0
   * }
   */
  current_m = (year == current_y) ? current_m : 12;
  for (var i = 1; i <= current_m; i++) {
    var mm = (current_m + "").length == 1 ? "0" + i : i;
    temp_k.push(year + "-" + mm);
    temp_v1.push({ url: "", value: 0 });
    temp_v2.push({ url: "", value: 0 });
  }

  for (var m = 0, mLen = temp_k.length; m <= mLen; m++) {
    for (var n = 0, kLen = k.length; n <= kLen; n++) {
      if (temp_k[m] == k[n]) {
        temp_v1[m] = v1[n];
        temp_v2[m] = v2[n];
      }
    }
  }


  var dbyl_xData = temp_k;//["2021-01", "2021-02", "2021-03", "2021-04", "2021-05", "2021-06"],
  var dbyl_yData1 = temp_v1;//[104, 56, 136, 86, 98, 86],
  var dbyl_yData2 = temp_v2;//[100, 206, 236, 106, 80, 160],
  var dbyl_yData = [dbyl_yData1, dbyl_yData2];
  dbyl_borderData = [],
    dbyl_legend = ["待办", "被督办"],
    dbyl_colorArr = [
      {
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
  var dbyl_seriesData = [];
  var dbyl_borderHeight = 4;
  for (var i = 0; i < dbyl_xData.length; i++) {
    dbyl_borderData.push(dbyl_borderHeight);
  }
  // dbyl_xData.forEach(element => {
  //     dbyl_borderData.push(dbyl_borderHeight);
  // });


  //[dbyl_yData1, dbyl_yData2].forEach((item, index) => {
  for (var index = 0; index < dbyl_yData.length; index++) {
    var obj1 = {};
    var obj2 = {};
    if (index < 3) {
      obj1 = {
        name: dbyl_legend[index],
        type: "bar",
        stack: dbyl_legend[index],
        data: dbyl_yData[index],
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
      //dbyl_seriesData.push(obj2);
    }
  };

  var dbyl_option = {
    grid: {
      left: "5%",
      top: "20%",
      right: "5%",
      bottom: 27,
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
      formatter: function (params) {
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
        show: dbyl_xData.length > 6 ? true : false,//是否显示滑动条，不影响使用
        type: 'slider', // 这个 dataZoom 组件是 slider 型 dataZoom 组件
        startValue: 0, // 从头开始。
        endValue: 5,  // 一次性展示6个。
        bottom: "3%",
        height: 10,
        showDetail: false
      }
    ],
    xAxis: [{
      type: "category",
      minInterval: 1,
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
      minInterval: 1,
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
      // {
      //   type: "value",
      //   nameTextStyle: {
      //     color: dbyl_normalColor,
      //     fontSize: 12
      //   },
      //   min: -100,
      //   max: 100,
      //   axisLabel: {
      //     formatter: "{value}",
      //     textStyle: {
      //       color: dbyl_normalColor,
      //       fontSize: 12
      //     }
      //   },
      //   axisLine: {
      //     lineStyle: {
      //       color: dbyl_normalColor
      //     }
      //   },
      //   axisTick: {
      //     show: false
      //   },
      //   splitLine: {
      //     show: true,
      //     lineStyle: {
      //       type: "dashed",
      //       color: "rgba(255,255,255,0.2)"
      //     }
      //   }
      // }
    ],
    series: dbyl_seriesData
  };
  return dbyl_option;
}