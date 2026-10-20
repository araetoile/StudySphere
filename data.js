/* StudySphere content. Edit this file to add subjects/topics.
   Subject: {code,title,na?:true,topics:[]}. Topic: {id,title,html,quiz:[10 x {q,o:[4],a,e}]} */
const ul = (a) =>
  "<ul>" + a.map((x) => "<li>" + x + "</li>").join("") + "</ul>";
const tb = (h, r) =>
  "<table><tr>" +
  h.map((x) => "<th>" + x + "</th>").join("") +
  "</tr>" +
  r
    .map((x) => "<tr>" + x.map((c) => "<td>" + c + "</td>").join("") + "</tr>")
    .join("") +
  "</table>";
const Q = (q, o, a, e) => ({ q, o, a, e });
const topic = (id, title, secs, quiz) => ({
  id,
  title,
  quiz,
  html:
    `<p class="note">Based on the instructor's lecture slides. Verify details against the official materials.</p>` +
    secs.map((s) => `<h2>${s[0]}</h2>${s[1]}`).join(""),
});
const na = (code, title) => ({ code, title, na: true, topics: [] });

const T_TREE = topic(
  "binary-tree",
  "Binary Trees (Weeks 13-14)",
  [
    [
      "Learning Objectives",
      ul([
        "Differentiate linear and non-linear data structures.",
        "Explain trees and their terms.",
        "Describe how values are stored and traversed in a binary tree.",
      ]),
    ],
    [
      "Linear vs. Non-linear",
      tb(
        ["", "Linear", "Non-linear"],
        [
          ["Examples", "Arrays, linked lists, stacks, queues", "Trees, graphs"],
          ["Shape", "A straight sequence", "Branches from a starting point"],
        ],
      ),
    ],
    [
      "Trees and Key Terms",
      "<p>A <strong>tree</strong> is a collection of nodes connected by edges. It is empty, or one <strong>root</strong> plus zero or more subtrees.</p>" +
        tb(
          ["Term", "Meaning"],
          [
            ["Root", "Top node; only one per tree (level 0)"],
            ["Parent / Child", "Node above / below, joined by an edge"],
            ["Siblings", "Nodes sharing a parent"],
            ["Leaf", "Node with no children"],
            ["Subtree", "A node and all its descendants"],
            ["Level", "Generation of a node; root = 0"],
            ["Key", "Value used when searching"],
          ],
        ),
    ],
    [
      "Binary Tree",
      "<p>Every node has <strong>at most two children</strong>: a left child and a right child.</p><pre><code>        8\n      /   \\\n     3     10\n    / \\      \\\n   1   6      14\n      / \\     /\n     4   7   13</code></pre><p>Leaves: 1, 4, 7, 13.</p>",
    ],
    [
      "Traversal",
      "<p>Traversal visits every node, always starting at the root.</p>" +
        tb(
          ["Type", "Pattern", "Example (A; B, C; D, E, F, G)"],
          [
            ["Pre-order", "Root, Left, Right", "A B D E C F G"],
            ["In-order", "Left, Root, Right", "D B E A F C G"],
            ["Post-order", "Left, Right, Root", "D E B F G C A"],
          ],
        ) +
        "<p>In-order traversal of a binary search tree gives sorted ascending values.</p>",
    ],
    [
      "Key Takeaways",
      ul([
        "Binary = max 2 children.",
        "Pre = root first, In = root in the middle, Post = root last.",
        "Left is always visited before right.",
      ]),
    ],
  ],
  [
    Q(
      "Which is a non-linear data structure?",
      ["Array", "Stack", "Tree", "Queue"],
      2,
      "Trees branch out; arrays, stacks and queues are linear.",
    ),
    Q(
      "What is the maximum number of children of a binary tree node?",
      ["1", "2", "3", "Unlimited"],
      1,
      "Binary means at most two children.",
    ),
    Q(
      "A node with no children is called a:",
      ["Root", "Parent", "Leaf", "Sibling"],
      2,
      "Leaf nodes have no children.",
    ),
    Q(
      "At what level is the root node?",
      ["Level 1", "Level 0", "Level 2", "It has no level"],
      1,
      "The root is at level 0.",
    ),
    Q(
      "Pre-order traversal follows which pattern?",
      [
        "Left, Root, Right",
        "Root, Left, Right",
        "Left, Right, Root",
        "Right, Root, Left",
      ],
      1,
      "Pre-order visits the root first.",
    ),
    Q(
      "In post-order traversal the root is visited:",
      ["First", "In the middle", "Last", "Never"],
      2,
      "Post-order is Left, Right, Root.",
    ),
    Q(
      "In-order traversal of a binary search tree produces:",
      [
        "Descending order",
        "Random order",
        "Ascending sorted order",
        "Level-by-level order",
      ],
      2,
      "In-order output of a BST is sorted ascending.",
    ),
    Q(
      "For A with children B, C; B with D, E; C with F, G, the in-order result is:",
      ["A B D E C F G", "D B E A F C G", "D E B F G C A", "A B C D E F G"],
      1,
      "Left (D B E), root A, right (F C G).",
    ),
    Q(
      "For the same tree, the post-order result is:",
      ["A B D E C F G", "D B E A F C G", "A C B G F E D", "D E B F G C A"],
      3,
      "Left, right, then root: D E B F G C A.",
    ),
    Q(
      "In the lecture tree (root 8 with children 3 and 10), the sibling of node 3 is:",
      ["1", "8", "10", "6"],
      2,
      "Siblings share the same parent; 3 and 10 are both children of 8.",
    ),
  ],
);

const T_FSM = topic(
  "fsm",
  "Finite State Machines (Week 15)",
  [
    [
      "Learning Objectives",
      ul([
        "Explain finite state machines.",
        "List their applications.",
        "Create state transition diagrams from a scenario.",
      ]),
    ],
    [
      "What is an FSM?",
      "<p>An abstract machine that is in <strong>exactly one</strong> of a <strong>finite</strong> number of states at a time. It changes state in response to inputs; the change is a <strong>transition</strong>.</p>" +
        ul([
          "Applications: digital logic design, control systems, natural language processing, computer networking.",
          "Drawn as state transition diagrams: circle = state, arrow = transition, double circle = accept state, arrow from nowhere = start.",
        ]),
    ],
    [
      "Example: Coin-Operated Turnstile",
      tb(
        ["State", "Input", "Next", "Output"],
        [
          ["Locked", "coin", "Unlocked", "Unlocks"],
          ["Locked", "push", "Locked", "None"],
          ["Unlocked", "coin", "Unlocked", "None"],
          ["Unlocked", "push", "Locked", "Locks after passing"],
        ],
      ),
    ],
    [
      "Example: Video Game Control",
      "<p>States: Stand, Jump, Run. Press A leads to Jump, Press Up leads to Run, and no input returns to Stand.</p>",
    ],
    [
      "Example: Heat Wave",
      "<p>Heat wave = 45 &deg;C or more for 2 consecutive days.</p>" +
        tb(
          ["State", "&ge; 45", "&lt; 45"],
          [
            ["q0 (start)", "q1", "q0"],
            ["q1", "q2", "q0"],
            ["q2 (accept)", "q2", "q2"],
          ],
        ),
    ],
    [
      "Regular Language",
      "<p>A language that can be expressed with an FSM. Example: strings ending with 1 use states P (start) and Q (accept): P goes to Q on 1; Q goes to P on 0.</p>",
    ],
    [
      "Key Takeaways",
      ul([
        "One state at a time, finite states.",
        "Transitions are triggered by inputs.",
        "A string is accepted if it ends in an accept state.",
      ]),
    ],
  ],
  [
    Q(
      "How many states is an FSM in at any given time?",
      ["Exactly one", "Two", "All of them", "None"],
      0,
      "An FSM is in exactly one state at a time.",
    ),
    Q(
      "The change from one state to another is called a:",
      ["Output", "Transition", "Input", "Loop"],
      1,
      "That change is a transition.",
    ),
    Q(
      "A double circle in a state diagram marks the:",
      ["Start state", "Accept state", "Error state", "Loop"],
      1,
      "Double circles are accept states.",
    ),
    Q(
      "Which is an application of FSMs?",
      [
        "Spreadsheet formatting",
        "Photo filters",
        "Font design",
        "Computer networking",
      ],
      3,
      "Networking is one of the listed applications.",
    ),
    Q(
      "A Locked turnstile receives a push. The next state is:",
      ["Unlocked", "Locked", "Broken", "Accept"],
      1,
      "Pushing a locked turnstile does nothing.",
    ),
    Q(
      "A Locked turnstile receives a coin. The next state is:",
      ["Locked", "Run", "Unlocked", "Reset"],
      2,
      "A coin unlocks it.",
    ),
    Q(
      "In the video game FSM, a character in Jump with no input goes to:",
      ["Run", "Jump", "Stand", "Locked"],
      2,
      "No input returns the character to Stand.",
    ),
    Q(
      "The heat wave rule requires:",
      [
        "Any day above 30 °C",
        "45 °C or more for 5 days",
        "45 °C or more for 2 consecutive days",
        "Two days below 45 °C",
      ],
      2,
      "Two consecutive days of 45 °C or more.",
    ),
    Q(
      "In the heat wave machine, a temperature below 45 at q1 sends you to:",
      ["q2", "q0", "q1", "Error"],
      1,
      "The streak is broken, so it resets to q0.",
    ),
    Q(
      'Which string is accepted by the "ends with 1" machine?',
      ["0110", "1000", "1101", "0"],
      2,
      "1101 ends in 1, so it finishes in accept state Q.",
    ),
  ],
);

