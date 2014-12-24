var size = 8;
var output = "";
var hash = true;

for (var row = 0; row<size; row++) {
  hash = row % 2 === 0;
  for (var col = 0; col<size; col++) {
    if (hash) {
      output += "#";
    } else {
      output += " ";
    }
    hash = !hash;
  }
  output += "\n";
}

console.log(output);
