describe('main.js', function() {
    describe('calculate()', function() {
        it('validates expression when the FIRST number is invalid', function(){
            spyOn(window, 'updateResult').and.stub();

            calculate('a+3');

            expect(window.updateResult).toHaveBeenCalled();
            expect(window.updateResult).toHaveBeenCalledWith('Expression not recognized');
            expect(window.updateResult).toHaveBeenCalledTimes(1);

        });
        it('validates expression when the SECOND number is invalid', function(){
            spyOn(window, 'updateResult'); // and.stub() is the default, can be omitted 
            calculate('a+3');

            expect(window.updateResult).toHaveBeenCalled();
            expect(window.updateResult).toHaveBeenCalled();

        });
        it('validates expression when operation is invalid', function(){
            spyOn(window, 'updateResult');  // and.stub() is the default, can be omitted 

            calculate('2_3');

            expect(window.updateResult).toHaveBeenCalled();
            expect(window.updateResult).toHaveBeenCalled();

        });
        xit('calls add');
        xit('calls subtract');
        xit('calls multiply');
        xit('calls divide');
        xit('validates operation');
        xit('calls updateResult');
    });

    describe('updateResult()', function() {
        beforeAll(function() {
            // Executed just once before all specs are executed
            const element = document.createElement('div');
            element.setAttribute('id', 'result');

            document.body.appendChild(element);

            this.element = element;
        });
        
        afterAll(function() {
            // Executed just once after all specs are executed
            document.body.removeChild(this.element);
        });
        it('adds result to DOM element', function() {
            updateResult('5');

            expect(this.element.innerText).toBe('5');
        });
    });

});