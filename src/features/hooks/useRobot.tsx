import { useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { rootState } from '../../infrastructure/store/store';
import { RobotsRepository } from '../../services/repository/robot.repository';
import * as act from '../reducer.robots/action.creator';
import { protoRobot, robot } from '../types/robot';

export const useRobots = () => {
    const robots = useSelector((state: rootState) => state.robots);
    const dispatcher = useDispatch();
    const apiRobots = useMemo(() => new RobotsRepository(), []);

    useEffect(() => {
        apiRobots
            .getAllRobots()
            .then((robot) => dispatcher(act.loadActionCreator(robot)))
            .catch((error: Error) => console.log(error.name, error.message));
    }, [apiRobots, dispatcher]);

    const handleAdd = (newRobot: protoRobot) => {
        apiRobots
            .createRobot(newRobot)
            .then((robot: robot) => dispatcher(act.addActionCreator(robot)))
            .catch((error: Error) => console.log(error.name, error.message));
    };
    const handleUpdate = (updateRobot: Partial<robot>) => {
        apiRobots
            .updateRobot(updateRobot)
            .then((robot: robot) => dispatcher(act.updateActionCreator(robot)))
            .catch((error: Error) => console.log(error.name, error.message));
    };
    const handleDelete = (id: string | undefined) => {
        if (typeof id === 'string') {
            apiRobots
                .deleteRobot(id)
                .then(() => dispatcher(act.deleteActionCreator(id)))
                .catch((error: Error) =>
                    console.log(error.name, error.message)
                );
        }
    };
    return {
        robots,
        handleAdd,
        handleDelete,
        handleUpdate,
    };
};
