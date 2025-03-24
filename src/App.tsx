import { Navigate, Route, Routes } from 'react-router';

import { Crown } from './Crown/Crown';
import { Mission } from './Mission/Mission';
import { AppLayout } from './AppLayout';

function App() {
  return (
    <>
      <Routes>
        <Route index element={<Navigate to="crown" replace />} />

        <Route path="crown" element={<AppLayout />}>
          <Route index element={<Crown />} />
          <Route path=":cid" element={<Crown />} />
        </Route>

        <Route path="mission" element={<AppLayout />}>
          <Route index element={<Mission />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
