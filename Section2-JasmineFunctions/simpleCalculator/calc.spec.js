describe('calc.js', function() {
    it('should add numbers to total', function() {
        const calculator = new Calculator();
        calculator.add(5);
        expect(calculator.total).toBe(5);
        //expect(10).toBe(10);

    });

    it('should subract numbers from total', function() {
        const calculator = new Calculator();
        calculator.total = 30;
        calculator.subtract(5);

        expect(calculator.total).toBe(25);
    });

    it('should multiply numbers by total', function() {
        const calculator = new Calculator();
        calculator.total = 100;
        calculator.multiply(2);
    
        expect(calculator.total).toBe(200);
    });

    it('should divide numbers into total', function() {
        const calculator = new Calculator();
        calculator.total = 200;
        calculator.divide(2);
    
        expect(calculator.total).toBe(100);
    });
});