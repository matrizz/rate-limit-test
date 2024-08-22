//@ts-nocheck
import { TypeWriteAnimation } from "../components/TypingAnimation"

export default async function Sentence() {

    const res = await fetch('http://localhost:3001/api/v1/sentence', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
        cache: "no-cache"
    })
    const data = await res.json()

    const sentence = []
    sentence.push(data.message)

    return (
        <div className="w-full h-full flex p-24 items-center justify-center">
            <TypeWriteAnimation string={sentence} />
        </div>
    )
}