import express, { Express, Request, Response } from "express";

const app: Express = express();

app.get("/login", (req, res) => {
  // 处理跨域
  res.header("Access-Control-Allow-Origin", "*");

  // 这里进行一个判断，根据前端的登录信息的不同，让后端返回不同的路由表数据.
  // 也就是根据不同的角色返回不同的路由，用于权限管理
  if (req.query.user == "admin" && req.query.password == "123456") {
    res.json({
      route: [
        {
          path: "/a",
          component: "A.vue",
        },
        {
          path: "/b",
          component: "B.vue",
        },
      ],
    });
  } else if (req.query.user == "admin2" && req.query.password == "123456") {
    res.json({
      route: [
        {
          path: "/a",
          component: "A.vue",
        },
      ],
    });
  } else {
    res.json({
      code: 400,
      message: "账号密码有误，请再次确认~",
    });
  }
});

app.listen(4321, () => {
  console.log("server start successfully! http://localhost:4321");
});
