
function takeInput()
{
	var inpt=Number(prompt('Enter the number:'));	
	return inpt;

}

function arithmeticOperation()
{
	var id=Number(prompt('Enter the operation id: {Enter 0 to exit}'));
	if(id===0)
	{
		return;
	}
	switch(id)
	{
		case 1: var inptNumber=takeInput();
			document.write(id+"-> Is the number "+inptNumber+" prime: "+primeNumber(inptNumber)+"<br><br>");
		break;

		case 2: var inptNumber=takeInput();
			document.write(id+"-> Prime factors of number "+inptNumber+" are "+primeFactors(inptNumber));
			document.write("<br><br>");
		break;

		case 3: var number1=takeInput();
			var number2=takeInput();
			document.write(id+"-> Greatest Commaon Devisor of "+number1 +" & "+ number2+" is: "+gcd(number1,number2)+"<br><br>");
		break;

		case 4: var number1=takeInput();
			var number2=takeInput();
			document.write(id+"-> Wether the numbers "+number1 +" & "+ number2+" are comprime: "+isCoprime(number1,number2)+"<br><br>");
		break;

		case 5: var inptNumber=takeInput();
			document.write(id+"-> Prime factors of number  "+inptNumber+" with mutiplicity count are ");
			primeFactorsWithCount(inptNumber);
			document.write("<br><br>");
		break;

		case 6: var number1=takeInput();
			var number2=takeInput();
			var outputArr=[];
			document.write(id+"-> Prime Numbers starting from "+number1 +" to "+ number2+" is: ");
			outputArr=primeRange(number1,number2);	
			printArray(outputArr);
			document.write("<br><br>");

		case 7: var inptNumber=takeInput();
			document.write(id+"-> For finding  Euler's Coefficient phi(M)...<br> M = "+inptNumber+"<br>phi(M)= "+euler(inptNumber));
			//euler(inptNumber);
			document.write("<br><br>");
		break;

		case 8: var inptNumber=takeInput();
			document.write(id+"-> For finding  Euler's totient function phi(m) (improved)....<br> M = "+inptNumber+"<br>phi(M)= "+eulerImproved(inptNumber));
			//euler(inptNumber);
			document.write("<br><br>");
		break;

		case 9: alert('Please enter even number greater than 2 for goldbach problems');
			var inptNumber=takeInput();
			document.write(id+"-> Goldbach Conjecture for number "+inptNumber+"  is: "+goldBach(inptNumber));
			//euler(inptNumber);
			document.write("<br><br>");
		break;
	
		case 10: var number1=takeInput();
			var number2=takeInput();
			var outputArr=[];
			document.write(id+"-> Goldbach compositions from "+number1 +" to "+ number2+" is: ");
			goldbachCompositions(number1,number2)
			document.write("<br><br>");
		break;


		default: document.write("<h3>Invalid id</h3>");
		return; 

	}
	var toContinue=Boolean(confirm("Do you want to continue?"));
	if(toContinue===true)
	{
		arithmeticOperation();
	}
	else
		return;
		

}
arithmeticOperation();


//============================================================== FUNCTION DEFINATIONS====================================================================================================================


// Function prints the array
function printArray(item)
{
	for(var i=0;i<item.length;i++)
	{
		document.write(item[i]+" ");
	}

}

//Function returns eigther true if input number is prime or false
function primeNumber(inptNumber)
{
	var flag=0;
	for(var i=2;i<10;i++)
	{
		if(inptNumber%i===0 && inptNumber/i!==1)
		{
			return 'FALSE';
		}
		else
			flag=1;
	
	}
	if(flag===1)
	{
		return 'TRUE';
	}
}



// function prints the prime factors of number
function primeFactors(inptNumber)
{
	var tempNumber,index,j;
	var factors=[];
	index=0;
	j=0;
	tempNumber=1;
	for(var i=2;i<=inptNumber;i++)
	{
		var flag=primeNumber(i);
		if(flag==='TRUE' && inptNumber%i===0)
		{
			tempNumber=tempNumber*i;
			factors[index]=i;
			index++;
			if(tempNumber===inptNumber)
			{
				//printArray(factors);
				return factors;
			}
				
			
		}
		
	}
	if(tempNumber<inptNumber)
	{
		while(tempNumber<inptNumber)
		{
			tempNumber=tempNumber*factors[j];
			factors[index]=factors[j];
			j++;
			index++;

		}
	}
	//printArray(factors);
	return factors;
			
		
}	

