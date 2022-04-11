import { createStore } from 'vuex';
import app from './modules/app.ts';
import permission from './modules/permission';

export default createStore({
  modules: {
    app,
    permission,
  },
});
