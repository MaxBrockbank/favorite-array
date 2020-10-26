$(document).ready(function () {
  $("#userFavorites").submit(function (event) {
    event.preventDefault();
    const favorite1Input = $("input#favorite1").val();
    const favorite2Input = $("input#favorite2").val();
    const favorite3Input = $("input#favorite3").val();
    const favorite4Input = $("input#favorite4").val();

    let favoriteArray = [favorite1Input, favorite2Input, favorite3Input, favorite4Input];
    console.log(favoriteArray);


    let firstSecondThird = favoriteArray.slice(0, 3);

    const secondArray = [];
    secondArray.push(favoriteArray[1]);
    secondArray.push(favoriteArray[0]);
    secondArray.push(favoriteArray[2]);

    $("li#1").text(secondArray[0]);
    $("li#2").text(secondArray[1]);
    $("li#3").text(secondArray[2]);

  });
});