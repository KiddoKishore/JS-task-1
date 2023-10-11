const secMax = (num)=>{
    if (num.length != 3){
        return 0
    }
    else{
        const s = num.sort((a,b) => a-b)
        const result = s[1]
        console.log(result);
    }
}
secMax([2,10,7])
