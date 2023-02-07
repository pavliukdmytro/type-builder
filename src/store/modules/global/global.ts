interface IState {
  screenWidth: number;
  loader: boolean;
}
export default {
  state: () => ({
    screenWidth: window.innerWidth,
    loader: false,
    // defModal: {
    //   isOpen: false,
    //   data: {},
    // },
  }),
  mutations: {
    /** change screenWidth * */
    'global/changeScreenWidth': (state: IState) => {
      // eslint-disable-next-line no-param-reassign
      state.screenWidth = window.innerWidth;
    },
    /**
     * @param {string|object} payload - parent selector for preloader default: document.querySelector('body').
     */
    'global/loaderStart': (state: IState) => {
      // eslint-disable-next-line no-param-reassign
      state.loader = true;
    },
    'global/loaderStop': (state: IState) => {
      // eslint-disable-next-line no-param-reassign
      state.loader = false;
    },
    /**
     * methods for modals
     * * */
    // 'global/modalShow': (state, payload) => {
    //   state.defModal = {
    //     isOpen: true,
    //     data: { ...payload },
    //   };
    // },
    // 'global/modalHide': (state) => {
    //   state.defModal = {
    //     isOpen: false,
    //   };
    // },
  },
};
