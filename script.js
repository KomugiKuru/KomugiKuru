const content = document.getElementById('button');

btn.addEventListener('click',function(){
    //content.style.displey = 'block';
    //button.style.displey = 'none';
    alert('ボタンが押された！！');
    content.style.display = 'block';
    // ボタンは非表示にせず、テキスト変更
    button.textContent = '非表示';

});

