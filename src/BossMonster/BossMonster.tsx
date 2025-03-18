import { Fragment } from 'react';
import { Button } from '@/components/ui/button';
import { useCrown } from './useCrown';
import { BOSS_MONSTERS } from './constants';
import { MobItem } from './MobItem';

import './Mobs.css';

export function BossMonster() {
  const { saveCrowns, loadCrowns, resetCrown } = useCrown();

  return (
    <div className="flex m-10 gap-10">
      <div className="relative">
        <div className="mobs-grid">
          {BOSS_MONSTERS.map((mob) => (
            <Fragment key={mob.className}>
              <MobItem mob={mob} />
            </Fragment>
          ))}
          <div className="source" />
        </div>
        <div className="flex red-arrow items-center justify-center">
          <div className="img" />
          <div>Click here!</div>
        </div>
        <p className="text-center mt-4">
          {'Picture source: '}
          <a href="https://x.com/kochamhw" target="_blank" rel="noopener noreferrer">
            https://x.com/kochamhw
          </a>
        </p>
      </div>

      <div className="flex flex-col justify-center gap-4">
        <Button onClick={() => saveCrowns()}>Save</Button>
        <Button onClick={() => loadCrowns()}>Load</Button>
        <Button onClick={() => resetCrown()}>Reset</Button>
      </div>
    </div>
  );
}
