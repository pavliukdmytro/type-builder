import { IGlobal } from '@/store/modules/global/IGlobal';

export default {
  state: () => ({
    loader: false,
  }),
  mutations: {
    /**
     * @param {string|object} payload - parent selector for preloader default: document.querySelector('body').
     */
    'global/loaderStart': (state: IGlobal) => {
      // eslint-disable-next-line no-param-reassign
      state.loader = true;
    },
    'global/loaderStop': (state: IGlobal) => {
      // eslint-disable-next-line no-param-reassign
      state.loader = false;
    },
  },
};
