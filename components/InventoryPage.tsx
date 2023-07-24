import Link from "next/link";
import LoaderGIF from "./LoaderGIF";
import Image from 'next/image';
import bannerImage from '../assets/12.webp';
import minticiaLogo from '../assets/00.webp';
import styles from '@/styles/nft.module.css';
import InventoryCard from "./Cards/InventoryCard";
import { useActiveListings, useContract } from "@thirdweb-dev/react";

const style = {
    ethLogo: `h-6 mr-2`,
    collectionStat: `w-1/4`,
    createdBy: `text-lg mb-4`,
    infoContainer: `w-screen px-4`,
    title: `text-3xl font-bold mb-4`,
    bannerImage: `w-[150vh] object-cover`,
    statName: `text-lg w-full text-center mt-1`,
    midRow: `w-full flex justify-center text-white `,
    profileImg: `w-40 h-40 object-cover rounded-full mt-[-4rem]`,
    description: `text-[#8a939b] text-xl w-max-1/4 flex-wrap mt-4`,
    statValue: `text-3xl font-bold w-full flex items-center justify-center`,
    bannerImageContainer: `h-[60vh] w-screen flex justify-center items-center`,
    statsContainer: `w-[44vw] flex justify-between py-3 border border-[#151b22] rounded-xl mb-4 bg-gradient-to-br from-[#4949d1] to-[#85cecf]`,
}

const InventoryPage = () => {

    const { contract } = useContract(
        "0xdD1ae9F3e78a6465e6B1E91122046e724F7D5162",
        "marketplace"
    );

    const { data: nfts, isLoading } = useActiveListings(contract);

    return (
        <>
            <div className="overflow-hidden">

                <div className={style.bannerImageContainer}>
                    <Image
                        className={style.bannerImage}
                        src={bannerImage}
                        alt="banner"
                    />
                </div>

                <div className={style.infoContainer}>
                    <div className={style.midRow}>
                        <Image
                            className={style.profileImg}
                            src={minticiaLogo}
                            alt="profile image"
                        />
                    </div>
                </div>

                <div className={style.midRow}>
                    <div className={style.title}>3D Inventory</div>
                </div>

                <div className={style.midRow}>
                    <div className={style.createdBy}>
                        Created for{' '}
                        <span className="text-[#2081e2]">Hack Web3Conf</span>
                    </div>
                </div>

                <div className={style.midRow}>
                    <div className={style.statsContainer}>
                        <div className={style.collectionStat}>
                            <div className={style.statValue}>15</div>
                            <div className={style.statName}>items</div>
                        </div>
                        <div className={style.collectionStat}>
                            <div className={style.statValue}>
                                2
                            </div>
                            <div className={style.statName}>owners</div>
                        </div>
                        <div className={style.collectionStat}>
                            <div className={style.statValue}>
                                <img
                                    src="/eth.webp"
                                    alt="eth"
                                    className={style.ethLogo}
                                />
                                15
                            </div>
                            <div className={style.statName}>floor price</div>
                        </div>
                        <div className={style.collectionStat}>
                            <div className={style.statValue}>
                                <img
                                    src="/eth.webp"
                                    alt="eth"
                                    className={style.ethLogo}
                                />
                                5.5K
                            </div>
                            <div className={style.statName}>volume traded</div>
                        </div>
                    </div>
                </div>
            </div>

            {!isLoading ? (
                <div className={"space-y-4 p-2"}>
                    <div className={styles.nftgrid}>
                        {nfts &&
                            nfts.map((nft) => {
                                console.log(nft.id)
                                return (
                                    <Link href={`/InventoryAssets/${nft.id}`} key={nft.assetContractAddress + nft.id}>
                                        {/* <a> */}
                                        <InventoryCard
                                            nft={{
                                                name: nft.asset.name as string,
                                                tokenUri: nft.asset.image as string,
                                                price: nft.buyoutCurrencyValuePerToken?.displayValue,
                                            }}
                                        />
                                        {/* </a> */}
                                    </Link>
                                );
                            })}
                    </div>
                </div>
            ) : (
                <>
                    <LoaderGIF />
                </>
            )}

        </>

    )
}

export default InventoryPage