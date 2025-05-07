// let value = number (prompt("enter you number"))
// let valueOne = number (prompt("enter your first number"))
// let ans = value + valueOne
// alert(ans)
// console.log(ans)




// let number = parseInt(prompt("enter a number"))
// if(number % 2 === 0){
//     alert(`${number} is an even number`)
// }else{
//     alert(`${number} is an odd number`)
// }


// let name = prompt("enter your name") 
// const myStory = `My name is ${name}, i am 56yrs old. i ${name}, promise to abide by the law and stay away from my child.`
// alert(myStory);


// const storeprompt = prompt("enter your name")
// alert(storeprompt)

// const userNumber = parseInt(prompt("enter a number"))
// if (userNumber > 0){
//      alert(`${userNumber} is a positive numer`)
// }else if(userNumber === 0){
//     alert(`${userNumber} is invalid`)
// }else if (isNaN )


const number = parseInt(prompt("enter a number"))
let userNumber =parseInt(prompt("enter a number"))
 
if (userNumber > number){
    alert(`${userNumber} is greater than ${number}`)
}else if(userNumber < number){
    alert(`${userNumber} is less than ${number}`)
}else if(userNumber === number){
    alert(`${userNumber} is equal to ${number}`)
}else if (isNan (userNumber) && isNan(number)){
    alert('this is not a number')
}




   

let grade = Number(prompt("enter your grade"))


if (grade > 100){
    alert("Impossible, You are not that smart.")
}else if ( grade >= 70){
    alert("A, You performed Excellently well.")
}else if(grade >= 60 ){
    alert("B, Brilliant keep pushing.")
}else if( grade >= 50){
    alert("C, You did well.")
}else if( grade >= 44 ){
    alert("D, You can do better.")
}else if( grade >= 40){
    alert("E, You didnt do well.")
}else if( grade >= 0 && grade <= 30){
    alert("F, You performed poorly")
}else if( grade < 0){
    alert("You are dumb!!!")
}else{
    alert('...........')
}
