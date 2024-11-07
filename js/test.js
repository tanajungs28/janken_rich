// jsファイルの連携確認
// alert(1);
// console.log("1");


// let img = document.getElementById("image_place");
// img.src = ;

// 変数の初期設定
var your_percent = 100;     //相手の体力ゲージ初期値
var my_percent = 100;       //自分の体力ゲージ初期値
var n = 0;                  //説明文を進めるための変数
var m = 1;                  //じゃんけんのコマンド選択のための変数
var exp1 = "相手はじゃんけんをしたがっているようだ";
var exp2 = "なにをだしますか？";    
var command1 = "グー";
var command2 = "チョキ";
var command3 = "パー";
var command4 = "にげる";
var choose = "▶";
var output1 = "ロケット団にダメージをあたえた！";
var output2 = "たなじゅんはダメージをうけた！";
var output3 = "あいこです";
const myimage = document.querySelector("#myhand");
const yourimage = document.querySelector("#yourhand");
// const aite = document.querySelector("pic_aite");
const music = document.querySelector("#bgm_fight");
music.volume = 0.3;
const button_sound = document.querySelector("#bgm_button");
const win_sound = document.querySelector("#bgm_win");
const lose_sound = document.querySelector("#bgm_lose");
const damege_sound = document.querySelector("#bgm_damege");

//モーダル画面のフェードアウトと登場人物のフェードイン
$(function () {
    $('.js-close').click(function () {
      $('.modal-window').fadeOut(600);
      $('.cursol_area').fadeOut(600);
      $('.Abutton_area').fadeOut(600);
      $('.pic_jibun, .pic_aite').fadeIn();
      music.play();
    });
  });


