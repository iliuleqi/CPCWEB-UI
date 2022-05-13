function getp2_fzdy(kv,k)
{
    var fzdy_option = {
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
        "grid": {
            "containLabel": true,
            "left": 20,
            "right": 20,
            "bottom": 0,
            "top": 500
        },
        series: [{
            type: "pie",
            label: {
                show: true,
                position: 'outside',
                // formatter: '{a|{b}：{d}%}',
                formatter: function(params) {
                    return "{a|" + params.data.value + "}\n{b|" + params.name+ "}"
                },
                rich: {
                    a: {
                        align: 'center',
                        fontSize: 13,
                        color: "#ffcc44"
                    },
                    b: {
                        align: 'center',
                        fontSize: 13,
                        color: "#fff"
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
    return fzdy_option
}