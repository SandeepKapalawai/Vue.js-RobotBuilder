/* eslint-disable no-param-reassign */

function applyStyle(element, binding) {
  Object.keys(binding.value).forEach((position) => {
    element.style[position] = binding.value[position];
  });
  element.style.position = 'absolute';
}
export default {
  beforeMount(element, binding) {
    // with modifiers
    // if (binding.arg !== 'position') return;
    // Object.keys(binding.modifiers).forEach((key) => {
    //   element.style[key] = '5px';
    // });

    // with valyes
    // Object.keys(binding.value).forEach((position) => {
    //   element.style[position] = binding.value[position];
    // });
    // element.style.position = 'absolute';
    applyStyle(element, binding);
  },

  updated: (element, binding) => {
    applyStyle(element, binding);
  }
};
