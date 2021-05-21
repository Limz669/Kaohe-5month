const xhr3 = new XMLHttpRequest()
let text = document.getElementById("city").innerText;
xhr3.open("get", "https://devapi.qweather.com/v7/weather/24h?lang=zh&key=350716b54c814154925d07af80288065&location=" + "101040100", true)
xhr3.onreadystatechange = () => {
    if (xhr3.readyState === 4) {
        if ((xhr3.status >= 200 && xhr3.status < 300) || xhr3.status == 304) {
            const res = JSON.parse(xhr3.responseText)
            // console.log(res);
            let ol = document.getElementById("hourswea")
            // console.log(h);
            for (i = 0; i < 24; i++) {
                let h = res.hourly[i].fxTime.split("T")[1].split("+")[0]
                document.getElementById("hour" + i).innerHTML = h
                document.getElementById("img_hours" + i).src = "icon\\" + res.hourly[i].icon + ".png"
                document.getElementById("tem_hours"+i).innerHTML=res.hourly[i].temp + "°"
            }
        } else {
            console.log("请求失败")
        }
    }
}
xhr3.send()
