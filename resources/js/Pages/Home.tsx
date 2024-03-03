import { useState } from "react";
export default function Home({
    title,
    description,
}: {
    title: string;
    description: string;
}) {
    console.log(title);
    const [isTrue, setIsTrue] = useState<boolean>(false);
    return (
        <>
            <div>tes</div>
            <h1>ini home</h1>
            {isTrue ? <div>true gan</div> : <div>false gan</div>}
        </>
    );
}
