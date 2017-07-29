var pop = [0];

function setup() {
    
    createCanvas(800,600);
    for(var i = 0 ; i < 20 ; i++){
        pop[i]={
            x:400, 
            y:600,
            
            moving:function(){
               var x = random(-5,5);
                if ( x + this.x > 600 || x + this.x < 200){
                 this.x -= x * 2;
                
                }else{
                    this.x += x;
                };
                
                var y = random(random(-10,-9.5),10);
                if ( y + this.y > height || y + this.y < 0){
                 this.y -= y * 2;
                
                }else{
                    this.y += y;
                }
                
            },
            
            display:function(){
                stroke(250)
                noFill()
                if(this.y > 400 && this.y <= 500){
                    stroke(250,0,0)
                    ellipse(this.x,this.y,20,20)
                }
                if(this.y > 300 && this.y <= 400){
                    stroke(0,250,0)
                    ellipse(this.x,this.y,30,30)
                }
                if(this.y > 200 && this.y <= 300){
                    stroke(0,0,250)
                    ellipse(this.x,this.y,35,35)
                }
                if(this.y > 100 && this.y <= 200){
                    stroke(250,0,250)
                    ellipse(this.x,this.y,40,40)
                }
                if(this.y > 50 && this.y <= 100){
                    stroke(0,250,250)
                    ellipse(this.x,this.y,45,45)
                }
                 if(this.y > 0 && this.y <= 50){
                    stroke(250,100,75)
                    ellipse(this.x,this.y,50,50)
                }
                
                ellipse(this.x,this.y,10,10)
                
                    
            },
    
        }
    }
    print(pop[0])

}

function draw() {
    
    background(0);
    
    for(var i = 0 ; i < 20 ; i++){
        pop[i].moving();
        pop[i].display(); 
    }
    
  
}


