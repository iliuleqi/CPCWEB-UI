function getp2_xlfb(kv,k)
{
    var xlfb_seriesData = kv;
    var xlfb_legendData = k
    var xlfb_colorList = ['#73DDFF', '#73ACFF', '#FDD56A', '#FDB36A', '#FD866A', '#9E87FF', '#58D5FF','#91cc75','#3ba272'];
    var xlfb_option = {
        legend: {
            type: "scroll",
            orient: 'horizontal',
            left: 'center',
            align: 'auto',
            width:'85%',
            top: 'bottom',
            textStyle: {
                color: '#fff'
            },
            data: xlfb_legendData
        },
        series: [{
            type: 'pie',
            z: 3,
            center: ['50%', '40%'],
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
    return xlfb_option
    
}