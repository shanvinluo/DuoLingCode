export const leetcodeProblems = [
  // ----- CodeFillIn (5) -----
  {
    type: 'CodeFillIn',
    question: 'Complete the function to return the sum.',
    code: 'def add(a, b):\n    return ___',
    blanks: ['a + b'],
    choices: ['a + b', 'a - b', 'a * b', 'a / b'],
  },
  {
    type: 'CodeFillIn',
    question: 'Complete the condition to check if a is even.',
    code: 'if ___:\n    print("Even")',
    blanks: ['a % 2 == 0'],
    choices: ['a % 2 == 0', 'a % 2', 'a == 2', 'a / 2 == 1'],
  },
  {
    type: 'CodeFillIn',
    question: 'Fill in the return value.',
    code: 'def square(x):\n    return ___',
    blanks: ['x * x'],
    choices: ['x + x', 'x * x', 'x ** 3', 'x / x'],
  },
  {
    type: 'CodeFillIn',
    question: 'Fill in the correct logical operator.',
    code: 'if is_raining ___ is_cold:\n    print("Wear a jacket")',
    blanks: ['and'],
    choices: ['and', 'or', 'not', 'if'],
  },
  {
    type: 'CodeFillIn',
    question: 'Finish the loop definition.',
    code: 'for i in ___:\n    print(i)',
    blanks: ['range(5)'],
    choices: ['range(5)', 'list(5)', '5', 'loop(5)'],
  },

  // ----- Matching (5) -----
  {
    type: 'Matching',
    question: 'Match each keyword to its purpose.',
    pairs: {
      'if': 'conditional',
      'for': 'loop',
      'def': 'function definition',
      'return': 'outputs value',
    },
  },
  {
    type: 'Matching',
    question: 'Match each data type to an example.',
    pairs: {
      'int': '42',
      'str': '"hello"',
      'bool': 'True',
      'list': '[1, 2, 3]',
    },
  },
  {
    type: 'Matching',
    question: 'Match each operator to its meaning.',
    pairs: {
      '==': 'equals',
      '!=': 'not equal',
      '>': 'greater than',
      '<=': 'less than or equal',
    },
  },
  {
    type: 'Matching',
    question: 'Match each function to its purpose.',
    pairs: {
      'len': 'get length',
      'print': 'display output',
      'range': 'create a sequence',
      'input': 'get user input',
    },
  },
  {
    type: 'Matching',
    question: 'Match Python concepts.',
    pairs: {
      'list': 'ordered collection',
      'dict': 'key-value store',
      'tuple': 'immutable list',
      'set': 'unique values',
    },
  },

  // ----- DragAndDrop (5) -----
  {
    type: "DragAndDrop",
    question: "Order the steps to define a function.",
    wordBank: ["Write body", "Use def keyword", "Add parameters"],
    correctAnswer: ["Use def keyword", "Add parameters", "Write body"],
  },
  {
    type: "DragAndDrop",
    question: "Order the steps to write a for loop.",
    wordBank: ["Add indented block", "Set range", "Write for statement"],
    correctAnswer: ["Write for statement", "Set range", "Add indented block"],
  },
  {
    type: "DragAndDrop",
    question: "Order the steps to call a function.",
    wordBank: ["Write function name", "Add parentheses", "Pass arguments"],
    correctAnswer: [
      "Write function name",
      "Add parentheses",
      "Pass arguments",
    ],
  },
  {
    type: "DragAndDrop",
    question: "Order from smallest to largest.",
    wordBank: ["bit", "byte", "kilobyte"],
    correctAnswer: ["bit", "byte", "kilobyte"],
  },
  {
    type: "DragAndDrop",
    question: "Order the Python file execution flow.",
    wordBank: ["Import modules", "Define functions", "Run main code"],
    correctAnswer: ["Import modules", "Define functions", "Run main code"],
  },

  // ----- MultipleChoice (5) -----
  {
    type: 'MultipleChoice',
    question: 'What is the output of print(2 ** 3)?',
    choices: ['5', '6', '8', '9'],
    answer: '8'
  },
  {
    type: 'MultipleChoice',
    question: 'Which of these is a list?',
    choices: ['(1, 2)', '[1, 2]', '"1, 2"', '{1, 2}'],
    answer: '[1, 2]'
  },
  {
    type: 'MultipleChoice',
    question: 'What does len("abc") return?',
    choices: ['0', '2', '3', '4'],
    answer: '3'
  },
  {
    type: 'MultipleChoice',
    question: 'What does print(10 // 3) output?',
    choices: ['3.33', '3', '4', '0'],
    answer: '3'
  },
  {
    type: 'MultipleChoice',
    question: 'Which keyword defines a function?',
    choices: ['fun', 'func', 'def', 'define'],
    answer: 'def'
  },

  // ----- TrueFalse (5) -----
  {
    type: 'TrueFalse',
    statement: 'Python uses curly braces for code blocks.',
    answer: false
  },
  {
    type: 'TrueFalse',
    statement: 'The expression 5 > 3 is True.',
    answer: true
  },
  {
    type: 'TrueFalse',
    statement: 'Strings in Python are mutable.',
    answer: false
  },
  {
    type: 'TrueFalse',
    statement: 'You can store different data types in a list.',
    answer: true
  },
  {
    type: 'TrueFalse',
    statement: 'Python is statically typed.',
    answer: false
  }
];