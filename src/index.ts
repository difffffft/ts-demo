class Person {
  private _name: string;
  readonly age: number = 0;
  constructor(_name: string) {
    this._name = _name;
  }
  get name(): string {
    return this._name;
  }
}

interface state {
  msg: string;
}
type stateDataFun = () => state;

const data: stateDataFun = (): state => {
  const p: Person = new Person("Hello TypeScript!");
  return {
    msg: p.name,
  };
};

const app = Vue.createApp({ data });
app.mount("#app");
