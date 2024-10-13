import UserIhmView from "@/views/admin/users/UserIhmView.vue";
import UserDetailsViewVue from "@/views/admin/users/UserDetailsView.vue";
import type { RouteLocationNormalized, RouteRecordRaw } from "vue-router";

export const adminRoutes: RouteRecordRaw[] = [
  {
    path: "",
    name: "defaultAdmin",
    redirect: { name: "users" },
  },
  {
    path: "users",
    name: "users",
    component: UserIhmView,
  },
  {
    path: "user/:id",
    name: "userDetails",
    component: UserDetailsViewVue,
    props: (route: RouteLocationNormalized) => ({
      userId: route.params.id,
    }),
  },
];
