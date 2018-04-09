# @typed-decorators/autobind

An `@autobind` decorator for TypeScript that is created to "do one thing and do it well".

## SYNOPSIS

```typescript
import { autobind } from "@typed-decorators/autobind";

class Foo {
  @autobind method() {
    // here `this` is the context even if it is refered as a property
    console.log(this);
  }
}

const foo = new Foo();
const boundMethod = foo.method; // same as foo.method.bind(foo)
boundMethod(); // displays foo
```

## See Also

* [core-decorators](https://github.com/jayphelps/core-decorators): the original idea but too large

## Copyright and Licenses

The license is ISC: https://opensource.org/licenses/ISC

Copyright (c) 2018, FUJI Goro.

Permission to use, copy, modify, and/or distribute this software for any purpose with or without fee is hereby granted, provided that the above copyright notice and this permission notice appear in all copies.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.

