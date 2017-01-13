


class SLL {
  constructor(){
    this.head = null
  }
  push(val){
    this.head = new SLLNode(val,this.head)
    return this
  }
}
class SLLNode{
  constructor(val,next=null){
    this.val=val
    this.next = next
  }
}

let s = new SLL()
s.push(1).push(2)
console.log(s);
