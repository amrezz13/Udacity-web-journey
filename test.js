/*
 * Programming Quiz: Writing a For...of Loop (1-4)
 */

const days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];


function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }
  
// your code goes here
for (let day of days){
    console.log(capitalizeFirstLetter(day));
}