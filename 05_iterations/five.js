const language=["js","ruby","py","cpp","py"]

// ****** For-Each loop **********8

language.forEach( function (item){         
   //console.log(item);                //callback function la nav nasta
}
  )    

language.forEach((value)=>{   // by using arrow function 
   // console.log(value);
}
  )


  function printMe(value){
     console.log(value);
     
  }

  //language.forEach(printMe)

  language.forEach( (item,index,arr)=>{
   // console.log(item,index,arr);
    }
 )


 const mycoding=[
   {
     languageName:"javascript",
     languageFile:"js",
   },
   {
     languageName:"java",
     languageFile:"java",
   },
   {
     languageName:"python",
     languageFile:"py",
   },
 ]

 mycoding.forEach( (item)=>{
    console.log(item.languageName);
    
   }
)



