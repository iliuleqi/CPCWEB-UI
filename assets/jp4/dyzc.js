var dyzc_data = [
    {name: "高级工程师", value: 120},
    {name: "初级工程师", value: 50},
    {name: "初级教师", value: 90},
    {name: "高级才是", value: 30}
].sort((a, b) => b.value - a.value)

var dyzc_colorList = [
    ['#00ffb4', '#00f0ff'],
    ['#00f0ff', '#0060ff'],
    ['#00f0ff', '#ffd200'],
    ['#00f3ff', '#fad200'],
]

dyzc_data = dyzc_data.map((item, index) => {
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
                    {offset: 0, color: dyzc_colorList[index][0]},
                    {offset: 1, color: dyzc_colorList[index][1]}
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

var dyzc_option = {
    series: [{
        type: 'pie',
        roseType: "area",
        clockwise: false,
        startAngle: -30,
        data: dyzc_data,
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