//引进常量列表
var index = 0;
var fileName = "./img/";
var suffix = ".jpg";

//先获取能用到的所有标签
var div = document.querySelector("#box"),
    a = document.querySelector("#box a"),
    img = document.querySelector("#box img"),
    ul = document.querySelector("ul"),
    li = document.querySelectorAll("li"),
    span = document.querySelectorAll("span");


//鼠标悬停li后，轮播
for(var i=0; i< li.length; i++){
  li[i].id = i;
  li[i].addEventListener("mouseover", function () {
    index = this.id;
    change();
  }, false)
}


//鼠标点击左边是按钮时，向后轮播
span[0].addEventListener("click", function () {
  index --;
  if(index < 0){
    index = 7;
  }
  change();
}, false)
//鼠标点击右边按钮时，向前轮播
span[1].addEventListener("click", function () {
  index ++;
  if(index > 7){
    index = 0;
  }
  change();
}, false);


//鼠标移入div，显示左右按钮
div.addEventListener("mouseover", function () {
  span[0].style.display = "block";
  span[1].style.display = "block";
  //鼠标悬停时停止轮播
  clearInterval(timer);
});

//鼠标移除时继续轮播
div.addEventListener("mouseout", function () {
  span[0].style.display = "none";
  span[1].style.display = "none";
  //鼠标移除时继续轮播
  timer = setInterval(autoChange, 2000);

});

//设置定时器
var timer = setInterval(autoChange, 2000);

//定义调用方法
function autoChange() {
  change();
  index ++;
  if(index == 8){
    index = 0;
  }
}



//定义一个函数，调用该函数时，且换图片，且患序号
function change() {
  //改变图片的路径，切换图片
  img.src = fileName + index + suffix;
  for(var i=0; i<li.length; i++){
    li[i].style.backgroundColor = "#00f";
  }
  //编号也发生变化
  li[index].style.backgroundColor = "#f00";
  //改变a标签连接
  a.href = "./html/" + index + ".html";
}

