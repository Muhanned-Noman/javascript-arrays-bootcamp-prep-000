var chocolateBars = ["snickers","hundred grand","kitkat","skittles"]

function addElementToBeginningOfArray(array,elment){
  var otherArray = new Array();
  otherArray = [elment,...array]
  return(otherArray)
}

function destructivelyAddElementToBeginningOfArray(array,elment){
  array.unshift(elment)
  return(array)
}

function addElementToEndOfArray(array,elment){
    var otherArray = new Array();
  otherArray = [...array,elment]
  return(otherArray)
}

function destructivelyAddElementToEndOfArray(array,elment){
  array.push(elment)
  return(array)
}