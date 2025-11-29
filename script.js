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


