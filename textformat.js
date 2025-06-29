/**
 * textformat - Basic Text Formatting Utilities
 * Author: AiutiDiGioco
 * License: Custom
 */

const textformat = {
    /**
     * Converts a string to title case.
     * @param {string} str - The string to format.
     * @returns {string}
     */
    toTitleCase(str) {
        if (typeof str !== 'string') {
            console.error('[textformat] Invalid input. Expected a string.');
            return '';
        }
        return str
            .toLowerCase()
            .split(' ')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');
    },

    /**
     * Truncates a string to a maximum length, adding "..." if needed.
     * @param {string} str - The string to truncate.
     * @param {number} maxLength - Maximum length allowed.
     * @returns {string}
     */
    truncate(str, maxLength) {
        if (typeof str !== 'string' || typeof maxLength !== 'number' || maxLength <= 0) {
            console.error('[textformat] Invalid parameters.');
            return '';
        }
        return str.length > maxLength ? str.slice(0, maxLength) + '...' : str;
    },

    /**
     * Counts the number of words in a string.
     * @param {string} str - The string to process.
     * @returns {number}
     */
    wordCount(str) {
        if (typeof str !== 'string') return 0;
        return str.trim().split(/\s+/).filter(Boolean).length;
    }
};

// Example usage:
// console.log(textformat.toTitleCase('hello world from aiutidigioco')); // 'Hello World From Aiutidigioco'
// console.log(textformat.truncate('This is a long sentence.', 10)); // 'This is a ...'
// console.log(textformat.wordCount('This is a test.')); // 4

module.exports = textformat;
