let isPrime = (number) => {
    if (number < 2){
        return 0
    }
    else{
        for (let i = 2; i < number;i++){
            if (number % i === 0)
            return 0
        }
        return 1
    }
}
let x = 0
while(x<=100){
    if(isPrime(x)){
        console.log(x);
    }
    x++
}
