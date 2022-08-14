import { createContext, useState } from "react"

// context是一个JS对象，可以将其存储到一个常量中
// 这个对象是由context所创建， 会包含react component
// 参数为上下文的初始值（也就是组件范围的状态），可以是对象的形式
const FavoritesContext =  createContext({
  favorites: [],
  totalFavorites: 0 // 收藏夹总数
})

// 此外，我们还需要有能够添加/删除收藏夹的这些值
// 为此，我们需要一个组件FavoritesContextProvider
// 而这个功能组件会给上下文提供必要的组件(会与上下文产生交互的组件)或是负责更新上下文的值
// 之后在index.js中使用并包装它
function FavoritesContextProvider(props) {
  // 在这里我们可以用状态来管理上下文中的值
  // 当我们修改状态时候，这里的这个组件会在执行，这个组件的更新会引起其包裹的所有关联的更新
  // 也即如果我们改变在这个组件中上下文的值的时候，所有正在监听这个上下文的组件将会被更新
  const [userFavorites, setUserFavorites] = useState([])

  // 修改状态值的回调
  // 我们不仅仅想让状态可以让不同组件访问，也需要不同组件能够访问操作改变状态值的函数
  // 于是我们需要向外暴露这些函数的指向，并将指向添加到context中，传递给不同的组件
  // 添加收藏
  function addFavoriteHandler(favoriteMeetup) {
    // concat合并添加进来的收藏
    // 下面这行会有个问题，在于useState并非是立即状态更新的
    // 所以如果我们依赖于最后的状态快照，我们需要换一个写法
    // setUserFavorites(userFavorites.concat(favoriteMeetup))
    // 这种写法能保证我们此处的状态更新
    setUserFavorites((prevUserFavorites)=>{
      return prevUserFavorites.concat(favoriteMeetup)
    })
  }

  // 移除收藏
  function removeFavoriteHandler(meetupId) { 
    setUserFavorites((prevUserFavorites)=>{
      // filter会过滤掉返回false的项
      return prevUserFavorites.filter(meetup => meetup.id !== meetupId)
    })
  }

  // 判断是否为收藏夹
  function itemIsFavoriteHandler() {
    // some只要其中一项为true便为true
    return userFavorites.some(meetup => meetup.id === meetupId)
  }

  // 存储上下文
  const context = {
    favorites: userFavorites,
    totalFavorites: userFavorites.length
  }

  return (
    <FavoritesContext.Provider value={context}>
      {props.children}
    </FavoritesContext.Provider>
  )
}

