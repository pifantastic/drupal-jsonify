# Usage

  Drupal.behaviors.myBehavior = function() {
    // Retrieve a node synchronously
    var node = Drupal.jsonify.load('node', 1);
    console.log(node);
    
    // Retrieve a node asynchronously
    var node = Drupal.jsonify.load('node', 1, function(node) {
      console.log(node);
    });
    
    // Retrieve a comment synchronously
    var comment = Drupal.jsonify.load('comment', 1);
    console.log(comment);
    
    // Retrieve a comment asynchronously
    var comment = Drupal.jsonify.load('comment', 1, function(comment) {
      console.log(comment);
    });
  };