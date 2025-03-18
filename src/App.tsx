import { Button } from '@/components/ui/button';
import { TooltipProvider } from '@/components/ui/tooltip';
import { Mobs } from './Mobs/Mobs';

function App() {
  return (
    <TooltipProvider>
      <Mobs />
      <div className="flex flex-col items-center justify-center min-h-svh">
        <Button>Click me</Button>
      </div>
    </TooltipProvider>
  );
}

export default App;
