class Battle{
    constructor(){

    }

    createElement() {
        this.element = document.createElement("div");
        this.element.classList.add("battle");
        this.element.innerHTML =  (`
        <div class = "battle_hero">
            <img src=${/images/testpng1.png}
        </div> 
    `)
    }

    init(container){
        console.log("battle loading", this)
        this.createElement();
        container.appendChild(this.element);
        }
}