// var marks = prompt("Enter your marks :");

// if (marks >= 80)
// console.log("A+");
// else if (marks >= 70)
// console.log("B+");
// else if (marks >= 60)
// console.log("C+");
// else if (marks >= 50)
// console.log("D+");
// else console.log("fail");



// var num1 = prompt("Enter your mum1:");
// var num2 = prompt("Enter your mum2:");
// var num3 = prompt("Enter your mum3:");

// if (num1 > num2 && num1 > num3)
// console.log( "lerge number = "  +num1);

//  else if (num2 > num3 && num2 > num1)
// console.log( "lerge number = " +num2);

// else console.log("lerge numner = " +num3)







// var letter = prompt("Enter your letter :");

// switch (letter) {
//     case "a":
//     console.log("vowel");
//     break;
//     case "e":
//     console.log("vowel");
//     break;
//     case "i":
//     console.log("vowel");
//     break;
//     case "o":
//     console.log("vowel");
//     break;
//     default: 
//     console.log("not a digit");
// }



// var sum = 0;

// for (var a=5; a<=15; a=a+1){

//  sum = sum + a; 
// }
// document.write(sum);
// document.write("<h1>End</h1>");



// var cels = parseFloat(prompt("Enter cels:"));

// var farn = (cels*(9/5)+32);

// document.write("cels:" + farn);




// function faruk(a){
//     var b = a * a;
//     console.log("result:" +b);
// }
// faruk(5);



// var names = new Array(4);
// names[0] = "faruk";
// names[1] = "fk";
// names[2] = "farqw";
// names[3] = "ruk";
// console.log(names.length);





// var numofwon = 0;
// var numoflost = 0;
// for (var a= 1; a<=5; a++)
//     {
//     var guessNumber= parseInt(prompt("Enter your Number"));
//     var RandomNumber = Math.floor(Math.random() *5) +1;
    
//     if(RandomNumber == guessNumber) {
//         console.log("you have won")
//         numofwon++;
//     }
    
//     else{
//         console.log("You have lost. random numner was" + RandomNumber)
//         numoflost++;
//     }
// }
// document.write("number of won"+ numofwon + "<br>" );
// document.write("number of lost"+ numoflost );
  




// var date = new Date();
// console.log(date)

// var year = date.getFullYear();
// console.log(year)

// var year = date.getMonth();
// console.log(year)

// var year = date.getDay();
// console.log(year)

// var year = date.getHours();
// console.log(year)

// var year = date.getMinutes();
// console.log(year)

// var year = date.getSeconds();
// console.log(year)






// document.querySelector("#p").innerHTML = "change"
// document.querySelector(".d").innerHTML = "all change"




// function mgs (){
//     alert('this is button')
// }


// var link = document.getElementsByTagName("a")[0];
// link.innerHTML="Study with faruk";
// link.style.fontSize="3rem";
// link.style.color="purple";
// link.href="http//:study with faruk";



// var far = document.createElement("h1");
// var text = document.createTextNode("Ok good bye")
// far.appendChild(text);

// var uk = document.getElementById("faruk"); 

// var add = document.getElementsByTagName("h1")[0];
// uk.appendChild(far,add);






// var photos =["1.jpg", "2.jpg", "3.jpg"];
// var imgtag = document.querySelector("img");

// var count = 0;
// function nex(){
//  count++;
//  if(count>=photos.length){
//     count=0;
//     imgtag.src = photos[count];
//  }
//  else{
//     imgtag.src=photos[count];
// }

 
//  imgtag.src=photos[count];
// }


// function prev(){
 
    
//     count--;
//     if(count<0){
//        count=photos.length-1;
//        imgtag.src = photos[count];
//     }
//     else{
//        imgtag.src=photos[count];
//    }
   
    
//     imgtag.src=photos[count];
// }





// function addstyle(){
//    var far =document.querySelector("#mycls");

//    far.classList.add("para");
//    far.innerHTML="how are you"
// }

// function removestyle(){
//    var far =document.querySelector("#mycls");
//    far.classList.remove("para");
// }



// document.querySelector("button").addEventListener("click",function(){
//    alert("hello");
// })






// var far =document.querySelector("Button");

// far.addEventListener("mouseover",function(){

//    far.classList.add("para");
// });

// far.addEventListener("mouseout",function(){
//    far.classList.remove("para");
// });



for(var a=0; a<10; a++){
   document.querySelectorAll(".bt")[a].addEventListener("click",function(){
      var text = this.innerHTML;
      console.log(text);

      switch(text){
         case "AC1":
            var audio = new Audio("1.wav");
            audio.play();
            break;


            case "AB1":
               var audio = new Audio("3.wav");
               audio.play();
               break;

               case "PH1":
                  var audio = new Audio("4.wav");
                  audio.play();
                  break;

                  case "DS1":
                     var audio = new Audio("5.wav");
                     audio.play();
                     break;

                     case "AD1":
                        var audio = new Audio("6.wav");
                        audio.play();
                        break;

                        case "KV1":
                           var audio = new Audio("7.wav");
                           audio.play();
                           break;

                           case "HK1":
                              var audio = new Audio("11.wav");
                              audio.play();
                              break;
                              
                              case "BA1":
                                 var audio = new Audio("2.wav");
                                 audio.play();
                                 break;

                              case "NP2":
                                 var audio = new Audio("9.wav");
                                 audio.play();
                                 break;

                                 case "AV1":
                                    var audio = new Audio("10.wav");
                                    audio.play();
                                    break;
   

                                 
      }

   });
}