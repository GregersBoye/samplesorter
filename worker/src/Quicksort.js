const Sorter = require(`./Sorter`);

class Quicksort extends Sorter {
    /**
     * @param {Array} list The list to be sorted
     * @returns {undefined}
     */
    constructor(list) {
        super(list);
    }

    /**
     * Main function sorts the list
     * @returns {Array} The sorted list
     */
    sort() {

    }

    /**
     * find the middle-most number to avoid worst-case pivot
     * @returns {number} value of a pivot
     */
    findPivot() {
        const middleIndex = Math.ceil(this.list.length / 2);

        return this.list[middleIndex - 1];
    }
}

module.exports = Quicksort;
