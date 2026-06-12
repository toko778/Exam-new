// ამოცანა 1: მასივიდან 5-ზე მეტი სიგრძის სახელების გამოყოფა ციკლით
const namesArray = ["ana", "nika", "elene", "diana", "avtandili", "nini", "levani", "nugzari", "qetevani", "zura", "teona"];
let longNamesArray = []; // ახალი მასივი

for (let i = 0; i < namesArray.length; i++) {
    if (namesArray[i].length > 5) {
        longNamesArray.push(namesArray[i]); // ვამატებთ ახალ მასივში
    }
}
console.log("სახელები, რომელთა სიგრძე > 5-ზე:", longNamesArray);

// ამოცანა 2: ელემენტის დამატება პირველ და ბოლო პოზიციაზე
longNamesArray.unshift("პირველი_სახელი"); // ამატებს დასაწყისში
longNamesArray.push("ბოლო_სახელი"); // ამატებს ბოლოში
console.log("მასივი ელემენტების დამატების შემდეგ:", longNamesArray);

// ამოცანა 3: მასივის ჩაშენებული ფუნქციით გაფილტვრა (18-ზე მეტი)
const arrOfAges = [15, 12, 25, 18, 20, 19, 34, 45, 17];
// filter ფუნქცია ტოვებს მხოლოდ პირობის შესაბამის რიცხვებს
const filteredAges = arrOfAges.filter(function(age) {
    return age > 18;
});
console.log("გაფილტრული ასაკი (18-ზე მეტი):", filteredAges);

// ამოცანა 4: ორი მასივის გაერთიანება და კლებადობით დალაგება
const arr1 = [-2, 0, 5, 9, 1];
const arr2 = [6, 3, -4, 10, 7];

// ვათავსებთ გაერთიანებულ მასივს ახალ ცვლადში concat-ის საშუალებით
const newArray = arr1.concat(arr2);

// ვასორტირებთ კლებადობით (b - a ფორმულით)
newArray.sort(function(a, b) {
    return b - a;
});
console.log("გაერთიანებული და კლებადობით დალაგებული მასივი:");
// თითოეული ელემენტის სათითაოდ ბეჭდვა კონსოლში
newArray.forEach(function(element) {
    console.log(element);
});