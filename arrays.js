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

function accessElementInArray(array,index){
  return(array[index])
}

function destructivelyRemoveElementFromBeginningOfArray(array){
  
  return(array.shift())
}

function removeElementFromBeginningOfArray(array){
  return(array.slice(1))
}

function destructivelyRemoveElementFromEndOfArray(array){
  return(array.pop())
}

function removeElementFromEndOfArray(){
  return(array.slice(0, array.length - 1))
}