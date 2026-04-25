'use strict';

const content = document.getElementById('btn');
const imge = document.getElementById('ima');




btn.addEventListener('click',function(){
    if (imge.style.display === 'none') {
        content.style.backgroundColor = "rgba(92, 55, 128, 1)"
        imge.style.display = 'block';  // 表示する 表示するときはブロック（？）とかうってね！？今非公開だし！！！
    } else {
        content.style.backgroundColor = "rgb(172, 101, 238)"
        imge.style.display = 'none';   // 隠す
    }

});

const accordions = document.querySelectorAll('accordion');
const pnt = document.getElementById('panel');

accordion.addEventListener('click',function(){
    console.log(btn.nextElementSibling);
    if (pnt.style.display === 'none') {
        //content.style.backgroundColor = "rgba(92, 55, 128, 1)"
        pnt.style.display = 'block';  // 表示する 表示するときはブロック（？）とかうってね！？今非公開だし！！！
    } else {
        //content.style.backgroundColor = "rgb(172, 101, 238)"
        pnt.style.display = 'none';   // 隠す
    }

});


// それぞれにクリックイベントを設定
accordions.forEach(accordion => {
  accordion.addEventListener('click', function() {
    // このボタンの次の要素（パネル）を取得
    const panel = this.nextElementSibling;
    
    // パネルの表示/非表示を切り替え
    if (panel.style.display === 'block') {
      panel.style.display = 'none';
    } else {
      panel.style.display = 'block';
    }
  });
});


