
window.addEventListener("scroll", () => {
  const navbar = document.getElementById("navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("scrolled"); // apply scroll effect
  } else {
    navbar.classList.remove("scrolled"); // return to default
  }
});




const items = {
  latte: { name: "Vanilla Latte", desc: "Smooth espresso with steamed milk and vanilla syrup.", price: "₹180", discount: "10% off" },
  espresso: { name: "Classic Espresso", desc: "Rich, bold espresso brewed to perfection.", price: "₹150", discount: "5% off" },
  mocha: { name: "Mocha", desc: "Perfect blend of espresso, milk, and chocolate.", price: "₹200", discount: "15% off" },
};

function showDetails(itemKey) {
  const item = items[itemKey];
  const infoDiv = document.getElementById("item-info");
  infoDiv.innerHTML = `
    <h3>${item.name}</h3>
    <p>${item.desc}</p>
    <p><strong>Price:</strong> ${item.price}</p>
    <p><strong>Discount:</strong> ${item.discount}</p>
  `;
  document.getElementById("item-details").classList.remove("hidden");
}
function closeDetails() {
  document.getElementById("item-details").classList.add("hidden");
}



document.getElementById("booking-form").addEventListener("submit", e => {
  e.preventDefault();
  alert("🎉 Table booked successfully!");
});
document.getElementById("register-form").addEventListener("submit", e => {
  e.preventDefault();
  alert("✅ Registration successful!");
});
document.getElementById("feedback-form").addEventListener("submit", e => {
  e.preventDefault();
  alert("💬 Thank you for your feedback!");
});
