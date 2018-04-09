import { autobind } from "../src/autobind";

class C {
  @autobind
  f() {
    return this;
  }
}

console.log("1..1"); // test anything protocol

const c = new C();
const f = c.f;
console.assert(f() === c);
console.log("ok 1");
