
type CardProps = {
    title: string;
    tools: string
}

export default function ProfessionalCarrerCard({ title, tools }: CardProps) {
    return (
        <div className="relative border text-center p-3 rounded bg-background-main">
            <span className="relative -top-6 bg-background-main px-5">{title}</span>
            <div className="text-start pl-5 pb-2">
                {
                    tools.split("|").map((tool: string, index: number) => {
                        return <p key={index}>{tool}</p>
                    })
                }
            </div>
        </div>
    )
}

