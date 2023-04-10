
let text= "";
let btn ="";
let buttons=document.getElementsByClassName("button");
let array=Array.from(buttons);

// let darkMode = document.getElementsByClassName("darkMode")[0];
// darkMode.addEventListener('click', darkModeFunction);
// function darkModeFunction(){
    // let valueOfContentButton = darkMode.value ;
     // if(valueOfContentButton === 'dark'){
        //  let valueOfContentButton =darkMode.value = 'light';
        // document.querySelector(".content").style.background="white";
        // document.querySelector("h1").style.color="black";
    // }else{
        // let valueOfContentButton =darkMode.value = 'dark';
        // document.querySelector(".content").style.background="black";
        // document.querySelector("h1").style.color="white"; 
    // }
// }

array.forEach((button)=>{
    button.addEventListener('click', showResult);
})
function showResult(e){
    let screen=document.getElementById("input");
    let btnText=e.target.innerText;
    if(btnText=='AC'){
        text="";
        screen.value=text;
    }
    else if(btnText=='C'){
        text="";
        screen.value=text;
    }
    else if (btnText=="="){
        screen.value=eval(text);
        text="";
    }
    else if(btnText=="x"){
        btnText="*"
        screen.value=text+btnText;
        text=screen.value;
    }
    else{
        screen.value=text+btnText;
        text=screen.value;
    }
}
