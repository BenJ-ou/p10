import { getMonth } from "./index";

describe("Date helper", () => {
  describe("When getMonth is called", () => {
    it("returns janvier for 2022-01-01 as date", () => {
      const date = new Date("2022-01-01");
      const result = getMonth(date);
      expect(result).toBe("janvier");
    });

    it("returns juillet for 2022-07-08 as date", () => {
      const date = new Date("2022-07-08");
      const result = getMonth(date);
      expect(result).toBe("juillet");
    });

    it("returns avril for 2024-04-15 as date", () => {
      const date = new Date("2024-04-15");
      const result = getMonth(date);
      expect(result).toBe("avril");
    });

    it("returns décembre for 2024-12-25 as date", () => {
      const date = new Date("2024-12-25");
      const result = getMonth(date);
      expect(result).toBe("décembre");
    });

    // Ajouter d'autres tests pour tous les mois de l'année si nécessaire
  });
});
