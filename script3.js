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
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  var randomn;
  $(document).ready(function(){
    var database = firebase.database();
    var slotnumber;
  
    database.ref().on("value", function(snap){

      slotnumber = snap.val().slotnumber;
      if (slotnumber == 1) {
        uid1 = snap.val().uid1;
        $("#uid").text(uid1);
        otp1 = snap.val().otp1;
        $("#otp").text(otp1);
      }
       else if (slotnumber == 2) {
        uid2 = snap.val().uid2;
        $("#uid").text(uid2);
        otp2 = snap.val().otp2;
        $("#otp").text(otp2);
      }
       else if (slotnumber == 3) {
        uid3 = snap.val().uid3;
        $("#uid").text(uid3);
        otp3 = snap.val().otp3;
        $("#otp").text(otp3);
      }
       else if (slotnumber == 4) {
        uid4 = snap.val().uid4;
        $("#uid").text(uid4);
        otp4 = snap.val().otp4;
        $("#otp").text(otp4);
      }
       
       
    });
  });