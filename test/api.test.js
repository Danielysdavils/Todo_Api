const request = require('supertest');
const UrlAPI = "http://localhost:3333";

describe("UrlAPI", () => {
    test('testar rota aluno', () => {
        return request(UrlAPI).get('/aluno')
        .then((resposta) => {
            expect(resposta.statusCode).toBe(200)
        })
    })
})