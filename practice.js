var firebaseConfig = {
    apiKey: "AIzaSyCWchHggxoIuAVkKL2u13TYdCpUqdvcRlY",
    authDomain: "kwitter-8a491.firebaseapp.com",
    databaseURL: "https://kwitter-8a491-default-rtdb.firebaseio.com",
    projectId: "kwitter-8a491",
    storageBucket: "kwitter-8a491.appspot.com",
    messagingSenderId: "54170437559",
    appId: "1:54170437559:web:a6bed97e7acd59a28c4a32"
  };
  
 firebase.initializeApp(firebaseConfig);


 function send(){
     var username=document.getElementById("name_input").value ;
     localStorage.setItem("name", username);
     firebase.database().ref("/").child(username).update({

        purpose:"adding username"
     });
 }