安装
```
npm install -g typescript
```

是否安装完成
```
tsc -v
```

初始化
```
npx tsc --init
```

实时编译目录文件
```
npx tsc -w
```

```
// 类型
type b0 = string;
type b1 = boolean | string;
type b2 = "primary" | "public";
type b3 = {};
type b4 = { name: string; age: number; desc?: string };
type b5 = { name: string; [propName: string]: any };
type b6 = (a: number, b: number, c?: number) => number;
type b7 = number[];
type b8 = Array<number>;
type b9 = [string, string];
type b10 = { name: string };
type b11 = { age: number };
type b12 = b10 & b11;
type b13 = b12;
enum b14 {
  English,
  Math,
}

interface Array2<T> {}

// 常用类型
let a0: 0;
let a1: number = 0;
let a2: string = "HelloTs!";
let a3: boolean = true;
let a4: b4;
let a5: b7 = [1, 2, 3];
let a6: b8 = [1, 2, 3];
let a7: b9;
let a8: b12 = { name: "", age: 0 };
let a9: b13 = { name: "", age: 0 };
let a10: b14 = b14.English;
let a11 = (): void => {};
let a12: b6 = (a: number, b: number) => a + b;

//不常用类型
let a13: object = {};
let a14: object = () => {};
let a15: any = "any";
let a16: unknown;
let a17 = (): never => {
  throw new Error("error");
};

//泛型
function fun<K, T>(a: K, b: T): T {
  return b;
}

//类
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
```