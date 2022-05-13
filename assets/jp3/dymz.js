var dymz_scaleData = [{
    'name': '汉族',
    'value': 40
},
{
    'name': '壮族',
    'value': 10
},
{
    'name': '回族',
    'value': 10
},
{
    'name': '满族',
    'value': 10
}

];
var dymz_rich = {
    white: {
        color: '#fff',
        align: 'center',
        fontWeight:'bold',
        padding: [3, 0]
    }
};
var dymz_placeHolderStyle = {
    normal: {
        label: {
            show: false
        },
        labelLine: {
            show: false
        },
        color: 'rgba(0, 0, 0, 0)',
        borderColor: 'rgba(0, 0, 0, 0)',
        borderWidth: 0
    }
};
var dymz_data = [];
var dymz_color1 = ['rgb(255, 153, 153)', 'rgb(255, 176, 63)', 'rgb(61, 186, 45)', 'rgb(43, 166, 254)','rgb(255,222,0)','rgb(255,0,0)'];

for (var i = 0; i < dymz_scaleData.length; i++) {
dymz_data.push({
    value: dymz_scaleData[i].value,
    name: dymz_scaleData[i].name,
    itemStyle: {
        normal: {
            borderWidth: 0,
            shadowBlur: 10,
            borderColor: dymz_color1[i],
            shadowColor: dymz_color1[i],
            color: dymz_color1[i],
            opacity: 0.8,
        }
    }
}, {
    value: 2,
    name: '',
    itemStyle: dymz_placeHolderStyle
});
}
var dymz_seriesObj = [{
    name: '',
    type: 'pie',
    clockWise: false,
    radius: [30, 60],
    hoverAnimation: false,
    itemStyle: {
        normal: {
            label: {
                show: true,
                position: 'inner',
                fontWeight:'bold',
                color: '#FFF',
                formatter: function(params) {
                    var percent = 0;
                    var total = 0;
                    for (var i = 0; i < dymz_scaleData.length; i++) {
                        total += dymz_scaleData[i].value;
                    }
                    percent = ((params.value / total) * 100).toFixed(0);
                    if(params.name !== '') {
                        return params.name + '\n{white|' + '占比' + percent + '%}';
                    }else {
                        return '';
                    }
                },
                rich: dymz_rich
            },
            labelLine: {
                show: false,
            }
        }
    },
    data: dymz_data
}];
var dymz_option = {
    tooltip: {
        show: false
    },
    legend: {
        show: false
    },
    toolbox: {
        show: false
    },
    series: dymz_seriesObj
}