import { saludo } from "../../api/prueba"

describe("test del archivo pruebas", ()=>{
    test("la funcoin devuelve un hello world", ()=>{
        expect(saludo()).toBe("Hello World")
    })
})