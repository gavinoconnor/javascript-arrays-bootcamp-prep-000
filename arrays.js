var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']

var addElementToBeginningOfArray = function(chocolateBars, newBar) {
  return [newBar, ...chocolateBars];
}

var destructivelyAddElementToBeginningOfArray = function(chocolateBars, newBar) {
  chocolateBars.unshift(newBar);
  return chocolateBars;
}

var addElementToEndOfArray = function(chocolateBars, newBar) {
  return [...chocolateBars, newBar];
}

var destructivelyAddElementToEndOfArray = function(chocolateBars, newBar) {
  return chocolateBars.push(newBar)
}

var accessElementInArray = function() {

}

var destructivelyRemoveElementFromBeginningOfArray = function() {

}

var removeElementFromBeginningOfArray = function() {

}

var destructivelyRemoveElementFromEndOfArray = function() {

}

var removeElementFromEndOfArray = function() {

}
