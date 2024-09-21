class RailwayForm{
    submit(){
        alert("form will be submitted.")
    }
    cancel(){
        alert("form will be canceled")
    }
}
let harry = new RailwayForm()
let john = new RailwayForm()

harry.submit()
john.cancel()   