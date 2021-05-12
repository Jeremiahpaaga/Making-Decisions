function updateGrade (){
    let highSchoolGrade = 11;
    let yourGrade;

    switch(highSchoolGrade){
    case 9:
    yourGrade = "Freshman";
    break;
    case 10:
    yourGrade = "Sophmore";
    break;
    case 11:
    yourGrade = "Junior";
    break;
    case 12:
    yourGrade = "Senior"
    break;
    default:
    yourGrade = "Invalid"
    
}
}

updateGrade(yourGrade);
alert(yourGrade);

function name(){
let firstName = "John";
//const name = firstName === "John" ? document.getElementById("demo").innerHTML = "Hello John!": document.getElementById("demo").innerHTML = "Hello Human!";
document.getElementById('demo').innerHTML = firstName === "John" ? "Hello John!" : "Hello Human!"

}

name()