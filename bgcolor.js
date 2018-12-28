var Link = {
  setColor:function(color){
    var alist = document.queryselectorAll('a');
    var i = 0;
     while(i < alist.lenght){
       alist[i].style.color = color;
       i = i + 1;
     }
  }
}
var Body = {
  setColor:function(color){
    document.querySelector('body').style.color = color;
  },
  setBackgroundColor:function (color){
    document.querySelector('body').style.backgroundColor = color;
  }
}
function nightDayHandler(self){
  var target = document.querySelector('body');
  if (self.value ==='night'){
    Body.setBackgroundColor('black');
    Body.setColor('white')
    self.value = 'day';

    Link.setColor('powerblue');  //powerblue
  } else {
    Body.setBackgroundColor('white');
    Body.setColor('black')
    self.value = 'night';

     Link.setColor('blue');
  }
}
