export class Gift {
    constructor(data) {
        this.id = data.id
        this.tag = data.tag
        this.url = data.url
        this.opened = data.opened
        this.creatorId = data.creatorId
        this.createdAt = new Date(data.createdAt)
        this.updatedAt = data.updatedAt
    }

    get giftsTemplate() {
        return `
        <div role="button" onclick="app.GiftsController.openGift('${this.id}')" class="col-3 bg-secondary m-4">
                <img class="img-fluid"
                  src="${this.url}"
                  alt="">
                <p>${this.tag}</p>
                <p>${this.createdAt.toLocaleString()}</p>
              </div>
        `
    }
}

const giftData = `
"_id": "6508f5fd2fcf1ecaaa140e65",
        "tag": "DONT TRUST BIG BINGUS, HE IS EVIL!!!!!!!",
        "url": "",
        "opened": false,
        "creatorId": "64f23509d0e5863cce42d2dc",
        "createdAt": "2023-09-19T01:14:37.063Z",
        "updatedAt": "2023-09-19T01:14:37.063Z",
        "__v": 0,
        "id": "6508f5fd2fcf1ecaaa140e65"
`