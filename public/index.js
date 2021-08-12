//for loop
function FizzBuzz(value1, value2){
    let returnValue = " ";
for (i=1; i<=100; i++){
    if (i%value1===0 && i%value2===0){
        returnValue += " FIZZBUZZ ";
    }

   else if(i%value1===0){
       returnValue += " FIZZ ";
    }

    else if (i%value2===0){
        returnValue += " BUZZ ";
    }

    else {
        returnValue += i + ' ';
    }
}
  return returnValue;
}

function BuzzIt (){
    let output = "";
    let val1 = document.getElementById('FizzValue').value;
    let val2 = document.getElementById('BuzzValue').value;

    output = FizzBuzz(val1, val2);

    document.getElementById('results').innerHTML = output;
}

//while loop
/*
let i =0;

while (i<100){
    i++;
    if(i%3==0){
        console.log("FIZZ");
    }

    else if (i%5==0){
        console.log("BUZZ");
    }

    else if (i%15==0){
        console.log("FIZZBUZZ");
    }

    else {
        console.log(i);
    }
}*/