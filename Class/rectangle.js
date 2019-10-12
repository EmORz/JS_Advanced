class Rectangle{
    constructor( width, height, color){
        this.width = width;
        this.height = height;
      
        this.color = color;
    }

    calcArea(){
        return this.width * this.height;
    }
}

let rect = new Rectangle(20, 30, 'red');

console.log(rect.calcArea());
console.log(rect.width);