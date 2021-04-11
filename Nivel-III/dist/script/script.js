const url = "http://api.icndb.com/jokes/random";

$(document).ready(function () {
  $("#btn").click(function (e) {
    e.preventDefault();
    $("#joke").slideUp();

    fetch(url)
      .then((response) => response.json())
      .then((response) => {
        const joke = response.value.joke;
        $("#jokeBox").removeClass("jokeBox__color");
        $("#jokeBox").html(`
        <div id="spiner" class="spinner-border text-info" role="status"></div>
        `);
        setTimeout(() => {
          $("#jokeBox").html("");
          $("#jokeBox").addClass("jokeBox__color");
          $("#jokeBox").html(`<p id="joke" class="joke">${joke}</p>`);
        }, 1000);
      });
  });
});
