var main = function() {
  "use strict";
  document.getElementById("searchbox").focus();
  $('.searchbox').keyup(function() {
    var txt = document.getElementById("searchbox").value.replace(/\s/g, "");;
    $('.content').html('<iframe height="100%" width="100%" frameborder="0" src="contents/' + txt + '.html"></iframe>');
  });
};

$(document).ready(main);