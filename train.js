  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyAfRrrR-dBBF5ukeoVwlwGsyWeaClDe630",
    authDomain: "test-d26a5.firebaseapp.com",
    databaseURL: "https://test-d26a5.firebaseio.com",
    projectId: "test-d26a5",
    storageBucket: "test-d26a5.appspot.com",
    messagingSenderId: "666442938453"
  };
  firebase.initializeApp(config);

  var database = firebase.database();

  database.ref().on("value", function(snapshot){
    var trainName = snapshot.val().trainName;
    var trainDestination = snapshot.val().trainDestination;
    var trainFrequency = snapshot.val().trainFrequency;
    var trainArrival = snapshot.val().trainArrival;
    var trainTime = snapshot.val().trainTime;
    
    }
    $("#trainName").text(trainName);
    $("#trainDestination").text(trainDestination);
    $("trainFrequency").text(trainFrequency);
    $("trainArrival").text(trainArrival);
    $("trainTime").text(trainTime);
    