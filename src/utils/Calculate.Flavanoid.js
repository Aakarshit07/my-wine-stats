import { calculateMean, calculateMedian, calculateMode } from "./utils";
import { wineData } from "../Data/wineData.js";

/**
 * Extract Flavanoid data for each alcohol
 * @param {Array} data - Array of wine data
 * @returns {Object} - Flavanoid data for each alcohol type
 * 
*/

function extractFlavanoid(data) {
  const flavanoidDataByAlcohol = {};
    data.forEach((item) => {
      const alcohol = item.Alcohol;
      if (!flavanoidDataByAlcohol[alcohol]) {
        flavanoidDataByAlcohol[alcohol] = [];
      }
      flavanoidDataByAlcohol[alcohol].push(Number(item.Flavanoids));
    });

  return flavanoidDataByAlcohol;
}
const flavanoidDataByAlcohol = extractFlavanoid(wineData);


/**
 * Calculate Flavanoid stats for each alcohol
 * @param {Object} data - Flavanoid data for each alcohol
 * @returns {Object} - Flavanoid stats for each alcohol
*/

export const flavanoidStatsByAlcohol = Object.fromEntries(
    Object.entries(flavanoidDataByAlcohol).map(([key, values]) => [
      key,
      {
        mean: calculateMean(values).toFixed(3),
        median: calculateMedian(values).toFixed(3),
        mode: calculateMode(values).toFixed(3),
      },
    ])
);
