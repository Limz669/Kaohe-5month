var c = document.getElementById("city")
let sea = document.getElementById("sec-loaction")
let hiscity = document.getElementById("historycity")
let cancel = document.getElementById("cancel")
let lis = document.getElementById("hotcity").getElementsByTagName("li")
let cityid;
let historycityname;
let historychilenum = 0;
let historynoneflag = false;
c.addEventListener('click', (e) => {
    sea.style.display = "block";
})
let searchinput = document.getElementById("searchinput")
// 搜索框被点击时绑定
function searchitemblock() {
    document.getElementById("searchitem").style.display = "block"
}
// 为历史记录添加子节点
let appenchildflag=false;
function historycityappendChild() {
    if (historynoneflag == false) {
        document.getElementById("history").style.display = "block"
        document.getElementById("hotcitytitle").style.top = "440px"
        document.getElementById("hotcity").style.top = "550px"
        historynoneflag=true;
    }
    let child = document.createElement("li");
    let oldhistorychildnode = document.getElementById("historychildnode" + (historychilenum - 1));
    child.innerText = historycityname;
    child.id = "historychildnode" + historychilenum;
    child.className = "historychildnode";
    if (historychilenum == 0) {
        hiscity.appendChild(child);
        historychilenum++;
        child.addEventListener('click',(e)=>{
            if(child.innerText==c.innerText){
                appenchildflag=false;
            }else{
                appenchildflag=true;
            }
            c.innerHTML = child.innerText
            historycityname = child.innerText
            sea.style.display = "none"
            // cityid = lis[i].value// id记录            
            changeallthings()
            if(appenchildflag){
                historycityappendChild()
            }
        })
    }
    else {
        if(child.innerText==c.innerText){
            appenchildflag=false;
        }else{
            appenchildflag=true;
        }
        hiscity.insertBefore(child, oldhistorychildnode);
        historychilenum++;
        child.addEventListener('click',(e)=>{
            c.innerHTML = child.innerText
            historycityname = child.innerText
            sea.style.display = "none"
            // cityid = lis[i].value// id记录
            changeallthings()
            // console.log(historycityname);
            if(appenchildflag){
                historycityappendChild()
            }
        })
    }
    console.log(historychilenum);
}
// 搜索框输入内容时绑定
function searchitem1() {
    // console.log("no");
    document.getElementById("searchitem").style.display = "block"
    historycityname = document.getElementById("search-input").value;
    const xhr3 = new XMLHttpRequest()
    xhr3.open("get", "https://geoapi.qweather.com/v2/city/lookup?key=350716b54c814154925d07af80288065&location=" + document.getElementById("search-input").value, true)
    xhr3.onreadystatechange = () => {
        if (xhr3.readyState === 4) {
            if ((xhr3.status >= 200 && xhr3.status < 300) || xhr3.status == 304) {
                const res = JSON.parse(xhr3.responseText)
                // console.log(res);
                document.getElementById("searchitem").innerHTML = ""//反馈结果栏清空                
                //historycityname=document.getElementById("search-input").value;// 记录下搜索过的城市的名称
                // console.log(historycityname);
                // changeallthings();
                for (let i = 0; i < res.location.length; i++) {
                    if (res.location[i].adm2 == document.getElementById("search-input").value) {
                        let locationcitytxt = document.createTextNode(res.location[i].adm1 + ", " + res.location[i].adm2)
                        console.log(res.location[i].adm1 + ", " + res.location[i].adm2);
                        let locationcityele = document.createElement("li")
                        locationcityele.id = "locationcityele"
                        // 点击搜索返回的城市
                        locationcityele.addEventListener('click', (e) => {
                            console.log("yes");
                            c.innerHTML = document.getElementById("search-input").value
                            cityid = res.location[i].id
                            console.log(cityid);
                            changeallthings()
                            sea.style.display = "none"
                            document.getElementById("search-input").value = ""
                            document.getElementById("searchitem").innerHTML = ""
                            document.getElementById("searchitem").style.display = "none"
                        })
                        locationcityele.appendChild(locationcitytxt)
                        document.getElementById("searchitem").appendChild(locationcityele)
                        break;
                    } else if (res.location[i].name == document.getElementById("search-input").value) {
                        let locationcitytxt = document.createTextNode(res.location[i].adm1 + ", " + res.location[i].adm2 + ", " + res.location[i].name)
                        console.log(res.location[i].adm1 + ", " + res.location[i].adm2 + ", " + res.location[i].name);
                        let locationcityele = document.createElement("li")
                        locationcityele.id = "locationcityele"
                        // 点击搜索返回的城市
                        locationcityele.addEventListener('click', (e) => {
                            console.log("yes");
                            c.innerHTML = document.getElementById("search-input").value
                            cityid = res.location[i].id
                            changeallthings()
                            sea.style.display = "none"
                            document.getElementById("search-input").value = ""
                            document.getElementById("searchitem").innerHTML = ""
                            document.getElementById("searchitem").style.display = "none"
                        })
                        locationcityele.appendChild(locationcitytxt)
                        document.getElementById("searchitem").appendChild(locationcityele)
                    }
                }
            } else {
                console.log("请求失败")
            }
        }
    }
    xhr3.send()
    historycityappendChild()
}
// 为每一个热门城市绑定点击事件
for (let i = 0; i < 12; i++) {
    lis[i].addEventListener('click', (e) => {
        if(lis[i].innerText==c.innerText){
            appenchildflag=false;
        }else{
            appenchildflag=true;
        }
        c.innerHTML = lis[i].innerText
        historycityname = lis[i].innerText
        sea.style.display = "none"
        cityid = lis[i].value// id记录
        changeallthings()
        if(appenchildflag){
            historycityappendChild()
        }
    })
}

