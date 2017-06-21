/**
 * Round to 2dp
 * @param num [number|string]
 * @param precision [number]
 */
const round = (num: number|string, precision: number = 2) => +(Math.round(+(''+num + 'e+'+precision))  + 'e-'+precision);
export default round;
