Component({
  mixins: [],
  data: {},
  props: {
    activityPoster: "",
    activityName: "",
    activityTime: "",
    activityAddress: ""
  },
  didMount() {},
  didUpdate() {},
  didUnmount() {},
  methods: {
    goToActivity({ target: { dataset } }) {
      let shopId = dataset.shopId;
      my.navigateTo({
        url: "/pages/activity-detail/activity-detail?shopId=" + shopId
      });
    }
  }
});
