// 1. ასინქრონული ფუნქცია, რომელიც აბრუნებს Promise-ს 2 წამიანი დაყოვნებით
function createDelayedPromise() {
    return new Promise(function(resolve) {
        // setTimeout აყოვნებს კოდის შესრულებას 2000 მილიწამით (2 წამით)
        setTimeout(function() {
            // იძახებს resolve ფუნქციას სტრინგ მნიშვნელობით
            resolve("პრომისი წარმატებით შესრულდა!");
        }, 2000);
    });
}

// 2. ფუნქცია async-ის გამოყენებით, რომელიც await-ით ინახავს შედეგს ცვლადში
async function handleAsyncOperations() {
    console.log("ველოდებით პრომისის პასუხს (დაყოვნება 2 წამი)...");
    
    // await აჩერებს პროცესს პასუხის მიღებამდე და ინახავს შედეგს ცვლადში
    const promiseResult = await createDelayedPromise();
    
    // გამოიტანეთ მიღებული მნიშვნელობა კონსოლში
    console.log("კონსოლის შედეგი:", promiseResult);
}

// აუცილებლად ვიძახებთ ფუნქციას, რომ პროცესი დაიწყოს
handleAsyncOperations();

// 3. Fetch API: POST მოთხოვნა ვალიდური body-ს გაყოლებით და სტატუსის ბეჭდვა
fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST", // მიმართულება - მონაცემების გაგზავნა
    body: JSON.stringify({
        title: "საგამოცდო პოსტი",
        body: "ეს არის ტექსტური შინაარსი ტესტირებისთვის",
        userId: 1
    }), // ვალიდური body ობიექტის სტრინგად ქცევით
    headers: {
        "Content-type": "application/json; charset=UTF-8"
    }
})
.then(function(response) {
    // ველოდებით მოთხოვნის შედეგს და სერვერის პასუხის სტატუსი გამოგვაქვს კონსოლში
    console.log("POST მოთხოვნის სერვერის სტატუსი:", response.status); // (უნდა იყოს 201)
});

// 4. Fetch API: ინფორმაციის მიღება (GET) 5 პოსტის ლიმიტით, გაანალიზება და ბეჭდვა
fetch("https://jsonplaceholder.typicode.com/posts?_limit=5") // მისამართი 5 პოსტის ლიმიტით
.then(function(response) {
    // ვაანალიზებთ მიღებულ პასუხს (JSON პარსინგი)
    return response.json();
})
.then(function(data) {
    console.log("სერვერიდან წარმატებით მიღებული 5 პოსტის სია:");
    // ვბეჭდავთ მიღებულ ინფორმაციას კონსოლში
    console.log(data);
});