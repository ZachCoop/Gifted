import { appState } from "../AppState.js";
import { Gift } from "../Models/Gift.js";
import { SandboxServer } from "./AxiosService.js"



class GiftsService {


  async toggleOpened(id) {

    console.log('resdata toggle opened');
    let gift = appState.gifts.find(gift => gift.id == id)
    if (!gift) {
      throw new Error('bad id');
    }
    gift.opened = !gift.opened
    await SandboxServer.put(`/api/gifts/${id}`, gift)
    appState.emit('gifts')

  }

  async giveGift(formData) {
    const res = await SandboxServer.post('/api/gifts', formData)
    let gift = new Gift(res.data)
    appState.gifts = [gift, ...appState.gifts]
  }


  async getGift() {
    const res = await SandboxServer.get('/api/gifts')
    console.log(res.data);
    appState.gifts = res.data.map(g => new Gift(g))
  }

}


export const giftsService = new GiftsService() 