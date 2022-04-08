import router from './router';
import store from './store';

const whiteList = ['/login']; // no redirect whitelist

router.beforeEach(async (to, from, next) => {
  const hasToken = localStorage.getItem('token');

  if (hasToken) {
    if (to.path === '/login') {
      next({ path: '/' });
    } else if (localStorage.getItem('info')) {
      next();
      localStorage.removeItem('info');
    } else {
      try {
        localStorage.setItem('info', '登录了');
        const accessRoutes = await store.dispatch(
          'permission/generateRoutes',
          []
        );
        router.addRoute(accessRoutes);
        next({ ...to, replace: true });
      } catch (error) {
        localStorage.removeItem('token');
        next(`/login`);
      }
    }
  } else if (whiteList.indexOf(to.path) !== -1) {
    next();
  } else {
    next('/login');
  }
});
