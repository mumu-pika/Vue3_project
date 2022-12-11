import React from "react";
import Link from "next/link";
import Router from "next/router";

const Home = () => {
  // routeChangeStart 路由开始发生变化

  // routeChangeComplete 路由发生变化之后

  // beforeHistoryChange 在history模式下路由发生变化之前

  // routeChangeError 当路由变化发生错误的时候（404的情况下不算错误）

  // hashChangeStart 哈希路由切换之前

  // hashChangeComplete 哈希路由切换之后

  // 这里需要把路由事件监听放在useEffect里面，每次卸载页面的时候把监听也卸载掉，否则每次页面跳转都会创建新的事件监听，会越来越多

  Router.events.on("routeChangeStart", (...args) => {
    console.log("1、routeChangeStart => 路由开始变化，参数为:", ...args);
  });

  Router.events.on("beforeHistoryChange", (...args) => {
    console.log(
      "2、beforeHistoryChange => 在history模式下路由发生变化之前，参数为:",
      ...args
    );
  });

  Router.events.on("routeChangeComplete", (...args) => {
    console.log("3、routeChangeComplete => 路由变化结束，参数为:", ...args);
  });

  Router.events.on("routeChangeError", (...args) => {
    console.log("4、routeChangeError => 路由变化发生错误，参数为:", ...args);
  });

  Router.events.on("hashChangeStart", (...args) => {
    console.log("5、hashChangeStart => 哈希路由切换之前，参数为:", ...args);
  });

  Router.events.on("hashChangeComplete", (...args) => {
    console.log("6、hashChangeComplete => 哈希路由切换之后，参数为:", ...args);
  });

  function goToRun() {
    Router.push({
      pathname: "/xiaojiejie",
      query: { name: "pika" },
    });
  }
  return (
    <>
      <div>我是首页</div>
      <div>
        <Link href="/xiaojiejie?name=结衣">
          <a>选择结衣</a>
        </Link>
        <hr></hr>
        <Link href="/xiaojiejie?name=井空">
          <a>选择井空</a>
        </Link>
      </div>
      <div>
        <button onClick={goToRun}>跑步</button>
      </div>
      <div>
        <Link href="#jspang">
          <a>选择技术胖</a>
        </Link>
      </div>
    </>
  );
};

export default Home;
