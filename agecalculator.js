//Age calculator

// var present = new Date().getTime()
// var dob = new Date(prompt("write your DOB")).getTime()
// var age = present - dob
// var formula = age / (1000 * 60 * 60 * 24 * 365)
// alert (formula.toFixed(0))

// Password Generator in javascript

// function getpassword (length)
// {
//     const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890-+[]{}\/<>:;!@#$%^&*()_"
//     var password = " "; 
//     for ( let i=0 ; i < characters.length ; i++)
//           {
//             const randomIndex = Math.floor(Math.random() * characters.length)
//             password += charcters[randomIndex]
//           }
//     const password = 6
//     const password = getpassword(password.length)
//     document.write(password)
// }

let str = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!@#$%^&*()_+-[]'
let pass = ''
 
for ( let i=0 ; i < str.length ; i++)
{
   pass += str[ Math.floor(Math.random() * str.length)]
   
}
document.write(pass)