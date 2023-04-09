import React from 'react'
import Image from 'next/image';
import Image01 from '../assets/01.webp';
import Image02 from '../assets/02.webp';
import Image03 from '../assets/03.webp';
import Image04 from '../assets/04.webp';
import Image05 from '../assets/05.webp';
import Image06 from '../assets/06.webp';
import Image07 from '../assets/07.webp';
import Image08 from '../assets/08.webp';
import Image09 from '../assets/09.webp';
import Image10 from '../assets/10.webp';
import Image11 from '../assets/11.webp';


const style = {
    wrapper: `relative`,
    butContainer: `flex`,
    copyContainer: `w-1/2`,
    cardContainer: `rounded-[3rem]`,
    techImage: `flex m-auto`,
    title: `relative text-white text-[46px] font-semibold`,
    contentWrapper: `flex h-screen relative justify-center flex-wrap items-center`,
    name: `flex w-screen relative justify-center flex-wrap items-center text-white`,
    description: `text-[#8a939b] container-[400px] text-2xl mt-[0.8rem] mb-[2.5rem]`,
    tech: `flex mx-[4.8rem] w-max-[520px] items-center bg-[#1a2250] rounded-[0.8rem] border-[#1a2250] border-2 `,
    accentedButton: ` relative text-lg font-semibold px-10 py-1 bg-[#8B8BDA] rounded-[36px] mr-5 text-white hover:bg-[#42a0ff] cursor-pointer`,
    button: ` relative text-lg font-semibold px-10 py-1 border-2 border-[#85CECF] rounded-[36px] mr-5 text-[#e4e8ea] hover:bg-[#4c505c] cursor-pointer`,
}

const Hero = () => {
    return (
        <div className={style.wrapper}>
            <div className={style.contentWrapper}>

                <div className={style.copyContainer}>
                    <div className={style.title}>
                        Discover <br />And Collect <br />Rare NFTs
                    </div>
                    <div className={style.description}>
                        The most secure marketplace for buying and selling unique crypto assets.
                    </div>
                    <div className={style.butContainer}>
                        <button className={style.accentedButton}>BUY NFTs</button>
                        <button className={style.button}>EXPLORE NFTs</button>
                    </div>
                </div>

                <div className={style.cardContainer}>
                    <Image src={Image01} height={512} width={512} alt="" />
                </div>

            </div>

            <div>
                <div className={style.name}>FEATURED ON</div>

                <div className={style.tech}>
                    <div className={style.techImage}>
                        <Image src={Image02} alt='' />
                    </div>
                    <div className={style.techImage}>
                        <Image src={Image03} alt='' />
                    </div>
                    <div className={style.techImage}>
                        <Image src={Image04} alt='' />
                    </div>
                    <div className={style.techImage}>
                        <Image src={Image05} alt='' />
                    </div>
                </div>
            </div>


            <div className={style.contentWrapper}>
                <div className={style.name}>ANALYTICS</div>

                <div className={style.cardContainer}>
                    <Image src={Image06} height={512} width={512} alt="" />
                </div>

                <div className={style.copyContainer}>
                    <div className={style.title}>
                        Built-In Analytics <br />To Track Your NFTs
                    </div>
                    <div className={style.description}>
                        Use our built-in analytics dashboard to pull valuable <br />insights and monitor the value of your Krypto portfolio <br />over time.
                    </div>
                    <div className={style.butContainer}>
                        <button className={style.accentedButton}>VIEW OUR PRICING</button>
                    </div>
                </div>
            </div>

            <div className={style.contentWrapper}>
                <div className={style.name}>GET OUR APP</div>

                <div className={style.copyContainer}>
                    <div className={style.title}>
                        Browse NFTS From <br />Your Smartphone
                    </div>
                    <div className={style.description}>
                        Our crypto app is the easiest way to keep track of your <br />assets when you’re on the go.
                    </div>
                    <div className={style.butContainer}>
                        <button className={style.accentedButton}>Download App</button>
                    </div>
                </div>

                <div className={style.cardContainer}>
                    <Image src={Image07} height={512} width={512} alt="" />
                </div>

            </div>

            <div className={style.contentWrapper}>
                <div className={style.name}>24/7 ACCESS</div>

                <div className={style.cardContainer}>
                    <Image src={Image08} height={512} width={512} alt="" />
                </div>

                <div className={style.copyContainer}>
                    <div className={style.title}>
                        Sell Your NFTs From <br />Anywhere At Any <br />Time
                    </div>
                    <div className={style.description}>
                        With our easy-to-use platform, you can buy or sell assets <br />from anywhere in the world, at any time.
                    </div>
                    <div className={style.butContainer}>
                        <button className={style.accentedButton}>GET STARTED</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero
