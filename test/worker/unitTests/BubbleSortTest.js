const chai = require(`chai`);
const expect = chai.expect;
const BubbleSort = require(`./../../../worker/src/BubbleSort`);

describe(`bubblesort`, () => {
    describe(`constructor`, () => {
        it(`sets the list upon initialization`, () => {
            const list = [1,2,3,4];
            const bubbleSort = new BubbleSort(list);

            expect(bubbleSort.list).to.eql(list);
        });
    });

    describe(`swap`, () => {
        it(`can swap two elements`, () => {
            const list = [1,2,3,4,5,6,7,8,9];
            const bubbleSort = new BubbleSort(list);

            bubbleSort.swap(1, 7);

            expect(bubbleSort.list).to.eql([1,8,3,4,5,6,7,2,9]);
        });

        it(`does nothing if first param is invalid`, () => {
            const list = [1,2,3,4,5,6,7,8,9];
            const bubbleSort = new BubbleSort(list);

            bubbleSort.swap(100, 7);

            expect(bubbleSort.list).to.eql(list);
        });

        it(`does nothing if second param is invalid`, () => {
            const list = [1,2,3,4,5,6,7,8,9];
            const bubbleSort = new BubbleSort(list);

            bubbleSort.swap(1, 700);

            expect(bubbleSort.list).to.eql(list);
        });
    });

    describe(`sort`, () => {
        it(`can sort a list`, () => {
            const list = [9,8,7,6,5,4,3,2,1];
            const bubbleSort = new BubbleSort(list);

            bubbleSort.sort();

            expect(bubbleSort.list).to.eql([1,2,3,4,5,6,7,8,9]);
        });
    });

    it(`it takes a while to sort 25000 items`, function() {
        this.timeout(0);
        const list = [];
        for (let i = 0, t = 25000; i < t; i++) {
            list.push(Math.round(Math.random() * t));
        }

        const bubbleSort = new BubbleSort(list);

        bubbleSort.sort();
    });
});
