let var1="";
let operands=document.querySelectorAll(".operand");
let display=document.querySelector(".display");
operands.forEach((select1)=>{
    select1.addEventListener("click",()=>{
        var1+=select1.innerText;
        display.innerText=var1;
        let x="";
        let y="";
        let l=var1.length;
        let end=var1[l-1];
        let indexsymbol=0;
        if(end==="="){
            for (let i = 0; i < l; i++) {
                if (var1[i]==="+" || var1[i]==="-" || var1[i]==="×" || var1[i]==="÷") {
                    indexsymbol=i;
                    break;
                }
            }
            for(let i=0; i < indexsymbol; i++){
                x+=var1[i];
            }
            for(let i=indexsymbol+1; i < l-1; i++){
                y+=var1[i];
            }
            x=+x;
            y=+y;
            console.log("x =  ",x)
            console.log("y =  ",y)
            if (var1[indexsymbol]==="+") {
                display.innerText=x+y;
            }
            else if(var1[indexsymbol]==="-") {
                display.innerText=x-y;
            }
            else if(var1[indexsymbol]==="×") {
                display.innerText=x*y;
            }
            else if(var1[indexsymbol]==="÷") {
                if(y===0){
                    display.innerText="Math Error"
                }
                else{
                    display.innerText=x/y;
                }
            }
            var1="";
        }
        if(end==="C"){
            var1="";
            display.innerText="00.00";
        }

    })
})
