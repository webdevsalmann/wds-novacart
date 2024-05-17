import { CheckCheck, ShieldAlert, X } from "lucide-react";

export default function CriteriaCard({ data: { color, title, lists } }) {
    return (
        <div className={`relative p-sm bg-${color}-600/5 border border-${color}-800 rounded-md overflow-hidden`}>
            <h3>{title}</h3>

            <ul className="mt-base leading-7">
                {lists.map((item, i) => (
                    <li className="flex gap-2" key={title + i}>
                        <span>
                            {color === "green" ? <CheckCheck className="mt-1.5 size-4 text-green-500" /> :
                                color === "yellow" ? <ShieldAlert className="mt-1.5 size-4 text-yellow-600" />:
                                <X className="mt-1.5 size-4 text-red-600" />
                            }
                        </span>
                        <span>{item}</span>
                    </li>
                ))}
            </ul>
        </div>
    )
}
