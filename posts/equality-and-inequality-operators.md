---
id: "1"
title: Equality And Inequality Operators In Javascript
excerpt: Let's learn how the comparison operators in javascript work
image: equality-and-inequality-operators.jpg
isPopular: true
date: "2021-07-24"
---

In Javascript, if we want to check whether two values are the same, we use the == and === operators.
These operators both return **true** if their operands are the same and **false** if they are different.

## Strict Equality (===)

After evaluating the operands, the strict equality operator compares the two values like this:

1. It first checks the type of values. If they have different types, then they are not equal:

```jsx
"Not a number" === 69; // => false
```

2. If both values are either **true** or **false**, then they are equal:

```jsx
0 === -0; // => true
"1" === "One"; // => true
```

3. If both values are **null** or **undefined**, then they are equal:

```jsx
null === null; // => true
undefined === undefined; // => true
null === undefined; // => false
```

4. If one of the values is NaN, then they are not equal. (NaN is never equal to any other value including itself)

```jsx
"Not a Number" === NaN; // => false;
NaN === NaN; // => false;
```

5. If both values have the type **number** and the same value, then they are equal:

```jsx
const a = 3;
const b = 3;
const c = "5";
const d = 5;

3 === 3; // => true
0 === -0; // => true
5 === "5"; // => false
```

6. If both values refer to the same object, they are equal. Since Javascript objects are compared by reference and not by value if two objects have identical properties but refer to different objects they are not equal.

```jsx
const obj1 = { name: "Garfield", color: "Orange", age: 43 };
const obj2 = { name: "Garfield", color: "Orange", age: 43 };

obj1 === obj2; // => false
```
