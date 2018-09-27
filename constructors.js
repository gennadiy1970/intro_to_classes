{
  function Human () {}
}


/* --------------- параметры ----------------------  */

{
  function Human (name = "Anonim") {
    this.name = name;
  }
  const ann = new Human ('Anna');
  ann.name // Anna
  const anonim = new Human ();
  anonim.name // Anonim

}

/* ------------- методы ------------------------  */
{
    function Human (name = "Anonim") {
      this.name = name;
    }
    Human.prototype.hello = function () {
      return `Hello! I'm ${this.name}`
    }
    const ann = new Human ('Anna');
    ann.hello()  // Hello! I'm Anna
}



/* ------------- наследование ------------------------  */
{
      function Human (name = "Anonim") {
         this.name = name;
      }
      function Student (name, group = "FE") { // param
        Human.apply(this, arguments)             // this, param
        this.group = group;
      }
      // Student.prototype = new Human();       // prototype new
      Student.prototype = Object.create(Human.prototype);       // prototype new
      Student.prototype.constructor = Student;

      const ann = new Student('Anna', 'FE1')
      ann.name   // Anna
      ann.group  // FE1
}



/* ------------- наследование методов ------------------------  */

{
      function Human (name = "Anonim") {
         this.name = name;
      }
      Human.prototype.hello = function () {
         return `Hello! I'm ${this.name}`
      } 
      function Student (name, group = "FE") { // param
        Human.apply(this, [name])             // this, param
        this.group = group;
      }
      Student.prototype =  Object.create(Human.prototype);      // prototype new
      Student.prototype.constructor = Student;
      Student.prototype.hi = function () {
         return `Hello! I'm ${this.name} 
and I study in ${this.group} group.`
      }

      const ann = new Student('Anna', 'FE1')
      ann.hello()   // Hello! I'm Anna
      ann.hi()      // Hello! I'm Anna 
                    // and I study in FE1 group.
}

/* ------------- статические методы ------------------------  */
{
      function Double () {}

         Double.show = function (value) {
           return value * 2
      }
      Double.show(5)  // 10
}

/* ------------- get / set ------------------------  */
{
   const ann = {
      get name () {
        return this.firstname
      },
      set name (value) {
        return this.firstname = value
      },
      get surname () {
        return this.lastname
      },
      set surname (value) {
        return this.lastname = value
      }
   };
  ann.name = 'Anna';
  ann.name;     // Anna
  ann.surname = 'Kern';
  ann.surname;     // Kern
}


