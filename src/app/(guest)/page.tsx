export const revalidate = 60

import { formatNumberLocalized } from "@/utils";
import { ShortenForm } from "../components";
import { CursorArrowRaysIcon, LinkIcon, UserIcon } from "@heroicons/react/20/solid";
import { ShortenService } from "@/services/shortenService";

export default async function HomePage() {
    const shortens = await ShortenService.getLinks();

    const countShorts = shortens.length;
    const countClicks = shortens.reduce((prev, current) => prev + current.accessCount, 0);

    return (
        <div className="container mx-auto my-10 text-center">
            <h2 className="text-4xl">Short URL</h2>
            <p>Tool for generating short links</p>

            {/* Input Shorten */}
            <ShortenForm />

            {/* Analitics */}
            <div className="mt-10 flex items-center justify-center gap-20">
                <div className="flex flex-col items-center justify-center">
                    <div className="bg-lime-500 p-4 rounded-full">
                        <CursorArrowRaysIcon className="size-12 text-white" />
                    </div>
                    <p className="text-lime-500 font-bold text-2xl">{formatNumberLocalized(countClicks)} clicks!</p>
                    <p className="text-slate-700 font-bold text-sm">+{formatNumberLocalized(500)} for day</p>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <div className="bg-lime-500 p-4 rounded-full">
                        <LinkIcon className="size-12 text-white" />
                    </div>
                    <p className="text-lime-500 font-bold text-2xl">{formatNumberLocalized(countShorts)} shorts!</p>
                    <p className="text-slate-700 font-bold text-sm">+{formatNumberLocalized(300)} for day</p>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <div className="bg-lime-500 p-4 rounded-full">
                        <UserIcon className="size-12 text-white" />
                    </div>
                    <p className="text-lime-500 font-bold text-2xl">{formatNumberLocalized(30)} users!</p>
                    <p className="text-slate-700 font-bold text-sm">+{formatNumberLocalized(1)} for day</p>
                </div>
            </div>
        </div>
    );
}