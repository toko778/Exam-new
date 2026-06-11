// 1. DOM სელექტორის გამოყენება ელემენტის მოსაძებნად ID-ის მიხედვით
const titleElement = document.getElementById("page-title");

// 2. ნაპოვნი ელემენტის სტილის (Color) დინამიური შეცვლა JavaScript-იდან
titleElement.style.color = "blue";
titleElement.style.fontSize = "32px";

// 3. სრულიად ახალი HTML ელემენტის (აბზაცის - p ტეგის) შექმნა მეხსიერებაში
const newParagraph = document.createElement("p");

// 4. ახლად შექმნილ ელემენტში ტექსტური შინაარსის ჩაწერა
newParagraph.innerText = "ეს აბზაცი შეიქმნა დინამიურად JavaScript-ის საშუალებით!";
newParagraph.style.fontStyle = "italic";
newParagraph.style.color = "#27ae60";

// 5. მშობელი კონტეინერის მოძებნა და მასში ახალი ელემენტის ჩამატება (appendChild)
const container = document.getElementById("elements-container");
container.appendChild(newParagraph);