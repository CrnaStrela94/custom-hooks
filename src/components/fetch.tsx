import { useFetch } from "../hooks/useFetch";


export const Fetch = () => {
    const data = useFetch();

    return (
        <div>
            <img src={data?.url} alt="Random Duck" />
            <p>{data?.message}</p>
        </div>
    );
};