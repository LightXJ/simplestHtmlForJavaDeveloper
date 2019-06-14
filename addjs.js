alert('hello js');

var button = document.getElementById('button2');
button.onclick=function(){
  alert('我是按钮2，我被点击了')
}
button.onclick=function(){
  alert('我是按钮2，我又被点击了')
}

button.addEventListener('click',function(){
  alert('按钮2，点击 addEventListener')
})