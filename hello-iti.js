class HelloITI {
  constructor() {
    this.messageITI = "Hello ITI!";
    this.messageGit = "Hello Git!";
  }

  printHelloITI() {
    console.log(this.messageITI);
  }

  printHelloGit() {
    console.log(this.messageGit);
  }
}

const greeter = new HelloITI();
greeter.printHelloITI();
greeter.printHelloGit();
