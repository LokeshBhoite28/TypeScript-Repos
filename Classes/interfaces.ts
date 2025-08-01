interface Authenticatable {
  email: string;
  password: string;

  login(): void;
  logout(): void;
}

// declaration merging
// interface Authenticatable {
//   role: string;
// }

// interface inheritance
interface authenticatableAdmin extends Authenticatable {
  role: "admin" | "superadmin";
}

class AuthenticatableUser implements Authenticatable {
  constructor(public email: string, public password: string) {}

  login(): void {
    throw new Error("Method not implemented.");
  }

  logout(): void {
    throw new Error("Method not implemented.");
  }
}

let user: Authenticatable;

user = {
  email: "test@gmail.com",
  password: "abc1",
  login() {
    // reach out to db
  },
  logout() {},
};
