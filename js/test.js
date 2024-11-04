// jsファイルの連携確認
// alert(1);
// console.log("1");


// let img = document.getElementById("image_place");
// img.src = ;

$(function () {
    $('.js-close').click(function () {
      $('.modal-window').fadeOut(600);
      $('.pic_jibun, .pic_aite').fadeIn();
    });
  });



var n = 0; //説明文を進めるための変数
var m = 1; //じゃんけんのコマンド選択のための変数


$("button.Abutton").on("click", function(){
    n = n+1;
    console.log(n);
    var exp1 = "相手はじゃんけんをしたがっているようだ";
    var exp2 = "なにをだしますか？";    
    var command1 = "グー";
    var command2 = "チョキ";
    var command3 = "パー";
    var command4 = "にげる";
    var choose = "▶"
    var output1 = "あなたの勝ちです";
    var output2 = "あなたの負けです";
    var output3 = "あいこです";
    const myimage = document.querySelector("#myhand");
    const yourimage = document.querySelector("#yourhand");
    // const sleep = (time) => new Promise((resolve) => setTimeout(resolve, time));


    // 説明文を進めるif文による分岐
    if(n === 1){
        $("h2.exp").html(exp1);
    }else if(n === 2){
        $("h2.exp").html(exp2);
    }else if(n === 3){
        $("h2.command1").html(choose+command1);
        $("h2.command2").html(command2);
        $("h2.command3").html(command3);
        $("h2.command4").html(command4); 
        // 方向キーで出す手の選択
        // 右ボタンを押した場合
        $("button.Rbutton").on("click", function(){
            m = m+1;
            console.log("mの中身：",m)
            if(m === 1){
                $("h2.command1").html(choose+command1);
                $("h2.command2").html(command2);
                $("h2.command3").html(command3);
                $("h2.command4").html(command4);    
            }else if(m === 2){
                $("h2.command1").html(command1);
                $("h2.command2").html(choose+command2);
                $("h2.command3").html(command3);
                $("h2.command4").html(command4);   
            }else if(m === 3){
                $("h2.command1").html(command1);
                $("h2.command2").html(command2);
                $("h2.command3").html(choose+command3);
                $("h2.command4").html(command4);   
            }else if(m === 4){
                $("h2.command1").html(command1);
                $("h2.command2").html(command2);
                $("h2.command3").html(command3);
                $("h2.command4").html(choose+command4); 
                m = 0;  
            } else if(m === 5){
                m = 0;
            }
        })
            // 左ボタンを押した場合
            $("button.Lbutton").on("click", function(){
                m = m-1;
                console.log("mの中身：",m)
                if(m === 1){
                    $("h2.command1").html(choose+command1);
                    $("h2.command2").html(command2);
                    $("h2.command3").html(command3);
                    $("h2.command4").html(command4);    
                }else if(m === 2){
                    $("h2.command1").html(command1);
                    $("h2.command2").html(choose+command2);
                    $("h2.command3").html(command3);
                    $("h2.command4").html(command4);   
                }else if(m === 3){
                    $("h2.command1").html(command1);
                    $("h2.command2").html(command2);
                    $("h2.command3").html(choose+command3);
                    $("h2.command4").html(command4);   
                }else if(m === 4){
                    $("h2.command1").html(command1);
                    $("h2.command2").html(command2);
                    $("h2.command3").html(command3);
                    $("h2.command4").html(choose+command4); 
                    m = 0;  
                } else if(m === 0){
                    $("h2.command1").html(command1);
                    $("h2.command2").html(command2);
                    $("h2.command3").html(command3);
                    $("h2.command4").html(choose+command4); 
                    m = 4;
                }
            })
            // 上ボタンを押した場合
            $("button.Ubutton").on("click", function(){
                m = m+2;
                console.log("mの中身：",m)
                if(m === 1){
                    $("h2.command1").html(choose+command1);
                    $("h2.command2").html(command2);
                    $("h2.command3").html(command3);
                    $("h2.command4").html(command4);    
                }else if(m === 2){
                    $("h2.command1").html(command1);
                    $("h2.command2").html(choose+command2);
                    $("h2.command3").html(command3);
                    $("h2.command4").html(command4);   
                }else if(m === 3){
                    $("h2.command1").html(command1);
                    $("h2.command2").html(command2);
                    $("h2.command3").html(choose+command3);
                    $("h2.command4").html(command4);   
                }else if(m === 4){
                    $("h2.command1").html(command1);
                    $("h2.command2").html(command2);
                    $("h2.command3").html(command3);
                    $("h2.command4").html(choose+command4); 
                    m = 0;  
                } else if(m === 5){
                    $("h2.command1").html(choose+command1);
                    $("h2.command2").html(command2);
                    $("h2.command3").html(command3);
                    $("h2.command4").html(command4); 
                    m = 1;
                }
            })
            // 下ボタンを押した場合
            $("button.Dbutton").on("click", function(){
                m = m+2;
                console.log("mの中身：",m)
                if(m === 1){
                    $("h2.command1").html(choose+command1);
                    $("h2.command2").html(command2);
                    $("h2.command3").html(command3);
                    $("h2.command4").html(command4);    
                }else if(m === 2){
                    $("h2.command1").html(command1);
                    $("h2.command2").html(choose+command2);
                    $("h2.command3").html(command3);
                    $("h2.command4").html(command4);   
                }else if(m === 3){
                    $("h2.command1").html(command1);
                    $("h2.command2").html(command2);
                    $("h2.command3").html(choose+command3);
                    $("h2.command4").html(command4);   
                }else if(m === 4){
                    $("h2.command1").html(command1);
                    $("h2.command2").html(command2);
                    $("h2.command3").html(command3);
                    $("h2.command4").html(choose+command4); 
                    m = 0;  
                } else if(m === 5){
                    $("h2.command1").html(choose+command1);
                    $("h2.command2").html(command2);
                    $("h2.command3").html(command3);
                    $("h2.command4").html(command4); 
                    m = 1;
                }
            })
    }else if(n === 4){
        // $("h2.command1").on("click", function(){
        if (m === 1){
            console.log("自分の手：グー")
            console.log("mの中身：",m)
            myimage.src = "./img/hand_gu.png";
            var your_hand = Math.floor(Math.random() * 3);
            console.log("your_hand：",your_hand)
            if(your_hand === 0){
                $("h2.your_output").html("あいては「グー」を出してきた。");
                yourimage.src = "./img/hand_gu.png";
                $("h2.exp").html(output3);
                $("h2.command1").html("");
                $("h2.command2").html("");
                $("h2.command3").html("");
                $("h2.command4").html("");
            }else if(your_hand === 1){
                $("h2.your_output").html("あいては「チョキ」を出してきた。");
                yourimage.src = "./img/hand_tyoki.png";
                $("h2.exp").html(output1);
                $("h2.command1").html("");
                $("h2.command2").html("");
                $("h2.command3").html("");
                $("h2.command4").html("");
            }else if(your_hand === 2){
                $("h2.your_output").html("あいては「パー」を出してきた。");
                yourimage.src = "./img/hand_pa.png";
                $("h2.exp").html(output2);
                $("h2.command1").html("");
                $("h2.command2").html("");
                $("h2.command3").html("");
                $("h2.command4").html("");
            }
        }
        // })
        // $("h2.command2").on("click", function(){
            if (m === 2){
            console.log("自分の手：チョキ")
            console.log("mの中身：",m)
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
                $("h2.command4").html("");
            }else if(your_hand === 1){
                $("h2.your_output").html("あいては「チョキ」を出してきた。");
                yourimage.src = "./img/hand_tyoki.png";
                $("h2.exp").html(output3);
                $("h2.command1").html("");
                $("h2.command2").html("");
                $("h2.command3").html("");
                $("h2.command4").html("");
            }else if(your_hand === 2){
                $("h2.your_output").html("あいては「パー」を出してきた。");
                yourimage.src = "./img/hand_pa.png";
                $("h2.exp").html(output1);
                $("h2.command1").html("");
                $("h2.command2").html("");
                $("h2.command3").html("");
                $("h2.command4").html("");
            }
        }
        // })
        // $("h2.command3").on("click", function(){
        if (m === 3){
            console.log("自分の手：パー")
            console.log("mの中身：",m)
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
                $("h2.command4").html("");
            }else if(your_hand === 1){
                $("h2.your_output").html("あいては「チョキ」を出してきた。");
                yourimage.src = "./img/hand_tyoki.png";
                $("h2.exp").html(output2);
                $("h2.command1").html("");
                $("h2.command2").html("");
                $("h2.command3").html("");
                $("h2.command4").html("");
            }else if(your_hand === 2){
                $("h2.your_output").html("あいては「パー」を出してきた。");
                yourimage.src = "./img/hand_pa.png";
                $("h2.exp").html(output3);
                $("h2.command1").html("");
                $("h2.command2").html("");
                $("h2.command3").html("");
                $("h2.command4").html("");
            }
        }
        // })
        }else {
        $("h2.exp").html("もういちどやりますか？");
        $("h2.your_output").html("");
        myimage.src = "";
        yourimage.src = "";
        n = 0;
            }

})
