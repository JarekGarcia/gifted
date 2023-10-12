import { AppState } from "../AppState.js";
import { giftsService } from "../services/GiftsService.js";
import { getFormData } from "../utils/FormHandler.js";
import { Pop } from "../utils/Pop.js";
import { setHTML } from "../utils/Writer.js";

function _drawGifts() {
    let content = ''
    const gifts = AppState.gifts
    gifts.forEach(gift => content += gift.giftsTemplate)

    setHTML('gifts', content)
}
export class GiftsController {
    constructor() {
        this.getGifts()

        AppState.on('gifts', _drawGifts)
        AppState.on('account', _drawGifts)
    }

    async getGifts() {
        try {
            await giftsService.getGifts()

        } catch (error) {
            Pop.error(error)
            console.error(error);

        }
    }

    async createGift(event) {
        try {

            event.preventDefault()
            const form = event.target
            const giftFormData = getFormData(form)
            console.log(giftFormData);
            await giftsService.createGift(giftFormData)
            form.reset()
        } catch (error) {
            Pop.error(error)
            console.error(error)
        }
    }

    openGift(giftId) {
        giftsService.openGift(giftId)
    }
}