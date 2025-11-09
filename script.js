const content = document.getElementById('btn');
const imge = document.getElementById('ima');




btn.addEventListener('click',function(){
    if (imge.style.display === 'none') {
        imge.style.display = 'none';  // 表示する 表示するときはブロックとかうってね！？今非公開だし！！！
    } else {
        imge.style.display = 'none';   // 隠す
    }

});


