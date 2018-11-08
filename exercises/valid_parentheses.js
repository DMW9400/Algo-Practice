// Write a function called that takes a string of parentheses, and determines if the order of the parentheses is valid. The function should return true if the string is valid, and false if it's invalid.

function validParentheses(parens){
  let leftParen = 0
  let rightParen = 0


  if (parens[0]== ')' || parens[parens.length-1] == '(' ) { return false}

  for (let char of parens){
    char == '(' ? leftParen++ : console.log()
    char == ')' ? rightParen++ :console.log()
  }

  if (leftParen !== rightParen){ return false }

  return true

}
