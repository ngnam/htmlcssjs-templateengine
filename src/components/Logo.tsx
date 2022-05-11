import Link from 'next/link'

const Logo = () => {
    return (
        <Link href="/">
            <div className="p-3 rounded-xl cursor-pointer">
                <p className="font-mono text-xl font-semibold text-gray-800 dark:text-gray-50 md:text-xl lg:text-2xl">
                    100+ mini-app
                </p>
            </div>
        </Link>
    )
}

export default Logo
