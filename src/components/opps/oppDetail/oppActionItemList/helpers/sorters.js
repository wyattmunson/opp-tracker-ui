export const filterAndSortCompletedItems = (actionItems) => {
  // get completed and uncompleted arrays
  const completedItems = actionItems.filter((i) => {
    return i.completed;
  });
  const uncompletedItems = actionItems.filter((i) => {
    return !i.completed;
  });

  // sort arrays
  completedItems.sort((a, b) => a.dueDate < b.dueDate);
  // reverse sort uncompleted items
  uncompletedItems.sort((a, b) => a.dueDate > b.dueDate);

  return [...uncompletedItems, ...completedItems];
};
