var dypj_data = [
    {name: "合格", value: 120},
    {name: "不合格", value: 50}
].sort((a, b) => b.value - a.value)

var dypj_colorList = [
    ['#00ffb4', '#00f0ff'],
    ['#00f0ff', '#0060ff'],
    ['#00f0ff', '#ffd200'],
    ['#00f3ff', '#fad200'],
]

dypj_data = dypj_data.map((item, index) => {
    return {
        name: item.name,
        value: Math.log(item.value),
        val: item.value,
        itemStyle: {
            borderColor: "#000",
            borderWidth: 3,
            color: {
                type: 'line',
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [
                    {offset: 0, color: dypj_colorList[index][0]},
                    {offset: 1, color: dypj_colorList[index][1]}
                ]
            }
        },
        labelLine: {
            length2: 0,
            lineStyle: {
                color: '#fff'
            }
        }
    }
})

var dypj_option = {
    series: [{
        type: 'pie',
        roseType: "area",
        clockwise: false,
        startAngle: -30,
        data: dypj_data,
        label: {
            fontSize: 16,
            color: "#fff",
            align: 'center',
            formatter: function(params) {
                return "{a|" + params.data.val + "}\n" + params.name
            },
            rich: {
                a: {
                    align: 'center',
                    fontSize: 14,
                    color: "#ffcc44"
                }
            }
        }
    }]
};
