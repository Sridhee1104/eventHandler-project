let c = 0;
function incr(){
    if (c<25){
        c++
        document.getElementById('count').textContent= c;
    }
    else{
        alert('Don"t cross 25')
    }
    checkOddEven();
}

function decr(){
    c--;
    if (c >= 0){
        document.getElementById('count').textContent = c;
    }
    else{
        alert("Don't go negative value");
    }
    checkOddEven();
}


function reset(){
    c = 0;
    document.getElementById('count').textContent = 0;
    checkOddEven();
}

function checkOddEven(){
    if (c % 2 == 0){
        
        document.getElementById('check-odd-even').textContent = 'Even';
        
    }
    else{
        document.getElementById('check-odd-even').textContent = 'Odd';
       
    }
}