import { useSearchParams } from 'react-router';
import { useLocalStorage } from '@uidotdev/usehooks';
import { compress, decompress } from '@/utils/stringCompressor';
import { BOSS_MONSTERS } from './constants';
import { CheckFlag } from './types';

function genInitialSearchParams() {
  return compress(''.padStart(BOSS_MONSTERS.length, '0'));
}
const initialCrowns = genInitialSearchParams();

function replaceCharAt(str: string, index: number, char: string): string {
  if (index < 0 || index >= str.length) {
    return str;
  }
  return str.slice(0, index) + char + str.slice(index + 1);
}

export function useCrown() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [crowns, setCrowns] = useLocalStorage('crowns', initialCrowns);

  const getC = () => searchParams.get('c') || initialCrowns;

  const getCrown = (id: number) => {
    const c = getC();
    const crownValue = decompress(c, BOSS_MONSTERS.length);
    return parseInt(crownValue[id - 1]) as CheckFlag;
  };

  const setCrown = (id: number, value: number) => {
    const c = getC();
    const crownValue = decompress(c, BOSS_MONSTERS.length);
    const nextValue = replaceCharAt(crownValue, id - 1, value.toString());
    const compressed = compress(nextValue);
    setSearchParams({ c: compressed });
  };

  const saveCrowns = () => {
    const c = searchParams.get('c') || genInitialSearchParams();
    setCrowns(c);
  };

  const loadCrowns = () => {
    setSearchParams({ c: crowns });
  };

  const resetCrown = () => {
    setSearchParams({ c: genInitialSearchParams() });
  };

  return {
    getCrown,
    setCrown,
    saveCrowns,
    loadCrowns,
    resetCrown,
  };
}
