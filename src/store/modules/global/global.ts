import { IGlobal, IModalData } from '@/store/modules/global/IGlobal';

export default {
  state: () => ({
    screenWidth: window.innerWidth,
    loader: false,
    defModal: {
      isOpen: false,
      data: { name: '', width: '' },
    },
  }),
  mutations: {
    /** change screenWidth * */
    'global/changeScreenWidth': (state: IGlobal) => {
      // eslint-disable-next-line no-param-reassign
      state.screenWidth = window.innerWidth;
    },
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
    /**
     * methods for modals
     * * */
    'global/modalShow': (state: IGlobal, payload: IModalData) => {
      // eslint-disable-next-line no-param-reassign
      state.defModal = {
        isOpen: true,
        data: { ...payload },
      };
    },
    'global/modalHide': (state: IGlobal) => {
      // eslint-disable-next-line no-param-reassign
      state.defModal = {
        isOpen: false,
      };
    },
  },
};
