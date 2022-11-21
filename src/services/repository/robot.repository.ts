import { robot } from '../../features/types/robot';
import { RepositoryRobots } from '../repositoryType/repository.robots';

export class RobotsRepository implements RepositoryRobots<robot> {
    url: string;
    constructor(url = 'https://back-w7-wh5.onrender.com/robots') {
        this.url = url;
    }

    createErrorRobot(response: Response) {
        const message = `Error ${response.status}: ${response.statusText}`;
        const error = new Error(message);
        error.name = 'HTTPError';
        return error;
    }

    getAllRobots(): Promise<Array<robot>> {
        return fetch(this.url)
            .then((response) => {
                if (response.ok) return response.json();
            })
            .then((data) => {
                return data.robots;
            })
            .catch((error: Error) => {
                return `${error}`;
            });
    }
    createRobot(robot: Partial<robot>): Promise<robot> {
        return fetch(this.url, {
            method: 'POST',
            body: JSON.stringify(robot),
            headers: {
                'content-type': 'application/json',
            },
        })
            .then((response) => {
                if (response.ok) return response.json();
                throw this.createErrorRobot(response);
            })
            .catch((error: Error) => {
                return `${error}`;
            });
    }
    updateRobot(partialrobot: Partial<robot>): Promise<robot> {
        return fetch(`${this.url}/ ${partialrobot.id}`, {
            method: 'PATCH',
            body: JSON.stringify(partialrobot),
            headers: {
                'content-type': 'application/json',
            },
        })
            .then((response) => {
                if (response.ok) return response.json();
                throw this.createErrorRobot(response);
            })
            .catch((error: Error) => {
                return `${error}`;
            });
    }
    deleteRobot(id: string | undefined): Promise<void> {
        return fetch(`${this.url}/${id}`, {
            method: 'DELETE',
        })
            .then((response) => {
                if (!response.ok) throw this.createErrorRobot(response);
            })
            .catch((error: Error) => {
                return `${error}` as unknown as void;
            });
    }
}
