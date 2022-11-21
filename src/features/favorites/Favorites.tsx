export function Favorite() {
    const { robots, handleUpdate, handleDelete } = useRobots();

    return (
        <>
            <ul>
                {robots.map((item) => (
                    <li>
                        <div>
                            <div>{item.id}</div>
                            <button
                                onClick={() => {
                                    handleDelete(item.id);
                                }}
                            >
                                ✖
                            </button>
                        </div>
                        <div>
                            <img src={item.image} alt={item.name} />
                        </div>
                        <div>
                            <p>{item.name}</p>
                            {/* <p>{item.species}</p> */}
                        </div>
                        <div>
                            <input
                                type="checkbox"
                                name="kill"
                                //    checked={state === 'Alive' ? true : false}
                                //    onChange={() => {
                                //        setState(state === 'Alive' ? 'Death' : 'Alive');
                                //    }}
                            />
                            <label htmlFor="kill">¿Morirá?</label>
                        </div>
                    </li>
                ))}
            </ul>
        </>
    );
}
import { useRobots } from '../hooks/useRobot';
