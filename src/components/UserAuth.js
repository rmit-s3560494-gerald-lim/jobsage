class AdminAuth {
  constructor() {
    this.userAuthenticated = false;
  }

  login(admin) {
    this.adminAuthenticated = true;
    admin();
  }

  logout(admin) {
    this.adminAuthenticated = false;
    admin();
  }

  isAdminAuthenticated() {
    return this.adminAuthenticated;
  }

  typeOfUser() {
    return this.userType;
  }
}

export default new AdminAuth();