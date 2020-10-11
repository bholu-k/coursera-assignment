(function (window) {
  var higreeter={};
  higreeter.greet="Hello ";
  higreeter.higreet= function(name) {
    console.log(higreeter.greet + name);
  }

  window.higreeter=higreeter;

})(window);