class User {

    constructor() {
        this.init();
    };

    init() {
        this.name = localStorage.getItem('userName');
        this.email = localStorage.getItem('userEmail');
        this.loggedIn = localStorage.getItem('userLoggedIn');
    }

    authenticated(data, callback) {
        localStorage.setItem('userName', data.name);
        localStorage.setItem('userEmail', data.email);
        localStorage.setItem('userLoggedIn', true);

        this.init();

        callback();
    }

    isLoggedIn() {
        return Boolean(this.loggedIn) === true;
    }

    destroy() {
        localStorage.removeItem('userName');
        localStorage.removeItem('userEmail');
        localStorage.removeItem('userLoggedIn');
        document.cookie = 'access_token=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;'
        this.loggedIn = false;
    }

    logout(callback) {
        this.destroy();
        
        callback();
    }
}

export default new User()