const T_INT = topic(
  "integer-repr",
  "Integer Representations (Weeks 16-17)",
  [
    [
      "Learning Objectives",
      ul([
        "Explain number systems.",
        "Convert integers between systems.",
        "Perform arithmetic in binary.",
      ]),
    ],
    [
      "Number Systems",
      tb(
        ["System", "Base", "Digits"],
        [
          ["Decimal", "10", "0-9"],
          ["Binary", "2", "0, 1"],
          ["Octal", "8", "0-7"],
          ["Hexadecimal", "16", "0-9, A-F (A=10 ... F=15)"],
        ],
      ) +
        "<p>Hex is used for memory locations, web colors, MAC addresses and error messages.</p>",
    ],
    [
      "Conversions",
      ul([
        "<strong>Decimal to binary:</strong> divide by 2 repeatedly; read remainders bottom to top. 294 = 100100110.",
        "<strong>Binary to decimal:</strong> add place values (128, 64, 32, 16, 8, 4, 2, 1) where the bit is 1. 10110111 = 183.",
        "<strong>Hex to binary:</strong> each hex digit = 4 bits. 3AB2 = 0011 1010 1011 0010.",
        "<strong>Binary to hex:</strong> group bits in 4s from the right. 1110001111011 = 1C7B.",
      ]),
    ],
    [
      "Binary Addition",
      tb(
        ["Add", "Result", "Carry"],
        [
          ["0+0", "0", "0"],
          ["0+1 or 1+0", "1", "0"],
          ["1+1", "0", "1"],
          ["1+1+1", "1", "1"],
        ],
      ) + "<p>Example: 1001 + 111 = 10000.</p>",
    ],
    [
      "2's Complement and Subtraction",
      ul([
        "2's complement: flip every bit, then add 1. 10010 gives 01101, then 01110.",
        "<strong>Larger minus smaller:</strong> add the 2's complement of the smaller number, then drop the carry. 1111 - 1010 = 0101.",
        "<strong>Smaller minus larger:</strong> no carry appears; take the 2's complement of the result and add a minus sign. 1000 - 1010 = -0010.",
      ]),
    ],
    [
      "Key Takeaways",
      ul([
        "Hex digit = 4 bits.",
        "Subtract by adding the 2's complement.",
        "Carry out means a positive answer; no carry means negative.",
      ]),
    ],
  ],
  [
    Q(
      "What is the base of the hexadecimal system?",
      ["8", "10", "16", "2"],
      2,
      "Hexadecimal is base 16.",
    ),
    Q(
      "Binary digits are called:",
      ["Bytes", "Bits", "Hexes", "Octs"],
      1,
      "A bit is a binary digit.",
    ),
    Q(
      "The hex digit F equals what decimal value?",
      ["14", "15", "16", "12"],
      1,
      "A=10 up to F=15.",
    ),
    Q(
      "Decimal 10 in binary is:",
      ["1100", "1001", "1010", "1110"],
      2,
      "8 + 2 = 10, so 1010.",
    ),
    Q(
      "10110111 in binary equals what in decimal?",
      ["181", "183", "187", "179"],
      1,
      "128+32+16+4+2+1 = 183.",
    ),
    Q(
      "The hex digit A in binary is:",
      ["1011", "1010", "1001", "1100"],
      1,
      "A = 10 = 1010.",
    ),
    Q(
      "1001 + 111 in binary equals:",
      ["1111", "10010", "10000", "1110"],
      2,
      "9 + 7 = 16 = 10000.",
    ),
    Q(
      "The 2's complement of 10010 is:",
      ["01101", "01110", "10001", "01111"],
      1,
      "Flip to 01101, add 1 to get 01110.",
    ),
    Q(
      "Using 2's complement, 1111 - 1010 equals:",
      ["1010", "0110", "0101", "1001"],
      2,
      "1111 + 0110 = 1 0101; drop the carry to get 0101.",
    ),
    Q(
      "After adding the 2's complement, no carry appears. The answer is:",
      ["Positive", "Negative", "Zero", "Invalid"],
      1,
      "No carry means negative; complement the result and add a minus sign.",
    ),
  ],
);

const T_DES = topic(
  "design-prototyping",
  "Design Process and Prototyping (Week 13)",
  [
    [
      "Learning Objectives",
      ul([
        "Describe the HCI design process and approaches.",
        "Differentiate rules, principles, standards and guidelines.",
        "Explain prototyping and construction.",
      ]),
    ],
    [
      "Design and the Design Process",
      "<p>In HCI, design is a goal-directed problem-solving process informed by intended use, target domain, materials, cost and feasibility. It starts by analyzing users: <strong>novice/first-time</strong>, <strong>knowledgeable intermittent</strong> and <strong>expert frequent</strong>. Then: draft, test, prototype, test, refine screens, test, refine, implement.</p>",
    ],
    [
      "Design Approaches",
      tb(
        ["Approach", "Idea"],
        [
          ["Anthropomorphic", "Interface has human-like qualities"],
          ["Cognitive", "Based on abilities of the brain and perception"],
          ["Empirical", "Compare and test usability of multiple designs"],
          [
            "Predictive modeling",
            "Goal-oriented design with personas built from user interviews",
          ],
        ],
      ),
    ],
    [
      "Rules, Principles, Standards, Guidelines",
      tb(
        ["Type", "Meaning"],
        [
          [
            "Rules",
            "Followed to increase usability; vary by authority and generality",
          ],
          [
            "Principles",
            "From psychology and sociology; widely applicable, not specific",
          ],
          ["Standards", "Set by bodies such as ISO and BSI"],
          ["Guidelines", "Best practice from experience or empirical studies"],
        ],
      ),
    ],
    [
      "Prototyping",
      ul([
        "A <strong>prototype</strong> lets stakeholders interact with a design; it answers questions and helps choose between alternatives.",
        "<strong>Low-fidelity:</strong> paper or cardboard, storyboarding, sketching, Wizard of Oz (a human simulates the software's responses).",
        "<strong>High-fidelity:</strong> looks and works more like the final product, e.g. a prototype coded in Python.",
      ]),
    ],
    [
      "Conceptual Design and Construction",
      ul([
        "A conceptual model outlines what people can do with a product and the concepts they need; its core includes metaphors, concepts, relationships and mappings.",
        "Interface types mentioned: shareable, tangible, virtual reality.",
        "Physical computing builds prototypes using electronics, code and circuits. An SDK is a package of tools for developing apps on a specific platform (e.g. iOS, Android).",
      ]),
    ],
    [
      "Key Takeaways",
      ul([
        "Prototypes are for answering design questions early.",
        "Principles are broad; guidelines are practical.",
      ]),
    ],
  ],
  [
    Q(
      "In HCI, design is best described as:",
      [
        "A problem-solving process",
        "Only graphic styling",
        "Only programming",
        "A marketing plan",
      ],
      0,
      "Design is a goal-directed problem-solving process.",
    ),
    Q(
      "Which lists the three user categories?",
      [
        "Admin, guest, owner",
        "Young, middle, old",
        "Novice, knowledgeable intermittent, expert frequent",
        "Paid, free, trial",
      ],
      2,
      "These are the categories given in the lecture.",
    ),
    Q(
      "Which approach gives the interface human-like qualities?",
      ["Cognitive", "Anthropomorphic", "Empirical", "Predictive modeling"],
      1,
      "That is the anthropomorphic approach.",
    ),
    Q(
      "Which approach compares the usability of multiple designs through testing?",
      ["Anthropomorphic", "Cognitive", "Goal-oriented", "Empirical"],
      3,
      "The empirical approach tests and compares designs.",
    ),
    Q(
      "Personas are advocated by:",
      ["Physical computing", "Goal-oriented design", "SDKs", "Wizard of Oz"],
      1,
      "Goal-oriented design uses personas from user interviews.",
    ),
    Q(
      "Design standards are usually set by:",
      [
        "Individual designers",
        "Individual users",
        "Marketing teams",
        "National or international bodies such as ISO",
      ],
      3,
      "Bodies like BSI and ISO set standards.",
    ),
    Q(
      "Which is a low-fidelity prototype?",
      [
        "A Python-coded system",
        "A paper mock-up",
        "A molded plastic device with a working keyboard",
        "The final app",
      ],
      1,
      "Paper or cardboard mock-ups are low fidelity.",
    ),
    Q(
      "In the Wizard of Oz technique:",
      [
        "The user writes code",
        "The product is released",
        "A human operator simulates the software's responses",
        "Sketches are drawn",
      ],
      2,
      "A human simulates the response while the user thinks it is software.",
    ),
    Q(
      "Which best describes principles, compared with guidelines?",
      [
        "Specific and mandatory",
        "Broad and widely applicable but not specific",
        "Set by ISO only",
        "Only for hardware",
      ],
      1,
      "Principles apply widely but give less specific advice.",
    ),
    Q(
      "An SDK is:",
      [
        "A paper sketch",
        "A usability lab",
        "A design guideline",
        "A package of tools for developing apps on a specific platform",
      ],
      3,
      "SDK = software development kit.",
    ),
  ],
);

