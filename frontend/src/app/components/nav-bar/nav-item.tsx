import Link from 'next/link';
import Card from '../ui/card';

export default function NavItem({name, path}: {name: string, path: string}) {
    return (
        <div className="">
            <Link href={path}>
                {name}
            </Link>
        </div>
    );
}