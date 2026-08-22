let s = 10;
function checkNumber(){
  let value = Number(document.getElementById("checknum").value);
  let random = Math.floor(Math.random()*10)+1;
  if(value === random){
    document.getElementById("statement").textContent = "You are Correct!!!";
    s++;
  }
  else{
    document.getElementById("statement").textContent="You are Wrong!!!";
    s--;
  }
  document.getElementById("score").textContent = "Score :"+s;
}