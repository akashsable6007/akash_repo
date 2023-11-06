function addNumber(){
    let number = parseInt(prompt("enter a number"));
    for(let i = 1 ; i <= 10 ; i++ ) {
        res = number * i ;
        console.log(res);
        document.write(res, "<br>") ;
        
    }
}