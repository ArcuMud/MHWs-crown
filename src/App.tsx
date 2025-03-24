import { Navigate, Route, Routes } from 'react-router';

import { Crown } from './Crown/Crown';
import { Mission } from './Mission/Mission';
import { MissionForm } from './Mission/MissionForm';
import { AppLayout } from './AppLayout';

function App() {
  return (
    <>
      <Routes>
        <Route index element={<Navigate to="crown" replace />} />

        <Route path="crown" element={<AppLayout />}>
          <Route index element={<Crown />} />
          <Route path=":id" element={<Crown />} />
        </Route>

        <Route path="mission" element={<AppLayout />}>
          <Route index element={<Mission />} />
          <Route
            path="edit/:id"
            element={
              <>
                <Mission />
                <MissionForm />
              </>
            }
          />
          <Route
            path="new"
            element={
              <>
                <Mission />
                <MissionForm />
              </>
            }
          />
        </Route>
      </Routes>
    </>
  );
}

export default App;
