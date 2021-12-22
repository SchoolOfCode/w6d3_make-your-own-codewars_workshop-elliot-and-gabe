//👉 Write your tests below here:
import decryptMessage from "./main.js";

describe(`Cipher challenge`, () => {
  it(`Should return the string "Hello".`, () => {
    // Arrangement
    const cipher = "HdMdLeludblfgOo";
    const scrambledKey = [5, 0, 6, 10, 14];
    const expected = "Hello";

    // Act
    const actual = decryptMessage(cipher, scrambledKey);

    // Assert
    expect(actual).toBe(expected);
  });

  it(`Should return the string "1723"`, () => {
    // Arrangement
    const cipher = "26384138733372763";
    const scrambledKey = [16, 8, 5, 13];
    const expected = "1723";
    // Act
    const actual = decryptMessage(cipher, scrambledKey);
    // Assert
    expect(actual).toBe(expected);
  });

  it(`Should return the string ">^<"`, () => {
    // Arrangement
    const cipher = "'4$>5&^&*!?<Hd73!!djnvlwDjwndlv*£0d£ddjFJfHellothere";
    const scrambledKey = [11, 3, 6];
    const expected = ">^<";
    // Act
    const actual = decryptMessage(cipher, scrambledKey);
    // Assert
    expect(actual).toBe(expected);
  });

  it(`Should return the string "115382_is_a_good_number"`, () => {
    // Arrangement
    const cipher =
      "2ffdf11f22r5g32afqw__gww82_ife2!__5__s1_asome_gd2oo44w??d_nudfTmbtnd!er";
    const scrambledKey = [
      25, 13, 45, 40, 57, 64, 26, 69, 27, 11, 63, 49, 37, 56, 39, 50, 24, 70, 5,
      46, 6, 58, 59,
    ];
    const expected = "115382_is_a_good_number";
    // Act
    const actual = decryptMessage(cipher, scrambledKey);
    // Assert
    expect(actual).toBe(expected);
  });

  // Tested and confirmed that tests fail if any other data type other than string is given.
});
