/**
 * Comma separated money value
 * @param input [number]
 */
import toLocaleString from "./toLocaleString";
import toRound from "./toRound";

export const sign = '₦';

const def = (input: number) => input && sign + toLocaleString(toRound(input));
export default def;
