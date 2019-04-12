new Vue({el: '#app', data: {message: "ma premiere vue", message2:"Nous sommes à la date"+new Date().toLocaleString()}});
new Vue({
	el: "#app-5", 
	data:{ 
		message:"10", 
		text:"mon texte à traiter pour Juliette"
	}, 
	methods:{
		doSome:function () {
			res=calcule(this.message, this.text),
			this.message=res[0],
			this.text=res[1]
		}
	}
});
new Vue({el: '#forControl', data:{ todos: [ {text:"learn power of javascript"}, {text: "learn framexorks"}, {text:"learn Vue framexork"}, {text:"learn loopback nodeservice"}]}});

new Vue({
	el:"#v-control", 
	data:{
		message:"texte à controller au traverws des directives",
		seen:true,
		control:"message1"
	},
	methods:{

	}
});

function calcule(arg, txt) {
	arg+=arg;
	ret=["le nouveau message est: "+txt+" ", arg];
	console.log(ret[0]+ret[1]);
	return ret;
}

Vue.component(
	'todo-item', {
		props: ["todo"],
		template:"<li>{{todo.text}}</li>"
	}
);

new Vue({
	el:"#component",
	data:{
		taskList:[
			{id:"0", text:"première tache a efectuer"}, 
			{id:"1", text:"seconde tache a efectuer"},
			{id:"2", text:"troisieme tache a effectuer"},
			{id:"3", text:"quatrieme tache a efectuer"}
		],
		title:"liste des taches a effectuer"
	}
});