type OK = "ok";
type Result = OK | "fail" | `abort`;
type PrivateResultId = `__${Result}_id`;
type OK_ID = `id_${OK}`;

export interface MyObject {
    foo: Result;
    _foo: PrivateResultId;
    ok: OK_ID;
}
