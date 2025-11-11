import {expect, test} from "vitest";
import {xd} from "../src/index";

test('Checking', () => {
  expect(xd(0.25)).toStrictEqual('POWER RANGER: RED');
});
