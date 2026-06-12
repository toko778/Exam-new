// 1. დროისა და თარიღის მიღება და ბეჭდვა
const today = new Date();
let day = today.getDate();
let month = today.getMonth() + 1; // ვუმატებთ 1-ს, რადგან იწყება 0-დან
let year = today.getFullYear();
console.log(`მიმდინარე თარიღი: ${day}/${month}/${year}`);

// 2. სტრიქონის გადაყვანა მაღალ რეგისტრში
let name = "nika";
let upperName = name.toUpperCase();
console.log("სახელი მაღალ რეგისტრში:", upperName);

// 3. ლოკალურ მეხსიერებაში შენახვა და წაკითხვა (კრიტერიუმი 4.3)
localStorage.setItem("examToken", "Valid_JavaScript_Exam_2026");

// 4. HTML დოკუმენტის ჩატვირთვის შემდგომი შეტყობინებ
window.addEventListener("load", function() {
    // წავიკითხოთ მონაცემი ლოკალური მეხსიერებიდან
    let storedData = localStorage.getItem("examToken");
    console.log("მეხსიერებიდან წაკითხული მნიშვნელობა:", storedData);
    
    // გამოგვაქვს ოფიციალურად მოთხოვნილი შეტყობინება
    alert("HTML დოკუმენტი წარმატებით ჩაიტვირთა!");
});

// 5. ტაიმერის ფუნქცია: ყოველ 1 წამში 1-დან 10-მდე ბეჭდვა
let currentCount = 1;
let counterInterval = setInterval(function() {
    console.log("ტაიმერი:", currentCount);
    
    if (currentCount >= 10) {
        clearInterval(counterInterval); // ვაჩერებთ ტაიმერს ათზე ასვლისას
    }
    currentCount++;
}, 1000);