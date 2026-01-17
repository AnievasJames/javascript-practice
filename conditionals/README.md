<!-- ---------- IF STATEMENT ----------  -->

If, Else If, Else

if is always required and comes first

else if is optional and used to check additional conditions

else is optional and acts as the final fallback

<!-- ---------- LOGICAL OPERATORS ---------- -->

Logical Operators

&&

||

&& checks if its left and right side are true

true && true is true
false && true is false
true && false is false
false && false is false

|| checks if either it's left or right side are true

true || true is true
false || true is true
true || false is true
false || false is false

<!-- ---------- FALSEY VALUES ---------- -->

Falsey Values

A falsey value is considered false when converted into a boolean

undefined
null
NaN
0
" " (empty string)
false

<!-- ---------- TRUTHY VALUES ---------- -->

Truthy Values

A truthy value is considered true when converted into a boolean

These include:

All numbers
1
1000

All strings that aren't empty
"James is cool"
"null"
"false"

Empty arrays and objects
{}
[]

<!-- HOW TO CHECK IF BOOLEAN'S VALUE IS TRUE OR FALSE -->

Boolean ()

<!-- ---------- TERNARY OPERATOR ---------- -->

         "RECOMMENDED FOR QUICK IF ELSE"

Ternary Operator

A shortcut to write an if else statement

hasMembership ? "show video" : "hide video"

age >= 18 ? "You may enter" : "Too young"
