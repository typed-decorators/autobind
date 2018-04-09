export function autobind<F extends Function>(
  target: any,
  name: string,
  descriptor: TypedPropertyDescriptor<F>,
): TypedPropertyDescriptor<F> {
  const { enumerable, configurable, value } = descriptor;

  return {
    enumerable,
    configurable,

    get() {
      return value!.bind(this);
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
