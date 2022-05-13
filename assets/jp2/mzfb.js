function getp2_mzfb(kv,k)
{
    var mzfb_option = {
        legend: {
            type: "scroll",
            orient: 'horizontal',
            left: 'center',
            align: 'auto',
            top: 'bottom',
            textStyle: {
                color: '#fff'
            },
            data:  k
        },
        series: [{
            type: "pie",
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
            center: ['50%', '40%'],
            radius: ['5%', '50%'],
            labelLine: {
                normal: {
                    length: 20,
                    length2: 30,
                    lineStyle: {
                        width: 2
                    }
                }
            },
            data: kv
        }]
      }
      return mzfb_option;
}