// Observer Design Pattern

export const observerMixin = {
  observers: new Set(),
  addObserver(obs) {
    this.observers.add(obs);
  },
  removeObserve(obs) {
    this.observers.delete(obs);
  },
  notify() {
    this.observers.forEach((obs) => obs());
  },
};
