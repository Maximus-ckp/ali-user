Component({
  mixins: [],
  data: {},
  props: {
    activityId:'',
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
      let activityId = dataset.activityId;
      my.navigateTo({
        url: "/pages/activity-detail/activity-detail?activityId=" + activityId
      });
    }
  }
});
