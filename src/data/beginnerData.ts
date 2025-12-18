/* ---------- TYPES ---------- */
export interface Language {
  id: string;
  name: string;
  icon: string;
}

export interface Category {
  id: string;
  name: string;
  icon: any;
}

export interface Lesson {
  id: string;
  title: string;
  duration: string;
  topics: string[];
  notes?: any;
  problems?: { name: string; url: string }[];
  custom?: boolean;
}

/* ---------- DATA ---------- */
export const languages: Language[] = [
  { id: 'python', name: 'Python', icon: '🐍' },
  { id: 'java', name: 'Java', icon: '☕' },
  { id: 'cpp', name: 'C++', icon: '⚡' },
  { id: 'javascript', name: 'JavaScript', icon: '🟨' },
  { id: 'c', name: 'C', icon: '🔵' }
];

export const categories: Category[] = [
  { id: 'coding', name: 'Coding & DSA', icon: '💻' },
  { id: 'quant', name: 'Quantitative', icon: '📈' },
  { id: 'reasoning', name: 'Reasoning', icon: '🧠' },
  { id: 'communication', name: 'Communication', icon: '💬' }
];

/* ⛔ Keep your FULL courses object here exactly as-is */
export   const courses: Record<string, Lesson[]> = {
    coding: [
      {
        id: 'c1',
        title: 'Variables & Data Types',
        duration: '1.5h',
        topics: ['Variables', 'Integers', 'Strings'],
        notes: {
          python: [
            { name: 'W3Schools - Python Variables', url: 'https://www.w3schools.com/python/python_variables.asp' },
            { name: 'GeeksforGeeks - Python Data Types', url: 'https://www.geeksforgeeks.org/python-data-types/' }
          ],
          java: [
            { name: 'W3Schools - Java Variables', url: 'https://www.w3schools.com/java/java_variables.asp' },
            { name: 'GeeksforGeeks - Java Data Types', url: 'https://www.geeksforgeeks.org/data-types-in-java/' }
          ],
          cpp: [
            { name: 'W3Schools - C++ Variables', url: 'https://www.w3schools.com/cpp/cpp_variables.asp' },
            { name: 'GeeksforGeeks - C++ Data Types', url: 'https://www.geeksforgeeks.org/cpp-data-types/' }
          ],
          javascript: [
            { name: 'W3Schools - JS Variables', url: 'https://www.w3schools.com/js/js_variables.asp' },
            { name: 'GeeksforGeeks - JS Data Types', url: 'https://www.geeksforgeeks.org/javascript-data-types/' }
          ],
          c: [
            { name: 'W3Schools - C Variables', url: 'https://www.w3schools.com/c/c_variables.php' },
            { name: 'GeeksforGeeks - C Data Types', url: 'https://www.geeksforgeeks.org/data-types-in-c/' }
          ]
        },
        problems: [
          { name: 'LeetCode - Easy Problems', url: 'https://leetcode.com/problemset/all/?difficulty=EASY' },
          { name: 'CodeChef (200-400)', url: 'https://www.codechef.com/practice?page=0&limit=50&sort_by=difficulty_rating&sort_order=asc&search=&start_rating=200&end_rating=400&topic=&tags=&group=' }
        ]
      },
      {
        id: 'c2',
        title: 'Basic Operations',
        duration: '1h',
        topics: ['Arithmetic', 'Comparison', 'Logical'],
        notes: {
          python: [
            { name: 'W3Schools - Python Operators', url: 'https://www.w3schools.com/python/python_operators.asp' },
            { name: 'GeeksforGeeks - Python Operators', url: 'https://www.geeksforgeeks.org/python-operators/' }
          ],
          java: [
            { name: 'W3Schools - Java Operators', url: 'https://www.w3schools.com/java/java_operators.asp' },
            { name: 'GeeksforGeeks - Java Operators', url: 'https://www.geeksforgeeks.org/operators-in-java/' }
          ],
          cpp: [
            { name: 'W3Schools - C++ Operators', url: 'https://www.w3schools.com/cpp/cpp_operators.asp' },
            { name: 'GeeksforGeeks - C++ Operators', url: 'https://www.geeksforgeeks.org/operators-in-cpp/' }
          ],
          javascript: [
            { name: 'W3Schools - JS Operators', url: 'https://www.w3schools.com/js/js_operators.asp' },
            { name: 'GeeksforGeeks - JS Operators', url: 'https://www.geeksforgeeks.org/javascript-operators/' }
          ],
          c: [
            { name: 'W3Schools - C Operators', url: 'https://www.w3schools.com/c/c_operators.php' },
            { name: 'GeeksforGeeks - C Operators', url: 'https://www.geeksforgeeks.org/operators-in-c/' }
          ]
        },
        problems: [
          { name: 'HackerRank - Basic Math', url: 'https://www.hackerrank.com/domains/python' },
          { name: 'CodeChef (200-500)', url: 'https://www.codechef.com/practice?page=0&limit=50&sort_by=difficulty_rating&sort_order=asc&search=&start_rating=200&end_rating=500&topic=&tags=&group=' }
        ]
      },
      {
        id: 'c3',
        title: 'Control Flow',
        duration: '2h',
        topics: ['If-Else', 'Elif', 'Nested If'],
        notes: {
          python: [
            { name: 'W3Schools - Python If Else', url: 'https://www.w3schools.com/python/python_conditions.asp' },
            { name: 'GeeksforGeeks - Python Conditionals', url: 'https://www.geeksforgeeks.org/python-if-else/' }
          ],
          java: [
            { name: 'W3Schools - Java If Else', url: 'https://www.w3schools.com/java/java_conditions.asp' },
            { name: 'GeeksforGeeks - Java If Else', url: 'https://www.geeksforgeeks.org/java-if-else-statement/' }
          ],
          cpp: [
            { name: 'W3Schools - C++ If Else', url: 'https://www.w3schools.com/cpp/cpp_conditions.asp' },
            { name: 'GeeksforGeeks - C++ If Else', url: 'https://www.geeksforgeeks.org/decision-making-c-cpp/' }
          ],
          javascript: [
            { name: 'W3Schools - JS If Else', url: 'https://www.w3schools.com/js/js_if_else.asp' },
            { name: 'GeeksforGeeks - JS Conditionals', url: 'https://www.geeksforgeeks.org/javascript-if-else-statement/' }
          ],
          c: [
            { name: 'W3Schools - C If Else', url: 'https://www.w3schools.com/c/c_conditions.php' },
            { name: 'GeeksforGeeks - C If Else', url: 'https://www.geeksforgeeks.org/decision-making-c-c-else-nested-else/' }
          ]
        },
        problems: [
          { name: 'HackerRank - If Else', url: 'https://www.hackerrank.com/challenges/py-if-else' },
          { name: 'CodeChef (200-600)', url: 'https://www.codechef.com/practice?page=0&limit=50&sort_by=difficulty_rating&sort_order=asc&search=&start_rating=200&end_rating=600&topic=&tags=&group=' }
        ]
      },
      {
        id: 'c4',
        title: 'Loops',
        duration: '2.5h',
        topics: ['For Loop', 'While Loop', 'Break'],
        notes: {
          python: [
            { name: 'W3Schools - Python Loops', url: 'https://www.w3schools.com/python/python_for_loops.asp' },
            { name: 'GeeksforGeeks - Python Loops', url: 'https://www.geeksforgeeks.org/loops-in-python/' }
          ],
          java: [
            { name: 'W3Schools - Java Loops', url: 'https://www.w3schools.com/java/java_while_loop.asp' },
            { name: 'GeeksforGeeks - Java Loops', url: 'https://www.geeksforgeeks.org/loops-in-java/' }
          ],
          cpp: [
            { name: 'W3Schools - C++ Loops', url: 'https://www.w3schools.com/cpp/cpp_while_loop.asp' },
            { name: 'GeeksforGeeks - C++ Loops', url: 'https://www.geeksforgeeks.org/loops-in-cpp/' }
          ],
          javascript: [
            { name: 'W3Schools - JS Loops', url: 'https://www.w3schools.com/js/js_loop_for.asp' },
            { name: 'GeeksforGeeks - JS Loops', url: 'https://www.geeksforgeeks.org/loops-in-javascript/' }
          ],
          c: [
            { name: 'W3Schools - C Loops', url: 'https://www.w3schools.com/c/c_while_loop.php' },
            { name: 'GeeksforGeeks - C Loops', url: 'https://www.geeksforgeeks.org/loops-in-c/' }
          ]
        },
        problems: [
          { name: 'HackerRank - Loops', url: 'https://www.hackerrank.com/domains/python' },
          { name: 'CodeChef (400-700)', url: 'https://www.codechef.com/practice?page=0&limit=50&sort_by=difficulty_rating&sort_order=asc&search=&start_rating=400&end_rating=700&topic=&tags=&group=' }
        ]
      },
      {
        id: 'c5',
        title: 'Functions',
        duration: '2h',
        topics: ['Definition', 'Parameters', 'Return'],
        notes: {
          python: [
            { name: 'W3Schools - Python Functions', url: 'https://www.w3schools.com/python/python_functions.asp' },
            { name: 'GeeksforGeeks - Python Functions', url: 'https://www.geeksforgeeks.org/functions-in-python/' }
          ],
          java: [
            { name: 'W3Schools - Java Methods', url: 'https://www.w3schools.com/java/java_methods.asp' },
            // TODO: Fixed URL typo: geeksforgegeeks → geeksforgeeks
            { name: 'GeeksforGeeks - Java Methods', url: 'https://www.geeksforgeeks.org/methods-in-java/' }
          ],
          cpp: [
            { name: 'W3Schools - C++ Functions', url: 'https://www.w3schools.com/cpp/cpp_functions.asp' },
            { name: 'GeeksforGeeks - C++ Functions', url: 'https://www.geeksforgeeks.org/functions-in-cpp/' }
          ],
          javascript: [
            { name: 'W3Schools - JS Functions', url: 'https://www.w3schools.com/js/js_functions.asp' },
            { name: 'GeeksforGeeks - JS Functions', url: 'https://www.geeksforgeeks.org/functions-in-javascript/' }
          ],
          c: [
            { name: 'W3Schools - C Functions', url: 'https://www.w3schools.com/c/c_functions.php' },
            { name: 'GeeksforGeeks - C Functions', url: 'https://www.geeksforgeeks.org/functions-in-c/' }
          ]
        },
        problems: [
          { name: 'HackerRank - Functions', url: 'https://www.hackerrank.com/domains/python' },
          { name: 'CodeChef (500-800)', url: 'https://www.codechef.com/practice?page=0&limit=50&sort_by=difficulty_rating&sort_order=asc&search=&start_rating=500&end_rating=800&topic=&tags=&group=' }
        ]
      },
      {
        id: 'c6',
        title: 'Arrays/Lists',
        duration: '2.5h',
        topics: ['Indexing', 'Slicing', 'Methods'],
        notes: {
          python: [
            { name: 'W3Schools - Python Lists', url: 'https://www.w3schools.com/python/python_lists.asp' },
            { name: 'GeeksforGeeks - Python Arrays', url: 'https://www.geeksforgeeks.org/python-lists/' }
          ],
          java: [
            { name: 'W3Schools - Java Arrays', url: 'https://www.w3schools.com/java/java_arrays.asp' },
            { name: 'GeeksforGeeks - Java Arrays', url: 'https://www.geeksforgeeks.org/arrays-in-java/' }
          ],
          cpp: [
            { name: 'W3Schools - C++ Arrays', url: 'https://www.w3schools.com/cpp/cpp_arrays.asp' },
            { name: 'GeeksforGeeks - C++ Arrays', url: 'https://www.geeksforgeeks.org/arrays-in-cpp/' }
          ],
          javascript: [
            { name: 'W3Schools - JS Arrays', url: 'https://www.w3schools.com/js/js_arrays.asp' },
            { name: 'GeeksforGeeks - JS Arrays', url: 'https://www.geeksforgeeks.org/arrays-in-javascript/' }
          ],
          c: [
            { name: 'W3Schools - C Arrays', url: 'https://www.w3schools.com/c/c_arrays.php' },
            { name: 'GeeksforGeeks - C Arrays', url: 'https://www.geeksforgeeks.org/arrays-in-c-cpp/' }
          ]
        },
        problems: [
          { name: 'LeetCode - Array', url: 'https://leetcode.com/tag/array/' },
          { name: 'CodeChef (600-900)', url: 'https://www.codechef.com/practice?page=0&limit=50&sort_by=difficulty_rating&sort_order=asc&search=&start_rating=600&end_rating=900&topic=arrays&tags=&group=' }
        ]
      },
      {
        id: 'c7',
        title: 'Strings',
        duration: '2h',
        topics: ['Operations', 'Methods', 'Formatting'],
        notes: {
          python: [
            { name: 'W3Schools - Python Strings', url: 'https://www.w3schools.com/python/python_strings.asp' },
            { name: 'GeeksforGeeks - Python Strings', url: 'https://www.geeksforgeeks.org/python-strings/' }
          ],
          java: [
            { name: 'W3Schools - Java Strings', url: 'https://www.w3schools.com/java/java_strings.asp' },
            { name: 'GeeksforGeeks - Java Strings', url: 'https://www.geeksforgeeks.org/strings-in-java/' }
          ],
          cpp: [
            { name: 'W3Schools - C++ Strings', url: 'https://www.w3schools.com/cpp/cpp_strings.asp' },
            { name: 'GeeksforGeeks - C++ Strings', url: 'https://www.geeksforgeeks.org/strings-in-cpp/' }
          ],
          javascript: [
            { name: 'W3Schools - JS Strings', url: 'https://www.w3schools.com/js/js_strings.asp' },
            { name: 'GeeksforGeeks - JS Strings', url: 'https://www.geeksforgeeks.org/javascript-strings/' }
          ],
          c: [
            { name: 'W3Schools - C Strings', url: 'https://www.w3schools.com/c/c_strings.php' },
            { name: 'GeeksforGeeks - C Strings', url: 'https://www.geeksforgeeks.org/strings-in-c/' }
          ]
        },
        problems: [
          { name: 'LeetCode - String', url: 'https://leetcode.com/tag/string/' },
          { name: 'CodeChef (600-1000)', url: 'https://www.codechef.com/practice?page=0&limit=50&sort_by=difficulty_rating&sort_order=asc&search=&start_rating=600&end_rating=1000&topic=strings&tags=&group=' }
        ]
      },
      {
        id: 'c8b',
        title: 'Bitwise Operations',
        duration: '2h',
        topics: ['AND', 'OR', 'XOR', 'NOT', 'Shifts'],
        notes: {
          python: [
            { name: 'W3Schools - Python Bitwise', url: 'https://www.w3schools.com/python/python_operators.asp' },
            { name: 'GeeksforGeeks - Python Bitwise', url: 'https://www.geeksforgeeks.org/python-bitwise-operators/' },
            { name: 'YouTube - Python Bitwise Tutorial', url: 'https://www.youtube.com/watch?v=igIjGxF2J-w' }
          ],
          java: [
            { name: 'W3Schools - Java Bitwise', url: 'https://www.w3schools.com/java/java_operators.asp' },
            { name: 'GeeksforGeeks - Java Bitwise', url: 'https://www.geeksforgeeks.org/bitwise-operators-in-java/' },
            { name: 'YouTube - Java Bitwise Tutorial', url: 'https://www.youtube.com/watch?v=RRVYp_OqIVs' }
          ],
          cpp: [
            { name: 'W3Schools - C++ Bitwise', url: 'https://www.w3schools.com/cpp/cpp_operators.asp' },
            { name: 'GeeksforGeeks - C++ Bitwise', url: 'https://www.geeksforgeeks.org/bitwise-operators-in-c-cpp/' },
            { name: 'YouTube - C++ Bitwise Tutorial', url: 'https://www.youtube.com/watch?v=jlQmeyce65Q' }
          ],
          javascript: [
            { name: 'W3Schools - JS Bitwise', url: 'https://www.w3schools.com/js/js_bitwise.asp' },
            { name: 'GeeksforGeeks - JS Bitwise', url: 'https://www.geeksforgeeks.org/javascript-bitwise-operators/' },
            { name: 'YouTube - JS Bitwise Tutorial', url: 'https://www.youtube.com/watch?v=mesu75PTDC8' }
          ],
          c: [
            { name: 'W3Schools - C Bitwise', url: 'https://www.w3schools.com/c/c_operators.php' },
            { name: 'GeeksforGeeks - C Bitwise', url: 'https://www.geeksforgeeks.org/bitwise-operators-in-c-cpp/' },
            { name: 'YouTube - C Bitwise Tutorial', url: 'https://www.youtube.com/watch?v=jlQmeyce65Q' }
          ]
        },
        problems: [
          { name: 'CodeChef - Bitwise Problems', url: 'https://www.codechef.com/practice?page=0&limit=50&sort_by=difficulty_rating&sort_order=asc&search=&start_rating=200&end_rating=1000&topic=&tags=bitwise&group=&language=' },
          { name: 'LeetCode - Bit Manipulation', url: 'https://leetcode.com/tag/bit-manipulation/' }
        ]
      },
      {
        id: 'c8',
        title: 'Time Complexity',
        duration: '2h',
        topics: ['Big O', 'Analysis'],
        notes: {
          python: [
            { name: 'GeeksforGeeks - Complexity', url: 'https://www.geeksforgeeks.org/understanding-time-complexity-simple-examples/' },
            { name: 'W3Schools - Big O', url: 'https://www.w3schools.com/dsa/dsa_algo_bigo.php' }
          ],
          java: [
            { name: 'GeeksforGeeks - Complexity', url: 'https://www.geeksforgeeks.org/understanding-time-complexity-simple-examples/' },
            { name: 'W3Schools - Big O', url: 'https://www.w3schools.com/dsa/dsa_algo_bigo.php' }
          ],
          cpp: [
            { name: 'GeeksforGeeks - Complexity', url: 'https://www.geeksforgeeks.org/understanding-time-complexity-simple-examples/' },
            { name: 'W3Schools - Big O', url: 'https://www.w3schools.com/dsa/dsa_algo_bigo.php' }
          ],
          javascript: [
            { name: 'GeeksforGeeks - Complexity', url: 'https://www.geeksforgeeks.org/understanding-time-complexity-simple-examples/' },
            { name: 'W3Schools - Big O', url: 'https://www.w3schools.com/dsa/dsa_algo_bigo.php' }
          ],
          c: [
            { name: 'GeeksforGeeks - Complexity', url: 'https://www.geeksforgeeks.org/understanding-time-complexity-simple-examples/' },
            { name: 'W3Schools - Big O', url: 'https://www.w3schools.com/dsa/dsa_algo_bigo.php' }
          ]
        },
        problems: []
      },
      {
        id: 'c9',
        title: 'Sorting Algorithms',
        duration: '3h',
        topics: ['Bubble', 'Merge', 'Quick Sort'],
        notes: {
          python: [
            { name: 'GeeksforGeeks - Sorting', url: 'https://www.geeksforgeeks.org/sorting-algorithms/' },
            { name: 'W3Schools - Sorting', url: 'https://www.w3schools.com/dsa/dsa_algo_sorting.php' }
          ],
          java: [
            { name: 'GeeksforGeeks - Sorting', url: 'https://www.geeksforgeeks.org/sorting-algorithms/' },
            { name: 'W3Schools - Sorting', url: 'https://www.w3schools.com/dsa/dsa_algo_sorting.php' }
          ],
          cpp: [
            { name: 'GeeksforGeeks - Sorting', url: 'https://www.geeksforgeeks.org/sorting-algorithms/' },
            { name: 'W3Schools - Sorting', url: 'https://www.w3schools.com/dsa/dsa_algo_sorting.php' }
          ],
          javascript: [
            { name: 'GeeksforGeeks - Sorting', url: 'https://www.geeksforgeeks.org/sorting-algorithms/' },
            { name: 'W3Schools - Sorting', url: 'https://www.w3schools.com/dsa/dsa_algo_sorting.php' }
          ],
          c: [
            { name: 'GeeksforGeeks - Sorting', url: 'https://www.geeksforgeeks.org/sorting-algorithms/' },
            { name: 'W3Schools - Sorting', url: 'https://www.w3schools.com/dsa/dsa_algo_sorting.php' }
          ]
        },
        problems: [
          { name: 'LeetCode - Sorting', url: 'https://leetcode.com/tag/sorting/' },
          { name: 'CodeChef (800-1200)', url: 'https://www.codechef.com/practice?page=0&limit=50&sort_by=difficulty_rating&sort_order=asc&search=&start_rating=800&end_rating=1200&topic=sorting&tags=&group=' }
        ]
      },
      {
        id: 'c10',
        title: 'Binary Search',
        duration: '2.5h',
        topics: ['Binary Search', 'Variants'],
        notes: {
          python: [
            { name: 'GeeksforGeeks - Binary Search', url: 'https://www.geeksforgeeks.org/binary-search/' },
            { name: 'W3Schools - Binary Search', url: 'https://www.w3schools.com/dsa/dsa_algo_binarysearch.php' }
          ],
          java: [
            { name: 'GeeksforGeeks - Binary Search', url: 'https://www.geeksforgeeks.org/binary-search/' },
            { name: 'W3Schools - Binary Search', url: 'https://www.w3schools.com/dsa/dsa_algo_binarysearch.php' }
          ],
          cpp: [
            { name: 'GeeksforGeeks - Binary Search', url: 'https://www.geeksforgeeks.org/binary-search/' },
            { name: 'W3Schools - Binary Search', url: 'https://www.w3schools.com/dsa/dsa_algo_binarysearch.php' }
          ],
          javascript: [
            { name: 'GeeksforGeeks - Binary Search', url: 'https://www.geeksforgeeks.org/binary-search/' },
            { name: 'W3Schools - Binary Search', url: 'https://www.w3schools.com/dsa/dsa_algo_binarysearch.php' }
          ],
          c: [
            { name: 'GeeksforGeeks - Binary Search', url: 'https://www.geeksforgeeks.org/binary-search/' },
            { name: 'W3Schools - Binary Search', url: 'https://www.w3schools.com/dsa/dsa_algo_binarysearch.php' }
          ]
        },
        problems: [
          { name: 'LeetCode - Binary Search', url: 'https://leetcode.com/tag/binary-search/' },
          { name: 'CodeChef (900-1300)', url: 'https://www.codechef.com/practice?page=0&limit=50&sort_by=difficulty_rating&sort_order=asc&search=&start_rating=900&end_rating=1300&topic=binary-search&tags=&group=' }
        ]
      },
      {
        id: 'c11',
        title: 'Linked Lists',
        duration: '3h',
        topics: ['Singly', 'Doubly', 'Operations'],
        notes: {
          python: [
            { name: 'GeeksforGeeks - Linked List', url: 'https://www.geeksforgeeks.org/data-structures/linked-list/' },
            { name: 'W3Schools - Linked Lists', url: 'https://www.w3schools.com/dsa/dsa_data_linkedlists.php' }
          ],
          java: [
            { name: 'GeeksforGeeks - Linked List', url: 'https://www.geeksforgeeks.org/data-structures/linked-list/' },
            { name: 'W3Schools - Linked Lists', url: 'https://www.w3schools.com/dsa/dsa_data_linkedlists.php' }
          ],
          cpp: [
            { name: 'GeeksforGeeks - Linked List', url: 'https://www.geeksforgeeks.org/data-structures/linked-list/' },
            { name: 'W3Schools - Linked Lists', url: 'https://www.w3schools.com/dsa/dsa_data_linkedlists.php' }
          ],
          javascript: [
            { name: 'GeeksforGeeks - Linked List', url: 'https://www.geeksforgeeks.org/data-structures/linked-list/' },
            { name: 'W3Schools - Linked Lists', url: 'https://www.w3schools.com/dsa/dsa_data_linkedlists.php' }
          ],
          c: [
            { name: 'GeeksforGeeks - Linked List', url: 'https://www.geeksforgeeks.org/data-structures/linked-list/' },
            { name: 'W3Schools - Linked Lists', url: 'https://www.w3schools.com/dsa/dsa_data_linkedlists.php' }
          ]
        },
        problems: [
          { name: 'LeetCode - Linked List', url: 'https://leetcode.com/tag/linked-list/' },
          { name: 'CodeChef (1000-1400)', url: 'https://www.codechef.com/practice?page=0&limit=50&sort_by=difficulty_rating&sort_order=asc&search=&start_rating=1000&end_rating=1400&topic=linked-list&tags=&group=' }
        ]
      },
      {
        id: 'c12',
        title: 'Stacks',
        duration: '2.5h',
        topics: ['Stack Ops', 'Implementation'],
        notes: {
          python: [
            { name: 'GeeksforGeeks - Stack', url: 'https://www.geeksforgeeks.org/stack-data-structure/' },
            { name: 'W3Schools - Stacks', url: 'https://www.w3schools.com/dsa/dsa_data_stacks.php' }
          ],
          java: [
            { name: 'GeeksforGeeks - Stack', url: 'https://www.geeksforgeeks.org/stack-data-structure/' },
            { name: 'W3Schools - Stacks', url: 'https://www.w3schools.com/dsa/dsa_data_stacks.php' }
          ],
          cpp: [
            { name: 'GeeksforGeeks - Stack', url: 'https://www.geeksforgeeks.org/stack-data-structure/' },
            { name: 'W3Schools - Stacks', url: 'https://www.w3schools.com/dsa/dsa_data_stacks.php' }
          ],
          javascript: [
            { name: 'GeeksforGeeks - Stack', url: 'https://www.geeksforgeeks.org/stack-data-structure/' },
            { name: 'W3Schools - Stacks', url: 'https://www.w3schools.com/dsa/dsa_data_stacks.php' }
          ],
          c: [
            { name: 'GeeksforGeeks - Stack', url: 'https://www.geeksforgeeks.org/stack-data-structure/' },
            { name: 'W3Schools - Stacks', url: 'https://www.w3schools.com/dsa/dsa_data_stacks.php' }
          ]
        },
        problems: [
          { name: 'LeetCode - Stack', url: 'https://leetcode.com/tag/stack/' },
          { name: 'CodeChef (1000-1400)', url: 'https://www.codechef.com/practice?page=0&limit=50&sort_by=difficulty_rating&sort_order=asc&search=&start_rating=1000&end_rating=1400&topic=stack&tags=&group=' }
        ]
      },
      {
        id: 'c13',
        title: 'Queues',
        duration: '2.5h',
        topics: ['Queue Ops', 'Priority Queue'],
        notes: {
          python: [
            { name: 'GeeksforGeeks - Queue', url: 'https://www.geeksforgeeks.org/queue-data-structure/' },
            { name: 'W3Schools - Queues', url: 'https://www.w3schools.com/dsa/dsa_data_queues.php' }
          ],
          java: [
            { name: 'GeeksforGeeks - Queue', url: 'https://www.geeksforgeeks.org/queue-data-structure/' },
            { name: 'W3Schools - Queues', url: 'https://www.w3schools.com/dsa/dsa_data_queues.php' }
          ],
          cpp: [
            { name: 'GeeksforGeeks - Queue', url: 'https://www.geeksforgeeks.org/queue-data-structure/' },
            { name: 'W3Schools - Queues', url: 'https://www.w3schools.com/dsa/dsa_data_queues.php' }
          ],
          javascript: [
            { name: 'GeeksforGeeks - Queue', url: 'https://www.geeksforgeeks.org/queue-data-structure/' },
            { name: 'W3Schools - Queues', url: 'https://www.w3schools.com/dsa/dsa_data_queues.php' }
          ],
          c: [
            { name: 'GeeksforGeeks - Queue', url: 'https://www.geeksforgeeks.org/queue-data-structure/' },
            { name: 'W3Schools - Queues', url: 'https://www.w3schools.com/dsa/dsa_data_queues.php' }
          ]
        },
        problems: [
          { name: 'LeetCode - Queue', url: 'https://leetcode.com/tag/queue/' },
          { name: 'CodeChef (1000-1400)', url: 'https://www.codechef.com/practice?page=0&limit=50&sort_by=difficulty_rating&sort_order=asc&search=&start_rating=1000&end_rating=1400&topic=queue&tags=&group=' }
        ]
      },
      {
        id: 'c14',
        title: 'Hashing',
        duration: '2.5h',
        topics: ['Hash Tables', 'Hash Map'],
        notes: {
          python: [
            { name: 'GeeksforGeeks - Hashing', url: 'https://www.geeksforgeeks.org/hashing-data-structure/' },
            { name: 'W3Schools - Hash Tables', url: 'https://www.w3schools.com/dsa/dsa_data_hashtables.php' }
          ],
          java: [
            { name: 'GeeksforGeeks - Hashing', url: 'https://www.geeksforgeeks.org/hashing-data-structure/' },
            { name: 'W3Schools - Hash Tables', url: 'https://www.w3schools.com/dsa/dsa_data_hashtables.php' }
          ],
          cpp: [
            { name: 'GeeksforGeeks - Hashing', url: 'https://www.geeksforgeeks.org/hashing-data-structure/' },
            { name: 'W3Schools - Hash Tables', url: 'https://www.w3schools.com/dsa/dsa_data_hashtables.php' }
          ],
          javascript: [
            { name: 'GeeksforGeeks - Hashing', url: 'https://www.geeksforgeeks.org/hashing-data-structure/' },
            { name: 'W3Schools - Hash Tables', url: 'https://www.w3schools.com/dsa/dsa_data_hashtables.php' }
          ],
          c: [
            { name: 'GeeksforGeeks - Hashing', url: 'https://www.geeksforgeeks.org/hashing-data-structure/' },
            { name: 'W3Schools - Hash Tables', url: 'https://www.w3schools.com/dsa/dsa_data_hashtables.php' }
          ]
        },
        problems: [
          { name: 'LeetCode - Hash Table', url: 'https://leetcode.com/tag/hash-table/' },
          { name: 'CodeChef (1100-1500)', url: 'https://www.codechef.com/practice?page=0&limit=50&sort_by=difficulty_rating&sort_order=asc&search=&start_rating=1100&end_rating=1500&topic=hashing&tags=&group=' }
        ]
      },
      {
        id: 'c15',
        title: 'Recursion',
        duration: '3h',
        topics: ['Base Case', 'Backtracking'],
        notes: {
          python: [
            { name: 'GeeksforGeeks - Recursion', url: 'https://www.geeksforgeeks.org/recursion/' },
            { name: 'W3Schools - Recursion', url: 'https://www.w3schools.com/dsa/dsa_algo_recursion.php' }
          ],
          java: [
            { name: 'GeeksforGeeks - Recursion', url: 'https://www.geeksforgeeks.org/recursion/' },
            { name: 'W3Schools - Recursion', url: 'https://www.w3schools.com/dsa/dsa_algo_recursion.php' }
          ],
          cpp: [
            { name: 'GeeksforGeeks - Recursion', url: 'https://www.geeksforgeeks.org/recursion/' },
            { name: 'W3Schools - Recursion', url: 'https://www.w3schools.com/dsa/dsa_algo_recursion.php' }
          ],
          javascript: [
            { name: 'GeeksforGeeks - Recursion', url: 'https://www.geeksforgeeks.org/recursion/' },
            { name: 'W3Schools - Recursion', url: 'https://www.w3schools.com/dsa/dsa_algo_recursion.php' }
          ],
          c: [
            { name: 'GeeksforGeeks - Recursion', url: 'https://www.geeksforgeeks.org/recursion/' },
            { name: 'W3Schools - Recursion', url: 'https://www.w3schools.com/dsa/dsa_algo_recursion.php' }
          ]
        },
        problems: [
          { name: 'LeetCode - Recursion', url: 'https://leetcode.com/tag/recursion/' },
          { name: 'CodeChef (1000-1400)', url: 'https://www.codechef.com/practice?page=0&limit=50&sort_by=difficulty_rating&sort_order=asc&search=&start_rating=1000&end_rating=1400&topic=recursion&tags=&group=' }
        ]
      },
      {
        id: 'c16',
        title: 'Trees',
        duration: '3h',
        topics: ['Binary Tree', 'BST', 'Traversal'],
        notes: {
          python: [
            { name: 'GeeksforGeeks - Trees', url: 'https://www.geeksforgeeks.org/binary-tree-data-structure/' },
            { name: 'W3Schools - Trees', url: 'https://www.w3schools.com/dsa/dsa_data_trees.php' }
          ],
          java: [
            { name: 'GeeksforGeeks - Trees', url: 'https://www.geeksforgeeks.org/binary-tree-data-structure/' },
            { name: 'W3Schools - Trees', url: 'https://www.w3schools.com/dsa/dsa_data_trees.php' }
          ],
          cpp: [
            { name: 'GeeksforGeeks - Trees', url: 'https://www.geeksforgeeks.org/binary-tree-data-structure/' },
            { name: 'W3Schools - Trees', url: 'https://www.w3schools.com/dsa/dsa_data_trees.php' }
          ],
          javascript: [
            { name: 'GeeksforGeeks - Trees', url: 'https://www.geeksforgeeks.org/binary-tree-data-structure/' },
            { name: 'W3Schools - Trees', url: 'https://www.w3schools.com/dsa/dsa_data_trees.php' }
          ],
          c: [
            { name: 'GeeksforGeeks - Trees', url: 'https://www.geeksforgeeks.org/binary-tree-data-structure/' },
            { name: 'W3Schools - Trees', url: 'https://www.w3schools.com/dsa/dsa_data_trees.php' }
          ]
        },
        problems: [
          { name: 'LeetCode - Tree', url: 'https://leetcode.com/tag/tree/' },
          { name: 'CodeChef (1200-1600)', url: 'https://www.codechef.com/practice?page=0&limit=50&sort_by=difficulty_rating&sort_order=asc&search=&start_rating=1200&end_rating=1600&topic=trees&tags=&group=' }
        ]
      },
      {
        id: 'c17',
        title: 'Graphs',
        duration: '3h',
        topics: ['BFS', 'DFS', 'Representation'],
        notes: {
          python: [
            { name: 'GeeksforGeeks - Graphs', url: 'https://www.geeksforgeeks.org/graph-data-structure-and-algorithms/' },
            { name: 'W3Schools - Graphs', url: 'https://www.w3schools.com/dsa/dsa_data_graphs.php' }
          ],
          java: [
            { name: 'GeeksforGeeks - Graphs', url: 'https://www.geeksforgeeks.org/graph-data-structure-and-algorithms/' },
            { name: 'W3Schools - Graphs', url: 'https://www.w3schools.com/dsa/dsa_data_graphs.php' }
          ],
          cpp: [
            { name: 'GeeksforGeeks - Graphs', url: 'https://www.geeksforgeeks.org/graph-data-structure-and-algorithms/' },
            { name: 'W3Schools - Graphs', url: 'https://www.w3schools.com/dsa/dsa_data_graphs.php' }
          ],
          javascript: [
            { name: 'GeeksforGeeks - Graphs', url: 'https://www.geeksforgeeks.org/graph-data-structure-and-algorithms/' },
            { name: 'W3Schools - Graphs', url: 'https://www.w3schools.com/dsa/dsa_data_graphs.php' }
          ],
          c: [
            { name: 'GeeksforGeeks - Graphs', url: 'https://www.geeksforgeeks.org/graph-data-structure-and-algorithms/' },
            { name: 'W3Schools - Graphs', url: 'https://www.w3schools.com/dsa/dsa_data_graphs.php' }
          ]
        },
        problems: [
          { name: 'LeetCode - Graph', url: 'https://leetcode.com/tag/graph/' },
          { name: 'CodeChef (1300-1700)', url: 'https://www.codechef.com/practice?page=0&limit=50&sort_by=difficulty_rating&sort_order=asc&search=&start_rating=1300&end_rating=1700&topic=graphs&tags=&group=' }
        ]
      },
      {
        id: 'c18',
        title: 'Dynamic Programming',
        duration: '3h',
        topics: ['Memoization', 'Tabulation'],
        notes: {
          python: [
            { name: 'GeeksforGeeks - DP', url: 'https://www.geeksforgeeks.org/dynamic-programming/' },
            { name: 'W3Schools - DP', url: 'https://www.w3schools.com/dsa/dsa_algo_dp.php' }
          ],
          java: [
            { name: 'GeeksforGeeks - DP', url: 'https://www.geeksforgeeks.org/dynamic-programming/' },
            { name: 'W3Schools - DP', url: 'https://www.w3schools.com/dsa/dsa_algo_dp.php' }
          ],
          cpp: [
            { name: 'GeeksforGeeks - DP', url: 'https://www.geeksforgeeks.org/dynamic-programming/' },
            { name: 'W3Schools - DP', url: 'https://www.w3schools.com/dsa/dsa_algo_dp.php' }
          ],
          javascript: [
            { name: 'GeeksforGeeks - DP', url: 'https://www.geeksforgeeks.org/dynamic-programming/' },
            { name: 'W3Schools - DP', url: 'https://www.w3schools.com/dsa/dsa_algo_dp.php' }
          ],
          c: [
            { name: 'GeeksforGeeks - DP', url: 'https://www.geeksforgeeks.org/dynamic-programming/' },
            { name: 'W3Schools - DP', url: 'https://www.w3schools.com/dsa/dsa_algo_dp.php' }
          ]
        },
        problems: [
          { name: 'LeetCode - DP', url: 'https://leetcode.com/tag/dynamic-programming/' },
          { name: 'CodeChef (1400-1800)', url: 'https://www.codechef.com/practice?page=0&limit=50&sort_by=difficulty_rating&sort_order=asc&search=&start_rating=1400&end_rating=1800&topic=dynamic-programming&tags=&group=' }
        ]
      },
      {
        id: 'c19',
        title: 'Greedy Algorithms',
        duration: '2.5h',
        topics: ['Greedy Approach', 'Knapsack'],
        notes: {
          python: [
            { name: 'GeeksforGeeks - Greedy', url: 'https://www.geeksforgeeks.org/greedy-algorithms/' }
          ],
          java: [
            { name: 'GeeksforGeeks - Greedy', url: 'https://www.geeksforgeeks.org/greedy-algorithms/' }
          ],
          cpp: [
            { name: 'GeeksforGeeks - Greedy', url: 'https://www.geeksforgeeks.org/greedy-algorithms/' }
          ],
          javascript: [
            { name: 'GeeksforGeeks - Greedy', url: 'https://www.geeksforgeeks.org/greedy-algorithms/' }
          ],
          c: [
            { name: 'GeeksforGeeks - Greedy', url: 'https://www.geeksforgeeks.org/greedy-algorithms/' }
          ]
        },
        problems: [
          { name: 'LeetCode - Greedy', url: 'https://leetcode.com/tag/greedy/' },
          { name: 'CodeChef (1300-1700)', url: 'https://www.codechef.com/practice?page=0&limit=50&sort_by=difficulty_rating&sort_order=asc&search=&start_rating=1300&end_rating=1700&topic=greedy&tags=&group=' }
        ]
      },
      {
        id: 'c20',
        title: 'Backtracking',
        duration: '3h',
        topics: ['N-Queens', 'Sudoku'],
        notes: {
          python: [
            { name: 'GeeksforGeeks - Backtracking', url: 'https://www.geeksforgeeks.org/backtracking-algorithms/' }
          ],
          java: [
            { name: 'GeeksforGeeks - Backtracking', url: 'https://www.geeksforgeeks.org/backtracking-algorithms/' }
          ],
          cpp: [
            { name: 'GeeksforGeeks - Backtracking', url: 'https://www.geeksforgeeks.org/backtracking-algorithms/' }
          ],
          javascript: [
            { name: 'GeeksforGeeks - Backtracking', url: 'https://www.geeksforgeeks.org/backtracking-algorithms/' }
          ],
          c: [
            { name: 'GeeksforGeeks - Backtracking', url: 'https://www.geeksforgeeks.org/backtracking-algorithms/' }
          ]
        },
        problems: [
          { name: 'LeetCode - Backtracking', url: 'https://leetcode.com/tag/backtracking/' },
          { name: 'CodeChef (1400-1800)', url: 'https://www.codechef.com/practice?page=0&limit=50&sort_by=difficulty_rating&sort_order=asc&search=&start_rating=1400&end_rating=1800&topic=backtracking&tags=&group=' }
        ]
      }
    ],
    quant: [
      {
        id: 'q1',
        title: 'Basic Arithmetic',
        duration: '2h',
        topics: ['Addition', 'Division', 'BODMAS'],
        notes: [{ name: 'Khan Academy - Arithmetic', url: 'https://www.khanacademy.org/math/arithmetic' }],
        problems: [
          { name: 'IndiaBIX - Arithmetic', url: 'https://www.indiabix.com/aptitude/numbers/' },
          { name: 'PrepInsta - Arithmetic', url: 'https://prepinsta.com/quantitative-aptitude/arithmetic/' }
        ]
      },
      {
        id: 'q2',
        title: 'Percentages',
        duration: '2h',
        topics: ['Basics', 'Applications'],
        notes: [{ name: 'Khan Academy - Percentages', url: 'https://www.khanacademy.org/math/cc-sixth-grade-math/x0267d782:cc-6th-rates-and-percentages' }],
        problems: [
          { name: 'IndiaBIX - Percentage', url: 'https://www.indiabix.com/aptitude/percentage/' },
          { name: 'PrepInsta - Percentage', url: 'https://prepinsta.com/quantitative-aptitude/percentage/' }
        ]
      },
      {
        id: 'q3',
        title: 'Profit & Loss',
        duration: '2.5h',
        topics: ['CP', 'SP', 'Profit%'],
        notes: [{ name: 'GeeksforGeeks - Profit Loss', url: 'https://www.geeksforgeeks.org/profit-and-loss/' }],
        problems: [
          { name: 'IndiaBIX - Profit Loss', url: 'https://www.indiabix.com/aptitude/profit-and-loss/' },
          { name: 'PrepInsta - Profit Loss', url: 'https://prepinsta.com/quantitative-aptitude/profit-and-loss/' }
        ]
      },
      {
        id: 'q4',
        title: 'Simple Interest',
        duration: '1.5h',
        topics: ['Principal', 'Rate', 'Time'],
        notes: [{ name: 'GeeksforGeeks - Simple Interest', url: 'https://www.geeksforgeeks.org/simple-interest/' }],
        problems: [
          { name: 'IndiaBIX - Simple Interest', url: 'https://www.indiabix.com/aptitude/simple-interest/' },
          { name: 'PrepInsta - Simple Interest', url: 'https://prepinsta.com/quantitative-aptitude/simple-interest/' }
        ]
      },
      {
        id: 'q5',
        title: 'Ratios',
        duration: '2h',
        topics: ['Ratio', 'Proportion'],
        notes: [{ name: 'Khan Academy - Ratios', url: 'https://www.khanacademy.org/math/cc-sixth-grade-math/x0267d782:cc-6th-rates-and-percentages/cc-6th-ratios-intro/v/introduction-to-ratios-new-hd-version' }],
        problems: [{ name: 'IndiaBIX - Ratio', url: 'https://www.indiabix.com/aptitude/ratio-and-proportion/' }]
      },
      {
        id: 'q6',
        title: 'Time & Work',
        duration: '2.5h',
        topics: ['Work Rate', 'Combined'],
        notes: [{ name: 'GeeksforGeeks - Time Work', url: 'https://www.geeksforgeeks.org/time-and-work/' }],
        problems: [
          { name: 'IndiaBIX - Time Work', url: 'https://www.indiabix.com/aptitude/time-and-work/' },
          { name: 'PrepInsta - Time Work', url: 'https://prepinsta.com/quantitative-aptitude/time-and-work/' }
        ]
      },
      {
        id: 'q7',
        title: 'Speed & Distance',
        duration: '2.5h',
        topics: ['Speed', 'Distance'],
        notes: [{ name: 'GeeksforGeeks - Speed Distance', url: 'https://www.geeksforgeeks.org/time-speed-distance/' }],
        problems: [
          { name: 'IndiaBIX - Speed Distance', url: 'https://www.indiabix.com/aptitude/time-and-distance/' },
          { name: 'PrepInsta - Speed Distance', url: 'https://prepinsta.com/quantitative-aptitude/time-speed-and-distance/' }
        ]
      },
      {
        id: 'q8',
        title: 'Averages',
        duration: '1.5h',
        topics: ['Mean', 'Weighted Avg'],
        notes: [{ name: 'GeeksforGeeks - Average', url: 'https://www.geeksforgeeks.org/average/' }],
        problems: [
          { name: 'IndiaBIX - Average', url: 'https://www.indiabix.com/aptitude/average/' },
          { name: 'PrepInsta - Average', url: 'https://prepinsta.com/quantitative-aptitude/average/' }
        ]
      }
    ],
    reasoning: [
      {
        id: 'r1',
        title: 'Number Series',
        duration: '2h',
        topics: ['Patterns', 'Sequences'],
        notes: [{ name: 'GeeksforGeeks - Number Series', url: 'https://www.geeksforgeeks.org/number-series/' }],
        problems: [
          { name: 'IndiaBIX - Number Series', url: 'https://www.indiabix.com/logical-reasoning/number-series/' },
          { name: 'PrepInsta - Series', url: 'https://prepinsta.com/logical-reasoning/series/' }
        ]
      },
      {
        id: 'r2',
        title: 'Letter Series',
        duration: '1.5h',
        topics: ['Alphabets', 'Patterns'],
        notes: [{ name: 'GeeksforGeeks - Letter Series', url: 'https://www.geeksforgeeks.org/letter-series/' }],
        problems: [
          { name: 'IndiaBIX - Letter Series', url: 'https://www.indiabix.com/logical-reasoning/letter-series/' },
          { name: 'PrepInsta - Alphabet', url: 'https://prepinsta.com/logical-reasoning/alphabet-test/' }
        ]
      },
      {
        id: 'r3',
        title: 'Analogies',
        duration: '2h',
        topics: ['Number', 'Letter'],
        notes: [{ name: 'GeeksforGeeks - Analogies', url: 'https://www.geeksforgeeks.org/analogies/' }],
        problems: [
          { name: 'IndiaBIX - Analogies', url: 'https://www.indiabix.com/logical-reasoning/analogies/' },
          { name: 'PrepInsta - Analogy', url: 'https://prepinsta.com/logical-reasoning/analogy/' }
        ]
      },
      {
        id: 'r4',
        title: 'Odd One Out',
        duration: '1.5h',
        topics: ['Classification'],
        notes: [{ name: 'GeeksforGeeks - Classification', url: 'https://www.geeksforgeeks.org/classification/' }],
        problems: [{ name: 'IndiaBIX - Odd One Out', url: 'https://www.indiabix.com/logical-reasoning/odd-man-out-and-series/' }]
      },
      {
        id: 'r5',
        title: 'Coding-Decoding',
        duration: '2h',
        topics: ['Letter Coding', 'Number'],
        notes: [{ name: 'GeeksforGeeks - Coding Decoding', url: 'https://www.geeksforgeeks.org/coding-decoding/' }],
        problems: [
          { name: 'IndiaBIX - Coding Decoding', url: 'https://www.indiabix.com/logical-reasoning/coding-decoding/' },
          { name: 'PrepInsta - Coding Decoding', url: 'https://prepinsta.com/logical-reasoning/coding-and-decoding/' }
        ]
      },
      {
        id: 'r6',
        title: 'Blood Relations',
        duration: '2h',
        topics: ['Family Tree', 'Relations'],
        notes: [{ name: 'GeeksforGeeks - Blood Relations', url: 'https://www.geeksforgeeks.org/blood-relations/' }],
        problems: [
          { name: 'IndiaBIX - Blood Relations', url: 'https://www.indiabix.com/logical-reasoning/blood-relation-test/' },
          { name: 'PrepInsta - Blood Relations', url: 'https://prepinsta.com/logical-reasoning/blood-relations/' }
        ]
      },
      {
        id: 'r7',
        title: 'Direction Sense',
        duration: '1.5h',
        topics: ['Directions', 'Distance'],
        notes: [{ name: 'GeeksforGeeks - Direction Sense', url: 'https://www.geeksforgeeks.org/direction-sense-test/' }],
        problems: [
          { name: 'IndiaBIX - Direction Sense', url: 'https://www.indiabix.com/logical-reasoning/direction-sense-test/' },
          { name: 'PrepInsta - Direction', url: 'https://prepinsta.com/logical-reasoning/direction-sense/' }
        ]
      },
      {
        id: 'r8',
        title: 'Puzzles',
        duration: '2h',
        topics: ['Logic', 'Problem Solving'],
        notes: [{ name: 'GeeksforGeeks - Puzzles', url: 'https://www.geeksforgeeks.org/puzzles/' }],
        problems: [
          { name: 'IndiaBIX - Puzzles', url: 'https://www.indiabix.com/logical-reasoning/' },
          { name: 'PrepInsta - Puzzles', url: 'https://prepinsta.com/logical-reasoning/' }
        ]
      }
    ],
    communication: [
      {
        id: 'cm1',
        title: 'Grammar Basics',
        duration: '2h',
        topics: ['Tenses', 'Parts of Speech'],
        notes: [
          { name: 'Grammarly - Grammar', url: 'https://www.grammarly.com/blog/category/handbook/' },
          { name: 'GeeksforGeeks - Grammar', url: 'https://www.geeksforgeeks.org/english-grammar/' }
        ],
        problems: [{ name: 'IndiaBIX - Grammar', url: 'https://www.indiabix.com/verbal-ability/spotting-errors/' }]
      },
      {
        id: 'cm2',
        title: 'Vocabulary',
        duration: '2h',
        topics: ['Synonyms', 'Antonyms'],
        notes: [{ name: 'Vocabulary.com', url: 'https://www.vocabulary.com/' }],
        problems: [
          { name: 'IndiaBIX - Synonyms', url: 'https://www.indiabix.com/verbal-ability/synonyms/' },
          { name: 'IndiaBIX - Antonyms', url: 'https://www.indiabix.com/verbal-ability/antonyms/' }
        ]
      },
      {
        id: 'cm3',
        title: 'Sentence Formation',
        duration: '1.5h',
        topics: ['Structure', 'Order'],
        notes: [{ name: 'GeeksforGeeks - Sentence', url: 'https://www.geeksforgeeks.org/sentence-improvement/' }],
        problems: [{ name: 'IndiaBIX - Sentence', url: 'https://www.indiabix.com/verbal-ability/sentence-improvement/' }]
      },
      {
        id: 'cm4',
        title: 'Comprehension',
        duration: '2.5h',
        topics: ['Reading', 'Understanding'],
        notes: [{ name: 'GeeksforGeeks - RC', url: 'https://www.geeksforgeeks.org/reading-comprehension/' }],
        problems: [
          { name: 'IndiaBIX - Comprehension', url: 'https://www.indiabix.com/verbal-ability/comprehension/' },
          { name: 'PrepInsta - RC', url: 'https://prepinsta.com/verbal-ability/reading-comprehension/' }
        ]
      },
      {
        id: 'cm5',
        title: 'Spotting Errors',
        duration: '2h',
        topics: ['Grammar Errors'],
        notes: [{ name: 'GeeksforGeeks - Error Detection', url: 'https://www.geeksforgeeks.org/error-detection/' }],
        problems: [{ name: 'IndiaBIX - Errors', url: 'https://www.indiabix.com/verbal-ability/spotting-errors/' }]
      },
      {
        id: 'cm6',
        title: 'Fill in Blanks',
        duration: '1.5h',
        topics: ['Context', 'Word Choice'],
        notes: [{ name: 'GeeksforGeeks - Fill Blanks', url: 'https://www.geeksforgeeks.org/fill-blanks/' }],
        problems: [
          { name: 'IndiaBIX - Fill Blanks', url: 'https://www.indiabix.com/verbal-ability/sentence-completion/' },
          { name: 'PrepInsta - Fill Blanks', url: 'https://prepinsta.com/verbal-ability/sentence-completion/' }
        ]
      },
      {
        id: 'cm7',
        title: 'Para Jumbles',
        duration: '2h',
        topics: ['Rearrangement', 'Flow'],
        notes: [{ name: 'GeeksforGeeks - Para Jumbles', url: 'https://www.geeksforgeeks.org/para-jumbles/' }],
        problems: [
          { name: 'IndiaBIX - Para Jumbles', url: 'https://www.indiabix.com/verbal-ability/paragraph-formation/' },
          { name: 'PrepInsta - Para Jumbles', url: 'https://prepinsta.com/verbal-ability/para-jumbles/' }
        ]
      },
      {
        id: 'cm8',
        title: 'Idioms',
        duration: '1.5h',
        topics: ['Phrases', 'Meanings'],
        notes: [{ name: 'The Idioms', url: 'https://www.theidioms.com/' }],
        problems: [{ name: 'IndiaBIX - Idioms', url: 'https://www.indiabix.com/verbal-ability/idioms-and-phrases/' }]
      }
    ]
};
