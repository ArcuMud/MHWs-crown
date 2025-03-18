import { TooltipProvider } from '@/components/ui/tooltip';
import { BossMonster } from './BossMonster/BossMonster';

function App() {
  return (
    <TooltipProvider>
      <BossMonster />
    </TooltipProvider>
  );
}

export default App;
