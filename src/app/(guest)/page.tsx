import { formatNumberLocalized } from "@/utils";
import { CursorArrowRaysIcon, LinkIcon, UserIcon } from "@heroicons/react/20/solid";

export default function HomePage() {
    return (
        <div className="container mx-auto my-10 text-center">
            <h2 className="text-4xl">Short URL</h2>
            <p>Tool for generating short links</p>
            {/* Input Shorten */}
            <div className="mt-5 flex justify-center items-center gap-2">
                <input
                    className="border rounded-md px-6 py-2 shadow-sm w-96"
                    type="text"
                    name="shorten"
                    id="shorten"
                    placeholder="Paste link to cut"
                />
                <button
                    className="bg-orange-500 px-6 py-2 text-white uppercase font-bold rounded-md hover:bg-orange-600"
                >
                    Cut
                </button>
            </div>

            {/* Analitics */}
            <div className="mt-10 flex items-center justify-center gap-20">
                <div className="flex flex-col items-center justify-center">
                    <div className="bg-lime-500 p-4 rounded-full">
                        <CursorArrowRaysIcon className="size-12 text-white" />
                    </div>
                    <p className="text-lime-500 font-bold text-2xl">{formatNumberLocalized(500000)} clicks!</p>
                    <p className="text-slate-700 font-bold text-sm">+{formatNumberLocalized(500)} for day</p>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <div className="bg-lime-500 p-4 rounded-full">
                        <LinkIcon className="size-12 text-white" />
                    </div>
                    <p className="text-lime-500 font-bold text-2xl">{formatNumberLocalized(15000)} shorts!</p>
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