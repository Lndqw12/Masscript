a = new Array(
{"attr1":"text1","attr2":"text2"},
{"attr1":"text3","attr2":"text4"}
);
document.write ( a[0].attr1 );
document.write('<br>');
document.write ( a[1].attr2 );



var arr = ['zero','uno','due','tre'];
arr = arr.map(function(value, index, array){
    return function(){
		document.write('<br>');
		document.write("Вконсоле");
        console.log(index+': '+value);
    };
});
arr.forEach(function(fn){
    fn();
});

var arr =
	['a9','Махачкала','Падагра'];
arr = arr.map(function(value, index, array){
    return function(){
		document.write('<br>');
        document.write(array+': '+index+': '+value);
    };
});
arr.forEach(function(fn){
    fn();
});