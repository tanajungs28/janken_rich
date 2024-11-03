// jsファイルの連携確認
// alert(1);
// console.log("1");


// let img = document.getElementById("image_place");
// img.src = ;

var n = 0;
$("h2.button").on("click", function(){
    n = n+1;
    console.log(n);
    var exp1 = "相手はじゃんけんをしたがっているようだ";
    var exp2 = "なにをだしますか？";    
    var command1 = "「グー」";
    var command2 = "「チョキ」";
    var command3 = "「パー」";
    var output1 = "あなたの勝ちです";
    var output2 = "あなたの負けです";
    var output3 = "あいこです";
    const myimage = document.querySelector("#myhand");
    const yourimage = document.querySelector("#yourhand");
    // const sleep = (time) => new Promise((resolve) => setTimeout(resolve, time));


    if(n === 1){
        $("h2.exp").html(exp1);
    }else if(n === 2){
        $("h2.exp").html(exp2);
    }else if(n === 3){
        $("h2.command1").html(command1);
        $("h2.command2").html(command2);
        $("h2.command3").html(command3);
        $("h2.button").html("");
        $("h2.command1").on("click", function(){
            console.log("自分の手：グー")
            myimage.src = "./img/hand_gu.png";
            // async function hogehoge(){await sleep(1000);}hogehoge();
            var your_hand = Math.floor(Math.random() * 3);
            console.log("your_hand：",your_hand)
            if(your_hand === 0){
                $("h2.your_output").html("あいては「グー」を出してきた。");
                yourimage.src = "./img/hand_gu.png";
                $("h2.exp").html(output3);
                $("h2.command1").html("");
                $("h2.command2").html("");
                $("h2.command3").html("");
                $("h2.button").html("▼");
            }else if(your_hand === 1){
                $("h2.your_output").html("あいては「チョキ」を出してきた。");
                yourimage.src = "./img/hand_tyoki.png";
                $("h2.exp").html(output1);
                $("h2.command1").html("");
                $("h2.command2").html("");
                $("h2.command3").html("");
                $("h2.button").html("▼");        
            }else if(your_hand === 2){
                $("h2.your_output").html("あいては「パー」を出してきた。");
                yourimage.src = "./img/hand_pa.png";
                $("h2.exp").html(output2);
                $("h2.command1").html("");
                $("h2.command2").html("");
                $("h2.command3").html("");
                $("h2.button").html("▼");        
            }
        })
        $("h2.command2").on("click", function(){
            console.log("自分の手：チョキ")
            myimage.src = "./img/hand_tyoki.png";
            var your_hand = Math.floor(Math.random() * 3);
            console.log("your_hand：",your_hand)
            if(your_hand === 0){
                $("h2.your_output").html("あいては「グー」を出してきた。");
                yourimage.src = "./img/hand_gu.png";
                $("h2.exp").html(output2);
                $("h2.command1").html("");
                $("h2.command2").html("");
                $("h2.command3").html("");
                $("h2.button").html("▼");        
            }else if(your_hand === 1){
                $("h2.your_output").html("あいては「チョキ」を出してきた。");
                yourimage.src = "./img/hand_tyoki.png";
                $("h2.exp").html(output3);
                $("h2.command1").html("");
                $("h2.command2").html("");
                $("h2.command3").html("");
                $("h2.button").html("▼");        
            }else if(your_hand === 2){
                $("h2.your_output").html("あいては「パー」を出してきた。");
                yourimage.src = "./img/hand_pa.png";
                $("h2.exp").html(output1);
                $("h2.command1").html("");
                $("h2.command2").html("");
                $("h2.command3").html("");
                $("h2.button").html("▼");        
            }
        })
        $("h2.command3").on("click", function(){
            console.log("自分の手：パー")
            myimage.src = "./img/hand_pa.png";
            var your_hand = Math.floor(Math.random() * 3);
            console.log("your_hand：",your_hand)
            if(your_hand === 0){
                $("h2.your_output").html("あいては「グー」を出してきた。");
                yourimage.src = "./img/hand_gu.png";
                $("h2.exp").html(output1);
                $("h2.command1").html("");
                $("h2.command2").html("");
                $("h2.command3").html("");
                $("h2.button").html("▼");        
            }else if(your_hand === 1){
                $("h2.your_output").html("あいては「チョキ」を出してきた。");
                yourimage.src = "./img/hand_tyoki.png";
                $("h2.exp").html(output2);
                $("h2.command1").html("");
                $("h2.command2").html("");
                $("h2.command3").html("");
                $("h2.button").html("▼");        
            }else if(your_hand === 2){
                $("h2.your_output").html("あいては「パー」を出してきた。");
                yourimage.src = "./img/hand_pa.png";
                $("h2.exp").html(output3);
                $("h2.command1").html("");
                $("h2.command2").html("");
                $("h2.command3").html("");
                $("h2.button").html("▼");        
            }
        })
    }else {
        $("h2.exp").html("もういちどやりますか？");
        $("h2.your_output").html("");
        myimage.src = "";
        yourimage.src = "";
        n = 0;
    }




})
