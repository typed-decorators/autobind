const IDENTIFIER = `@typed-decorators/autobind`;

export function autobind<F extends Function>(
  _target: any,
  name: string,
  descriptor: TypedPropertyDescriptor<F>,
): TypedPropertyDescriptor<F> {
  const { enumerable, configurable, value } = descriptor;

  const boundMethod = Symbol(`${IDENTIFIER}/${name}`);

  return {
    enumerable,
    configurable,

    get(this: { [boundMethod]: any }) {
      return this[boundMethod] || (this[boundMethod] = value!.bind(this));
    },

    set(value: F) {
      Object.defineProperty(this, name, {
        writable: true,
        enumerable: true,
        configurable: true,
        value,
      });
    },
  };
}
