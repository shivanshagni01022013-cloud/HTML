console.log("Hey, I am using datatypes")
confirm("Are you sure you want to continue")

let a = 3;
let b = 23.243;
let c = "Hello Server";
let d = true;
let e = null;
let f = undefined;
let xyz = 4;

console.log((typeof a), (typeof b), (typeof c), (typeof d), (typeof e), (typeof f))
console.log(a, b, c, d, e, f)

alert("ALERT! ALERT! Your pc is about to be shredded to atoms!!! Run fast!")

if(null == "object"){
    console.log("Null = Object")
}
else{
    console.log("False")
}

if(4 == xyz){
    console.log("4 = xyz")
}
else{
    console.log("False")
}

if("4" === xyz){
    console.log("Strict Checking -> '4' = xyz")
}
else{
    console.log("Strict Checking -> '4' != xyz")
}

let o = {
    "Name": "Shivansh Agnihotri",
    "Age": 12,
    "Gender": "Male",
    "Job": "IAS Officer",
    "Salary": "1000 crore"
}

console.log(o);
console.log("Javascript is fun!")

o.Nation = "India";
console.log(o);