//Aボタンを押して説明文を進めていくボタンアクション
$("button.Abutton").on("click", function(){
    n = n+1;
    console.log(n);
    button_sound.play();

    // 説明文を進めるif文による分岐
    if(n === 1){
        $("h2.exp").html(exp1);
    }else if(n === 2){
        $("h2.your_output").html("");
        $("h2.exp").html(exp2);
    }else if(n === 3){
        $("h2.command1").html(choose+command1);
        $("h2.command2").html(command2);
        $("h2.command3").html(command3);
        $("h2.command4").html(command4); 
        console.log("nの中身：",n)
        console.log("mの中身：",m)

//ーーーーーーー 方向キーで出す手の選択ーーーーーーーーーーーーーーーーーーーーーー
        // 右ボタンを押した場合
        $("button.Rbutton").off("click");
        $("button.Rbutton").on("click", function(){
            m = m+1;
            console.log("右ボタン")
            console.log("nの中身：",n)
            console.log("mの中身：",m)
            if(m === 1){    //グーを選択
                $("h2.command1").html(choose+command1);
                $("h2.command2").html(command2);
                $("h2.command3").html(command3);
                $("h2.command4").html(command4);    
            }else if(m === 2){    //チョキを選択
                $("h2.command1").html(command1);
                $("h2.command2").html(choose+command2);
                $("h2.command3").html(command3);
                $("h2.command4").html(command4);   
            }else if(m === 3){    //パーを選択
                $("h2.command1").html(command1);
                $("h2.command2").html(command2);
                $("h2.command3").html(choose+command3);
                $("h2.command4").html(command4);   
            }else if(m === 4){    //逃げるを選択
                $("h2.command1").html(command1);
                $("h2.command2").html(command2);
                $("h2.command3").html(command3);
                $("h2.command4").html(choose+command4); 
            } else if(m === 5){
                $("h2.command1").html(choose+command1);
                $("h2.command2").html(command2);
                $("h2.command3").html(command3);
                $("h2.command4").html(command4);    
                m = 1;
            }
        })
            // 左ボタンを押した場合
            $("button.Lbutton").off("click");
            $("button.Lbutton").on("click", function(){
                m = m-1;
                console.log("左ボタン")
                console.log("mの中身：",m)
                if(m === 1){    //グーを選択
                    $("h2.command1").html(choose+command1);
                    $("h2.command2").html(command2);
                    $("h2.command3").html(command3);
                    $("h2.command4").html(command4);    
                }else if(m === 2){    //チョキを選択
                    $("h2.command1").html(command1);
                    $("h2.command2").html(choose+command2);
                    $("h2.command3").html(command3);
                    $("h2.command4").html(command4);   
                }else if(m === 3){    //パーを選択
                    $("h2.command1").html(command1);
                    $("h2.command2").html(command2);
                    $("h2.command3").html(choose+command3);
                    $("h2.command4").html(command4);   
                }else if(m === 4){    //逃げるを選択
                    $("h2.command1").html(command1);
                    $("h2.command2").html(command2);
                    $("h2.command3").html(command3);
                    $("h2.command4").html(choose+command4); 
                } else if(m === 0){
                    $("h2.command1").html(command1);
                    $("h2.command2").html(command2);
                    $("h2.command3").html(command3);
                    $("h2.command4").html(choose+command4); 
                    m = 4;
                }
            })
            // 上ボタンを押した場合
            $("button.Ubutton").off("click");
            $("button.Ubutton").on("click", function(){
                m = m+2;
                console.log("上ボタン")
                console.log("mの中身：",m)
                if(m === 1){    //グーを選択
                    $("h2.command1").html(choose+command1);
                    $("h2.command2").html(command2);
                    $("h2.command3").html(command3);
                    $("h2.command4").html(command4);    
                }else if(m === 2){    //チョキを選択
                    $("h2.command1").html(command1);
                    $("h2.command2").html(choose+command2);
                    $("h2.command3").html(command3);
                    $("h2.command4").html(command4);   
                }else if(m === 3){    //パーを選択
                    $("h2.command1").html(command1);
                    $("h2.command2").html(command2);
                    $("h2.command3").html(choose+command3);
                    $("h2.command4").html(command4);   
                }else if(m === 4){    //逃げるを選択
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
                } else if(m === 6){
                    $("h2.command1").html(command1);
                    $("h2.command2").html(choose+command2);
                    $("h2.command3").html(command3);
                    $("h2.command4").html(command4); 
                    m = 2;
                }
            })
            // 下ボタンを押した場合
            $("button.Dbutton").off("click");
            $("button.Dbutton").on("click", function(){
                m = m-2;
                console.log("下ボタン")
                console.log("mの中身：",m)
                if(m === 1){    //グーを選択
                    $("h2.command1").html(choose+command1);
                    $("h2.command2").html(command2);
                    $("h2.command3").html(command3);
                    $("h2.command4").html(command4);    
                }else if(m === 2){    //チョキを選択
                    $("h2.command1").html(command1);
                    $("h2.command2").html(choose+command2);
                    $("h2.command3").html(command3);
                    $("h2.command4").html(command4);   
                }else if(m === 3){    //パーを選択
                    $("h2.command1").html(command1);
                    $("h2.command2").html(command2);
                    $("h2.command3").html(choose+command3);
                    $("h2.command4").html(command4);   
                }else if(m === 4){    //逃げるを選択
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
                } else if(m === -1){
                    $("h2.command1").html(command1);
                    $("h2.command2").html(command2);
                    $("h2.command3").html(choose+command3);
                    $("h2.command4").html(command4); 
                    m = 3;
                }
            })
    }else if(n === 4){
        if (m === 1){
            console.log("自分の手：グー")
            console.log("mの中身：",m)
            myimage.src = "./img/hand_gu.png";
            var your_hand = Math.floor(Math.random() * 3);
            console.log("your_hand：",your_hand)
            if(your_hand === 0){
                $("h2.your_output").html("あいては「グー」を出してきた。");
                yourimage.src = "./img/hand_gu.png";
                damege_sound.play();
                $("h2.exp").html(output3);
                $("h2.command1").html("");
                $("h2.command2").html("");
                $("h2.command3").html("");
                $("h2.command4").html("");
                console.log("自分の体力",my_percent)
                console.log("相手の体力",your_percent)
            }else if(your_hand === 1){
                $("h2.your_output").html("あいては「チョキ」を出してきた。");
                yourimage.src = "./img/hand_tyoki.png";
                damege_sound.play();
                $("h2.exp").html(output1);
                $("h2.command1").html("");
                $("h2.command2").html("");
                $("h2.command3").html("");
                $("h2.command4").html("");
                your_percent = your_percent -30 ;
                $('.your_health_guage').css('width',your_percent);
                //ダメージ与えた際の点滅処理
                var i = 0;
                $(function(){
                        var id = setInterval(function(){
                            $('.pic_aite').fadeOut(100, function(){$(this).fadeIn(100)});
                            i++;
                            if(i === 5){
                                clearInterval(id);
                                console.log("iの値：",i)
                            };
                        }, 100);
                    });                    
                console.log("自分の体力",my_percent)
                console.log("相手の体力",your_percent)
            }else if(your_hand === 2){
                $("h2.your_output").html("あいては「パー」を出してきた。");
                yourimage.src = "./img/hand_pa.png";
                damege_sound.play();
                $("h2.exp").html(output2);
                $("h2.command1").html("");
                $("h2.command2").html("");
                $("h2.command3").html("");
                $("h2.command4").html("");
                my_percent = my_percent -30;
                $('.my_health_guage').css('width',my_percent);
                //ダメージ与えた際の点滅処理
                var i = 0;
                $(function(){
                        var id = setInterval(function(){
                            $('.pic_jibun').fadeOut(100, function(){$(this).fadeIn(100)});
                            i++;
                            if(i === 5){
                                clearInterval(id);
                                console.log("iの値：",i)
                            };
                        }, 100);
                    });                    
                console.log("自分の体力",my_percent)
                console.log("相手の体力",your_percent)
            }
        }
        if (m === 2){
            console.log("自分の手：チョキ")
            console.log("mの中身：",m)
            myimage.src = "./img/hand_tyoki.png";
            var your_hand = Math.floor(Math.random() * 3);
            console.log("your_hand：",your_hand)
            if(your_hand === 0){
                $("h2.your_output").html("あいては「グー」を出してきた。");
                yourimage.src = "./img/hand_gu.png";
                damege_sound.play();
                $("h2.exp").html(output2);
                $("h2.command1").html("");
                $("h2.command2").html("");
                $("h2.command3").html("");
                $("h2.command4").html("");
                my_percent = my_percent -30;
                $('.my_health_guage').css('width',my_percent);
                                //ダメージ与えた際の点滅処理
                                var i = 0;
                                $(function(){
                                        var id = setInterval(function(){
                                            $('.pic_jibun').fadeOut(100, function(){$(this).fadeIn(100)});
                                            i++;
                                            if(i === 5){
                                                clearInterval(id);
                                                console.log("iの値：",i)
                                            };
                                        }, 100);
                                    });                                    
                console.log("自分の体力",my_percent)
                console.log("相手の体力",your_percent)
            }else if(your_hand === 1){
                $("h2.your_output").html("あいては「チョキ」を出してきた。");
                yourimage.src = "./img/hand_tyoki.png";
                damege_sound.play();
                $("h2.exp").html(output3);
                $("h2.command1").html("");
                $("h2.command2").html("");
                $("h2.command3").html("");
                $("h2.command4").html("");
                console.log("自分の体力",my_percent)
                console.log("相手の体力",your_percent)
            }else if(your_hand === 2){
                $("h2.your_output").html("あいては「パー」を出してきた。");
                yourimage.src = "./img/hand_pa.png";
                damege_sound.play();
                $("h2.exp").html(output1);
                $("h2.command1").html("");
                $("h2.command2").html("");
                $("h2.command3").html("");
                $("h2.command4").html("");
                your_percent = your_percent -30 ;
                $('.your_health_guage').css('width',your_percent);
                                //ダメージ与えた際の点滅処理
                                var i = 0;
                                $(function(){
                                        var id = setInterval(function(){
                                            $('.pic_aite').fadeOut(100, function(){$(this).fadeIn(100)});
                                            i++;
                                            if(i === 5){
                                                clearInterval(id);
                                                console.log("iの値：",i)
                                            };
                                        }, 100);
                                    });                
                console.log("自分の体力",my_percent)
                console.log("相手の体力",your_percent)
            }
        }
        if (m === 3){
            console.log("自分の手：パー")
            console.log("mの中身：",m)
            myimage.src = "./img/hand_pa.png";
            var your_hand = Math.floor(Math.random() * 3);
            console.log("your_hand：",your_hand)
            if(your_hand === 0){
                $("h2.your_output").html("あいては「グー」を出してきた。");
                yourimage.src = "./img/hand_gu.png";
                damege_sound.play();
                $("h2.exp").html(output1);
                $("h2.command1").html("");
                $("h2.command2").html("");
                $("h2.command3").html("");
                $("h2.command4").html("");
                your_percent = your_percent -30 ;
                $('.your_health_guage').css('width',your_percent);
                                //ダメージ与えた際の点滅処理
                                var i = 0;
                                $(function(){
                                        var id = setInterval(function(){
                                            $('.pic_aite').fadeOut(100, function(){$(this).fadeIn(100)});
                                            i++;
                                            if(i === 5){
                                                clearInterval(id);
                                                console.log("iの値：",i)
                                            };
                                        }, 100);
                                    });                
                console.log("自分の体力",my_percent)
                console.log("相手の体力",your_percent)
            }else if(your_hand === 1){
                $("h2.your_output").html("あいては「チョキ」を出してきた。");
                yourimage.src = "./img/hand_tyoki.png";
                damege_sound.play();
                $("h2.exp").html(output2);
                $("h2.command1").html("");
                $("h2.command2").html("");
                $("h2.command3").html("");
                $("h2.command4").html("");
                my_percent = my_percent -30;
                $('.my_health_guage').css('width',my_percent);
                                //ダメージ与えた際の点滅処理
                                var i = 0;
                                $(function(){
                                        var id = setInterval(function(){
                                            $('.pic_jibun').fadeOut(100, function(){$(this).fadeIn(100)});
                                            i++;
                                            if(i === 5){
                                                clearInterval(id);
                                                console.log("iの値：",i)
                                            };
                                        }, 100);
                                    });                                    
                console.log("自分の体力",my_percent)
                console.log("相手の体力",your_percent)
            }else if(your_hand === 2){
                $("h2.your_output").html("あいては「パー」を出してきた。");
                yourimage.src = "./img/hand_pa.png";
                damege_sound.play();
                $("h2.exp").html(output3);
                $("h2.command1").html("");
                $("h2.command2").html("");
                $("h2.command3").html("");
                $("h2.command4").html("");
                console.log("自分の体力",my_percent)
                console.log("相手の体力",your_percent)
            }
        }
        if(m === 4){
            console.log("自分の手：にげる")
            console.log("mの中身：",m)
            $("h2.your_output").html("、、、にげられなかった。");
            $("h2.exp").html("");
            $("h2.command1").html("");
            $("h2.command2").html("");
            $("h2.command3").html("");
            $("h2.command4").html("");
            n = 1;
            m = 1; //次回のコマンド選択を初期位置（グー）にするためのリセット
        }
    }
    else if(n === 5 && my_percent > 0 && your_percent > 0){
        $("h2.exp").html("もういちどやりますか？");
        $("h2.your_output").html("");
        myimage.src = "";
        yourimage.src = "";
        n = 0; //説明文を頭に戻すためのリセット
        m = 1; //次回のコマンド選択を初期位置（グー）にするためのリセット
        console.log("n,mを初期化")
            }else if(n === 5 && my_percent < 0){
                $("h2.exp").html("あなたの負けです");
                $("h2.your_output").html("");
                myimage.src = "";
                yourimage.src = "";
                music.pause();
                lose_sound.play();
                $('.pic_jibun').animate({
                    top: "+=50",
                    opacity: 0
                },1000,function(){
                    $(this).hide(); 
                })
            }else if(n === 5 && your_percent < 0){
                $("h2.exp").html("あなたの勝ちです");
                $("h2.your_output").html("");
                myimage.src = "";
                yourimage.src = "";
                music.pause();
                win_sound.play();
                $('.pic_aite').animate({
                    top: "+=50",
                    opacity: 0
                },1000,function(){
                    $(this).hide(); 
                })
            }
})
