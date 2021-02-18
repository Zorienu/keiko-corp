const addStyleSheet = (src) => {
  if (document.createStyleSheet) {
    document.createStyleSheet(src);
  } else {
    const styleSheet = document.createElement("link");
    styleSheet.href = src;
    styleSheet.type = "text/css";
    styleSheet.rel = "stylesheet";
    document.getElementsByTagName("head")[0].appendChild(styleSheet);
  }
};

window.onload = () => {
  addStyleSheet("css/bootstrap.css");
  addStyleSheet("css/animate.css");
  addStyleSheet("css/owl.carousel.css");
  addStyleSheet("css/owl.transitions.css");
};
