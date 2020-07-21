

function stringOperation()
{
	var id=Number(prompt("Enter the operation id"));
	var inpt=String(prompt("Enter your string:","....."));
	
	switch(id)
	{
		case 1: document.write("<br /><br />");
			document.write(id+" -> Last two letters of string "+inpt+"  is: "+getLastTwo(inpt));
			
		break;

		case 2: document.write("<br /><br />");
			document.write(id+" -> Last letter of string "+inpt+"  is: "+getLast(inpt));
			
		break;

		case 3: document.write("<br /><br />");
			var position=Number(prompt("Enter the position number: "));
			document.write(id+" -> Letter at position "+position+" in string "+inpt+" is: "+getPosLetter(inpt,position));
			
		break;

		case 4: document.write("<br /><br />");
			document.write(id+" ->"+"<h3>"+inpt+"</h3>"+" is ");
			stringPallindrome(inpt);
		break;

		case 5: document.write("<br /><br />");
			document.write(id+" -> Legnth of string "+inpt+" is: "+getCount(inpt));
			
		break;

		case 6: document.write("<br /><br />");
			document.write(id+" -> Reverse of string "+inpt+" is: ");
			reverseString(inpt);
		break;

		case 7: document.write("<br /><br />");
			document.write(id+" -> Original string is "+inpt+"<br /> String after removal of duplicates: "+removeDuplicates(inpt));
			
		break;

		case 8: document.write("<br /><br />");
			document.write(id+" -> Original string is "+inpt+"<br /> Sub-String of consecutive duplicates: ");
			consecutiveDuplicates(inpt);
		break;

		case 9: document.write("<br /><br />");
			document.write(id+" -> Original string is "+inpt+"<br /> count of consecutive duplicates: ");
			consecutiveDuplicatesWithCount(inpt);
		break;

		case 10: document.write("<br /><br />");
			document.write(id+" -> Original string is "+inpt+"<br /> count of consecutive duplicates: ");
			modifyDuplicate(inpt);

		break;

		case 11: document.write("<br /><br />");
			document.write(id+" -> Original string is "+inpt+"<br /> String with duplicate element: "+duplicateString(inpt));
			
		break;

		case 12: document.write("<br /><br />");
			var count=Number(prompt("how many times do you want to duplicate the elements? "));
			document.write(id+" -> Original string is "+inpt+"<br /> User want to duplicate every element for "+count+" times"+"<br /> String with duplicate element: "+duplicateStringWithCount(inpt,count));
			
		break;

		

		default : document.write("<h3> Invalid id </h3>");
	}

	var flag1=Boolean(confirm("Do you want to continue","then ?"));
	if(flag1==true)
	{
		stringOperation();
	}
	else
	{
		return;
	}


}

stringOperation();		
  







//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
var finalOutput;


// Fuction for checking if user have entered valid position or not
function validPos(inpt,position)
{
	if(pos>inpt.length)
	{
		document.write("Invalid Position!");
		return;
	}
	else
		return 1;

}

// Fuction that returns the last two elements of string 
function getLastTwo(inpt)
{

	var len=inpt.length;
	finalOutput=inpt.slice(len-2,len);
	return finalOutput;


}

// Fuction that returns the last element of string 
function getLast(inpt)
{
	var len=inpt.length;
	var finalOutput=inpt.charAt(len-1);
	return finalOutput;
	
}

// Function that returns the element present at given position in string
function getPosLetter(inpt,position)
{
	var len=inpt.length;
	if(position<=len)
	{
		finalOutput=inpt.charAt(position-1);
		return finalOutput;
		   
	}
	else
	{
		document.write("Invalid Position!");
		return; 
	}
	
}

// Function that checks wether the input string is pallindrome or not
function stringPallindrome(inpt)
{
	
	var len1=inpt.length;
		var i=0;
		var j=len1-1;
		while(i<len1 && j>=0)
		{
		    var t1,t2;
		    t1=inpt.charAt(i);
		    t2=inpt.charAt(j);
		    
		    if(t1==t2)
		    {
		        i++;
		        j--;
		    }
		    else
		    {
		        document.write("not pallindrome");
		        return;
		    }
		    
		}
		document.write("pallindrome");
}

