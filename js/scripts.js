var turn = 0;
var comparisonArray = [];
var clickOne;
var clickTwo;

$(document).ready(function() {
  var box1 = $("input:radio[name=cell1]:checked").val();
  var box2 = $("input:radio[name=cell2]:checked").val();
  var box3 = $("input:radio[name=cell3]:checked").val();
  var box4 = $("input:radio[name=cell4]:checked").val();
  var box5 = $("input:radio[name=cell5]:checked").val();
  var box6 = $("input:radio[name=cell6]:checked").val();
  var boxes = [box1, box2, box3, box4, box5, box6];


  $(".table").click(function() {  //the goal of this function is to count the length of all the strings in the populated array, and then see if there are 2 numbers that are not 'undefined'
    if (boxes.% 1 === 0) {

    }
  })

  $("#end-turn").click(function() {
    // var box1 = $("input:radio[name=cell1]:checked").val();
    // var box2 = $("input:radio[name=cell2]:checked").val();
    // var box3 = $("input:radio[name=cell3]:checked").val();
    // var box4 = $("input:radio[name=cell4]:checked").val();
    // var box5 = $("input:radio[name=cell5]:checked").val();
    // var box6 = $("input:radio[name=cell6]:checked").val();
    // var boxes = [box1, box2, box3, box4, box5, box6];  //captured in lines 7-13
    // $("input[name=cell1]").attr("checked", false); supposed to reset the clicked function in the radio buttons
    var clickValue;
    var sortArray;

    if (turn === 0) {
      turn +=1;

    } else {
        turn -= 1;
        clickValue = boxes.forEach(function(element) {
          comparisonArray.push(element)
        });
        sortArray = comparisonArray.sort();


        if (sortArray[0] === sortArray[1]) {
        alert("match. now jimmy needs to disable the buttons");
        comparisonArray = [];
        //need to add code so that the radio buttons clear their values
      } else {
        alert("no match. the cards need to flip back over now!");
        comparisonArray = [];
        //need to add code so that the radio buttons clear their values
      }
    }
    console.log(turn);
    console.log(sortArray);
    // if (turn === 1) {  //this is an earlier version of the click function to push the value of the clicked cell into an array
    //   boxes.forEach(function(element) {
    //     if (element) {
    //       turn1Array.push(element)
    //     }
    //   });
    //   turn +=1;
    // // } else if (turn === 2){
    // //   boxes.forEach(function(element) {
    // //     turn2Array.push(element)
    // //   });
    // // }
    // // alert(turn1Array);
    // }
  });
});
/* this is to try and refactor and make this more scalable, not sure if it's even possible
var cells = ["cell1", "cell2", "cell3", "cell4", "cell5", "cell6"]
var value = function(cellName) {
$("input:radio[name=" + cellName + "]:checked").val();
};
console.log(value(cells[0]));
*/

//below is what kristi and i worked on 4/10
// var pair = [];
// function compareCards() {
//   for(var i=0; i<=1; i++){
//     pair.push("Y");
//   }
//   if (pair [0] == pair [1]){
//     // alert("matched");
//   } else {
//     // alert("mismatched");
//   }
// }
//
// $(document).ready(function() {
//   $(".table").click(compareCards);
//   $("#end-turn").click(function() {
//     console.log(pair);
//   })
// });
