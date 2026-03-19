const buttton = document.querySelector('button');
buttton.addEventListener('click',()=>{
    
    const boy = document.getElementById('boy');
    const girl  = document.getElementById('girl');
    const len1 = boy.value.length;
    const len2 = girl.value.length;
    const result = Math.pow((len1+len2),3)%101;
    const finalRes = document.getElementById('res');
    finalRes.innerText = `Result : ${result} %`;     
    girl.value = "";
    boy.value = "";
})