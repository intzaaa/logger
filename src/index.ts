import chalk, { ForegroundColorName, ModifierName } from "chalk";

export type Level = "dbg" | "inf" | "wrn" | "err" | "silent";

type ModeMap = {
  [level in Level]: ForegroundColorName | ModifierName;
};

const modeMap: ModeMap = {
  dbg: "dim",
  inf: "blue",
  wrn: "yellow",
  err: "red",
  silent: "white",
};

const logger = (id: string, level: Level, message: string) => {
  if (!modeMap[level]) return;
  if (level === "silent") return;

  const time = new Date().toISOString();
  const log = [chalk[modeMap[level]](`[${time}-${level.toUpperCase()}]`), " | ", id, " | ", message];

  if (process?.stdout?.write) {
    process.stdout.write(log.join("") + "\n");
  } else {
    console.log(log.join(""));
  }
};

interface C2<T1, T2, R> {
  (t1: T1): (t2: T2) => R;
  (t1: T1, t2: T2): R;
}

interface C3<T1, T2, T3, R> {
  (t1: T1): C2<T2, T3, R>;
  (t1: T1, t2: T2): (t3: T3) => R;
  (t1: T1, t2: T2, t3: T3): R;
}

function curry2<T1, T2, R>(f: (t1: T1, t2: T2) => R): C2<T1, T2, R> {
  function curriedFunction(t1: T1): (t2: T2) => R;
  function curriedFunction(t1: T1, t2: T2): R;
  function curriedFunction(t1: T1, t2?: T2): any {
    switch (arguments.length) {
      case 1:
        return function (t2: T2): R {
          return f(t1, t2);
        };
      case 2:
        return f(t1, t2!);
    }
  }
  return curriedFunction;
}

function curry3<T1, T2, T3, R>(f: (t1: T1, t2: T2, t3: T3) => R): C3<T1, T2, T3, R> {
  function curriedFunction(t1: T1): C2<T2, T3, R>;
  function curriedFunction(t1: T1, t2: T2): (t3: T3) => R;
  function curriedFunction(t1: T1, t2: T2, t3: T3): R;
  function curriedFunction(t1: T1, t2?: T2, t3?: T3): any {
    switch (arguments.length) {
      case 1:
        return curry2(function (t2: T2, t3: T3): R {
          return f(t1, t2, t3);
        });
      case 2:
        return function (t3: T3): R {
          return f(t1, t2!, t3);
        };
      case 3:
        return f(t1, t2!, t3!);
    }
  }
  return curriedFunction;
}

export default curry3(logger);
