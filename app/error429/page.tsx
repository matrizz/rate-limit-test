export default function Error429() {
    return (
        <div className="w-screen h-full p-24 flex flex-col justify-center item-center ">
            <div className="flex flex-1 flex-col items-center">
                <img src="/429.png" className="max-w-52 dark:invert fill-white my-5" alt="" />
                <h1 className="text-5xl py-5">Error 429</h1>
                <p className="text-lg opacity-65">Rate limit exceeded, retry in few minutes.</p>
            </div>
        </div>
    )
}