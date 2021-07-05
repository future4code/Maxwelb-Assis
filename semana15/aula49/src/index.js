// exercicio1 
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var User = /** @class */ (function () {
    function User(id, email, name, password) {
        console.log("Chamando o construtor da classe User");
        this.id = id;
        this.email = email;
        this.name = name;
        this.password = password;
    }
    User.prototype.getId = function () {
        return this.id;
    };
    User.prototype.getEmail = function () {
        return this.email;
    };
    User.prototype.getName = function () {
        return this.name;
    };
    return User;
}());
// a)nao pois esta privado
// b) nenhuma vez
// exercicio 2
var Customer = /** @class */ (function (_super) {
    __extends(Customer, _super);
    function Customer(id, email, name, password, creditCard) {
        var _this = _super.call(this, id, email, name, password) || this;
        _this.purchaseTotal = 0;
        console.log("Chamando o construtor da classe Customer");
        _this.creditCard = creditCard;
        return _this;
    }
    Customer.prototype.getCreditCard = function () {
        return this.creditCard;
    };
    return Customer;
}(User));
