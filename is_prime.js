let num = +process.argv[2];
let count = 1;
for(let i=2;i<num;i++){
  if(num%i==0){
    count=0;
  }
}
if(count==1){
  console.log("true");
}
if(count==0){
  console.log("false");
}

