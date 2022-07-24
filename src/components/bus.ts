// bus事件总线
type BusClass = {
  emit: (name:string) => void,
  on: (name:string, callback:Function) => void
}

// key的类型约束
type ParamsKey = string | number | symbol

// list调度中心的类型约束
type List = {
  // 这里由于key是自定义的，我们只是知道key的类型，所以需要用到ts的索引签名
  [key: ParamsKey]: Array<Function>
}


class Bus implements BusClass {
  list:List
  constructor() {
    this.list = {}
  }

  emit() {

  }
  on(name:string, callback:Function) {
    // 获取注册过的方法, 如果没有注册过的话，就返回一个空数组
    let fn:Array<Function> = this.list[name] || []
    
  }
}