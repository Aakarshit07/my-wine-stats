import { calculateGamma, calculateMean, calculateMedian, calculateMode } from "./utils";
import { wineData } from "../Data/wineData.js";

/** 
 * Extract Gamma data for each alcohol
 * @param {Array} data - Array of wine data
 * @returns {Object} - Gamma data for each alcohol type
*/

function extractDataForGamma(data){
  const gammaDataByAlcohol = {};
    data.forEach((item) => {
    const alcohol = item.Alcohol;
    if (!gammaDataByAlcohol[alcohol]) {
      gammaDataByAlcohol[alcohol] = [];
    }
    gammaDataByAlcohol[alcohol].push(calculateGamma(item.Ash, item.Hue, item.Magnesium));
  });
  return gammaDataByAlcohol;
}
const gammaDataByAlcohol = extractDataForGamma(wineData);


/**
 * Calculate Gamma stats for each alcohol
 * Gamma = (Ash * Hue) / Magnesium.
 * @param {Object} data - Gamma data for each alcohol
 * @returns {Object} - Gamma stats for each alcohol
*/

export const gammaStatsByAlcohol = Object.fromEntries(
  Object.entries(gammaDataByAlcohol).map(([key, values]) => [
    key,
    {
      mean: calculateMean(values).toFixed(3),
      median: calculateMedian(values).toFixed(3),
      mode: calculateMode(values).toFixed(3),
    },
  ])
);