const T_UI = topic(
  "storyboard-ui-nav",
  "Storyboarding, Interface and Navigation Design (Week 14)",
  [
    [
      "Learning Objectives",
      ul([
        "Create and evaluate a storyboard.",
        "Apply basic UI design principles.",
        "Choose navigation types and apply information design.",
      ]),
    ],
    [
      "Storyboarding",
      "<p>A series of sketches showing how a user moves through a task. It is low fidelity, uses minimal detail and shows the flow of the user's experience.</p>" +
        ul([
          "Understand users and the system, brainstorm, identify people and artifacts, develop scenarios.",
          "Break the story into 3-5 frames, one feature each; draw user and product; use text balloons for thoughts; add a short description per frame.",
          "Test with a walkthrough (feedback from users) or storyboard testing (is the message clear?).",
        ]),
    ],
    [
      "Interface Design Principles",
      ul([
        "Make common elements behave predictably.",
        "Keep discoverability high with clear labels and affordances.",
        "Keep it simple; focus on hierarchy and readability; prefer edge alignment.",
        "Use color, contrast and text styling to draw attention.",
        "One chief function per page; use progressive disclosure; place controls near what they control.",
        "Give feedback; avoid dark patterns; stay consistent with the brand.",
      ]),
    ],
    [
      "Navigation Design",
      tb(
        ["Type", "Description"],
        [
          ["Top", "Horizontal bar; for sites with lots of content"],
          ["Side", "Vertical bar; quick access without scrolling"],
          ["Breadcrumb", "Trail showing current location; nested content"],
          ["Dropdown", "List from a single button; feature-rich apps"],
          ["Full-screen", "Helpful on small screens"],
          ["Hamburger", "Compact button that reveals a list"],
          ["Bottom bar", "Sticky menu giving direct access to key features"],
        ],
      ),
    ],
    [
      "Information Design",
      "<p>Structures and presents information so users can find, understand and use it, reducing cognitive load. Best practices: organize content, ensure readability and legibility, support navigation, enhance accessibility.</p>",
    ],
    [
      "Key Takeaways",
      ul([
        "Storyboards are quick, low-fidelity and minimal.",
        "Pick navigation to fit content size and users.",
      ]),
    ],
  ],
  [
    Q(
      "A storyboard is best described as:",
      [
        "A final coded app",
        "A series of sketches showing a user progressing through a task",
        "A database diagram",
        "A test report",
      ],
      1,
      "It is a series of sketches of a task flow.",
    ),
    Q(
      "How many frames are optimal in most storyboards?",
      ["1-2", "3-5", "10-12", "20+"],
      1,
      "The lecture recommends 3-5 frames.",
    ),
    Q(
      "A storyboard should use:",
      [
        "Maximum detail in every frame",
        "The minimal detail needed",
        "Only text",
        "Only video",
      ],
      1,
      "Minimal detail keeps the big picture clear.",
    ),
    Q(
      "A team shows a storyboard to current or potential users for feedback. This is a:",
      ["Walkthrough", "Wireframe", "Prototype release", "SDK"],
      0,
      "That is a storyboard walkthrough.",
    ),
    Q(
      "Which navigation type shows the user's current location as a trail of links?",
      ["Hamburger", "Bottom bar", "Breadcrumb", "Dropdown"],
      2,
      "Breadcrumbs suit nested content.",
    ),
    Q(
      "Which navigation suits a mobile app with quick access to key features?",
      ["Breadcrumb", "Bottom bar", "Top bar only", "Footer links"],
      1,
      "A sticky bottom bar gives direct access to key features.",
    ),
    Q(
      "The hamburger menu is:",
      [
        "A trail of links",
        "A vertical side list",
        "A compact button that reveals a list",
        "A search box",
      ],
      2,
      "It reveals the list of contents when clicked.",
    ),
    Q(
      "Your page has one form. Where should its submit button go?",
      ["Far from the form", "Near the form", "On another page", "Hidden"],
      1,
      "Controls belong near the objects they control.",
    ),
    Q(
      "Hard-to-see prefilled opt-in checkboxes are an example of:",
      ["Progressive disclosure", "Affordances", "Dark patterns", "Feedback"],
      2,
      "Dark patterns mislead users.",
    ),
    Q(
      "Information design aims to:",
      [
        "Increase cognitive load",
        "Help users find, understand and use data with less effort",
        "Remove all navigation",
        "Hide content",
      ],
      1,
      "Good information design reduces cognitive load.",
    ),
  ],
);

const T_AGILE = topic(
  "agile-waterfall",
  "Agile UX, Waterfall and Design Patterns (Week 15)",
  [
    [
      "Learning Objectives",
      ul([
        "Compare Agile UX and Waterfall.",
        "Explain user research, documentation and design patterns.",
      ]),
    ],
    [
      "Agile UX",
      "<p>Agile builds the product in small bits of user functionality in two-week cycles called iterations or <strong>Sprints</strong>, often following Design-Build-Test-Review. Agile UX combines interaction design with agile methods. <strong>Big design up front (BDUF)</strong> goes against agile working. Cycle 0 creates the product vision but does not aim for pixel-perfect designs.</p>",
    ],
    [
      "Waterfall",
      "<p>A sequential process where each phase finishes before the next begins, and earlier phases are not revisited.</p>" +
        tb(
          ["#", "Stage"],
          [
            ["1", "Requirements (gathered fully upfront)"],
            ["2", "Design (logical, then physical)"],
            ["3", "Implementation"],
            ["4", "Verification / testing"],
            ["5", "Deployment and maintenance"],
          ],
        ),
    ],
    [
      "Supporting Practices",
      ul([
        "<strong>User research:</strong> data collection and analysis to characterize users, tasks and context before development.",
        "<strong>Documentation:</strong> personas, interface sketches, wireframes.",
        "<strong>Design patterns:</strong> capture design experience and build a shared vocabulary; a pattern language is a network of related patterns.",
        "<strong>Open-source:</strong> source code free to reuse or modify.",
      ]),
    ],
    [
      "Key Takeaways",
      ul([
        "Agile = short iterative sprints; Waterfall = fixed sequential phases.",
      ]),
    ],
  ],
  [
    Q(
      "Agile breaks development into cycles called:",
      ["Phases", "Iterations (sprints)", "Milestones", "Patterns"],
      1,
      "Agile uses two-week iterations called sprints.",
    ),
    Q(
      "A typical sprint follows which process?",
      [
        "Design-Build-Test-Review",
        "Plan-Freeze-Ship",
        "Test-Ship-Design",
        "Design only",
      ],
      0,
      "Sprints often follow Design-Build-Test-Review.",
    ),
    Q(
      "Big design up front (BDUF) is:",
      [
        "Encouraged by agile",
        "Against agile working",
        "A testing tool",
        "A navigation type",
      ],
      1,
      "BDUF is described as against agile working.",
    ),
    Q(
      "Waterfall is:",
      [
        "Iterative",
        "Sequential, each phase finishing before the next",
        "Random",
        "User-driven only",
      ],
      1,
      "Waterfall flows through phases in order.",
    ),
    Q(
      "Which is the first Waterfall stage?",
      ["Design", "Testing", "Requirements", "Maintenance"],
      2,
      "Requirements come first.",
    ),
    Q(
      "Which stage creates the logical then physical design?",
      ["Design", "Implementation", "Deployment", "Verification"],
      0,
      "Design moves from logical to physical.",
    ),
    Q(
      "Defects and change requests after release are handled in:",
      ["Requirements", "Design", "Testing", "Deployment and maintenance"],
      3,
      "Maintenance begins after release.",
    ),
    Q(
      "User research happens:",
      [
        "After release only",
        "Before product development begins",
        "Never",
        "Only in testing",
      ],
      1,
      "It characterizes users, tasks and context beforehand.",
    ),
    Q(
      "Design patterns mainly:",
      [
        "Capture design experience and create a shared vocabulary",
        "Replace users",
        "Run tests",
        "Compile code",
      ],
      0,
      "Patterns share design experience.",
    ),
    Q(
      "Open-source software is:",
      [
        "Code available for free reuse or modification",
        "Paid software",
        "Hardware",
        "A prototype type",
      ],
      0,
      "Its source code is available for reuse or modification.",
    ),
  ],
);

