import { Meta } from "@/types/Meta";
import { Link } from "@inertiajs/react";

const Paginator = ({ meta }: { meta: Meta }) => {
    const prev = meta?.links[0]?.url;
    const next = meta?.links[meta.links.length - 1]?.url;
    const current = meta?.current_page;
    return (
        <div className="flex gap-8 items-center justify-center">
            {prev && (
                <Link href={prev} className="border-2 p-2 rounded-md">
                    prev
                </Link>
            )}
            <button>{current}</button>
            {next && (
                <Link href={next} className="border-2 p-2 rounded-md">
                    next
                </Link>
            )}
        </div>
    );
};

export default Paginator;
