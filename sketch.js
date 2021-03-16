var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
var particles = [];
var plinkos = [];
var divisions = [];
var xPosText = [415,15,735,335,495,575,655, 175,255,95]
var timer = 0;
var time = 0;
var divisionHeight=300;
var score =0;
var scoreX = 0;
var modulusTime = time%3;
var text1,  text2,  text3,  text4,  text5,  text6,  text7,  text8, text9, text10;
var turns = 0;
var turnsLeft = 5-turns;
var gameState = "Playing"
score  = 0;
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);
   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }
    for (var j = 75; j <=width; j=j+50) 
    {
       plinkos.push(new Plinko(j,75));
    }
    for (var j = 50; j <=width-10; j=j+50) 
    {   
       plinkos.push(new Plinko(j,175));
    }
     for (var j = 75; j <=width; j=j+50) 
    {
       plinkos.push(new Plinko(j,275));
    }
     for (var j = 50; j <=width-10; j=j+50) 
    {
       plinkos.push(new Plinko(j,375));
    }
    text("Score : "+score,150,30);
}
function draw() {
  background("black");
  if(particles[0] != null){
    particles[0].display();
  }
  if(particles[1] != null){
    particles[1].display();
  }
  if(particles[2] != null){
    particles[2].display();
  }
  if(particles[3] != null){
    particles[3].display();
  }
  if(particles[4] != null){
    particles[4].display();
  }
  Engine.update(engine);
  textSize(15)
  text("Score : "+score,150,30);
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }
   for (var j = 0; j < particles.length; j++) {
    if(particles[j] != null){
      particles[j].display();
    }
  }
  if(gameState === "Playing"){
    if(frameCount%22 === 0){
      time++;
      }
  }

    textSize(15);
    text("Every 3 counts, click to spawn a particle: " + time, 485,30);
    text1 = text("5 Points", xPosText[0], 790);
    text2 = text("3 Points", xPosText[1], 790);
    text3 = text("3 Points", xPosText[2], 790);
    text4 = text("2 Points", xPosText[3], 790);
    text5 = text("2 Points", xPosText[4], 790);
    text6 = text("2 Points", xPosText[5], 790);
    text7 = text("1 Point", xPosText[6], 790);
    text8 = text("1 Point", xPosText[7], 790);
    text9 = text("1 Point", xPosText[8], 790);
    text10 = text("1 Point", xPosText[9], 790);
    if(particles[0] != undefined){
      if (particles[0].body.position.x > xPosText[0] - 15 && particles[0].body.position.x < xPosText[0] + 65 && particles[0].body.position.y >= 760){
        console.log(5);
        score = score + 5;
        particles[0] = null;
      }
    }
    if(particles[1] != undefined){
      if (particles[1].body.position.x > xPosText[0] - 15 && particles[1].body.position.x < xPosText[0] + 65 && particles[1].body.position.y >= 760){
        console.log(5);
        score = score + 5;
        particles[1] = null;
      }
    }
    if(particles[2] != undefined){
      if (particles[2].body.position.x > xPosText[0] - 15 && particles[2].body.position.x < xPosText[0] + 65 && particles[2].body.position.y >= 760){
        console.log(5);
        score = score + 5;
        particles[2] = null;
      }
    }
    if(particles[3] != undefined){
      if (particles[3].body.position.x > xPosText[0] - 15 && particles[3].body.position.x < xPosText[0] + 65 && particles[3].body.position.y >= 760){
        console.log(5);
        score = score + 5;
        particles[3] = null;
      }
    }
    if(particles[4] != undefined){
      if (particles[4].body.position.x > xPosText[0] - 15 && particles[4].body.position.x < xPosText[0] + 65 && particles[4].body.position.y >= 760){
        console.log(5);
        score = score + 5;
        particles[4] = null;
      }
    }
    // next one
    if(particles[0] != undefined){
      if (particles[0].body.position.x > xPosText[1] - 15 && particles[0].body.position.x < xPosText[1] + 65 && particles[0].body.position.y >= 760){
        console.log(5);
        score = score + 3;
        particles[0] = null;
      }
    }
    if(particles[1] != undefined){
      if (particles[1].body.position.x > xPosText[1] - 15 && particles[1].body.position.x < xPosText[1] + 65 && particles[1].body.position.y >= 760){
        console.log(5);
        score = score + 3;
        particles[1] = null;
      }
    }
    if(particles[2] != undefined){
      if (particles[2].body.position.x > xPosText[1] - 15 && particles[2].body.position.x < xPosText[1] + 65 && particles[2].body.position.y >= 760){
        console.log(5);
        score = score + 3;
        particles[2] = null;
      }
    }
    if(particles[3] != undefined){
      if (particles[3].body.position.x > xPosText[1] - 15 && particles[3].body.position.x < xPosText[1] + 65 && particles[3].body.position.y >= 760){
        console.log(5);
        score = score + 3;
        particles[3] = null;
      }
    }
    if(particles[4] != undefined){
      if (particles[4].body.position.x > xPosText[1] - 15 && particles[4].body.position.x < xPosText[1] + 65 && particles[4].body.position.y >= 760){
        console.log(5);
        score = score + 3;
        particles[4] = null;
      }
    }
        // next one
        if(particles[0] != undefined){
          if (particles[0].body.position.x > xPosText[2] - 25 && particles[0].body.position.x < xPosText[2] + 65 && particles[0].body.position.y >= 760){
            console.log(5);
            score = score + 3;
            particles[0] = null;
          }
        }
        if(particles[1] != undefined){
          if (particles[1].body.position.x > xPosText[2] - 15 && particles[1].body.position.x < xPosText[2] + 65 && particles[1].body.position.y >= 760){
            console.log(5);
            score = score + 3;
            particles[1] = null;
          }
        }
        if(particles[2] != undefined){
          if (particles[2].body.position.x > xPosText[2] - 15 && particles[2].body.position.x < xPosText[2] + 65 && particles[2].body.position.y >= 760){
            console.log(5);
            score = score + 3;
            particles[2] = null;
          }
        }
        if(particles[3] != undefined){
          if (particles[3].body.position.x > xPosText[2] - 15 && particles[3].body.position.x < xPosText[2] + 65 && particles[3].body.position.y >= 760){
            console.log(5);
            score = score + 3;
            particles[3] = null;
          }
        }
        if(particles[4] != undefined){
          if (particles[4].body.position.x > xPosText[2] - 15 && particles[4].body.position.x < xPosText[2] + 65 && particles[4].body.position.y >= 760){
            console.log(5);
            score = score + 3;
            particles[4] = null;
          }
        }
            // next one
    if(particles[0] != undefined){
      if (particles[0].body.position.x > xPosText[3] - 15 && particles[0].body.position.x < xPosText[3] + 65 && particles[0].body.position.y >= 760){
        console.log(5);
        score = score + 2;
        particles[0] = null;
      }
    }
    if(particles[1] != undefined){
      if (particles[1].body.position.x > xPosText[3] - 15 && particles[1].body.position.x < xPosText[3] + 65 && particles[1].body.position.y >= 760){
        console.log(5);
        score = score + 2;
        particles[1] = null;
      }
    }
    if(particles[2] != undefined){
      if (particles[2].body.position.x > xPosText[3] - 15 && particles[2].body.position.x < xPosText[3] + 65 && particles[2].body.position.y >= 760){
        console.log(5);
        score = score + 2;
        particles[2] = null;
      }
    }
    if(particles[3] != undefined){
      if (particles[3].body.position.x > xPosText[3] - 15 && particles[3].body.position.x < xPosText[3] + 65 && particles[3].body.position.y >= 760){
        console.log(5);
        score = score + 2;
        particles[3] = null;
      }
    }
    if(particles[4] != undefined){
      if (particles[4].body.position.x > xPosText[3] - 15 && particles[4].body.position.x < xPosText[3] + 65 && particles[4].body.position.y >= 760){
        console.log(5);
        score = score + 2;
        particles[4] = null;
      }
    }
