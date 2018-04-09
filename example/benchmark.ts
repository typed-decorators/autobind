import { autobind } from "../src/autobind";

class C {
  readonly name: string;

  count = 0;

  constructor(name: string) {
    this.name = name;
  }

  @autobind
  a() {
    this.count++;
  }

  @autobind
  b() {
    this.count++;
  }
}

console.log("performance:")

console.time("@autobind");
for (let i = 0; i < 1000000; i++) {
  const o = new C(`@autobind (${i})`);
  const a = o.a;
  a();
}
console.timeEnd("@autobind");

console.time("nothing");
for (let i = 0; i < 1000000; i++) {
  const o = new C(`nothing (${i})`);
  const b = o.b.bind(this);
  b();
}
console.timeEnd("nothing");
