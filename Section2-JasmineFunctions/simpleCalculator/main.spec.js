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
        it('calls add', function() {
            const spy = spyOn(Calculator.prototype, 'add');

            calculate('3+4');

            expect(spy).toHaveBeenCalledTimes(2);
            expect(spy).toHaveBeenCalledWith(3); //the first number
            expect(spy).toHaveBeenCalledWith(4);
        });

        it('calls subtract', function() {
            const spy = spyOn(Calculator.prototype, 'subtract');

            calculate('3-7');

            expect(spy).toHaveBeenCalled();
            expect(spy).toHaveBeenCalledWith(7); //the second number
        });

        it('calls multiply', function() {
            const spy = spyOn(Calculator.prototype, 'multiply');

            calculate('3*8');

            expect(spy).toHaveBeenCalled();
            expect(spy).not.toHaveBeenCalledWith(3); //the first number
            expect(spy).toHaveBeenCalledWith(8); //the second number
        });

        it('calls divide', function() {
            const spy = spyOn(Calculator.prototype, 'divide');

            calculate('3/2');

            expect(spy).toHaveBeenCalled();
            expect(spy).not.toHaveBeenCalledWith(3); //the first number
            expect(spy).toHaveBeenCalledWith(2);

        });

        it('calls updateResult (example using and.callThrough)', function(){
            spyOn(window, 'updateResult');
            spyOn(Calculator.prototype, 'multiply').and.callThrough();

            calculate('5*5');

            expect(window.updateResult).toHaveBeenCalled();
            expect(window.updateResult).toHaveBeenCalledWith(25);
        });

        it('calls updateResult (example using and.callFake)', function(){
            spyOn(window, 'updateResult');
            spyOn(Calculator.prototype, 'multiply').and.callFake(function(number) {
                return 'it works';
            });

            calculate('5*5');

            expect(window.updateResult).toHaveBeenCalled();
            expect(window.updateResult).toHaveBeenCalledWith('it works');
        });

        it('calls updateResult (example using and.returnValue)', function(){
            spyOn(window, 'updateResult');
            spyOn(Calculator.prototype, 'multiply').and.returnValue('whatever [multiply] returns');    

            calculate('5*5');

            expect(window.updateResult).toHaveBeenCalled();
            expect(window.updateResult).toHaveBeenCalledWith('whatever [multiply] returns');
        });

        it('calls updateResult (example using and.returnValues)', function(){
            spyOn(window, 'updateResult');
            spyOn(Calculator.prototype, 'add').and.returnValues(null, 'whatever [add] returns');    

            calculate('5+5');

            expect(window.updateResult).toHaveBeenCalled();
            expect(window.updateResult).toHaveBeenCalledWith('whatever [add] returns');
        });
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