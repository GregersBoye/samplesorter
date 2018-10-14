const chai = require(`chai`);
const expect = chai.expect;
const Quicksort = require(`./../../../worker/src/Quicksort`);

describe(`QuickSort`, () => {
    describe(`findPivot`, () => {
        it(`can find the middle of a list of odd items`, () => {
            const list = [5, 4, 3, 7, 1, 9, 2, 6, 8];
            const expectedPivot = 1;

            const quickSort = new Quicksort(list);

            expect(quickSort.findPivot()).to.equal(expectedPivot);
        });

        it(`can find the semi-middle of a list of even items`, () => {
            const list = [5, 4, 3, 7, 1, 9, 2, 6];
            const expectedPivot = 7;

            const quickSort = new Quicksort(list);

            expect(quickSort.findPivot()).to.equal(expectedPivot);
            quickSort.sort()
        });
    });
});
