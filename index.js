var list = [{
    title:"吃饭",
    checked: false
},
{
    title:"睡觉",
    checked: false
},{
    title:"打豆豆",
     checked:false
}]

 new Vue ({
     el:".main",
     data:{
         list,
         todo:'',
         editedTodo:''
     },
     computed:{
           filterList: function (){
               return this.list.filter(function(item){return !item.checked}).length
           }
     },
         methods:{
            filterList1:function(){
                return this.list.filter(function(item){return !item.checked}).length
            },
            keyup(e){
                // if(e.which === 13){
                //     this.list.push({
                //         title:e.target.value,
                //         checked:false
                //     })
                //     e.target.value = ""
                 this.list.push({
                     title:this.todo,
                     checked:false
                 })
                 this.todo = ''
                }, 
         
            deleteTodo(todo){
               console.log(todo)
               let index = this.list.indexOf(todo)
               this.list.splice(index,1)
            },
            editingTodo(todo){
                console.log(todo)
                this.editedTodo = todo

            }
            
           } 
     
})