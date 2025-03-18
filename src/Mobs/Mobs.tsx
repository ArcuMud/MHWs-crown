import { Fragment } from 'react';
import { clsx } from 'clsx';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/components/ui/tooltip';
import { MOBS } from './constants';
import './Mobs.css';

export function Mobs() {
  return (
    <div className="mobs-grid m-10">
      {MOBS.map((mob) => (
        <Fragment key={mob.className}>
          <Tooltip>
            <TooltipTrigger asChild>
              <div className={clsx(['mob', mob.className])}>
                {mob.noSize ? null : (
                  <>
                    <div className="crown small" />
                    <div className="crown big" />
                  </>
                )}
              </div>
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
