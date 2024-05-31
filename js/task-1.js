function slugify(title) {
  //     Значенням параметра title будуть рядки, слова яких розділені лише пробілами.
  // Усі символи slug повинні бути в нижньому регістрі.
  // Усі слова slug повинні бути розділені тире.
  const titleSlag = title.toLowerCase();
  const slag = titleSlag.split(" ").join("-");
  return slag;
}

console.log(slugify("Arrays for begginers"));
console.log(slugify("English for developer"));
console.log(slugify("Ten secrets of JavaScript"));
console.log(slugify("How to become a JUNIOR developer in TWO WEEKS"));
