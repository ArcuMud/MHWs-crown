import { useLocalStorage } from '@uidotdev/usehooks';
import { useNavigate, useParams } from 'react-router';

import { compress, decompress } from '@/utils/stringCompressor';

import { BOSS_MONSTERS } from '../constants/BOSS_MONSTERS';
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
  const { cid } = useParams();
  const navigate = useNavigate();
  const [crowns, setCrowns] = useLocalStorage('crowns', initialCrowns);

  const getC = () => cid || initialCrowns;

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
    navigate(`/crown/${compressed}`);
  };

  const saveCrowns = () => {
    const c = cid || genInitialSearchParams();
    setCrowns(c);
  };

  const loadCrowns = () => {
    navigate(`/crown/${crowns}`);
  };

  const resetCrown = () => {
    navigate(`/crown`);
  };

  return {
    getCrown,
    setCrown,
    saveCrowns,
    loadCrowns,
    resetCrown,
  };
}
