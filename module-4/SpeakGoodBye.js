(function (window) {
  var byegreeter={};
  byegreeter.greet="Goodbye ";
  byegreeter.byegreet= function(name) {
    console.log(byegreeter.greet + name);
  }

  window.byegreeter=byegreeter;

})(window);