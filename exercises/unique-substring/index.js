// write a function to return the longest 'sub' string where no
// character is repeated
//

let var1 = 'abcsaebsefetrz'

function uniqString(string_arg){

    let subStr = []

    for (let i=0;i<string_arg.length;i++){
      let char = string_arg[i]
      let uniqArr = []
      let uniqStr = char
      uniqArr.push(char)
      let remainStr = string_arg.slice(i+1,string_arg.length)

      for (let z=0;z<remainStr.length;z++){
        let subChar = remainStr[z]
        if (!uniqArr.includes(subChar)){
            uniqArr.push(subChar)
            uniqStr = uniqStr + subChar
        } else {
          subStr.push(uniqStr)
          uniqStr = ''
          console.log('arr before:', uniqArr)
          uniqArr = []
           console.log('arr after:', uniqArr)
        }
      }
    }

    subStr.sort(function(a,b){
      return b.length - a.length
    })

    return subStr[0]
}

uniqString(var1)
