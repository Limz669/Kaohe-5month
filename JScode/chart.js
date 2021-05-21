const xhr5 = new XMLHttpRequest()
let text5=document.getElementById("city").innerText;
let arr1 = new Array()
xhr5.open("get", "https://v0.yiketianqi.com/api?version=v91&appid=97479712&appsecret=p4cL2Awi&city=" + text5, true)
xhr5.onreadystatechange = () => {
    if (xhr5.readyState === 4) {
        if ((xhr5.status >= 200 && xhr5.status < 300) || xhr5.status == 304) {
            const res = JSON.parse(xhr5.responseText)
            // console.log(res);
            for (i = 0; i < 7; i++) {
                arr1[i] = parseInt(res.data[i].tem1)
            }
            let dom = document.getElementById("chart1")
            let myChart = echarts.init(dom)
            var option;
            option = {
                tooltip: {
                    formatter: function (params) {
                        var res = params.value + '°';
                        return res;
                    }
                },
                xAxis: {
                    "show": false,
                    type: 'category',
                    "splitLine": {
                        "show": false
                    }
                },
                yAxis: {
                    "axisLine": {       //y轴
                        "show": false
                    },
                    "axisTick": {       //y轴刻度线
                        "show": false
                    },
                    "splitLine": {     //网格线
                        "show": false
                    },
                    show: false,
                    type: 'value'
                },
                grid: {
                    left: -5
                },
                series: [{
                    symbolSize: 20,
                    symbol: 'circle',
                    data: arr1,
                    type: 'line',
                    smooth: true,
                    itemStyle: {
                        normal: {
                            color: ['orange'], //折点颜色
                                lineStyle: {
                                color: ['orange'], //折线颜色
                                width: 5,
                                type: 'solid'
                            },
                            label: { show: true, fontSize: '35' }
                        }
                    }
                }]
            }
            if (option && typeof option === 'object') {
                myChart.setOption(option);
            }
        }
    } else {
        console.log("请求失败")
    }
}
xhr5.send()