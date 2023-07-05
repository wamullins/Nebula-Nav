import { useEffect, useState } from "react";
import axios from "axios";

const useApi = (path) => {
    const [data, setData] = useState();

    useEffect(() => {
        const getData = async () => {
            const resp = await axios.get(`https://nebula-nav-api.vercel.app${path}`);

            setData(resp.data);
        };
        getData();
    }, [data]);

    // adding data as a dependency of useEffect to trigger a rerender
    console.log("api testing");
    // console.log("had a name");

    return {
        // isLoading: data === null,
        data: data,
    };
};

export default useApi;
