var pasInpt = document.getElementById("pwd");
var pasCon = document.getElementById("confirm");

document.getElementById("subButton").addEventListener("click",()=>{
    if (pasInpt !=="" && pasCon!=="" && pasInpt.value!==pasCon.value){
        console.log(pasInpt);
        pasInpt.classList.add("error");
        pasCon.classList.add("error");
    } else if(pasInpt.value = pasCon.value){
        pasInpt.classList.remove("error");
        pasCon.classList.remove("error");
    }
});
