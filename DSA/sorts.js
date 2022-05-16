function sorts(arr,N){
   //alert("Hello world!");
   var i,zeros = 0,ones = 0,twos = 0;
        for(i=0;i<=N;i++){
            if(arr[i]===0){
                zeros++;
            }
            else if(arr[i]===1){
                ones++;
            }
            else{
                twos++;
            }
        }
        
        while(twos!==0){
            arr[zeros+ones+twos-2] = 2;
            twos--;
        }
        while(ones!==0){
            arr[zeros+ones-1] = 1;
            ones--;
        }
        while(zeros!==0){
            arr[zeros-1] = 0;
            zeros--;
        }
        console.log(arr);
        
}