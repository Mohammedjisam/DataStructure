// function reverse(str){
//     if(str==""||str.length==1){
//         return str
//     }
//     return reverse(str.substring(1))+str.charAt(0)
// }
// let str="jisam"
// console.log(reverse(str))


function reverseSubstring(str,sub1,sub2){

    let i1=str.indexOf(sub1)
    let i2=str.indexOf(sub2)

    if(i1===-1||i2===-1){
        return str
    }
    let revSub1=sub1.split("").reverse().join("")
    let revSub2=sub2.split("").reverse().join("")

    let  before=str.substring(0,i1);
    let between=str.substring(i1+sub1.length,i2)
    let after=str.substring(i2+sub2.length)

    let reverseString=before+revSub1+between+revSub2+after;

    return reverseSubstring(reverseString,sub1,sub2)
}

const string="hello world"
const str1="hello"
const str2="world"

console.log(reverseSubstring(string,str1,str2))

