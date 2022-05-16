function minMaxArray(minmaxarray){
   //alert("Hello world!");
   var min=0, max=0,i;
   for(i=0;i<=minmaxarray.length;i++){
       if(minmaxarray[i]<=min){min=minmaxarray[i];}
       if(minmaxarray[i]>=max){max=minmaxarray[i];}
   }
   console.log("Max Item = " + max + " Min Item = " + min);
}