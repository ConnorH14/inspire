export class Quote{
  constructor(data){
    this.content = data.content
    this.author = data.author
    this.id = data._id
  }
}