function getp4_dypj(kv)
{
    //var dypj_data = kv.sort((a, b) => b.value - a.value)
    var dypj_data = kv.sort(function(a,b){
        return b.value-a.value;
    })
    var dypj_colorList = [
        ['#00ffb4', '#00f0ff'],
        ['#00f0ff', '#0060ff'],
        ['#00f0ff', '#ffd200'],
        ['#00f3ff', '#fad200'],
    ]
    
   
    //dypj_data = dypj_data.map((item, index) => {
        dypj_data = dypj_data.map(function(item,index){
        var colorIndex = index%4
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
                        {offset: 0, color: dypj_colorList[colorIndex][0]},
                        {offset: 1, color: dypj_colorList[colorIndex][1]}
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
            startAngle: -60,
            center: ['50%', '50%'],
            data: dypj_data,
            label: {
                fontSize: 13,
                color: "#fff",
                align: 'center',
                formatter: function(params) {
                    return "{a|" + params.data.val + "}\n" + params.name
                },
                rich: {
                    a: {
                        align: 'center',
                        fontSize: 12,
                        color: "#ffcc44"
                    }
                }
            }
        }]
    };
    return dypj_option;
    
}