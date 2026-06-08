export class UserInfo {
    userName;
    userProfession;
    constructor(userName, userProfession) {
        this.userName = document.querySelector('.profile__title');
        this.userProfession = document.querySelector('.profile__description');
    }
    getUserInfo() {
        const userInformation = {
            name: this.userName.textContent,
            profession: this.userProfession.textContent
        };
        return userInformation;
    }
    setUserInfo(inputName, inputProfession) {
        this.userName.textContent = inputName;
        this.userProfession.textContent = inputProfession;
    }
}
