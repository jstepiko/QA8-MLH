import exp from '../../data/expected.json'
import sel from '../../data/selectors'

describe('Age field test', function () {

    before('Open App', function () {
        browser.url('');
    });





    beforeEach(() => {
        browser.refresh();
    });

    it('TC-030 Age Field Placeholder = "Hero \'s age" ', function () {
        let placeholder = $(sel.age).getAttribute('placeholder');
        expect(placeholder).toEqual(exp.agePlaceholder);
    });

});
