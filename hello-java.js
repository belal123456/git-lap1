class HelloJava {
  constructor() {
    this.message = "Hello Java!";
  }

  printHelloJava() {
    console.log(this.message);
  }
}

const greeter = new HelloJava();
greeter.printHelloJava();
