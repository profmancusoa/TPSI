import { invert_case } from "./es_10g.js";

describe("ESERCIZIO 10g", () => {
    test('TEST 01', () => {
        expect(invert_case('Ciao Mondo!!!')).toBe('cIAO mONDO!!!');
    });
    
    test('TEST 02', () => {
        expect(invert_case('Antonio Mancuso')).toBe('aNTONIO mANCUSO');
    });

    test('TEST 03', () => {
        expect(invert_case('giOVANNI vErDi')).toBe('GIovanni VeRdI');
    });

    test('TEST 04', () => {
        expect(invert_case('Ciro va al mercato...\nCompra 2 mele e una pera...\nQuanto è lungo l`equatore')).toBe('cIRO VA AL MERCATO...\ncOMPRA 2 MELE E UNA PERA...\nqUANTO È LUNGO L`EQUATORE');
    });

    test('TEST 05', () => {
        expect(invert_case('linux torvald')).toBe('LINUX TORVALD');
    });
});
