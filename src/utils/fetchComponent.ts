// import {
//     loadModule
// } from 'vue3-sfc-loader';

import * as Vue from "vue";
import { get } from "axios";

const { loadModule } = window["vue3-sfc-loader"];
/* <!-- */

const options = {
  moduleCache: {
    vue: await import("vue"),
    cesium: await import("cesium"),
  },
  compiledCache: {
    set(key, str) {
      // naive storage space management
      for (;;) {
        try {
          // doc: https://developer.mozilla.org/en-US/docs/Web/API/Storage
          window.localStorage.setItem(key, str);
          break;
        } catch (ex) {
          // handle: Uncaught DOMException: Failed to execute 'setItem' on 'Storage': Setting the value of 'XXX' exceeded the quota

          window.localStorage.removeItem(window.localStorage.key(0));
        }
      }
    },
    get(key) {
      return window.localStorage.getItem(key);
    },
  },

  async getFile(url) {
    console.log(url);
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
