import Loading from "./index";

const createInstance = (el, binding) => {
  const textExr = el.getAttribute("agm-loading-text");
  const spinnerExr = el.getAttribute("agm-loading-spinner");
  const backgroundExr = el.getAttribute("agm-loading-background");
  const customClassExr = el.getAttribute("agm-loading-custom-class");
  const vm = binding.instance;
  el.instance = Loading({
    text: (vm && vm[textExr]) || textExr,
    spinner: (vm && vm[spinnerExr]) || spinnerExr,
    background: (vm && vm[backgroundExr]) || backgroundExr,
    customClass: (vm && vm[customClassExr]) || customClassExr,
    fullscreen: !!binding.modifiers.fullscreen,
    target: !!binding.modifiers.fullscreen ? null : el,
    body: !!binding.modifiers.body,
    visible: true,
    lock: !!binding.modifiers.lock,
  });
};

const vLoading = {
  mounted(el, binding) {
    if (!!binding.value) {
      createInstance(el, binding);
    }
  },
  updated(el, binding) {
    const instance = el.instance;
    if (binding.oldValue !== binding.value) {
      if (binding.value) {
        createInstance(el, binding);
      } else {
        instance.close();
      }
    }
  },
  unmounted(el) {
    el?.instance?.close();
  },
};

export default vLoading;
