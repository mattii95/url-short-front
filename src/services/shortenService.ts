
import { Shorten, ShortenFormData } from "@/interfaces";
import clientAxios from "@/config/axios";


export class ShortenService {

    static async getLinks() {
        const { data } = await clientAxios.get<Shorten[]>(`/shorten`);
        return data;
    }

    static async createLink(formaData: ShortenFormData) {
        try {
            const { data } = await clientAxios.post('/shorten', formaData);
            return data;
        } catch (error) {
            console.log(error);

        }
    }

    static async getLinkStats(code: Shorten['shortCode']) {
        const { data } = await clientAxios.get<Shorten>(`/shorten/${code}`);
        return data;
    }
}