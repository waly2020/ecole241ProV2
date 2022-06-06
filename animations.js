class GameObject{
    constructor(x = 0,y = 0){
      this.x = x;
      this.y = y;
      this.dt = 1;
      this.dx = 0;
      this.dy = 0;
      this.color = "orange";
      this.transform = {
        angle: 0,
        translateX: 0,
        translateY: 0,
        direction : 0,
      }
    }
    vecteur2(){
        this.x += this.dx * this.dt;
        this.y += this.dy * this.dt;
    }
  }
class CercleGameObject extends GameObject{
  constructor(x = 15, y = 15, radius = 15){
    super(x,y);
    this.radius = radius;
    this.name = "CercleGameObject";
    this.type = "cercle";
  }
}
/**
 * dessine un gameObject.
 * @param {CanvasRenderingContext2D} context
 * @param {GameObject} gameObjects
 * @param {"stroke" | "fill"} type
**/
function drawGameObjects(context,type = "fill",...gameObjects){
  
    for(let g = 0; g < gameObjects.length; g++){
      let gameObject = gameObjects[g];
      if(gameObject.type == "box"){
        context.save();
        context.beginPath();
        context.translate(gameObject.x + gameObject.transform.translateX,gameObject.y + gameObject.transform.translateY);
        context.rotate(gameObject.transform.angle);
        context[`${type}Style`] = gameObject.color;
        context[`${type}Rect`](-gameObject.transform.translateX,-gameObject.transform.translateY, gameObject.width, gameObject.height);
        context.closePath();
        context.restore();
        
      }
      else if(gameObject.type == "cercle"){
        context.save();
        context.beginPath();
        context.translate(gameObject.x + gameObject.transform.translateX,gameObject.y + gameObject.transform.translateY);
        context.rotate(gameObject.transform.angle);
        context[`${type}Style`] = gameObject.color;
        context.arc(-gameObject.transform.translateX,-gameObject.transform.translateY,gameObject.radius,0,2*Math.PI);
        context[`${type}`]();
        context.closePath();
        context.restore();
      }
    }
    
  }
  /**
   * dessine les ImageGameObjects se trouvant dans un tableau
   * @param {CanvasRenderingContext2D} context
   * @param {Array} array
   * @param {"stroke" | "fill"} type
**/
  function drawImageGameObjectsInArray(context,array,type){
    for(let i = 0; i < array.length; i++){
     let gameObject = array[i];
      drawGameObjects(context,type,gameObject);
    }
}

/**
 * avoir un nombre aléatoire dans un intervalle de nombre
 * @param {number} min valeur minimale
 * @param {number} max valeur maximale
**/
function getRandomNumber(min = 0, max = 10){
    return Math.floor(min + Math.random() * max);
  }