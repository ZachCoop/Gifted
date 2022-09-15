import { appState } from "../AppState.js";
import { giftsService } from "../Services/GiftsService.js";
import { getFormData } from "../Utils/FormHandler.js";
import { Pop } from "../Utils/Pop.js";
import { setHTML } from "../Utils/Writer.js";

function drawGift() {
  let template = ''
  appState.gifts.forEach(g => template += g.giftTemplate)
  setHTML('listed-gifts', template)
}



export class GiftsController {
  constructor() {
    this.getGift()
    appState.on('gifts', drawGift)
  }
  async getGift() {
    try {
      await giftsService.getGift()
    } catch (error) {
      console.error('[Controller]', error);
      Pop.error(error)
    }
  }

  async giveGift() {
    try {
      // @ts-ignore
      window.event.preventDefault()
      // @ts-ignore
      const form = window.event.target
      let formData = getFormData(form)
      await giftsService.giveGift(formData)
      console.log(formData);
      // @ts-ignore
      form.reset()
    } catch (error) {
      console.error('[give gift error]', error);
      Pop.error(error)
    }
  }

  async toggleOpened(id) {
    giftsService.toggleOpened(id)

    appState.on('gifts', drawGift)
  }
}