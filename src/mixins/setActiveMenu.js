export default {
  data() {},
  methods: {
    setActiveMenu(item) {
      document
        .querySelector('#menus .item.' + item + '')
        .classList.add('active');
    },
  },
};
