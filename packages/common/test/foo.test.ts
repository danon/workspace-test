import {expect, test} from "vitest";
import {foo} from '../src/index';

test('50% for red', () => {
  expect(foo(0.25)).toStrictEqual('Power Ranger: Red');
});

test('50% for blue', () => {
  expect(foo(0.75)).toStrictEqual('Power Ranger: Blue');
});
