class BubbleSort {
    /**
     * Initializes the bubblesort
     *
     * @param {Number[]} list List of elements to be sorted
     */
    constructor(list) {
        this.list = list;
        this.iterations = Math.pow(list.length, 2);
        this.progressPct = 0;
    }

    /**
     * Sorts the list
     * @returns {undefined}
     */
    sort() {
        let progress = 0;

        for (let outer = 0; outer <= this.list.length - 1; outer++) {
            for (let inner = 0; inner <= this.list.length - 1; inner++) {
                const first = inner;
                const second = inner + 1;

                if (this.list[first] > this.list[second]) {
                    this.swap(first, second);
                }
                progress++;
            }

            this.progressPct = (100 * progress / this.iterations).toFixed(5);

            console.log(this.progressPct);
        }
    }

    /**
     * Swaps two elements of the list
     * @param {Number} first Index of first element to be swapped
     * @param {Number} second Index of second element to be swapped
     * @returns {undefined}
     */
    swap(first, second) {
        const firstItem = this.list[first];
        const secondItem = this.list[second];

        if (typeof firstItem === `undefined` || typeof secondItem === `undefined`) {
            return;
        }

        this.list[first] = secondItem;
        this.list[second] = firstItem;
    }
}

module.exports = BubbleSort;
