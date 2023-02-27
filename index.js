// show expression on the screen
function operation(val){
    document.getElementById("screen").value += val;
    // console.log();
}


// show result on the screen
function result(){
    let exp = document.getElementById("screen").value
    let res = eval(exp)
    // console.log(res);
    document.getElementById("screen").value = res
}


// All Clear 
function allClear(){
    document.getElementById("screen").value = "";
}


// Backspace
function backspace(){
    let exp = document.getElementById("screen").value;
    let newexp = exp.substring(0, exp.length - 1)
    // console.log(newexp);
    document.getElementById("screen").value = newexp;
}


// key press event handeling
document.addEventListener("keyup", (e)=>{
    const opkeys = [61, 173, 56, 191, 53] // [+, -, *, /, %]
    // console.log(e);
    if(e.keyCode >=48 && e.keyCode <= 57 || opkeys.includes(e.keyCode)){
        document.getElementById("screen").value += e.key
    }
    else if(e.key === "Backspace"){
        backspace()
    }
    else if(e.key === "Enter"){
        result()
    }
    else if(e.key === "Escape"){
        allClear()
    }

})

