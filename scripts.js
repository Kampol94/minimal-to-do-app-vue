const SelfServiceMachine = {
    data() {
        return {
            newItem: {},
            items: [
                {
                    name: "1",
                    isDone: true
                },
                {
                    name: "11",
                    isDone: false
                },
                {
                    name: "111",
                    isDone: false
                }
            ]
        }
    },
    methods: {
        toggleDone: function(item){
            item.isDone = !item.isDone;
        },
        clear: function(){
            this.items = []
        },
        addItem: function() {
            this.newItem.isDone = false;
            this.items.push(this.newItem);
            this.newItem = {}
        }
    }
};

Vue.createApp(SelfServiceMachine).mount('#app');
