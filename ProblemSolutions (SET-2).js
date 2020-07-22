
var finalOutput=[];

// Function to print array
function printArray(item)
{
	for(var i=0;i<item.length;i++)
	{
		document.write(item[i]+" ");
	}

}



function stringOperation()
{
	var id=Number(prompt("Enter the operation id"));
	var inpt=['i','n','s','t','a','z','e','n'];

	/*document.write("<br> <h3> The List is: ");
	printArray(inpt);
	document.write("</h3>");*/
	
	switch(id)
	{
		case 1: document.write("<br> <h3> The List is: ");
			printArray(inpt);
			document.write("</h3>");
			//document.write("<br />");
			var position=3;
			document.write(id+" -> Position of element to be removed from list: "+position+"<br>");
			removeElement(inpt,position);
			
		break;

		case 2: 
			document.write("<br> <h3> The List is: ");
			printArray(inpt);
			document.write("</h3>");
			//document.write("<br />");
			var position=3;
			document.write(id+" -> Position from which list is splitted:"+ position);
			document.write(" <br> Splitted lists are: ");
			splitList(inpt,position);
			
			
		break;

		case 3: document.write("<br> <h3> The List is: ");
			printArray(inpt);
			document.write("</h3>");
			//document.write("<br />");
			var startPosition=3;
			var endPosition=5;
			document.write(id+" -> Sliced list from  "+startPosition+" position to  "+endPosition+" is: ");
			sliceList(inpt,startPosition,endPosition);
			
		break;

		case 4: document.write("<br> <h3> The List is: ");
			printArray(inpt);
			document.write("</h3>");
			//document.write("<br />");
			var position=5;
			document.write(id+" -> Rotated list from "+position +" position is:  ");
			rotateElement(inpt,position);
		break;

		case 5: document.write("<br> <h3> The List is: ");
			printArray(inpt);
			document.write("</h3>");
			//document.write("<br />");
			var n=2;
			document.write(id+" -> List after dropping every element present at position "+n+" is: ");
			dropeveryNElement(inpt,n);
			
		break;

		case 6: document.write("<br> <h3> The List is: ");
			printArray(inpt);
			document.write("</h3>");
			//document.write("<br />");
			var position=3;
			var word="INSERTED";
			document.write(id+" -> list after insertion word at position "+position+" is: ");
			insertWordInList(inpt,position,word);
		break;

		case 7: document.write("<br /><br />");
			var nestedList=['a','b',['c','d','e',['k','k','k'],'h'],'f','g'];
			document.write(id+" -> Nested list is ['a','b',['c','d','e',['k','k','k'],'h'],'f','g']"+"<br /> Flattened List: ");
			flattenList(nestedList);
			
		break;

		case 8: document.write("<br /><br />");
			var rangeStart, rangeEnd;
			rangeStart=2;
			rangeEnd=8;
			document.write(id+" -> Starting element of range is "+rangeStart+"<br /> Last element of range: "+rangeEnd);
			document.write("<br> The list of range is: ");
			rangeList(rangeStart,rangeEnd);
		break;

		case 9: document.write("<br /><br />");
			var input="ddddcca";
			document.write(id+" -> Original string:"+input+"<br>Sorted list according to duplicate count of elements: ");
			sortSublist(input);
		break;

		

		case 10: document.write("<br> <h3> The List is: ");
			printArray(inpt);
			document.write("</h3>");
			//document.write("<br />");
			document.write(id+" -> Element count in list is "+countElements(inpt));
			
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
//--------------------------------------------------------------------------Functions-------------------------------------------------------------------------------------------------------------------


// Function to remove element at specified position
function removeElement(inpt,position)
{
	var finalOutput=[];
	var j;
	position=position-1;
	for(j=0;j<inpt.length;j++)
	{
		
		if(j==position)
		{
			j++;
		}
		finalOutput[j]=inpt[j];
		
	}
	document.write(finalOutput);
	
}

// Function to split list into two parts
function splitList(inpt,position)
{
	var firstString=[];
	var secondString=[];
	var j=0;
	for(var i=0;i<inpt.length;i++)
	{
		if(i<position)
		{
			firstString[i]=inpt[i];
		}
		else
		{
			secondString[j]=inpt[i];
			j++;
		}
	}
	
	printArray(firstString);
	document.write("<br>");
	printArray(secondString);

	
}

// Function to slice a part of list
function sliceList(inpt,startPosition,endPosition)
{
	var index=0;
	var finalOutput=[];
	for(var i=startPosition-1;i<endPosition;i++)
	{
		finalOutput[index]=inpt[i];
		index++;
		
	}
	printArray(finalOutput);

}


// Function rotates the elements to left from given position
function rotateElement(inpt,position)
{
	var index=0;
	var finalOutput=[];
	for(var i=position-1;i<inpt.length;i++)
	{
		finalOutput[index]=inpt[i];
		index++;
	}
	for(var i=0;i<position-1;i++)
	{
		finalOutput[index]=inpt[i];
		index++;
	}
	printArray(finalOutput);
}


// Function that removes every Nth element from list
function dropeveryNElement(inpt,n)
{
	var finalOutput=[];
	if(n==1)
	{
		document.write("List get Empty!");
		return;
	}
	//finalOutput[0]=inpt[0];
	var temporaryN=n-1;
	var temp=0;
	for(var index=0;index<inpt.length;index++)
	{
		if((index+1)%n!=0)
		{
			finalOutput[temp]=inpt[index];
			temp++;
		}
		
	}
	printArray(finalOutput);
	
}

// Function that prints the list of range lies between given integers.
function rangeList(rangeStart,rangeEnd)
{
	var finalOutput=[];
	var index=0;
	for(var variable=rangeStart;variable<=rangeEnd;variable++)
	{
		finalOutput[index]=variable;
		index++;
	}
	printArray(finalOutput);
}


// The objective is to sort the elements of this list according to their length
function sortSublist(inpt)
{
	
	
	var count,j;
	var arrCount=[];
	var arrElement=[];
	count=1;
	j=0;
	for(var i=0;i<inpt.length;i++)
	{
		var temp=inpt.charAt(i);
		if(temp==inpt.charAt(i+1))
		{
			count++;
		}
		
		arrCount[j]=count;
		arrElement[j]=temp;
		if(temp!=inpt.charAt(i+1))
		{
			j++;
			count=1;
		}
		
		
	}
	
	sort(arrCount,arrElement);
	
}
	
function sort(arrCount,arrElement)
{
	var tempCount,tempElement;
	
	for(var i=0;i<arrCount.length;i++) 
	{
	   for(var j=i+1;j<arrCount.length;j++)
	   {
	      if(arrCount[j] < arrCount[i]) 
		{
		 tempCount = arrCount[i];
		 tempElement=arrElement[i];

		 arrCount[i] = arrCount[j];
		 arrElement[i]=arrElement[j];

		 arrCount[j] = tempCount;
		 arrElement[j]=tempElement;
		}
	      }
	}
	for(var j=0;j<arrCount.length;j++)
	{
		document.write(arrCount[j]+"-"+arrElement[j]+"  ");
	}
}

// Function to flatten nested list
function flattenList(nestedList)
{
	printArray(nestedList);

}


// Function return total count of elements
function countElements(inpt)
{
	var totalElements=0;
	while(inpt[totalElements]!=undefined)
	{
		totalElements++;
	}
	return totalElements;
}

//Function that insert word/element into the list

function insertWordInList(inpt,position,word)
{
	var finalOutput=[];
	finalOutput[position-1]=word;
	var index=0;
	for(var i=0;i<inpt.length;i++)
	{
		if(finalOutput[index]==undefined)
		{
			finalOutput[index]=inpt[i];
			index++;
		}
		else
		{
			index++;
			finalOutput[index]=inpt[i];
		}
			
			
		
	}
	printArray(finalOutput);	
}


