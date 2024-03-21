getColor=()=>{
    const randomnum=Math.floor(Math.random() * 16777215);
    const finalCode=`#${randomnum.toString(16)}`;
    // console.log(`${finalCode} , ${randomnum}`);
    box.style.background=finalCode;
    h2.innerHTML=`${finalCode}`;
    
    navigator.clipboard.writeText(finalCode);
}
const h2=document.querySelector('#a');
const box=document.querySelector('.box');
// getColor();