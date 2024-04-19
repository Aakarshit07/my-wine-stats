// Function to calculate mean
export const calculateMean = (values) => {
    const sum = values.reduce((acc, val) => acc + val, 0);
    return sum / values.length;
};

// Function to calculate median
export const calculateMedian = (values) => {
    const sortedValues = values.slice().sort((a, b) => a - b);
    const mid = Math.floor(sortedValues.length / 2);
    if (sortedValues.length % 2 === 0) {
        return (sortedValues[mid - 1] + sortedValues[mid]) / 2;
    } else {
        return sortedValues[mid];
    }
};

// Function to calculate mode
export const calculateMode = (values) => {
    const counts = {};
    values.forEach((value) => {
        counts[value] = (counts[value] || 0) + 1;
    });
    const mode = Object.keys(counts).reduce((a, b) => (counts[a] > counts[b] ? a : b));
    return counts[mode] === 1 ? parseFloat(mode) : parseFloat(mode);
};

// Function to calculate Gamma
export const calculateGamma = (ash, hue, magnesium) => {
    return (ash * hue) / magnesium;
};
