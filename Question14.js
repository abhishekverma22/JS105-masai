let n = 5;

for(i=1; i<=n; i++){
  let str = "";
  if(i == 1 || i == n){
    for(j=1; j<=n; j++){
      str += "*" + " "
    }
  }else{
    str += "*"
  }
  console.log(str)
}