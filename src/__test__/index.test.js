const randomCities = require('../index');

test('Testing functionality', () => {
  expect(typeof (randomCities())).toBe('string');
});

test('Check if a city doesnt exist', () => {
  expect(randomCities()).not.toMatch(/Paris/);
})

//We might install Jest globally but actually there are two options to run a specific test
//One: Create the command in the package.json file and run the corresponding script
//Two: Use npx prefix like npx jest src/__test__/index.test.js

// We moved to package json the jest --watch command to listen any change and run the test suite

// npx jest --coverage shows a report of tests