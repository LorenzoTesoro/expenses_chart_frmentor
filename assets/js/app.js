const { createApp } = Vue;

createApp({
  data() {
    return {
      days: [
        {
          day: "mon",
          amount: 17.45,
        },
        {
          day: "tue",
          amount: 34.91,
        },
        {
          day: "wed",
          amount: 52.36,
        },
        {
          day: "thu",
          amount: 31.07,
        },
        {
          day: "fri",
          amount: 23.39,
        },
        {
          day: "sat",
          amount: 43.28,
        },
        {
          day: "sun",
          amount: 25.48,
        },
      ],
      weekday: [
        "sunday",
        "monday",
        "tuesday",
        "wednesday",
        "thursday",
        "friday",
        "saturday",
      ],
      currentDay: null,
    };
  },
  methods: {
    getCurrentDay() {
      const date = new Date();

      let day = this.weekday[date.getDay()].slice(0, 3);

      this.currentDay = day;
    },
  },
  mounted() {
    this.getCurrentDay();
  },
}).mount("#app");
