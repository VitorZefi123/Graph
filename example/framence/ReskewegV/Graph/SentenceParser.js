import Comparison from './Comparison.js';
import AreaUnit from './AreaUnit.js';

class SentenceParser {
    // Constructor to initialize the sentence
    constructor(sentence) {
        this.sentence = sentence;
    }

    // Method to process the sentence
    parseSentence() {
        // Debugging
        console.log("Parsing sentence:", this.sentence);

        // Call getValueFromType to process the sentence
        return this.getValueFromType(this.sentence);
    }

     getValueFromType(sentence) {
        debugger;
        // Regular expression to match words and punctuation separately
        const regex = /[\w]+|[.,!?;]/g;
    
        // Use the regex to find all matches in the sentence
        const words = sentence.match(regex) || []; // Return an empty array if no matches
        
        const result = {
            comparisonOperator: null,
            value: null,
            unit: null
        };
    
    // Iterate through words and check if they match comparison terms or units
    for (let i = 0; i < words.length; i++) {
        const word = words[i].toLowerCase();

        // Check if the word matches any comparison term
        if (Comparison.termToOperatorMap[word]) {
            result.comparisonOperator = Comparison.termToOperatorMap[word];
        }
        // Check if the word matches any unit
        else if (AreaUnit.unitToNameMap[word]) {
            result.unit = AreaUnit.unitToNameMap[word];
        }
        // If it's a number, store it as the value
        else if (!isNaN(parseFloat(word))) {
            result.value = parseFloat(word);
        }
    }

    return [
        `Comparison Operator: ${result.comparisonOperator || 'N/A'}`,
        `Value: ${result.value || 'N/A'}`,
        `Unit: ${result.unit || 'N/A'}`
    ];
    }
}

export default SentenceParser;
