const cities = ['Mexico city', 'Chicago', 'Montreál', 'Roma'];

const randomCity = () => {
  const city = cities[Math.floor(Math.random() * cities.length)];
  return city;
};

//Test Promise
const reverseString2 = str => {
  return new Promise((resolve, reject) => {
    if (!str) {
      reject(Error('Error'))
    }
    resolve(str.split("").reverse().join(""))
  });
};

module.exports = randomCity;