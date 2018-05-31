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

  var trainName = "";
  var trainDestination = "";
  var trainFrequency;
  var trainArrival;
  var trainTime;

  $('.submitBtn').on("click", function (event) {//after submit push values to server
    var trainName = $('#trainName').val().trim();
    var trainDestination = $('#trainDestination').val().trim();
    var trainFrequency = $('#trainFrequency').val().trim();
    var trainArrival = $('#trainArrival').val().trim();
    var trainTime = $('#trainTime').val().trim;

    database.ref().push({
      "trainName": trainName,
      "trainDestination": trainDestination,
      "trainFrequency": trainFrequency,
      "trainArrival": trainArrival,
      "trainTime" : trainName
      //"dateAdded": firebase.database.ServerValue.TIMESTAMP
  });

});

database.ref().orderByChild("trains-names").limitToLast(10).on("child_added", function (childSnapshot) {
  trainName = childSnapshot.val().trainName;
  trainDestination = childSnapshot.val().trainDestination;
  trainFrequency = childSnapshot.val().trainFrequency;
  trainArrival = childSnapshot.val().trainArrival;
  trainName = childSnapshot.val().trainTime;

  var trainAway = moment.unix(trainTime).format("number");

  var trainTime = moment().diff(moment(trainTime, "X"), "train-away");
  console.log(trainTime);

  var trainName = trainFrequency * trainArrival;
  console.log(trainAway);

  var trainNameTd = $('<td id="name-display">').text(trainName);
  var trainDestinationTd = $('<td id="name-display">').text(trainDestination);
  var trainFrequencyTd = $('<td id="number-display">').text(trainFrequency);
  var trainArrivalTd = $('<td id="number-display">').text(trainArrival);
  var trainTime = $('<td id="number-display">').text(trainNameTd);
 


  var tRow = $('<tr>');
  tRow.append(trainNameTd).append(trainDestionationTd).append(trainFrequencyTd).append(trainArrivalTd).append(trainTime);

 $('.tbody').first().append(tRow);

 //database.ref().on("value", function(snapshot){
   // var trainName = snapshot.val().trainName;
    //var trainDestination = snapshot.val().trainDestination;
    //var trainFrequency = snapshot.val().trainFrequency;
    //var trainArrival = snapshot.val().trainArrival;
    //var trainTime = snapshot.val().trainTime;
    
    //}
    //$("#trainName").text(trainName);
    //$("#trainDestination").text(trainDestination);
    //$("trainFrequency").text(trainFrequency);
    //$("trainArrival").text(trainArrival);
    //$("trainTime").text(trainTime);