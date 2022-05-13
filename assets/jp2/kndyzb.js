function getp2_kndy(kv,k)
{
   
    //如果只有一个补全另一个
    if(kv.length == 1 ){
        var kn = '困难';
        if(k[0] == kn ){
            kn = '非困难'
        }
        k.push(kn);
        kv.push({
            name: kn,
            value: 0,
            url:''
        });
    }
    var kndyzb_seriesData = kv;
    var kndyzb_legendData = k;
   
    var kndyzb_colorList = ['#9E87FF', '#58D5FF'];
    var kndyzb_option = {
        legend: {
           // type: "scroll",
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
            center: ['50%', '45%'],
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
    return kndyzb_option
    
}