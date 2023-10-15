'use client'
import Image from "next/image"
import Link from "next/link"
import { NavItem } from "./nav_itens"

const nav_items = [
    {
        label: 'Home',
        href: '/'
    },
    {
        label: 'Projetos',
        href: '/projects'
    }
]

export const Header = () => {
    return (
        <header className="absolute top-0 w-full z-10 h-24 flex items-center justify-center">
            <div className="container flex items-center justify-between">
                <Link href="/">
                    <Image
                        width={58}
                        height={45}
                        src= '/images/logo.svg'
                        alt= 'logo GB'
                    />
                </Link>

                <nav className="flex items-center gap-4 sm:gap-10">
                    {
                        nav_items.map(item => (
                            <NavItem {...item} key={item.label} />
                        ))
                    }
                </nav>

            </div>
        </header>
    )
}