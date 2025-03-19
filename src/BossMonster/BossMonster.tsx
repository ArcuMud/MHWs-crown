import { Fragment, useRef } from 'react';

import { Button } from '@/components/ui/button';
import { captureScreenshot } from '@/utils/captureScreenshot';
import { getCurrentTimeFormatted } from '@/utils/getCurrentTimeFormatted';

import { BOSS_MONSTERS } from './constants';
import { MobItem } from './MobItem';
import { useCrown } from './useCrown';

import './Mobs.css';

export function BossMonster() {
  const targetRef = useRef<HTMLDivElement>(null);

  const { saveCrowns, loadCrowns, resetCrown } = useCrown();

  const handleCapture = async () => {
    if (!targetRef.current) return;

    const timestamp = getCurrentTimeFormatted();

    try {
      await captureScreenshot(targetRef.current, {
        backgroundColor: '#ffffff',
        quality: 0.8,
        filename: `mhws-crowns-${timestamp}.jpg`,
        removeGridGap: true,
        width: 900,
        height: 900,
      });
    } catch (error) {
      console.error('截圖失敗:', error);
    }
  };

  return (
    <div className="flex m-10 gap-10">
      <div className="relative">
        <div ref={targetRef} className="mobs-grid">
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
        <Button onClick={() => handleCapture()}>Export</Button>
      </div>
    </div>
  );
}
