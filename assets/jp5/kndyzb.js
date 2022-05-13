var kndyzb_seriesData = [{
    name: "困难党员",
    value: "40000"
}, {
    name: "非困难党员",
    value: "10000"
}];
var kndyzb_legendData = ["困难党员", "非困难党员"]
var kndyzb_colorList = ['#9E87FF', '#58D5FF'];
var kndyzb_option = {
    legend: {
        type: "scroll",
        orient: 'horizontal',
        left: 'center',
        align: 'auto',
        top: 'bottom',
        textStyle: {
            color: '#fff'
        },
        data: kndyzb_legendData
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
                    return kndyzb_colorList[params.dataIndex]
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
        data: kndyzb_seriesData
    }]
};
