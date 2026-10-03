
class Overworld {
    constructor(config) {
        this.element = config.element
        this.canvas = this.element.querySelector(".game-canvas")
        this.ctx = this.canvas.getContext("2d")
    }

    init() {
        console.log("hello sir", this)
        const image = new Image();
        image.onload = ()=> {
            this.ctx.drawImage(image, 0, 0)
        }
        image.src = "images/back/bbg1.png";

//gameobjects
        const hero = new GameObject({
            x:140,
            y:260,
        })

        const npc = new GameObject({
            x:340,
            y:90,
        })

        setTimeout(() =>{
        hero.sprite.draw(this.ctx);
        npc.sprite.draw(this.ctx)
        }, 100)

    }
}
/*

class Overworld {
    constructor(config) {
        this.element = config.element
        this.canvas = this.element.querySelector(".game-canvas")
        this.ctx = this.canvas.getContext("2d")
    }

  init() {
    const image = new Image();
    image.src = "images/back/bbg1.png";

    const hero = new GameObject({ x: 0,   y: 0   });
    const npc  = new GameObject({ x: 100, y: 100 });

    const step = () => {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.ctx.drawImage(image, 0, 0);

        hero.sprite.draw(this.ctx)
        npc.sprite.draw(this.ctx)
        
        requestAnimationFrame(step);
    };
    step();
}
}
*/
