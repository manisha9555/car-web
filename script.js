var firebaseConfig = {
    apiKey: "AIzaSyCtLv9WjKfJdOM6LQ-VBP9uOWCPdklBr0E",
    authDomain: "parkit-f33d5.firebaseapp.com",
    databaseURL: "https://parkit-f33d5-default-rtdb.firebaseio.com",
    projectId: "parkit-f33d5",
    storageBucket: "parkit-f33d5.appspot.com",
    messagingSenderId: "116374492230",
    appId: "1:116374492230:web:1e4dd0e5d69ab519b26647",
    measurementId: "G-8T7JPSE3ET"
  };
  
  // // Initialize Firebase
   firebase.initializeApp(firebaseConfig);
  //  var dbRef = firebase.database().ref("nodemcu1")
  //  dbRef.once("value",function(snapshot){
  //   var data = snapshot;
  //       console.log(data.val());
  //      console.log(data.val().slot1)
  // })
   $(document).ready(function(){
   var database = firebase.database();
   var p1,p2,p3,p4;
  
     database.ref().on("value", function(snap){
     p1 = snap.val().p1;
     if(p1 == 1){
       $(".slotstatus1").text("Available");
     } else {
        $(".slotstatus1").text("Not Available");
      }
      p2 = snap.val().p2;
      if(p2 == 1){
       $(".slotstatus2").text("Available");
       $(".slotstatus2").text("Not Available");
    }
     p3 = snap.val().p3;
      if(p3 == 1){
      $(".slotstatus3").text("Available");
    } else {
      $(".slotstatus3").text("Not Available");
    }
      p4 = snap.val().p4;
     if(p4 == 1){
       $(".slotstatus4").text("Available");
     } else {
       $(".slotstatus4").text("Not Available");
     }
    });
//});
$("#button1").click(function(){
  var firebaseRef = firebase.database().ref().child("slotnumber");
  if(p1 == 1){
    location.href = "map1.html";
    firebaseRef.set(1);
  } else {
    location.href = "#";
  }
});
$("#button2").click(function(){
  var firebaseRef = firebase.database().ref().child("slotnumber");
  if(p2 == 1){
    firebaseRef.set(2);
    location.href = "map1.html";
  } else {
    location.href = "#";
  }
});
$("#button3").click(function(){
  var firebaseRef = firebase.database().ref().child("slotnumber");
  if(p3 == 1){
    firebaseRef.set(3);
    location.href = "map1.html";
  } else {
    location.href = "#";
  }
});
$("#button4").click(function(){
  var firebaseRef = firebase.database().ref().child("slotnumber");
  if(p4 == 0){
    firebaseRef.set(4);
    location.href = "map1.html";
  } else {
    location.href = "#";
  }
});
// $("#button5").click(function(){
//   var firebaseRef = firebase.database().ref().child("slotnumber");
//   if(p5 == 1){
//     firebaseRef.set(5);
//     location.href = "map1.html";
//   } else {
//     location.href = "#";
//   }
// });
// $("#button6").click(function(){
//   var firebaseRef = firebase.database().ref().child("slotnumber");
//   if(p6 == 1){
//     firebaseRef.set(6);
//     location.href = "map1.html";
//   } else {
//     location.href = "#";
//   }
// });
    
});