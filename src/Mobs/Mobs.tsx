import { Fragment } from 'react';
import { MOBS } from './constants';
import { MobItem } from './MobItem';

import './Mobs.css';

export function Mobs() {
  return (
    <div className="mobs-grid m-10">
      {MOBS.map((mob) => (
        <Fragment key={mob.className}>
          <MobItem mob={mob} />
        </Fragment>
      ))}
      <div className="source" />
    </div>
  );
}
