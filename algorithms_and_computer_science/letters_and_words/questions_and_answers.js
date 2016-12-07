function getAnswer(entry) {
  // Put your code here.
  var start = entry.indexOf(':');
  return entry.slice(start+2, entry.length);
}


if (!module.parent) {
  console.log(getAnswer('Name: Zee') === 'Zee');
  console.log(getAnswer('Favorite Color: Orange') === 'Orange');
  console.log(getAnswer('Favorite Programming Language: Clojure') === 'Clojure');
}
