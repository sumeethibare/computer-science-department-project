import student from "./data"
export default function Achievements() {
    return (
        <ul position="list" className="divide-y divide-gray-100 max-w-7xl mx-auto p-2 py-20">
            {student.map((person) => (
                <li key={person.event} className="flex justify-between gap-x-6 py-5 lg:px-10 items-center px-2">
                    <div className="flex min-w-0 gap-x-4 items-center">
                        {/* <img alt="" src={person.image} className="h-20 w-20 flex-none rounded-full bg-gray-50" /> */}
                        <div className="min-w-0 flex-auto">
                            <p className="text-sm font-semibold leading-6 text-gray-900">{person.name}</p>
                            <p className="mt-1 truncate text-xs leading-5 text-gray-500">{person.event} Competition</p>
                        </div>
                    </div>
                    <div className="shrink-0 flex flex-col items-end">
                        <p className="text-sm leading-6 text-gray-900">{person.position} position</p>
                        <p className="mt-1 text-xs leading-5 text-gray-500">{person.competition}</p>
                    </div>
                </li>
            ))}
        </ul>
    )
}
