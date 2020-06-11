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
  }
});
