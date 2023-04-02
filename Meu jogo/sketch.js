
//declarar as variaveis:
//hunter(sprite e img),
//os monstros
//boss

var gameState = 0;

var hunter,hunterImg;

var monstro1,monstro1Img;
var monstro2,monstro2Img;
var monstro3,monstro3Img;

var boss,bossImg;

var selva,selvaImg
var cidade,cidadeImg;

var osso,ossoImg
var ossoGroup;

var machado,machadoImg;
var machadoGroup;
var machado2,machado2Img
var machadoGroup2;

var peixe,peixeImg;
var peixeGroup;

var fogo,fogoImg;
var fogoGroup;

var vida = 10;



function preload() {
    //carrega as imagens dentro das variaveis 

    hunterImg = loadImage("./imagens/soldado.png");
    monstro1Img = loadImage("./imagens/monstro1.png");
    monstro2Img =loadImage("./imagens/monstro2.png");
    monstro3Img = loadImage("./imagens/monstro3.png");
    bossImg = loadImage("./imagens/boss.jpg");
    selvaImg = loadImage("./imagens/selva.jpg");
    cidadeImg = loadImage("./imagens/cidade.jpg");
    ossoImg = loadImage("./imagens/osso.png");
    machadoImg = loadImage("./imagens/machado.png");
    peixeImg = loadImage("./imagens/peixe.png");
    fogoImg = loadImage("./imagens/fogo.png");
    machado2 = loadImage("./imagens/machado2.png");
}

function setup() {

    createCanvas(windowWidth, windowHeight);//adaptatividade
    
    //criar um sprite para ser plano de fundo
    //criar os sprites dos personagens e posiciona-los
    //o personagem aparece o tempo todo? //boss = invisivel

    selva = createSprite(600,250,windowWidth,windowHeight)
    selva.addImage(selvaImg);
    selva.scale = 0.35;
    

    cidade =createSprite(600,250,windowWidth,windowHeight);
    cidade.addImage(cidadeImg);
    cidade.scale = 0.35;
    

   

    hunter = createSprite(85,350)
    hunter.addImage(hunterImg);
    hunter.scale = 0.2

    boss = createSprite(790,240);
    boss.addImage(bossImg);
    boss.scale = 0.5
    boss.visible = false;

    monstro1 = createSprite(1435,255)
    monstro1.addImage(monstro1Img);
    monstro1.scale = 0.2;

    monstro2 = createSprite(800,450);
    monstro2.addImage(monstro2Img);
    monstro2.scale = 0.2

    monstro3 = createSprite(500,500);
    monstro3.addImage(monstro3Img)
    monstro3.scale = 0.2;
    monstro3.visible = false;

    //ossoGroup = createGroup();
    ossoGroup = new Group();
    machadoGroup = new Group();
    peixeGroup =new Group();
    machadoGroup2 = new Group();



}
function draw() {

    background("black");
    
    //if(ossoGroup.isTouching(hunter)){
        //vida = vida -1;
    //}

    drawSprites();
    
    
    



    textSize(20);
    text("Vida:" + vida, 500, 50);
    console.log(vida);

    //cenario da selva
    if(gameState === 0){
        selva.visible = true;
        cidade.visible = false;
        monstro1.visible = true;
        monstro2.visible  = true;
        ossoCaveira();
        jogarPeixe();
        jogarMachado();
    }



    //cenario da cidade
    if(gameState === 1){
        selva.visible = false;
        cidade.visible = true;
        monstro1.visible= false;
        monstro2.visible = false;
        monstro3.visible = true;
        throwFire();
        jogarMachado();
    }
    
}


function ossoCaveira(){
    if(frameCount % 100 === 0 ){

        osso = createSprite(800,450)
        osso.addImage(ossoImg);
        osso.scale =0.1
        osso.velocity.y = -2.0;
        osso.velocity.x = -20.5;
        osso.lifetime = 20;
    
        ossoGroup.add(osso);

    }
}   

function jogarMachado(){
    if(frameCount % 100 === 0 ){

        machado = createSprite(85,350);
        machado.addImage(machadoImg);
        machado.scale =0.1
        machado.velocity.x = 10.5;
        machado.lifetime = 20;

        machadoGroup.add(machado);
    }
}

function jogarPeixe(){
    if(frameCount % 100 === 0 ){

        peixe = createSprite(1435,255);
        peixe.addImage(peixeImg);
        peixe.scale =0.1
        peixe.velocity.x = -15.5;
        peixe.lifetime = 20;

        peixeGroup.add(peixe);
    }
}

function throwFire(){
    if(frameCount % 100 === 0 ){

        fogo = createSprite(500,500);
        fogo.addImage(fogoImg);
        fogo.scale =0.1
        fogo.velocity.x = 3;
        fogo.lifetime = 20;

        
    }
}


//fazer "armas" dos demais monstros //ajustar as posições //ajustar cenário