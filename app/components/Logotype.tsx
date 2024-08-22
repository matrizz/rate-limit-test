import { Radio_Canada } from "next/font/google"

const RadioCanadaBig = Radio_Canada({ subsets: ['latin']})

export const Logotype = () => {
    return (<pre className={`${RadioCanadaBig.className} drop-shadow-[0_0_0.3rem_#ffffff70] text-5xl font-extrabold`}>
        Rate Limit Test {`\n`} <span className="text-base drop-shadow-[0_0_0.3rem_#ffffff70] font-bold relative bottom-3">with</span> Login
    </pre>)
}