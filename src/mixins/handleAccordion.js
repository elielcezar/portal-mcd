export default {
  data() {},
  methods: {
    handleAccordion() {
      const pTitle = document.querySelectorAll('.panel-title');
      const pActtive = document.querySelectorAll('.active');
      var i;
      for (i = 0; i < pTitle.length; i++) {
        pTitle[i].onclick = function () {
          pActtive.forEach((content) => {
            content.classList.remove('active');
          });
          this.classList.toggle('active');
          this.nextElementSibling.classList.toggle('active');
        };
      }
    },
  },
};
