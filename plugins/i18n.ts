export default defineNuxtPlugin(() => ({
  provide: {
    myPlugin: () => 'String generated from my auto-imported plugin!',
  },
}));
