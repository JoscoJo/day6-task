//Day -6)
// 1) github practice repo task

class movie
{
    constructor(title,studio,rating)
    {
        this.title=title;
        this.studio=studio;
        this.rating=rating;

    if(rating==null)
    {
        return this.rating="PG";
    }
    else
    {
        return this.rating=rating;
    }
    }
    getPG(array)
    {
        var result=array.filter((element)=>element.rating=="PG");
        return result;
    }

}

let movie1 = new movie("RRR","AMS",'PG13');
// console.log(movie1);
let movie2 = new movie("RRR","AWS");
//console.log(movie2);


let moviedetails = new movie();
console.log(moviedetails.getPG(array));
let array=[movie1,movie2,movie3];
console.log(array);

// 2) github practice repo task
class circle
{
    constructor(radius,color)
    {
        this.radius=radius;
        this.color=color;
    }
    get Radius()
    {
        return this.radius;
    }
    set modifiedrds(mrds)
    {
        this.radius=mrds;
    }
    get Color()
    {
        return this.color;
    }
    set modifiedcolor(clr)
    {
        this.color=clr;
    }
    get area()
    {
        return "Area of circle is"+" " + this.radius * this.radius * Math.PI;
    }
    get circumference()
    {
        return "Area of circumference is "+ " "+ 2*Math.PI*this.radius;
    }
}

let r = new circle(101,"Blue");
console.log(r.radius);
r.modifiedrds=200;
console.log(r.radius);
r.modifiedcolor="yellow";
console.log(r.color);

console.log(r.area);
console.log(r.circumference);

//3) Write a “person” class to hold all the details.
class uber
{
    constructor(distance,price,waitingtime)
    {
        this.distance=distance;
        this.price=price;
        this.waitingtime=waitingtime;
    }
    getRideDetails()
    {
        return(`The distance of customer ride is ${this.distance} 
        at the rate of ${this.price} with waiting period ${this.waitingtime}`);
    }
    getPrice()
    {
        let price=(this.distance * this.price) + (10 * this.waitingtime);
        return price;
    }
    set distances(dist)
    {
        this.distance=dist;
    }
}

let c1= new uber(10,20,3);
console.log(c1.getRideDetails());
console.log(c1.getPrice());


 // 4) write a class to calculate the uber price.

class person
{
    constructor(firstName,LastName,Age,country)
    {
        this.firstName=firstName;
        this.LastName=LastName;
        this.Age=Age;
        this.country=country;
    
    }
}

let name1=new person("jo","shibu",27,"india","marthandam");
console.log(name1);
let name2=new person("surya","dani",40,"india","tvm");
console.log(name2);