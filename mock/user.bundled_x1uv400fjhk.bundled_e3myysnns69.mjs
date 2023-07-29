// mock/user.bundled_x1uv400fjhk.mjs
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsibW9jay9tb2NrL3VzZXIudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9faW5qZWN0ZWRfZmlsZW5hbWVfXyA9IFwiRTpcXFxccHJvamVjdFxcXFx2dWUzXFxcXGNlc2l1bS1zZGtcXFxcbW9ja1xcXFx1c2VyLnRzXCI7Y29uc3QgX19pbmplY3RlZF9kaXJuYW1lX18gPSBcIkU6XFxcXHByb2plY3RcXFxcdnVlM1xcXFxjZXNpdW0tc2RrXFxcXG1vY2tcIjtjb25zdCBfX2luamVjdGVkX2ltcG9ydF9tZXRhX3VybF9fID0gXCJmaWxlOi8vL0U6L3Byb2plY3QvdnVlMy9jZXNpdW0tc2RrL21vY2svdXNlci50c1wiOy8qXG4gKiBAQXV0aG9yOiB5YW5nc2hpbGluXG4gKiBARGF0ZTogMjAyMy0wNy0wMiAxNDo0NDozNVxuICogQExhc3RFZGl0b3JzOiB5YW5nc2hpbGluXG4gKiBATGFzdEVkaXRUaW1lOiAyMDIzLTA3LTAyIDE0OjQ1OjIwXG4gKiBARmlsZVBhdGg6IG1vY2tcXHVzZXIudHNcbiAqIEBEZXNjcmlwdGlvbjogXHU4QkY3XHU2REZCXHU1MkEwXHU2NTg3XHU0RUY2XHU2M0NGXHU4RkYwXG4gKi9cblxuLy9cdTc1MjhcdTYyMzdcdTRGRTFcdTYwNkZcdTY1NzBcdTYzNkVcbmZ1bmN0aW9uIGNyZWF0ZVVzZXJMaXN0KCkge1xuICByZXR1cm4gW1xuICAgIHtcbiAgICAgIHVzZXJJZDogMSxcbiAgICAgIGF2YXRhcjpcbiAgICAgICAgXCJodHRwczovL3dwaW1nLndhbGxzdGNuLmNvbS9mNzc4NzM4Yy1lNGY4LTQ4NzAtYjYzNC01NjcwM2I0YWNhZmUuZ2lmXCIsXG4gICAgICB1c2VybmFtZTogXCJhZG1pblwiLFxuICAgICAgcGFzc3dvcmQ6IFwiMTExMTExXCIsXG4gICAgICBkZXNjOiBcIlx1NUU3M1x1NTNGMFx1N0JBMVx1NzQwNlx1NTQ1OFwiLFxuICAgICAgcm9sZXM6IFtcIlx1NUU3M1x1NTNGMFx1N0JBMVx1NzQwNlx1NTQ1OFwiXSxcbiAgICAgIGJ1dHRvbnM6IFtcImN1c2VyLmRldGFpbFwiXSxcbiAgICAgIHJvdXRlczogW1wiaG9tZVwiXSxcbiAgICAgIHRva2VuOiBcIkFkbWluIFRva2VuXCIsXG4gICAgfSxcbiAgICB7XG4gICAgICB1c2VySWQ6IDIsXG4gICAgICBhdmF0YXI6XG4gICAgICAgIFwiaHR0cHM6Ly93cGltZy53YWxsc3Rjbi5jb20vZjc3ODczOGMtZTRmOC00ODcwLWI2MzQtNTY3MDNiNGFjYWZlLmdpZlwiLFxuICAgICAgdXNlcm5hbWU6IFwic3lzdGVtXCIsXG4gICAgICBwYXNzd29yZDogXCIxMTExMTFcIixcbiAgICAgIGRlc2M6IFwiXHU3Q0ZCXHU3RURGXHU3QkExXHU3NDA2XHU1NDU4XCIsXG4gICAgICByb2xlczogW1wiXHU3Q0ZCXHU3RURGXHU3QkExXHU3NDA2XHU1NDU4XCJdLFxuICAgICAgYnV0dG9uczogW1wiY3VzZXIuZGV0YWlsXCIsIFwiY3VzZXIudXNlclwiXSxcbiAgICAgIHJvdXRlczogW1wiaG9tZVwiXSxcbiAgICAgIHRva2VuOiBcIlN5c3RlbSBUb2tlblwiLFxuICAgIH0sXG4gIF07XG59XG5cbmV4cG9ydCBkZWZhdWx0IFtcbiAgLy8gXHU3NTI4XHU2MjM3XHU3NjdCXHU1RjU1XHU2M0E1XHU1M0UzXG4gIHtcbiAgICB1cmw6IFwiL2FwaS91c2VyL2xvZ2luXCIsIC8vXHU4QkY3XHU2QzQyXHU1NzMwXHU1NzQwXG4gICAgbWV0aG9kOiBcInBvc3RcIiwgLy9cdThCRjdcdTZDNDJcdTY1QjlcdTVGMEZcbiAgICByZXNwb25zZTogKHsgYm9keSB9KSA9PiB7XG4gICAgICAvL1x1ODNCN1x1NTNENlx1OEJGN1x1NkM0Mlx1NEY1M1x1NjQzQVx1NUUyNlx1OEZDN1x1Njc2NVx1NzY4NFx1NzUyOFx1NjIzN1x1NTQwRFx1NEUwRVx1NUJDNlx1NzgwMVxuICAgICAgY29uc3QgeyB1c2VybmFtZSwgcGFzc3dvcmQgfSA9IGJvZHk7XG4gICAgICAvL1x1OEMwM1x1NzUyOFx1ODNCN1x1NTNENlx1NzUyOFx1NjIzN1x1NEZFMVx1NjA2Rlx1NTFGRFx1NjU3MCxcdTc1MjhcdTRFOEVcdTUyMjRcdTY1QURcdTY2MkZcdTU0MjZcdTY3MDlcdTZCNjRcdTc1MjhcdTYyMzdcbiAgICAgIGNvbnN0IGNoZWNrVXNlciA9IGNyZWF0ZVVzZXJMaXN0KCkuZmluZChcbiAgICAgICAgKGl0ZW0pID0+IGl0ZW0udXNlcm5hbWUgPT09IHVzZXJuYW1lICYmIGl0ZW0ucGFzc3dvcmQgPT09IHBhc3N3b3JkXG4gICAgICApO1xuICAgICAgLy9cdTZDQTFcdTY3MDlcdTc1MjhcdTYyMzdcdThGRDRcdTU2REVcdTU5MzFcdThEMjVcdTRGRTFcdTYwNkZcbiAgICAgIGlmICghY2hlY2tVc2VyKSB7XG4gICAgICAgIHJldHVybiB7IGNvZGU6IDIwMSwgZGF0YTogeyBtZXNzYWdlOiBcIlx1OEQyNlx1NTNGN1x1NjIxNlx1ODAwNVx1NUJDNlx1NzgwMVx1NEUwRFx1NkI2M1x1Nzg2RVwiIH0gfTtcbiAgICAgIH1cbiAgICAgIC8vXHU1OTgyXHU2NzlDXHU2NzA5XHU4RkQ0XHU1NkRFXHU2MjEwXHU1MjlGXHU0RkUxXHU2MDZGXG4gICAgICBjb25zdCB7IHRva2VuIH0gPSBjaGVja1VzZXI7XG4gICAgICByZXR1cm4geyBjb2RlOiAyMDAsIGRhdGE6IHsgdG9rZW4gfSB9O1xuICAgIH0sXG4gIH0sXG4gIC8vIFx1ODNCN1x1NTNENlx1NzUyOFx1NjIzN1x1NEZFMVx1NjA2RlxuICB7XG4gICAgdXJsOiBcIi9hcGkvdXNlci9pbmZvXCIsXG4gICAgbWV0aG9kOiBcImdldFwiLFxuICAgIHJlc3BvbnNlOiAocmVxdWVzdCkgPT4ge1xuICAgICAgLy9cdTgzQjdcdTUzRDZcdThCRjdcdTZDNDJcdTU5MzRcdTY0M0FcdTVFMjZ0b2tlblxuICAgICAgY29uc3QgdG9rZW4gPSByZXF1ZXN0LmhlYWRlcnMudG9rZW47XG4gICAgICAvL1x1NjdFNVx1NzcwQlx1NzUyOFx1NjIzN1x1NEZFMVx1NjA2Rlx1NjYyRlx1NTQyNlx1NTMwNVx1NTQyQlx1NjcwOVx1NkIyMXRva2VuXHU3NTI4XHU2MjM3XG4gICAgICBjb25zdCBjaGVja1VzZXIgPSBjcmVhdGVVc2VyTGlzdCgpLmZpbmQoKGl0ZW0pID0+IGl0ZW0udG9rZW4gPT09IHRva2VuKTtcbiAgICAgIC8vXHU2Q0ExXHU2NzA5XHU4RkQ0XHU1NkRFXHU1OTMxXHU4RDI1XHU3Njg0XHU0RkUxXHU2MDZGXG4gICAgICBpZiAoIWNoZWNrVXNlcikge1xuICAgICAgICByZXR1cm4geyBjb2RlOiAyMDEsIGRhdGE6IHsgbWVzc2FnZTogXCJcdTgzQjdcdTUzRDZcdTc1MjhcdTYyMzdcdTRGRTFcdTYwNkZcdTU5MzFcdThEMjVcIiB9IH07XG4gICAgICB9XG4gICAgICAvL1x1NTk4Mlx1Njc5Q1x1NjcwOVx1OEZENFx1NTZERVx1NjIxMFx1NTI5Rlx1NEZFMVx1NjA2RlxuICAgICAgcmV0dXJuIHsgY29kZTogMjAwLCBkYXRhOiB7IGNoZWNrVXNlciB9IH07XG4gICAgfSxcbiAgfSxcbl07XG4iXSwKICAibWFwcGluZ3MiOiAiO0FBVUEsU0FBUyxpQkFBaUI7QUFDeEIsU0FBTztJQUNMO01BQ0UsUUFBUTtNQUNSLFFBQ0U7TUFDRixVQUFVO01BQ1YsVUFBVTtNQUNWLE1BQU07TUFDTixPQUFPLENBQUMsZ0NBQU87TUFDZixTQUFTLENBQUMsY0FBYztNQUN4QixRQUFRLENBQUMsTUFBTTtNQUNmLE9BQU87SUFDVDtJQUNBO01BQ0UsUUFBUTtNQUNSLFFBQ0U7TUFDRixVQUFVO01BQ1YsVUFBVTtNQUNWLE1BQU07TUFDTixPQUFPLENBQUMsZ0NBQU87TUFDZixTQUFTLENBQUMsZ0JBQWdCLFlBQVk7TUFDdEMsUUFBUSxDQUFDLE1BQU07TUFDZixPQUFPO0lBQ1Q7RUFDRjtBQUNGO0FBRUEsSUFBTyxlQUFROztFQUViO0lBQ0UsS0FBSzs7SUFDTCxRQUFROztJQUNSLFVBQVUsQ0FBQyxFQUFFLEtBQUssTUFBTTtBQUV0QixZQUFNLEVBQUUsVUFBVSxTQUFTLElBQUk7QUFFL0IsWUFBTSxZQUFZLGVBQWUsRUFBRTtRQUNqQyxDQUFDLFNBQVMsS0FBSyxhQUFhLFlBQVksS0FBSyxhQUFhO01BQzVEO0FBRUEsVUFBSSxDQUFDLFdBQVc7QUFDZCxlQUFPLEVBQUUsTUFBTSxLQUFLLE1BQU0sRUFBRSxTQUFTLHlEQUFZLEVBQUU7TUFDckQ7QUFFQSxZQUFNLEVBQUUsTUFBTSxJQUFJO0FBQ2xCLGFBQU8sRUFBRSxNQUFNLEtBQUssTUFBTSxFQUFFLE1BQU0sRUFBRTtJQUN0QztFQUNGOztFQUVBO0lBQ0UsS0FBSztJQUNMLFFBQVE7SUFDUixVQUFVLENBQUMsWUFBWTtBQUVyQixZQUFNLFFBQVEsUUFBUSxRQUFRO0FBRTlCLFlBQU0sWUFBWSxlQUFlLEVBQUUsS0FBSyxDQUFDLFNBQVMsS0FBSyxVQUFVLEtBQUs7QUFFdEUsVUFBSSxDQUFDLFdBQVc7QUFDZCxlQUFPLEVBQUUsTUFBTSxLQUFLLE1BQU0sRUFBRSxTQUFTLG1EQUFXLEVBQUU7TUFDcEQ7QUFFQSxhQUFPLEVBQUUsTUFBTSxLQUFLLE1BQU0sRUFBRSxVQUFVLEVBQUU7SUFDMUM7RUFDRjtBQUNGOyIsCiAgIm5hbWVzIjogW10KfQo=
