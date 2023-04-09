import Image from "next/image";
import { MediaRenderer } from "@thirdweb-dev/react";

export default function InventoryCard(
    { nft, }: {
        nft: {
            tokenUri: string;
            name: string;
            price?: string;
        };
    }) {
    return (
        <div className={`relative flex cursor-pointer flex-col overflow-hidden rounded-lg bg-white shadow-lg transition-all duration-300 hover:shadow-2xl bg-[#333333]`}>
            <MediaRenderer
                src={nft.tokenUri}
                style={{
                    objectFit: "cover",
                }}
                className={"h-[244px] rounded-lg transition duration-300 ease-in-out hover:scale-105"}
            />
            <div className={`flex flex-col gap-y-3 p-3`}>
                <div className={`text-sm font-semibold`}>{nft.name}</div>

            </div>
        </div>
    );
}