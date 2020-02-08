//NOTE @ TEACHER:
//I know that this is the right solution but I don't know how to initilize the accumulator 'result' to empty.
//Because when Reduce starts it's going to insert 'current' into the 'array-category'. 
//But sadly, JS doesn't know that it's an array that it's reducing in. I want to help JS, but I can't.
//I've been working on this for hours but I don't seem to find the solution. Yet I know that I am 
//super close to it, so it's quite frustrating to hand it in like this. Maybe we can look over it together on Monday.   

function groupAdultsByAgeRange(persons) {
  const ageFilter = persons.filter((person) => person.age >= 18)
  const people = ageFilter.reduce((result, current) => {
    if (current.age <= 20) {
      result['20 and younger'].push(current)
    } else if (current.age <= 30) {
      result['21-30'].push(current)
    } else if (current.age <= 40) {
      result['31-40'].push(current)
    } else if (current.age <= 50) {
      result['41-50'].push(current)
    } else {
      result['51 and older'].push(current)
    }
  }, {});
  return people
}

//The exported groupAdultsByAgeRange should be a function.
module.exports.groupAdultsByAgeRange = groupAdultsByAgeRange