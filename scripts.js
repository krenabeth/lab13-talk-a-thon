// create a new angular module
var app = angular.module('talk', []);

// create a controller to define scope and handle logic
app.controller('talkCtrl', function($){
  // controller logic
    // create 4 arrays (word, word_dec, phrase, phrase_dec)
      $scope.words = ['Mom!', 'Maaahhhhuuuuummm', 'dinosaurs', 'monster trucks', 'chicken nuggets'];
      $scope.words_dec = ['red', 'orange', 'yellow', 'green', 'blue']; // these will become SCSS classes
      $scope.phrase = ['he hit me', 'are we there yet?', "where's my tablet?!", "i'm hungry"];
      $scope.phrase_dec = ['red', 'orange', 'yellow', 'green', 'blue'];


    // create scope function to push words to div

      $scope.addWords = function(){
        // check length of array
        // pick a random number between 0 and length of array -1 and store in var
        // append that arrayWords indexOf[thatVariable] to the div
      };


    // create scope function to push words_dec to div

    // create scope function to push phrases to div

    // create scope function to push phrases to div
});
