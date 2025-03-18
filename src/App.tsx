import { TooltipProvider } from '@radix-ui/react-tooltip';
import { Mobs } from './Mobs/Mobs';

function App() {
  return (
    <TooltipProvider>
      <Mobs />
    </TooltipProvider>
  );
}

export default App;
