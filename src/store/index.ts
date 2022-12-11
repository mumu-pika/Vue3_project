import { defineStore } from "pinia";
import { Names } from "./store-name";
type User = {
  name: string;
  age: number;
};

// 这里设置一个change之后的user
// 同步写法
const Runner: User = {
  name: "xixi",
  age: 20,
};

// 下面模拟实现异步修改state
// const Login = (): Promise<User> => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve({
//         name: 'xixi',
//         age: 20
//       })
//     }, 2000)
//   })
// }

export const useTestStore = defineStore(Names.TEST, {
  state: () => ({
    user: <User>{
      name: "pika",
      age: 18,
    },
    name: "Heisenberg",
  }),

  // computed 可以修饰一些值
  getters: {
    newName(): string {
      return `${this.name}-${this.getUserAge}`;
    },
    getUserAge(): number {
      return this.user.age;
    },
  },

  // methods 可以做同步和异步的操作，提交state
  actions: {
    //同步写法
    setUser() {
      this.user = JSON.parse(JSON.stringify(Runner));
      this.setName("WW");
    },

    // 异步action
    // async setUser() {
    //   let result = await Login()
    //   this.user = result
    //   this.setName('WW')
    // },

    setName(name: string) {
      this.name = name;
    },

    setAge() {
      this.user.age++;
    },
  },
});
