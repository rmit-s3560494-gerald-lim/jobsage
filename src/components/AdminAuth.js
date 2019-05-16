class AdminAuth {
  constructor() {
    this.adminAuthenticated = false;
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
}

export default new AdminAuth();