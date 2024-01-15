// Complete the js code
function Car(make, model) {
this.make = make;
this.model=model;
	getMakeModel() {
return this.make+""+this.model;
}
	
function SportsCar(make, model, topSpeed) {
	this.make=make;
	this.model=model;
	this.topSpeed=topSpeed;
__prototype__:Car();
gettopSpeed(){
	return this.topSpeed;
}
}
const car = new Car("suv","new");
const scar  =new SportsCar("honda",360,50"km/h");
// Do not change the code below
window.Car = Car;
window.SportsCar = SportsCar;
