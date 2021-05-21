const xhr4 = new XMLHttpRequest()
let text4 = document.getElementById("city").innerText;
xhr4.open("get", "https://v0.yiketianqi.com/api?version=v91&appid=97479712&appsecret=p4cL2Awi&city=" + text4, true)
xhr4.onreadystatechange = () => {
    if (xhr4.readyState === 4) {
        if ((xhr4.status >= 200 && xhr4.status < 300) || xhr4.status == 304) {
            const res = JSON.parse(xhr4.responseText)
            // console.log(res);
            let yestxt = document.createTextNode("昨天")
            let yesele = document.createElement("p")
            yesele.append(yestxt);
            for (let i = 0; i < 7; i++) {
                // 白天情况
                if (i == 0) {
                    document.getElementById("toele" + i).innerHTML = "昨天"
                } else if (i == 1) {
                    document.getElementById("toele" + i).innerHTML = "今天"
                } else if (i == 2) {
                    document.getElementById("toele" + i).innerHTML = "明天"
                } else if (i == 3) {
                    document.getElementById("toele" + i).innerHTML = "后天"
                } else {
                    document.getElementById("toele" + i).innerHTML = "周" + res.data[i].day[6]
                }
                let d = res.data[i].date.split("-")
                document.getElementById("dele" + i).innerHTML = d[1] + "/" + d[2]
                document.getElementById("weaele" + i).innerHTML = res.data[i].wea_day
                if(i==1){
                    console.log(document.getElementById("weaele" + i).innerText);
                }
                document.getElementById("img_days" + i).src = "weather-background\\" + res.data[i].wea_day_img + ".png"
                // 夜间情况
                document.getElementById("imgn" + i).src = "weather-background\\" + res.data[i].wea_night_img + ".png"
                document.getElementById("weanele" + i).innerHTML = res.data[i].wea_night
                document.getElementById("winele" + i).innerHTML = res.data[i].win[0]
                document.getElementById("winspele" + i).innerHTML = res.data[i].win_speed[1] + res.data[i].win_speed[2]
            }
        } else {
            console.log("请求失败")
        }
    }
}
xhr4.send()
