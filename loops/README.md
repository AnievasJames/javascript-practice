<!-- ---------- LOOPS ---------- -->

What do we use loops for?

Loops repeat the same code over and over again.

Types of loops

- for loop (MOST USED)
- while loop
- do while loop

For Loop

for ( let i = 0; i < 20; i++) {

     console.log(i)

}

Create a variable "i"

Set the variable "i" to 0

Set the variable "i" less than how many times we want to loop (20)

Increment the variable "i" by 1 (i++)

<!-- ---------- EXERCISE WALKTHROUGH ---------- -->

Code Logic - Quick Summary
Key Symbols

% → Gives remainder after division (10 % 5 = 0, 7 % 2 = 1)
=== → Checks if exactly equal
<= → Less than or equal to
++ → Add 1 to variable
`${}` → Insert variable into string (use backticks)

Why It Works
The Order Matters
javascriptif (result % 5 === 0) // Check divisible by 5 FIRST
else if (result % 2 === 0) // Then check even
else // Finally odd

```

**Why this order?**
- Number 10 is BOTH divisible by 5 AND even
- If we check even first → prints "Frontend" ❌
- Checking % 5 first → prints "ASAP Frontend" ✅

### **If-Else Chain Rule**
- Only **ONE** block runs, then exits
- Once a condition is true, the rest are **skipped**

---

## **What Each Condition Catches**

1. **`% 5 === 0`** → Divisible by 5 (5, 10, 15)
2. **`% 2 === 0`** → Even numbers (2, 4, 6, 8, 12, 14)
3. **`else`** → Everything left = odd numbers (1, 3, 7, 9, 11, 13)

---

## **Quick Example**
```

Number 10:

- Is 10 % 5 === 0? YES → Print "ASAP Frontend", EXIT
- (Never checks % 2)

Number 4:

- Is 4 % 5 === 0? NO
- Is 4 % 2 === 0? YES → Print "Frontend", EXIT

Number 7:

- Is 7 % 5 === 0? NO
- Is 7 % 2 === 0? NO
- Run else → Print "ASAP"
  Core concept: First matching condition wins.
