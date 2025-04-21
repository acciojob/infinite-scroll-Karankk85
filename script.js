const infiList = document.getElementById("infi-list");
let itemCount = 0;

// Function to add items to the list
function addItems(count = 10) {
  for (let i = 0; i < count; i++) {
    const li = document.createElement("li");
    li.textContent = `Item ${++itemCount}`;
    infiList.appendChild(li);
  }
}

// Add initial 10 items
addItems(10);

// Add scroll listener on the list itself
infiList.addEventListener("scroll", () => {
  // If scrolled to the bottom
  if (infiList.scrollTop + infiList.clientHeight >= infiList.scrollHeight) {
    addItems(2); // Add 2 more items when bottom is reached
  }
});
