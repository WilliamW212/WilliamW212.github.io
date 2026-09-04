$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "rgb(118, 0, 233)"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
     toggleGrid();


    // TODO 2 - Create Platforms
    createPlatform(50, 650, 100, 2,); 
    createPlatform(500, 700, 1, 1);
    createPlatform(750, 650, 50, 2);
    createPlatform(1130, 650, 25, 4);
    createPlatform(1000, 500, 1, 1);
    createPlatform(600, 400, 50, 3,"gray",500,500,500,400,525,2);
    createPlatform(200,400,75,2);
    createPlatform(350,250,650,2);
    createPlatform(100,300,25,2);
    createPlatform(1050,450,50,2);
    createBadPlatform(0,725,1200,15);
    createBadPlatform(0,1300,1000,15);
    createFakePlatform(1200,725,100,15,"red" ); //bright red for finished platform//




    // TODO 3 - Create Collectables
    createCollectable("database",100,260,0,0);
    createCollectable("database",500,350,0,0);
    createCollectable("database",1130,610,0,0);




    
    // TODO 4 - Create Cannons
    createCannon("right",260,1000);
    createCannon()


    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
