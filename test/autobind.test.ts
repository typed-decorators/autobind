import { autobind } from "../src/autobind";

class C {
  @autobind
  f() {
    return this;
  }
}

console.log("1..3"); // test anything protocol

const c = new C();
const f = c.f;
console.assert(f() === c);
console.log("ok 1");

console.log(c.f === c.f ? "ok 2" : "not ok 2");

console.log(Object.keys(c).length === 0 ? "ok 3" : "not ok 3");
