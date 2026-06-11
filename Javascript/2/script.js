// 1. ასაკის განსაზღვრა და სრულწლოვანების შემოწმება (If/Else)
let age = 20; 

if (age >= 18) {
    console.log("მომხმარებელი არის სრულწლოვანი.");
} else {
    console.log("მომხმარებელი არ არის სრულწლოვანი.");
}

// 2. 1-დან 10-მდე ლუწი რიცხვების ბეჭდვა (For ციკლი)
console.log("ლუწი რიცხვები 1-დან 10-მდე:");
for (let i = 1; i <= 10; i++) {
    // თუ ნაშთი 2-ზე გაყოფისას არის 0, რიცხვი ლუწია
    if (i % 2 === 0) {
        console.log(i);
    }
}

// 3. ღილაკზე დაჭერა (Click Event)
document.getElementById("alertBtn").addEventListener("click", function() {
    alert("ღილაკზე დაჭერა წარმატებით განხორციელდა!");
});

// 4. Input-ში ტექსტის წერის პარალელურად კონსოლში ბეჭდვა (Input Event)
document.getElementById("textInput").addEventListener("input", function(event) {
    console.log("ინპუტის მიმდინარე მნიშვნელობა:", event.target.value);
});