// next one
if(particles[0] != undefined){
  if (particles[0].body.position.x > xPosText[4] - 15 && particles[0].body.position.x < xPosText[4] + 65 && particles[0].body.position.y >= 760){
    console.log(5);
    score = score + 2;
    particles[0] = null;
  }
}
if(particles[1] != undefined){
  if (particles[1].body.position.x > xPosText[4] - 15 && particles[1].body.position.x < xPosText[4] + 65 && particles[1].body.position.y >= 760){
    console.log(5);
    score = score + 2;
    particles[1] = null;
  }
}
if(particles[2] != undefined){
  if (particles[2].body.position.x > xPosText[4] - 15 && particles[2].body.position.x < xPosText[4] + 65 && particles[2].body.position.y >= 760){
    console.log(5);
    score = score + 2;
    particles[2] = null;
  }
}
if(particles[3] != undefined){
  if (particles[3].body.position.x > xPosText[4] - 15 && particles[3].body.position.x < xPosText[4] + 65 && particles[3].body.position.y >= 760){
    console.log(5);
    score = score + 2;
    particles[3] = null;
  }
}
if(particles[4] != undefined){
  if (particles[4].body.position.x > xPosText[4] - 15 && particles[4].body.position.x < xPosText[4] + 65 && particles[4].body.position.y >= 760){
    console.log(5);
    score = score + 2;
    particles[4] = null;
  }
}
                                // next one
 if(particles[0] != undefined){
   if (particles[0].body.position.x > xPosText[5] - 15 && particles[0].body.position.x < xPosText[5] + 65 && particles[0].body.position.y >= 760){
     console.log(5);
     score = score + 2;
     particles[0] = null;
   }
 }
 if(particles[1] != undefined){
   if (particles[1].body.position.x > xPosText[5] - 15 && particles[1].body.position.x < xPosText[5] + 65 && particles[1].body.position.y >= 760){
     console.log(5);
     score = score + 2;
     particles[1] = null;
   }
 }
 if(particles[2] != undefined){
   if (particles[2].body.position.x > xPosText[5] - 15 && particles[2].body.position.x < xPosText[5] + 65 && particles[2].body.position.y >= 760){
     console.log(5);
     score = score + 2;
     particles[2] = null;
   }
 }
 if(particles[3] != undefined){
   if (particles[3].body.position.x > xPosText[5] - 15 && particles[3].body.position.x < xPosText[5] + 65 && particles[3].body.position.y >= 760){
     console.log(5);
     score = score + 2;
     particles[3] = null;
   }
 }
 if(particles[4] != undefined){
   if (particles[4].body.position.x > xPosText[5] - 15 && particles[4].body.position.x < xPosText[5] + 65 && particles[4].body.position.y >= 760){
     console.log(5);
     score = score + 2;
    particles[4] = null
    }
 }
                                // next one
 if(particles[0] != undefined){
   if (particles[0].body.position.x > xPosText[6] - 15 && particles[0].body.position.x < xPosText[6] + 65 && particles[0].body.position.y >= 760){
     console.log(5);
     score = score + 1;
     particles[0] = null;
   }
 }
 if(particles[1] != undefined){
   if (particles[1].body.position.x > xPosText[6] - 15 && particles[1].body.position.x < xPosText[6] + 65 && particles[1].body.position.y >= 760){
     console.log(5);
     score = score + 1;
     particles[1] = null;
   }
 }
 if(particles[2] != undefined){
   if (particles[2].body.position.x > xPosText[6] - 15 && particles[2].body.position.x < xPosText[6] + 65 && particles[2].body.position.y >= 760){
     console.log(5);
     score = score + 1;
     particles[2] = null;
   }
 }
 if(particles[3] != undefined){
   if (particles[3].body.position.x > xPosText[6] - 15 && particles[3].body.position.x < xPosText[6] + 65 && particles[3].body.position.y >= 760){
     console.log(5);
     score = score + 1;
     particles[3] = null;
   }
 }
 if(particles[4] != undefined){
   if (particles[4].body.position.x > xPosText[6] - 15 && particles[4].body.position.x < xPosText[6] + 65 && particles[4].body.position.y >= 760){
     console.log(5);
     score = score + 1;
    particles[4] = null
    }
  }
                                  // next one
 if(particles[0] != undefined){
  if (particles[0].body.position.x > xPosText[7] - 15 && particles[0].body.position.x < xPosText[7] + 65 && particles[0].body.position.y >= 760){
    console.log(5);
    score = score + 1;
    particles[0] = null;
  }
}
if(particles[1] != undefined){
  if (particles[1].body.position.x > xPosText[7] - 15 && particles[1].body.position.x < xPosText[7] + 65 && particles[1].body.position.y >= 760){
    console.log(5);
    score = score + 1;
    particles[1] = null;
  }
}
if(particles[2] != undefined){
  if (particles[2].body.position.x > xPosText[7] - 15 && particles[2].body.position.x < xPosText[7] + 65 && particles[2].body.position.y >= 760){
    console.log(5);
    score = score + 1;
    particles[2] = null;
  }
}
if(particles[3] != undefined){
  if (particles[3].body.position.x > xPosText[7] - 15 && particles[3].body.position.x < xPosText[7] + 65 && particles[3].body.position.y >= 760){
    console.log(5);
    score = score + 1;
    particles[3] = null;
  }
}
if(particles[4] != undefined){
  if (particles[4].body.position.x > xPosText[7] - 15 && particles[4].body.position.x < xPosText[7] + 65 && particles[4].body.position.y >= 760){
    console.log(5);
    score = score + 1;
   particles[4] = null
   }
 }   
                                   // next one
  if(particles[0] != undefined){
   if (particles[0].body.position.x > xPosText[8] - 15 && particles[0].body.position.x < xPosText[8] + 65 && particles[0].body.position.y >= 760){
     console.log(5);
     score = score + 1;
     particles[0] = null;
   }
 }
 if(particles[1] != undefined){
   if (particles[1].body.position.x > xPosText[8] - 15 && particles[1].body.position.x < xPosText[8] + 65 && particles[1].body.position.y >= 760){
     console.log(5);
     score = score + 1;
     particles[1] = null;
   }
 }
 if(particles[2] != undefined){
   if (particles[2].body.position.x > xPosText[8] - 15 && particles[2].body.position.x < xPosText[8] + 65 && particles[2].body.position.y >= 760){
     console.log(5);
     score = score + 1;
     particles[2] = null;
   }
 }
 if(particles[3] != undefined){
   if (particles[3].body.position.x > xPosText[8] - 15 && particles[3].body.position.x < xPosText[8] + 65 && particles[3].body.position.y >= 760){
     console.log(5);
     score = score + 1;
     particles[3] = null;
   }
 }
 if(particles[4] != undefined){
   if (particles[4].body.position.x > xPosText[8] - 15 && particles[4].body.position.x < xPosText[8] + 65 && particles[4].body.position.y >= 760){
     console.log(5);
     score = score + 1;
    particles[4] = null
    }
  }
                                    // next one
 if(particles[0] != undefined){
  if (particles[0].body.position.x > xPosText[9] - 15 && particles[0].body.position.x < xPosText[9] + 65 && particles[0].body.position.y >= 760){
    console.log(5);
    score = score + 1;
    particles[0] = null;
  }
}
if(particles[1] != undefined){
  if (particles[1].body.position.x > xPosText[9] - 15 && particles[1].body.position.x < xPosText[9] + 65 && particles[1].body.position.y >= 760){
    console.log(5);
    score = score + 1;
    particles[1] = null;
  }
}
if(particles[2] != undefined){
  if (particles[2].body.position.x > xPosText[9] - 15 && particles[2].body.position.x < xPosText[9] + 65 && particles[2].body.position.y >= 760){
    console.log(5);
    score = score + 1;
    particles[2] = null;
  }
}
if(particles[3] != undefined){
  if (particles[3].body.position.x > xPosText[9] - 15 && particles[3].body.position.x < xPosText[9] + 65 && particles[3].body.position.y >= 760){
    console.log(5);
    score = score + 1;
    particles[3] = null;
  }
}
if(particles[4] != undefined){
  if (particles[4].body.position.x > xPosText[9] - 15 && particles[4].body.position.x < xPosText[9] + 65 && particles[4].body.position.y >= 760){
    console.log(5);
    score = score + 1;
   particles[4] = null
   }
 }                            
    var particleLength = 5-particles.length;
    if(particleLength<0){
      particleLength = 0;
    }
    turns = text("Turns left: " + particleLength, 20,30)
    if (particles.length >= 5){
      gameState = "end"
    }
    if (gameState === "end"){
      textSize(35);
      text("GAME OVER! YOUR SCORE WAS "+score+"!", width / 2-305, 460);
    }
}
function mouseReleased(){
  if(time%3 === 0 && gameState === "Playing"){
    // console.log("release");
    particles.push(new Particle(mouseX, 10,10));
    // console.log(particles);
    turns = turns+1;
    console.log(particles);
  }
}