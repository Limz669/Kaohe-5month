const xhr6 = new XMLHttpRequest()
let text6=document.getElementById("city").innerText;
let arr2 = new Array()
xhr6.open("get", "https://v0.yiketianqi.com/api?version=v91&appid=97479712&appsecret=p4cL2Awi&city=" + text6, true)
xhr6.onreadystatechange = () => {
    if (xhr6.readyState === 4) {
        if ((xhr6.status >= 200 && xhr6.status < 300) || xhr6.status == 304) {
            const res = JSON.parse(xhr6.responseText)
            console.log(res);
            for (i = 0; i < 7; i++) {
                arr2[i] = parseInt(res.data[i].tem2)
            }
            let dom = document.getElementById("chart2")
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
                    data: arr2,
                    type: 'line',
                    smooth: true,
                    itemStyle: {
                        normal: {
                            color: ['blue'], //折点颜色
                            lineStyle: {
                                color: ['blue'], //折线颜色
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
xhr6.send()