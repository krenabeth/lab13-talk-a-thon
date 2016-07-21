// create a new angular module
var app = angular.module('talk', []);

// create a controller to define scope and handle logic
app.controller('talkCtrl', function($scope){
  // controller logic
    // create 4 arrays (word, word_dec, phrase, phrase_dec)
      $scope.words = ['Mom!', 'Maaahhhhuuuuummm', 'dinosaurs', 'monster trucks', 'chicken nuggets'];
      $scope.words_dec = ['red', 'orange', 'yellow', 'green', 'blue']; // these will become SCSS classes
      $scope.phrase = ['he hit me', 'are we there yet?', "where's my tablet?!", "i'm hungry"];
      $scope.phrase_dec = ['red', 'orange', 'yellow', 'green', 'blue'];

      var chatterArray = [];

    // create scope function to push words to div

      $scope.addWords = function(){

        var randomIndex;
        // check length of array
        var arrLength = $scope.words.length;
        // pick a random number between 0 and length of array and store in var

          function getRandomInt(min, max){
            randomIndex = Math.floor(Math.random() * (max - min)) + min;
          }
        getRandomInt(0, arrLength);
        console.log('random index is: ' + randomIndex);
        // append that arrayWords indexOf[thatVariable] to the div
        chatterArray.push($scope.words[randomIndex]);
        console.log(chatterArray);
        // need to properly define scope.chatter so it shows up on html
        // $scope.chatter = 
      };


    // create scope function to push words_dec to div

    // create scope function to push phrases to div

    // create scope function to push phrases to div
});
