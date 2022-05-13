var xlfb_seriesData = [{
    name: "博士",
    value: "40000"
}, {
    name: "硕士",
    value: "40000"
}, {
    name: "本科",
    value: "53000"
}, {
    name: "大专",
    value: "40000"
}];
var xlfb_legendData = ["博士", "硕士", "本科", "大专"]
var xlfb_colorList = ['#73DDFF', '#73ACFF', '#FDD56A', '#FDB36A', '#FD866A', '#9E87FF', '#58D5FF'];
var xlfb_option = {
    legend: {
        type: "scroll",
        orient: 'horizontal',
        left: 'center',
        align: 'auto',
        top: 'bottom',
        textStyle: {
            color: '#fff'
        },
        data: xlfb_legendData
    },
    series: [{
        type: 'pie',
        z: 3,
        center: ['50%', '50%'],
        radius: ['35%', '55%'],
        clockwise: true,
        avoidLabelOverlap: true,
        itemStyle: {
            normal: {
                color: function(params) {
                    return xlfb_colorList[params.dataIndex]
                }
            }
        },
        label: {
            show: true,
            position: 'outside',
            formatter: '{a|{b}：{d}%}',
            rich: {
                a: {
                    fontSize: 16,
                    color: "#FFF"
                }
            }
        },
        labelLine: {
            normal: {
                length: 20,
                length2: 30,
                lineStyle: {
                    width: 2
                }
            }
        },
        data: xlfb_seriesData
    }]
};
