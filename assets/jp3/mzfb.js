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
        data:  ["汉族", "满族", "回族", "壮族"]
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
        center: ['50%', '50%'],
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
        data: [{
            value: 335,
            name: "汉族"
        }, {
            value: 310,
            name: "满族"
        }, {
            value: 234,
            name: "回族"
        }, {
            value: 135,
            name: "壮族"
        }]
    }]
  }