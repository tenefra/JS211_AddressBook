let arrayOfUsers = []

window.onload = function () {
  fetchUser()
}

// Fetches users from API, are now available to be displayed on DOM
const fetchUser = () => {
  fetch("https://randomuser.me/api/?results=5")
    .then(res => res.json())
    .then(data => data.results.forEach(item => arrayOfUsers.push(item)))
  console.log(arrayOfUsers)
}

// Loops through arrayOfUsers array and creates DOM elements for each object in the array.
const displayUser = () => {
  const allUsers = document.getElementById("all-users")
  arrayOfUsers.map(user => {
    // Create text for user
    const li = document.createElement("li")
    li.innerText = `${user.name.last}, ${user.name.first}`
    allUsers.appendChild(li)

    // Create image for user
    const img = document.createElement("img")
    img.setAttribute("src", user.picture.large)
    allUsers.appendChild(img)

    //Create button for extra info
    const displayBtn = document.createElement("button")
    displayBtn.innerHTML = "More Info"
    displayBtn.addEventListener("click", function () {
      showMore(user, li, displayBtn)
    })
    li.appendChild(displayBtn)
  })
}

// Invoked on button click. Displays extra information within the li that was created in displayUser()
const showMore = (user, li, displayBtn) => {
  displayBtn.innerHTML = ""
  li.innerText += `Age: ${user.dob.age},
  Gender: ${user.gender}, Email: ${user.email}`
}
