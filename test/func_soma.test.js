const parEimpar = require('./par_impar.js')

test("caso de teste de numero 3", () => {
    expect(parEimpar(3)).toBe(`O numero ${3} é impar`)
})
