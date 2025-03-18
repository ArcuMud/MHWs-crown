import { useSearchParams } from 'react-router';
import { BOSS_MONSTERS } from './constants';

function genInitialSearchParams() {
  return `u=${''.padStart(BOSS_MONSTERS.length * 3, '0')}`;
}

export function useQueryString() {
  const [searchParams, setSearchParams] = useSearchParams(genInitialSearchParams());
  console.log('🚀 ~ useQueryString ~ searchParams:', searchParams.get('u'));
}
