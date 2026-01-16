<!-- ----------DATA TYPES ---------- -->

Data Types

What are data types?

- Data types help us organise data in different categories.

Different data types in JavaScript:

1. String- "Hello, welcome to JavaScript!"

2. Number- 5, 6.5, 8, 100

3. Boolean- true or false

4. Undefined undefined

5. Null null

<!-- ---------- VARIABLES ---------- -->

Variables

How do we create a variaable

1. Let

2. Const

3. Var

When to use let vs const in JavaScript:

Use const (default choice):
For variables that won't be reassigned
Arrays and objects (even if you modify their contents)
Function references
Rule of thumb: Use this 90% of the time

Use let:
For variables that WILL be reassigned (counters, toggles, accumulating values)
Loop counters (for loops)

Quick example:
const user = {} ✅ (object won't be reassigned, even if you change properties)

let count = 0 ✅ (will be reassigned: count++, count = 5, etc.)

<!-- ---------- COMPARISON OPERATORS ---------- -->

Comparison Operators

Compare two values and return true or false

> greater than

< less than

> = greater than or equal to

<= less than or equal to

== equal values '5' == 5 is True

=== equal values and types '5' === 5 is False (Recommended for type safety)

!= checks for not equal values

!== checks for not equal values and types (Recommended)
