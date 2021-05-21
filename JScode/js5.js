const xhr7 = new XMLHttpRequest()
let text7=document.getElementById("city").innerText;
xhr7.open("get", "https://devapi.qweather.com/v7/indices/1d?type=1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16&lang=zh&key=350716b54c814154925d07af80288065&location="+"101040100", true)
xhr7.onreadystatechange = () => {
    if (xhr7.readyState === 4) {
        if ((xhr7.status >= 200 && xhr7.status < 300) || xhr7.status == 304) {
            const res = JSON.parse(xhr7.responseText)
            // console.log(res);
            for(let i=0;i<16;i++){
                document.getElementById("livingimg"+i).src="living\\" + res.daily[i].type + ".png"
                if(res.daily[i].type==1){
                    if(res.daily[i].level==1){
                        document.getElementById("livingp1"+i).innerHTML="适宜"
                    }else if(res.daily[i].level==2){
                        document.getElementById("livingp1"+i).innerHTML="较适宜"
                    }else{
                        document.getElementById("livingp1"+i).innerHTML="较不宜"
                    }
                }else if(res.daily[i].type==2){
                    if(res.daily[i].level==1){
                        document.getElementById("livingp1"+i).innerHTML="适宜"
                    }else if(res.daily[i].level==2){
                        document.getElementById("livingp1"+i).innerHTML="较适宜"
                    }else if(res.daily[i].level==3){
                        document.getElementById("livingp1"+i).innerHTML="较不宜"
                    }else{
                        document.getElementById("livingp1"+i).innerHTML="不宜"
                    }
                }else if(res.daily[i].type==3){
                    if(res.daily[i].level==1){
                        document.getElementById("livingp1"+i).innerHTML="寒冷"
                    }else if(res.daily[i].level==2){
                        document.getElementById("livingp1"+i).innerHTML="冷"
                    }else if(res.daily[i].level==3){
                        document.getElementById("livingp1"+i).innerHTML="较冷"
                    }else if(res.daily[i].level==4){
                        document.getElementById("livingp1"+i).innerHTML="较舒适"
                    }else if(res.daily[i].level==5){
                        document.getElementById("livingp1"+i).innerHTML="舒适"
                    }else if(res.daily[i].level==6){
                        document.getElementById("livingp1"+i).innerHTML="热"
                    }
                }else if(res.daily[i].type==4){
                    if(res.daily[i].level==1){
                        document.getElementById("livingp1"+i).innerHTML="适宜"
                    }else if(res.daily[i].level==2){
                        document.getElementById("livingp1"+i).innerHTML="较适宜"
                    }else{
                        document.getElementById("livingp1"+i).innerHTML="不宜"
                    }
                }else if(res.daily[i].type==5){
                    if(res.daily[i].level==1){
                        document.getElementById("livingp1"+i).innerHTML="最弱"
                    }else if(res.daily[i].level==2){
                        document.getElementById("livingp1"+i).innerHTML="弱"
                    }else if(res.daily[i].level==3){
                        document.getElementById("livingp1"+i).innerHTML="中等"
                    }else if(res.daily[i].level==4){
                        document.getElementById("livingp1"+i).innerHTML="强"
                    }else if(res.daily[i].level==5){
                        document.getElementById("livingp1"+i).innerHTML="很强"
                    }
                }else if(res.daily[i].type==6){
                    if(res.daily[i].level==1){
                        document.getElementById("livingp1"+i).innerHTML="适宜"
                    }else if(res.daily[i].level==2){
                        document.getElementById("livingp1"+i).innerHTML="较适宜"
                    }else if(res.daily[i].level==3){
                        document.getElementById("livingp1"+i).innerHTML="一般"
                    }else if(res.daily[i].level==4){
                        document.getElementById("livingp1"+i).innerHTML="较不宜"
                    }else if(res.daily[i].level==5){
                        document.getElementById("livingp1"+i).innerHTML="不适宜"
                    }
                }else if(res.daily[i].type==7){
                    if(res.daily[i].level==1){
                        document.getElementById("livingp1"+i).innerHTML="极不易发"
                    }else if(res.daily[i].level==2){
                        document.getElementById("livingp1"+i).innerHTML="不易发"
                    }else if(res.daily[i].level==3){
                        document.getElementById("livingp1"+i).innerHTML="较易发"
                    }else if(res.daily[i].level==4){
                        document.getElementById("livingp1"+i).innerHTML="易发"
                    }else if(res.daily[i].level==5){
                        document.getElementById("livingp1"+i).innerHTML="极易发"
                    }                    
                }else if(res.daily[i].type==8){
                    if(res.daily[i].level==1){
                        document.getElementById("livingp1"+i).innerHTML="舒适"
                    }else if(res.daily[i].level==2){
                        document.getElementById("livingp1"+i).innerHTML="较舒适"
                    }else if(res.daily[i].level==3){
                        document.getElementById("livingp1"+i).innerHTML="较不舒适"
                    }else if(res.daily[i].level==4){
                        document.getElementById("livingp1"+i).innerHTML="很不舒适"
                    }else if(res.daily[i].level==5){
                        document.getElementById("livingp1"+i).innerHTML="极不舒适"
                    }else if(res.daily[i].level==6){
                        document.getElementById("livingp1"+i).innerHTML="不舒适"
                    }else if(res.daily[i].level==7){
                        document.getElementById("livingp1"+i).innerHTML="非常不舒适"
                    }
                }else if(res.daily[i].type==9){
                    if(res.daily[i].level==1){
                        document.getElementById("livingp1"+i).innerHTML="少发"
                    }else if(res.daily[i].level==2){
                        document.getElementById("livingp1"+i).innerHTML="较易发"
                    }else if(res.daily[i].level==3){
                        document.getElementById("livingp1"+i).innerHTML="易发"
                    }else if(res.daily[i].level==4){
                        document.getElementById("livingp1"+i).innerHTML="极易发"
                    }
                }else if(res.daily[i].type==10){
                    if(res.daily[i].level==1){
                        document.getElementById("livingp1"+i).innerHTML="优"
                    }else if(res.daily[i].level==2){
                        document.getElementById("livingp1"+i).innerHTML="良"
                    }else if(res.daily[i].level==3){
                        document.getElementById("livingp1"+i).innerHTML="中"
                    }else if(res.daily[i].level==4){
                        document.getElementById("livingp1"+i).innerHTML="较差"
                    }else if(res.daily[i].level==5){
                        document.getElementById("livingp1"+i).innerHTML="很差"
                    }
                }else if(res.daily[i].type==11){
                    if(res.daily[i].level==1){
                        document.getElementById("livingp1"+i).innerHTML="长时间开启"
                    }else if(res.daily[i].level==2){
                        document.getElementById("livingp1"+i).innerHTML="部分时间开启"
                    }else if(res.daily[i].level==3){
                        document.getElementById("livingp1"+i).innerHTML="较少开启"
                    }else if(res.daily[i].level==4){
                        document.getElementById("livingp1"+i).innerHTML="开启制暖空调"
                    }
                }else if(res.daily[i].type==12){
                    if(res.daily[i].level==1){
                        document.getElementById("livingp1"+i).innerHTML="不需要"
                    }else if(res.daily[i].level==2){
                        document.getElementById("livingp1"+i).innerHTML="需要"
                    }else if(res.daily[i].level==3){
                        document.getElementById("livingp1"+i).innerHTML="必要"
                    }else if(res.daily[i].level==4){
                        document.getElementById("livingp1"+i).innerHTML="很必要"
                    }else if(res.daily[i].level==5){
                        document.getElementById("livingp1"+i).innerHTML="非常必要"
                    }
                }else if(res.daily[i].type==13){
                    if(res.daily[i].level==1){
                        document.getElementById("livingp1"+i).innerHTML="保湿"
                    }else if(res.daily[i].level==2){
                        document.getElementById("livingp1"+i).innerHTML="保湿防晒"
                    }else if(res.daily[i].level==3){
                        document.getElementById("livingp1"+i).innerHTML="去油防晒"
                    }else if(res.daily[i].level==4){
                        document.getElementById("livingp1"+i).innerHTML="防脱水防晒"
                    }else if(res.daily[i].level==5){
                        document.getElementById("livingp1"+i).innerHTML="去油"
                    }else if(res.daily[i].level==6){
                        document.getElementById("livingp1"+i).innerHTML="防脱水"
                    }else if(res.daily[i].level==7){
                        document.getElementById("livingp1"+i).innerHTML="防晒"
                    }else{
                        document.getElementById("livingp1"+i).innerHTML="滋润保湿"
                    }
                }else if(res.daily[i].type==14){
                    if(res.daily[i].level==1){
                        document.getElementById("livingp1"+i).innerHTML="极适宜"
                    }else if(res.daily[i].level==2){
                        document.getElementById("livingp1"+i).innerHTML="适宜"
                    }else if(res.daily[i].level==3){
                        document.getElementById("livingp1"+i).innerHTML="基本适宜"
                    }else if(res.daily[i].level==4){
                        document.getElementById("livingp1"+i).innerHTML="不太适宜"
                    }else if(res.daily[i].level==5){
                        document.getElementById("livingp1"+i).innerHTML="不宜"
                    }else if(res.daily[i].level==6){
                        document.getElementById("livingp1"+i).innerHTML="不舒宜"
                    }
                }else if(res.daily[i].type==15){
                    if(res.daily[i].level==1){
                        document.getElementById("livingp1"+i).innerHTML="良好"
                    }else if(res.daily[i].level==2){
                        document.getElementById("livingp1"+i).innerHTML="较好"
                    }else if(res.daily[i].level==3){
                        document.getElementById("livingp1"+i).innerHTML="一般"
                    }else if(res.daily[i].level==4){
                        document.getElementById("livingp1"+i).innerHTML="较差"
                    }else if(res.daily[i].level==5){
                        document.getElementById("livingp1"+i).innerHTML="很差"
                    }
                }else if(res.daily[i].type==16){
                    if(res.daily[i].level==1){
                        document.getElementById("livingp1"+i).innerHTML="弱"
                    }else if(res.daily[i].level==2){
                        document.getElementById("livingp1"+i).innerHTML="较弱"
                    }else if(res.daily[i].level==3){
                        document.getElementById("livingp1"+i).innerHTML="中等"
                    }else if(res.daily[i].level==4){
                        document.getElementById("livingp1"+i).innerHTML="强"
                    }else if(res.daily[i].level==5){
                        document.getElementById("livingp1"+i).innerHTML="极强"
                    }
                }
                if(res.daily[i].name.includes("开启指数")){
                    res.daily[i].name=res.daily[i].name.replace("开启指数","")
                }else{
                    res.daily[i].name=res.daily[i].name.replace("指数","")
                }
                document.getElementById("livingp2"+i).innerHTML=res.daily[i].name
            }
        } else {
            console.log("请求失败")
        }
    }
}
xhr7.send()
