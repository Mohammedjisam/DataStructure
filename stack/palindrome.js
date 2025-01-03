// function isPalindrome(str){
//     const stack=[]
//     for(let char of str){
//         stack.push(char)
//     }
//     for(let char of str){
//         if(char !== stack.pop()){
//             return false
//         }
//     }
//     return true
// }

// console.log(isPalindrome("jisamasij"))

function isPalindrome(str){
    const stack=[]
    for(let char of str){
        stack.push(char)
    }
    for(let char of str){
        if(char!== stack.pop()){
            return false
    }
}
    return true
}
console.log(isPalindrome("jidsm"))
console.log(isPalindrome("malayalam"))