// mock/user.bundled_tiopm16ha2h.bundled_7jdkne4xmsf.mjs
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsibW9jay9tb2NrL21vY2svdXNlci50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiY29uc3QgX19pbmplY3RlZF9maWxlbmFtZV9fID0gXCJFOlxcXFxwcm9qZWN0XFxcXHZ1ZTNcXFxcY2VzaXVtLXNka1xcXFxtb2NrXFxcXHVzZXIudHNcIjtjb25zdCBfX2luamVjdGVkX2Rpcm5hbWVfXyA9IFwiRTpcXFxccHJvamVjdFxcXFx2dWUzXFxcXGNlc2l1bS1zZGtcXFxcbW9ja1wiO2NvbnN0IF9faW5qZWN0ZWRfaW1wb3J0X21ldGFfdXJsX18gPSBcImZpbGU6Ly8vRTovcHJvamVjdC92dWUzL2Nlc2l1bS1zZGsvbW9jay91c2VyLnRzXCI7LypcbiAqIEBBdXRob3I6IHlhbmdzaGlsaW5cbiAqIEBEYXRlOiAyMDIzLTA3LTAyIDE0OjQ0OjM1XG4gKiBATGFzdEVkaXRvcnM6IHlhbmdzaGlsaW5cbiAqIEBMYXN0RWRpdFRpbWU6IDIwMjMtMDctMDIgMTQ6NDU6MjBcbiAqIEBGaWxlUGF0aDogbW9ja1xcdXNlci50c1xuICogQERlc2NyaXB0aW9uOiBcdThCRjdcdTZERkJcdTUyQTBcdTY1ODdcdTRFRjZcdTYzQ0ZcdThGRjBcbiAqL1xuXG4vL1x1NzUyOFx1NjIzN1x1NEZFMVx1NjA2Rlx1NjU3MFx1NjM2RVxuZnVuY3Rpb24gY3JlYXRlVXNlckxpc3QoKSB7XG4gIHJldHVybiBbXG4gICAge1xuICAgICAgdXNlcklkOiAxLFxuICAgICAgYXZhdGFyOlxuICAgICAgICBcImh0dHBzOi8vd3BpbWcud2FsbHN0Y24uY29tL2Y3Nzg3MzhjLWU0ZjgtNDg3MC1iNjM0LTU2NzAzYjRhY2FmZS5naWZcIixcbiAgICAgIHVzZXJuYW1lOiBcImFkbWluXCIsXG4gICAgICBwYXNzd29yZDogXCIxMTExMTFcIixcbiAgICAgIGRlc2M6IFwiXHU1RTczXHU1M0YwXHU3QkExXHU3NDA2XHU1NDU4XCIsXG4gICAgICByb2xlczogW1wiXHU1RTczXHU1M0YwXHU3QkExXHU3NDA2XHU1NDU4XCJdLFxuICAgICAgYnV0dG9uczogW1wiY3VzZXIuZGV0YWlsXCJdLFxuICAgICAgcm91dGVzOiBbXCJob21lXCJdLFxuICAgICAgdG9rZW46IFwiQWRtaW4gVG9rZW5cIixcbiAgICB9LFxuICAgIHtcbiAgICAgIHVzZXJJZDogMixcbiAgICAgIGF2YXRhcjpcbiAgICAgICAgXCJodHRwczovL3dwaW1nLndhbGxzdGNuLmNvbS9mNzc4NzM4Yy1lNGY4LTQ4NzAtYjYzNC01NjcwM2I0YWNhZmUuZ2lmXCIsXG4gICAgICB1c2VybmFtZTogXCJzeXN0ZW1cIixcbiAgICAgIHBhc3N3b3JkOiBcIjExMTExMVwiLFxuICAgICAgZGVzYzogXCJcdTdDRkJcdTdFREZcdTdCQTFcdTc0MDZcdTU0NThcIixcbiAgICAgIHJvbGVzOiBbXCJcdTdDRkJcdTdFREZcdTdCQTFcdTc0MDZcdTU0NThcIl0sXG4gICAgICBidXR0b25zOiBbXCJjdXNlci5kZXRhaWxcIiwgXCJjdXNlci51c2VyXCJdLFxuICAgICAgcm91dGVzOiBbXCJob21lXCJdLFxuICAgICAgdG9rZW46IFwiU3lzdGVtIFRva2VuXCIsXG4gICAgfSxcbiAgXTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgW1xuICAvLyBcdTc1MjhcdTYyMzdcdTc2N0JcdTVGNTVcdTYzQTVcdTUzRTNcbiAge1xuICAgIHVybDogXCIvYXBpL3VzZXIvbG9naW5cIiwgLy9cdThCRjdcdTZDNDJcdTU3MzBcdTU3NDBcbiAgICBtZXRob2Q6IFwicG9zdFwiLCAvL1x1OEJGN1x1NkM0Mlx1NjVCOVx1NUYwRlxuICAgIHJlc3BvbnNlOiAoeyBib2R5IH0pID0+IHtcbiAgICAgIC8vXHU4M0I3XHU1M0Q2XHU4QkY3XHU2QzQyXHU0RjUzXHU2NDNBXHU1RTI2XHU4RkM3XHU2NzY1XHU3Njg0XHU3NTI4XHU2MjM3XHU1NDBEXHU0RTBFXHU1QkM2XHU3ODAxXG4gICAgICBjb25zdCB7IHVzZXJuYW1lLCBwYXNzd29yZCB9ID0gYm9keTtcbiAgICAgIC8vXHU4QzAzXHU3NTI4XHU4M0I3XHU1M0Q2XHU3NTI4XHU2MjM3XHU0RkUxXHU2MDZGXHU1MUZEXHU2NTcwLFx1NzUyOFx1NEU4RVx1NTIyNFx1NjVBRFx1NjYyRlx1NTQyNlx1NjcwOVx1NkI2NFx1NzUyOFx1NjIzN1xuICAgICAgY29uc3QgY2hlY2tVc2VyID0gY3JlYXRlVXNlckxpc3QoKS5maW5kKFxuICAgICAgICAoaXRlbSkgPT4gaXRlbS51c2VybmFtZSA9PT0gdXNlcm5hbWUgJiYgaXRlbS5wYXNzd29yZCA9PT0gcGFzc3dvcmRcbiAgICAgICk7XG4gICAgICAvL1x1NkNBMVx1NjcwOVx1NzUyOFx1NjIzN1x1OEZENFx1NTZERVx1NTkzMVx1OEQyNVx1NEZFMVx1NjA2RlxuICAgICAgaWYgKCFjaGVja1VzZXIpIHtcbiAgICAgICAgcmV0dXJuIHsgY29kZTogMjAxLCBkYXRhOiB7IG1lc3NhZ2U6IFwiXHU4RDI2XHU1M0Y3XHU2MjE2XHU4MDA1XHU1QkM2XHU3ODAxXHU0RTBEXHU2QjYzXHU3ODZFXCIgfSB9O1xuICAgICAgfVxuICAgICAgLy9cdTU5ODJcdTY3OUNcdTY3MDlcdThGRDRcdTU2REVcdTYyMTBcdTUyOUZcdTRGRTFcdTYwNkZcbiAgICAgIGNvbnN0IHsgdG9rZW4gfSA9IGNoZWNrVXNlcjtcbiAgICAgIHJldHVybiB7IGNvZGU6IDIwMCwgZGF0YTogeyB0b2tlbiB9IH07XG4gICAgfSxcbiAgfSxcbiAgLy8gXHU4M0I3XHU1M0Q2XHU3NTI4XHU2MjM3XHU0RkUxXHU2MDZGXG4gIHtcbiAgICB1cmw6IFwiL2FwaS91c2VyL2luZm9cIixcbiAgICBtZXRob2Q6IFwiZ2V0XCIsXG4gICAgcmVzcG9uc2U6IChyZXF1ZXN0KSA9PiB7XG4gICAgICAvL1x1ODNCN1x1NTNENlx1OEJGN1x1NkM0Mlx1NTkzNFx1NjQzQVx1NUUyNnRva2VuXG4gICAgICBjb25zdCB0b2tlbiA9IHJlcXVlc3QuaGVhZGVycy50b2tlbjtcbiAgICAgIC8vXHU2N0U1XHU3NzBCXHU3NTI4XHU2MjM3XHU0RkUxXHU2MDZGXHU2NjJGXHU1NDI2XHU1MzA1XHU1NDJCXHU2NzA5XHU2QjIxdG9rZW5cdTc1MjhcdTYyMzdcbiAgICAgIGNvbnN0IGNoZWNrVXNlciA9IGNyZWF0ZVVzZXJMaXN0KCkuZmluZCgoaXRlbSkgPT4gaXRlbS50b2tlbiA9PT0gdG9rZW4pO1xuICAgICAgLy9cdTZDQTFcdTY3MDlcdThGRDRcdTU2REVcdTU5MzFcdThEMjVcdTc2ODRcdTRGRTFcdTYwNkZcbiAgICAgIGlmICghY2hlY2tVc2VyKSB7XG4gICAgICAgIHJldHVybiB7IGNvZGU6IDIwMSwgZGF0YTogeyBtZXNzYWdlOiBcIlx1ODNCN1x1NTNENlx1NzUyOFx1NjIzN1x1NEZFMVx1NjA2Rlx1NTkzMVx1OEQyNVwiIH0gfTtcbiAgICAgIH1cbiAgICAgIC8vXHU1OTgyXHU2NzlDXHU2NzA5XHU4RkQ0XHU1NkRFXHU2MjEwXHU1MjlGXHU0RkUxXHU2MDZGXG4gICAgICByZXR1cm4geyBjb2RlOiAyMDAsIGRhdGE6IHsgY2hlY2tVc2VyIH0gfTtcbiAgICB9LFxuICB9LFxuXTtcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFVQSxTQUFTLGlCQUFpQjtBQUN4QixTQUFPO0lBQ0w7TUFDRSxRQUFRO01BQ1IsUUFDRTtNQUNGLFVBQVU7TUFDVixVQUFVO01BQ1YsTUFBTTtNQUNOLE9BQU8sQ0FBQyxnQ0FBTztNQUNmLFNBQVMsQ0FBQyxjQUFjO01BQ3hCLFFBQVEsQ0FBQyxNQUFNO01BQ2YsT0FBTztJQUNUO0lBQ0E7TUFDRSxRQUFRO01BQ1IsUUFDRTtNQUNGLFVBQVU7TUFDVixVQUFVO01BQ1YsTUFBTTtNQUNOLE9BQU8sQ0FBQyxnQ0FBTztNQUNmLFNBQVMsQ0FBQyxnQkFBZ0IsWUFBWTtNQUN0QyxRQUFRLENBQUMsTUFBTTtNQUNmLE9BQU87SUFDVDtFQUNGO0FBQ0Y7QUFFQSxJQUFPLGVBQVE7O0VBRWI7SUFDRSxLQUFLOztJQUNMLFFBQVE7O0lBQ1IsVUFBVSxDQUFDLEVBQUUsS0FBSyxNQUFNO0FBRXRCLFlBQU0sRUFBRSxVQUFVLFNBQVMsSUFBSTtBQUUvQixZQUFNLFlBQVksZUFBZSxFQUFFO1FBQ2pDLENBQUMsU0FBUyxLQUFLLGFBQWEsWUFBWSxLQUFLLGFBQWE7TUFDNUQ7QUFFQSxVQUFJLENBQUMsV0FBVztBQUNkLGVBQU8sRUFBRSxNQUFNLEtBQUssTUFBTSxFQUFFLFNBQVMseURBQVksRUFBRTtNQUNyRDtBQUVBLFlBQU0sRUFBRSxNQUFNLElBQUk7QUFDbEIsYUFBTyxFQUFFLE1BQU0sS0FBSyxNQUFNLEVBQUUsTUFBTSxFQUFFO0lBQ3RDO0VBQ0Y7O0VBRUE7SUFDRSxLQUFLO0lBQ0wsUUFBUTtJQUNSLFVBQVUsQ0FBQyxZQUFZO0FBRXJCLFlBQU0sUUFBUSxRQUFRLFFBQVE7QUFFOUIsWUFBTSxZQUFZLGVBQWUsRUFBRSxLQUFLLENBQUMsU0FBUyxLQUFLLFVBQVUsS0FBSztBQUV0RSxVQUFJLENBQUMsV0FBVztBQUNkLGVBQU8sRUFBRSxNQUFNLEtBQUssTUFBTSxFQUFFLFNBQVMsbURBQVcsRUFBRTtNQUNwRDtBQUVBLGFBQU8sRUFBRSxNQUFNLEtBQUssTUFBTSxFQUFFLFVBQVUsRUFBRTtJQUMxQztFQUNGO0FBQ0Y7IiwKICAibmFtZXMiOiBbXQp9Cg==
