import { useSearchParams } from 'react-router';
import { BOSS_MONSTERS } from './constants';
import { compress, decompress } from '@/utils/stringCompressor';
import { CheckFlag } from './types';

function genInitialSearchParams() {
  return `c=${''.padStart(BOSS_MONSTERS.length, '0')}`;
}

function replaceCharAt(str: string, index: number, char: string): string {
  if (index < 0 || index >= str.length) {
    return str;
  }
  return str.slice(0, index) + char + str.slice(index + 1);
}

export function useCrown() {
  const [searchParams, setSearchParams] = useSearchParams(genInitialSearchParams());

  const getCrown = (id: number) => {
    const c = searchParams.get('c') || genInitialSearchParams();
    const crownValue = decompress(c, BOSS_MONSTERS.length);
    return parseInt(crownValue[id - 1]) as CheckFlag;
  };

  const setCrown = (id: number, value: number) => {
    const c = searchParams.get('c') || genInitialSearchParams();
    const crownValue = decompress(c, BOSS_MONSTERS.length);
    const nextValue = replaceCharAt(crownValue, id - 1, value.toString());
    const compressed = compress(nextValue);
    setSearchParams({ c: compressed });
  };

  return {
    getCrown,
    setCrown,
  };
}
