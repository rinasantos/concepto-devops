const app = require("./app");
const request = require("supertest");


describe("Rutas GET de las páginas web", () => {
    test("GET /web1 debe responder con contenido de web1.html", async () => {
      const res = await request(app).get("/web1");
      expect(res.statusCode).toBe(200);
      expect(res.text).toContain("<html");
    });
  
    test("GET /web2 debe responder con contenido de web2.html", async () => {
      const res = await request(app).get("/web2");
      expect(res.statusCode).toBe(200);
      expect(res.text).toContain("<html");
    });
  });