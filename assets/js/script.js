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


function calcule(arg, txt) {
	arg+=arg;
	ret=["le nouveau message est: "+txt+" ", arg];
	console.log(ret[0]+ret[1]);
	return ret;
}