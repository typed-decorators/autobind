import { autobind } from "../src/autobind";

class C {
  readonly name: string;

  constructor(name: string) {
    this.name = name;
  }

  //@autobind
  f() {
    console.log("this:", this);
  }
}

const c = new C("foo");

console.log("Call f() as method:");
c.f();

console.log("Call f() as function:");
const f = c.f;
f();
