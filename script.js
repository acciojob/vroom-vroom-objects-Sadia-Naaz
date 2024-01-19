// Complete the js code
class Car {
	constructor(make,model) {
		this.make=make;
		this.model=model;
	}
getMakeModel(){
		return this.make+" "+this.model;
}	
}
class SportsCar extends Car{
	
	constructor(make,model,topSpeed) {
		super(make,model);
		this.topSpeed = topSpeed;
	}
	getTopSpeed(){
		return this.topSpeed;
	}
}
	
const car = new Car("suv","new");
const scar  = new SportsCar("honda",360,50);
// Do not change the code below
window.Car = Car;
window.SportsCar = SportsCar;
