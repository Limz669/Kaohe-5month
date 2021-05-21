const xhr2 = new XMLHttpRequest()
let text2 = document.getElementById("city").innerText;
xhr2.open("get", "https://www.tianqiapi.com/free/week?appid=97479712&appsecret=p4cL2Awi&city=" + text2, true)
xhr2.onreadystatechange = () => {
    if (xhr2.readyState === 4) {
        if ((xhr2.status >= 200 && xhr2.status < 300) || xhr2.status == 304) {
            const res = JSON.parse(xhr2.responseText)
            // console.log(res);
            document.getElementById("tem1").innerHTML=res.data[0].tem_day + "/" + res.data[0].tem_night + "°"
            document.getElementById("tem2").innerHTML=res.data[1].tem_day + "/" + res.data[1].tem_night + "°"
            document.getElementById("weather1").innerHTML=res.data[0].wea
            document.getElementById("weather2").innerHTML=res.data[1].wea
            document.getElementById("img1").src = "weather-background\\" + res.data[0].wea_img + ".png"
            document.getElementById("img2").src = "weather-background\\" + res.data[1].wea_img + ".png"
        } else {
            console.log("请求失败")
        }
    }
}
xhr2.send()