import { currentAgeForBirthYear } from "../utils";

describe("currentAgeForBirthYear", () => {
  it("returns the age of a person based on the year of birth", () => {
    // Arrange
    const birthYear = 1984;
    const currentYear = new Date().getFullYear();  // Dynamically get the current year
    const expectedAge = currentYear - birthYear;

    // Act
    const ageOfPerson = currentAgeForBirthYear(birthYear);

    // Assert
    expect(ageOfPerson).toBe(expectedAge);
  });
});
