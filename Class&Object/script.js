class RailwayForm{
    submit(){
        alert(this.name +"Form is sumbmit" + this.trainno)
    }
    cancel(){
        alert(this.name + "form is canceled" + this.trainno)
    }
    fill(Givenname,trainno){
        this.name = Givenname
        this.trainno
    }
}

let harryForm = new RailwayForm()
harryForm.fill("harry", 1654465)
let rohanForm = new RailwayForm()
harryForm.fill("Rohan", 1654465)

harryForm.submit()
rohanForm.cancel()