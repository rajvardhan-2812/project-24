class ball 
{
    constructor(x,y,radius)
    {
        var option = {
            restitution:0.3,
            friction:0.5,
            density:1.2
        }
        this.body = Bodies.circle(x,y,radius,option)
        this.radius = radius
        World.add(world,this.body)
    }
    display()
    {
     var pos = this.body.position

   circle(pos.x,pos.y,this.radius*2)

    }
}