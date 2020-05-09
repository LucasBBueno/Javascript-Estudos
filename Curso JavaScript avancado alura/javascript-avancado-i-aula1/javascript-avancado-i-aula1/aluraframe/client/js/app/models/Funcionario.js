class Funcionario{

    constructor(email){
        this._email = email;
    }

    get email(){
        return this._email;
    }

    set email(email){
        this._email = email;
    }
}