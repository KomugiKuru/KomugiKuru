const content = document.getElementById('btn');
const imge = document.getElementById('ima');




btn.addEventListener('click',function(){
    if (imge.style.display === 'none') {
        imge.style.display = 'block';  // 表示する 表示するときはブロック（？）とかうってね！？今非公開だし！！！
    } else {
        imge.style.display = 'none';   // 隠す
    }

});


