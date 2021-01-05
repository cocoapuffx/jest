const text = "This is a test";
const fruits = ['Apple', 'mellon', 'banana'];

//Test String
test('Must contain a text', () => {
  expect(text).toMatch(/test/);
});

//Test array value
test('Is there a banana?', () => {
  expect(fruits).toContain('banana');
});

//Test Number
test('Greater than', () => {
  expect(10).toBeGreaterThan(9);
});

//Test Boolean
test('', () => {
  expect(true).toBeTruthy();
});

// Test Callback
const reverseString = (str, callback) => {
  callback(str.split("").reverse().join(""))
};

test('Testing callback', () => {
  reverseString('Lore Ipsum', (str) => {
    expect(str).toBe('muspI eroL');
  })
});


test('Testing a Promise', () => {
  return reverseString2('Redux')
  .then(string => {
    expect(string).toBe('xudeR')
  });
});

//Test async await
test('Testing async/await', async() => {
  const string = await reverseString2('Redux')
  expect(string).toBe('xudeR');
});

// afterEach(() => console.log('After each test'));
// afterAll(() => console.log('After all tests'));

// beforeEach(() => console.log('Before each test'));
// beforeAll(() => console.log('Before all tests'));