function changeallthings() {
    const xhr = new XMLHttpRequest()
    xhr.open("get", "https://www.tianqiapi.com/free/day?appid=97479712&appsecret=p4cL2Awi&city=" + c.innerText, true)
    xhr.onreadystatechange = () => {
        if (xhr.readyState === 4) {
            if ((xhr.status >= 200 && xhr.status < 300) || xhr.status == 304) {
                const res = JSON.parse(xhr.responseText)
                // console.log(res);
                let h = res.update_time.split(":")
                if (parseInt(h[0]) >= 19 || parseInt(h[0]) < 6) {
                    // 夜晚
                    document.getElementById("sec-main").style.backgroundImage = ""
                    document.getElementById("sec-main").style.backgroundImage = "linear-gradient(-90deg,#313877,#44abec)"
                    document.getElementById("sec-main").style.backgroundImage = "-webkit-linear-gradient(-90deg,#313877,#44abec)"
                    document.getElementById("layer1").src = ""
                    document.getElementById("layer1").src = "weather-background\\layer1.png"
                    document.getElementById("layer2").src = ""
                    document.getElementById("layer2").src = "weather-background\\layer2.png"
                    document.getElementById("layer3").src = ""
                    document.getElementById("layer3").src = "weather-background\\layer3.png"
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
                    }
                }

            } else {
                console.log("请求失败")
            }
        }
    }
    xhr.send()
    const xhr2 = new XMLHttpRequest()
    let text2 = document.getElementById("city").innerText;
    xhr2.open("get", "https://www.tianqiapi.com/free/week?appid=97479712&appsecret=p4cL2Awi&city=" + text2, true)
    xhr2.onreadystatechange = () => {
        if (xhr2.readyState === 4) {
            if ((xhr2.status >= 200 && xhr2.status < 300) || xhr2.status == 304) {
                const res = JSON.parse(xhr2.responseText)
                // console.log(res);
                document.getElementById("tem1").innerHTML = res.data[0].tem_day + "/" + res.data[0].tem_night + "°"
                document.getElementById("tem2").innerHTML = res.data[1].tem_day + "/" + res.data[1].tem_night + "°"
                document.getElementById("weather1").innerHTML = res.data[0].wea
                document.getElementById("weather2").innerHTML = res.data[1].wea
                document.getElementById("img1").src = "weather-background\\" + res.data[0].wea_img + ".png"
                document.getElementById("img2").src = "weather-background\\" + res.data[1].wea_img + ".png"
            } else {
                console.log("请求失败")
            }
        }
    }
    xhr2.send()
    const xhr4 = new XMLHttpRequest()
    xhr4.open("get", "https://devapi.qweather.com/v7/weather/24h?lang=zh&key=350716b54c814154925d07af80288065&location=" + cityid, true)
    xhr4.onreadystatechange = () => {
        if (xhr4.readyState === 4) {
            if ((xhr4.status >= 200 && xhr4.status < 300) || xhr4.status == 304) {
                const res = JSON.parse(xhr4.responseText)
                // console.log(res);
                // console.log(h);
                for (i = 0; i < 24; i++) {
                    let h = res.hourly[i].fxTime.split("T")[1].split("+")[0]
                    document.getElementById("hour" + i).innerHTML = h
                    document.getElementById("img_hours" + i).src = "icon\\" + res.hourly[i].icon + ".png"
                    document.getElementById("tem_hours" + i).innerHTML = res.hourly[i].temp + "°"
                }
            } else {
                console.log("请求失败")
            }
        }
    }
    xhr4.send()
    const xhr5 = new XMLHttpRequest()
    xhr5.open("get", "https://devapi.qweather.com/v7/indices/1d?type=1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16&lang=zh&key=350716b54c814154925d07af80288065&location=" + cityid, true)
    xhr5.onreadystatechange = () => {
        if (xhr5.readyState === 4) {
            if ((xhr5.status >= 200 && xhr5.status < 300) || xhr5.status == 304) {
                const res = JSON.parse(xhr5.responseText)
                // console.log(res);
                for (let i = 0; i < 16; i++) {
                    document.getElementById("livingimg" + i).src = "living\\" + res.daily[i].type + ".png"
                    if (res.daily[i].type == 1) {
                        if (res.daily[i].level == 1) {
                            document.getElementById("livingp1" + i).innerHTML = "适宜"
                        } else if (res.daily[i].level == 2) {
                            document.getElementById("livingp1" + i).innerHTML = "较适宜"
                        } else {
                            document.getElementById("livingp1" + i).innerHTML = "较不宜"
                        }
                    } else if (res.daily[i].type == 2) {
                        if (res.daily[i].level == 1) {
                            document.getElementById("livingp1" + i).innerHTML = "适宜"
                        } else if (res.daily[i].level == 2) {
                            document.getElementById("livingp1" + i).innerHTML = "较适宜"
                        } else if (res.daily[i].level == 3) {
                            document.getElementById("livingp1" + i).innerHTML = "较不宜"
                        } else {
                            document.getElementById("livingp1" + i).innerHTML = "不宜"
                        }
                    } else if (res.daily[i].type == 3) {
                        if (res.daily[i].level == 1) {
                            document.getElementById("livingp1" + i).innerHTML = "寒冷"
                        } else if (res.daily[i].level == 2) {
                            document.getElementById("livingp1" + i).innerHTML = "冷"
                        } else if (res.daily[i].level == 3) {
                            document.getElementById("livingp1" + i).innerHTML = "较冷"
                        } else if (res.daily[i].level == 4) {
                            document.getElementById("livingp1" + i).innerHTML = "较舒适"
                        } else if (res.daily[i].level == 5) {
                            document.getElementById("livingp1" + i).innerHTML = "舒适"
                        } else if (res.daily[i].level == 6) {
                            document.getElementById("livingp1" + i).innerHTML = "热"
                        }
                    } else if (res.daily[i].type == 4) {
                        if (res.daily[i].level == 1) {
                            document.getElementById("livingp1" + i).innerHTML = "适宜"
                        } else if (res.daily[i].level == 2) {
                            document.getElementById("livingp1" + i).innerHTML = "较适宜"
                        } else {
                            document.getElementById("livingp1" + i).innerHTML = "不宜"
                        }
                    } else if (res.daily[i].type == 5) {
                        if (res.daily[i].level == 1) {
                            document.getElementById("livingp1" + i).innerHTML = "最弱"
                        } else if (res.daily[i].level == 2) {
                            document.getElementById("livingp1" + i).innerHTML = "弱"
                        } else if (res.daily[i].level == 3) {
                            document.getElementById("livingp1" + i).innerHTML = "中等"
                        } else if (res.daily[i].level == 4) {
                            document.getElementById("livingp1" + i).innerHTML = "强"
                        } else if (res.daily[i].level == 5) {
                            document.getElementById("livingp1" + i).innerHTML = "很强"
                        }
                    } else if (res.daily[i].type == 6) {
                        if (res.daily[i].level == 1) {
                            document.getElementById("livingp1" + i).innerHTML = "适宜"
                        } else if (res.daily[i].level == 2) {
                            document.getElementById("livingp1" + i).innerHTML = "较适宜"
                        } else if (res.daily[i].level == 3) {
                            document.getElementById("livingp1" + i).innerHTML = "一般"
                        } else if (res.daily[i].level == 4) {
                            document.getElementById("livingp1" + i).innerHTML = "较不宜"
                        } else if (res.daily[i].level == 5) {
                            document.getElementById("livingp1" + i).innerHTML = "不适宜"
                        }
                    } else if (res.daily[i].type == 7) {
                        if (res.daily[i].level == 1) {
                            document.getElementById("livingp1" + i).innerHTML = "极不易发"
                        } else if (res.daily[i].level == 2) {
                            document.getElementById("livingp1" + i).innerHTML = "不易发"
                        } else if (res.daily[i].level == 3) {
                            document.getElementById("livingp1" + i).innerHTML = "较易发"
                        } else if (res.daily[i].level == 4) {
                            document.getElementById("livingp1" + i).innerHTML = "易发"
                        } else if (res.daily[i].level == 5) {
                            document.getElementById("livingp1" + i).innerHTML = "极易发"
                        }
                    } else if (res.daily[i].type == 8) {
                        if (res.daily[i].level == 1) {
                            document.getElementById("livingp1" + i).innerHTML = "舒适"
                        } else if (res.daily[i].level == 2) {
                            document.getElementById("livingp1" + i).innerHTML = "较舒适"
                        } else if (res.daily[i].level == 3) {
                            document.getElementById("livingp1" + i).innerHTML = "较不舒适"
                        } else if (res.daily[i].level == 4) {
                            document.getElementById("livingp1" + i).innerHTML = "很不舒适"
                        } else if (res.daily[i].level == 5) {
                            document.getElementById("livingp1" + i).innerHTML = "极不舒适"
                        } else if (res.daily[i].level == 6) {
                            document.getElementById("livingp1" + i).innerHTML = "不舒适"
                        } else if (res.daily[i].level == 7) {
                            document.getElementById("livingp1" + i).innerHTML = "非常不舒适"
                        }
                    } else if (res.daily[i].type == 9) {
                        if (res.daily[i].level == 1) {
                            document.getElementById("livingp1" + i).innerHTML = "少发"
                        } else if (res.daily[i].level == 2) {
                            document.getElementById("livingp1" + i).innerHTML = "较易发"
                        } else if (res.daily[i].level == 3) {
                            document.getElementById("livingp1" + i).innerHTML = "易发"
                        } else if (res.daily[i].level == 4) {
                            document.getElementById("livingp1" + i).innerHTML = "极易发"
                        }
                    } else if (res.daily[i].type == 10) {
                        if (res.daily[i].level == 1) {
                            document.getElementById("livingp1" + i).innerHTML = "优"
                        } else if (res.daily[i].level == 2) {
                            document.getElementById("livingp1" + i).innerHTML = "良"
                        } else if (res.daily[i].level == 3) {
                            document.getElementById("livingp1" + i).innerHTML = "中"
                        } else if (res.daily[i].level == 4) {
                            document.getElementById("livingp1" + i).innerHTML = "较差"
                        } else if (res.daily[i].level == 5) {
                            document.getElementById("livingp1" + i).innerHTML = "很差"
                        }
                    } else if (res.daily[i].type == 11) {
                        if (res.daily[i].level == 1) {
                            document.getElementById("livingp1" + i).innerHTML = "长时间开启"
                        } else if (res.daily[i].level == 2) {
                            document.getElementById("livingp1" + i).innerHTML = "部分时间开启"
                        } else if (res.daily[i].level == 3) {
                            document.getElementById("livingp1" + i).innerHTML = "较少开启"
                        } else if (res.daily[i].level == 4) {
                            document.getElementById("livingp1" + i).innerHTML = "开启制暖空调"
                        }
                    } else if (res.daily[i].type == 12) {
                        if (res.daily[i].level == 1) {
                            document.getElementById("livingp1" + i).innerHTML = "不需要"
                        } else if (res.daily[i].level == 2) {
                            document.getElementById("livingp1" + i).innerHTML = "需要"
                        } else if (res.daily[i].level == 3) {
                            document.getElementById("livingp1" + i).innerHTML = "必要"
                        } else if (res.daily[i].level == 4) {
                            document.getElementById("livingp1" + i).innerHTML = "很必要"
                        } else if (res.daily[i].level == 5) {
                            document.getElementById("livingp1" + i).innerHTML = "非常必要"
                        }
                    } else if (res.daily[i].type == 13) {
                        if (res.daily[i].level == 1) {
                            document.getElementById("livingp1" + i).innerHTML = "保湿"
                        } else if (res.daily[i].level == 2) {
                            document.getElementById("livingp1" + i).innerHTML = "保湿防晒"
                        } else if (res.daily[i].level == 3) {
                            document.getElementById("livingp1" + i).innerHTML = "去油防晒"
                        } else if (res.daily[i].level == 4) {
                            document.getElementById("livingp1" + i).innerHTML = "防脱水防晒"
                        } else if (res.daily[i].level == 5) {
                            document.getElementById("livingp1" + i).innerHTML = "去油"
                        } else if (res.daily[i].level == 6) {
                            document.getElementById("livingp1" + i).innerHTML = "防脱水"
                        } else if (res.daily[i].level == 7) {
                            document.getElementById("livingp1" + i).innerHTML = "防晒"
                        } else {
                            document.getElementById("livingp1" + i).innerHTML = "滋润保湿"
                        }
                    } else if (res.daily[i].type == 14) {
                        if (res.daily[i].level == 1) {
                            document.getElementById("livingp1" + i).innerHTML = "极适宜"
                        } else if (res.daily[i].level == 2) {
                            document.getElementById("livingp1" + i).innerHTML = "适宜"
                        } else if (res.daily[i].level == 3) {
                            document.getElementById("livingp1" + i).innerHTML = "基本适宜"
                        } else if (res.daily[i].level == 4) {
                            document.getElementById("livingp1" + i).innerHTML = "不太适宜"
                        } else if (res.daily[i].level == 5) {
                            document.getElementById("livingp1" + i).innerHTML = "不宜"
                        } else if (res.daily[i].level == 6) {
                            document.getElementById("livingp1" + i).innerHTML = "不舒宜"
                        }
                    } else if (res.daily[i].type == 15) {
                        if (res.daily[i].level == 1) {
                            document.getElementById("livingp1" + i).innerHTML = "良好"
                        } else if (res.daily[i].level == 2) {
                            document.getElementById("livingp1" + i).innerHTML = "较好"
                        } else if (res.daily[i].level == 3) {
                            document.getElementById("livingp1" + i).innerHTML = "一般"
                        } else if (res.daily[i].level == 4) {
                            document.getElementById("livingp1" + i).innerHTML = "较差"
                        } else if (res.daily[i].level == 5) {
                            document.getElementById("livingp1" + i).innerHTML = "很差"
                        }
                    } else if (res.daily[i].type == 16) {
                        if (res.daily[i].level == 1) {
                            document.getElementById("livingp1" + i).innerHTML = "弱"
                        } else if (res.daily[i].level == 2) {
                            document.getElementById("livingp1" + i).innerHTML = "较弱"
                        } else if (res.daily[i].level == 3) {
                            document.getElementById("livingp1" + i).innerHTML = "中等"
                        } else if (res.daily[i].level == 4) {
                            document.getElementById("livingp1" + i).innerHTML = "强"
                        } else if (res.daily[i].level == 5) {
                            document.getElementById("livingp1" + i).innerHTML = "极强"
                        }
                    }
                    if (res.daily[i].name.includes("开启指数")) {
                        res.daily[i].name = res.daily[i].name.replace("开启指数", "")
                    } else {
                        res.daily[i].name = res.daily[i].name.replace("指数", "")
                    }
                    document.getElementById("livingp2" + i).innerHTML = res.daily[i].name
                }
            } else {
                console.log("请求失败")
            }
        }
    }
    xhr5.send()
    const xhr6 = new XMLHttpRequest()
    xhr6.open("get", "https://v0.yiketianqi.com/api?version=v91&appid=97479712&appsecret=p4cL2Awi&city=" + c.innerText, true)
    xhr6.onreadystatechange = () => {
        if (xhr6.readyState === 4) {
            if ((xhr6.status >= 200 && xhr6.status < 300) || xhr6.status == 304) {
                const res = JSON.parse(xhr6.responseText)
                console.log(res);
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
                    let dd = res.data[i].date.split("-")
                    document.getElementById("dele" + i).innerHTML = dd[1] + "/" + dd[2]
                    document.getElementById("weaele" + i).innerHTML = res.data[i].wea_day
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
    xhr6.send()
    const xhr7 = new XMLHttpRequest()
    let text5 = document.getElementById("city").innerText;
    let arr1 = new Array()
    xhr7.open("get", "https://v0.yiketianqi.com/api?version=v91&appid=97479712&appsecret=p4cL2Awi&city=" + text5, true)
    xhr7.onreadystatechange = () => {
        if (xhr7.readyState === 4) {
            if ((xhr7.status >= 200 && xhr7.status < 300) || xhr7.status == 304) {
                const res = JSON.parse(xhr7.responseText)
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
    xhr7.send()
    const xhr8 = new XMLHttpRequest()
    let text6 = document.getElementById("city").innerText;
    let arr2 = new Array()
    xhr8.open("get", "https://v0.yiketianqi.com/api?version=v91&appid=97479712&appsecret=p4cL2Awi&city=" + text6, true)
    xhr8.onreadystatechange = () => {
        if (xhr8.readyState === 4) {
            if ((xhr8.status >= 200 && xhr8.status < 300) || xhr8.status == 304) {
                const res = JSON.parse(xhr8.responseText)
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
    xhr8.send()
}
// 为“取消”绑定点击事件
function canceltxt() {
    sea.style.display = "none"
    document.getElementById("search-input").value = ""
    document.getElementById("searchitem").innerHTML = ""
    document.getElementById("searchitem").style.display = "none"
}
// 点击垃圾箱，将原先的的所有搜索历史全部删除
function cancelallhistory() {
    historychilenum = 0;
    document.getElementById("historycity").innerHTML = ""
    document.getElementById("history").style.display = "none"
    document.getElementById("hotcitytitle").style.top = "220px"
    document.getElementById("hotcity").style.top = "300px"
    document.getElementById("searchitem").style.display = "none"
    historynoneflag=false;
}
let current=document.getElementById("current");
document.getElementById("living").addEventListener('touchmove',function(e){
    console.log("开始滑动了touchstart");
    let a = document.documentElement.scrollLeft;
    console.log("滑动距离为：",a);
});
