// Create Gameboard --> Module
const gameboard = (() => {
  board = ["", "", "", "", "", "", "", "", ""];
})();

// Create players --> Factory
const Players = (name, marker) => {
  const getName = () => name;
  const getMarker = () => marker;

  return { getName, getMarker };
};
