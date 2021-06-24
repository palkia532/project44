class Security {

    constructor(width,height){

        // Add code to create the input and button elements
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
      }

    }

    display(){

        // Add code to make the buttons function as expected
        this.button1.mousePressed(()=>{
            if(system.authenticate(accessCode1,this.access1.value())){
                this.button1.hide();
                this.access1.hide();
                score++
            
            }
        });
    
    

        this.button2.mousePressed(()=>{
            if(system.authenticate(accessCode2,this.access2.value())){
                this.button2.hide();
                this.access2.hide();
                score++
            }
        });

        this.button3.mousePressed(()=>{
            if(system.authenticate(accessCode3,this.access3.value())){
                this.button3.hide();
                this.access3.hide();
                score++
            }
        })

