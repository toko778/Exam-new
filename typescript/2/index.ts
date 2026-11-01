// 2. შექმენით ახალი ტიპი (Type) product ცვლადისთვის
type ProductType = {
  brand: string;
  model: string;
  price: number;
};

// 1. შექმენით product ცვლადი და მიანიჭეთ ობიექტი
const product: ProductType = {
  brand: 'Apple',
  model: 'MacBook Pro',
  price: 2500,
};

// 4. შექმენით ინტერფეისი (Interface) user ცვლადისთვის
interface UserInterface {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
}

// 3. შექმენით user ცვლადი და მიანიჭეთ ობიექტი
const user: UserInterface = {
  firstName: 'თორნიკე',
  lastName: 'ბარბაქაძე',
  email: 'tornike@example.com',
  phone: '+995555123456',
};

// 5. მონაცემების გამოტანა DOM-ში (ან კონსოლში, თუ ნოდში ვუშვებთ)
console.log('პროდუქტი:', product);
console.log('მომხმარებელი:', user);

// ელემენტების გამოტანა ვებგვერდზე (DOM)
const appDiv = document.getElementById('app') || document.body;
appDiv.innerHTML = `
  <div>
    <h3>პროდუქტის ინფო:</h3>
    <p>ბრენდი: ${product.brand}, მოდელი: ${product.model}, ფასი: ${product.price}₾</p>
    
    <h3>მომხმარებლის ინფო:</h3>
    <p>სახელი: ${user.firstName} ${user.lastName}</p>
    <p>ელ-ფოსტა: ${user.email} | ტელ: ${user.phone}</p>
  </div>
`;