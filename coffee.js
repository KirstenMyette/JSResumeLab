function titleCase(str) {
    var splitStr = str.toUpperCase().split(' ');
    for (var i = 0; i < splitStr.length; i++) {
        splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
    }
    return splitStr.join(' ');
}

console.log(titleCase("Kirsten Myette"));

console.log("Description: Pisces, middle child, tomboy");

console.log("Career: Front Stack Engineer");

console.log("My Interests:");

console.log("*Star Wars");

console.log("*Doctor Who");

console.log("*The Walking Dead");

console.log("*Supernatural");

console.log("*Reading (Fiction)");

console.log("My Previous Experience:");



function displayPosition(jobname, jobtitle, jobdescription) {
    console.log("* " + jobname + ", " + jobtitle + ", " + jobdescription);
}

displayPosition("SweetFrog", "Shift Leader", "I take payment and keep the store at optimum condition.");
displayPosition("Allstate", "Claims Service Specialist", "took phone calls, filed auto loss claims, processed claims.");
displayPosition("Dunkin' Donuts", "Shift Leader", "made coffee, sandwhiches, and doughnuts.")

console.log("My Skills:");

var pettingCats="cool";
var readingBooks="cool";
var crossStiching="not cool";
var highFiving="not cool";

if (pettingCats==="cool") {
    console.log("Check It: Petting Cats");
}

else {
    console.log("Petting Cats");
}

if (readingBooks==="cool") {
    console.log("Check It: Reading Books");
}

else {
    console.log("Reading Books");
}

if (crossStiching==="cool") {
    console.log("Check It: Cross Stiching");
}

else {
    console.log("Cross Stiching");
}

if (highFiving==="cool") {
    console.log("Check It: High Fiving");
}

else {
    console.log("High Fiving");
}