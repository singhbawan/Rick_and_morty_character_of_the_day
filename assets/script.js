$("#randomize").click(updateCharacter);

function updateCharacter() {
  console.log("clicked");
  var randnumber = Math.floor(Math.random() * 826);
  var requestUrl = `https://rickandmortyapi.com/api/character/${randnumber}`;
  fetch(requestUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      $("#charName").text(data.name);
      $("#status").text(`Status: ${data.status}`);
      $("#charImage").attr("alt", `image of ${data.name}`);
      $("#charImage").attr("src", data.image);
    });
}

updateCharacter();
