const precios = [12, 23, 7, 19, 10];

$(() => {
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

});