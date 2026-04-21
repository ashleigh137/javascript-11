var student={"name":"ashleigh","age":14} //student is the object
document.write(student+"<br>")
document.write(student.name+"<br>")

//lets convert student object to JSON
var aaa=JSON.stringify(student);
document.write(aaa+"<br>"); //aaa is a JSON

//lets convert JSON (aaa) into object
var newstudentobj=JSON.parse(aaa);
document.write(newstudentobj+"<br>")

function Displayer(value)
{
    document.getElementById("result").innerHTML = value;
}
function Calculator(num1, num2, Callback)
{
    let sum = num1 + num2;
    Callback(sum);
}
Calculator(5, 5, Displayer)