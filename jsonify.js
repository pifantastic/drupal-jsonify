(function($, Drupal) {

Drupal.jsonify = {

  /**
   * Performs an AJAX GET request on the URL returning
   * the results as JSON.  If a callback is supplied, the 
   * request is asynchronous. If not, the request is synchronous.
   */
  get: function(url, callback) {
    if (typeof callback == "function") {
      $.ajax({
        type: "GET",
        url: url,
        success: function(data) {
          callback(data);
        },
        error: function() {
          callback(false);
        },
        dataType: "json"
      });
    }
    else {
      var result;
      
      $.ajax({
        async: false,
        type: "GET",
        url: url,
        success: function(data) {
          result = data;
        },
        error: function(data) {
          result = false;
        },
        dataType: "json"
      });
      
      return result;
    }
  },
  
  load: function(type, id, callback) {
    var urls = {
      node: Drupal.settings.basePath + "jsonify/node/" + id,
      comment: Drupal.settings.basePath + "jsonify/comment/" + id
    };
    
    return !(type in urls) || Drupal.jsonify.get(urls[type], callback);
  }
};

})(jQuery, Drupal);
