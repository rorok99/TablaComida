const precios = [12, 23, 7, 19, 10];

$(() => {
  let isLoggedIn = false;
  const $element = $("#table tbody tr");
  const $buy = $("#buy");
  $element.on("click", function (e) {
    $(this).toggleClass("btn-secondary");
    let sm = 0;
    for (let i = 0; i < $element.length; i++) {
      if ($($element[i]).hasClass("btn-secondary"))
        sm += precios[i];
    }
    $buy.find("span").text(sm);
  });
  $buy.on("click", function (e) {
    console.log($buy.find("span").text());
  });

  $("#submit").on("click", function (e) {
    let passValue = $("#password").val();
    let repeatPassValue = $("#repeatpassword").val();
    let numOfChars = (passValue.length >= 8);
    let isThereAnUpperChar = false;
    for (let i = 0; i < passValue.length; i++)
      if (passValue[i] == passValue[i].toUpperCase()) {
        isThereAnUpperChar = true;
        console.log(passValue[i]);
        break;
      }
    if (numOfChars && isThereAnUpperChar && passValue == repeatPassValue) {
      isLoggedIn = true;
    }
  });

});