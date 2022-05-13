function getp2_dyzc(kv)
{
    // var dyzc_data = kv.sort((a, b) => b.value - a.value)
    
    var dyzc_data = kv.sort(function(a, b) {
        b.value - a.value;
    });
    
    var dyzc_colorList_nor = [
        ['#00ffb4', '#00f0ff'],
        ['#00f0ff', '#0060ff'],
        ['#00f0ff', '#ffd200'],
        ['#00f3ff', '#fad200'],
    ]
    //职称超过四个循环colorlist
    var dyzc_colorList = [];
    var color = Math.ceil(dyzc_data.length/dyzc_colorList_nor.length);
    if( color > 0){
        for(var i = 0; i < color; i++){
            for(var j = 0; j < dyzc_colorList_nor.length; j++){
              dyzc_colorList.push(dyzc_colorList_nor[j]);
           }
        }
    }
    var dyzc_data_bak = [];
    for (var index = 0; index < dyzc_data.length; index++) {
       
        var obj = {
            name: dyzc_data[index].name,
            // value: Math.log(dyzc_data[index].value),
            value: dyzc_data[index].value,
            val: dyzc_data[index].value,
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
        dyzc_data_bak.push(obj);
    }
    dyzc_data = dyzc_data_bak;
    
    // dyzc_data = dyzc_data.map((item, index) => {
    //     return {
    //         name: item.name,
    //         value: Math.log(item.value),
    //         val: item.value,
    //         itemStyle: {
    //             borderColor: "#000",
    //             borderWidth: 3,
    //             color: {
    //                 type: 'line',
    //                 x: 0,
    //                 y: 0,
    //                 x2: 0,
    //                 y2: 1,
    //                 colorStops: [
    //                     {offset: 0, color: dyzc_colorList[index][0]},
    //                     {offset: 1, color: dyzc_colorList[index][1]}
    //                 ]
    //             }
    //         },
    //         labelLine: {
    //             length2: 0,
    //             lineStyle: {
    //                 color: '#fff'
    //             }
    //         }
    //     }
    // })
    
    var dyzc_option = {
        grid: {
            left: "5%",
            top: 20,
            right: "10%",
            bottom: -30,
            containLabel: true
        },
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
    return dyzc_option
}