const T_EVAL = topic(
  "evaluation",
  "Evaluation (Week 16)",
  [
    [
      "Learning Objectives",
      ul([
        "Explain what, where, when and why to evaluate.",
        "Differentiate evaluation settings and methods.",
        "Understand reliability, validity, bias and scope.",
      ]),
    ],
    [
      "Evaluation",
      "<p>Collecting and analyzing data about users' experiences with a design artifact (sketch, prototype, app or system). Users expect pleasing, engaging experiences, not just usability.</p>" +
        ul([
          "<strong>What:</strong> from low-tech prototypes to complete systems.",
          "<strong>Where:</strong> depends on what is evaluated; e.g. web accessibility in a lab.",
          "<strong>When:</strong> depends on the product and process.",
        ]),
    ],
    [
      "Types of Evaluation",
      tb(
        ["Setting", "Example"],
        [
          [
            "Controlled, with users",
            "Usability testing in labs (experiments, observation, interviews, questionnaires)",
          ],
          ["Natural, with users", "Field studies in real-world settings"],
          [
            "No users involved",
            "Cognitive walk-throughs, analytics, expert critique",
          ],
        ],
      ) +
        "<p>Opportunistic evaluations are early, quick explorations for fast feedback.</p>",
    ],
    [
      "Interpreting Results",
      tb(
        ["Issue", "Meaning"],
        [
          ["Reliability", "Same results on separate occasions"],
          ["Validity", "Measures what it intends to measure"],
          ["Ecological validity", "How much the environment distorts results"],
          ["Bias", "Results are distorted"],
          ["Scope", "How far findings can be generalized"],
        ],
      ),
    ],
    [
      "Key Takeaways",
      ul([
        "Choose the setting based on what you are evaluating.",
        "Always consider validity and bias.",
      ]),
    ],
  ],
  [
    Q(
      "Evaluation involves:",
      [
        "Only writing code",
        "Collecting and analyzing data about users' experiences with a design",
        "Only marketing",
        "Hiring staff",
      ],
      1,
      "It is data collection and analysis about user experience.",
    ),
    Q(
      "Usability labs are an example of:",
      [
        "Natural settings",
        "Controlled settings with users",
        "No-user settings",
        "Opportunistic only",
      ],
      1,
      "Labs control users' activities.",
    ),
    Q(
      "Field studies evaluate products:",
      [
        "In a lab",
        "In users' natural settings",
        "Without users, by experts",
        "Only on paper",
      ],
      1,
      "Field studies are done in natural settings.",
    ),
    Q(
      "Which does NOT involve users?",
      [
        "Usability testing",
        "Field study",
        "Cognitive walk-through",
        "Interviews",
      ],
      2,
      "Walk-throughs simulate the user's problem solving.",
    ),
    Q(
      "Web analytics is:",
      [
        "Measuring and reporting internet data to understand and optimize web usage",
        "A paper prototype",
        "A lab experiment",
        "A guideline",
      ],
      0,
      "That is the definition given.",
    ),
    Q(
      "Opportunistic evaluations are usually done:",
      [
        "Late, after release",
        "Early in design for quick feedback",
        "Never",
        "Only in labs",
      ],
      1,
      "They give designers fast early feedback.",
    ),
    Q(
      "Reliability means a method:",
      [
        "Is cheap",
        "Produces the same results under the same circumstances",
        "Is popular",
        "Is fast",
      ],
      1,
      "Reliability is consistency.",
    ),
    Q(
      "Validity asks whether a method:",
      [
        "Is expensive",
        "Measures what it is intended to measure",
        "Uses many users",
        "Is easy",
      ],
      1,
      "Validity is about measuring the intended thing.",
    ),
    Q(
      "A lab setting distorting how people really behave is a problem of:",
      ["Ecological validity", "Scope", "Reliability", "Standards"],
      0,
      "Ecological validity concerns environment effects.",
    ),
    Q(
      "The scope of a study refers to:",
      [
        "Its cost",
        "How far findings can be generalized",
        "Its duration",
        "Its bias",
      ],
      1,
      "Scope is the generalizability of findings.",
    ),
  ],
);

const T_UT = topic(
  "usability-heuristics",
  "Usability Testing, Heuristics and Predictive Models (Week 17)",
  [
    [
      "Learning Objectives",
      ul([
        "Describe usability testing, experiments and field studies.",
        "Apply heuristic evaluation and walk-throughs.",
        "Explain A/B testing, analytics and Fitts' law.",
      ]),
    ],
    [
      "Usability Testing and Experiments",
      ul([
        "Collects performance data on predefined tasks: video, keystrokes, mouse movements, swipes.",
        "A hypothesis relates two variables: the <strong>independent</strong> variable is what the researcher manipulates (e.g. menu type); the <strong>dependent</strong> variable is measured (e.g. selection time).",
        "t-tests are the most widely used statistical test in HCI.",
      ]),
    ],
    [
      "Field and In-the-Wild Studies",
      "<p>Field studies observe and interview people in their setting for minutes to years. In-the-wild studies deploy new technology in natural settings.</p>",
    ],
    [
      "Heuristic Evaluation",
      ul([
        "Visibility of system status",
        "Match between system and the real world",
        "User control and freedom",
        "Consistency and standards",
        "Error prevention",
        "Recognition rather than recall",
        "Flexibility and efficiency of use",
        "Aesthetic and minimalist design",
        "Help users recognize, diagnose and recover from errors",
        "Help and documentation",
      ]) +
        "<p>Process: briefing session, evaluation period (1-2 hours independently), debriefing session.</p>",
    ],
    [
      "Walk-throughs, Analytics, A/B Testing",
      ul([
        "<strong>Cognitive walk-through:</strong> evaluates ease of learning.",
        "<strong>Pluralistic walk-through:</strong> users, developers and researchers step through a task together.",
        "<strong>Web analytics:</strong> interaction logging of website activity.",
        "<strong>A/B testing:</strong> two groups use two designs; one is the control, the other the new design.",
      ]),
    ],
    [
      "Predictive Models",
      "<p><strong>Fitts' law</strong> predicts the time to reach a target with a pointing device, based on target size and distance.</p>",
    ],
    [
      "Key Takeaways",
      ul([
        "Experts can evaluate when users are unavailable.",
        "A/B testing compares a control with a new design.",
      ]),
    ],
  ],
  [
    Q(
      "In an experiment, the independent variable is:",
      [
        "What is measured",
        "What the researcher manipulates",
        "The participant",
        "The result",
      ],
      1,
      "The researcher selects it, e.g. the menu type.",
    ),
    Q(
      "The dependent variable in the menu example is:",
      [
        "Menu type",
        "Time taken to select an option",
        "Number of users",
        "Screen size",
      ],
      1,
      "It measures user performance.",
    ),
    Q(
      "The most widely used statistical test in HCI mentioned is the:",
      ["t-test", "Chi-square", "Regression", "Median"],
      0,
      "The lecture names t-tests.",
    ),
    Q(
      "Heuristic evaluation is done by:",
      [
        "Only end users",
        "Experts or researchers",
        "Random visitors",
        "Customers",
      ],
      1,
      "Experts inspect against heuristics.",
    ),
    Q(
      "Which heuristic says systems should keep users informed through feedback?",
      [
        "Error prevention",
        "Visibility of system status",
        "Consistency and standards",
        "Help and documentation",
      ],
      1,
      "That is visibility of system status.",
    ),
    Q(
      '"Recognition rather than recall" means:',
      [
        "Memorize commands",
        "Minimize memory load by making options visible",
        "Hide menus",
        "Use codes",
      ],
      1,
      "Make objects, actions and options visible.",
    ),
    Q(
      "Which is the last step of a heuristic evaluation?",
      [
        "Briefing session",
        "Evaluation period",
        "Debriefing session",
        "Release",
      ],
      2,
      "Findings are discussed and prioritized in debriefing.",
    ),
    Q(
      "Which walk-through has users, developers and researchers working together?",
      ["Cognitive", "Pluralistic", "Opportunistic", "Controlled"],
      1,
      "That is a pluralistic walk-through.",
    ),
    Q(
      "In A/B testing, the group using the existing design is the:",
      ["Experimental condition", "Control", "Persona", "Prototype"],
      1,
      "The control uses the current design.",
    ),
    Q(
      "Fitts' law predicts:",
      [
        "Time to reach a target based on size and distance",
        "Number of errors",
        "Page load speed",
        "User age",
      ],
      0,
      "It models pointing time using target size and distance.",
    ),
  ],
);

