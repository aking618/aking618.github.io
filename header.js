fetch("assets/greeting.txt")
  .then((response) => response.text())
  .then((data) => {
    $("#header").text(data);
  });
