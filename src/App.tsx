import { Navigate, Route, Routes } from 'react-router';

import { BossMonster } from './BossMonster/BossMonster';

function App() {
  return (
    <Routes>
      <Route index element={<Navigate to="crown" replace />} />

      <Route path="crown">
        <Route index element={<BossMonster />} />
        <Route path=":cid" element={<BossMonster />} />
      </Route>
    </Routes>
  );
}

export default App;
