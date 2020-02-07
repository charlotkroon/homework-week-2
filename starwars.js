// fetch example - works in the browser but not in node
// (fetch is not a part of node.js by default)

function lukeSkyWalker() {
  fetch('https://swapi.co/api/people/1') // Call the fetch function passing the url of the API as a parameter
    .then((response) => { // Your code for handling the data you get from the API
      console.log("response", response)
      return response.json(); //.json makes sure that I will only get the useful information that I need
    })
    .then(myData => { //only useful data (it's what the json gave back to me)
      console.log(myData)
      document.getElementById("firstLuke").innerHTML = JSON.stringify(myData) //stringify makes the data readable on the page
    })

    .catch(function () { // This is where you run code if the server returns any errors
      console.log("got an error")
    });
  return lukeSkyWalker()
}

function darthVader() {
  fetch('https://swapi.co/api/people/4/') // Call the fetch function passing the url of the API as a parameter
    .then((response) => { // Your code for handling the data you get from the API
      console.log("darth vader", response)
      return response.json(); //.json makes sure that I will only get the useful information that I need
    })
    .then(myData => { //only useful data (it's what the json gave back to me)
      console.log(myData)
      document.getElementById("darthVadertje").innerHTML = JSON.stringify(myData)
    })

    .catch(function () { // This is where you run code if the server returns any errors
      console.log("got another error")
    });
  return
}
document.getElementById("darthvaderButton"); //will get the element from the HTML file
document.addEventListener("click", darthVader); //now it will listen closely to 'click' and it's connected to the getsomeadvice function

lukeSkyWalker(); //By calling this function over here, I will see it immediately on my webpage.