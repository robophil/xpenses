/**
 * Comma separated number
 * @param input
 */
const def = (input: number) => input.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
export default def;