// Function returns the gcd of two numbers
function gcd(number1,number2)
{
	var currGcd,finalGcd;
	finalGcd=1;
	if(number1%number2===0) 
	{
		finalGcd=number2;
	}
	else if(number2%number1===0)
	{
		finalGcd=number1;
	}
	for(var i=2;i<number1;i++)
	{
		if(number1%i===0 && number2%i===0)
		{
			currGcd=i;
			if(currGcd>finalGcd)
			{
				finalGcd=currGcd;
			}	
		}
	}
	return finalGcd;	
}

// function retruns eigther true if two positive integers are coprime or false
function isCoprime(number1,number2)
{
	var gcdNumber=gcd(number1,number2);
	if(gcdNumber===1)
	{
		return 'TRUE';
	}
	else
		return 'FALSE';

}

// Function to sort elements in ascending order
function sort(a)
{
   var temp;
   for(var i=0;i<a.length;i++)
   {
	   for (var j=0;j<a.length;j++)
	      {
		 if(a[i]<a[j])
		 {
		    temp = a[i];
		    a[i]=a[j];
		    a[j] = temp;
		 }
	      }
   }
   return a;
}
	
//Function that return array contaioning prime factors of a number with duplicate count
function primeFactorsWithCount(inptNumber)
{
	var factorArr=[];
	var count=1;
	var element,index;
	index=0;
	factorArr=primeFactors(inptNumber);
	factorArr=sort(factorArr);
	for(var i=0;i<=factorArr.length;i++)
	{

		element=factorArr[i];
		if(element===factorArr[i+1])
		{
			count++;
			
		}
		else
		{
			document.write("<br>"+ element+" - "+count);
			count=1;
		}

	}
	
}

// Function return the range of prime numbers between upper and lower limit
function primeRange(number1,number2)
{
	var rangeArr=[];
	var index=0;
	for(var i=number1;i<=number2;i++)
	{
		var flag=primeNumber(i);
		if(flag==='TRUE')
		{
			rangeArr[index]=i;
			index++;
		}

	}
	return rangeArr;
}

// function to calculate eurel's coefficient
function euler(inptNumber)
{
	var isPrime,phiOfM;
	var rValues=[];
	var index=0;
	phiOfM=1;

	for(var i=1;i<inptNumber;i++)
	{
		var flag=isCoprime(i,inptNumber);
		if(flag==='TRUE')
		{
			rValues[index]=i;
			index++;
		}
	}
		
	phiOfM=rValues.length;
	//printArray(rValues);
	document.write("<br>");
	return phiOfM;
}

function eulerImproved(inptNumber)
{
	var factorArr=[];// for storing all the prime factors of entered number
	var countArr=[];// for storing multiplicity count of prime factors i.e. m1,m2..
	var Factors=[];// for storing factors as p1,p2...
	var count=1;
	var element,index,phiOfM;
	var p,m,tempP,tempM,multResult;
	result=0;
	index=0;
	phiOfM=0;
	factorArr=primeFactors(inptNumber);
	factorArr=sort(factorArr);
	for(var i=0;i<=factorArr.length;i++)
	{

		element=factorArr[i];

		if(element===factorArr[i+1])
		{
			count++;
			
		}
		else
		{
			countArr[index]=count;
			Factors[index]=element;
			count=1;
			index++;
		}

	}
	
	for(var i=0;i<countArr.length;i++)
	{
		
		p=Factors[i];
		m=countArr[i];
		tempP=p-1;
		tempM=m-1;
		multResult=tempP*p;
		result=Math.pow(multResult,tempM);
		phiOfM=phiOfM+result;
		
	}
	/*printArray(countArr);
	document.write("<br>");
	printArray(Factors);
	document.write("<br>");*/
	return phiOfM;
}

// Goldbach's conjecture.
function goldBach(inptNumber)
{
	var isPrime,flag,i,primePartner;
	var goldBachValues=[];// array for holding the pair prime numbers whose addition is input number
	
	if(inptNumber%2!==0 || inptNumber<2) // number should be even positive number
	{
		return ("NUMBER IS NOT EVEN");
	}
	for(i=1;i<inptNumber;i++)
	{
		isPrime=primeNumber(i);
		if(isPrime==='TRUE')
		{	
			primePartner=inptNumber-i;
			flag=primeNumber(primePartner);
			if(flag==='TRUE')
			{	
				goldBachValues[0]=i;
				goldBachValues[1]=primePartner;
				return goldBachValues;
			}
		}
	}
	
}


//list of Goldbach compositions from given number
function goldbachCompositions(number1,number2)
{
	var composition=[]; // array for holding the compositions
	for(var i=number1;i<=number2;i++)
	{
		composition=goldBach(i);
		if(composition!='NUMBER IS NOT EVEN')	
		{
			document.write("<br> for number "+i+" Composition is: "+composition);
		}
	}
	
}





