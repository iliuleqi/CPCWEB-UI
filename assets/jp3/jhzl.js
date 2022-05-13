function jhzl_fun() {
    var timer = setInterval(function() {
        // console.log(index)
        myChart.dispatchAction({
            type: 'hideTip',
            seriesIndex: 0,
            dataIndex: jhzl_index
        });
        // 显示提示框
        myChart.dispatchAction({
            type: 'showTip',
            seriesIndex: 0,
            dataIndex: jhzl_index
        });
        // 取消高亮指定的数据图形
        myChart.dispatchAction({
            type: 'downplay',
            seriesIndex: 0,
            dataIndex: jhzl_index == 0 ? 5 : jhzl_index - 1
        });
        myChart.dispatchAction({
            type: 'highlight',
            seriesIndex: 0,
            dataIndex: jhzl_index
        });
        index++;
        if (index > 5) {
            index = 0;
        }
    }, 3000)
}


function getp3_jlzl(kv)
{

    var jhzl_index = 0;
    var jhzl_colorList = ['#73DDFF', '#73ACFF', '#FDD56A', '#FDB36A', '#FD866A', '#9E87FF', '#58D5FF'];
    

    var jhzl_option = {
        
        tooltip: {
            trigger: 'item'
        },
        series: [{
            type: 'pie',
            center: ['50%', '50%'],
            radius: ['24%', '45%'],
            clockwise: true,
            avoidLabelOverlap: true,
            hoverOffset: 0,
            emphasis:{
                itemStyle:{
                    borderColor: '#f3f3f3',
                    borderWidth: 2
                }
            },
            itemStyle: {
                normal: {
                    color: function(params) {
                        return jhzl_colorList[params.dataIndex]
                    }
                }
            },
            label: {
                show: true,
                position: 'outside',
                formatter: '{a|{b}：{d}%}\n{hr|}',
                color: "#FFF",
                rich: {
                    hr: {
                        backgroundColor: 't',
                        borderRadius: 3,
                        width: 3,
                        height: 3,
                        padding: [3, 3, 0, -12]
                    },
                    a: {
                        padding: [-30, 15, -20, 15],
                        fontSize: 14,
                    }
                }
            },
            labelLine: {
                normal: {
                    length: 20,
                    length2: 30,
                    lineStyle: {
                        width: 1
                    }
                }
            },
            data: kv,
        }]
    };
    jhzl_fun();
    return jhzl_option
}