Component({
  mixins: [],
  data: {
    ori: 200
  },
  props: {
    className:'',
    ageRange:'',
    coursesNum:'',
    studentLimit:'',
    imgUrl:'',
    oriPrice:'',
    promotionPrice:''
  },

  didMount() {
    console.log(this.classItem);
  },
  didUpdate() {},
  didUnmount() {},
  methods: {
    goToActivity({ target: { dataset } }) {
      let shopId = dataset.shopId;
      my.navigateTo({
        url: "/pages/class-detail/class-detail?shopId=" + shopId
      });
    }
  }
});
