// bus事件总线
type BusClass = {
  emit: (name:string) => void,
  on: (name:string, callback:Function) => void
}

// key的类型约束
type ParamsKey = string | number | symbol

// list调度中心的类型约束
type list = {
  // 这里由于key是自定义的，我们只是知道key的类型，所以需要用到ts的索引签名
  []
}


class Bus implements BusClass {
  constructor() {
    
  }

  emit() {

  }
  on() {

  }
}