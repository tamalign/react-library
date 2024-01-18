import { validBranchNamePattern } from "../validResourceSegmentPattern";

export const validBranchNames = [
  "t",
  "☃️",
  "user/in-progress/do-some-things",
  "user/in-progress/{}",
  "user/{/a.tt/}",
];

export const validTagNames = validBranchNames;

export const invalidBranchNames = [
  "",
  "this-is-a-..-test",
  "this-is-a-@{-test",
  "this-is-a- -test",
  "this-is-a-\t-test",
  "this-is-a-//-test",
  "this-is-a-:-test",
  "this-is-a-?-test",
  "this-is-a-[-test",
  "this-is-a-\\-test",
  "this-is-a-^-test",
  "this-is-a-~-test",
  "this-is-a-*-test",
  "this-is-a-\x00-test",
  "this-is-a-\x01-test",
  "this-is-a-\x02-test",
  "this-is-a-\x03-test",
  "this-is-a-\x04-test",
  "this-is-a-\x05-test",
  "this-is-a-\x06-test",
  "this-is-a-\x07-test",
  "this-is-a-\x08-test",
  "this-is-a-\x09-test",
  "this-is-a-\x0a-test",
  "this-is-a-\x0b-test",
  "this-is-a-\x0c-test",
  "this-is-a-\x0d-test",
  "this-is-a-\x0e-test",
  "this-is-a-\x0f-test",
  "this-is-a-\x10-test",
  "this-is-a-\x11-test",
  "this-is-a-\x12-test",
  "this-is-a-\x13-test",
  "this-is-a-\x14-test",
  "this-is-a-\x15-test",
  "this-is-a-\x16-test",
  "this-is-a-\x17-test",
  "this-is-a-\x18-test",
  "this-is-a-\x19-test",
  "this-is-a-\x1a-test",
  "this-is-a-\x1b-test",
  "this-is-a-\x1c-test",
  "this-is-a-\x1d-test",
  "this-is-a-\x1e-test",
  "this-is-a-\x1f-test",
  "this-is-a-\x7f-test",
  "this-is-a-\n-test",
  "user/working/.tt",
  ".user/working/a.tt",
  "user/working/",
  "/user/working/",
  "user/working/mybranch.lock",
  "mybranch.lock",
  "user.lock/working/mybranch",
  "-",
];

export const invalidTagNames = invalidBranchNames;

const validBranchNameRegex = new RegExp(validBranchNamePattern);

test("validBranchNamePattern", () => {
  validBranchNames.forEach(bn => expect(bn).toMatch(validBranchNameRegex));
  invalidBranchNames.forEach(bn =>
    expect(bn).not.toMatch(validBranchNameRegex),
  );
});
