function openLinks(className, classIndex, url) {
  document
    .getElementsByClassName(className)
    [classIndex].addEventListener("click", () => {
      window.open(url);
    });
}

openLinks("fa-youtube", 0, "https://www.youtube.com/watch?v=MKgDQjZwI2o");
openLinks("fa-youtube", 1, "https://www.youtube.com/watch?v=wtqbOFYivxw");
openLinks("fa-youtube", 2, "https://www.youtube.com/watch?v=H5tuwAO-_Kg");

openLinks(
  "article",
  0,
  "https://javascript.plainenglish.io/build-a-real-time-weather-app-with-javascript-and-openweathermap-api-bcf8111df1fe"
);
openLinks(
  "article",
  1,
  "https://www.geeksforgeeks.org/how-to-create-a-simple-javascript-quiz/"
);
openLinks(
  "article",
  2,
  "https://codingartistweb.com/2023/04/marvel-api-app-with-javascript/"
);
