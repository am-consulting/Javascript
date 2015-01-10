<!-- //全変数グローバル扱いであることに留意.
function getConditions(){//要parseFloat処理.
	estate01=parseFloat(document.form1.estate01.value);
	estate02=parseFloat(document.form1.estate02.value);
	estate03=parseFloat(document.form1.estate03.value);
	debtetc01=parseFloat(document.form1.debtetc01.value);
	if(isNaN(estate01) || estate01<=0){estate01=0;}
	if(isNaN(estate02) || estate02<=0){estate02=0;}
	if(isNaN(estate03) || estate03<=0){estate03=0;}
	if(isNaN(debtetc01) || debtetc01<=0){debtetc01=0;}
}

function roundOff(){
	tmp=Math.round(Math.floor(tmp*Math.pow(10,7))/10)/Math.pow(10,6);
	tmp=Math.round(Math.floor(tmp*1000)/10)/100;
}

function calcInheritanceTax_scenario_alpha01(){
	calType=1;
	heritage=(estate01+estate02)-debtetc01;
	netHeritage=heritage+estate03;
	basicDeduction=30000000+6000000*3;
	taxedHeritage=netHeritage-basicDeduction;
	if(taxedHeritage<0){taxedHeritage=0;}
	wife=Math.ceil(taxedHeritage/2);
	child1=Math.ceil((taxedHeritage-wife)/2);
	child2=taxedHeritage-wife-child1;
	buf=wife;
	calTax();
	taxwife=tax;
	taxwife=0;//配偶者控除
	buf=child1;
	calTax();
	taxchild1=tax;
	buf=child2;
	calTax();
	taxchild2=tax;
	totalTax=taxwife+taxchild1+taxchild2;
}	

function calcInheritanceTax_scenario_alpha02(){
	calType=2;
	totalHeritage=wife+basicDeduction/2;
	heritage=wife-debtetc01+basicDeduction/2;
	netHeritage=heritage;
	basicDeduction=30000000+6000000*2;
	taxedHeritage=netHeritage-basicDeduction;
	if(taxedHeritage<0){taxedHeritage=0;}
	child1=Math.ceil(taxedHeritage/2);
	child2=taxedHeritage-child1;
	buf=child1;
	calTax();
	taxchild1=tax;
	buf=child2;
	calTax();
	taxchild2=tax;
	totalTax=totalTax+taxchild1+taxchild2;
}	

function calTax(){
	if(buf<=Math.pow(10,7)){
		rate=10;
		deduction=0;
	}else
	if(buf<=3*Math.pow(10,7)){
		rate=15;
		deduction=500000;
	}else
	if(buf<=5*Math.pow(10,7)){
		rate=20;
		deduction=2*Math.pow(10,6);
	}else
	if(buf<=1*Math.pow(10,8)){
		rate=30;
		deduction=7*Math.pow(10,6);
	}else
	if(buf<=2*Math.pow(10,8)){
		rate=40;
		deduction=1.7*Math.pow(10,7);
	}else
	if(buf<=3*Math.pow(10,8)){
		rate=45;
		deduction=2.7*Math.pow(10,7);
	}else
	if(buf<=6*Math.pow(10,8)){
		rate=50;
		deduction=4.2*Math.pow(10,7);
	}else{
		rate=55;
		deduction=7.2*Math.pow(10,7);
	}
	tax=buf*rate/100-deduction;
}

function calculation(){ 
	number=new Array();
	number[1]=estate01;
	number[2]=estate02;
	number[3]=estate03;
	number[4]=debtetc01;
	number[5]=heritage;
	number[6]=netHeritage;
	number[7]=basicDeduction;
	number[8]=taxedHeritage;
	number[9]=wife;
	number[10]=child1;
	number[11]=child2;
	number[12]=taxwife;
	number[13]=taxchild1;
	number[14]=taxchild2;
	number[15]=totalTax;
	if(calType==2){
		number[16]=totalHeritage;
		z=17;
	}else{
		z=16;
	}
	thousandSeparator();
}

function outputResult_scenario_alpha01(){
	document.form2.estate01.value=number[1];
	document.form2.estate02.value=number[2];
	document.form2.estate03.value=number[3];
	document.form2.debtetc01.value=number[4];
	document.form2.heritage.value=number[5];
	document.form2.netHeritage.value=number[6];
	document.form2.basicDeduction.value=number[7];
	document.form2.taxedHeritage.value=number[8];
	document.form2.wife.value=number[9];
	document.form2.child1.value=number[10];
	document.form2.child2.value=number[11];
	document.form2.taxwife.value=number[12];
	document.form2.taxchild1.value=number[13];
	document.form2.taxchild2.value=number[14];
}

function outputResult_scenario_alpha02(){
	document.form3.debtetc01.value=number[4];
	document.form3.heritage.value=number[5];
	document.form3.netHeritage.value=number[6];
	document.form3.basicDeduction.value=number[7];
	document.form3.taxedHeritage.value=number[8];
	document.form3.child1.value=number[10];
	document.form3.child2.value=number[11];
	document.form3.taxchild1.value=number[13];
	document.form3.taxchild2.value=number[14];
	document.form3.totalTax.value=number[15];
	document.form3.totalHeritage.value=number[16];
}

-->