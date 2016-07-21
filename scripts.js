// create a new angular module
var app = angular.module('talk', []);

// create a controller to define scope and handle logic
app.controller('talkCtrl', function($scope){
  // controller logic
    // create 4 arrays (word, word_dec, phrase, phrase_dec)
      $scope.words = ['Mom!', 'Maaahhhhuuuuummm', 'dinosaurs', 'monster trucks', 'chicken nuggets'];
      $scope.words_dec = ['red', 'orange', 'yellow', 'green', 'blue']; // these will become SCSS classes
      $scope.phrase = ['he hit me', 'are we there yet?', "where's my tablet?!", "i'm hungry"];
      // just use words_dec to apply classes to phrase
      $scope.chatterArray = [];

    // create scope function to push words to div

      $scope.addWords = function(){
        // take a word from the scope.words array
        var wordObj = {};
        wordObj.name = $scope.words[Math.floor(Math.random() * $scope.words.length)];
        wordObj.decoration = '';
        $scope.chatterArray.push(wordObj);
      };

      $scope.addWordsDec = function (){
        var wordObj = {};
        wordObj.name = $scope.words[Math.floor(Math.random() * $scope.words.length)];
        wordObj.decoration = $scope.words_dec[Math.floor(Math.random() * $scope.words_dec.length)];
        $scope.chatterArray.push(wordObj);
        console.log(wordObj);
      }

    // create scope function to push words_dec to div

    // create scope function to push phrases to div

    // create scope function to push phrases to div
});
