//The exported groupAdultsByAgeRange should be a function.
function groupAdultsByAgeRange(persons) {
  const ageFilter = persons.filter((person) => person.age >= 18)
}

//The function will be called with an array of objects as its argument. The objects represent people, with a property name and a property age. 
//2. An empty array results in an empty object --> map, because it transforms an array

//3. Filters out people under the age of 18. Use filter

//4. only contains non empty groups --> 


// const overTheAgeOf18e = people.reduce((acc, it) => (acc[it.age] = it, acc), {

// })

//5. Groups an array of people by age --> use 

// 5. You should use a combination of filter and reduce. If your solution uses for-loops instead of reduce for creating the final object, you will receive partial points. The use of for-loops is allowed, but try to construct the returned "grouping" object using reduce.
// 6. These are the groups that your code needs to return. Use the text as the name of the property:
// // 20 and younger
// // 21-30
// // 31-40
// // 41-50
// // 51 and older

//The exported groupAdultsByAgeRange should be a function.
module.exports.groupAdultsByAgeRange = groupAdultsByAgeRange