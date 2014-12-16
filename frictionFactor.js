<!--
//全変数グローバル扱いであることに留意。
function calcColebrook(){
	chk=0;
	change=Math.pow(10,-7);
	change=Math.round(Math.floor(change*Math.pow(10,9))/10)/Math.pow(10,8);
	for(lambda=lambdaEnd; lambda>=lambdaStart; lambda=lambda-change){
		lambda=Math.round(Math.floor(lambda*Math.pow(10,9))/10)/Math.pow(10,8);
		squarerootLambda=Math.pow(lambda,0.5);
		calcColebrookRighthand();
		if(Math.abs(cColebrookRighthand-colebrookLefthand)<Math.pow(10,-5)){
			chk=1;
			break;
		}
	}
	if(chk==0){
		lambda="-";
	}
	return lambda;
}

function calcColebrookRighthand(){
	cColebrookRighthand=Math.pow(ed/3.71+2.51/(Re*squarerootLambda),squarerootLambda);
	return cColebrookRighthand;
}

function calcLaminar(){
	lambda=64/Re;
	return lambda;
}

function calcBlasius(){
	lambda=0.3164/Math.pow(Re,1/4);
	return lambda;
}

function calcPlandtlKarman(){
	chk=0;
	change=(lambdaEnd-lambdaStart)/Math.pow(10,6);
	change=Math.round(Math.floor(change*Math.pow(10,18))/10)/Math.pow(10,17);
	for(lambda=lambdaStart; lambda<=lambdaEnd; lambda=lambda+change){
		lambda=Math.round(Math.floor(lambda*Math.pow(10,19))/10)/Math.pow(10,18);
		commonLefthand=1/Math.pow(lambda,0.5);
		calcPlandtlKarmanRighthand();
		if(Math.abs(commonLefthand-plandtlKarmanRighthand)<=0.001){
			chk=1;
			break;
		}
	}
	if(chk==0){
		lambda="-";
	}
	return lambda;
}

function calcPlandtlKarmanRighthand(){
	plandtlKarmanRighthand=2*Math.LOG10E*Math.log(Re*Math.pow(lambda,0.5))-0.8;
	return plandtlKarmanRighthand;
}

function calcRoughwall(){
	roughwallRighthand=1.14-2*Math.LOG10E*Math.log(ed);
	lambda=Math.pow(1/roughwallRighthand,2)
	roughRe=200*roughwallRighthand/ed;
	return roughRe,lambda;
}

function calculation(){
	ed1=parseFloat(document.form1.ed1.value);
	ed2=parseFloat(document.form1.ed2.value);
	ed=ed1*Math.pow(10,ed2);
	ed=Math.round(Math.floor(ed*Math.pow(10,14))/10)/Math.pow(10,13);
	Re1=parseFloat(document.form1.Re1.value);
	Re2=parseFloat(document.form1.Re2.value);
	Re=Re1*Math.pow(10,Re2);
	Re=Math.round(Math.floor(Re*Math.pow(10,14))/10)/Math.pow(10,13);
	equation=parseFloat(document.form1.equation.value);
	if(equation==1){
		colebrookLefthand=1/Math.pow(10,0.5);
		if(ed<=0.00005){
			if(Re>=Math.pow(10,6)){
				lambdaStart=0.008;
				lambdaEnd=0.015;
			}
			else
			if(Re>=Math.pow(10,5)){
				lambdaStart=0.008;
				lambdaEnd=0.02;
			}
			else
			if(Re>=Math.pow(10,4)){
				lambdaStart=0.008;
				lambdaEnd=0.04;
			}
			else
			if(Re>=Math.pow(10,3)){
				lambdaStart=0.008;
				lambdaEnd=0.07;
			}
		}
		else
		if(ed<=0.0004){
			if(Re>=Math.pow(10,5)){
				lambdaStart=0.008;
				lambdaEnd=0.02;
			}
			else
			if(Re>=Math.pow(10,4)){
				lambdaStart=0.008;
				lambdaEnd=0.04;
			}
			else
			if(Re>=Math.pow(10,3)){
				lambdaStart=0.008;
				lambdaEnd=0.07;
			}
		}
		else
		if(ed<=0.002){
			if(Re>=Math.pow(10,6)){
				lambdaStart=0.008;
				lambdaEnd=0.025;
			}
			else
			if(Re>=Math.pow(10,5)){
				lambdaStart=0.008;
				lambdaEnd=0.03;
			}
			else
			if(Re>=Math.pow(10,4)){
				lambdaStart=0.008;
				lambdaEnd=0.04;
			}
			else
			if(Re>=Math.pow(10,3)){
				lambdaStart=0.008;
				lambdaEnd=0.07;
			}
		}
		else
		if(ed<=0.006){
			if(Re>=Math.pow(10,4)){
				lambdaStart=0.008;
				lambdaEnd=0.04;
			}
			else
			if(Re>=Math.pow(10,3)){
				lambdaStart=0.008;
				lambdaEnd=0.07;
			}
		}
		else
		if(ed<=0.015){
			if(Re>=Math.pow(10,4)){
				lambdaStart=0.008;
				lambdaEnd=0.05;
			}
			else
			if(Re>=Math.pow(10,3)){
				lambdaStart=0.008;
				lambdaEnd=0.072;
			}
		}
		else
		if(ed<=0.03){
			if(Re>=Math.pow(10,5)){
				lambdaStart=0.008;
				lambdaEnd=0.06;
			}
			else
			if(Re>=Math.pow(10,4)){
				lambdaStart=0.008;
				lambdaEnd=0.07;
			}
			else
			if(Re>=Math.pow(10,3)){
				lambdaStart=0.008;
				lambdaEnd=0.08;
			}
		}
		else
		if(ed<=0.04){
			if(Re>=Math.pow(10,4)){
				lambdaStart=0.008;
				lambdaEnd=0.07;
			}
			else
			if(Re>=Math.pow(10,3)){
				lambdaStart=0.008;
				lambdaEnd=0.086;
			}
		}
		else
		if(ed<=0.05){
			if(Re>=Math.pow(10,4)){
				lambdaStart=0.008;
				lambdaEnd=0.08;
			}
			else
			if(Re>=Math.pow(10,3)){
				lambdaStart=0.008;
				lambdaEnd=0.091;
			}
		}
		else{
			lambdaStart=0.008;
			lambdaEnd=0.12;
		}
		calcColebrook();
		adaptEquation="Colebrook-White";
	}
	else
	if(equation==2){
		calcLaminar();
		adaptEquation="Laminar";
	}
	else
	if(equation==3){
		calcBlasius();
		adaptEquation="Blasius";
	}
	else
	if(equation==4){
		lambdaStart=Math.pow(10,-5);
		lambdaEnd=1;
		calcPlandtlKarman();
		adaptEquation="Plandtl-Karman";
	}
	else
	if(equation==5){
		calcRoughwall();
		adaptEquation="Nikuradse";
	}
	document.form2.adaptEquation.value=adaptEquation;
	document.form2.ed.value=ed;
	document.form2.Re.value=Re;
	if(lambda!="-"){
		lambda=Math.round(Math.floor(lambda*Math.pow(10,9))/10)/Math.pow(10,8);
		lambda=lambda.toExponential(5);
	}
	document.form2.lambda.value=lambda;
	}
-->