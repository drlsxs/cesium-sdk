// mock/example.bundled_yxvq1pi8rd.bundled_21fxa53qmhv.mjs
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsibW9jay9tb2NrL21vY2svZXhhbXBsZS50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiY29uc3QgX19pbmplY3RlZF9maWxlbmFtZV9fID0gXCJFOlxcXFxwcm9qZWN0XFxcXHZ1ZTNcXFxcY2VzaXVtLXNka1xcXFxtb2NrXFxcXGV4YW1wbGUudHNcIjtjb25zdCBfX2luamVjdGVkX2Rpcm5hbWVfXyA9IFwiRTpcXFxccHJvamVjdFxcXFx2dWUzXFxcXGNlc2l1bS1zZGtcXFxcbW9ja1wiO2NvbnN0IF9faW5qZWN0ZWRfaW1wb3J0X21ldGFfdXJsX18gPSBcImZpbGU6Ly8vRTovcHJvamVjdC92dWUzL2Nlc2l1bS1zZGsvbW9jay9leGFtcGxlLnRzXCI7LypcbiAqIEBBdXRob3I6IHlhbmdzaGlsaW5cbiAqIEBEYXRlOiAyMDIzLTA3LTI5IDEzOjQ2OjA3XG4gKiBATGFzdEVkaXRvcnM6IHlhbmdzaGlsaW5cbiAqIEBMYXN0RWRpdFRpbWU6IDIwMjMtMDctMjkgMTQ6NDE6MzlcbiAqIEBGaWxlUGF0aDogbW9ja1xcc2lkZWJhci50c1xuICogQERlc2NyaXB0aW9uOiBcdThCRjdcdTZERkJcdTUyQTBcdTY1ODdcdTRFRjZcdTYzQ0ZcdThGRjBcbiAqL1xuXG4vLyBcdTc5M0FcdTRGOEJcdTY1NzBcdTYzNkVcdTU0OENcdTRGQTdcdThGQjlcdTY4MEZcbmZ1bmN0aW9uIGV4YW1wbGVUcmVlKCkge1xuICByZXR1cm4gW1xuICAgIHtcbiAgICAgIGxhYmVsOiBcIlx1NUZFQlx1OTAxRlx1NUYwMFx1NTlDQlwiLFxuICAgICAgbnVtczogMTAsXG4gICAgICBjaGlsZHJlbjogW1xuICAgICAgICB7XG4gICAgICAgICAgbGFiZWw6IFwiTG9yZW0ga2trXCIsXG4gICAgICAgICAgbnVtczogODgsXG4gICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgbWFyazogXCJjcmVhdGUtZWFydGhcIixcbiAgICAgICAgICAgICAgbmFtZTogXCJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldFwiLFxuICAgICAgICAgICAgICB0aHVtYm5haWw6IFwiXCIsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIF0sXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICBsYWJlbDogXCJMb3JlbSBjY2NcIixcbiAgICAgICAgICBudW1zOiA4OCxcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgfSxcbiAgICB7XG4gICAgICBsYWJlbDogXCJcdTVFN0ZcdTZDREJcdTVFN0ZcdTZDREJcIixcbiAgICAgIG51bXM6IDExLFxuICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAge1xuICAgICAgICAgIGxhYmVsOiBcIkxvcmVtIDAwMDAwXCIsXG4gICAgICAgICAgbnVtczogOTksXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgIH0sXG4gIF07XG59XG5cbmV4cG9ydCBkZWZhdWx0IFtcbiAgLy8gXHU3NTI4XHU2MjM3XHU3NjdCXHU1RjU1XHU2M0E1XHU1M0UzXG4gIHtcbiAgICB1cmw6IFwiL2FwaS9leGFtcGxlL3RyZWVcIiwgLy9cdThCRjdcdTZDNDJcdTU3MzBcdTU3NDBcbiAgICBtZXRob2Q6IFwiZ2V0XCIsIC8vXHU4QkY3XHU2QzQyXHU2NUI5XHU1RjBGXG4gICAgcmVzcG9uc2U6ICgpID0+IHtcbiAgICAgIGNvbnN0IGV4YW1wbGUgPSBleGFtcGxlVHJlZSgpO1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgY29kZTogMjAwLFxuICAgICAgICBkYXRhOiBleGFtcGxlLFxuICAgICAgfTtcbiAgICB9LFxuICB9LFxuXTtcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFVQSxTQUFTLGNBQWM7QUFDckIsU0FBTztJQUNMO01BQ0UsT0FBTztNQUNQLE1BQU07TUFDTixVQUFVO1FBQ1I7VUFDRSxPQUFPO1VBQ1AsTUFBTTtVQUNOLFVBQVU7WUFDUjtjQUNFLE1BQU07Y0FDTixNQUFNO2NBQ04sV0FBVztZQUNiO1VBQ0Y7UUFDRjtRQUNBO1VBQ0UsT0FBTztVQUNQLE1BQU07UUFDUjtNQUNGO0lBQ0Y7SUFDQTtNQUNFLE9BQU87TUFDUCxNQUFNO01BQ04sVUFBVTtRQUNSO1VBQ0UsT0FBTztVQUNQLE1BQU07UUFDUjtNQUNGO0lBQ0Y7RUFDRjtBQUNGO0FBRUEsSUFBTyxrQkFBUTs7RUFFYjtJQUNFLEtBQUs7O0lBQ0wsUUFBUTs7SUFDUixVQUFVLE1BQU07QUFDZCxZQUFNLFVBQVUsWUFBWTtBQUM1QixhQUFPO1FBQ0wsTUFBTTtRQUNOLE1BQU07TUFDUjtJQUNGO0VBQ0Y7QUFDRjsiLAogICJuYW1lcyI6IFtdCn0K
