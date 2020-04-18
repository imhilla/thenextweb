window.onscroll = function() {
    fixHeader();
}
function fixHeader() {
  if(document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
      document.querySelector("header") = "header";
  } else {
      document.querySelector("header") = "";
  }
}