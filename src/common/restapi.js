import axios from 'axios';

const defFunc = () => {};
// let authAxios = axios;

/**
 * @param {string} auth - 从登录接口返回的token.
 */
// function setAuth(auth) {
//   authAxios = axios.create({
//     headers: {
//       authentication: auth,
//     },
//   });
// }

/**
 * @typedef {object} AxiosConfig
 * @property {string} url - 请求的 url;
 * @property {string} method - 方法 [get, post, put, delete];
 * @property {object=} params - url 的参数;
 * @property {object=} data - 发送的数据;
 * @property {string=} alert - 连接出错时的默认提示信息;
 */

/**
 * axios的简单包装
 * @param {AxiosConfig} config - 配置.
 * @param {object} funcs - 回调函数.
 */
function perform(config, funcs) {
  const funcMap = {
    success: funcs.success || defFunc,
    failure: funcs.failure || defFunc,
    always: funcs.always || defFunc,
  };

  axios(config)
    .then(res => {
      const { data } = res;
      if (data.code === 0) {
        funcMap.success(data.data);
      } else {
        funcMap.failure(data.message || data.exception);
      }
    })
    .catch(() => {
      funcMap.failure(config.alert || '连接服务器出错！');
    })
    .then(() => {
      funcMap.always();
    });
}

export default {
  perform,
};
