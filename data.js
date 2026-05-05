const questionBank = [
  {
    id: 1,
    chapter: 1,
    topic: "System Concepts",
    difficulty: "easy",
    type: "mcq",
    question: "A system is:",
    options: ["Random components", "Organized components working together", "Only software", "Only hardware"],
    answer: "Organized components working together"
  },
  {
    id: 2,
    chapter: 1,
    topic: "System Concepts",
    difficulty: "easy",
    type: "mcq",
    question: "Which is NOT a system component?",
    options: ["Input", "Output", "Profit", "Process"],
    answer: "Profit"
  },
  {
    id: 3,
    chapter: 1,
    topic: "System Components",
    difficulty: "easy",
    type: "mcq",
    question: "Inputs are:",
    options: ["Results", "Raw materials/data", "Feedback", "Control"],
    answer: "Raw materials/data"
  },
  {
    id: 4,
    chapter: 1,
    topic: "System Components",
    difficulty: "easy",
    type: "mcq",
    question: "Outputs are:",
    options: ["Raw data", "Process steps", "Final results", "Feedback"],
    answer: "Final results"
  },
  {
    id: 5,
    chapter: 1,
    topic: "System Components",
    difficulty: "easy",
    type: "mcq",
    question: "Feedback helps to:",
    options: ["Replace inputs", "Improve system performance", "Stop processes", "Remove outputs"],
    answer: "Improve system performance"
  },
  {
    id: 6,
    chapter: 1,
    topic: "System Components",
    difficulty: "easy",
    type: "mcq",
    question: "Control ensures:",
    options: ["Random results", "System operates correctly", "No outputs", "No inputs"],
    answer: "System operates correctly"
  },
  {
    id: 7,
    chapter: 1,
    topic: "System Concepts",
    difficulty: "easy",
    type: "mcq",
    question: "Environment refers to:",
    options: ["Internal system", "External factors affecting system", "Data only", "Hardware"],
    answer: "External factors affecting system"
  },
  {
    id: 8,
    chapter: 1,
    topic: "System Concepts",
    difficulty: "easy",
    type: "mcq",
    question: "Boundaries define:",
    options: ["Inputs", "System limits", "Outputs", "Feedback"],
    answer: "System limits"
  },
  {
    id: 9,
    chapter: 1,
    topic: "Types of Systems",
    difficulty: "easy",
    type: "mcq",
    question: "Open systems:",
    options: ["Do not interact externally", "Interact with environment", "Are closed", "Have no outputs"],
    answer: "Interact with environment"
  },
  {
    id: 10,
    chapter: 1,
    topic: "Types of Systems",
    difficulty: "easy",
    type: "mcq",
    question: "Closed systems:",
    options: ["Interact externally", "Are independent", "Are always online", "Use internet"],
    answer: "Are independent"
  },
  {
    id: 11,
    chapter: 1,
    topic: "Information Systems",
    difficulty: "easy",
    type: "mcq",
    question: "Information systems are used to:",
    options: ["Entertain", "Process and manage data", "Replace humans", "Remove data"],
    answer: "Process and manage data"
  },
  {
    id: 12,
    chapter: 1,
    topic: "Information Systems",
    difficulty: "easy",
    type: "mcq",
    question: "Hardware refers to:",
    options: ["Programs", "Physical devices", "Data", "Processes"],
    answer: "Physical devices"
  },
  {
    id: 13,
    chapter: 1,
    topic: "Information Systems",
    difficulty: "easy",
    type: "mcq",
    question: "Software refers to:",
    options: ["Machines", "Programs and applications", "People", "Data"],
    answer: "Programs and applications"
  },
  {
    id: 14,
    chapter: 1,
    topic: "Information Systems",
    difficulty: "easy",
    type: "mcq",
    question: "Data is:",
    options: ["Processed info", "Raw facts", "Output", "Feedback"],
    answer: "Raw facts"
  },
  {
    id: 15,
    chapter: 1,
    topic: "Information Systems",
    difficulty: "easy",
    type: "mcq",
    question: "People in IS include:",
    options: ["Only managers", "Only developers", "Users and IT staff", "Machines"],
    answer: "Users and IT staff"
  },
  {
    id: 16,
    chapter: 1,
    topic: "Information Systems",
    difficulty: "easy",
    type: "mcq",
    question: "Networks enable:",
    options: ["Storage", "Communication", "Processing", "Input"],
    answer: "Communication"
  },
  {
    id: 17,
    chapter: 1,
    topic: "SDLC",
    difficulty: "medium",
    type: "mcq",
    question: "SDLC is:",
    options: ["Random process", "Structured system development approach", "Testing method", "Coding technique"],
    answer: "Structured system development approach"
  },
  {
    id: 18,
    chapter: 1,
    topic: "SDLC",
    difficulty: "medium",
    type: "mcq",
    question: "First SDLC phase:",
    options: ["Design", "Planning", "Testing", "Deployment"],
    answer: "Planning"
  },
  {
    id: 19,
    chapter: 1,
    topic: "SDLC",
    difficulty: "medium",
    type: "mcq",
    question: "Analysis phase focuses on:",
    options: ["Coding", "Requirements gathering", "Deployment", "Maintenance"],
    answer: "Requirements gathering"
  },
  {
    id: 20,
    chapter: 1,
    topic: "SDLC",
    difficulty: "medium",
    type: "mcq",
    question: "Design phase produces:",
    options: ["Code", "System blueprint", "Reports", "Testing results"],
    answer: "System blueprint"
  },
  {
    id: 21,
    chapter: 1,
    topic: "SDLC",
    difficulty: "medium",
    type: "mcq",
    question: "Implementation phase:",
    options: ["Tests system", "Builds system", "Deploys system", "Deletes system"],
    answer: "Builds system"
  },
  {
    id: 22,
    chapter: 1,
    topic: "SDLC",
    difficulty: "medium",
    type: "mcq",
    question: "Testing phase ensures:",
    options: ["Design", "No defects", "Coding", "Planning"],
    answer: "No defects"
  },
  {
    id: 23,
    chapter: 1,
    topic: "SDLC",
    difficulty: "medium",
    type: "mcq",
    question: "Deployment means:",
    options: ["Coding", "Delivering system to users", "Testing", "Designing"],
    answer: "Delivering system to users"
  },
  {
    id: 24,
    chapter: 1,
    topic: "SDLC",
    difficulty: "medium",
    type: "mcq",
    question: "Maintenance includes:",
    options: ["Building", "Fixing and updating", "Planning", "Designing"],
    answer: "Fixing and updating"
  },
  {
    id: 25,
    chapter: 1,
    topic: "SDLC Models",
    difficulty: "hard",
    type: "mcq",
    question: "Waterfall model is:",
    options: ["Flexible", "Linear and sequential", "Random", "Iterative"],
    answer: "Linear and sequential"
  },
  {
    id: 26,
    chapter: 1,
    topic: "SDLC Models",
    difficulty: "hard",
    type: "mcq",
    question: "Agile model emphasizes:",
    options: ["Rigidity", "Flexibility and feedback", "No changes", "Linear process"],
    answer: "Flexibility and feedback"
  },
  {
    id: 27,
    chapter: 1,
    topic: "SDLC Models",
    difficulty: "hard",
    type: "mcq",
    question: "Iterative model:",
    options: ["One-time process", "Repeated cycles", "No feedback", "Fixed steps"],
    answer: "Repeated cycles"
  },
  {
    id: 28,
    chapter: 1,
    topic: "SDLC Models",
    difficulty: "hard",
    type: "mcq",
    question: "Spiral model focuses on:",
    options: ["Speed", "Risk analysis", "Cost only", "Output"],
    answer: "Risk analysis"
  },
  {
    id: 29,
    chapter: 1,
    topic: "SDLC Models",
    difficulty: "hard",
    type: "mcq",
    question: "DevOps integrates:",
    options: ["Design & Testing", "Development & Operations", "Input & Output", "Data & Hardware"],
    answer: "Development & Operations"
  },
  {
    id: 30,
    chapter: 1,
    topic: "System Analyst",
    difficulty: "hard",
    type: "mcq",
    question: "System analyst acts as:",
    options: ["Programmer only", "Bridge between business and tech", "Tester only", "Manager only"],
    answer: "Bridge between business and tech"
  },
  {
    id: 31,
    chapter: 2,
    topic: "Requirements Gathering",
    difficulty: "easy",
    type: "mcq",
    question: "Requirements gathering is:",
    options: ["Coding", "Understanding stakeholder needs", "Testing", "Deployment"],
    answer: "Understanding stakeholder needs"
  },
  {
    id: 32,
    chapter: 2,
    topic: "Requirements Gathering",
    difficulty: "easy",
    type: "mcq",
    question: "Stakeholders are:",
    options: ["Only developers", "People affected by system", "Machines", "Data"],
    answer: "People affected by system"
  },
  {
    id: 33,
    chapter: 2,
    topic: "Requirements Gathering",
    difficulty: "easy",
    type: "mcq",
    question: "Main goal of requirements gathering:",
    options: ["Coding", "Meet user needs", "Testing", "Deployment"],
    answer: "Meet user needs"
  },
  {
    id: 34,
    chapter: 2,
    topic: "Elicitation Techniques",
    difficulty: "easy",
    type: "mcq",
    question: "Interviews involve:",
    options: ["Written forms", "Direct interaction", "Coding", "Testing"],
    answer: "Direct interaction"
  },
  {
    id: 35,
    chapter: 2,
    topic: "Elicitation Techniques",
    difficulty: "easy",
    type: "mcq",
    question: "Questionnaires are:",
    options: ["Verbal", "Written questions", "Code", "Diagrams"],
    answer: "Written questions"
  },
  {
    id: 36,
    chapter: 2,
    topic: "Elicitation Techniques",
    difficulty: "easy",
    type: "mcq",
    question: "Workshops involve:",
    options: ["Individual work", "Group collaboration", "Coding", "Testing"],
    answer: "Group collaboration"
  },
  {
    id: 37,
    chapter: 2,
    topic: "Elicitation Techniques",
    difficulty: "easy",
    type: "mcq",
    question: "Observation means:",
    options: ["Asking questions", "Watching users", "Coding", "Writing reports"],
    answer: "Watching users"
  },
  {
    id: 38,
    chapter: 2,
    topic: "Elicitation Techniques",
    difficulty: "easy",
    type: "mcq",
    question: "Document analysis involves:",
    options: ["Coding", "Reviewing existing documents", "Testing", "Designing"],
    answer: "Reviewing existing documents"
  },
  {
    id: 39,
    chapter: 2,
    topic: "Technique Evaluation",
    difficulty: "medium",
    type: "mcq",
    question: "Interviews advantage:",
    options: ["Cheap", "Detailed information", "Fast", "No bias"],
    answer: "Detailed information"
  },
  {
    id: 40,
    chapter: 2,
    topic: "Technique Evaluation",
    difficulty: "medium",
    type: "mcq",
    question: "Interviews disadvantage:",
    options: ["Cheap", "Time-consuming", "Easy", "Quick"],
    answer: "Time-consuming"
  },
  {
    id: 41,
    chapter: 2,
    topic: "Technique Evaluation",
    difficulty: "medium",
    type: "mcq",
    question: "Questionnaire advantage:",
    options: ["Detailed", "Reach many people", "Slow", "Expensive"],
    answer: "Reach many people"
  },
  {
    id: 42,
    chapter: 2,
    topic: "Technique Evaluation",
    difficulty: "medium",
    type: "mcq",
    question: "Questionnaire disadvantage:",
    options: ["Fast", "Limited depth", "Cheap", "Easy"],
    answer: "Limited depth"
  },
  {
    id: 43,
    chapter: 2,
    topic: "Technique Evaluation",
    difficulty: "medium",
    type: "mcq",
    question: "Workshops advantage:",
    options: ["Slow", "Collaboration", "Expensive", "Limited ideas"],
    answer: "Collaboration"
  },
  {
    id: 44,
    chapter: 2,
    topic: "Technique Evaluation",
    difficulty: "medium",
    type: "mcq",
    question: "Workshops disadvantage:",
    options: ["Easy", "Hard to manage", "Fast", "Cheap"],
    answer: "Hard to manage"
  },
  {
    id: 45,
    chapter: 2,
    topic: "Requirement Types",
    difficulty: "medium",
    type: "mcq",
    question: "Functional requirements describe:",
    options: ["System behavior", "Cost", "Speed", "Size"],
    answer: "System behavior"
  },
  {
    id: 46,
    chapter: 2,
    topic: "Requirement Types",
    difficulty: "medium",
    type: "mcq",
    question: "Non-functional requirements describe:",
    options: ["Features", "Performance and constraints", "Inputs", "Outputs"],
    answer: "Performance and constraints"
  },
  {
    id: 47,
    chapter: 2,
    topic: "Requirements Analysis",
    difficulty: "medium",
    type: "mcq",
    question: "Requirement analysis is:",
    options: ["Coding", "Studying requirements", "Testing", "Deployment"],
    answer: "Studying requirements"
  },
  {
    id: 48,
    chapter: 2,
    topic: "Requirements Analysis",
    difficulty: "medium",
    type: "mcq",
    question: "Requirements documentation:",
    options: ["Coding", "Recording requirements", "Testing", "Deployment"],
    answer: "Recording requirements"
  },
  {
    id: 49,
    chapter: 2,
    topic: "Requirements Analysis",
    difficulty: "hard",
    type: "mcq",
    question: "Validation ensures:",
    options: ["Coding", "Correct requirements", "Testing", "Deployment"],
    answer: "Correct requirements"
  },
  {
    id: 50,
    chapter: 2,
    topic: "Requirements Analysis",
    difficulty: "hard",
    type: "mcq",
    question: "Prioritization means:",
    options: ["Ignoring", "Ranking importance", "Coding", "Testing"],
    answer: "Ranking importance"
  },
  {
    id: 51,
    chapter: 2,
    topic: "Requirements Analysis",
    difficulty: "hard",
    type: "mcq",
    question: "Traceability ensures:",
    options: ["Coding", "Tracking requirements", "Testing", "Deployment"],
    answer: "Tracking requirements"
  },
  {
    id: 52,
    chapter: 2,
    topic: "Practical Examples",
    difficulty: "hard",
    type: "mcq",
    question: "CRM example focuses on:",
    options: ["Hardware", "Customer management", "Coding", "Testing"],
    answer: "Customer management"
  },
  {
    id: 53,
    chapter: 2,
    topic: "Practical Examples",
    difficulty: "hard",
    type: "mcq",
    question: "E-commerce improvement focuses on:",
    options: ["Speed only", "User experience", "Coding", "Testing"],
    answer: "User experience"
  },
  {
    id: 54,
    chapter: 2,
    topic: "Elicitation Techniques",
    difficulty: "medium",
    type: "mcq",
    question: "Surveys are used to:",
    options: ["Code", "Collect feedback", "Test", "Deploy"],
    answer: "Collect feedback"
  },
  {
    id: 55,
    chapter: 2,
    topic: "Elicitation Techniques",
    difficulty: "medium",
    type: "mcq",
    question: "Focus groups are:",
    options: ["Individual", "Group discussions", "Coding", "Testing"],
    answer: "Group discussions"
  },
  {
    id: 56,
    chapter: 2,
    topic: "Elicitation Techniques",
    difficulty: "medium",
    type: "mcq",
    question: "Shadowing means:",
    options: ["Coding", "Observing users", "Testing", "Deploying"],
    answer: "Observing users"
  },
  {
    id: 57,
    chapter: 2,
    topic: "Requirement Types",
    difficulty: "hard",
    type: "mcq",
    question: "Functional requirement example:",
    options: ["Login system", "Speed", "Security", "Availability"],
    answer: "Login system"
  },
  {
    id: 58,
    chapter: 2,
    topic: "Requirement Types",
    difficulty: "hard",
    type: "mcq",
    question: "Non-functional example:",
    options: ["Checkout feature", "System speed", "Login", "Search"],
    answer: "System speed"
  },
  {
    id: 59,
    chapter: 2,
    topic: "Requirements Analysis",
    difficulty: "hard",
    type: "mcq",
    question: "Requirements phase belongs to:",
    options: ["Testing", "Analysis", "Deployment", "Maintenance"],
    answer: "Analysis"
  },
  {
    id: 60,
    chapter: 2,
    topic: "Requirements Analysis",
    difficulty: "hard",
    type: "mcq",
    question: "Poor requirements lead to:",
    options: ["Success", "System failure", "Speed", "Accuracy"],
    answer: "System failure"
  }
];
