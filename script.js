let var1=0;
let var2=0;
let operator=document.querySelectorAll(".operator");
let operands=document.querySelectorAll(".operands");

operands.forEach((select1)=>{
    select1.addEventListener("click",()=>{
        select1.innerText=var1;
        console.log(var1);
    })
})