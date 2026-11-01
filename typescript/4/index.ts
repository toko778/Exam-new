// ინტერფეისი მონაცემთა სტრუქტურისთვის
interface UserProfile {
  userName: string;
  email: string;
  role: string;
  isActive: boolean;
}

// კლასი მონაცემთა მართვისთვის
class UserManager {
  private user: UserProfile;

  constructor(user: UserProfile) {
    this.user = user;
  }

  // მეთოდი, რომელიც აბრუნებს მომხმარებლის ინფორმაციას
  getUserInfo(): UserProfile {
    return this.user;
  }
}

// ვქმნით ობიექტს
const currentUser = new UserManager({
  userName: 'თორნიკე ბარბაქაძე',
  email: 'tornike@example.com',
  role: 'Technical Manager',
  isActive: true,
});

// მონაცემების გამოტანა DOM-ში (გამოყენებულია უნიკალური სახელი appContainer)
const appContainer = document.getElementById('app') || document.body;
const userInfo = currentUser.getUserInfo();

appContainer.innerHTML = `
  <div style="font-family: Arial, sans-serif; padding: 20px; border: 2px solid #007bff; border-radius: 8px; max-width: 400px; margin: 20px auto;">
    <h2 style="color: #007bff;">მომხმარებლის პროფილი (დავალება 4)</h2>
    <p><strong>მომხმარებელი (userName):</strong> ${userInfo.userName}</p>
    <p><strong>ელ-ფოსტა:</strong> ${userInfo.email}</p>
    <p><strong>როლი:</strong> ${userInfo.role}</p>
    <p><strong>სტატუსი:</strong> <span style="color: ${userInfo.isActive ? 'green' : 'red'};">${userInfo.isActive ? 'აქტიური' : 'არააქტიური'}</span></p>
  </div>
`;