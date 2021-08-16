export const onInitialClientRender = () => {
  document.getElementById("___gatsby").style.display = "block";
  setTimeout(function () {
    document.getElementById("___loader").style.display = "none";
  }, 200);
};
