import { Navigate, Route, Routes } from 'react-router-dom';
import { Favorite } from '../../../features/favorites/Favorites';

import { RobotsPage } from '../../../features/robot.page/RobotPage';

export function AppRoutes() {
    return (
        <>
            <Routes>
                <Route
                    path="robots"
                    element={<RobotsPage></RobotsPage>}
                ></Route>
                <Route
                    path="robotsfavorites"
                    element={<Favorite></Favorite>}
                ></Route>
                <Route path="" element={<></>}></Route>

                <Route
                    path="*"
                    element={<Navigate replace to="offers" />}
                ></Route>
            </Routes>
        </>
    );
}
