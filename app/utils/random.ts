/**
 * Random number generation
 */
import * as qinu from 'qinu';

export const rand = () => (Math.random() * 10000);

export const rand2 = () => Math.floor(rand());

export const uniq = (length) => qinu({
  length: length,
  chars: "1234567890abcdef"
});
