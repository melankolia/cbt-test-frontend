module.exports = {
  purge: ["./src/**/*.html", "./src/**/*.js"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    fontFamily: {
      airbnb: ["Airbnb Cereal App Book"],
      "airbnb-light": ["Airbnb Cereal App Light"],
      "airbnb-medium": ["Airbnb Cereal App Medium"],
      "airbnb-bold": ["Airbnb Cereal App Bold"],
      "airbnb-extra-bold": ["Airbnb Cereal App Extra Bold"],
      "airbnb-black": ["Airbnb Cereal App Black"],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
