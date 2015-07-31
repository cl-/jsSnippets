//threshold is maximum number of people that the event would go on without - the event will go on if the number of people, who are unable to attend, is not more than the threshold
var threshold = 2;


var loopEnd = threshold+1;
for(var i=1; i<loopEnd; ++i){
  var suitableCells = document.querySelectorAll('[src="/static/pics/dot'+i+'.gif"]');
  var colorDivider = i;
  var colorIncrement = 50/(threshold+1)*colorDivider;
  for(var j=0; j<suitableCells.length; ++j){ //Original whenisgood green: #00FF00; hsl(120,100%,50%);
    //Target element is 4+1-th parentElement. Can use either direct call or recursion or for-loop.
    // suitableCells.parentElement.parentElement.parentElement.parentElement.parentElement.style.backgroundColor = "hsl(220,"+Math.floor(100/colorDivider)+"%,"+Math.floor(50+colorIncrement)+"%)";
    getTableParentElem(suitableCells[j]).parentElement.style.backgroundColor = "hsl(220,"+Math.floor(100/colorDivider)+"%,"+Math.floor(50+colorIncrement)+"%)";
  }
}

function getTableParentElem(elem){
  if(elem.parentElement.tagName == "TABLE"){
    return elem.parentElement;
  }
  else{
    return getTableParent(elem.parentElement);
  }
}
