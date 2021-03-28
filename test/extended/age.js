import sel from '../../data/selectors';

describe('Age Field', function () {

    describe('Positive Cases', function () {

        before('Open App', function () {
            browser.url('');
        });

        it('TC-065 Age doesn\'t accept letters' , function () {
            $(sel.age).setValue('abc');
            let error = $(sel.errorMessage).isDisplayed();
            expect(error).toEqual(true);
        });

    });
});
