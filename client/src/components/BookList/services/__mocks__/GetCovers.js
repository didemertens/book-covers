let books = [
  {
    "id": 1,
    "title": "Pond",
    "author": "Claire-Louise Bennett",
    "cover": "/covers/pond-bennett.jpg"
  },
  {
    "id": 2,
    "title": "Late Migrations: A Natural History of Love and Loss",
    "author": "Margaret Renkl",
    "cover": "/covers/migrations-renkl.jpg"
  }
]

export default {
  __setBookData(_books) {
    books = _books
  },
  async getBookCovers() {
    console.log('MOCKSSSSSSSS')
    return books
  }
}