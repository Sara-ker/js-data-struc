//Create an object representing a person with properties such as name, age, and email. Write a function that takes an array of these objects and returns a new array containing only the people who are over 30 years old.


function personInfos(name, age, email) {
    return {
      name: name,
      age: age,
      email: email,
    };
  }
  
  
  const persons = [
    personInfos("H", 19, "H@example.com"),
    personInfos("B", 66, "b@example.com"),
    personInfos("k", 42, "K@example.com"),
  ];
  
  
  function peopleOver30(persons) {
    return persons.filter(person => person.age > 30);
  }
  
  
  console.log(peopleOver30(persons));