const SUBJECTS = [
  {
    code: "CCS104",
    title: "Discrete Structures",
    topics: [T_TREE, T_FSM, T_INT],
  },
  {
    code: "ITP106",
    title: "Human Computer Interaction 2",
    topics: [T_DES, T_UI, T_AGILE, T_EVAL, T_UT],
  },
  na("CCS110", "Information Management 1"),
  na("ETH101", "Ethics"),
  na("CCS114", "Web Technologies"),
  na("ITEW1", "Responsive Web Design"),
].map((s) => ({
  ...s,
  desc: s.na
    ? "Not currently available."
    : "Lessons and 10-question quizzes for " + s.code + ".",
}));
/* CCS110 and ETH101 content (loaded after data.js). */
const code = (c) => "<pre><code>" + c + "</code></pre>";
const sec = (t, h) => [t, h];
const EMP = tb(
  ["ID", "Name", "DeptID"],
  [
    [1, "Ana", 1],
    [2, "Ben", 1],
    [3, "Carla", 2],
    [4, "Dan", "NULL"],
  ],
);
const DEP = tb(
  ["ID", "DeptName"],
  [
    [1, "IT"],
    [2, "HR"],
    [3, "Finance"],
  ],
);

const T_JOIN = topic(
  "sql-joins",
  "SQL Joins (Material 11)",
  [
    sec(
      "Learning Objectives",
      ul([
        "Explain what a SQL JOIN is.",
        "Write INNER, LEFT, RIGHT and FULL joins in MySQL syntax.",
      ]),
    ),
    sec(
      "What is a JOIN?",
      "<p>A <strong>JOIN</strong> merges rows from two or more tables based on a shared (common) column. Example: <code>Orders.CustomerID</code> refers to <code>Customers.CustomerID</code>.</p>" +
        code(
          "SELECT Orders.OrderID, Customers.CustomerName, Orders.OrderDate\nFROM Orders\nINNER JOIN Customers\nON Orders.CustomerID = Customers.CustomerID;",
        ),
    ),
    sec(
      "The 4 Join Types (do not mix them up)",
      tb(
        ["Join", "Returns", "Unmatched rows"],
        [
          [
            "INNER (default)",
            "Only rows with a match in BOTH tables",
            "Dropped",
          ],
          [
            "LEFT (OUTER)",
            "ALL rows of the left table + matches from the right",
            "Left rows kept; right side = NULL",
          ],
          [
            "RIGHT (OUTER)",
            "ALL rows of the right table + matches from the left",
            "Right rows kept; left side = NULL",
          ],
          [
            "FULL (OUTER)",
            "ALL rows of both tables",
            "Kept from both sides; missing side = NULL",
          ],
        ],
      ) +
        "<p>The words INNER and OUTER are optional: <code>JOIN</code> = INNER JOIN, <code>LEFT JOIN</code> = LEFT OUTER JOIN.</p>",
    ),
    sec(
      "Try It: Interactive Join Demo",
      '<p>Sample tables (illustrative). Dan has no department; Finance has no employees.</p><div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:16px"><div><strong>Employee</strong>' +
        EMP +
        "</div><div><strong>Department</strong>" +
        DEP +
        '</div></div><p>Choose a join type to see the query and its output:</p><div id="jd"></div>',
    ),
    sec(
      "Lecture Example: Employee (15 rows) and Department",
      tb(
        ["Join", "Rows returned", "Why"],
        [
          ["INNER", "11", "Employees 10, 11, 14, 15 have NULL DepartID"],
          ["LEFT", "15", "All employees; NULLs for the 4 unmatched"],
          [
            "RIGHT",
            "13",
            "All departments; Dept IDs 3 and 4 have no employees (NULL names)",
          ],
          ["FULL", "17", "15 + 2 unmatched departments"],
        ],
      ),
    ),
    sec(
      "Common Mistakes and Fixes",
      ul([
        "<strong>SELECT *</strong> repeats the common column twice. Select only the columns you need.",
        "<strong>Ambiguous column name id:</strong> both tables have <code>id</code>. Fix with table aliases: <code>Dept.id</code>.",
      ]) +
        code(
          'SELECT Emp.FirstName AS "First Name", Dept.id, Dept.DepartmentName\nFROM Employee AS Emp\nLEFT JOIN Department AS Dept ON Emp.DepartID = Dept.id\nWHERE Dept.DepartmentName IS NOT NULL\nORDER BY Dept.DepartmentName ASC;',
        ) +
        "<p>WHERE filters rows; ORDER BY sorts them (ASC/DESC).</p>",
    ),
    sec(
      "Key Takeaways",
      ul([
        "INNER = matches only. LEFT = all left. RIGHT = all right. FULL = everything.",
        "Unmatched sides show NULL.",
        "Use aliases to avoid ambiguous columns.",
      ]),
    ),
  ],
  [
    Q(
      "A JOIN combines rows from tables based on:",
      ["A shared column", "Table size", "Column order", "Row color"],
      0,
      "Joins use a common column.",
    ),
    Q(
      "Which join returns only rows with matches in both tables?",
      ["LEFT", "RIGHT", "INNER", "FULL"],
      2,
      "INNER keeps matches only.",
    ),
    Q(
      "Which join keeps ALL rows of the left table?",
      ["INNER", "LEFT", "RIGHT", "None"],
      1,
      "LEFT JOIN keeps every left row.",
    ),
    Q(
      "In a RIGHT JOIN, unmatched left-table columns show:",
      ["0", "Blank text", "NULL", "An error"],
      2,
      "Missing matches appear as NULL.",
    ),
    Q(
      "Which join returns all rows from both tables?",
      ["INNER", "LEFT", "RIGHT", "FULL"],
      3,
      "FULL (OUTER) JOIN returns everything.",
    ),
    Q(
      "Is the keyword INNER required in an inner join?",
      [
        "Yes, always",
        "No, INNER is the default",
        "Only in MySQL",
        "Only with WHERE",
      ],
      1,
      "Plain JOIN means INNER JOIN.",
    ),
    Q(
      "Using the demo tables, how many rows does the LEFT JOIN return?",
      ["3", "4", "5", "6"],
      1,
      "All 4 employees; Dan gets NULL.",
    ),
    Q(
      "Using the demo tables, which join shows Finance with a NULL employee?",
      ["INNER", "LEFT", "RIGHT", "Both RIGHT and FULL"],
      3,
      "Both RIGHT and FULL keep unmatched departments.",
    ),
    Q(
      'The error "Ambiguous column name id" is fixed by:',
      [
        "Deleting the table",
        "Using table aliases such as Dept.id",
        "Using SELECT *",
        "Adding ORDER BY",
      ],
      1,
      "Qualify the column with its table name or alias.",
    ),
    Q(
      "Why avoid SELECT * in joins?",
      [
        "It is slower to type",
        "It repeats the common column",
        "It deletes data",
        "It is illegal",
      ],
      1,
      "The shared column appears twice.",
    ),
  ],
);
T_JOIN.init = (root) => {
  const E = [
      [1, "Ana", 1],
      [2, "Ben", 1],
      [3, "Carla", 2],
      [4, "Dan", null],
    ],
    D = [
      [1, "IT"],
      [2, "HR"],
      [3, "Finance"],
    ];
  const el = root.querySelector("#jd");
  const run = (t) => {
    const r = [];
    E.forEach((e) => {
      const d = D.filter((x) => x[0] === e[2]);
      if (d.length) d.forEach((x) => r.push([e[1], x[1]]));
      else if (t === "LEFT" || t === "FULL") r.push([e[1], null]);
    });
    if (t === "RIGHT" || t === "FULL")
      D.forEach((x) => {
        if (!E.some((e) => e[2] === x[0])) r.push([null, x[1]]);
      });
    return r;
  };
  const show = (t) => {
    const r = run(t);
    el.innerHTML =
      ["INNER", "LEFT", "RIGHT", "FULL"]
        .map(
          (k) =>
            `<button class="btn${k === t ? "" : " alt"}" data-k="${k}" aria-pressed="${k === t}" style="margin:0 6px 8px 0">${k} JOIN</button>`,
        )
        .join("") +
      `<pre><code>SELECT Emp.Name, Dept.DeptName\nFROM Employee AS Emp\n${t} JOIN Department AS Dept\nON Emp.DeptID = Dept.ID;</code></pre><strong>Output (${r.length} rows)</strong><table><tr><th>Name</th><th>DeptName</th></tr>${r.map((x) => `<tr><td>${x[0] ?? "NULL"}</td><td>${x[1] ?? "NULL"}</td></tr>`).join("")}</table>`;
    el.querySelectorAll("button").forEach(
      (b) => (b.onclick = () => show(b.dataset.k)),
    );
  };
  show("INNER");
};

