var languagesArrayCreation = function () {
  var languages = ['Html', 'CSS', 'Java', 'PHP'];
  return languages;
}


var numbersArrayCreation = function () {
    return numbers = [0, 1, 2, 3, 4, 5];
}

var ElementReplacement = function (languages) {
  console.log(languages);
  var index = languages.indexOf("Java");
  if (index !== -1) {
    languages[index] = "Javascript";
      return languages;
    //ou encore languages[2] = 'Javascript';
  }

}

var AddElementToLanguagesArray = function (languages) {
  languages.push("Ruby","Python");
  return languages;
}

var AddElementToNumbersArray = function (numbers) {
  numbers.unshift(-2,-1);
  return numbers;
}

var deleteArrayFirstElement = function (languages) {
  languages.splice(0,1)
  return languages;
}

var deleteArrayLastElement = function (languages) {
  languages.splice(4,1);
  return languages;
}

var stringToArray = function (socialMediaInString) {
  var array = socialMediaInString.split(',');
  return array;
}

var arrayToString = function (languages) {
  return  languages.toString();
  //better si on utilise languages.join(',') join prend chaque élément et le colle
  //to string peut être utiliser sur un nombre
}

var arraySort = function (socialMedia) {

  return socialMedia.sort();
}

var arrayInvert = function (languages){


  return languages.reverse();
  // va juste inverser le tableau sans trier quoi que ce soit.
}
