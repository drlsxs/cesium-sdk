// mock/example.ts
function exampleTree() {
  return [
    {
      label: "\u5FEB\u901F\u5F00\u59CB",
      nums: 10,
      children: [
        {
          label: "Lorem kkk",
          nums: 88,
          children: [
            {
              mark: "create-earth",
              name: "Lorem ipsum dolor sit amet",
              thumbnail: ""
            },
            {
              mark: "create-earthdd",
              name: "Lorem dolor sit amet",
              thumbnail: ""
            }
          ]
        },
        {
          label: "Lorem ccc",
          nums: 88
        }
      ]
    },
    {
      label: "\u5E7F\u6CDB\u5E7F\u6CDB",
      nums: 11,
      children: [
        {
          label: "Lorem 00000",
          nums: 99
        }
      ]
    }
  ];
}
var example_default = [
  // 用户登录接口
  {
    url: "/api/example/tree",
    //请求地址
    method: "get",
    //请求方式
    response: () => {
      console.log(void 0);
      const example = exampleTree();
      return {
        code: 200,
        data: example
      };
    }
  }
];
export {
  example_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsibW9jay9leGFtcGxlLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBfX2luamVjdGVkX2ZpbGVuYW1lX18gPSBcIkU6XFxcXHByb2plY3RcXFxcdnVlM1xcXFxjZXNpdW0tc2RrXFxcXG1vY2tcXFxcZXhhbXBsZS50c1wiO2NvbnN0IF9faW5qZWN0ZWRfZGlybmFtZV9fID0gXCJFOlxcXFxwcm9qZWN0XFxcXHZ1ZTNcXFxcY2VzaXVtLXNka1xcXFxtb2NrXCI7Y29uc3QgX19pbmplY3RlZF9pbXBvcnRfbWV0YV91cmxfXyA9IFwiZmlsZTovLy9FOi9wcm9qZWN0L3Z1ZTMvY2VzaXVtLXNkay9tb2NrL2V4YW1wbGUudHNcIjsvKlxuICogQEF1dGhvcjogeWFuZ3NoaWxpblxuICogQERhdGU6IDIwMjMtMDctMjkgMTM6NDY6MDdcbiAqIEBMYXN0RWRpdG9yczogeWFuZ3NoaWxpblxuICogQExhc3RFZGl0VGltZTogMjAyMy0wNy0yOSAxNTo1ODo0MFxuICogQEZpbGVQYXRoOiBtb2NrXFxzaWRlYmFyLnRzXG4gKiBARGVzY3JpcHRpb246IFx1OEJGN1x1NkRGQlx1NTJBMFx1NjU4N1x1NEVGNlx1NjNDRlx1OEZGMFxuICovXG5cbi8vIFx1NzkzQVx1NEY4Qlx1NjU3MFx1NjM2RVx1NTQ4Q1x1NEZBN1x1OEZCOVx1NjgwRlxuaW1wb3J0IHsgTW9ja01ldGhvZCB9IGZyb20gXCJ2aXRlLXBsdWdpbi1tb2NrXCI7XG5cbmZ1bmN0aW9uIGV4YW1wbGVUcmVlKCkge1xuICByZXR1cm4gW1xuICAgIHtcbiAgICAgIGxhYmVsOiBcIlx1NUZFQlx1OTAxRlx1NUYwMFx1NTlDQlwiLFxuICAgICAgbnVtczogMTAsXG4gICAgICBjaGlsZHJlbjogW1xuICAgICAgICB7XG4gICAgICAgICAgbGFiZWw6IFwiTG9yZW0ga2trXCIsXG4gICAgICAgICAgbnVtczogODgsXG4gICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgbWFyazogXCJjcmVhdGUtZWFydGhcIixcbiAgICAgICAgICAgICAgbmFtZTogXCJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldFwiLFxuICAgICAgICAgICAgICB0aHVtYm5haWw6IFwiXCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBtYXJrOiBcImNyZWF0ZS1lYXJ0aGRkXCIsXG4gICAgICAgICAgICAgIG5hbWU6IFwiTG9yZW0gZG9sb3Igc2l0IGFtZXRcIixcbiAgICAgICAgICAgICAgdGh1bWJuYWlsOiBcIlwiLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICBdLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgbGFiZWw6IFwiTG9yZW0gY2NjXCIsXG4gICAgICAgICAgbnVtczogODgsXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgIH0sXG4gICAge1xuICAgICAgbGFiZWw6IFwiXHU1RTdGXHU2Q0RCXHU1RTdGXHU2Q0RCXCIsXG4gICAgICBudW1zOiAxMSxcbiAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBsYWJlbDogXCJMb3JlbSAwMDAwMFwiLFxuICAgICAgICAgIG51bXM6IDk5LFxuICAgICAgICB9LFxuICAgICAgXSxcbiAgICB9LFxuICBdO1xufVxuXG5leHBvcnQgZGVmYXVsdCBbXG4gIC8vIFx1NzUyOFx1NjIzN1x1NzY3Qlx1NUY1NVx1NjNBNVx1NTNFM1xuICB7XG4gICAgdXJsOiBcIi9hcGkvZXhhbXBsZS90cmVlXCIsIC8vXHU4QkY3XHU2QzQyXHU1NzMwXHU1NzQwXG4gICAgbWV0aG9kOiBcImdldFwiLCAvL1x1OEJGN1x1NkM0Mlx1NjVCOVx1NUYwRlxuICAgIHJlc3BvbnNlOiAoKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyh0aGlzKTtcbiAgICAgIGNvbnN0IGV4YW1wbGUgPSBleGFtcGxlVHJlZSgpO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgY29kZTogMjAwLFxuICAgICAgICBkYXRhOiBleGFtcGxlLFxuICAgICAgfTtcbiAgICB9LFxuICB9LFxuXSBhcyBNb2NrTWV0aG9kW107XG4iXSwKICAibWFwcGluZ3MiOiAiO0FBWUEsU0FBUyxjQUFjO0FBQ3JCLFNBQU87QUFBQSxJQUNMO0FBQUEsTUFDRSxPQUFPO0FBQUEsTUFDUCxNQUFNO0FBQUEsTUFDTixVQUFVO0FBQUEsUUFDUjtBQUFBLFVBQ0UsT0FBTztBQUFBLFVBQ1AsTUFBTTtBQUFBLFVBQ04sVUFBVTtBQUFBLFlBQ1I7QUFBQSxjQUNFLE1BQU07QUFBQSxjQUNOLE1BQU07QUFBQSxjQUNOLFdBQVc7QUFBQSxZQUNiO0FBQUEsWUFDQTtBQUFBLGNBQ0UsTUFBTTtBQUFBLGNBQ04sTUFBTTtBQUFBLGNBQ04sV0FBVztBQUFBLFlBQ2I7QUFBQSxVQUNGO0FBQUEsUUFDRjtBQUFBLFFBQ0E7QUFBQSxVQUNFLE9BQU87QUFBQSxVQUNQLE1BQU07QUFBQSxRQUNSO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFBQSxJQUNBO0FBQUEsTUFDRSxPQUFPO0FBQUEsTUFDUCxNQUFNO0FBQUEsTUFDTixVQUFVO0FBQUEsUUFDUjtBQUFBLFVBQ0UsT0FBTztBQUFBLFVBQ1AsTUFBTTtBQUFBLFFBQ1I7QUFBQSxNQUNGO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFDRjtBQUVBLElBQU8sa0JBQVE7QUFBQTtBQUFBLEVBRWI7QUFBQSxJQUNFLEtBQUs7QUFBQTtBQUFBLElBQ0wsUUFBUTtBQUFBO0FBQUEsSUFDUixVQUFVLE1BQU07QUFDZCxjQUFRLElBQUksTUFBSTtBQUNoQixZQUFNLFVBQVUsWUFBWTtBQUM1QixhQUFPO0FBQUEsUUFDTCxNQUFNO0FBQUEsUUFDTixNQUFNO0FBQUEsTUFDUjtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQ0Y7IiwKICAibmFtZXMiOiBbXQp9Cg==
