import { ShortenService } from "@/services/shortenService";

interface Props {
    params: Promise<{ code: string }>
}

export default async function StatsPage({ params }: Props) {
    const { code } = await params;
    const data = await ShortenService.getLinkStats(code);

    return (
        <div>
            page stats: {JSON.stringify(data)}
        </div>
    );
}