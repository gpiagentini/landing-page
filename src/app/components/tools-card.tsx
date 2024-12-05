
type CardProps = {
    title: string;
    tools: string
}

export default function ToolsCard({ title, tools }: CardProps) {
    return (
        <div className="relative border text-center rounded bg-background-main">
            <span className="font-rubik text-lg relative -top-4 bg-background-main px-4">{title}</span>
            <div className="text-start pl-3 pb-2">
                {
                    tools.split("|").map((tool: string, index: number) => {
                        return <p key={index}>{tool}</p>
                    })
                }
            </div>
        </div>
    )
}