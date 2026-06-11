// 1. დროისა და თარიღის ფუნქციით მიმდინარე რიცხვის, თვისა და წლის ბეჭდვა
const currentDate = new Date();
let day = currentDate.getDate();
let month = currentDate.getMonth() + 1; // თვეები იწყება 0-დან, ამიტომ ვუმატებთ 1-ს
let year = currentDate.getFullYear();

console.log(`მიმდინარე თარიღი: ${day}/${month}/${year}`);

// 2. სტრიქონის გადაყვანა მაღალ რეგისტრში (Capital Letters)
let name = "nika";
let upperCaseName = name.toUpperCase();
console.log("სახელი მაღალ რეგისტრში:", upperCaseName);

// 3. ლოკალურ მეხსიერებაში (LocalStorage) შენახვა და გვერდის ჩატვირთვისას წაკითხვა
localStorage.setItem("userExamStatus", "Passed");

// 4. HTML დოკუმენტის სრულად ჩატვირთვის მოვლენა (DOMContentLoaded)
window.addEventListener("DOMContentLoaded", function() {
    // წავიკითხოთ მნიშვნელობა მეხსიერებიდან
    let savedValue = localStorage.getItem("userExamStatus");
    console.log("LocalStorage-დან წაკითხული მნიშვნელობა:", savedValue);
    
    // გამოვიტანოთ შეტყობინება გვერდის ჩატვირთვისთანავე
    alert("HTML დოკუმენტი წარმატებით ჩაიტვირთა!");
});

// 5. ტაიმერის ფუნქცია: ყოველ 1 წამში ზრდადი რიცხვების ბეჭდვა 1-დან 10-მდე
let count = 1;
let countdown = setInterval(function() {
    console.log("ტაიმერის მთვლელი:", count);
    
    // თუ ავედით 10-ზე, ვაჩერებთ ტაიმერს
    if (count >= 10) {
        clearInterval(countdown);
    }
    count++;
}, 1000); // 1000 მილიწამი = 1 წამს