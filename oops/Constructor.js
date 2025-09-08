                                            //  Constructor questions
// question 1


function Room(roomNumber, type, price, isAvailable) {
    this.roomNumber = roomNumber;
    this.type = type;
    this.price = price;
    this.isAvailable = isAvailable;
  
    this.displayRoomInfo = function() {
      return `Room ${this.roomNumber} (${this.type}) - $${this.price}/night. Availability: ${this.isAvailable ? 'Available' : 'Not Available'}`;
    };
  }
  
  
  const room1 = new Room(101, 'Single', 100, true);
  const room2 = new Room(102, 'Double', 150, false);
  const room3 = new Room(103, 'Suite', 250, true);
  
  
  console.log(room1.displayRoomInfo());
  console.log(room2.displayRoomInfo());
  console.log(room3.displayRoomInfo());
 
// question 2

function Course(title, instructor, duration, studentsEnrolled) {
    this.title = title;
    this.instructor = instructor;
    this.duration = duration;
    this.studentsEnrolled = studentsEnrolled;
  }
  
  const course1 = new Course("JavaScript for Beginners", "darshan", "3 months", 150);
  console.log(course1);
  

  // question 3

  function Wallet(userName,balance,currency){
  this.userName = userName;
  this.balance = balance;
  this.currency = currency;
  
}
Wallet.prototype.addMoney=function(money){
 this.balance +=money
}
let satya = new Wallet("satya",100000,"rupees")
console.log(satya)
satya.addMoney(50000)
console.log(satya)

// question 4 

function Weather(city,temperature,humidity,forecast){
  this.city = city;
  this.temperature = temperature;
  this.humidity = humidity;
  this.forecast = forecast;
}
Weather.prototype.showForecast = function(){
  console.log(`The weather forecast for ${this.city} is ${this.forecast}`);
}
let Delhi = new Weather("delhi",34,115,"sunny")
console.log(Delhi)
Delhi.showForecast()

// question 5

function Student(name, rollNumber, grade) {
  this.name = name;
  this.rollNumber = rollNumber;
  this.grade = grade;
  this.subjects = [];  
  
  
  this.addSubject = function(subject) {
      this.subjects.push(subject);
  };
}


let student1 = new Student("John Doe", 101, "A");

student1.addSubject("Mathematics");
student1.addSubject("Science");

console.log(student1);

