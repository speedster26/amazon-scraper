import Link from "next/link"

type Props = {
    results: Product[]
}

function Results({ results }: Props) {
    return (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-5 w-full">
            {results.map((result) => (
                <Link href={result.url} key={result.title} className="flex flex-col space-x-4 w-full bg-white rounded-lg shadow-md p-5">
                    <img src="" srcSet={result.imageset} alt={result.title} className="object-contain w-full h-40 py-5" />
                    <div className="flex flex-col py-5 flex-1">
                        <p className="font-bold">{result.title}</p>
                        <p className="text-sm text-gray-500">{result.rating} ({result.reviews} reviews)</p>
                        <div>
                            <p className="font-bold text-sky-500 pt-2 text-xl mt-auto">
                                {result.price > 0 ? `₹${result.price}` : "N/A"}
                            </p>
                            {result.previous_price > 0 && (
                                <p className="font-bold text-sky-500/50 line-through pt-2 text-xl mt-auto">₹{result.previous_price}</p>
                            )}
                        </div>
                        <div className="flex flex-wrap gap-2 justify-end mt-5">
                            {result.features.map((feature)=>(
                                feature && <p key={feature} className="text-xs text-white bg-sky-500 py-1 px-2 rounded-md">
                                    {feature}
                                </p>
                            ))}
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    )
}

export default Results