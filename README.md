# Uncommon TypeScript Bug: Type Narrowing and Runtime Errors

This repository demonstrates an uncommon TypeScript bug related to type narrowing and handling potential runtime errors when dealing with union types.  The core issue revolves around the `parseFloat` function and how TypeScript's type system interacts with it during runtime. The bug showcases a scenario where a seemingly correct type narrowing check fails to prevent a runtime error, specifically when a non-numeric string is passed to `parseFloat` resulting in `NaN` and a lack of proper handling for this scenario.

## Bug Description
The function `processNumber` aims to process both numeric and string inputs. It successfully handles numeric strings, but throws a runtime error rather than gracefully handling non-numeric strings due to issues with type narrowing and the way `parseFloat` produces `NaN`. This scenario is subtle and may easily be missed during development.