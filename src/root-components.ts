import App from './libs/App';

App.vue.setComponent(require('./app/App.vue').default);
App.vue.setComponent(require('./app/AppTest.vue').default);
// interface IComponent {
//   __name: string;
// }
// interface IComponents {
//   [key: string]: IComponent;
// }
// const components: IComponents = {};
//
// const setComponent = (component: IComponent) => {
//   // eslint-disable-next-line no-underscore-dangle
//   components[component.__name] = component;
//   console.log(component);
// };

// setComponent(require('./App.vue').default);
// setComponent(require('./App2.vue').default);
//
// export default components;
