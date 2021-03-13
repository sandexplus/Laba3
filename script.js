  //Калькулятор

var vue = new Vue({
  el: '#app',
  data: {
    result: '',
    numbers: [1,2,3,4,5,6,7,8,9,0],
    operations: ['+','-','*','/'],
  },
  methods: {
    input: function(char) {
      this.result = this.result.toString();
      this.result+=char;
    },
    reset: function() {
      this.result = '';
    },
    calc: function() {
      this.result = eval(this.result);
    }
  }
})


//Список задач

Vue.component('task',{
  props: ['data'],
  data() {
    return {
    }
  },
  methods: {
    task_done(){
      this.$emit('task_done')
    }
  },
  template: `
  <div class="task">
    <button class="task__delete" @click="task_done()">❌</button>
    <h3 class="task__title">{{data.title}}</h3>
  </div>`
})

var vue = new Vue({
  el: '#todo',
  data: {
    string: 'asdasda',
    new_task: {
      title: '',
    },
    tasks : []
  },
  methods: {
    add_task(){
      if(this.new_task.title != ''){
        this.tasks.push({
          title: this.new_task.title,
        });
        this.new_task.title='';
      }
    },
    delete_task(id){
      this.tasks.splice(id,1);
    }
  }
})
