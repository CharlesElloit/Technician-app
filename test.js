function functionArray(){
	const arr = []
	for(var i = 0; i < 5; i++) {
	   arr.push(function(){ console.log(i) })
	}
	
	return arr
}

const func = functionArray()
func[0]()

//Technicians("Charles Elloit")
