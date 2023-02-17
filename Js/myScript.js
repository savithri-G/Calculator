
let result = document.getElementById("inp");

	function show(number)
	{
		result.value += number;
	}
	function calc()
	
	{
		result.value = eval(result.value);
	}
	
	function clr()
	{
		result.value = "";
	}
	function dele()
	{
		result.value = result.value.slice(0,-1);
	}

