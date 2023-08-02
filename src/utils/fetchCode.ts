import axios from "axios";

export const fetchSourceCode = async (viewId) => {
  const r = await axios.get(`map/${viewId}/index.vue`);
  window.sfcInfo.sfcContent = r.data;
};
