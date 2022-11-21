export interface RepositoryRobots<T> {
    getAllRobots: () => Promise<Array<T>>;
    getRobot?: (id: number) => Promise<T>;
    createRobot: (item: Partial<T>) => Promise<T>;
    updateRobot: (item: Partial<T>) => Promise<T>;
    deleteRobot: (id: string) => Promise<void>;
}