// Function that returns the total number of elements in string
function getCount(inpt)
{
	var len=inpt.length;
	return len;
		
	
}

// Function that prints reverse string
function reverseString(inpt)
{
	var len=inpt.length;
	var temp=len;
	while(temp>=0)
	{
		document.write(inpt.charAt(temp-1));
		temp--;
	}
}

// Function that returns string after removing duplicate elements of input string
function removeDuplicates(inpt)
{
	 finalOutput=inpt.charAt(0);
	var len,len1,i,j,temp;

	len=inpt.length;
	len1=finalOutput.length;

	for(i=1;i<=len;i++)
	{	
		var flag=0;
		temp=inpt.charAt(i);
		for(j=0;j<len1;j++)
		{
			if(temp==finalOutput.charAt(j))
			{
				flag=1;
			}
		}
		if(flag!=1)
		{
			finalOutput=finalOutput.concat(temp);
			len1=finalOutput.length;
		}
	}

	return finalOutput;
}


// Function that prints consecutive duplicates as (EE)
function consecutiveDuplicates(inpt)
{
	 finalOutput="( ";
	for(var i=0;i<inpt.length;i++)
	{
		var temp=inpt.charAt(i);
		if(temp==inpt.charAt(i+1))
		{
			finalOutput=finalOutput.concat(temp);
		}
		else 
		{
			finalOutput=finalOutput.concat(temp);
			finalOutput=finalOutput.concat(" ) (");
		}
	}
	var len1=finalOutput.length;
	document.write(finalOutput.slice(0,len1-1));
}


// Function that prints duplicate count and elements as (N E)
function consecutiveDuplicatesWithCount(inpt)
{
	 finalOutput="(";
	var count=1;
	for(var i=0;i<inpt.length;i++)
	{
		var temp=inpt.charAt(i);
		if(temp==inpt.charAt(i+1))
		{
			count++;
		}
		else 
		{
			finalOutput=finalOutput.concat(count);
			finalOutput=finalOutput.concat(" "+temp);
			finalOutput=finalOutput.concat(" ) (");
			count=1;
		}
	}
	var len1=finalOutput.length;
	document.write(finalOutput.slice(0,len1-1));
}

// Function that prints Only elements with duplicates are transferred as (N E)
function modifyDuplicate(inpt)
{
	finalOutput="( ";
	var count=1;
	for(var i=0;i<inpt.length;i++)
	{
		var temp=inpt.charAt(i);
		if(temp==inpt.charAt(i+1))
		{
			count++;
		}
		else if(count>1)
		{
			finalOutput=finalOutput.concat(count);
			finalOutput=finalOutput.concat(" "+temp);
			finalOutput=finalOutput.concat(" ) (");
			count=1;
		}
		else
		{
			finalOutput=finalOutput.concat(temp);
			finalOutput=finalOutput.concat(") (");
		}
		//document.write(finalOutput+"  ");

	}
	var len1=finalOutput.length;
	document.write(finalOutput.slice(0,len1-1));

}

//Function that duplicates the every character present in string
function duplicateString(inpt)
{
	 finalOutput=" ";
	var len=inpt.length;
	var i;
	for(i=0;i<len;i++)
	{
		var temp=inpt.charAt(i);
		finalOutput=finalOutput.concat(inpt.charAt(i));
		finalOutput=finalOutput.concat(temp);
	}
	return finalOutput;
}

// Function that replicates the every character in string for given number of times
function duplicateStringWithCount(inpt,count)
{
	 finalOutput=" ";
	var len=inpt.length;
	var i,j;
	for(i=0;i<len;i++)
	{
		j=0;
		while(j<=count)
		{
			finalOutput=finalOutput.concat(inpt.charAt(i));
			j++;
		}
		
	}
	return finalOutput;
}

		


