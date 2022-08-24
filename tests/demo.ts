/* eslint-disable ava/no-todo-test */
import test from 'ava';

test.before(t => {
  t.pass('pre-test setup code');
});

test.after.always('guaranteed cleanup', t => {
  t.pass('post-test cleanup');
});

test.serial.before(t => {
  t.pass('serial tests gurantee execution order');
});

test('default passing test', t => {
  t.pass('dummy test will always pass');
});

test.todo('an executable reminder to write ya damn tests');

