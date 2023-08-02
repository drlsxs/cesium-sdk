// import {
//     loadModule
// } from 'vue3-sfc-loader';

import * as Vue from "vue";

const { loadModule } = window["vue3-sfc-loader"];
/* <!-- */

const options = {
  moduleCache: {
    vue: await import("vue"),
    cesium: await import("cesium"),
  },
  async getFile(url) {
    console.log(77777);
    return Promise.resolve(window.sfcInfo.sfcContent);
  },
  addStyle(textContent) {
    const style = Object.assign(document.createElement("style"), {
      textContent,
    });
    const ref = document.head.getElementsByTagName("style")[0] || null;
    document.head.insertBefore(style, ref);
  },
};

const fetchComponentFromString = (url) => {
  try {
    return Vue.defineAsyncComponent(() => loadModule(url, options));
  } catch (error) {
    throw new Error(`Error raised on file resolve`);
  }
};

export default fetchComponentFromString;
