$(document).ready(function () {
  $("#userFavorites").submit(function (event) {
    event.preventDefault();
    const favorite1Input = $("input#favorite1").val();
    const favorite2Input = $("input#favorite2").val();
    const favorite3Input = $("input#favorite3").val();
    const favorite4Input = $("input#favorite4").val();

    // $(".favorite1").text(favorite1Input);
    // $(".favorite2").text(favorite2Input);
    // $(".favorite3").text(favorite3Input);
    // $(".favorite4").text(favorite4Input);

    let favoriteArray = [favorite1Input, favorite2Input, favorite3Input, favorite4Input];
    console.log(favoriteArray);


    let secondFirstThird = favoriteArray.slice(0, 3);

  });
});