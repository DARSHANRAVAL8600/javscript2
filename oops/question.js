                                                //  factory function question
// question 1
function createProduct(name, price, category) {
    return {
      name: name,
      price: price,
      category: category,
      displayProductInfo: function() {
        return `Product Name: ${this.name}, Price: $${this.price}, Category: ${this.category}`;
      }
    };
  }
  
 
  const laptop = createProduct('Laptop', 999, 'Electronics');
  const phone = createProduct('Smartphone', 499, 'Electronics');
  
  console.log(laptop.displayProductInfo()); 
  console.log(phone.displayProductInfo());  

//   question 2
function createReportCard(name, grade, subject) {
    return {
      name: name,
      grade: grade,
      subject: subject,
     
      displayReportCard: function() {
        return `${this.name}'s Report Card: Subject: ${this.subject}, Grade: ${this.grade}`;
      }
    };
  }
  

  const student1 = createReportCard('harpal', 'A', 'Math');
  const student2 = createReportCard('dharmik', 'B+', 'Science');
  
  console.log(student1.displayReportCard());
  console.log(student2.displayReportCard()); 
  
//   question 3
function createCar(model, rentalRate, availability) {
    return {
      model: model,
      rentalRate: rentalRate,
      availability: availability,
    
      displayCarInfo: function() {
        return `Car Model: ${this.model}, Rental Rate: $${this.rentalRate}/day, Available: ${this.availability ? 'Yes' : 'No'}`;
      }
    };
  }
  

  const car1 = createCar('Toyota Corolla', 30, true);
  const car2 = createCar('Ford Mustang', 50, false);
  const car3 = createCar('Chevrolet Malibu', 40, true);
  
  console.log(car1.displayCarInfo()); 
  console.log(car2.displayCarInfo()); 
  console.log(car3.displayCarInfo()); 
//   question 4
function createBook(title, author, ISBN, availableCopies) {
    return {
      title: title,
      author: author,
      ISBN: ISBN,
      availableCopies: availableCopies,
    
      displayBookInfo: function() {
        return `Title: ${this.title}, Author: ${this.author}, ISBN: ${this.ISBN}, Available Copies: ${this.availableCopies}`;
      },
     
      borrowBook: function() {
        if (this.availableCopies > 0) {
          this.availableCopies--;
          return `${this.title} has been borrowed. ${this.availableCopies} copies left.`;
        } else {
          return `Sorry, ${this.title} is out of stock.`;
        }
      }
    };
  }
  

  const book1 = createBook('To Kill a Mockingbird', 'Harpal', '978-0061120084', 5);
  const book2 = createBook('1984', 'darshan', '978-0451524935', 2);
  const book3 = createBook('The Great Gatsby', 'satya bhai', '978-0743273565', 0);
  
  console.log(book1.displayBookInfo()); 
  console.log(book2.displayBookInfo()); 
  console.log(book3.displayBookInfo()); 
  

  console.log(book1.borrowBook()); 
  console.log(book3.borrowBook());
  
//   question 5

function createEmployeeBadge(name, id, department, position) {
    return {
      name: name,
      id: id,
      department: department,
      position: position,
      displayBadgeInfo: function() {
        return `Employee Badge:\nName: ${this.name}\nID: ${this.id}\nDepartment: ${this.department}\nPosition: ${this.position}`;
      }
    };
  }
  
 
  const employee1 = createEmployeeBadge('harpal', 'E12345', 'Engineering', 'Software Developer');
  const employee2 = createEmployeeBadge('dharmik', 'E67890', 'Marketing', 'Marketing Manager');
  const employee3 = createEmployeeBadge('satya bhai', 'E11223', 'Sales', 'Sales Executive');
  
 
  console.log(employee1.displayBadgeInfo());
  console.log(employee2.displayBadgeInfo()); 
  console.log(employee3.displayBadgeInfo());
 
  