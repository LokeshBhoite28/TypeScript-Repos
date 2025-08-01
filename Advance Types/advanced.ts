const dataEntries: Record<string, number> = {
  entry1: 0.51,
  entry2: -1.23,
};

dataEntries.entry3 // allowed


const dataEntriesSatisfied = {
  entry1: 0.51,
  entry2: -1.23,
} satisfies Record<string, number>;

// dataEntriesSatisfied.entry3 // not allowed
