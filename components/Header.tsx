import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { AiOutlineSearch } from 'react-icons/ai';
import { ConnectWallet } from "@thirdweb-dev/react";
import minticiaLogo from '../assets/00.webp';

const style = {
    headerItems: ` flex items-center justify-end`,
    logoContainer: `flex items-center cursor-pointer`,
    searchIcon: `text-[#8a939b] mx-3 font-bold text-lg`,
    logoText: ` ml-[0.8rem] text-white font-semibold text-2xl`,
    wrapper: `bg-transparent w-screen px-[1.2rem] py-[0.8rem] flex before:blur`,
    headerItem: `text-white px-4 font-bold text-[#c8cacd] hover:text-white cursor-pointer`,
    searchInput: `h-[2.6rem] w-full border-0 bg-transparent outline-0 ring-0 px-2 pl-0 text-[#e6e8eb] placeholder:text-[#8a939b]`,
    searchBar: `flex flex-1 mx-[0.8rem] w-max-[520px] items-center hover:bg-[#1a2250] rounded-[0.8rem] border-[#1a2250] border-2 `,
}

const Header = () => {
    return (
        <div className={style.wrapper}>
            <Link href="/">
                <div className={style.logoContainer}>
                    <Image src={minticiaLogo} alt='' height={44} width={44} />
                    <div className={style.logoText}>Minticia</div>
                </div>
            </Link>
            <div className={style.searchBar}>
                <div className={style.searchIcon}>
                    <AiOutlineSearch />
                </div>
                <input
                    className={style.searchInput}
                    placeholder="Search items and collections"
                />
            </div>
            <div className={style.headerItems}>
                <Link href="/inventory/0xE2A552ED25Fa50166d206C3a9A8F5B738b0C2FeD">
                    <div className={style.headerItem}> Inventory </div>
                </Link>
            </div>
            <div className={style.headerItems}>

                <Link href="/luxections/0xD7f60af8142388D7A89685d5b459d91c79A3b612">
                    <div className={style.headerItem}> Luxections </div>
                </Link>
            </div>

            <div className={style.headerItem}>
                <ConnectWallet />
            </div>
        </div>
    )
}

export default Header
