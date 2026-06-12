// ==========================================
// 1. ელემენტების სელექცია და კონსოლში გამოტანა (კრიტერიუმი 5.1)
// ==========================================

// სელექცია getElementById მეთოდით
const headingElement = document.getElementById("main-heading");
console.log("სელექცია getElementById-ით:", headingElement);

// სელექცია querySelector მეთოდით (ინპუტის მოძებნა ID-ით)
const inputElement = document.querySelector("#test-input");
console.log("სელექცია querySelector-ით:", inputElement);

// სელექცია querySelectorAll მეთოდით (ყველა პარაგრაფის მოძებნა კლასით)
const paragraphsCollection = document.querySelectorAll(".info-text");
console.log("სელექცია querySelectorAll-ით:", paragraphsCollection);


// ==========================================
// 2. ელემენტის თვისებების დინამიური ცვლილება (კრიტერიუმი 5.2)
// ==========================================

// ვცვლით სათაურის სტილს (ტექსტის ფერს და ფონტის ზომას)
headingElement.style.color = "#e74c3c"; 
headingElement.style.fontFamily = "sans-serif";

// ვამატებთ წინასწარ გამზადებულ CSS კლასს სათაურზე
headingElement.classList.add("highlight-title");


// ==========================================
// 3. ახალი ელემენტის შექმნა და განთავსება HTML-ში (კრიტერიუმი 5.3)
// ==========================================

// ვქმნით ახალ პარაგრაფს (p თეგს)
const dynamicParagraph = document.createElement("p");

// ვამატებთ მასში ტექსტს
dynamicParagraph.innerText = "ეს პარაგრაფი წარმატებით შეიქმნა JavaScript-ის საშუალებით და ჩაემატა დოკუმენტში.";

// ვაძლევთ სტილს, რომ ვიზუალურად გამოირჩეოდეს
dynamicParagraph.style.color = "#27ae60";
dynamicParagraph.style.fontWeight = "bold";

// ვპოულობთ მშობელ კონტეინერს და შიგ ვათავსებთ ახალ პარაგრაფს
const wrapperDiv = document.getElementById("wrapper-div");
wrapperDiv.appendChild(dynamicParagraph);


// ==========================================
// 4. მოვლენების მსმენელების რეგისტრაცია და შეტყობინებები (კრიტერიუმი 5.4)
// ==========================================

// ა) FOCUS მოვლენა - ინპუტში შიგნით დაწკაპუნებისას
inputElement.addEventListener("focus", function() {
    inputElement.classList.add("active-input");
    console.log("შეტყობინება: 'focus' მოვლენის მსმენელი წარმატებით დარეგისტრირდა და ამოქმედა!");
});

// ბ) BLUR მოვლენა - ინპუტიდან მაუსის გარეთ დაწკაპუნებისას (ფოკუსის დაკარგვა)
inputElement.addEventListener("blur", function() {
    inputElement.classList.remove("active-input");
    console.log("შეტყობინება: 'blur' მოვლენის მსმენელი წარმატებით დარეგისტრირდა და ამოქმედა!");
});

// გ) CHANGE მოვლენა - სელექთში მნიშვნელობის შეცვლისას
const selectElement = document.getElementById("test-select");
selectElement.addEventListener("change", function(event) {
    // გამოვიტანოთ შეტყობინება ეკრანზეც და კონსოლშიც
    console.log("შეტყობინება: 'change' მოვლენის მსმენელი მუშაობს. არჩეული მნიშვნელობაა: " + event.target.value);
});

// დ) CLICK მოვლენა - ღილაკზე დაჭერისას
const buttonElement = document.getElementById("test-button");
buttonElement.addEventListener("click", function() {
    // გამოგვაქვს მკაფიო შეტყობინება (alert) დადასტურებისთვის
    alert("შეტყობინება: 'click' მოვლენის მსმენელი წარმატებით მუშაობს!");
});