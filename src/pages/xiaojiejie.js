import { useRouter } from "next/router";
import Link from "next/link";
import axios from "axios";

const Xiaojiejie = () => {
  const router = useRouter();
  return (
    <>
      <div>{router.query.name}来为我服务了</div>
      {/* <button onClick={()=>{console.log("router信息：",router)}}>点我看router</button> */}
      <Link href="/">
        <a>返回首页</a>
      </Link>
    </>
  );
};

// next.js只允许我们把请求数据的业务逻辑写在getInitialProps, 而不能像react那样写到生命周期里面
Xiaojiejie.getInitialProps = async () => {
  return await axios(
    "https://news.sina.com.cn/project/fymap/ncp2020_full_data.json?_=1659515017094"
  ).then((res) => {
    console.log("远程数据结果：", res.data.split(0, 2));
    return res.data;
  });
};

export default Xiaojiejie;
