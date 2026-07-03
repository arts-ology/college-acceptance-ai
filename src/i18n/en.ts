import type { Translations } from "./types";

export const en: Translations = {
  appTitle: "Acceptance AI",
  appSubtitle: "AI Expert Research Assistant",

  welcomeTitle: "What would you like to research?",
  welcomeSubtitle:
    "Ask a question and a team of expert researchers will search, analyze, and summarize the answer for you.",
  presetQuestions: [],

  inputPlaceholder: "Enter your research question…",
  sendButton: "Send",
  stopButton: "Stop",
  newChatButton: "Home",

  phaseIdle: "Ready",
  phasePlanning: "Analyzing",
  phaseResearching: "Researching",
  phaseSynthesizing: "Synthesizing",
  phaseComplete: "Research Complete",

  specialistAgents: "Researchers",
  completed: "completed",
  taskPending: "Preparing research…",
  taskSummarizing: "Research done, writing summary…",
  taskCancelled: "Cancelled",
  noContentYet: "Waiting for research results…",
  synthesizingResults: "Synthesizing research findings…",
  researchStopped: "Research stopped",

  you: "You",
  coordinator: "Lead Researcher",

  recentConversations: "Recent Conversations",
  loadingHistory: "Loading conversation...",
  deleteConversation: "Delete",

  loadHistoryEmpty: "This conversation has no history",
  loadHistoryFailed: "Failed to load conversation history",
};
