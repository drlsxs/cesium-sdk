// mock/user.bundled_311qgwsuo7w.bundled_t0cgee42kl.bundled_tdpxb63uv7k.mjs
function createUserList() {
  return [
    {
      userId: 1,
      avatar: "https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif",
      username: "admin",
      password: "111111",
      desc: "\u5E73\u53F0\u7BA1\u7406\u5458",
      roles: ["\u5E73\u53F0\u7BA1\u7406\u5458"],
      buttons: ["cuser.detail"],
      routes: ["home"],
      token: "Admin Token"
    },
    {
      userId: 2,
      avatar: "https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif",
      username: "system",
      password: "111111",
      desc: "\u7CFB\u7EDF\u7BA1\u7406\u5458",
      roles: ["\u7CFB\u7EDF\u7BA1\u7406\u5458"],
      buttons: ["cuser.detail", "cuser.user"],
      routes: ["home"],
      token: "System Token"
    }
  ];
}
var user_default = [
  // 用户登录接口
  {
    url: "/api/user/login",
    //请求地址
    method: "post",
    //请求方式
    response: ({ body }) => {
      const { username, password } = body;
      const checkUser = createUserList().find(
        (item) => item.username === username && item.password === password
      );
      if (!checkUser) {
        return { code: 201, data: { message: "\u8D26\u53F7\u6216\u8005\u5BC6\u7801\u4E0D\u6B63\u786E" } };
      }
      const { token } = checkUser;
      return { code: 200, data: { token } };
    }
  },
  // 获取用户信息
  {
    url: "/api/user/info",
    method: "get",
    response: (request) => {
      const token = request.headers.token;
      const checkUser = createUserList().find((item) => item.token === token);
      if (!checkUser) {
        return { code: 201, data: { message: "\u83B7\u53D6\u7528\u6237\u4FE1\u606F\u5931\u8D25" } };
      }
      return { code: 200, data: { checkUser } };
    }
  }
];
export {
  user_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsibW9jay9tb2NrL21vY2svbW9jay91c2VyLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBfX2luamVjdGVkX2ZpbGVuYW1lX18gPSBcIkU6XFxcXHByb2plY3RcXFxcdnVlM1xcXFxjZXNpdW0tc2RrXFxcXG1vY2tcXFxcdXNlci50c1wiO2NvbnN0IF9faW5qZWN0ZWRfZGlybmFtZV9fID0gXCJFOlxcXFxwcm9qZWN0XFxcXHZ1ZTNcXFxcY2VzaXVtLXNka1xcXFxtb2NrXCI7Y29uc3QgX19pbmplY3RlZF9pbXBvcnRfbWV0YV91cmxfXyA9IFwiZmlsZTovLy9FOi9wcm9qZWN0L3Z1ZTMvY2VzaXVtLXNkay9tb2NrL3VzZXIudHNcIjsvKlxuICogQEF1dGhvcjogeWFuZ3NoaWxpblxuICogQERhdGU6IDIwMjMtMDctMDIgMTQ6NDQ6MzVcbiAqIEBMYXN0RWRpdG9yczogeWFuZ3NoaWxpblxuICogQExhc3RFZGl0VGltZTogMjAyMy0wNy0wMiAxNDo0NToyMFxuICogQEZpbGVQYXRoOiBtb2NrXFx1c2VyLnRzXG4gKiBARGVzY3JpcHRpb246IFx1OEJGN1x1NkRGQlx1NTJBMFx1NjU4N1x1NEVGNlx1NjNDRlx1OEZGMFxuICovXG5cbi8vXHU3NTI4XHU2MjM3XHU0RkUxXHU2MDZGXHU2NTcwXHU2MzZFXG5mdW5jdGlvbiBjcmVhdGVVc2VyTGlzdCgpIHtcbiAgcmV0dXJuIFtcbiAgICB7XG4gICAgICB1c2VySWQ6IDEsXG4gICAgICBhdmF0YXI6XG4gICAgICAgIFwiaHR0cHM6Ly93cGltZy53YWxsc3Rjbi5jb20vZjc3ODczOGMtZTRmOC00ODcwLWI2MzQtNTY3MDNiNGFjYWZlLmdpZlwiLFxuICAgICAgdXNlcm5hbWU6IFwiYWRtaW5cIixcbiAgICAgIHBhc3N3b3JkOiBcIjExMTExMVwiLFxuICAgICAgZGVzYzogXCJcdTVFNzNcdTUzRjBcdTdCQTFcdTc0MDZcdTU0NThcIixcbiAgICAgIHJvbGVzOiBbXCJcdTVFNzNcdTUzRjBcdTdCQTFcdTc0MDZcdTU0NThcIl0sXG4gICAgICBidXR0b25zOiBbXCJjdXNlci5kZXRhaWxcIl0sXG4gICAgICByb3V0ZXM6IFtcImhvbWVcIl0sXG4gICAgICB0b2tlbjogXCJBZG1pbiBUb2tlblwiLFxuICAgIH0sXG4gICAge1xuICAgICAgdXNlcklkOiAyLFxuICAgICAgYXZhdGFyOlxuICAgICAgICBcImh0dHBzOi8vd3BpbWcud2FsbHN0Y24uY29tL2Y3Nzg3MzhjLWU0ZjgtNDg3MC1iNjM0LTU2NzAzYjRhY2FmZS5naWZcIixcbiAgICAgIHVzZXJuYW1lOiBcInN5c3RlbVwiLFxuICAgICAgcGFzc3dvcmQ6IFwiMTExMTExXCIsXG4gICAgICBkZXNjOiBcIlx1N0NGQlx1N0VERlx1N0JBMVx1NzQwNlx1NTQ1OFwiLFxuICAgICAgcm9sZXM6IFtcIlx1N0NGQlx1N0VERlx1N0JBMVx1NzQwNlx1NTQ1OFwiXSxcbiAgICAgIGJ1dHRvbnM6IFtcImN1c2VyLmRldGFpbFwiLCBcImN1c2VyLnVzZXJcIl0sXG4gICAgICByb3V0ZXM6IFtcImhvbWVcIl0sXG4gICAgICB0b2tlbjogXCJTeXN0ZW0gVG9rZW5cIixcbiAgICB9LFxuICBdO1xufVxuXG5leHBvcnQgZGVmYXVsdCBbXG4gIC8vIFx1NzUyOFx1NjIzN1x1NzY3Qlx1NUY1NVx1NjNBNVx1NTNFM1xuICB7XG4gICAgdXJsOiBcIi9hcGkvdXNlci9sb2dpblwiLCAvL1x1OEJGN1x1NkM0Mlx1NTczMFx1NTc0MFxuICAgIG1ldGhvZDogXCJwb3N0XCIsIC8vXHU4QkY3XHU2QzQyXHU2NUI5XHU1RjBGXG4gICAgcmVzcG9uc2U6ICh7IGJvZHkgfSkgPT4ge1xuICAgICAgLy9cdTgzQjdcdTUzRDZcdThCRjdcdTZDNDJcdTRGNTNcdTY0M0FcdTVFMjZcdThGQzdcdTY3NjVcdTc2ODRcdTc1MjhcdTYyMzdcdTU0MERcdTRFMEVcdTVCQzZcdTc4MDFcbiAgICAgIGNvbnN0IHsgdXNlcm5hbWUsIHBhc3N3b3JkIH0gPSBib2R5O1xuICAgICAgLy9cdThDMDNcdTc1MjhcdTgzQjdcdTUzRDZcdTc1MjhcdTYyMzdcdTRGRTFcdTYwNkZcdTUxRkRcdTY1NzAsXHU3NTI4XHU0RThFXHU1MjI0XHU2NUFEXHU2NjJGXHU1NDI2XHU2NzA5XHU2QjY0XHU3NTI4XHU2MjM3XG4gICAgICBjb25zdCBjaGVja1VzZXIgPSBjcmVhdGVVc2VyTGlzdCgpLmZpbmQoXG4gICAgICAgIChpdGVtKSA9PiBpdGVtLnVzZXJuYW1lID09PSB1c2VybmFtZSAmJiBpdGVtLnBhc3N3b3JkID09PSBwYXNzd29yZFxuICAgICAgKTtcbiAgICAgIC8vXHU2Q0ExXHU2NzA5XHU3NTI4XHU2MjM3XHU4RkQ0XHU1NkRFXHU1OTMxXHU4RDI1XHU0RkUxXHU2MDZGXG4gICAgICBpZiAoIWNoZWNrVXNlcikge1xuICAgICAgICByZXR1cm4geyBjb2RlOiAyMDEsIGRhdGE6IHsgbWVzc2FnZTogXCJcdThEMjZcdTUzRjdcdTYyMTZcdTgwMDVcdTVCQzZcdTc4MDFcdTRFMERcdTZCNjNcdTc4NkVcIiB9IH07XG4gICAgICB9XG4gICAgICAvL1x1NTk4Mlx1Njc5Q1x1NjcwOVx1OEZENFx1NTZERVx1NjIxMFx1NTI5Rlx1NEZFMVx1NjA2RlxuICAgICAgY29uc3QgeyB0b2tlbiB9ID0gY2hlY2tVc2VyO1xuICAgICAgcmV0dXJuIHsgY29kZTogMjAwLCBkYXRhOiB7IHRva2VuIH0gfTtcbiAgICB9LFxuICB9LFxuICAvLyBcdTgzQjdcdTUzRDZcdTc1MjhcdTYyMzdcdTRGRTFcdTYwNkZcbiAge1xuICAgIHVybDogXCIvYXBpL3VzZXIvaW5mb1wiLFxuICAgIG1ldGhvZDogXCJnZXRcIixcbiAgICByZXNwb25zZTogKHJlcXVlc3QpID0+IHtcbiAgICAgIC8vXHU4M0I3XHU1M0Q2XHU4QkY3XHU2QzQyXHU1OTM0XHU2NDNBXHU1RTI2dG9rZW5cbiAgICAgIGNvbnN0IHRva2VuID0gcmVxdWVzdC5oZWFkZXJzLnRva2VuO1xuICAgICAgLy9cdTY3RTVcdTc3MEJcdTc1MjhcdTYyMzdcdTRGRTFcdTYwNkZcdTY2MkZcdTU0MjZcdTUzMDVcdTU0MkJcdTY3MDlcdTZCMjF0b2tlblx1NzUyOFx1NjIzN1xuICAgICAgY29uc3QgY2hlY2tVc2VyID0gY3JlYXRlVXNlckxpc3QoKS5maW5kKChpdGVtKSA9PiBpdGVtLnRva2VuID09PSB0b2tlbik7XG4gICAgICAvL1x1NkNBMVx1NjcwOVx1OEZENFx1NTZERVx1NTkzMVx1OEQyNVx1NzY4NFx1NEZFMVx1NjA2RlxuICAgICAgaWYgKCFjaGVja1VzZXIpIHtcbiAgICAgICAgcmV0dXJuIHsgY29kZTogMjAxLCBkYXRhOiB7IG1lc3NhZ2U6IFwiXHU4M0I3XHU1M0Q2XHU3NTI4XHU2MjM3XHU0RkUxXHU2MDZGXHU1OTMxXHU4RDI1XCIgfSB9O1xuICAgICAgfVxuICAgICAgLy9cdTU5ODJcdTY3OUNcdTY3MDlcdThGRDRcdTU2REVcdTYyMTBcdTUyOUZcdTRGRTFcdTYwNkZcbiAgICAgIHJldHVybiB7IGNvZGU6IDIwMCwgZGF0YTogeyBjaGVja1VzZXIgfSB9O1xuICAgIH0sXG4gIH0sXG5dO1xuIl0sCiAgIm1hcHBpbmdzIjogIjtBQVVBLFNBQVMsaUJBQWlCO0FBQ3hCLFNBQU87SUFDTDtNQUNFLFFBQVE7TUFDUixRQUNFO01BQ0YsVUFBVTtNQUNWLFVBQVU7TUFDVixNQUFNO01BQ04sT0FBTyxDQUFDLGdDQUFPO01BQ2YsU0FBUyxDQUFDLGNBQWM7TUFDeEIsUUFBUSxDQUFDLE1BQU07TUFDZixPQUFPO0lBQ1Q7SUFDQTtNQUNFLFFBQVE7TUFDUixRQUNFO01BQ0YsVUFBVTtNQUNWLFVBQVU7TUFDVixNQUFNO01BQ04sT0FBTyxDQUFDLGdDQUFPO01BQ2YsU0FBUyxDQUFDLGdCQUFnQixZQUFZO01BQ3RDLFFBQVEsQ0FBQyxNQUFNO01BQ2YsT0FBTztJQUNUO0VBQ0Y7QUFDRjtBQUVBLElBQU8sZUFBUTs7RUFFYjtJQUNFLEtBQUs7O0lBQ0wsUUFBUTs7SUFDUixVQUFVLENBQUMsRUFBRSxLQUFLLE1BQU07QUFFdEIsWUFBTSxFQUFFLFVBQVUsU0FBUyxJQUFJO0FBRS9CLFlBQU0sWUFBWSxlQUFlLEVBQUU7UUFDakMsQ0FBQyxTQUFTLEtBQUssYUFBYSxZQUFZLEtBQUssYUFBYTtNQUM1RDtBQUVBLFVBQUksQ0FBQyxXQUFXO0FBQ2QsZUFBTyxFQUFFLE1BQU0sS0FBSyxNQUFNLEVBQUUsU0FBUyx5REFBWSxFQUFFO01BQ3JEO0FBRUEsWUFBTSxFQUFFLE1BQU0sSUFBSTtBQUNsQixhQUFPLEVBQUUsTUFBTSxLQUFLLE1BQU0sRUFBRSxNQUFNLEVBQUU7SUFDdEM7RUFDRjs7RUFFQTtJQUNFLEtBQUs7SUFDTCxRQUFRO0lBQ1IsVUFBVSxDQUFDLFlBQVk7QUFFckIsWUFBTSxRQUFRLFFBQVEsUUFBUTtBQUU5QixZQUFNLFlBQVksZUFBZSxFQUFFLEtBQUssQ0FBQyxTQUFTLEtBQUssVUFBVSxLQUFLO0FBRXRFLFVBQUksQ0FBQyxXQUFXO0FBQ2QsZUFBTyxFQUFFLE1BQU0sS0FBSyxNQUFNLEVBQUUsU0FBUyxtREFBVyxFQUFFO01BQ3BEO0FBRUEsYUFBTyxFQUFFLE1BQU0sS0FBSyxNQUFNLEVBQUUsVUFBVSxFQUFFO0lBQzFDO0VBQ0Y7QUFDRjsiLAogICJuYW1lcyI6IFtdCn0K
