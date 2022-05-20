function bubblesort(arr,k){
    var i,j,temp;
    for(i=0;i<arr.length-1;i++){
        var swap = false;
        for(j=0;j<(arr.length-i-1);j++){
            if(arr[j]>arr[j+1]){
                temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
                swap=true;
            }
        }
        if(!swap){break;}
        if(i== ((arrs.length-1) - (k-1))){
            break;
        }
    }
    console.log(arrs);
}


