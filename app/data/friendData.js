// ===============================================================================
// DATA
// Below data will hold all of the reserved tables.
// Initially we just set it equal to a "dummy" customer.
// But you could have it be an empty array as well.
// ===============================================================================

var friendArray = [
  {
    name: "Noah Johnson",
    photo:
      "https://images.unsplash.com/photo-1573829605534-57d4ceb55f62?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80",
    scores: [3, 4, 3, 3, 4, 4, 4, 1, 5, 3]
  },
  {
    name: "Billy Williams",
    photo:
      "https://images.unsplash.com/photo-1569443693539-175ea9f007e8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=910&q=80",
    scores: [2, 2, 2, 2, 2, 2, 2, 2, 2, 2]
  },
  {
    name: "John Wright",
    photo:
      "https://images.unsplash.com/photo-1568235174352-d8d854c94b9a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=907&q=80",
    scores: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
  },
  {
    name: "Talisha Wilson",
    photo:
      "https://images.unsplash.com/photo-1569528639514-a6e596d8f0ba?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=909&q=80",
    scores: [3, 3, 3, 3, 3, 3, 3, 3, 3, 3]
  },
  {
    name: "Fei Nguyen",
    photo:
      "https://images.unsplash.com/photo-1574392022138-a7d369a6ada3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80",
    scores: [5, 4, 4, 4, 4, 3, 2, 1, 5, 5]
  },
  {
    name: "Mia Wallace",
    photo:
      "https://images.unsplash.com/photo-1571237129746-c78963372046?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1301&q=80",
    scores: [2, 4, 2, 4, 2, 3, 4, 4, 4, 3]
  },
  {
    name: "Lailah Cartwright",
    photo:
      "https://images.unsplash.com/photo-1557002665-c552e1832483?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80",
    scores: [5, 4, 5, 4, 5, 3, 3, 3, 2, 4]
  }
];

// Note how we export the array. This makes it accessible to other files using require.
module.exports = friendArray;
