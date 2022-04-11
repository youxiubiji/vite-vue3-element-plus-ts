import { ActionContext } from 'vuex';

interface TypeState {
  slidebar: boolean;
}

const state: TypeState = {
  slidebar: false,
};
const mutations = {
  TOGGLE_SIDEBAR() {
    state.slidebar = !state.slidebar;
  },
};
const actions = {
  toggleSideBar({ commit }: ActionContext<TypeState, string>) {
    commit('TOGGLE_SIDEBAR');
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
