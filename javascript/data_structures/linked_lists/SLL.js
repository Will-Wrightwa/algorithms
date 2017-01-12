// Singly linked list

function SLL (){
  this.head = null;
}

function SLLNode(val , next=null){
  this.val = val;
  this.next = next;
}

SLL.prototype = {

  push: function(val){
    this.head = new SLLNode(val,this.head);
    return this;
  },

  pop: function(){
    let out = this.head;
    this.head = this.head.next;
    return out;
  },

  reduce: function(fn,acc){
    let node = this.head;
    while(node){
      acc = fn(acc,node);
      node = node.next;
    }
    return acc;
  },

  length: function(){
    return this.reduce((acc,node)=>{return ++acc},0);
  },

  sum: function(){
    return this.reduce((acc,node)=>{return acc + node.val },0);
  },

  average: function(){
    return this.sum() / this.length();
  },

  min: function(){
    return this.reduce((acc,node)=>{return Math.min(acc,node.val)},this.head.val);
  },

  max: function(){
    return this.reduce((acc,node)=>{return Math.max(acc,node.val)},this.head.val);
  },

  display: function(){
    return this.reduce((acc,node)=>{return acc + " -> " + node.val},"head") + " -> null";
  },
}

module.exports = SLL
