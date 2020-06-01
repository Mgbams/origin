export class Users {
    public customerId: number;
    public firstName: string;
    public lastName: string;
    public address: string;
    public city: string;
    public country: string;
    public phone: string;
    public email: string;
    public customerPassword: string;
    public creditCard: string;
    public creditCardTypeId: string;
    public cardExpMonth: number;
    public cardExpYear: number;
    public status: string;
    public passwordResetToken : string;
    public passwordResetExpires : string;

    constructor(
        customerId: number,
        firstName: string,
        lastName: string,
        address: string,
        city: string,
        country: string,
        phone: string,
        email: string,
        customerPassword: string,
        creditCard: string,
        creditCardTypeId: string,
        cardExpMonth: number,
        cardExpYear: number,
        status: string,
        passwordResetToken: string,
        passwordResetExpires: string
        ) {
        this.customerId = customerId;
        this.firstName = firstName;
        this.lastName = lastName;
        this.address = address;
        this.city = city;
        this.country = country;
        this.phone = phone;
        this.email = email;
        this.customerPassword = customerPassword;
        this.creditCard = creditCard;
        this.creditCardTypeId = creditCardTypeId;
        this.cardExpMonth = cardExpMonth;
        this.cardExpYear = cardExpYear;
        this.status = status;
        this.passwordResetToken = passwordResetToken; 
        this.passwordResetExpires = passwordResetExpires;
        }

}

/* export class Users {
    public Id: number;
    public name: string;
    public pwd: string;
    public email: string;

    constructor(Id: number, name: string, pwd: string, email: string) {
    this.Id = Id;
    this.name = name;
    this.pwd = pwd;
    this.email = email;
    }
} */