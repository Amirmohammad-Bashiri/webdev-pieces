---
id: "1"
title: Equality And Inequality Operators In Javascript
excerpt: Learn how the comparison operators in javascript work
image: equality-and-inequality-operators.jpg
isPopular: true
date: "2021-07-24"
---

In Javascript, if we want to check whether two values are the same, we use the `==` and `===` operators.
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

4. If one of the values is **NaN**, then they are not equal. (**NaN** is never equal to any other value including itself)

```jsx
"Not a Number" === NaN; // => false
NaN === NaN; // => false;
```

5. If both values have the type **number** and the same value, then they are equal:

```jsx
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

## Abstract Equality Operator (==)

The **==** operator, as you can tell by the name, is less strict.
It first checks the type of operands and, if they are not the same, it does some type conversions and tries the comparison again.
The process goes like this:

1. If both operands have the same type, it will test them for strict equality. If they are strictly equal, then they are equal else, they are not.

```jsx
23 == 23; // => Types and values are the same so it will return true
```

2. If they don't have the same type, the **==** operator uses the following rules to check for equality:

   - If one of the operands is **null** and the other is **undefined**, they will be equal.

   ```jsx
   null == undefined; // => true
   ```

   - If one of the operands is a string and the other is a number, it will convert the string to a **number** and try to do the comparison again.

   ```jsx
   23 == "23"; // => true
   ```

   - If one of the operands is an **object** and the other is a **number** or a **string**, it will convert the object to a primitive value and then tries the comparison.

   ```jsx
   [2021] == 2021; // => true
   ```

   - If either of the operands is **true**, it will convert it to **1**, or either of the operands is **false**, it will convert it to **0** and try the comparison again.

   ```jsx
   false == "-0"; // => true
   false == "0"; // => true
   true == "1"; // => true
   ```

## Conclusion

The strict equality operator (===) behaves the same as the abstract equality operator (==) except it does no type conversion and the types must be the same to be considered equal.

The abstract equality operator (==) will first check the types, then it will do the comparison after doing any necessary type conversions.
