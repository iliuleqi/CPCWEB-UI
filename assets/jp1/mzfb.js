//职称结构取数
var mzfb_getname = ['汉族', '满族', '回族', '壮族'];
var mzfb_getvalue = [300, 200, 100, 50];
var mzfb_data = [];
for (var i = 0; i < mzfb_getname.length; i++) {
    mzfb_data.push({
        name: mzfb_getname[i],
        value: mzfb_getvalue[i]
    })
}
var mzfb_colorList = ['#503EFF', '#3E82FF', '#8BF39A', '#00FCFD'];
var mzfb_rich = {
    name: {
        color: "#FFF",
        fontSize: 14,
        padding: [10, 15, 0, 10],
        fontWeight: '400',
        align: 'left'
    },
    value: {
        color: "#FFF",
        fontSize: 15,
        padding: [10, 10, 0, 15],
        fontWeight: '500',
        align: 'right'
    },
    percent: {
        color: "#FFF",
        align: 'right',
        fontSize: 15,
        fontWeight: '500',
        //padding: [0, 5]
    },
    hr: {
        width: '100%',
        height: 0,
    },
    cir: {
        fontSize: 26,
    }
}
//职称结构图表

var mzfb_option = {
    tooltip: {
        trigger: 'axis',
    },
    series: [{
        tooltip: {
            trigger: 'item',
            formatter: function(params) {
                return params.name + '：' + params.value + '人<br>占比：' + params.percent.toFixed(2) + '%'
            }
        },
        itemStyle: {
            normal: {
                borderColor: '#0A1934',
                borderWidth: 5,
                color: function(params) {
                    return mzfb_colorList[params.dataIndex]
                }
            }
        },
        type: 'pie',
        radius: ['30%', '50%'],
        center: ["50%", "50%"],
        label: {
            normal: {
                show: false,
                position: 'inner',
                formatter: params => {
                    return (
                        '{percent|' + params.percent.toFixed(0) + '%}'
                    );
                },
                rich: mzfb_rich,
            }
        },
        data: mzfb_data
    }, {
        itemStyle: {
            normal: {
                borderColor: '#0A1934',
                borderWidth: 5,
                color: function(params) {
                    return mzfb_colorList[params.dataIndex]
                }
            }
        },
        type: 'pie',
        silent: true, //取消高亮
        radius: ['30%', '50%'],
        center: ["50%", "50%"],
        labelLine: {
            normal: {
                length: 30,
                length2: 0,
                lineStyle: {
                    color: 'transparent'
                }
            }
        },
        label: {
            normal: {
                formatter: params => {
                    return '{name|' + params.name + '}{value|' + params.value + '}\n{hr|————————}';
                },
                rich: mzfb_rich,
                padding: [-20, 25, 0, 25]
            }
        },
        data: mzfb_data,
        z: -1
    }, {
        itemStyle: {
            normal: {
                borderColor: '#0A1934',
                borderWidth: 5,
                color: function(params) {
                    return mzfb_colorList[params.dataIndex]
                }
            }
        },
        type: 'pie',
        silent: true, //取消高亮
        radius: ['30%', '50%'],
        center: ["50%", "50%"],
        labelLine: {
            normal: {
                length: 30,
                length2: 0,
                lineStyle: {
                    color: 'transparent'
                }
            }
        },
        label: {
            normal: {
                formatter: params => {
                    return '\n{cir|●}\n';
                },
                rich: mzfb_rich,
            }
        },
        data: mzfb_data,
        z: -1
    }]
};