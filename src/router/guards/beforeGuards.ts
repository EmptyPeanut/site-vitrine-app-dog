import type { NavigationGuard, RouteLocationNormalized, NavigationGuardNext } from "vue-router";

export const beforeGuards: NavigationGuard = (to, from, next) => {
    isAdmin(to, from, next)
    next()
}

function isAdmin(to: RouteLocationNormalized, from: RouteLocationNormalized, next: NavigationGuardNext) {
    if (!to.meta.isAdmin) return;
    const parsedUserToken = JSON.parse(localStorage.getItem('user') ?? 'null');
    if (!parsedUserToken) {
        next(from.path);
    } else {
        if (parsedUserToken.roles.includes('ADMIN') || parsedUserToken.roles.includes('MODERATOR')) {
        next();
        }else {
        next(from.path);
        }
    }
}