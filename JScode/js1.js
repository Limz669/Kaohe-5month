const xhr = new XMLHttpRequest()
let text1 = document.getElementById("city").innerText;
let timer;
xhr.open("get", "https://www.tianqiapi.com/free/day?appid=97479712&appsecret=p4cL2Awi&city=" + text1, true)
xhr.onreadystatechange = () => {
    if (xhr.readyState === 4) {
        if ((xhr.status >= 200 && xhr.status < 300) || xhr.status == 304) {
            const res = JSON.parse(xhr.responseText)
            // console.log(res);
            let h = res.update_time.split(":")
            // h[0]="20"
            if (parseInt(h[0]) >= 19 || parseInt(h[0]) < 6) {
                // 夜晚
                document.getElementById("sec-main").style.backgroundImage = "linear-gradient(-90deg,#313877,#44abec)"
                document.getElementById("sec-main").style.backgroundImage = "-webkit-linear-gradient(-90deg,#313877,#44abec)"
                document.getElementById("layer1").src = "weather-background\\layer1.png"
                document.getElementById("layer2").src = "weather-background\\layer2.png"
                document.getElementById("layer3").src = "weather-background\\layer3.png"
                // document.getElementsByClassName("layer").style.top="920px"
                document.getElementById("temele").innerHTML = res.tem + "°"
                document.getElementById("weaele1main").innerHTML = res.wea
                document.getElementById("li1").innerHTML = res.win + " " + res.win_speed
                document.getElementById("li2").innerHTML = "湿度 " + res.air + "%"
                if (res.wea_img == "yin") {
                    document.getElementById("txt-tips").innerHTML = "天暗下来，你就是阳光~"
                }
                else if (res.tem <= 27 && res.tem > 23) {
                    document.getElementById("txt-tips").innerHTML = "现在的温度比较舒适~"
                } else if (res.tem > 27) {
                    document.getElementById("txt-tips").innerHTML = "天太热了，吃个西瓜~"
                } else {
                    document.getElementById("txt-tips").innerHTML = "光芒透过云缝，洒向大地~"
                }
                var air = parseInt(res.air)
                if (air <= 50) {
                    document.getElementById("air").innerHTML = res.air
                    document.getElementById("airank").innerHTML = "优"
                }
                else if (air > 50 && air < 100) {
                    document.getElementById("air").innerHTML = res.air
                    document.getElementById("airank").innerHTML = "良"
                }else if (res.wea_img == "yin") {
                    document.getElementById("txt-tips").innerHTML = "天暗下来，你就是阳光~"
                }
            }
            else {
                // 白天
                document.getElementById("sec-main").style.backgroundImage = "linear-gradient(-90deg,#3bbcff,#4af4ff)"
                document.getElementById("sec-main").style.backgroundImage = "-webkit-linear-gradient(-90deg,#3bbcff,#4af4ff)"
                document.getElementById("layer1").src = "weather-background\\layer6.png"
                document.getElementById("layer2").src = "weather-background\\layer5.png"
                document.getElementById("layer3").src = "weather-background\\layer4.png"
                document.getElementById("temele").innerHTML = res.tem + "°"
                document.getElementById("weaele1main").innerHTML = res.wea
                document.getElementById("li1").innerHTML = res.win + " " + res.win_speed
                document.getElementById("li2").innerHTML = "湿度 " + res.air + "%"
                
                if (res.tem <= 27 && res.tem > 23) {
                    document.getElementById("txt-tips").innerHTML = "现在的温度比较舒适~"
                } else if (res.tem > 27) {
                    document.getElementById("txt-tips").innerHTML = "天太热了，吃个西瓜~"
                } else {
                    document.getElementById("txt-tips").innerHTML = "光芒透过云缝，洒向大地~"
                }
                var air = parseInt(res.air)
                if (air <= 50) {
                    document.getElementById("air").innerHTML = res.air
                    document.getElementById("airank").innerHTML = "优"
                }
                else if (air > 50 && air < 100) {
                    document.getElementById("air").innerHTML = res.air
                    document.getElementById("airank").innerHTML = "良"
                }
            }
        } else {
            console.log("请求失败")
        }
    }
}
xhr.send()
