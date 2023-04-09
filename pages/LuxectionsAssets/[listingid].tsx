import Image from "next/image";
import { BigNumber } from "ethers";
import { useRouter } from "next/router";
import Header from "@/components/Header";
import { MediaRenderer } from "@thirdweb-dev/react";
import { ModelViewerElement } from '@google/model-viewer/lib/model-viewer';
import { useContract, useListing } from "@thirdweb-dev/react";
import Link from "next/link";

declare namespace JSX {
    interface IntrinsicElements {
        "model-viewer": ModelViewerElement;
    }
}

export default function NFT() {
    const router = useRouter();
    const { listingId } = router.query;

    const { contract } = useContract(
        "0x0245c21Fd486461922cBAbc3B49D489225D50953",
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
                            <div className={"text-2xl text-white font-semibold"}>{nft?.asset?.name}</div>
                        </div>
                        <div className={"flex justify-center"}>
                            {/* <MediaRenderer
                                src={nft?.asset.animation_url as string}
                                alt=""
                            /> */}
                            <model-viewer
                                src={nft?.asset.animation_url}
                                shadow-intensity="1"
                                camera-controls
                                auto-rotate
                                ar
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
                </div>
            </div>
        </>

    );
}