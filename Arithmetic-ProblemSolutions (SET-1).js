
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
			document.write(id+"-> Prime factors of number "+inptNumber+" are ");
			primeFactors(inptNumber);
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
				printArray(factors);
				return;
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
	printArray(factors);
	return factors;
			
		
}	

// Function returns the gcd of two numbers
function gcd(number1,number2)
{
	var currGcd,finalGcd;
	finalGcd=1;
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