const T_NORM = topic(
  "normalization",
  "Database Normalization (Material 12)",
  [
    sec(
      "Learning Objectives",
      ul(["Explain normalization.", "Apply 1NF, 2NF and 3NF."]),
    ),
    sec(
      "What is Normalization?",
      "<p>Organizing data to <strong>reduce redundancy</strong> and avoid update, insertion and deletion problems, so data is stored logically. Each normal form builds on the previous one.</p>",
    ),
    sec(
      "1NF, 2NF, 3NF at a Glance",
      tb(
        ["Form", "Rule", "Fix"],
        [
          [
            "1NF",
            "Unique rows; one value per cell; atomic (not divisible) values",
            "Add a primary key; split lists into a new table; split names into columns",
          ],
          [
            "2NF",
            "Is in 1NF + no partial dependency (every non-key column depends on the WHOLE key)",
            "Move partially dependent columns to their own table",
          ],
          [
            "3NF",
            "Is in 2NF + no transitive dependency (non-key columns depend only on the key)",
            "Move columns that depend on other non-key columns to their own table",
          ],
        ],
      ),
    ),
    sec(
      "1NF Example (Before and After)",
      "<p><strong>Problems:</strong> duplicate row, a list of books in one cell, full name in one cell.</p>" +
        tb(
          ["Student Name", "Ordered Books"],
          [
            ["Jasper Santos", "Math, English, Science"],
            ["Jessica Lat", "P.E, Physics"],
            ["Jasper Santos", "Math, English, Science"],
          ],
        ) +
        "<p><strong>Output after 1NF:</strong></p>" +
        tb(
          ["Order ID", "First Name", "Last Name"],
          [
            [1, "Jasper", "Santos"],
            [2, "Jessica", "Lat"],
            [3, "Jasper", "Santos"],
          ],
        ) +
        tb(
          ["Order ID", "Item"],
          [
            [1, "Math"],
            [1, "English"],
            [1, "Science"],
            [2, "P.E."],
            [2, "Physics"],
            [3, "Math"],
            [3, "English"],
            [3, "Science"],
          ],
        ),
    ),
    sec(
      "2NF Example",
      "<p>Key = (StudentID, CourseID). <code>CourseFee</code> depends only on CourseID, a partial dependency.</p>" +
        tb(
          ["StudentID", "CourseID", "CourseFee"],
          [
            [1, 1, "1,000"],
            [1, 2, 200],
            [2, 6, "5,000"],
          ],
        ) +
        '<p><strong>Output after 2NF:</strong></p><div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:16px"><div>' +
        tb(
          ["StudentID", "CourseID"],
          [
            [1, 1],
            [1, 2],
            [2, 6],
          ],
        ) +
        "</div><div>" +
        tb(
          ["CourseID", "CourseFee"],
          [
            [1, "1,000"],
            [2, 200],
            [6, "5,000"],
          ],
        ) +
        "</div></div>",
    ),
    sec(
      "3NF Example",
      "<p>Key = (Competition, Year). <code>Winner DOB</code> depends on Winner, not the key (transitive).</p>" +
        tb(
          ["Competition", "Year", "Winner", "Winner DOB"],
          [
            ["Tawag Ng Tanghalan", 2023, "JM Yosores", "Mar 16, 1991"],
            ["Idol Ph", 2022, "JM Yosores", "Mar 16, 1991"],
          ],
        ) +
        '<p><strong>Output after 3NF:</strong></p><div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:16px"><div>' +
        tb(
          ["Competition", "Year", "Winner"],
          [
            ["Tawag Ng Tanghalan", 2023, "JM Yosores"],
            ["Idol Ph", 2022, "JM Yosores"],
          ],
        ) +
        "</div><div>" +
        tb(["Winner", "DOB"], [["JM Yosores", "Mar 16, 1991"]]) +
        "</div></div>",
    ),
    sec(
      "Key Takeaways",
      ul([
        "1NF = atomic + unique. 2NF = no partial dependency. 3NF = no transitive dependency.",
        "Each step splits tables to remove repeated data.",
      ]),
    ),
  ],
  [
    Q(
      "Normalization is mainly used to:",
      [
        "Add redundancy",
        "Reduce data redundancy",
        "Delete tables",
        "Encrypt data",
      ],
      1,
      "It removes redundant data and anomalies.",
    ),
    Q(
      "1NF requires each cell to contain:",
      ["A list of values", "A single atomic value", "A table", "Only numbers"],
      1,
      "Cells must be atomic.",
    ),
    Q(
      "A row-uniqueness problem in 1NF is fixed by adding:",
      ["A primary key", "A view", "A join", "A subquery"],
      0,
      "A primary key such as Order ID makes rows unique.",
    ),
    Q(
      '"Jasper Santos" in one column breaks 1NF because it is:',
      ["Too short", "Not atomic", "Duplicated", "A key"],
      1,
      "Split into First Name and Last Name.",
    ),
    Q(
      "2NF requires the table to be in 1NF and have no:",
      ["Primary key", "Partial dependency", "Rows", "Foreign key"],
      1,
      "No non-key column may depend on part of a composite key.",
    ),
    Q(
      "In (StudentID, CourseID, CourseFee), CourseFee depends on:",
      ["StudentID only", "CourseID only", "Both keys", "Nothing"],
      1,
      "That partial dependency breaks 2NF.",
    ),
    Q(
      "3NF removes:",
      ["Transitive dependency", "Primary keys", "All tables", "NULLs"],
      0,
      "Non-key columns must depend only on the key.",
    ),
    Q(
      "In the singing example, which column causes the 3NF problem?",
      ["Year", "Competition", "Winner DOB", "Winner"],
      2,
      "DOB depends on Winner, not the key.",
    ),
    Q(
      "The correct order of normal forms is:",
      ["3NF, 2NF, 1NF", "1NF, 2NF, 3NF", "2NF, 1NF, 3NF", "1NF, 3NF, 2NF"],
      1,
      "Each builds on the previous.",
    ),
    Q(
      "Which form disallows multi-valued attributes in a cell?",
      ["1NF", "2NF", "3NF", "None"],
      0,
      "Lists in a cell violate 1NF.",
    ),
  ],
);

