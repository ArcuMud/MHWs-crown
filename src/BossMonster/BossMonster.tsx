import { Fragment } from 'react';
import { BOSS_MONSTERS } from './constants';
import { MobItem } from './MobItem';

import './Mobs.css';

export function BossMonster() {
  return (
    <div className="mobs-grid m-10">
      {BOSS_MONSTERS.map((mob) => (
        <Fragment key={mob.className}>
          <MobItem mob={mob} />
        </Fragment>
      ))}
      <div className="source" />
    </div>
  );
}
