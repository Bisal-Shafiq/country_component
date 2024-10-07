import Link from "next/link";

export default function Page() {
    return (
        <div>
            <ul>
                <li><Link href="/countryname/pakistan">Pakistan</Link></li>
                <li><Link href="/countryname/korea">Korea</Link></li>
                <li><Link href="/countryname/japan">Japan</Link></li>
            </ul>
        </div>
    );
}