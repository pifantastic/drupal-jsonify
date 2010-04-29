(function($, Drupal) {

Drupal.jsonify = {

  /**
   * Performs and AJAX GET request on the URL returning
   * the results as JSON.  If a callback is supplied, the 
   * request is asynchronous. If not, the request is synchronous.
   */
  get: function(url, callback) {
    if (typeof callback == "function") {
      $.getJSON(url, callback);
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
          result = data;
        },
        dataType: "json"
      });
      
      return result;
    }
  }, 
  
  /**
   * Retrieve a node object
   */
  node: function(opts, callback) {
    // Allow function to be called with just the nid
    if (typeof opts != "object") {
      opts = {nid: opts};
    }
    
    // Override defaults
    var options = $.extend({ nid: 0 }, opts);
    
    var url = Drupal.settings.basePath + "jsonify/node/" + options.nid;
    
    return Drupal.jsonify.get(url, callback);
  },
  
  /**
   * Retrieve a comment object.
   */
  comment: function(opts, callback) {
    // Allow function to be called with just the nid
    if (typeof opts != "object") {
      opts = {cid: opts};
    }
    
    // Override defaults
    var options = $.extend({ cid: 0 }, opts);
    
    var url = Drupal.settings.basePath + "jsonify/comment/" + options.cid;
    
    return Drupal.jsonify.get(url, callback);
  }
  
};

})(jQuery, Drupal);

