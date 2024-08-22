const StringKeys = ({ children }: { children: string }) => {
    return (
        <span className="text-[#66d9ef]">{children}</span>
    )
}

const StringValues = ({ children }: { children: string }) => {
    return (
        <span className="text-wrap text-[#E6E476]">{children}</span>
    )
}

const Tokens = ({ children }: { children: string }) => {
    return (
        <span className="text-white">{children}</span>
    )
}
const Numbers = ({ children }: { children: string }) => {
    return (
        <span className="text-[#B293F7]">{children}</span>
    )
}

const Comments = ({ children }: { children: string }) => {
    return (
        <span className="text-white/40">{children}</span>
    )
}

export const CodeSnippet = () => {

    return (
        <pre className="bg-[#282A36] overflow-auto resize-none rounded max-h-52 outline-none p-2 flex-1">
            <code className="flex">
                <span className="relative font-extralight text-white/50 px-2 flex flex-col">
                    <span>1 |</span>
                    <span>2 |</span>
                    <span>3 |</span>
                    <span>4 |</span>
                    <span>5 |</span>
                    <span>6 |</span>
                    <span>   </span>
                    <span>7 |</span>
                </span>

                <pre>
                    <code className="flex flex-col">
                        <Comments>{'// 20240819034209'}</Comments>
                        <Comments>{'// http://api.matrizz/v2/'}</Comments>
                        <Tokens>{'{'}</Tokens>
                        <span>
                            <StringKeys>{'    "statusCode": '}</StringKeys><Numbers>{'429'}</Numbers><Tokens>{','}</Tokens>
                        </span>
                        <span>
                            <StringKeys>{'    "error": '}</StringKeys><StringValues>{'"Too Many Requests"'}</StringValues><Tokens>{','}</Tokens>

                        </span>
                        <span>
                            <StringKeys>{'    "message": '}</StringKeys><StringValues>{'"Rate limit exceeded, retry in 1 minute"'}</StringValues>

                        </span>
                        <Tokens>{'}'}</Tokens>
                    </code>
                </pre>

            </code>
        </pre>
    )
}