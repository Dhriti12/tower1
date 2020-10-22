class Box3 extends BaseClass {
    constructor(x, y, width, height){
      super(x,y,width,height);
      this.visibility=30
    }
    display(){
   
      if(this.body.speed<4){
        super.display()
      }
      else{
        World.remove(world,this.body)
        push ()
        this.visibility=this.visibility-5
        tint (255,this.visibility)
        pop ()
      }
    }

  };
  