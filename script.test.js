const script = require('./script');

test('example test - adding two number', function() {
  expect(1 + 1).toBe(2);
});

test.skip('storeItem adds a tasks to a list of tasks', function() {
  const task = "Learn JavaScript Testing!";
  const tasks = [];

  script.storeItem(task, tasks);

  expect(tasks).toEqual([task]);
});
