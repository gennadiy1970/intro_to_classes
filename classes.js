{
  class Human {
    constructor() {}
  }
}
/* ----------------- параметры --------------------  */
{
    class Human {
      constructor(name = "Anonim") {
        this.name = name;
      }
    }
    const ann = new Human ('Anna');
    ann.name // Anna
    const anonim = new Human ();
    anonim.name // Anonim
}

/* ------------- методы ------------------------  */
{
    class Human {
      constructor(name = "Anonim") {
        this.name = name;
      }
      hello () {
        return `Hello! I'm ${this.name}`
      }
    }
    const ann = new Human ('Anna');
    ann.hello()  // Hello! I'm Anna  
}

/* ------------- наследование ------------------------  */
{
  class Human {
      constructor(name = "Anonim") {
        this.name = name;
      }
  }
  class Student extends Human {         // extends
      constructor(name, group = 'FE') {
        super(name)                     // super
        this.group = group;
      }
  }
      const ann = new Student('Anna', 'FE1')
      ann.name   // Anna
      ann.group  // FE1
}

/* ------------- наследование методов ------------------------  */

{
  class Human {
      constructor(name = "Anonim") {
        this.name = name;
      }
      hello () {
        return `Hello! I'm ${this.name}`
      }
  }
  class Student extends Human {         // extends
      constructor(name, group = 'FE') {
        super(name)                     // super
        this.group = group;
      }
      hi () {
        return `Hello! I'm ${this.name}
and I study in ${this.group} group.`
      }
  }
      const ann = new Student('Anna', 'FE1')
      ann.hello()   // Hello! I'm Anna
      ann.hi()      // Hello! I'm Anna
                    // and I study in FE1 group.
}
/* ------------- статические методы ------------------------  */
{   //   static - значит без new
    class Double {
      static show (value) {
        return value * 2
      }
    }
    Double.show(5) //  10
}
/* ------------- get / set ------------------------  */
{
  class Human {
      constructor(){}
      get name () {
        return this.firstname
      }
      set name (value) {
        return this.firstname = value
      }
      get surname () {
        return this.lastname
      }
      set surname (value) {
        return this.lastname = value
      }
  }
  const ann = new Human();
  ann.name = 'Anna';
  ann.name;     // Anna
  ann.surname = 'Kern';
  ann.surname;  // Kern
}



