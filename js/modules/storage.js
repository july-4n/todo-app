const getStorage = (key) => JSON.parse(localStorage.getItem(key)) || [];

const setStorage = (key, data) => {
  localStorage.setItem(key, JSON.stringify(data));
};

const removeStorage = (taskId, key) => {
  const data = getStorage(key);
  data.splice(data.filter(item => item.id !== taskId), 1);
  setStorage(key, data);
};

const editStorage = (key, taskId, done, text) => {
  const data = getStorage(key);
  const index = data.findIndex(item => item.id === taskId);
  data[index][done] = text;
  setStorage(key, data);
};

const addTaskStorage = (task, key) => {
  const data = getStorage(key);
  data.push(task);
  setStorage(key, data);
};

export {
  getStorage,
  setStorage,
  removeStorage,
  addTaskStorage,
  editStorage,
};