const T_SUB = topic(
  "subqueries",
  "Subqueries (Material 13)",
  [
    sec(
      "Learning Objectives",
      ul([
        "Explain MySQL subqueries.",
        "Write subqueries in WHERE, FROM and SELECT.",
      ]),
    ),
    sec(
      "Terms (similar but different)",
      tb(
        ["Term", "Meaning"],
        [
          ["Subquery / Inner query", "A query inside a query"],
          ["Outer query", "The main query containing the subquery"],
          ["Nested query", "A subquery in the WHERE clause"],
          ["Inline view", "A subquery in the FROM clause (needs an alias)"],
        ],
      ),
    ),
    sec(
      "Sample Tables (illustrative)",
      '<div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:16px"><div><strong>tblPatients</strong>' +
        tb(
          ["patientId", "surname", "firstname"],
          [
            [1, "Reyes", "Ana"],
            [2, "Cruz", "Ben"],
            [3, "Lim", "Cara"],
          ],
        ) +
        "</div><div><strong>tblCheckUp</strong>" +
        tb(["patientId"], [[1], [3]]) +
        "</div></div>",
    ),
    sec(
      "1. Subquery in WHERE",
      code(
        "SELECT a.surname, a.firstname\nFROM tblPatients AS a\nWHERE a.patientId IN (SELECT b.patientId FROM tblCheckUp AS b);",
      ) +
        "<p><strong>Output:</strong></p>" +
        tb(
          ["surname", "firstname"],
          [
            ["Reyes", "Ana"],
            ["Lim", "Cara"],
          ],
        ) +
        "<p>The inner query returns 1 and 3; the outer query uses them in IN. An INNER JOIN could give the same result.</p>",
    ),
    sec(
      "2. Subquery in FROM (inline view)",
      code(
        "SELECT DISTINCT a.surname, a.firstname\nFROM tblPatients AS a,\n  (SELECT patientId FROM tblCheckUp) AS b\nWHERE a.patientId = b.patientId;",
      ) +
        "<p><strong>Output:</strong> same two rows. The alias <code>b</code> names the temporary table.</p>",
    ),
    sec(
      "3. Subquery in SELECT",
      "<p>Used to add a column from an aggregate (SUM, COUNT, MIN, MAX, AVG). It <strong>must return a single value</strong>.</p>" +
        code(
          "SELECT DISTINCT branch AS 'Branch Name',\n  (SELECT MAX(quantity) FROM tbl_Sales) AS 'maximum stocks'\nFROM tbl_Sales AS a;",
        ) +
        "<p>If tbl_Sales has branches Manila (qty 20) and Cebu (qty 35):</p>" +
        tb(
          ["Branch Name", "maximum stocks"],
          [
            ["Manila", 35],
            ["Cebu", 35],
          ],
        ),
    ),
    sec(
      "Key Takeaways",
      ul([
        "WHERE = filter, FROM = temporary table, SELECT = extra column.",
        "A SELECT-clause subquery returns one value.",
      ]),
    ),
  ],
  [
    Q(
      "A subquery is:",
      ["A query inside a query", "A table", "A key", "A view only"],
      0,
      "It is a query nested in another.",
    ),
    Q(
      "The main query that contains a subquery is the:",
      ["Inner query", "Outer query", "Inline view", "Alias"],
      1,
      "The outer query wraps the subquery.",
    ),
    Q(
      "A subquery in the WHERE clause is also called a:",
      ["Inline view", "Nested query", "Outer query", "Join"],
      1,
      "Nested query.",
    ),
    Q(
      "A subquery in the FROM clause is called an:",
      ["Inline view", "Nested query", "Outer query", "Index"],
      0,
      "Inline view.",
    ),
    Q(
      "A FROM-clause subquery must have:",
      ["A WHERE", "An alias", "A key", "An aggregate"],
      1,
      "The alias names the temporary table.",
    ),
    Q(
      "A subquery in SELECT must return:",
      ["Many rows", "A single value", "A table", "Nothing"],
      1,
      "It adds one value as a column.",
    ),
    Q(
      "Which function is typical in a SELECT-clause subquery?",
      ["MAX", "JOIN", "ORDER", "GROUP"],
      0,
      "Aggregates like MAX return one value.",
    ),
    Q(
      "In the patient example, which patients appear in the output?",
      ["Cruz Ben only", "Reyes Ana and Lim Cara", "All three", "None"],
      1,
      "Only patients 1 and 3 have check-ups.",
    ),
    Q(
      "The WHERE subquery can often be rewritten as:",
      ["An INNER JOIN", "A DROP", "A LIMIT", "A view"],
      0,
      "An inner join gives the same rows.",
    ),
    Q(
      "IN (SELECT ...) tests whether a value:",
      [
        "Is NULL",
        "Is among the subquery results",
        "Is the largest",
        "Is unique",
      ],
      1,
      "IN checks membership.",
    ),
  ],
);

const T_ERD = topic(
  "erd",
  "Entity-Relationship Diagram (Material 14)",
  [
    sec(
      "Learning Objectives",
      ul([
        "Explain ERD and its components.",
        "Identify Chen notation symbols.",
        "Create an ERD step by step.",
      ]),
    ),
    sec(
      "What is an ERD?",
      "<p>A diagram showing the relationships of all entities in a database and its logical structure. Chen notation (Peter Chen, 1976): <strong>rectangle = entity, oval = attribute, diamond = relationship</strong>.</p>",
    ),
    sec(
      "Entity Types",
      tb(
        ["Type", "Meaning", "Example"],
        [
          ["Strong", "Exists alone; has a primary key", "Employee"],
          [
            "Weak",
            "Cannot exist without a strong entity; no primary key",
            "Dependents",
          ],
          [
            "Associative",
            "Relates instances of other entities using attributes",
            "Owned",
          ],
        ],
      ) +
        "<p>Entities can be a person (Employee), place (Store), object (Machine), event (Sale) or concept (Department).</p>",
    ),
    sec(
      "Attribute Types",
      tb(
        ["Type", "Meaning", "Example"],
        [
          ["Key", "Uniquely identifies a strong entity", "Employee ID"],
          [
            "Partial key (discriminator)",
            "Identifies a weak entity",
            "Position Num",
          ],
          ["Multivalued", "Can hold many values", "Hobby"],
          ["Derived", "Computed from other attributes", "Net Income"],
          [
            "Composite",
            "Can be divided into parts",
            "Address (City, Province, Country)",
          ],
        ],
      ),
    ),
    sec(
      "Relationships and Cardinality",
      "<p>Relationships use verbs (Student <em>Attends</em> Course) and can be mandatory or optional.</p>" +
        tb(
          ["Cardinality", "Example"],
          [
            ["1:1", "One department is managed by one employee"],
            ["1:N", "A customer buys many orders; an order has one customer"],
            ["N:1", "Many students enroll in one program"],
            [
              "M:N",
              "Students join many organizations; organizations have many students",
            ],
          ],
        ),
    ),
    sec(
      "5 Steps in Creating an ERD",
      tb(
        ["Step", "Example"],
        [
          ["1. Identify entities", "Student, Course, Professor"],
          [
            "2. Identify relationships",
            "Student Assigned Course; Professor Delivers Course",
          ],
          ["3. Identify cardinality", "M:N for both"],
          [
            "4. Identify attributes",
            "Student_ID, StudentName, Course_ID, CourseName, Employee_ID, ProfName",
          ],
          ["5. Create the modern ERD", "Draw it all together"],
        ],
      ) +
        code(
          "Student (M) --Assigned-- (N) Course (M) --Delivers-- (N) Professor",
        ) +
        "<p>Benefits: quick view of tables and columns, convertible to relational tables, a blueprint for developers.</p>",
    ),
    sec(
      "Key Takeaways",
      ul([
        "Entity = rectangle, Attribute = oval, Relationship = diamond.",
        "Strong has a key; weak has a partial key.",
      ]),
    ),
  ],
  [
    Q(
      "In Chen notation, an entity uses a:",
      ["Oval", "Diamond", "Rectangle", "Circle"],
      2,
      "Entities are rectangles.",
    ),
    Q(
      "A relationship is drawn as a:",
      ["Rectangle", "Oval", "Diamond", "Line only"],
      2,
      "Diamonds label relationships.",
    ),
    Q(
      "An attribute is drawn as an:",
      ["Oval", "Diamond", "Rectangle", "Arrow"],
      0,
      "Ovals show attributes.",
    ),
    Q(
      "An entity that cannot exist without another and has no primary key is:",
      ["Strong", "Weak", "Associative", "Derived"],
      1,
      "Weak entity.",
    ),
    Q(
      "The attribute that identifies a weak entity is the:",
      ["Key", "Partial key", "Derived", "Composite"],
      1,
      "Partial key (discriminator).",
    ),
    Q(
      "Hobby, which can have many values, is:",
      ["Derived", "Composite", "Multivalued", "Key"],
      2,
      "Multivalued attribute.",
    ),
    Q(
      "Net Income computed from Gross Income minus Deductions is:",
      ["Derived", "Composite", "Multivalued", "Key"],
      0,
      "Derived from other attributes.",
    ),
    Q(
      "Many students enroll in one program. The cardinality is:",
      ["1:1", "1:N", "N:1", "M:N"],
      2,
      "Many students to one program.",
    ),
    Q(
      "Students join many organizations and vice versa:",
      ["1:1", "1:N", "N:1", "M:N"],
      3,
      "Many-to-many.",
    ),
    Q(
      "What is step 3 of creating an ERD?",
      [
        "Identify entities",
        "Identify cardinality",
        "Identify attributes",
        "Create the modern ERD",
      ],
      1,
      "Order: entities, relationships, cardinality, attributes, ERD.",
    ),
  ],
);

