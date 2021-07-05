"use strict";
// exercicio 1
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
exports.__esModule = true;
exports.Industry = exports.Commerce = exports.Residence = void 0;
/*export interface Client {
    name: string;
  
    registrationNumber: number;
  
    consumedEnergy: number;
  
    calculateBill(): number;
  }


  const client: Client = {
    name: "max",
    registrationNumber: 300,
    consumedEnergy: 150,
  
    calculateBill: () => {
      return 2;
    }
  }
  */
// exercicio 2
var Place = /** @class */ (function () {
    function Place(cep) {
        this.cep = cep;
    }
    Place.prototype.getCep = function () {
        return this.cep;
    };
    return Place;
}());
var newPlace = new Place("dsdsd");
// a ) informa que nao pode criar uma instancia de uma classe abstrata
// b ) tirar o termo abstract da classe
// exercicio 3
var Residence = /** @class */ (function (_super) {
    __extends(Residence, _super);
    function Residence(residentsQuantity, 
    // Refere-se ao número de moradores da casa
    cep) {
        var _this = _super.call(this, cep) || this;
        _this.residentsQuantity = residentsQuantity;
        return _this;
    }
    return Residence;
}(Place));
exports.Residence = Residence;
var newResidents = new Residence(4, "28460000");
console.log(newResidents);
var Commerce = /** @class */ (function (_super) {
    __extends(Commerce, _super);
    function Commerce(floorsQuantity, 
    // Refere-se à quantidade de andares do lugar
    cep) {
        var _this = _super.call(this, cep) || this;
        _this.floorsQuantity = floorsQuantity;
        return _this;
    }
    return Commerce;
}(Place));
exports.Commerce = Commerce;
var comercio = new Commerce(10, "5221388");
var Industry = /** @class */ (function (_super) {
    __extends(Industry, _super);
    function Industry(machinesQuantity, 
    // Refere-se à quantidade de máquinas do local 
    cep) {
        var _this = _super.call(this, cep) || this;
        _this.machinesQuantity = machinesQuantity;
        return _this;
    }
    return Industry;
}(Place));
exports.Industry = Industry;
var industria = new Industry(50, "959292");
