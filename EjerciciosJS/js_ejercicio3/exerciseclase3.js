function multiplyByTwo(value){
    const number = 2;
    let result;
    function inner(){
        result = value * number;
        return result;
    };
    let innerCall = inner();
    return innerCall;
}
console.log()
