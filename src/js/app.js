new Moon({
  el: '#app',
  data: {
    msg: '',
    arr: [],
    filter: 'all',
  },
  methods: {
  	addTodo: function() {
  		const newArr = this.get('arr');
      newArr.push({
        text: this.get('msg'),
        completed: false
      });
  		this.set('arr', newArr);
  		this.set('msg', '');
  	},

    deleteTodo: function(idx) {
      this.set('arr', this.get('arr').filter((el, i) => i != idx));
    },

    completeTodo: function(idx) {
      this.set('arr', this.get('arr').map((el, i) =>
        i === idx ? {text: el.text, completed: !el.completed} : el
      ));
    },

    setFilter: function(filter) {
      this.set('filter', filter);
    },

    getDisplayed: function() {
      const filter = this.get('filter');
      const arr = this.get('arr');
      return filter === 'all' ? arr : arr.filter(el => el.completed === (filter === 'completed'));
    }
  }
});
