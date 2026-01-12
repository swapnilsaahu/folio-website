import { useEffect } from "react";

const LoadingScreenLaunch = () => {
    let count = 0;
    useEffect(() => {
        for (let i = 0; i < 50; i += 10) {
            count += i;
        };
    }, [])
    return (
        <div>
            <div>
                <p>loading..</p>
                <div className={`w-${count}px bg-blue-500 border-2`}></div>
            </div>
        </div>
    )
}
export default LoadingScreenLaunch;
