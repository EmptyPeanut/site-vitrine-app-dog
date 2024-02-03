import { Store, createStore } from "vuex";
import type { InjectionKey } from "vue";

interface RootState {}

export const key: InjectionKey<Store<RootState>> = Symbol();
/** @todo créer le store qui va nous permettre de gérer la session utilisateur, s'inspirer de ça: https://www.bezkoder.com/vue-3-authentication-jwt/ */
export const authStore = createStore<RootState>({
    
});

export default authStore;