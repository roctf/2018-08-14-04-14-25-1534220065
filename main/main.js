module.exports = function main() {
    var a=[];
	a[0] = ["._.","|.|","|_|"];
	a[1] = ["...","..|","..|"];
	a[2] = ["._.","._|","|_."];
	a[3] = ["._.","._|","._|"];
	a[4] = ["...","|_|","..|"];
	a[5] = ["._.","|_.","._|"];
	a[6] = ["._.","|_.","|_|"];
	a[7] = ["._.","..|","..|"];
	a[8] = ["._.","|_|","|_|"];
	a[9] = ["._.","|_|","..|"];
	b = arguments[0].split('').map(x => x -'0');
	var arr = [];
	var ara = [];
	var arb = [];
	var arc = [];
	for(var j=0; j<b.length; j++){
		ara.push(a[b[j]][0]);
	}
	for(var j=0; j<b.length; j++){
		arb.push(a[b[j]][1]);
	}
	for(var j=0; j<b.length; j++){
		arc.push(a[b[j]][2]);
	}
	ara = ara.join(' ');ara=[ara,'\n'];ara = ara.join('');
	arb = arb.join(' ');arb=[arb,'\n'];arb = arb.join('');
	arc = arc.join(' ');arc=[arc,'\n'];arc = arc.join('');
	arr = arr.concat(ara,arb,arc);arr = arr.join('');
	return arr;
};