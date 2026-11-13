
## What I built

An expense tracker to track items, manage money, and give spending warnings.

## What got me stuck

1. Function scope: I had to make sure certain functions, like formattedMoney, could run inside other functions to make displaying values easier.
2. Formatting conflicts: There were a few things I didn't account for, like Intl.NumberFormat overriding my .toFixed(2) method. I spent a lot of time tinkering with it before deciding to research the issue online.
3. Array methods: With getMostExpensive, I struggled a little with .reduce() because I initially tried to use it like .map(). However, I revisited the lesson and easily solved it.

## Did I use AI, and how?

# • ChatGPT: I used it to explain all of Week 6 to clarify the core details. (Insert link here)
# • Google AI Search: During my online searches, Google AI helped me find specific syntax and web details, which made research much easier. I mainly used it to learn how to use Intl.NumberFormat for Ghanaian Cedi symbols and to fix the .toFixed() bug.

# • AI Editing: I also used AI to fix the grammar in this file  :)