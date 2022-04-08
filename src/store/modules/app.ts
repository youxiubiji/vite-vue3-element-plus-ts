interface TypeState {
  slidebar: boolean;
}

const state: TypeState = {
  slidebar: false,
};
const mutations = {
  TOGGLE_SIDEBAR(state1: TypeState) {
    state.slidebar = !state1.slidebar;
  },
};

const actions = {
  toggleSideBar({ commit }: any) {
    commit('TOGGLE_SIDEBAR');
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
