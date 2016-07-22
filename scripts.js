// create a new angular module
var app = angular.module('talk', []);
// create a controller to define scope and handle logic
app.controller('talkCtrl', function($scope){
  // controller logic
    // create 4 arrays (word, word_dec, phrase, phrase_dec)
      $scope.words = ['Mom!', 'Maaahhhhuuuuummm', 'dinosaurs', 'monster trucks', 'chicken nuggets', 'Nerf', 'fruit loops'];
      $scope.words_dec = ['red', 'orange', 'yellow', 'green', 'blue']; // these will become SCSS classes
      $scope.phrase = ['he hit me', 'are we there yet?', "where's my tablet?!", "I'm hungry", "you're the meanest mom on earth", "I'll call 9-1-1 if you don't make me waffles for dinner", "You owe me 95 dollars", "I'm climbing into the cabinet"];
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
    // create scope function to push words_dec to div
      $scope.addWordsDec = function (){
        var wordObj = {};
        wordObj.name = $scope.words[Math.floor(Math.random() * $scope.words.length)];
        wordObj.decoration = $scope.words_dec[Math.floor(Math.random() * $scope.words_dec.length)];
        $scope.chatterArray.push(wordObj);
      }
   // create scope function to push phrases to div
    $scope.addPhrases = function(){
        // take a word from the scope.words array
        var wordObj = {};
        wordObj.name = $scope.phrase[Math.floor(Math.random() * $scope.phrase.length)];
        wordObj.decoration = '';
        $scope.chatterArray.push(wordObj);
      };
    // create scope function to push phrases_dec to div
    $scope.addPhrasesDec = function (){
        var wordObj = {};
        wordObj.name = $scope.phrase[Math.floor(Math.random() * $scope.phrase.length)];
        wordObj.decoration = $scope.words_dec[Math.floor(Math.random() * $scope.words_dec.length)];
        $scope.chatterArray.push(wordObj);
      }


// interval, not are working, but not interfering with the rest of the page
app.controller('intervalCtrl', function($scope, $interval) {
        $scope.chatterArray = [];
        $scope.stop = 50;  // not sure what the value should be here.
// does reset need a value?

        var stop;
        $scope.talk = function() {
          console.log('talk');
          // Don't start a new talk if we are already talking
          if ( angular.isDefined(stop) ) return;

          stop = $interval(function() {
            if ($scope.chatterArray.length > -1) {
              $scope.addWords();
            } else {
              $scope.stop();
            }
        });
        };

        $scope.stop = function() {
          if (angular.isDefined(stop)) {
            $interval.cancel(stop);
            stop = undefined;
            console.log('stop');
          }
        };

        $scope.reset = function() {
          $scope.chatterArray = [];
          console.log('reset');
        };

});

});
