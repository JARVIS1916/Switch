function ReverseArray(reversearray){
    var arr= [];
    console.log(reversearray.reverse());
    while(reversearray.length){
        arr.push(reversearray.shift());
    }
    console.log(arr);
}