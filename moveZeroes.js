function moveZeroes(arr){
    for(let i=arr.length-2;i>=0;i--){
        if(arr[i]===0 && arr[i+1] && arr[i+1]!==0){
            [arr[i],arr[i+1]] = [arr[i+1],arr[i]]
            i+=2
        }
    }
}

let b = [0,0]
moveZeroes(b)
console.log(b)