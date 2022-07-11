function choice(arr){
    const choiceResult = arr[Math.floor(Math.random()*arr.length)];
    return choiceResult;
}

export { choice };