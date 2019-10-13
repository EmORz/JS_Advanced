class CheckingAccount {
    //_clientId;
    // _email;
    // _firstName;
    // _lastName;

    constructor(clientId, email, firstName, lastName){

        this.clientId = clientId;
        this.email = email;
        this.firstName = firstName;
        this.lastName = lastName;
    }

    get email(){
        return this._email;
    }

    set email(value){
        var pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if(!pattern.test(value)){
            throw new TypeError('Invalid e-mail');
        }
    }

    get clientId(){
        return this._clientId
    }

    set clientId(value){

        if(value.length !==6){

            throw new TypeError('Client ID must be a 6-digit number');
        }

        this._clientId = value;
    }

    get firstName(){
        return this._firstName;
    }

    set firstName(value){
        let temp = value.length ;
        if(temp < 3 || temp > 20 ){
            throw new TypeError(`First name must be between 3 and 20 characters long`)
        }

        const pattern = /^[A-Za-z]+$/g;

        if(!pattern.test(value)){
            throw new TypeError(`First name must contain only Latin characters`)
        }

        this._firstName = value;
    }

    get lastName(){
        return this._lastName;
    }

    set lastName(value){
        let temp = value.length ;
        if(temp < 3 || temp > 20 ){
            throw new TypeError(`Last name must be between 3 and 20 characters long`)
        }

        const pattern = /^[A-Za-z]+$/gi;

        if(!pattern.test(value)){
            throw new TypeError(`Last name must contain only Latin characters`)
        }

        this._lastName = value;
    }
}

//let acc = new CheckingAccount('123456', 'ivan@some.com', 'Ivan', 'Petrov')
//let acc = new CheckingAccount('131455', 'ivan@some.com', 'I', 'Petrov')
let acc = new CheckingAccount('131455', 'ivan@mail.bg', 'Ivan', 'Petrov')
