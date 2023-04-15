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
   let slots
   var dbRef = firebase.database().ref("nodemcu1")
   setInterval(() => {
    
     dbRef.once("value",function(snapshot){
       var data = snapshot;
       slots = data.val();
      //  console.log(data.val());
      //  console.log(data.val().slot1)
      })
      console.log(slots)
      
    }, 1000);