const T_VIRT = topic(
  "virtue-natural-law",
  "Virtue Ethics and Natural Law (Weeks 13-14)",
  [
    sec(
      "Learning Objectives",
      ul([
        "Explain eudaimonia as Aristotle's ultimate goal.",
        "Explain how virtues build character.",
        "Compare eternal, natural and positive law.",
      ]),
    ),
    sec(
      "Virtue and Virtue Ethics",
      '<p><strong>Virtue</strong> is a morally good quality of a person (honesty, courage, compassion...), developed by learning and practice. <strong>Virtue ethics</strong> (Aristotle) holds that becoming a virtuous person is the key to a flourishing life (<strong>eudaimonia</strong>, "human flourishing"). It is <em>person-based</em>, not action-based.</p>' +
        tb(
          ["Compare", "Meaning"],
          [
            [
              "Ethics",
              "Decides which actions are right or wrong using principles or rules",
            ],
            [
              "Virtue ethics",
              "Focuses on developing virtuous character traits",
            ],
            ["Virtue", "Excellence; the highest standard of moral character"],
            [
              'Virtue ethics (as "excellence ethics")',
              "Stresses habitual excellence in behavior",
            ],
          ],
        ),
    ),
    sec(
      "Intellectual vs. Moral Virtue",
      tb(
        ["", "Intellectual virtue", "Moral virtue"],
        [
          [
            "Concerns",
            "Thinking and reason",
            "Relating reason to desires and emotions",
          ],
          [
            "Acquired by",
            "Learning, experience and time",
            "Good habits and constant practice",
          ],
          [
            "Result",
            "Understand, judge and reason well",
            "Morally sound choices",
          ],
        ],
      ) +
        "<p>Humans are not born moral or immoral. A baby is a <em>potential</em> person; the highest end (<strong>telos</strong>) is full self-development.</p>",
    ),
    sec(
      "Virtue as a Mean",
      '<p>Each virtue is a mean (balance) between two vices: an <strong>excess</strong> and a <strong>deficiency</strong>. "Mean" does not mean mediocre. Classic example (not in the slides): courage lies between cowardice (deficiency) and recklessness (excess).</p>',
    ),
    sec(
      "Natural Law (St. Thomas Aquinas)",
      '<p>Natural law is universal and unchanging, discoverable by reason: "Do good and avoid evil." Hierarchy: Divine/Eternal law, then Natural law, then Positive law.</p>' +
        tb(
          ["Law", "Meaning", "Example"],
          [
            [
              "Eternal",
              "God's unchanging order governing the universe",
              "Gravity, movement of planets",
            ],
            [
              "Natural",
              "Moral order humans know through reason",
              "Do good, avoid evil",
            ],
            [
              "Positive",
              "Made by human authority; varies by society",
              "Legislation, constitutions",
            ],
          ],
        ),
    ),
    sec(
      "Four Requisites of Law",
      ul([
        "An ordinance of <strong>reason</strong>",
        "For the <strong>common good</strong>",
        "<strong>Promulgated</strong> (publicly announced)",
        "Made by <strong>one having charge of the community</strong>",
      ]),
    ),
    sec(
      "Key Takeaways",
      ul([
        "Virtue ethics = character; ethics = rules.",
        "Virtue = mean between excess and deficiency.",
        "Eternal (universe), natural (reason), positive (human-made).",
      ]),
    ),
  ],
  [
    Q(
      "Eudaimonia is best translated as:",
      ["Wealth", "Human flourishing", "Pleasure", "Obedience"],
      1,
      "It means well-being or flourishing.",
    ),
    Q(
      "Virtue ethics focuses on:",
      ["Consequences", "Rules only", "Character of the person", "Laws"],
      2,
      "It is person-based.",
    ),
    Q(
      "Which excellence concerns thinking and reason?",
      ["Moral virtue", "Intellectual virtue", "Positive law", "Telos"],
      1,
      "Intellectual virtue.",
    ),
    Q(
      "Moral virtue is developed mainly through:",
      ["Birth", "Habit and practice", "Legislation", "Luck"],
      1,
      "Moral virtue is built by habit.",
    ),
    Q(
      "Aristotle's golden mean lies between:",
      ["Two rules", "An excess and a deficiency", "Two laws", "Two persons"],
      1,
      "Each virtue is between two vices.",
    ),
    Q(
      "The telos of a person is:",
      ["Wealth", "Full self-development", "Obeying laws", "Pleasure"],
      1,
      "The highest end is actualizing one's potential.",
    ),
    Q(
      "Which law governs gravity and planetary motion?",
      ["Positive", "Natural", "Eternal", "Civil"],
      2,
      "Eternal law controls the natural world.",
    ),
    Q(
      "Which law is enacted by a government?",
      ["Eternal", "Natural", "Positive", "Divine"],
      2,
      "Positive law is human-made.",
    ),
    Q(
      "The simple summary of natural law is:",
      [
        "Obey the ruler",
        "Do good and avoid evil",
        "Seek profit",
        "Follow custom",
      ],
      1,
      "That is the summary given.",
    ),
    Q(
      "Which is NOT one of the four requisites of law?",
      ["Reason", "Common good", "Popularity", "Promulgation"],
      2,
      "Popularity is not a requisite.",
    ),
  ],
);

const T_LOVE = topic(
  "love-justice",
  "Love and Justice Framework",
  [
    sec(
      "Learning Objectives",
      ul([
        "Define justice and fairness.",
        "Explain eros, philia and agape.",
        "Identify features of distributive justice.",
      ]),
    ),
    sec(
      "Three Kinds of Love",
      tb(
        ["Love", "Meaning", "Example"],
        [
          ["Eros", "Romantic love", "Partners in a new relationship"],
          [
            "Philia",
            "Affection between friends or family; non-sexual, reciprocal",
            "Close friends",
          ],
          [
            "Agape",
            "Selfless, global, compassionate love for all others",
            "Helping strangers in need",
          ],
        ],
      ),
    ),
    sec(
      "Compassion vs. Empathy",
      tb(
        ["Term", "Meaning"],
        [
          [
            "Compassion",
            "Awareness of others' suffering and a desire to relieve it",
          ],
          [
            "Empathy",
            "Putting yourself in another's shoes and feeling their perspective",
          ],
        ],
      ) +
        "<p>Ethical love gives a duty to care for the vulnerable, supports personal growth, extends to all beings, and builds healthy relationships.</p>",
    ),
    sec(
      "Justice vs. Fairness",
      tb(
        ["Justice", "Fairness"],
        [
          [
            "Giving each person what he or she deserves (his or her due)",
            "Judging without regard to one's own feelings or interests; specific to a case",
          ],
          [
            "Involves laws and policies that keep order and protect rights",
            "Seen in everyday interactions and in procedures",
          ],
        ],
      ) +
        ul([
          "Treat people equitably and consistently.",
          "Decide on proper criteria; no favoritism.",
          "Never punish people for what they did not do.",
          "Correct mistakes promptly; do not exploit others' ignorance.",
          "Consider all stakeholders impartially.",
        ]),
    ),
    sec(
      "Distributive Justice",
      "<p>The fair allocation of resources and benefits (wealth, opportunities, goods) in society. Features:</p>" +
        ul([
          "<strong>Egalitarianism:</strong> belief in human equality and equal treatment.",
          "<strong>Taxation:</strong> funds public goods such as education, healthcare and infrastructure.",
          "<strong>Protection of public welfare:</strong> policies that safeguard well-being and quality of life.",
        ]),
    ),
    sec(
      "Key Takeaways",
      ul([
        "Eros = romantic, philia = friends/family, agape = universal.",
        "Compassion acts to relieve suffering; empathy shares feelings.",
        "Justice = what is due; fairness = impartial judgment.",
      ]),
    ),
  ],
  [
    Q(
      "Which love is romantic?",
      ["Eros", "Philia", "Agape", "Telos"],
      0,
      "Eros.",
    ),
    Q(
      "Friendship and family affection is:",
      ["Eros", "Philia", "Agape", "Mean"],
      1,
      "Philia.",
    ),
    Q(
      "Selfless love for all people is:",
      ["Eros", "Philia", "Agape", "Justice"],
      2,
      "Agape.",
    ),
    Q(
      "Putting yourself in another's shoes is:",
      ["Compassion", "Empathy", "Fairness", "Egalitarianism"],
      1,
      "Empathy.",
    ),
    Q(
      "A desire to relieve others' suffering is:",
      ["Compassion", "Empathy", "Eros", "Taxation"],
      0,
      "Compassion.",
    ),
    Q(
      "Giving each person what he or she deserves is:",
      ["Fairness", "Justice", "Philia", "Welfare"],
      1,
      "Justice means giving one's due.",
    ),
    Q(
      "Judging without regard to one's own interests is closest to:",
      ["Fairness", "Eros", "Taxation", "Agape"],
      0,
      "Fairness.",
    ),
    Q(
      "Distributive justice concerns:",
      [
        "Fair allocation of resources",
        "Romantic love",
        "Virtue",
        "Eternal law",
      ],
      0,
      "It is about fair distribution.",
    ),
    Q(
      "Belief in human equality is:",
      ["Egalitarianism", "Philia", "Telos", "Promulgation"],
      0,
      "Egalitarianism.",
    ),
    Q(
      "Taxes help distributive justice by:",
      [
        "Funding public goods and services",
        "Punishing people",
        "Replacing laws",
        "Creating love",
      ],
      0,
      "They fund services like education and healthcare.",
    ),
  ],
);

SUBJECTS[2] = {
  code: "CCS110",
  title: "Information Management 1",
  topics: [T_JOIN, T_NORM, T_SUB, T_ERD],
  desc: "Lessons and 10-question quizzes for CCS110.",
};
SUBJECTS[3] = {
  code: "ETH101",
  title: "Ethics",
  topics: [T_VIRT, T_LOVE],
  desc: "Lessons and 10-question quizzes for ETH101.",
};
