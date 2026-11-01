// 3. შექმენით Skills კლასი, რომელიც შეიცავს getList() მეთოდს
class Skills {
  // მეთოდი, რომელიც აბრუნებს ტექნოლოგიების სიას
  getList(): string[] {
    return ['PHP', 'JS', 'REACT', 'ANGULAR', 'VUE'];
  }
}

// 1 & 2. შექმენით Person კლასი შესაბამისი ცვლადებითა და კონსტრუქტორით
class Person {
  firstName: string;
  lastName: string;
  profession: string;
  experience_years: number;
  skills: Skills; // 4. დაკავშირებულია Person კლასი Skills კლასთან

  constructor(firstName: string, lastName: string, profession: string, experience_years: number) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.profession = profession;
    this.experience_years = experience_years;
    this.skills = new Skills(); // ვქმნით Skills ობიექტს Person-ის შიგნით
  }
}

// 5. პროექტის გვერდზე შექმენით ცვლადი (Person კლასის ობიექტი)
const personInstance = new Person(
  'თორნიკე', 
  'ბარბაქაძე', 
  'Technical Manager / Developer', 
  7
);

// მონაცემების გამოტანა DOM-ში
const appDiv = document.getElementById('app') || document.body;

// ვიღებთ უნარების სიას Skills კლასიდან
const techSkills = personInstance.skills.getList();

appDiv.innerHTML = `
  <div style="font-family: Arial, sans-serif; padding: 20px;">
    <h2>OOP & Classes (დავალება 3)</h2>
    <p><strong>სახელი, გვარი:</strong> ${personInstance.firstName} ${personInstance.lastName}</p>
    <p><strong>პროფესია:</strong> ${personInstance.profession}</p>
    <p><strong>გამოცდილება:</strong> ${personInstance.experience_years} წელი</p>
    
    <h3>ტექნოლოგიები (Skills კლასიდან):</h3>
    <ul>
      ${techSkills.map(skill => `<li>${skill}</li>`).join('')}
    </ul>
  </div>
`;