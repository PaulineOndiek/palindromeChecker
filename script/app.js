console.log("Hello World")
const palindromeChecker=document.getElementById("checker")
console.log(palindromeChecker)
const submit=document.getElementById("check")
console.log(submit)
palindromeChecker.addEventListener("keyup", ()=>{
let textInput=palindromeChecker.value
})

// const checkPalindrome=()=>{

// }
submit.addEventListener("click", ()=>{
    let palindrome=textInput.split("").reverse().join()
    if (textInput===palindrome){
        console.log("This is a palindrome")
    }
    else{
        console.log("This is not a palindrome")
    }
})

