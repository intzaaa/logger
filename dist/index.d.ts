type Level = "dbg" | "inf" | "wrn" | "err" | "silent";
interface C2<T1, T2, R> {
    (t1: T1): (t2: T2) => R;
    (t1: T1, t2: T2): R;
}
interface C3<T1, T2, T3, R> {
    (t1: T1): C2<T2, T3, R>;
    (t1: T1, t2: T2): (t3: T3) => R;
    (t1: T1, t2: T2, t3: T3): R;
}
declare const _default: C3<string, Level, string, void>;

export { type Level, _default as default };
