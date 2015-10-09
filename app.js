var main = function () {
  "use strict";
  document.getElementById("searchbox").focus();
  $('.word').click(function () {
    var txt = $(this).text().replace(/\s/g, "");
    $('.word').removeClass('current');
    $(this).addClass('current');
    $('.content').html('<iframe height="100%" width="100%" frameborder="0" src="contents/' + txt + '.html"></iframe>');
  });
};

$(document).ready(main);