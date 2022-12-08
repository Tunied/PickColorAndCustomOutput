function run(outputType) {
	
	var app = Application.currentApplication();
	app.includeStandardAdditions = true;

	var color = app.chooseColor({defaultColor: [0, 1, 0]});
	// Result: [0.003753719385713339, 0.7206835746765137, 0.005828946363180876]

	var r = (color[0]).toFixed(2);
	var g = (color[1]).toFixed(2);
	var b = (color[2]).toFixed(2);

	var colorStr = "Error";

	if(outputType=="odin")
	{
		colorStr = `GUIColor(${r}f,${g}f,${b}f)`
	}else if(outputType=="unity")
	{
		colorStr = `new Color(${r}f,${g}f,${b}f);`
	}else{
		colorStr = `GUIColor(${r}f,${g}f,${b}f)\nnew Color(${r}f,${g}f,${b}f)`
	}

	console.log("Type is: "+outputType)

	app.setTheClipboardTo(colorStr)
	return colorStr;
}
