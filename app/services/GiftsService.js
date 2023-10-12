import { AppState } from "../AppState.js";
import { Gift } from "../models/Gift.js";
import { api, gift } from "./AxiosService.js"

class GiftsService {
    async openGift(giftId) {
        console.log('gift id', giftId);

        const giftData = {
            opened: true
        }
        const res = await api.put(`api/gifts/${giftId}`, giftData)
        AppState.emit('gifts')

        // const gift = AppState.gifts.find(gift => gift.)
    }
    async getGifts() {
        const res = await api.get('/api/gifts')
        console.log('got gifts,', res.data);
        const newGifts = res.data.map(giftPOJO => new Gift(giftPOJO))
        AppState.gifts = newGifts
    }

    async createGift(giftFormData) {
        console.log('gift form data', giftFormData);
        const res = await api.post('/api/gifts', giftFormData)
        console.log('creating gif', res.data)
        const newGift = new Gift(res.data)
        AppState.gifts.push(newGift)
        AppState.emit('gifts')
    }


}

export const giftsService = new GiftsService()