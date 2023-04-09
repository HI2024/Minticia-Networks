import Image from "next/image";
import { BigNumber } from "ethers";
import { useRouter } from "next/router";
import Header from "@/components/Header";
import { AiOutlineClockCircle } from "react-icons/ai";
import { MediaRenderer } from "@thirdweb-dev/react";
import { useContract, useListing } from "@thirdweb-dev/react";
import Link from "next/link";
// import '@google/model-viewer';
import { useAddress } from "@thirdweb-dev/react";
import dynamic from 'next/dynamic'

export default function NFT() {
    const router = useRouter();
    const address = useAddress();

    const { listingId } = router.query;
    // console.log(router.query.listingid);

    const { contract } = useContract(
        "0xdD1ae9F3e78a6465e6B1E91122046e724F7D5162",
        "marketplace"
    );

    const { data: nft, isLoading } = useListing(contract, router.query.listingid as string);
    const buyoutListing = async () => {
        try {
            await contract?.buyoutListing(BigNumber.from(router.query.listingid), 1);
        } catch (e) {
            alert(e);
        }
    };

    if (isLoading || !nft)
        return (
            <>
                <Header />
                <div className={"flex h-screen items-center justify-center"}>
                    <img src="/loading.gif" alt="" />
                </div>
            </>
        );

    return (
        <>
            <Header />
            <title>Minticia | {nft?.asset?.name}</title>
            <div className="flex justify-center">
                <div className="flex  flex-col justify-center gap-y-4 p-2">
                    <div className={"flex flex-col rounded-lg border border-[#e8ebe5]"}>
                        <div className={`flex items-center justify-start p-3`}>
                            {/* <Image src={`/eth.webp`} alt="" height={20} width={20} /><br/> */}
                            <div className={"text-2xl text-white font-semibold"}>{nft?.asset?.name}</div>
                        </div>
                        <div className={"flex justify-center"}>
                            <MediaRenderer
                                src={nft?.asset.animation_url as string}
                                alt=""
                            />
                        </div>
                    </div>

                    <div className={"flex space-x-1 text-sm"}>
                        <div className={"text-gray-500"}>Owned by</div>
                        <Link href={`https://testnet-zkevm.polygonscan.com/address/${nft?.sellerAddress}#tokentxnsErc721`} target="blank">
                            <div className="cursor-pointer text-blue-500">
                                {nft?.sellerAddress}
                            </div>
                        </Link>

                    </div>

                    {/*Bottom Section*/}
                    <div className={"flex flex-col rounded-lg border border-[#e8ebe5]"}>
                        <div className={"border-b border-[#e8ebe5] p-3"}>
                            <div
                                className={
                                    "flex items-center space-x-2 text-sm text-gray-700 md:text-base"
                                }
                            >
                            </div>
                        </div>
                        <div className={"flex flex-col gap-y-2  p-3"}>
                            <div className={"text-sm text-gray-500"}>Current Price</div>
                            <div className={`flex items-center space-x-3`}>
                                <Image src={`/eth.webp`} alt="" height={24} width={24} />
                                <p className={`text-3xl text-white font-semibold`}>
                                    {nft?.buyoutCurrencyValuePerToken?.displayValue}
                                </p>
                            </div>

                            {address ? (
                                <>
                                    <button
                                        type="button"
                                        className="rounded-lg bg-blue-700 px-5 py-4 text-base font-bold text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                        onClick={buyoutListing}
                                    >
                                        Buy Now
                                    </button>
                                </>
                            ) : (
                                <>
                                    <div
                                        className="rounded-lg bg-blue-700 px-5 py-4 text-base font-bold text-white CURSOR hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                    >
                                        YOU NEED TO CONNECT YOUR WALLTET
                                    </div>
                                </>
                            )}

                        </div>
                    </div>
                </div>
            </div>
        </>

    );
}