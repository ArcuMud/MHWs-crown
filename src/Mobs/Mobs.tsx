import { clsx } from 'clsx';
import { MOBS } from './constants';
import './Mobs.css';
import { Tooltip, TooltipContent, TooltipTrigger } from '@radix-ui/react-tooltip';
import { Fragment } from 'react';

export function Mobs() {
  return (
    <div className="mobs-grid">
      {MOBS.map((mob) => (
        <Fragment key={mob.className}>
          <Tooltip>
            <TooltipTrigger asChild>
              <div className={clsx(['mob', mob.className])} />
            </TooltipTrigger>
            <TooltipContent side="top" align="center">
              <p>{mob.zhName}</p>
            </TooltipContent>
          </Tooltip>
        </Fragment>
      ))}
      <div className="source" />
    </div>
  );
}
