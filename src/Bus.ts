// bus事件总线
type BusClass = {
  emit: (name: string) => void
  on: (name: string, callback: Function) => void
}

// key的类型约束
type ParamsKey = string | number | symbol

// list调度中心的类型约束
type List = {
  // 这里由于key是自定义的，我们只是知道key的类型，所以需要用到ts的索引签名
  [key: ParamsKey]: Array<Function>
}

class Bus implements BusClass {
  list: List
  constructor() {
    this.list = {}
  }

  // 触发当前实例上的事件。附加参数都会传给监听器回调
  // emit的参数是多个的，我们使用解构的方式展开
  emit(name: string, ...args: Array<any>) {
    let eventName: Array<Function> = this.list[name]
    eventName.forEach((fn) => {
      fn.apply(this, args)
    })
  }

  // 监听当前实例上的自定义事件。事件可以由 emit 触发。回调函数会接收所有传入事件触发函数的额外参数。
  on(name: string, callback: Function) {
    // 获取注册过的方法, 如果没有注册过的话，就返回一个空数组
    let fn: Array<Function> = this.list[name] || []
    fn.push(callback)
    this.list[name] = fn
  }
}

// 这里暴露出去全局bus
export default new Bus()
