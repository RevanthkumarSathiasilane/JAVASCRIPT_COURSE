let btn = document.getElementById("btn");
let para = document.getElementById("para");
btn.addEventListener("click",function(){
  if(para.style.color=== "blue"){
    para.style.color="red";
    alert("color changed to red");
  }
  else{
    para.style.color="blue";
    alert("color changed to blue")
  }
})
