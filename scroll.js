window.onscroll = function() {
    fixHeader();
}

function fixHeader() {
  if(document.body.scrollTop > 8 || document.documentElement.scrollTop > 8) {
      document.getElementById("header1").className = "scrolled";
      document.getElementById("header2").className = "initial"
  } else {
    document.getElementById("header1").className = "initial";
    document.getElementById("header2").className = "scrolled";
  }
}