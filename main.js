const visibility = () => {
  document.getElementById("btn").style.display = "none";
  document.getElementById("btn-outline").style.visibility = "visible";
  document.getElementById("orange").style.visibility = "visible";
  document.getElementById("stock").style.visibility = "hidden";
  document.getElementById("green").style.background = "#EE9310";
};

const changeColor = () => {
  document.getElementById("green").style.background = "#b12704";
  document.getElementById("orange").style.visibility = "hidden";
  document.getElementById("red").style.visibility = "visible";
};
