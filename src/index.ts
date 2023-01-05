import './scss/main.scss';

require('./scss/main.scss');

const arr = [1, 3, 7];

for (let i = 0; i < arr.length; i += 1) {
  console.log(i);
}

class User {
  private readonly test: string;

  constructor(test: string) {
    this.test = test;
  }

  sayHello(): void {
    console.log(this.test);
  }
}

const newUser = new User('Dima');

newUser.sayHello();
