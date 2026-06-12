// 1. ცვლადი age და პირობითი ოპერატორი
let age = 20;
if (age >= 18) {
    console.log("მომხმარებელი არის სრულწლოვანი.");
} else {
    console.log("მომხმარებელი არ არის სრულწლოვანი.");
}

// 2. 1-დან 10-მდე ლუწი რიცხვების ბეჭდვა ციკლით
console.log("ლუწი რიცხვები 1-დან 10-მდე:");
for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

// 3. ღილაკზე დაჭერის მოვლენა
document.getElementById("alertBtn").addEventListener("click", function() {
    alert("ღილაკზე დაჭერა წარმატებით განხორციელდა!");
});

// 4. Input ტეგის მნიშვნელობის პარალელურად ბეჭდვა კონსოლში
document.getElementById("textInput").addEventListener("input", function(event) {
    console.log("ინპუტის მიმდინარე მნიშვნელობა:", event.target.value);
});