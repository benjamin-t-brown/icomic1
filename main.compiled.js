/* eslint semi: 0 */
/* eslint semi-spacing: 0 */
/* eslint no-extra-semi: 0 */
'use strict';
// var core = require( `engine/core` );
// var player = require( `engine/player` );
// var scene = require( `engine/scene` );
var files = {};
var scope = {};

files[ `comic-intro.json` ] = function( id ){
player.set( 'current_in2_file', 'comic-intro.json' );
// ACTION
scope.gYEAGUTZfw = function(){
    scene.addActor( 'ConscienceBG', 0, 0, 'invisible' );
scene.addActor( 'Conscience', 100, 100, 'invisible' );
scene.addActor( 'BlackBar1', 0, 0, 'black-bar' ); 
scene.addActor( 'BlackBar2', 0, 300, 'black-bar' );;
    scope.hzFmDoMPyq();
};

// ACTION
scope.hzFmDoMPyq = function(){
    scene.setAnimation( 'ConscienceBG', 'conscience_bg', true );;
    scope.wqQselsEdO();
};

// TEXT
scope.wqQselsEdO = function(){
    player.set( 'current_in2_node', 'wqQselsEdO' );
    var text = `...`;
    core.say( text, scope.SiefMSDbIF );
};

// TEXT
scope.SiefMSDbIF = function(){
    player.set( 'current_in2_node', 'SiefMSDbIF' );
    var text = `......`;
    core.say( text, scope.HAsuPcNxoZ );
};

// ACTION
scope.HAsuPcNxoZ = function(){
    // scene.setAnimation( 'Conscience', 'Conscience_entrance' ); ;
    scope.TkgdayrIOk();
};

// TEXT
scope.TkgdayrIOk = function(){
    // player.set( 'current_in2_node', 'TkgdayrIOk' );
    // var text = `Conscience: "Oof!"`;
    // core.say( text, scope.zTQsQOKhYm );


    core.say( 'The game will now begin.', scope.nbWLLGkDfz );
};

// ACTION
scope.zTQsQOKhYm = function(){
    scene.setAnimation( 'Conscience', 'Conscience_smiling' ); ;
    scope.lofIbShEoS();
};

// TEXT
scope.lofIbShEoS = function(){
    player.set( 'current_in2_node', 'lofIbShEoS' );
    var text = `Conscience: "Hello there!"`;
    core.say( text, scope.xRyQoQggke );
};

// ACTION
scope.xRyQoQggke = function(){
    scene.setAnimation( 'Conscience', 'Conscience_normal' ); ;
    scope.OEWaDOuaOc();
};

// TEXT
scope.OEWaDOuaOc = function(){
    player.set( 'current_in2_node', 'OEWaDOuaOc' );
    var text = `Conscience: "If you don't know me, my name is Conscience!"`;
    core.say( text, scope.qaSGqNsQBw );
};

// ACTION
scope.qaSGqNsQBw = function(){
    scene.setAnimation( 'Conscience', 'Conscience_frowning' ); ;
    scope.JUpQYBUWoK();
};

// TEXT
scope.JUpQYBUWoK = function(){
    player.set( 'current_in2_node', 'JUpQYBUWoK' );
    var text = `Conscience: "It's a little complicated, but I'm basically Ada's "imaginary friend."  Although, I don't think she likes me very much..."`;
    core.say( text, scope.pdcGrNegfq );
};

// ACTION
scope.pdcGrNegfq = function(){
    scene.setAnimation( 'Conscience', 'Conscience_normal' ); ;
    scope.yeLfpfwAJT();
};

// TEXT
scope.yeLfpfwAJT = function(){
    player.set( 'current_in2_node', 'yeLfpfwAJT' );
    var text = `Conscience: "Anyway, I thought that this would be a great opportunity for you to get to know a little bit about myself."`;
    core.say( text, scope.eXWZdJowQm );
};

// ACTION
scope.eXWZdJowQm = function(){
    scene.setAnimation( 'Conscience', 'Conscience_sad' ); ;
    scope.tWGddDomSi();
};

// TEXT
scope.tWGddDomSi = function(){
    player.set( 'current_in2_node', 'tWGddDomSi' );
    var text = `Conscience: "I get a bit lonely sometimes... There's not a lot of people I can talk to, you see, since I'm imaginary and all."`;
    core.say( text, scope.JUnydzfrON );
};

// ACTION
scope.JUnydzfrON = function(){
    scene.setAnimation( 'Conscience', 'Conscience_smiling' ); ;
    scope.zEnoVYqzIK();
};

// TEXT
scope.zEnoVYqzIK = function(){
    player.set( 'current_in2_node', 'zEnoVYqzIK' );
    var text = `Conscience: "But *you* I can definitely talk to!  Isn't that funny?"`;
    core.say( text, scope.PYNGMKYRPT );
};

// ACTION
scope.PYNGMKYRPT = function(){
    scene.setAnimation( 'Conscience', 'Conscience_normal' ); ;
    scope.NlBQyYaDtP();
};

// TEXT
scope.NlBQyYaDtP = function(){
    player.set( 'current_in2_node', 'NlBQyYaDtP' );
    var text = `Conscience: "But enough about that.  Here's what I've got in store for you:"`;
    core.say( text, scope.KKnkCpBIpq );
};

// ACTION
scope.KKnkCpBIpq = function(){
    scene.setAnimation( 'Conscience', 'Conscience_normal' ); ;
    scope.QaCQMBgATh();
};

// TEXT
scope.QaCQMBgATh = function(){
    player.set( 'current_in2_node', 'QaCQMBgATh' );
    var text = `Conscience: "I wanted you to experience kind of what it's like to be me.  That means we're going to reside in Ada's head for a while. You know: see what she sees, hear what she thinks and all that."`;
    core.say( text, scope.gUmLcduHfs );
};

// ACTION
scope.gUmLcduHfs = function(){
    scene.setAnimation( 'Conscience', 'Conscience_smiling' ); ;
    scope.hhBWBtbAfB();
};

// TEXT
scope.hhBWBtbAfB = function(){
    player.set( 'current_in2_node', 'hhBWBtbAfB' );
    var text = `Conscience: "But here's where it gets interesting..."`;
    core.say( text, scope.NdLPETabJH );
};

// ACTION
scope.NdLPETabJH = function(){
    scene.setAnimation( 'Conscience', 'Conscience_normal' ); ;
    scope.lKgllMQKze();
};

// TEXT
scope.lKgllMQKze = function(){
    player.set( 'current_in2_node', 'lKgllMQKze' );
    var text = `Conscience: "Since we're inside her head, we'll be able to influence some of the decisions she makes throughout the day.  You might call it "guiding" her to make correct choices."`;
    core.say( text, scope.hOkJNqiDPA );
};

// ACTION
scope.hOkJNqiDPA = function(){
    scene.setAnimation( 'Conscience', 'Conscience_smiling' ); ;
    scope.gdWnPpLgrF();
};

// TEXT
scope.gdWnPpLgrF = function(){
    player.set( 'current_in2_node', 'gdWnPpLgrF' );
    var text = `Conscience: "This is basically something I do every day for Ada.  But now you get to see it too!  Isn't that awesome!"`;
    core.say( text, scope.ZTSsUfHSlK );
};

// ACTION
scope.ZTSsUfHSlK = function(){
    scene.setAnimation( 'Conscience', 'Conscience_normal' ); ;
    scope.qPkcfRQYBf();
};

// TEXT
scope.qPkcfRQYBf = function(){
    player.set( 'current_in2_node', 'qPkcfRQYBf' );
    var text = `Conscience: "Don't worry.  It's only for a little while.  And we'll be going through a very normal part of the day.  So don't stress about it, okay?"`;
    core.say( text, scope.zDiOgfuzha );
};

// ACTION
scope.zDiOgfuzha = function(){
    scene.setAnimation( 'Conscience', 'Conscience_smiling' ); ;
    scope.IFOtigELVu();
};

// TEXT
scope.IFOtigELVu = function(){
    player.set( 'current_in2_node', 'IFOtigELVu' );
    var text = `Conscience: "Keep calm, and I'll get you through this."`;
    core.say( text, scope.xgoKcgVSHi );
};

// ACTION
scope.xgoKcgVSHi = function(){
    scene.setAnimation( 'Conscience', 'Conscience_smiling' ); ;
    scope.ldgQhoQiCw();
};

// TEXT
scope.ldgQhoQiCw = function(){
    player.set( 'current_in2_node', 'ldgQhoQiCw' );
    var text = `Conscience: "Alright!  If you're all set, let's go!"`;
    core.say( text, scope.nbWLLGkDfz );
};

// ACTION
scope.nbWLLGkDfz = function(){
    scene.setAnimation( 'ConscienceBG', 'black-screen', true );
scene.setAnimation( 'Conscience', 'invisible', true );
scene.stopSound( 'bgm1', true );;
    scope.KQzILpIBnm();
};

// next_file
scope.KQzILpIBnm = function(){
    var key = `comic-classroom-start.json`;
    var func = files[ key ];
    if( func ) {
        func();
    } else {
        core.say( `EXECUTION WARNING, no file exists named ${key}. You are probably running a subset of all the files, and not the whole scenario. ` + Object.keys( files ), files.exit );
    }
};
if( !id ){
    scope.gYEAGUTZfw();
}
else {
    scope[ id ]();
}
};


files[ `main.json` ] = function( id ){
player.set( 'current_in2_file', 'main.json' );
// ACTION
scope.kDtKOOTIFe = function(){
    scene.clearActors();
scene.addActor('Background', 0, 0, 'black-screen');
scene.addActor('Conscience', 100, 100, 'invisible' );
scene.addActor('BlackBar1', 0, 0, 'black-bar' ); 
scene.addActor('BlackBar2', 0, 300, 'black-bar' ); 
scene.addActor('Foreground', 0, 0, 'invisible');
scene.addActor('port1', 100, 200, 'invisible');
scene.addActor('port2', 100, 200, 'invisible');  

scene.setAnimation('Background', 'conscience_bg', true);
scene.setAnimation('Foreground', 'invisible', true);;
    scope.gbXOHhsQHC();
};

// chunk FIRST
scope.gbXOHhsQHC = function(){
    scope.gbXOHhsQHC_0();
};
// TEXT
scope.gbXOHhsQHC_0 = function(){
    player.set( 'current_in2_node', 'gbXOHhsQHC_0' );
    var text = `Before we begin: this comic has a rather quaint soundtrack.  Would you like to enable it?`;
    core.say( text, scope.gbXOHhsQHC_1 );
};
// chunk LAST
scope.gbXOHhsQHC_1 = function(){
    scope.hqVTJBWHDk();
};
// choice
scope.hqVTJBWHDk = function(){
    player.set( 'current_in2_node', 'hqVTJBWHDk' );
    var text = `Would you like to turn the sound on?`;
    core.choose( text, 'hqVTJBWHDk', [{
        text: `Yes, turn on the sound.`,
        cb: scope.SHPQiNLPMr,
        condition: () => { return true; }
    },{
        text: `No, keep the sound off.`,
        cb: scope.npNZuNEldP,
        condition: () => { return true; }
    }]);
};

// TEXT
scope.SHPQiNLPMr = function(){
    player.set( 'current_in2_node', 'SHPQiNLPMr' );
    var text = `Yes, turn on the sound.`;
    let elem = document.getElementById( 'soundimg' );
    elem.src = 'assets/img/volume.png';
    core.say( text, scope.oGMMnrfyqY );
};

// chunk FIRST
scope.oGMMnrfyqY = function(){
    scope.oGMMnrfyqY_0();
};
// TEXT
scope.oGMMnrfyqY_0 = function(){
    player.set( 'current_in2_node', 'oGMMnrfyqY_0' );
    var text = `Music will now be enabled...`;
    core.say( text, scope.oGMMnrfyqY_1 );
};

// ACTION
scope.oGMMnrfyqY_1 = function(){
    scene.is_sound_enabled = true;;
    scope.oGMMnrfyqY_2();
};

// ACTION
scope.oGMMnrfyqY_2 = function(){
    scene.playSound( 'bgm1', true );;
    scope.oGMMnrfyqY_3();
};
// chunk LAST
scope.oGMMnrfyqY_3 = function(){
    scope.OSutUtOUCW();
};
// choice
scope.OSutUtOUCW = function(){
    player.set( 'current_in2_node', 'OSutUtOUCW' );
    var text = `Interactive comic: Adalais in the Classroom.`;
    core.choose( text, 'OSutUtOUCW', [{
        text: `Start.`,
        cb: scope.ddSfqeAOQy,
        condition: () => { return true; }
    }]);
};

// TEXT
scope.ddSfqeAOQy = function(){
    player.set( 'current_in2_node', 'ddSfqeAOQy' );
    var text = `Start.`;
    core.say( text, scope.ztcRBhhMxS );
};

// next_file
scope.ztcRBhhMxS = function(){
    var key = `comic-intro.json`;
    var func = files[ key ];
    if( func ) {
        func();
    } else {
        core.say( `EXECUTION WARNING, no file exists named ${key}. You are probably running a subset of all the files, and not the whole scenario. ` + Object.keys( files ), files.exit );
    }
};
// TEXT
scope.npNZuNEldP = function(){
    player.set( 'current_in2_node', 'npNZuNEldP' );
    var text = `No, keep the sound off.`;
    document.getElementById( 'soundimg' ) && ( document.getElementById( 'soundimg' ).src = 'assets/img/volumeoff.png' );
    window.scene.is_sound_enabled = false;
    for( let i in window.scene.sounds ) window.scene.sounds[ i ].volume = 0;
    scene.playSound( 'bgm1', true );;
    core.say( text, scope.AGLTfgTJXp );
};

// chunk FIRST
scope.AGLTfgTJXp = function(){
    scope.AGLTfgTJXp_0();
};
// TEXT
scope.AGLTfgTJXp_0 = function(){
    player.set( 'current_in2_node', 'AGLTfgTJXp_0' );
    var text = `Okay, music will remain disabled.  If you change your mind, you may click the sound icon above the comic to toggle it. `;
    core.say( text, scope.AGLTfgTJXp_1 );
};
// chunk LAST
scope.AGLTfgTJXp_1 = function(){
    scope.OSutUtOUCW();
};
if( !id ){
    scope.kDtKOOTIFe();
}
else {
    scope[ id ]();
}
};


files[ `comic-end.json` ] = function( id ){
player.set( 'current_in2_file', 'comic-end.json' );
// ACTION
scope.TBtxakAQMM = function(){
    scene.clearActors();
scene.addActor('Background', 0, 0, 'black-screen'); 
scene.addActor('Blue', 153, 43, 'invisible');
scene.addActor('Adalais_act', 75, 80, 'invisible'); 
scene.addActor('John_act', 75, 80, 'invisible'); 
scene.addActor('Girls_act', 100, 230, 'invisible'); 
scene.addActor('Foreground', 0, 0, 'invisible');
scene.addActor('CellPhone', 268, 298, 'invisible'); 
scene.addActor('Banana', 30, 250, 'invisible'); 
scene.addActor('Bwow', -10, 85, 'invisible');  
scene.addActor('Overlay', 0, 0, 'invisible'); 
scene.addActor('BlackBarLeft', 0, 300, 'invisible');
scene.addActor('BlackBarRight', 200, 300, 'invisible'); 
scene.addActor('BlackBar', 0, 350, 'invisible'); 
scene.addActor('Adalais', 100, 200, 'invisible');
scene.addActor('port1', 100, 200, 'invisible');
scene.addActor('port2', 100, 200, 'invisible');  
scene.addActor('Girls', 100, 200, 'invisible'); 
scene.addActor('Door', 200, 200, 'invisible');

scene.setActorBase('Adalais_act', 75, 80, 'Ada_actor_idle1' );
scene.setAnimation('John_act', 'Jonathan_actor_right');
scene.setAnimation('Background', 'Classroom1_bg', true);
scene.setAnimation('Foreground', 'Classroom1_fg', true); 
scene.setAnimation('Girls_act', 'Girls_actor_talking', true );
scene.restoreActorBase( 'Adalais_act' );

if( player.get( 'girls_location' ) !== 'nw' ) { 
  scene.setAnimation( 'Girls_act', 'invisible' ); 
}
if( player.get( 'banana_location' ) === 'nw' ) {
  scene.setAnimation( 'Banana', 'Banana', true ); 
}
if( player.get( 'cell_phone_location' ) === 'desk' ){
  scene.setAnimation( 'CellPhone', 'Phone', true ); 
}
    scope.OlomwaEyKc();
};

// chunk FIRST
scope.OlomwaEyKc = function(){
    scope.OlomwaEyKc_0();
};
// ACTION
scope.OlomwaEyKc_0 = function(){
    scene.startConversation( 'BlackBar', 'black-bar', [ { name: 'port1', anim: 'Ada_normal' }, { name: 'port2', anim: 'Jonathan_normal' } ] );;
    scope.OlomwaEyKc_1();
};

// ACTION
scope.OlomwaEyKc_1 = function(){
    scene.setActor( 'Adalais_act', 135, 80 );;
    scope.OlomwaEyKc_2();
};

// ACTION
scope.OlomwaEyKc_2 = function(){
    scene.setActor( 'John_act', 75, 80 );;
    scope.OlomwaEyKc_3();
};

// ACTION
scope.OlomwaEyKc_3 = function(){
    scene.setAnimation( 'Adalais_act', 'Ada_actor_classroom1_leftup' );;
    scope.OlomwaEyKc_4();
};

// ACTION
scope.OlomwaEyKc_4 = function(){
    scene.setConv( 'port2', 'Jonathan_normal' );;
    scope.OlomwaEyKc_5();
};

// TEXT
scope.OlomwaEyKc_5 = function(){
    player.set( 'current_in2_node', 'OlomwaEyKc_5' );
    var text = `Jonathan: "So how come you're so eager to get out of this classroom anyway?"`;
    core.say( text, scope.OlomwaEyKc_6 );
};

// ACTION
scope.OlomwaEyKc_6 = function(){
    scene.setConv( 'port2', 'Jonathan_normal' );;
    scope.OlomwaEyKc_7();
};

// TEXT
scope.OlomwaEyKc_7 = function(){
    player.set( 'current_in2_node', 'OlomwaEyKc_7' );
    var text = `Jonathan: "Why can't you just wait for them to open the door for us?"`;
    core.say( text, scope.OlomwaEyKc_8 );
};

// ACTION
scope.OlomwaEyKc_8 = function(){
    scene.setConv( 'port1', 'Ada_normal2' );;
    scope.OlomwaEyKc_9();
};

// TEXT
scope.OlomwaEyKc_9 = function(){
    player.set( 'current_in2_node', 'OlomwaEyKc_9' );
    var text = `Adalais: "Because I said so, Jonathan." `;
    core.say( text, scope.OlomwaEyKc_10 );
};

// ACTION
scope.OlomwaEyKc_10 = function(){
    scene.setConv( 'port1', 'Ada_angry' ); ;
    scope.OlomwaEyKc_11();
};

// TEXT
scope.OlomwaEyKc_11 = function(){
    player.set( 'current_in2_node', 'OlomwaEyKc_11' );
    var text = `Adalais: "I have spent too long figuring a way out of here to waste time on an explanation for you."`;
    core.say( text, scope.OlomwaEyKc_12 );
};

// ACTION
scope.OlomwaEyKc_12 = function(){
    scene.setConv( 'port2', 'Jonathan_normal' );;
    scope.OlomwaEyKc_13();
};

// TEXT
scope.OlomwaEyKc_13 = function(){
    player.set( 'current_in2_node', 'OlomwaEyKc_13' );
    var text = `Jonathan: "Sheesh.  Fine, forget I asked."`;
    core.say( text, scope.OlomwaEyKc_14 );
};

// ACTION
scope.OlomwaEyKc_14 = function(){
    scene.setConv( 'port2', 'Jonathan_normal' );;
    scope.OlomwaEyKc_15();
};

// TEXT
scope.OlomwaEyKc_15 = function(){
    player.set( 'current_in2_node', 'OlomwaEyKc_15' );
    var text = `Jonathan: "Let's just open the window now."`;
    core.say( text, scope.OlomwaEyKc_16 );
};

// ACTION
scope.OlomwaEyKc_16 = function(){
    scene.setAnimation( 'Adalais_act', 'Ada_actor_struggle2' );;
    scope.OlomwaEyKc_17();
};

// ACTION
scope.OlomwaEyKc_17 = function(){
    scene.setActor( 'Adalais_act', 165, 55 );;
    scope.OlomwaEyKc_18();
};

// ACTION
scope.OlomwaEyKc_18 = function(){
    scene.setAnimation( 'John_act', 'Jonathan_actor_lift' );;
    scope.OlomwaEyKc_19();
};

// ACTION
scope.OlomwaEyKc_19 = function(){
    scene.setActor( 'John_act', 135, 59 );;
    scope.OlomwaEyKc_20();
};

// ACTION
scope.OlomwaEyKc_20 = function(){
    scene.setAnimation( 'port1', 'invisible' );;
    scope.OlomwaEyKc_21();
};

// ACTION
scope.OlomwaEyKc_21 = function(){
    scene.setAnimation( 'port2', 'invisible' );;
    scope.OlomwaEyKc_22();
};

// ACTION
scope.OlomwaEyKc_22 = function(){
    scene.setAnimation( 'Blue', 'Open_Window' );;
    scope.OlomwaEyKc_23();
};

// TEXT
scope.OlomwaEyKc_23 = function(){
    player.set( 'current_in2_node', 'OlomwaEyKc_23' );
    var text = `...`;
    core.say( text, scope.OlomwaEyKc_24 );
};

// ACTION
scope.OlomwaEyKc_24 = function(){
    scene.setAnimation( 'Adalais_act', 'Ada_actor_classroom1_leftup' );;
    scope.OlomwaEyKc_25();
};

// ACTION
scope.OlomwaEyKc_25 = function(){
    scene.setAnimation( 'John_act', 'Jonathan_actor_right' );;
    scope.OlomwaEyKc_26();
};

// ACTION
scope.OlomwaEyKc_26 = function(){
    scene.setActor( 'John_act', 105, 59 );;
    scope.OlomwaEyKc_27();
};

// ACTION
scope.OlomwaEyKc_27 = function(){
    scene.setConv( 'port1', 'Ada_surprised' );;
    scope.OlomwaEyKc_28();
};

// TEXT
scope.OlomwaEyKc_28 = function(){
    player.set( 'current_in2_node', 'OlomwaEyKc_28' );
    var text = `Adalais: "Yes!  Finally I can get out of here."`;
    core.say( text, scope.OlomwaEyKc_29 );
};

// ACTION
scope.OlomwaEyKc_29 = function(){
    scene.setAnimation( 'port1', 'invisible' );;
    scope.OlomwaEyKc_30();
};

// ACTION
scope.OlomwaEyKc_30 = function(){
    scene.setAnimation( 'Adalais_act', 'invisible' );;
    scope.OlomwaEyKc_31();
};

// TEXT
scope.OlomwaEyKc_31 = function(){
    player.set( 'current_in2_node', 'OlomwaEyKc_31' );
    var text = `...`;
    core.say( text, scope.OlomwaEyKc_32 );
};

// ACTION
scope.OlomwaEyKc_32 = function(){
    scene.setConv( 'port2', 'Jonathan_normal' );;
    scope.OlomwaEyKc_33();
};

// ACTION
scope.OlomwaEyKc_33 = function(){
    scene.setAnimation( 'port1', 'invisible' );;
    scope.OlomwaEyKc_34();
};

// TEXT
scope.OlomwaEyKc_34 = function(){
    player.set( 'current_in2_node', 'OlomwaEyKc_34' );
    var text = `Jonathan: "You're welcome by the way..."`;
    core.say( text, scope.OlomwaEyKc_35 );
};

// ACTION
scope.OlomwaEyKc_35 = function(){
    scene.setAnimation( 'John_act', 'Jonathan_actor_down' );;
    scope.OlomwaEyKc_36();
};

// ACTION
scope.OlomwaEyKc_36 = function(){
    scene.endConversation();;
    scope.OlomwaEyKc_37();
};

// ACTION
scope.OlomwaEyKc_37 = function(){
    scene.startConversation( 'BlackBar', 'black-bar', [ { name: 'port1', anim: 'Jonathan_normal' }, { name: 'port2', anim: 'Door_normal' } ] );;
    scope.OlomwaEyKc_38();
};

// ACTION
scope.OlomwaEyKc_38 = function(){
    scene.setConv( 'port2', 'invisible' );;
    scope.OlomwaEyKc_39();
};

// TEXT
scope.OlomwaEyKc_39 = function(){
    player.set( 'current_in2_node', 'OlomwaEyKc_39' );
    var text = `*KNOCK* *KNOCK*`;
    core.say( text, scope.OlomwaEyKc_40 );
};

// ACTION
scope.OlomwaEyKc_40 = function(){
    scene.setConv( 'port2' );;
    scope.OlomwaEyKc_41();
};

// TEXT
scope.OlomwaEyKc_41 = function(){
    player.set( 'current_in2_node', 'OlomwaEyKc_41' );
    var text = `Voice: "Hello in there?  We're gonna move the vending machine now."`;
    core.say( text, scope.OlomwaEyKc_42 );
};

// ACTION
scope.OlomwaEyKc_42 = function(){
    scene.setConv( 'port2' );;
    scope.OlomwaEyKc_43();
};

// TEXT
scope.OlomwaEyKc_43 = function(){
    player.set( 'current_in2_node', 'OlomwaEyKc_43' );
    var text = `Voice: "Sorry about that by the way.  I hope it didn't cause you an inconvenience."`;
    core.say( text, scope.OlomwaEyKc_44 );
};

// ACTION
scope.OlomwaEyKc_44 = function(){
    scene.endConversation();;
    scope.OlomwaEyKc_45();
};

// ACTION
scope.OlomwaEyKc_45 = function(){
    scene.stopSound( 'bgm3', true );;
    scope.OlomwaEyKc_46();
};

// TEXT
scope.OlomwaEyKc_46 = function(){
    player.set( 'current_in2_node', 'OlomwaEyKc_46' );
    var text = `...`;
    core.say( text, scope.OlomwaEyKc_47 );
};

// ACTION
scope.OlomwaEyKc_47 = function(){
    scene.setAnimation( 'Overlay', 'black-screen', true );;
    scope.OlomwaEyKc_48();
};
// chunk LAST
scope.OlomwaEyKc_48 = function(){
    scope.tOPpeiKOUA();
};
// ACTION
scope.tOPpeiKOUA = function(){
    scene.clearActors();
scene.addActor('Background', 0, 0, 'black-screen');
scene.addActor('Conscience', 100, 100, 'invisible' );
scene.addActor('BlackBar1', 0, 0, 'black-bar' ); 
scene.addActor('BlackBar2', 0, 300, 'black-bar' ); 
scene.addActor('Foreground', 0, 0, 'invisible');
scene.addActor('port1', 100, 200, 'invisible');
scene.addActor('port2', 100, 200, 'invisible');  
scene.addActor('Overlay', 0, 0, 'invisible' );

scene.setAnimation('Background', 'conscience_bg', true);
scene.setAnimation('Foreground', 'invisible', true);
;
    scope.gsdMlWAfbS();
};

// chunk FIRST
scope.gsdMlWAfbS = function(){
    scope.gsdMlWAfbS_0();
};
// ACTION
scope.gsdMlWAfbS_0 = function(){
    scene.playSound( 'bgm1', true );;
    scope.gsdMlWAfbS_1();
};

// TEXT
scope.gsdMlWAfbS_1 = function(){
    player.set( 'current_in2_node', 'gsdMlWAfbS_1' );
    var text = `.....`;
    core.say( text, scope.gsdMlWAfbS_2 );
};

// ACTION
scope.gsdMlWAfbS_2 = function(){
    // scene.setAnimation( 'Conscience', 'Conscience_entrance' ); ;
    // scope.gsdMlWAfbS_3();

    core.say('Congratulations! You have completed this game.', scope.gsdMlWAfbS_20);
};

// TEXT
scope.gsdMlWAfbS_3 = function(){
    player.set( 'current_in2_node', 'gsdMlWAfbS_3' );
    var text = `Conscience: "Oof!"`;
    core.say( text, scope.gsdMlWAfbS_4 );
};

// ACTION
scope.gsdMlWAfbS_4 = function(){
    scene.setAnimation( 'Conscience', 'Conscience_smiling' ); ;
    scope.gsdMlWAfbS_5();
};

// TEXT
scope.gsdMlWAfbS_5 = function(){
    player.set( 'current_in2_node', 'gsdMlWAfbS_5' );
    var text = `Conscience: "Hi there again!"`;
    core.say( text, scope.gsdMlWAfbS_6 );
};

// ACTION
scope.gsdMlWAfbS_6 = function(){
    scene.setAnimation( 'Conscience', 'Conscience_normal' ); ;
    scope.gsdMlWAfbS_7();
};

// TEXT
scope.gsdMlWAfbS_7 = function(){
    player.set( 'current_in2_node', 'gsdMlWAfbS_7' );
    var text = `Conscience: "I hope you enjoyed that.  Believe it or not it was kind of difficult to make."`;
    core.say( text, scope.gsdMlWAfbS_8 );
};

// ACTION
scope.gsdMlWAfbS_8 = function(){
    scene.setAnimation( 'Conscience', 'Conscience_smiling' );;
    scope.gsdMlWAfbS_9();
};

// TEXT
scope.gsdMlWAfbS_9 = function(){
    player.set( 'current_in2_node', 'gsdMlWAfbS_9' );
    var text = `Conscience: "But I suppose it all came together in the end."`;
    core.say( text, scope.gsdMlWAfbS_10 );
};

// ACTION
scope.gsdMlWAfbS_10 = function(){
    scene.setAnimation( 'Conscience', 'Conscience_normal' );;
    scope.gsdMlWAfbS_11();
};

// TEXT
scope.gsdMlWAfbS_11 = function(){
    player.set( 'current_in2_node', 'gsdMlWAfbS_11' );
    var text = `Conscience: "Anyway, I thought you did a pretty good job of guiding Adalais through her trials and tribulations."`;
    core.say( text, scope.gsdMlWAfbS_12 );
};

// ACTION
scope.gsdMlWAfbS_12 = function(){
    scene.setAnimation( 'Conscience', 'Conscience_frowning' ); ;
    scope.gsdMlWAfbS_13();
};

// TEXT
scope.gsdMlWAfbS_13 = function(){
    player.set( 'current_in2_node', 'gsdMlWAfbS_13' );
    var text = `Conscience: (Although, I may have done a teeny bit better.)`;
    core.say( text, scope.gsdMlWAfbS_14 );
};

// ACTION
scope.gsdMlWAfbS_14 = function(){
    scene.setAnimation( 'Conscience', 'Conscience_normal' );;
    scope.gsdMlWAfbS_15();
};

// TEXT
scope.gsdMlWAfbS_15 = function(){
    player.set( 'current_in2_node', 'gsdMlWAfbS_15' );
    var text = `Conscience: "You handled yourself well for the first time."`;
    core.say( text, scope.gsdMlWAfbS_16 );
};

// ACTION
scope.gsdMlWAfbS_16 = function(){
    scene.setAnimation( 'Conscience', 'Conscience_smiling' ); ;
    scope.gsdMlWAfbS_17();
};

// TEXT
scope.gsdMlWAfbS_17 = function(){
    player.set( 'current_in2_node', 'gsdMlWAfbS_17' );
    var text = `Conscience: "Anyway, that's it!  That's the end!"`;
    core.say( text, scope.gsdMlWAfbS_18 );
};

// ACTION
scope.gsdMlWAfbS_18 = function(){
    scene.setAnimation( 'Conscience', 'Conscience_smiling' ); ;
    scope.gsdMlWAfbS_19();
};

// TEXT
scope.gsdMlWAfbS_19 = function(){
    player.set( 'current_in2_node', 'gsdMlWAfbS_19' );
    var text = `Conscience: "Come again next time!"`;
    core.say( text, scope.gsdMlWAfbS_20 );
};

// ACTION
scope.gsdMlWAfbS_20 = function(){
    scene.setAnimation( 'Overlay', 'black-screen', true );;
    scope.gsdMlWAfbS_21();
};

// TEXT
scope.gsdMlWAfbS_21 = function(){
    player.set( 'current_in2_node', 'gsdMlWAfbS_21' );
    var text = `...`;
    core.say( text, scope.gsdMlWAfbS_22 );
};

// ACTION
scope.gsdMlWAfbS_22 = function(){
    scene.credits = true;;
    scope.gsdMlWAfbS_23();
};

// TEXT
scope.gsdMlWAfbS_23 = function(){
    player.set( 'current_in2_node', 'gsdMlWAfbS_23' );
    var text = `.....`;
    core.say( text, scope.gsdMlWAfbS_24 );
};

// ACTION
scope.gsdMlWAfbS_24 = function(){
    scene.credits = false;;
    scope.gsdMlWAfbS_25();
};
// chunk LAST
scope.gsdMlWAfbS_25 = function(){
    scope.ipBXRMOgJd();
};
// next_file
scope.ipBXRMOgJd = function(){
    var key = `main.json`;
    var func = files[ key ];
    if( func ) {
        func();
    } else {
        core.say( `EXECUTION WARNING, no file exists named ${key}. You are probably running a subset of all the files, and not the whole scenario. ` + Object.keys( files ), files.exit );
    }
};
if( !id ){
    scope.TBtxakAQMM();
}
else {
    scope[ id ]();
}
};


files[ `comic-inventory.json` ] = function( id ){
player.set( 'current_in2_file', 'comic-inventory.json' );
// ACTION
scope.nfSDFUIpJD = function(){
    var inv = [];
player.get( 'cell_phone_location' ) === 'ada' && inv.push( 'Cell Phone' );
player.get( 'banana_location' ) === 'ada' && inv.push( 'Rancid Banana' );
player.get( 'pop_quiz_location' ) === 'ada' && inv.push( 'Pop Quiz' );
player.get( 'mousepad_location' ) === 'ada' && inv.push( 'Mousepad' );
player.get( 'stapler_location' ) === 'ada' && inv.push( 'Stapler' );
player.get( 'scissors_location' ) === 'ada' && inv.push( 'Scissors' );
player.get( 'av_key_location' ) === 'ada' && inv.push( 'AV Key' );
player.get( 'aux_cable_location' ) === 'ada' && inv.push( 'AUX Cable' );
player.get( 'cut_up_mousepad_location' ) === 'ada' && inv.push( 'Cut-up Mousepad' );
player.get( 'unstuffed_pillow_location' ) === 'ada' && inv.push( 'Unstuffed Pillow' );
player.get( 'makeshift_pillow_location' ) === 'ada' && inv.push( 'Makeshift Pillow' );
player.get( 'book_location' ) === 'ada' && inv.push( 'Thick Pizza Cook Book' );
player.get( 'blank_paper_location' ) === 'ada' && inv.push( 'Blank Paper' );
player.get( 'ink_revealer_location' ) === 'ada' && inv.push( 'Invisible Ink Revealer' );
player.get( 'aux_phone_location' ) === 'ada' && inv.push( 'Aux Cable + Phone' );
player.set( 'local_inventory', inv );;
    scope.bKKDRAtZDb();
};

// choice
scope.bKKDRAtZDb = function(){
    player.set( 'current_in2_node', 'bKKDRAtZDb' );
    var text = `I have these items.`;
    core.choose( text, 'bKKDRAtZDb', [{
        text: `Go back.`,
        cb: scope.TSnDcxZmnS,
        condition: () => { return true; }
    },{
        text: `${player.get( 'local_inventory' )[0]}`,
        cb: scope.geuYluJfAg,
        condition: () => { return player.get( 'local_inventory' )[0] }
    },{
        text: `${player.get( 'local_inventory' )[1]}`,
        cb: scope.byBtmoWeLN,
        condition: () => { return player.get( 'local_inventory' )[1] }
    },{
        text: `${player.get( 'local_inventory' )[2]}`,
        cb: scope.QMQTMzXOBG,
        condition: () => { return player.get( 'local_inventory' )[2] }
    },{
        text: `${player.get( 'local_inventory' )[3]}`,
        cb: scope.klPANiOfKG,
        condition: () => { return player.get( 'local_inventory' )[3] }
    },{
        text: `${player.get( 'local_inventory' )[4]}`,
        cb: scope.NINxnoXAYX,
        condition: () => { return player.get( 'local_inventory' )[4] }
    },{
        text: `${player.get( 'local_inventory' )[5]}`,
        cb: scope.BOQRWumbPf,
        condition: () => { return player.get( 'local_inventory' )[5] }
    },{
        text: `${player.get( 'local_inventory' )[6]}`,
        cb: scope.gczDQyAbbR,
        condition: () => { return player.get( 'local_inventory' )[6] }
    },{
        text: `${player.get( 'local_inventory' )[7]}`,
        cb: scope.rFdAfSfNfm,
        condition: () => { return player.get( 'local_inventory' )[7] }
    },{
        text: `${player.get( 'local_inventory' )[8]}`,
        cb: scope.sIQwxGuzeK,
        condition: () => { return player.get( 'local_inventory' )[8] }
    }]);
};

// TEXT
scope.TSnDcxZmnS = function(){
    player.set( 'current_in2_node', 'TSnDcxZmnS' );
    var text = `Go back.`;
    core.say( text, scope.yZOuwEWfFu );
};

// next_file
scope.yZOuwEWfFu = function(){
    var key = `${player.get('last_room')}`;
    var func = files[ key ];
    if( func ) {
        func();
    } else {
        core.say( `EXECUTION WARNING, no file exists named ${key}. You are probably running a subset of all the files, and not the whole scenario. ` + Object.keys( files ), files.exit );
    }
};
// TEXT
scope.geuYluJfAg = function(){
    player.set( 'current_in2_node', 'geuYluJfAg' );
    var text = `${player.get( 'local_inventory' )[0]}`;
    core.say( text, scope.qZLBUyGdfV );
};

// ACTION
scope.qZLBUyGdfV = function(){
    player.set( 'selected_item', player.get( 'local_inventory' )[0] );;
    scope.PfZDdfOAxV();
};

// choice
scope.PfZDdfOAxV = function(){
    player.set( 'current_in2_node', 'PfZDdfOAxV' );
    var text = `Use ${player.state.local_inventory.splice( player.state.local_inventory.indexOf( player.state.selected_item ), 1 ),player.get( 'selected_item' )} with what?`;
    core.choose( text, 'PfZDdfOAxV', [{
        text: `Something in this room.`,
        cb: scope.HgFJLzZgSw,
        condition: () => { return true; }
    },{
        text: `${player.get( 'local_inventory' )[0]}`,
        cb: scope.amBLQdahDt,
        condition: () => { return player.get( 'local_inventory' )[0] }
    },{
        text: `${player.get( 'local_inventory' )[1]}`,
        cb: scope.TwgzezfHea,
        condition: () => { return player.get( 'local_inventory' )[1] }
    },{
        text: `${player.get( 'local_inventory' )[2]}`,
        cb: scope.VJrQMShYKk,
        condition: () => { return player.get( 'local_inventory' )[2] }
    },{
        text: `${player.get( 'local_inventory' )[3]}`,
        cb: scope.bolrPRYfFG,
        condition: () => { return player.get( 'local_inventory' )[3] }
    },{
        text: `${player.get( 'local_inventory' )[4]}`,
        cb: scope.rSisSIhUFt,
        condition: () => { return player.get( 'local_inventory' )[4] }
    },{
        text: `${player.get( 'local_inventory' )[5]}`,
        cb: scope.hqOHdOzdig,
        condition: () => { return player.get( 'local_inventory' )[5] }
    },{
        text: `${player.get( 'local_inventory' )[6]}`,
        cb: scope.huYngOSzEN,
        condition: () => { return player.get( 'local_inventory' )[6] }
    },{
        text: `${player.get( 'local_inventory' )[7]}`,
        cb: scope.fILrcpffiX,
        condition: () => { return player.get( 'local_inventory' )[7] }
    }]);
};

// TEXT
scope.HgFJLzZgSw = function(){
    player.set( 'current_in2_node', 'HgFJLzZgSw' );
    var text = `Something in this room.`;
    core.say( text, scope.xMlQUYDbsH );
};

// ACTION
scope.xMlQUYDbsH = function(){
    player.set( 'selected_item2', 'Something' );;
    scope.xXQphlYrPg();
};

// pass_fail
scope.xXQphlYrPg = function(){
    player.set( 'current_in2_node', 'xXQphlYrPg' );
    var condition = ( function(){ return player.compare( 'Cell Phone', 'Stapler', 'selected_item', 'selected_item2' ); } )();
    if( condition ){
        player.set( 'current_in2_node', 'KXfJlpdhyz' );
        var text = ``;
        core.say( text, scope.GPMyUCxcWQ );
    }
    if( !condition ){
        player.set( 'current_in2_node', 'XtPpoaVgJl' );
        var text = ``;
        core.say( text, scope.cQxSDTKFox );
    }
};
// chunk FIRST
scope.GPMyUCxcWQ = function(){
    scope.GPMyUCxcWQ_0();
};
// ACTION
scope.GPMyUCxcWQ_0 = function(){
    scene.startConversation( 'BlackBar', 'black-bar', [ { name: 'port1', anim: 'Ada_normal' } ] );;
    scope.GPMyUCxcWQ_1();
};

// ACTION
scope.GPMyUCxcWQ_1 = function(){
    scene.setConv( 'port1', 'Ada_annoyed' );;
    scope.GPMyUCxcWQ_2();
};

// TEXT
scope.GPMyUCxcWQ_2 = function(){
    player.set( 'current_in2_node', 'GPMyUCxcWQ_2' );
    var text = `Adalais: Jonathan's cell phone and the stapler?`;
    core.say( text, scope.GPMyUCxcWQ_3 );
};

// ACTION
scope.GPMyUCxcWQ_3 = function(){
    scene.setConv( 'port1', 'Ada_angry' );;
    scope.GPMyUCxcWQ_4();
};

// TEXT
scope.GPMyUCxcWQ_4 = function(){
    player.set( 'current_in2_node', 'GPMyUCxcWQ_4' );
    var text = `Adalais: What would I possibly do with these two things that would not result in a broken phone?`;
    core.say( text, scope.GPMyUCxcWQ_5 );
};

// ACTION
scope.GPMyUCxcWQ_5 = function(){
    scene.endConversation();;
    scope.GPMyUCxcWQ_6();
};

// ACTION
scope.GPMyUCxcWQ_6 = function(){
    scene.restoreActorBase( 'Adalais_act' );;
    scope.GPMyUCxcWQ_7();
};
// chunk LAST
scope.GPMyUCxcWQ_7 = function(){
    scope.nfSDFUIpJD();
};

// pass_fail
scope.cQxSDTKFox = function(){
    player.set( 'current_in2_node', 'cQxSDTKFox' );
    var condition = ( function(){ return player.compare( 'Rancid Banana', 'Something', 'selected_item', 'selected_item2' ); } )();
    if( !condition ){
        player.set( 'current_in2_node', 'rQPMAxuyaQ' );
        var text = ``;
        core.say( text, scope.oVVEASThqk );
    }
    if( condition ){
        player.set( 'current_in2_node', 'yezPtGIygP' );
        var text = ``;
        core.say( text, scope.FtLaFwneFF );
    }
};
// pass_fail
scope.oVVEASThqk = function(){
    player.set( 'current_in2_node', 'oVVEASThqk' );
    var condition = ( function(){ return player.compare( 'Scissors', 'Something', 'selected_item', 'selected_item2' ) && player.get( 'has_entered_avcloset' ) && player.get( "last_room" ) === "comic-classroom2.json"; } )();
    if( condition ){
        player.set( 'current_in2_node', 'LOgSGAKnDR' );
        var text = ``;
        core.say( text, scope.tBoxhqLUyS );
    }
    if( !condition ){
        player.set( 'current_in2_node', 'XGqZBsuCpw' );
        var text = ``;
        core.say( text, scope.EMtCiRfYwN );
    }
};
// chunk FIRST
scope.tBoxhqLUyS = function(){
    scope.tBoxhqLUyS_0();
};
// ACTION
scope.tBoxhqLUyS_0 = function(){
    scene.startConversation( 'BlackBar', 'black-bar', [ { name: 'port1', anim: 'Ada_normal' } ] );;
    scope.tBoxhqLUyS_1();
};

// ACTION
scope.tBoxhqLUyS_1 = function(){
    scene.setConv( 'port1', 'Ada_thoughtful' );;
    scope.tBoxhqLUyS_2();
};

// ACTION
scope.tBoxhqLUyS_2 = function(){
    scene.setActor( 'Adalais_act', 45, 220 );;
    scope.tBoxhqLUyS_3();
};

// ACTION
scope.tBoxhqLUyS_3 = function(){
    scene.setAnimation( 'Adalais_act', 'Ada_actor_classroom1_left' );;
    scope.tBoxhqLUyS_4();
};

// TEXT
scope.tBoxhqLUyS_4 = function(){
    player.set( 'current_in2_node', 'tBoxhqLUyS_4' );
    var text = `Adalais: I need to make a pillow for Otis.  I need a cloth large enough to act as one.`;
    core.say( text, scope.tBoxhqLUyS_5 );
};

// ACTION
scope.tBoxhqLUyS_5 = function(){
    scene.setConv( 'port1', 'Ada_normal' );;
    scope.tBoxhqLUyS_6();
};

// TEXT
scope.tBoxhqLUyS_6 = function(){
    player.set( 'current_in2_node', 'tBoxhqLUyS_6' );
    var text = `Adalais: Mr. Ralgo's mousepad is hilariously large, and also serves as a decent cloth.  It just might work.`;
    core.say( text, scope.tBoxhqLUyS_7 );
};

// ACTION
scope.tBoxhqLUyS_7 = function(){
    scene.setConv( 'port1', 'Ada_thoughtful' );;
    scope.tBoxhqLUyS_8();
};

// TEXT
scope.tBoxhqLUyS_8 = function(){
    player.set( 'current_in2_node', 'tBoxhqLUyS_8' );
    var text = `Adalais: If I cut it a bit with these scissors, I may be able to form the base of a pillow.`;
    core.say( text, scope.tBoxhqLUyS_9 );
};

// ACTION
scope.tBoxhqLUyS_9 = function(){
    scene.setConv( 'port1', 'invisible' );;
    scope.tBoxhqLUyS_10();
};

// ACTION
scope.tBoxhqLUyS_10 = function(){
    scene.setAnimation( 'Mousepad', 'invisible' );;
    scope.tBoxhqLUyS_11();
};

// TEXT
scope.tBoxhqLUyS_11 = function(){
    player.set( 'current_in2_node', 'tBoxhqLUyS_11' );
    var text = `...`;
    core.say( text, scope.tBoxhqLUyS_12 );
};

// ACTION
scope.tBoxhqLUyS_12 = function(){
    scene.setConv( 'port1', 'Ada_smug' );;
    scope.tBoxhqLUyS_13();
};

// TEXT
scope.tBoxhqLUyS_13 = function(){
    player.set( 'current_in2_node', 'tBoxhqLUyS_13' );
    var text = `Adalais: Okay, I have now cut up Mr. Ralgo's mousepad.  Though I doubt he will be too happy about it.`;
    core.say( text, scope.tBoxhqLUyS_14 );
};

// ACTION
scope.tBoxhqLUyS_14 = function(){
    scene.endConversation();;
    scope.tBoxhqLUyS_15();
};
// chunk LAST
scope.tBoxhqLUyS_15 = function(){
    scope.OTZGoqwElO();
};
// ACTION
scope.OTZGoqwElO = function(){
    player.set( "cut_up_mousepad_location", 'ada' );
    scope.cUPeoNcopu();
};

// ACTION
scope.cUPeoNcopu = function(){
    player.set( "mousepad_location", 'nothing' );
    scope.nfSDFUIpJD();
};


// pass_fail
scope.EMtCiRfYwN = function(){
    player.set( 'current_in2_node', 'EMtCiRfYwN' );
    var condition = ( function(){ return player.compare( 'Cut-up Mousepad', 'Stapler', 'selected_item', 'selected_item2' );
 } )();
    if( condition ){
        player.set( 'current_in2_node', 'FbXYpLrmuF' );
        var text = ``;
        core.say( text, scope.xUiGpQUfgf );
    }
    if( !condition ){
        player.set( 'current_in2_node', 'wYlpizKaSr' );
        var text = ``;
        core.say( text, scope.iVVMzqCbqq );
    }
};
// chunk FIRST
scope.xUiGpQUfgf = function(){
    scope.xUiGpQUfgf_0();
};
// ACTION
scope.xUiGpQUfgf_0 = function(){
    scene.startConversation( 'BlackBar', 'black-bar', [ { name: 'port1', anim: 'Ada_normal' } ] );;
    scope.xUiGpQUfgf_1();
};

// ACTION
scope.xUiGpQUfgf_1 = function(){
    scene.setConv( 'port1', 'Ada_normal' );;
    scope.xUiGpQUfgf_2();
};

// TEXT
scope.xUiGpQUfgf_2 = function(){
    player.set( 'current_in2_node', 'xUiGpQUfgf_2' );
    var text = `Adalais: I may be able to use these staples as a kind of 'stitching' to hold this mousepad together into a pillow.`;
    core.say( text, scope.xUiGpQUfgf_3 );
};

// ACTION
scope.xUiGpQUfgf_3 = function(){
    scene.setConv( 'port1', 'invisible' );;
    scope.xUiGpQUfgf_4();
};

// TEXT
scope.xUiGpQUfgf_4 = function(){
    player.set( 'current_in2_node', 'xUiGpQUfgf_4' );
    var text = `...`;
    core.say( text, scope.xUiGpQUfgf_5 );
};

// ACTION
scope.xUiGpQUfgf_5 = function(){
    scene.setConv( 'port1', 'Ada_normal' );;
    scope.xUiGpQUfgf_6();
};

// TEXT
scope.xUiGpQUfgf_6 = function(){
    player.set( 'current_in2_node', 'xUiGpQUfgf_6' );
    var text = `Adalais: Okay, now I have an unstuffed-pillow.`;
    core.say( text, scope.xUiGpQUfgf_7 );
};

// ACTION
scope.xUiGpQUfgf_7 = function(){
    scene.endConversation();;
    scope.xUiGpQUfgf_8();
};
// chunk LAST
scope.xUiGpQUfgf_8 = function(){
    scope.GqkMNHqrfx();
};
// ACTION
scope.GqkMNHqrfx = function(){
    player.set( "cut_up_mousepad_location", 'nothing' );
    scope.OaMgDpoiTb();
};

// ACTION
scope.OaMgDpoiTb = function(){
    player.set( "unstuffed_pillow_location", 'ada' );
    scope.nfSDFUIpJD();
};


// pass_fail
scope.iVVMzqCbqq = function(){
    player.set( 'current_in2_node', 'iVVMzqCbqq' );
    var condition = ( function(){ return player.compare( 'Cell Phone', 'Something', 'selected_item', 'selected_item2' );
 } )();
    if( !condition ){
        player.set( 'current_in2_node', 'VBeYaFcdHi' );
        var text = ``;
        core.say( text, scope.BSLEedAbGu );
    }
    if( condition ){
        player.set( 'current_in2_node', 'BYkWXfhNlM' );
        var text = ``;
        core.say( text, scope.uWYoPAtDIJ );
    }
};
// pass_fail
scope.BSLEedAbGu = function(){
    player.set( 'current_in2_node', 'BSLEedAbGu' );
    var condition = ( function(){ return player.compare( 'Aux Cable + Phone', 'Something', 'selected_item', 'selected_item2' ); } )();
    if( !condition ){
        player.set( 'current_in2_node', 'uJgfHGpMZH' );
        var text = ``;
        core.say( text, scope.XUfEelbuTZ );
    }
    if( condition ){
        player.set( 'current_in2_node', 'yBfVVHEtUy' );
        var text = ``;
        core.say( text, scope.fTmOcXAHRq );
    }
};
// pass_fail
scope.XUfEelbuTZ = function(){
    player.set( 'current_in2_node', 'XUfEelbuTZ' );
    var condition = ( function(){ return player.compare( 'Cell Phone', 'AUX Cable', 'selected_item', 'selected_item2' );
 } )();
    if( !condition ){
        player.set( 'current_in2_node', 'gRkdABdfMC' );
        var text = ``;
        core.say( text, scope.GWfLVMTEOd );
    }
    if( condition ){
        player.set( 'current_in2_node', 'mFwnAiCqyl' );
        var text = ``;
        core.say( text, scope.CcWAbYDXHd );
    }
};
// pass_fail
scope.GWfLVMTEOd = function(){
    player.set( 'current_in2_node', 'GWfLVMTEOd' );
    var condition = ( function(){ return player.compare( 'Unstuffed Pillow', 'Something', 'selected_item', 'selected_item2' );
 } )();
    if( condition ){
        player.set( 'current_in2_node', 'nhCgJXLYsz' );
        var text = ``;
        core.say( text, scope.LwoSoMnFJu );
    }
    if( !condition ){
        player.set( 'current_in2_node', 'PeaPoFHNRE' );
        var text = ``;
        core.say( text, scope.wrccfKQIHh );
    }
};
// pass_fail
scope.LwoSoMnFJu = function(){
    player.set( 'current_in2_node', 'LwoSoMnFJu' );
    var condition = ( function(){ return player.get('last_room') === 'comic-classroom3-sw.json' && player.get( 'first_aid_location' ) === 'top' } )();
    if( !condition ){
        player.set( 'current_in2_node', 'yOifpVqUGo' );
        var text = ``;
        core.say( text, scope.xgSxJTWQFm );
    }
    if( condition ){
        player.set( 'current_in2_node', 'spLEkuicEm' );
        var text = ``;
        core.say( text, scope.KeSguptSIU );
    }
};
// chunk FIRST
scope.xgSxJTWQFm = function(){
    scope.xgSxJTWQFm_0();
};
// ACTION
scope.xgSxJTWQFm_0 = function(){
    scene.startConversation( 'BlackBar', 'black-bar', [ { name: 'port1', anim: 'Ada_normal' } ] );;
    scope.xgSxJTWQFm_1();
};

// ACTION
scope.xgSxJTWQFm_1 = function(){
    scene.setConv( 'port1', 'Ada_normal' );;
    scope.xgSxJTWQFm_2();
};

// TEXT
scope.xgSxJTWQFm_2 = function(){
    player.set( 'current_in2_node', 'xgSxJTWQFm_2' );
    var text = `Adalais: I need to find a way to stuff this pillow so that it is at least semi-comfortable.`;
    core.say( text, scope.xgSxJTWQFm_3 );
};

// ACTION
scope.xgSxJTWQFm_3 = function(){
    scene.endConversation();;
    scope.xgSxJTWQFm_4();
};
// chunk LAST
scope.xgSxJTWQFm_4 = function(){
    scope.nfSDFUIpJD();
};

// chunk FIRST
scope.KeSguptSIU = function(){
    scope.KeSguptSIU_0();
};
// ACTION
scope.KeSguptSIU_0 = function(){
    scene.startConversation( 'BlackBar', 'black-bar', [ { name: 'port1', anim: 'Ada_normal' } ] );;
    scope.KeSguptSIU_1();
};

// ACTION
scope.KeSguptSIU_1 = function(){
    scene.setConv( 'port1', 'Ada_thoughtful' );;
    scope.KeSguptSIU_2();
};

// TEXT
scope.KeSguptSIU_2 = function(){
    player.set( 'current_in2_node', 'KeSguptSIU_2' );
    var text = `Adalais: There are so many extra cottonballs in this first-aid kit.`;
    core.say( text, scope.KeSguptSIU_3 );
};

// TEXT
scope.KeSguptSIU_3 = function(){
    player.set( 'current_in2_node', 'KeSguptSIU_3' );
    var text = `Adalais: I can use a bunch of them to stuff this pillow.`;
    core.say( text, scope.KeSguptSIU_4 );
};

// ACTION
scope.KeSguptSIU_4 = function(){
    scene.setConv( 'port1', 'invisible' );;
    scope.KeSguptSIU_5();
};

// TEXT
scope.KeSguptSIU_5 = function(){
    player.set( 'current_in2_node', 'KeSguptSIU_5' );
    var text = `...`;
    core.say( text, scope.KeSguptSIU_6 );
};

// ACTION
scope.KeSguptSIU_6 = function(){
    scene.setConv( 'port1', 'Ada_thoughtful' );;
    scope.KeSguptSIU_7();
};

// TEXT
scope.KeSguptSIU_7 = function(){
    player.set( 'current_in2_node', 'KeSguptSIU_7' );
    var text = `Adalais: I now have a Makeshift Pillow.  Perhaps it is good enough for Otis.`;
    core.say( text, scope.KeSguptSIU_8 );
};

// ACTION
scope.KeSguptSIU_8 = function(){
    scene.endConversation();;
    scope.KeSguptSIU_9();
};
// chunk LAST
scope.KeSguptSIU_9 = function(){
    scope.LgceApPcEQ();
};
// ACTION
scope.LgceApPcEQ = function(){
    player.set( "unstuffed_pillow_location", 'nothing' );
    scope.ThNJkrysnE();
};

// ACTION
scope.ThNJkrysnE = function(){
    player.set( "makeshift_pillow_location", 'ada' );
    scope.nfSDFUIpJD();
};


// pass_fail
scope.wrccfKQIHh = function(){
    player.set( 'current_in2_node', 'wrccfKQIHh' );
    var condition = ( function(){ return player.compare( 'AV Key', 'Something', 'selected_item', 'selected_item2' );
 } )();
    if( condition ){
        player.set( 'current_in2_node', 'rhKobNfkVg' );
        var text = ``;
        core.say( text, scope.ffNgNNLbaA );
    }
    if( !condition ){
        player.set( 'current_in2_node', 'whFAgutaDM' );
        var text = ``;
        core.say( text, scope.GHCozGmuVx );
    }
};
// chunk FIRST
scope.ffNgNNLbaA = function(){
    scope.ffNgNNLbaA_0();
};
// ACTION
scope.ffNgNNLbaA_0 = function(){
    scene.startConversation( 'BlackBar', 'black-bar', [ { name: 'port1', anim: 'Ada_normal' } ] );;
    scope.ffNgNNLbaA_1();
};

// ACTION
scope.ffNgNNLbaA_1 = function(){
    scene.setConv( 'port1', 'Ada_normal' );;
    scope.ffNgNNLbaA_2();
};

// TEXT
scope.ffNgNNLbaA_2 = function(){
    player.set( 'current_in2_node', 'ffNgNNLbaA_2' );
    var text = `Adalais: I may be able to open the AV Closet with this key if I go examine the door.`;
    core.say( text, scope.ffNgNNLbaA_3 );
};

// ACTION
scope.ffNgNNLbaA_3 = function(){
    scene.endConversation();;
    scope.ffNgNNLbaA_4();
};
// chunk LAST
scope.ffNgNNLbaA_4 = function(){
    scope.nfSDFUIpJD();
};

// pass_fail
scope.GHCozGmuVx = function(){
    player.set( 'current_in2_node', 'GHCozGmuVx' );
    var condition = ( function(){ return player.compare( 'Thick Pizza Cook Book', 'Something', 'selected_item', 'selected_item2' );
 } )();
    if( !condition ){
        player.set( 'current_in2_node', 'igHpMPSNZk' );
        var text = ``;
        core.say( text, scope.rwOVJEbpHw );
    }
    if( condition ){
        player.set( 'current_in2_node', 'EofPaTwHlM' );
        var text = ``;
        core.say( text, scope.fRQgZcRhCl );
    }
};
// pass_fail
scope.rwOVJEbpHw = function(){
    player.set( 'current_in2_node', 'rwOVJEbpHw' );
    var condition = ( function(){ return player.compare( 'Invisible Ink Revealer', 'Blank Paper', 'selected_item', 'selected_item2' ); } )();
    if( condition ){
        player.set( 'current_in2_node', 'TdQkOxqHoV' );
        var text = ``;
        core.say( text, scope.RdglneWaoi );
    }
    if( !condition ){
        player.set( 'current_in2_node', 'rMgGPsEgcS' );
        var text = ``;
        core.say( text, scope.geICUhrKbn );
    }
};
// ACTION
scope.RdglneWaoi = function(){
    player.set( "blank_paper_location", "nowhere" );
    scope.TCIUFilFHQ();
};

// ACTION
scope.TCIUFilFHQ = function(){
    player.set( "has_seen_otis_note", true );
    scope.pSGBSOZFCf();
};

// chunk FIRST
scope.pSGBSOZFCf = function(){
    scope.pSGBSOZFCf_0();
};
// ACTION
scope.pSGBSOZFCf_0 = function(){
    scene.startConversation( 'BlackBar', 'black-bar', [ { name: 'port1', anim: 'Ada_normal' } ] );;
    scope.pSGBSOZFCf_1();
};

// ACTION
scope.pSGBSOZFCf_1 = function(){
    scene.setConv( 'port1', 'Ada_normal' );;
    scope.pSGBSOZFCf_2();
};

// TEXT
scope.pSGBSOZFCf_2 = function(){
    player.set( 'current_in2_node', 'pSGBSOZFCf_2' );
    var text = `Adalais: Hmm.  I seriously doubt this will do anything, but I may as well try.`;
    core.say( text, scope.pSGBSOZFCf_3 );
};

// ACTION
scope.pSGBSOZFCf_3 = function(){
    scene.setConv( 'port1', 'Ada_annoyed' );;
    scope.pSGBSOZFCf_4();
};

// TEXT
scope.pSGBSOZFCf_4 = function(){
    player.set( 'current_in2_node', 'pSGBSOZFCf_4' );
    var text = `Adalais: ...wow.`;
    core.say( text, scope.pSGBSOZFCf_5 );
};

// ACTION
scope.pSGBSOZFCf_5 = function(){
    scene.setConv( 'port1', 'Ada_normal' );;
    scope.pSGBSOZFCf_6();
};

// TEXT
scope.pSGBSOZFCf_6 = function(){
    player.set( 'current_in2_node', 'pSGBSOZFCf_6' );
    var text = `Adalais: Somebody did actually write a message on this paper.`;
    core.say( text, scope.pSGBSOZFCf_7 );
};

// ACTION
scope.pSGBSOZFCf_7 = function(){
    scene.endConversation();;
    scope.pSGBSOZFCf_8();
};

// ACTION
scope.pSGBSOZFCf_8 = function(){
    scene.setAnimation( 'Overlay', 'Note', true );;
    scope.pSGBSOZFCf_9();
};

// TEXT
scope.pSGBSOZFCf_9 = function(){
    player.set( 'current_in2_node', 'pSGBSOZFCf_9' );
    var text = `...`;
    core.say( text, scope.pSGBSOZFCf_10 );
};

// TEXT
scope.pSGBSOZFCf_10 = function(){
    player.set( 'current_in2_node', 'pSGBSOZFCf_10' );
    var text = `.....`;
    core.say( text, scope.pSGBSOZFCf_11 );
};

// ACTION
scope.pSGBSOZFCf_11 = function(){
    scene.startConversation( 'BlackBar', 'black-bar', [ { name: 'port1', anim: 'Ada_normal' } ] );;
    scope.pSGBSOZFCf_12();
};

// ACTION
scope.pSGBSOZFCf_12 = function(){
    scene.setAnimation( 'Overlay', 'invisible', true );;
    scope.pSGBSOZFCf_13();
};

// ACTION
scope.pSGBSOZFCf_13 = function(){
    scene.setConv( 'port1', 'Ada_annoyed' );;
    scope.pSGBSOZFCf_14();
};

// TEXT
scope.pSGBSOZFCf_14 = function(){
    player.set( 'current_in2_node', 'pSGBSOZFCf_14' );
    var text = `Adalais: Sky Captain Otis...?  He really fancies himself.`;
    core.say( text, scope.pSGBSOZFCf_15 );
};

// ACTION
scope.pSGBSOZFCf_15 = function(){
    scene.setConv( 'port1', 'Ada_normal' );;
    scope.pSGBSOZFCf_16();
};

// TEXT
scope.pSGBSOZFCf_16 = function(){
    player.set( 'current_in2_node', 'pSGBSOZFCf_16' );
    var text = `Adalais: Something is written on the back of it as well:`;
    core.say( text, scope.pSGBSOZFCf_17 );
};

// ACTION
scope.pSGBSOZFCf_17 = function(){
    scene.setConv( 'port1', 'Ada_normal2' );;
    scope.pSGBSOZFCf_18();
};

// TEXT
scope.pSGBSOZFCf_18 = function(){
    player.set( 'current_in2_node', 'pSGBSOZFCf_18' );
    var text = `Adalais: "PS If Mr. Ralgo finds this letter and discovers it was written in invisible ink..."`;
    core.say( text, scope.pSGBSOZFCf_19 );
};

// TEXT
scope.pSGBSOZFCf_19 = function(){
    player.set( 'current_in2_node', 'pSGBSOZFCf_19' );
    var text = `Adalais: "...then this is also my will.  I give all my possessions to my amazing and wonderful sister, Vivianna."`;
    core.say( text, scope.pSGBSOZFCf_20 );
};

// ACTION
scope.pSGBSOZFCf_20 = function(){
    scene.setConv( 'port1', 'Ada_annoyed' );;
    scope.pSGBSOZFCf_21();
};

// TEXT
scope.pSGBSOZFCf_21 = function(){
    player.set( 'current_in2_node', 'pSGBSOZFCf_21' );
    var text = `Adalais: Ugh... He can be so brilliant and so very dumb at the same time.`;
    core.say( text, scope.pSGBSOZFCf_22 );
};

// ACTION
scope.pSGBSOZFCf_22 = function(){
    scene.setConv( 'port1', 'Ada_normal' );;
    scope.pSGBSOZFCf_23();
};

// TEXT
scope.pSGBSOZFCf_23 = function(){
    player.set( 'current_in2_node', 'pSGBSOZFCf_23' );
    var text = `Adalais: I suppose it is time for me to check the bookshelf...`;
    core.say( text, scope.pSGBSOZFCf_24 );
};

// ACTION
scope.pSGBSOZFCf_24 = function(){
    scene.setAnimation( 'Overlay', 'Note' );;
    scope.pSGBSOZFCf_25();
};

// ACTION
scope.pSGBSOZFCf_25 = function(){
    scene.endConversation();;
    scope.pSGBSOZFCf_26();
};
// chunk LAST
scope.pSGBSOZFCf_26 = function(){
    scope.yZOuwEWfFu();
};

// chunk FIRST
scope.geICUhrKbn = function(){
    scope.geICUhrKbn_0();
};
// ACTION
scope.geICUhrKbn_0 = function(){
    scene.startConversation( 'BlackBar', 'black-bar', [ { name: 'port1', anim: 'Ada_normal' } ] );;
    scope.geICUhrKbn_1();
};

// ACTION
scope.geICUhrKbn_1 = function(){
    scene.setConv( 'port1', 'Ada_annoyed' );;
    scope.geICUhrKbn_2();
};

// TEXT
scope.geICUhrKbn_2 = function(){
    player.set( 'current_in2_node', 'geICUhrKbn_2' );
    var text = `Adalais: I do not know why I would do that.`;
    core.say( text, scope.geICUhrKbn_3 );
};

// ACTION
scope.geICUhrKbn_3 = function(){
    scene.endConversation();;
    scope.geICUhrKbn_4();
};

// ACTION
scope.geICUhrKbn_4 = function(){
    scene.restoreActorBase( 'Adalais_act' );;
    scope.geICUhrKbn_5();
};
// chunk LAST
scope.geICUhrKbn_5 = function(){
    scope.nfSDFUIpJD();
};

// pass_fail
scope.fRQgZcRhCl = function(){
    player.set( 'current_in2_node', 'fRQgZcRhCl' );
    var condition = ( function(){ return player.get('last_room') === 'comic-classroom3-sw.json' } )();
    if( condition ){
        player.set( 'current_in2_node', 'pBoCFADPfr' );
        var text = ``;
        core.say( text, scope.FIcxVmgVMc );
    }
    if( !condition ){
        if (player.get( 'classroom4_chair_location' ) === 'shelf') {
            player.set( 'current_in2_node', 'OTWmeTJTHB' );
            var text = ``;
            core.say( text, scope.UAPlftbXrK );
        } else {
            scope.geICUhrKbn();
        }
    }
};
// chunk FIRST
scope.FIcxVmgVMc = function(){
    scope.FIcxVmgVMc_0();
};
// ACTION
scope.FIcxVmgVMc_0 = function(){
    scene.startConversation( 'BlackBar', 'black-bar', [ { name: 'port1', anim: 'Ada_normal' } ] );;
    scope.FIcxVmgVMc_1();
};

// ACTION
scope.FIcxVmgVMc_1 = function(){
    scene.setConv( 'port1', 'Ada_normal' );;
    scope.FIcxVmgVMc_2();
};

// TEXT
scope.FIcxVmgVMc_2 = function(){
    player.set( 'current_in2_node', 'FIcxVmgVMc_2' );
    var text = `Adalais: I already got the book from this side of the room.`;
    core.say( text, scope.FIcxVmgVMc_3 );
};

// ACTION
scope.FIcxVmgVMc_3 = function(){
    scene.endConversation();;
    scope.FIcxVmgVMc_4();
};
// chunk LAST
scope.FIcxVmgVMc_4 = function(){
    scope.bKKDRAtZDb();
};

// pass_fail
scope.UAPlftbXrK = function(){
    player.set( 'current_in2_node', 'UAPlftbXrK' );
    var condition = ( function(){ return player.get('last_room') === 'comic-classroom4-se.json' } )();
    if( !condition ){
        player.set( 'current_in2_node', 'mJWKDLzEPW' );
        var text = ``;
        core.say( text, scope.yMlgzaPzNu );
    }
    if( condition ){
        player.set( 'current_in2_node', 'GLBfWCYKEO' );
        var text = ``;
        core.say( text, scope.ZifiRpAkQC );
    }
};
// pass_fail
scope.yMlgzaPzNu = function(){
    player.set( 'current_in2_node', 'yMlgzaPzNu' );
    var condition = ( function(){ return player.get('last_room') === 'comic-classroom2.json' } )();
    if( condition ){
        player.set( 'current_in2_node', 'SkJtlbihGu' );
        var text = ``;
        core.say( text, scope.MSwlehAUVB );
    }
    if( !condition ){
        player.set( 'current_in2_node', 'IpSVWYnfrU' );
        var text = ``;
        core.say( text, scope.geICUhrKbn );
    }
};
// ACTION
scope.MSwlehAUVB = function(){
    player.set( "book_location", 'bookshelf' );
    scope.cCgDzcfCHV();
};

// ACTION
scope.cCgDzcfCHV = function(){
    player.set( "has_filing_cabinet_key", true );
    scope.WDoBIbcfsd();
};

// chunk FIRST
scope.WDoBIbcfsd = function(){
    scope.WDoBIbcfsd_0();
};
// ACTION
scope.WDoBIbcfsd_0 = function(){
    scene.startConversation( 'BlackBar', 'black-bar', [ { name: 'port1', anim: 'Ada_normal' } ] );;
    scope.WDoBIbcfsd_1();
};

// ACTION
scope.WDoBIbcfsd_1 = function(){
    scene.setActor( 'Adalais_act', 137, 74 );;
    scope.WDoBIbcfsd_2();
};

// ACTION
scope.WDoBIbcfsd_2 = function(){
    scene.setAnimation( 'Adalais_act', 'Ada_actor_classroom1_up' );;
    scope.WDoBIbcfsd_3();
};

// ACTION
scope.WDoBIbcfsd_3 = function(){
    scene.setConv( 'port1', 'Ada_normal' );;
    scope.WDoBIbcfsd_4();
};

// TEXT
scope.WDoBIbcfsd_4 = function(){
    player.set( 'current_in2_node', 'WDoBIbcfsd_4' );
    var text = `Adalais: Otis's note said to put a book in the bottom of this bookshelf.`;
    core.say( text, scope.WDoBIbcfsd_5 );
};

// ACTION
scope.WDoBIbcfsd_5 = function(){
    scene.setConv( 'port1', 'invisible' );;
    scope.WDoBIbcfsd_6();
};

// TEXT
scope.WDoBIbcfsd_6 = function(){
    player.set( 'current_in2_node', 'WDoBIbcfsd_6' );
    var text = `...`;
    core.say( text, scope.WDoBIbcfsd_7 );
};

// ACTION
scope.WDoBIbcfsd_7 = function(){
    scene.setConv( 'port1', 'Ada_surprised' );;
    scope.WDoBIbcfsd_8();
};

// TEXT
scope.WDoBIbcfsd_8 = function(){
    player.set( 'current_in2_node', 'WDoBIbcfsd_8' );
    var text = `Adalais: Oh? Something dropped onto the shelf?`;
    core.say( text, scope.WDoBIbcfsd_9 );
};

// ACTION
scope.WDoBIbcfsd_9 = function(){
    scene.setConv( 'port1', 'Ada_normal' );;
    scope.WDoBIbcfsd_10();
};

// TEXT
scope.WDoBIbcfsd_10 = function(){
    player.set( 'current_in2_node', 'WDoBIbcfsd_10' );
    var text = `Adalais: It is a key.`;
    core.say( text, scope.WDoBIbcfsd_11 );
};

// ACTION
scope.WDoBIbcfsd_11 = function(){
    scene.endConversation();;
    scope.WDoBIbcfsd_12();
};

// ACTION
scope.WDoBIbcfsd_12 = function(){
    scene.restoreActorBase( 'Adalais_act' );;
    scope.WDoBIbcfsd_13();
};
// chunk LAST
scope.WDoBIbcfsd_13 = function(){
    scope.yZOuwEWfFu();
};


// chunk FIRST
scope.ZifiRpAkQC = function(){
    scope.ZifiRpAkQC_0();
};
// ACTION
scope.ZifiRpAkQC_0 = function(){
    scene.startConversation( 'BlackBar', 'black-bar', [ { name: 'port1', anim: 'Ada_normal' } ] );;
    scope.ZifiRpAkQC_1();
};

// ACTION
scope.ZifiRpAkQC_1 = function(){
    scene.setConv( 'port1', 'Ada_normal' );;
    scope.ZifiRpAkQC_2();
};

// ACTION
scope.ZifiRpAkQC_2 = function(){
    scene.setActor( 'Adalais_act', 205, 178 );;
    scope.ZifiRpAkQC_3();
};

// ACTION
scope.ZifiRpAkQC_3 = function(){
    scene.setAnimation( 'Adalais_act', 'Ada_actor_classroom1_right' );;
    scope.ZifiRpAkQC_4();
};

// TEXT
scope.ZifiRpAkQC_4 = function(){
    player.set( 'current_in2_node', 'ZifiRpAkQC_4' );
    var text = `Adalais: Maybe I can put the book on the chair to get a little bit more height.`;
    core.say( text, scope.ZifiRpAkQC_5 );
};

// ACTION
scope.ZifiRpAkQC_5 = function(){
    scene.setAnimation( 'Book', 'Book');;
    scope.ZifiRpAkQC_6();
};

// ACTION
scope.ZifiRpAkQC_6 = function(){
    scene.setConv( 'port1', 'invisible' );;
    scope.ZifiRpAkQC_7();
};

// TEXT
scope.ZifiRpAkQC_7 = function(){
    player.set( 'current_in2_node', 'ZifiRpAkQC_7' );
    var text = `...`;
    core.say( text, scope.ZifiRpAkQC_8 );
};

// ACTION
scope.ZifiRpAkQC_8 = function(){
    scene.setConv( 'port1', 'Ada_normal' );;
    scope.ZifiRpAkQC_9();
};

// TEXT
scope.ZifiRpAkQC_9 = function(){
    player.set( 'current_in2_node', 'ZifiRpAkQC_9' );
    var text = `Adalais: Okay, the book is on the chair now.`;
    core.say( text, scope.ZifiRpAkQC_10 );
};

// ACTION
scope.ZifiRpAkQC_10 = function(){
    scene.endConversation();;
    scope.ZifiRpAkQC_11();
};
// chunk LAST
scope.ZifiRpAkQC_11 = function(){
    scope.iUfOqfyAop();
};
// ACTION
scope.iUfOqfyAop = function(){
    player.set( "book_location", 'chair' );
    scope.yZOuwEWfFu();
};


// ACTION
scope.CcWAbYDXHd = function(){
    player.set( "cell_phone_location", 'nothing' );
    scope.KZXPXznPHy();
};

// ACTION
scope.KZXPXznPHy = function(){
    player.set( "aux_cable_location", true );
    scope.BJyqDblyLO();
};

// ACTION
scope.BJyqDblyLO = function(){
    player.set( "aux_phone_location", 'ada' );
    scope.zFQyHcqCYx();
};

// chunk FIRST
scope.zFQyHcqCYx = function(){
    scope.zFQyHcqCYx_0();
};
// ACTION
scope.zFQyHcqCYx_0 = function(){
    scene.startConversation( 'BlackBar', 'black-bar', [ { name: 'port1', anim: 'Ada_normal' } ] );;
    scope.zFQyHcqCYx_1();
};

// ACTION
scope.zFQyHcqCYx_1 = function(){
    scene.setConv( 'port1', 'Ada_normal' );;
    scope.zFQyHcqCYx_2();
};

// TEXT
scope.zFQyHcqCYx_2 = function(){
    player.set( 'current_in2_node', 'zFQyHcqCYx_2' );
    var text = `Adalais: I have Johnathan's cell phone and an AUX cable.`;
    core.say( text, scope.zFQyHcqCYx_3 );
};

// TEXT
scope.zFQyHcqCYx_3 = function(){
    player.set( 'current_in2_node', 'zFQyHcqCYx_3' );
    var text = `Adalais: He said he put his music on here. I could hook it up to some speakers if I so desired.`;
    core.say( text, scope.zFQyHcqCYx_4 );
};

// TEXT
scope.zFQyHcqCYx_4 = function(){
    player.set( 'current_in2_node', 'zFQyHcqCYx_4' );
    var text = `...`;
    core.say( text, scope.zFQyHcqCYx_5 );
};

// TEXT
scope.zFQyHcqCYx_5 = function(){
    player.set( 'current_in2_node', 'zFQyHcqCYx_5' );
    var text = `Adalais: Okay, I have an aux cable hooked up to a cell phone.`;
    core.say( text, scope.zFQyHcqCYx_6 );
};

// ACTION
scope.zFQyHcqCYx_6 = function(){
    scene.endConversation();;
    scope.zFQyHcqCYx_7();
};
// chunk LAST
scope.zFQyHcqCYx_7 = function(){
    scope.nfSDFUIpJD();
};

// chunk FIRST
scope.fTmOcXAHRq = function(){
    scope.fTmOcXAHRq_0();
};
// ACTION
scope.fTmOcXAHRq_0 = function(){
    scene.startConversation( 'BlackBarLeft', 'black-bar-left', [ { name: 'port1', anim: 'Ada_normal' } ] );;
    scope.fTmOcXAHRq_1();
};

// ACTION
scope.fTmOcXAHRq_1 = function(){
    scene.setConv( 'port1', 'Ada_normal' );;
    scope.fTmOcXAHRq_2();
};

// ACTION
scope.fTmOcXAHRq_2 = function(){
    scene.setActor( 'Adalais_act', 142, 259 );;
    scope.fTmOcXAHRq_3();
};

// ACTION
scope.fTmOcXAHRq_3 = function(){
    scene.setAnimation( 'Adalais_act', 'Ada_actor_classroom1_right' );;
    scope.fTmOcXAHRq_4();
};

// TEXT
scope.fTmOcXAHRq_4 = function(){
    player.set( 'current_in2_node', 'fTmOcXAHRq_4' );
    var text = `Adalais: I have Jonathan's cell phone.  Should I hook it up to the speakers in this room?`;
    core.say( text, scope.fTmOcXAHRq_5 );
};
// chunk LAST
scope.fTmOcXAHRq_5 = function(){
    scope.cwgeQCQJJq();
};
// choice
scope.cwgeQCQJJq = function(){
    player.set( 'current_in2_node', 'cwgeQCQJJq' );
    var text = `Should I hook up Jonathan's cell phone to Mr. Ralgo's speakers?`;
    core.choose( text, 'cwgeQCQJJq', [{
        text: `Yes.`,
        cb: scope.tLfGqpiICI,
        condition: () => { return true; }
    },{
        text: `No.`,
        cb: scope.kBknPKYlGn,
        condition: () => { return true; }
    }]);
};

// TEXT
scope.tLfGqpiICI = function(){
    player.set( 'current_in2_node', 'tLfGqpiICI' );
    var text = `Yes.`;
    core.say( text, scope.OtxifAgtlx );
};

// ACTION
scope.OtxifAgtlx = function(){
    player.set( "aux_cable_location", 'desk' );
    scope.tTgJwlQQpL();
};

// ACTION
scope.tTgJwlQQpL = function(){
    player.set( "cell_phone_location", 'desk' );
    scope.NNKUDTybkB();
};

// chunk FIRST
scope.NNKUDTybkB = function(){
    scope.NNKUDTybkB_0();
};
// ACTION
scope.NNKUDTybkB_0 = function(){
    scene.setConv( 'port1', 'Ada_normal' );;
    scope.NNKUDTybkB_1();
};

// TEXT
scope.NNKUDTybkB_1 = function(){
    player.set( 'current_in2_node', 'NNKUDTybkB_1' );
    var text = `Adalais: Give me a moment.`;
    core.say( text, scope.NNKUDTybkB_2 );
};

// ACTION
scope.NNKUDTybkB_2 = function(){
    scene.setConv( 'port1', 'invisible' );;
    scope.NNKUDTybkB_3();
};

// TEXT
scope.NNKUDTybkB_3 = function(){
    player.set( 'current_in2_node', 'NNKUDTybkB_3' );
    var text = `...`;
    core.say( text, scope.NNKUDTybkB_4 );
};

// ACTION
scope.NNKUDTybkB_4 = function(){
    scene.setAnimation( 'CellPhone', 'Phone' );;
    scope.NNKUDTybkB_5();
};

// ACTION
scope.NNKUDTybkB_5 = function(){
    scene.setConv( 'port1', 'Ada_normal' );;
    scope.NNKUDTybkB_6();
};

// TEXT
scope.NNKUDTybkB_6 = function(){
    player.set( 'current_in2_node', 'NNKUDTybkB_6' );
    var text = `Adalais: Okay, now the phone is hooked up to the speakers.`;
    core.say( text, scope.NNKUDTybkB_7 );
};

// ACTION
scope.NNKUDTybkB_7 = function(){
    scene.endConversation();;
    scope.NNKUDTybkB_8();
};

// ACTION
scope.NNKUDTybkB_8 = function(){
    scene.restoreActorBase( 'Adalais_act' );;
    scope.NNKUDTybkB_9();
};
// chunk LAST
scope.NNKUDTybkB_9 = function(){
    scope.yZOuwEWfFu();
};
// TEXT
scope.kBknPKYlGn = function(){
    player.set( 'current_in2_node', 'kBknPKYlGn' );
    var text = `No.`;
    core.say( text, scope.UJZGegfYgG );
};

// chunk FIRST
scope.UJZGegfYgG = function(){
    scope.UJZGegfYgG_0();
};
// ACTION
scope.UJZGegfYgG_0 = function(){
    scene.startConversation( 'BlackBar', 'black-bar', [ { name: 'port1', anim: 'Ada_normal' } ] );;
    scope.UJZGegfYgG_1();
};

// ACTION
scope.UJZGegfYgG_1 = function(){
    scene.setConv( 'port1', 'Ada_normal' );;
    scope.UJZGegfYgG_2();
};

// TEXT
scope.UJZGegfYgG_2 = function(){
    player.set( 'current_in2_node', 'UJZGegfYgG_2' );
    var text = `Adalais: I will hold onto Johnathan's cell phone for now.`;
    core.say( text, scope.UJZGegfYgG_3 );
};

// ACTION
scope.UJZGegfYgG_3 = function(){
    scene.endConversation();;
    scope.UJZGegfYgG_4();
};
// chunk LAST
scope.UJZGegfYgG_4 = function(){
    scope.nfSDFUIpJD();
};

// pass_fail
scope.uWYoPAtDIJ = function(){
    player.set( 'current_in2_node', 'uWYoPAtDIJ' );
    var condition = ( function(){ return player.get('last_room') === 'comic-classroom1.json' && player.get( 'girls_location' ) === 'sw' } )();
    if( !condition ){
        player.set( 'current_in2_node', 'PfhZuhzxyT' );
        var text = ``;
        core.say( text, scope.QQwBBVzzuB );
    }
    if( condition ){
        player.set( 'current_in2_node', 'UbBcxrqxfi' );
        var text = ``;
        core.say( text, scope.QeetUqiEgf );
    }
};
// chunk FIRST
scope.QQwBBVzzuB = function(){
    scope.QQwBBVzzuB_0();
};
// ACTION
scope.QQwBBVzzuB_0 = function(){
    scene.startConversation( 'BlackBar', 'black-bar', [ { name: 'port1', anim: 'Ada_normal' } ] );;
    scope.QQwBBVzzuB_1();
};

// ACTION
scope.QQwBBVzzuB_1 = function(){
    scene.setConv( 'port1', 'Ada_normal' );;
    scope.QQwBBVzzuB_2();
};

// TEXT
scope.QQwBBVzzuB_2 = function(){
    player.set( 'current_in2_node', 'QQwBBVzzuB_2' );
    var text = `Adalais: I have John's cell phone, but I cannot use it here at the moment.`;
    core.say( text, scope.QQwBBVzzuB_3 );
};

// ACTION
scope.QQwBBVzzuB_3 = function(){
    scene.endConversation();;
    scope.QQwBBVzzuB_4();
};
// chunk LAST
scope.QQwBBVzzuB_4 = function(){
    scope.nfSDFUIpJD();
};

// pass_fail
scope.QeetUqiEgf = function(){
    player.set( 'current_in2_node', 'QeetUqiEgf' );
    var condition = ( function(){ return player.get( 'aux_cable_location' ) === 'ada' } )();
    if( !condition ){
        player.set( 'current_in2_node', 'ggnhJbMJKA' );
        var text = ``;
        core.say( text, scope.bLUWqMXKXz );
    }
    if( condition ){
        player.set( 'current_in2_node', 'caMabdUoxE' );
        var text = ``;
        core.say( text, scope.fTmOcXAHRq );
    }
};
// chunk FIRST
scope.bLUWqMXKXz = function(){
    scope.bLUWqMXKXz_0();
};
// ACTION
scope.bLUWqMXKXz_0 = function(){
    scene.startConversation( 'BlackBar', 'black-bar', [ { name: 'port1', anim: 'Ada_normal' } ] );;
    scope.bLUWqMXKXz_1();
};

// ACTION
scope.bLUWqMXKXz_1 = function(){
    scene.setConv( 'port1', 'Ada_normal' );;
    scope.bLUWqMXKXz_2();
};

// TEXT
scope.bLUWqMXKXz_2 = function(){
    player.set( 'current_in2_node', 'bLUWqMXKXz_2' );
    var text = `Adalais: I have John's cell phone.  If I had a 3.5mm aux cable, I could plug it into Mr. Ralgo's speakers.`;
    core.say( text, scope.bLUWqMXKXz_3 );
};

// ACTION
scope.bLUWqMXKXz_3 = function(){
    scene.endConversation();;
    scope.bLUWqMXKXz_4();
};
// chunk LAST
scope.bLUWqMXKXz_4 = function(){
    scope.nfSDFUIpJD();
};


// pass_fail
scope.FtLaFwneFF = function(){
    player.set( 'current_in2_node', 'FtLaFwneFF' );
    var condition = ( function(){ return player.get( 'girls_location' ) === 'nw' && player.get('last_room') === 'comic-classroom1.json' } )();
    if( condition ){
        player.set( 'current_in2_node', 'DCoKyksZLW' );
        var text = ``;
        core.say( text, scope.SSxgWAzbJg );
    }
    if( !condition ){
        player.set( 'current_in2_node', 'MSgGCdJxaA' );
        var text = ``;
        core.say( text, scope.XSfpeAPMnt );
    }
};
// chunk FIRST
scope.SSxgWAzbJg = function(){
    scope.SSxgWAzbJg_0();
};
// ACTION
scope.SSxgWAzbJg_0 = function(){
    scene.startConversation( 'BlackBar', 'black-bar', [ { name: 'port1', anim: 'Ada_normal' } ] );;
    scope.SSxgWAzbJg_1();
};

// TEXT
scope.SSxgWAzbJg_1 = function(){
    player.set( 'current_in2_node', 'SSxgWAzbJg_1' );
    var text = `Adalais: I am still holding on to this rancid banana.  I guess I can put it down somewhere...`;
    core.say( text, scope.SSxgWAzbJg_2 );
};

// ACTION
scope.SSxgWAzbJg_2 = function(){
    scene.setActor( 'Adalais_act', 30, 180 ); ;
    scope.SSxgWAzbJg_3();
};

// ACTION
scope.SSxgWAzbJg_3 = function(){
    scene.setConv( 'Ada_normal2' );;
    scope.SSxgWAzbJg_4();
};

// TEXT
scope.SSxgWAzbJg_4 = function(){
    player.set( 'current_in2_node', 'SSxgWAzbJg_4' );
    var text = `Adalais: This desk is as good a place as any.`;
    core.say( text, scope.SSxgWAzbJg_5 );
};

// ACTION
scope.SSxgWAzbJg_5 = function(){
    scene.setConv( 'Ada_normal2' );;
    scope.SSxgWAzbJg_6();
};

// ACTION
scope.SSxgWAzbJg_6 = function(){
    scene.endConversation();;
    scope.SSxgWAzbJg_7();
};

// ACTION
scope.SSxgWAzbJg_7 = function(){
    scene.setAnimation('Banana', 'Banana' );;
    scope.SSxgWAzbJg_8();
};

// TEXT
scope.SSxgWAzbJg_8 = function(){
    player.set( 'current_in2_node', 'SSxgWAzbJg_8' );
    var text = `...`;
    core.say( text, scope.SSxgWAzbJg_9 );
};

// ACTION
scope.SSxgWAzbJg_9 = function(){
    scene.startConversation( 'BlackBar', 'black-bar', [ { name: 'port1', anim: 'Ada_normal' } ] );;
    scope.SSxgWAzbJg_10();
};

// TEXT
scope.SSxgWAzbJg_10 = function(){
    player.set( 'current_in2_node', 'SSxgWAzbJg_10' );
    var text = `Adalais: That should do the trick.`;
    core.say( text, scope.SSxgWAzbJg_11 );
};

// ACTION
scope.SSxgWAzbJg_11 = function(){
    scene.endConversation();;
    scope.SSxgWAzbJg_12();
};

// ACTION
scope.SSxgWAzbJg_12 = function(){
    scene.restoreActorBase( 'Adalais_act' );;
    scope.SSxgWAzbJg_13();
};
// chunk LAST
scope.SSxgWAzbJg_13 = function(){
    scope.bbrTpeGaUi();
};
// ACTION
scope.bbrTpeGaUi = function(){
    player.set( "banana_location", 'nw' );
    scope.FdRfkaaKbY();
};

// ACTION
scope.FdRfkaaKbY = function(){
    player.set( "girls_location", 'sw' );
    scope.UNyAnMrZUf();
};

// chunk FIRST
scope.UNyAnMrZUf = function(){
    scope.UNyAnMrZUf_0();
};
// ACTION
scope.UNyAnMrZUf_0 = function(){
    scene.startConversation( 'BlackBar', 'black-bar', [ { name: 'port1', anim: 'Girl1_smelling' } ] );;
    scope.UNyAnMrZUf_1();
};

// TEXT
scope.UNyAnMrZUf_1 = function(){
    player.set( 'current_in2_node', 'UNyAnMrZUf_1' );
    var text = `Eva: "Ugh, what is that smell?"`;
    core.say( text, scope.UNyAnMrZUf_2 );
};

// TEXT
scope.UNyAnMrZUf_2 = function(){
    player.set( 'current_in2_node', 'UNyAnMrZUf_2' );
    var text = `Eva: "I can't stand it. We totally need to move this conversation elsewhere.  It's atrocious.`;
    core.say( text, scope.UNyAnMrZUf_3 );
};

// ACTION
scope.UNyAnMrZUf_3 = function(){
    scene.setConv( 'port1', 'invisible' );;
    scope.UNyAnMrZUf_4();
};

// ACTION
scope.UNyAnMrZUf_4 = function(){
    scene.setAnimation('Overlay', 'black-screen', true);;
    scope.UNyAnMrZUf_5();
};

// TEXT
scope.UNyAnMrZUf_5 = function(){
    player.set( 'current_in2_node', 'UNyAnMrZUf_5' );
    var text = `...`;
    core.say( text, scope.UNyAnMrZUf_6 );
};

// ACTION
scope.UNyAnMrZUf_6 = function(){
    scene.setAnimation( 'Girls_act', 'invisible' );;
    scope.UNyAnMrZUf_7();
};

// ACTION
scope.UNyAnMrZUf_7 = function(){
    scene.setAnimation('Overlay', 'invisible', true);;
    scope.UNyAnMrZUf_8();
};

// ACTION
scope.UNyAnMrZUf_8 = function(){
    scene.setConv( 'port1', 'Ada_thoughtful' );;
    scope.UNyAnMrZUf_9();
};

// TEXT
scope.UNyAnMrZUf_9 = function(){
    player.set( 'current_in2_node', 'UNyAnMrZUf_9' );
    var text = `Adalais: They moved to a different part of the room now...`;
    core.say( text, scope.UNyAnMrZUf_10 );
};

// ACTION
scope.UNyAnMrZUf_10 = function(){
    scene.endConversation();;
    scope.UNyAnMrZUf_11();
};

// ACTION
scope.UNyAnMrZUf_11 = function(){
    scene.restoreActorBase( 'Adalais_act' );;
    scope.UNyAnMrZUf_12();
};
// chunk LAST
scope.UNyAnMrZUf_12 = function(){
    scope.yZOuwEWfFu();
};

// pass_fail
scope.XSfpeAPMnt = function(){
    player.set( 'current_in2_node', 'XSfpeAPMnt' );
    var condition = ( function(){ return player.get( 'girls_location' ) === 'sw' && player.get('last_room') === 'comic-classroom3-sw.json' } )();
    if( condition ){
        player.set( 'current_in2_node', 'tSNhzcWdSy' );
        var text = ``;
        core.say( text, scope.tdiEwVIuhZ );
    }
    if( !condition ){
        player.set( 'current_in2_node', 'YPADErTpUh' );
        var text = ``;
        core.say( text, scope.sYeCVYRtmk );
    }
};
// chunk FIRST
scope.tdiEwVIuhZ = function(){
    scope.tdiEwVIuhZ_0();
};
// ACTION
scope.tdiEwVIuhZ_0 = function(){
    scene.startConversation( 'BlackBar', 'black-bar', [ { name: 'port1', anim: 'Ada_normal' } ] );;
    scope.tdiEwVIuhZ_1();
};

// TEXT
scope.tdiEwVIuhZ_1 = function(){
    player.set( 'current_in2_node', 'tdiEwVIuhZ_1' );
    var text = `Adalais: I am still holding on to this rancid banana.  I guess I can put it down somewhere...`;
    core.say( text, scope.tdiEwVIuhZ_2 );
};

// ACTION
scope.tdiEwVIuhZ_2 = function(){
    scene.setActor( 'Adalais_act', 293, 124 ); ;
    scope.tdiEwVIuhZ_3();
};

// ACTION
scope.tdiEwVIuhZ_3 = function(){
    scene.setConv( 'Ada_normal2' );;
    scope.tdiEwVIuhZ_4();
};

// TEXT
scope.tdiEwVIuhZ_4 = function(){
    player.set( 'current_in2_node', 'tdiEwVIuhZ_4' );
    var text = `Adalais: This desk is as good a place as any.`;
    core.say( text, scope.tdiEwVIuhZ_5 );
};

// ACTION
scope.tdiEwVIuhZ_5 = function(){
    scene.setConv( 'Ada_normal2' );;
    scope.tdiEwVIuhZ_6();
};

// ACTION
scope.tdiEwVIuhZ_6 = function(){
    scene.endConversation();;
    scope.tdiEwVIuhZ_7();
};

// ACTION
scope.tdiEwVIuhZ_7 = function(){
    scene.setAnimation('Banana', 'Banana' );;
    scope.tdiEwVIuhZ_8();
};

// TEXT
scope.tdiEwVIuhZ_8 = function(){
    player.set( 'current_in2_node', 'tdiEwVIuhZ_8' );
    var text = `...`;
    core.say( text, scope.tdiEwVIuhZ_9 );
};

// ACTION
scope.tdiEwVIuhZ_9 = function(){
    scene.startConversation( 'BlackBar', 'black-bar', [ { name: 'port1', anim: 'Ada_normal' } ] );;
    scope.tdiEwVIuhZ_10();
};

// TEXT
scope.tdiEwVIuhZ_10 = function(){
    player.set( 'current_in2_node', 'tdiEwVIuhZ_10' );
    var text = `Adalais: That should do the trick.`;
    core.say( text, scope.tdiEwVIuhZ_11 );
};

// ACTION
scope.tdiEwVIuhZ_11 = function(){
    scene.endConversation();;
    scope.tdiEwVIuhZ_12();
};

// ACTION
scope.tdiEwVIuhZ_12 = function(){
    scene.restoreActorBase( 'Adalais_act' );;
    scope.tdiEwVIuhZ_13();
};
// chunk LAST
scope.tdiEwVIuhZ_13 = function(){
    scope.wOtIZSaQZx();
};
// ACTION
scope.wOtIZSaQZx = function(){
    player.set( "banana_location", 'sw' );
    scope.JqpsZfDmge();
};

// ACTION
scope.JqpsZfDmge = function(){
    player.set( "girls_location", 'nw' );
    scope.UNyAnMrZUf();
};


// chunk FIRST
scope.sYeCVYRtmk = function(){
    scope.sYeCVYRtmk_0();
};
// ACTION
scope.sYeCVYRtmk_0 = function(){
    scene.startConversation( 'BlackBar', 'black-bar', [ { name: 'port1', anim: 'Ada_normal' } ] );;
    scope.sYeCVYRtmk_1();
};

// TEXT
scope.sYeCVYRtmk_1 = function(){
    player.set( 'current_in2_node', 'sYeCVYRtmk_1' );
    var text = `Adalais: I guess nothing happened.`;
    core.say( text, scope.sYeCVYRtmk_2 );
};

// ACTION
scope.sYeCVYRtmk_2 = function(){
    scene.endConversation();;
    scope.sYeCVYRtmk_3();
};

// ACTION
scope.sYeCVYRtmk_3 = function(){
    scene.restoreActorBase( 'Adalais_act' );;
    scope.sYeCVYRtmk_4();
};
// chunk LAST
scope.sYeCVYRtmk_4 = function(){
    scope.yZOuwEWfFu();
};
// TEXT
scope.amBLQdahDt = function(){
    player.set( 'current_in2_node', 'amBLQdahDt' );
    var text = `${player.get( 'local_inventory' )[0]}`;
    core.say( text, scope.fcWqsLSxNM );
};

// ACTION
scope.fcWqsLSxNM = function(){
    player.set( 'selected_item2', player.get( 'local_inventory' )[0] );;
    scope.xXQphlYrPg();
};

// TEXT
scope.TwgzezfHea = function(){
    player.set( 'current_in2_node', 'TwgzezfHea' );
    var text = `${player.get( 'local_inventory' )[1]}`;
    core.say( text, scope.sTfKoyZotf );
};

// ACTION
scope.sTfKoyZotf = function(){
    player.set( 'selected_item2', player.get( 'local_inventory' )[1] );;
    scope.xXQphlYrPg();
};

// TEXT
scope.VJrQMShYKk = function(){
    player.set( 'current_in2_node', 'VJrQMShYKk' );
    var text = `${player.get( 'local_inventory' )[2]}`;
    core.say( text, scope.pLbOcqIdVW );
};

// ACTION
scope.pLbOcqIdVW = function(){
    player.set( 'selected_item2', player.get( 'local_inventory' )[2] );;
    scope.xXQphlYrPg();
};

// TEXT
scope.bolrPRYfFG = function(){
    player.set( 'current_in2_node', 'bolrPRYfFG' );
    var text = `${player.get( 'local_inventory' )[3]}`;
    core.say( text, scope.hEgHKnKPzU );
};

// ACTION
scope.hEgHKnKPzU = function(){
    player.set( 'selected_item2', player.get( 'local_inventory' )[3] );;
    scope.xXQphlYrPg();
};

// TEXT
scope.rSisSIhUFt = function(){
    player.set( 'current_in2_node', 'rSisSIhUFt' );
    var text = `${player.get( 'local_inventory' )[4]}`;
    core.say( text, scope.YBKGfmrrwt );
};

// ACTION
scope.YBKGfmrrwt = function(){
    player.set( 'selected_item2', player.get( 'local_inventory' )[4] );;
    scope.xXQphlYrPg();
};

// TEXT
scope.hqOHdOzdig = function(){
    player.set( 'current_in2_node', 'hqOHdOzdig' );
    var text = `${player.get( 'local_inventory' )[5]}`;
    core.say( text, scope.zbtgqEYUax );
};

// ACTION
scope.zbtgqEYUax = function(){
    player.set( 'selected_item2', player.get( 'local_inventory' )[5] );;
    scope.xXQphlYrPg();
};

// TEXT
scope.huYngOSzEN = function(){
    player.set( 'current_in2_node', 'huYngOSzEN' );
    var text = `${player.get( 'local_inventory' )[6]}`;
    core.say( text, scope.eWYxmsTTTE );
};

// ACTION
scope.eWYxmsTTTE = function(){
    player.set( 'selected_item2', player.get( 'local_inventory' )[6] );;
    scope.xXQphlYrPg();
};

// TEXT
scope.fILrcpffiX = function(){
    player.set( 'current_in2_node', 'fILrcpffiX' );
    var text = `${player.get( 'local_inventory' )[7]}`;
    core.say( text, scope.ZzXfXGuXfp );
};

// ACTION
scope.ZzXfXGuXfp = function(){
    player.set( 'selected_item2', player.get( 'local_inventory' )[7] );;
    scope.xXQphlYrPg();
};

// TEXT
scope.byBtmoWeLN = function(){
    player.set( 'current_in2_node', 'byBtmoWeLN' );
    var text = `${player.get( 'local_inventory' )[1]}`;
    core.say( text, scope.xTSYKubfdG );
};

// ACTION
scope.xTSYKubfdG = function(){
    player.set( 'selected_item', player.get( 'local_inventory' )[1] );;
    scope.PfZDdfOAxV();
};

// TEXT
scope.QMQTMzXOBG = function(){
    player.set( 'current_in2_node', 'QMQTMzXOBG' );
    var text = `${player.get( 'local_inventory' )[2]}`;
    core.say( text, scope.cyXKKSagur );
};

// ACTION
scope.cyXKKSagur = function(){
    player.set( 'selected_item', player.get( 'local_inventory' )[2] );;
    scope.PfZDdfOAxV();
};

// TEXT
scope.klPANiOfKG = function(){
    player.set( 'current_in2_node', 'klPANiOfKG' );
    var text = `${player.get( 'local_inventory' )[3]}`;
    core.say( text, scope.ZRcTlBgcOK );
};

// ACTION
scope.ZRcTlBgcOK = function(){
    player.set( 'selected_item', player.get( 'local_inventory' )[3] );;
    scope.PfZDdfOAxV();
};

// TEXT
scope.NINxnoXAYX = function(){
    player.set( 'current_in2_node', 'NINxnoXAYX' );
    var text = `${player.get( 'local_inventory' )[4]}`;
    core.say( text, scope.YRIYkpCJWJ );
};

// ACTION
scope.YRIYkpCJWJ = function(){
    player.set( 'selected_item', player.get( 'local_inventory' )[4] );;
    scope.PfZDdfOAxV();
};

// TEXT
scope.BOQRWumbPf = function(){
    player.set( 'current_in2_node', 'BOQRWumbPf' );
    var text = `${player.get( 'local_inventory' )[5]}`;
    core.say( text, scope.bQeXFwNrBT );
};

// ACTION
scope.bQeXFwNrBT = function(){
    player.set( 'selected_item', player.get( 'local_inventory' )[5] );;
    scope.PfZDdfOAxV();
};

// TEXT
scope.gczDQyAbbR = function(){
    player.set( 'current_in2_node', 'gczDQyAbbR' );
    var text = `${player.get( 'local_inventory' )[6]}`;
    core.say( text, scope.ggEMNorrSM );
};

// ACTION
scope.ggEMNorrSM = function(){
    player.set( 'selected_item', player.get( 'local_inventory' )[6] );;
    scope.PfZDdfOAxV();
};

// TEXT
scope.rFdAfSfNfm = function(){
    player.set( 'current_in2_node', 'rFdAfSfNfm' );
    var text = `${player.get( 'local_inventory' )[7]}`;
    core.say( text, scope.GXfhdYHOWm );
};

// ACTION
scope.GXfhdYHOWm = function(){
    player.set( 'selected_item', player.get( 'local_inventory' )[7] );;
    scope.PfZDdfOAxV();
};

// TEXT
scope.sIQwxGuzeK = function(){
    player.set( 'current_in2_node', 'sIQwxGuzeK' );
    var text = `${player.get( 'local_inventory' )[8]}`;
    core.say( text, scope.SkAxYECgBs );
};

// ACTION
scope.SkAxYECgBs = function(){
    player.set( 'selected_item', player.get( 'local_inventory' )[8] );;
    scope.PfZDdfOAxV();
};

if( !id ){
    scope.nfSDFUIpJD();
}
else {
    scope[ id ]();
}
};


files[ `comic-classroom4-se.json` ] = function( id ){
player.set( 'current_in2_file', 'comic-classroom4-se.json' );
// ACTION
scope.AmAhDLKxRO = function(){
    player.setIfUnset( 'av_key_location', 'ada' );
player.setIfUnset( 'book_location', 'ada' );
player.setIfUnset( 'classroom4_chair_location', 'desk' );
player.setIfUnset( 'ink_revealer_location', 'ada' );
player.setIfUnset( 'blank_paper_location', 'ada' );;
    scope.rHTMfNzbIC();
};

// ACTION
scope.rHTMfNzbIC = function(){
    scene.clearActors();
scene.addActor('Background', 0, 0, 'black-screen'); 
scene.addActor('Clock', 288, 13, 'invisible' );
scene.addActor('Foreground', 0, 0, 'invisible'); 
scene.addActor('Chair', 48, 196, 'invisible');
scene.addActor('Book', 296, 238, 'invisible');
scene.addActor('ShelfBook', 374, 130, 'invisible');
scene.addActor('Ink', 351, 94, 'invisible');
scene.addActor('Adalais_act', 75, 80, 'invisible');
scene.addActor('Foreground', 0, 0, 'invisible');
scene.addActor('Overlay', 0, 0, 'invisible'); 
scene.addActor('BlackBarLeft', 0, 300, 'invisible');
scene.addActor('BlackBarRight', 200, 300, 'invisible'); 
scene.addActor('BlackBar', 0, 350, 'invisible'); 
scene.addActor('port1', 100, 200, 'invisible');
scene.addActor('port2', 100, 200, 'invisible');  

scene.setActorBase( 'Adalais_act', 142, 152, 'Ada_actor_idle1' );
scene.setAnimation('Background', 'Classroom4_bg', true);
scene.setAnimation('Foreground', 'Classroom4_fg', true); 
scene.setAnimation('Clock', 'Clock', true);
scene.setAnimation('Chair', 'Chair', true);
scene.setAnimation('ShelfBook', 'Book3', true);

if( player.get( 'classroom4_chair_location' ) === 'shelf' ){
  scene.setActor('Chair', 283, 207); 
}
if( player.get( 'book_location' ) === 'chair' ){
  scene.setAnimation( 'Book', 'Book', true );
}
if( player.get( 'ink_revealer_location' ) === 'shelf' ){
  scene.setAnimation( 'Ink', 'Ink', true );
};
    scope.EhVUKJtSww();
};

// ACTION
scope.EhVUKJtSww = function(){
    scene.restoreActorBase( 'Adalais_act' );
    scope.uXhepFIJby();
};

// choice
scope.uXhepFIJby = function(){
    player.set( 'current_in2_node', 'uXhepFIJby' );
    var text = `Classroom SE - I need to find a way out of this classroom.`;
    core.choose( text, 'uXhepFIJby', [{
        text: `Go to NE corner.`,
        cb: scope.zlJtJlqogJ,
        condition: () => { return true; }
    },{
        text: `Go to SW corner.`,
        cb: scope.ICghOoyuRJ,
        condition: () => { return true; }
    },{
        text: `Examine surroundings.`,
        cb: scope.UEuXfqUYDr,
        condition: () => { return true; }
    },{
        text: `Talk.`,
        cb: scope.RRuSKQYfWV,
        condition: () => { return true; }
    },{
        text: `Inventory`,
        cb: scope.iXgQaNxtXq,
        condition: () => { return true; }
    },{
        text: `Go to A/V room.`,
        cb: scope.rzOkdEdbJS,
        condition: () => { return player.get( 'has_opened_av_door' ) }
    }]);
};

// TEXT
scope.zlJtJlqogJ = function(){
    player.set( 'current_in2_node', 'zlJtJlqogJ' );
    var text = `Go to NE corner.`;
    core.say( text, scope.IfIWuHWIVR );
};

// chunk FIRST
scope.IfIWuHWIVR = function(){
    scope.IfIWuHWIVR_0();
};
// ACTION
scope.IfIWuHWIVR_0 = function(){
    scene.setAnimation( 'Overlay', 'black-screen', true );;
    scope.IfIWuHWIVR_1();
};

// TEXT
scope.IfIWuHWIVR_1 = function(){
    player.set( 'current_in2_node', 'IfIWuHWIVR_1' );
    var text = `...`;
    core.say( text, scope.IfIWuHWIVR_2 );
};
// chunk LAST
scope.IfIWuHWIVR_2 = function(){
    scope.CyyAFHbNGQ();
};
// next_file
scope.CyyAFHbNGQ = function(){
    var key = `comic-classroom2.json`;
    var func = files[ key ];
    if( func ) {
        func();
    } else {
        core.say( `EXECUTION WARNING, no file exists named ${key}. You are probably running a subset of all the files, and not the whole scenario. ` + Object.keys( files ), files.exit );
    }
};
// TEXT
scope.ICghOoyuRJ = function(){
    player.set( 'current_in2_node', 'ICghOoyuRJ' );
    var text = `Go to SW corner.`;
    core.say( text, scope.lRFAIpyOKF );
};

// chunk FIRST
scope.lRFAIpyOKF = function(){
    scope.lRFAIpyOKF_0();
};
// ACTION
scope.lRFAIpyOKF_0 = function(){
    scene.setAnimation( 'Overlay', 'black-screen', true );;
    scope.lRFAIpyOKF_1();
};

// TEXT
scope.lRFAIpyOKF_1 = function(){
    player.set( 'current_in2_node', 'lRFAIpyOKF_1' );
    var text = `...`;
    core.say( text, scope.lRFAIpyOKF_2 );
};
// chunk LAST
scope.lRFAIpyOKF_2 = function(){
    scope.PbRfkkJgYG();
};
// next_file
scope.PbRfkkJgYG = function(){
    var key = `comic-classroom3-sw.json`;
    var func = files[ key ];
    if( func ) {
        func();
    } else {
        core.say( `EXECUTION WARNING, no file exists named ${key}. You are probably running a subset of all the files, and not the whole scenario. ` + Object.keys( files ), files.exit );
    }
};
// TEXT
scope.UEuXfqUYDr = function(){
    player.set( 'current_in2_node', 'UEuXfqUYDr' );
    var text = `Examine surroundings.`;
    core.say( text, scope.IYXlBsdLHg );
};

// choice
scope.IYXlBsdLHg = function(){
    player.set( 'current_in2_node', 'IYXlBsdLHg' );
    var text = `I can see these things from here:`;
    core.choose( text, 'IYXlBsdLHg', [{
        text: `Go back.`,
        cb: scope.XubxCqiFGi,
        condition: () => { return true; }
    },{
        text: `Door.`,
        cb: scope.FWGzbCfbwH,
        condition: () => { return true; }
    },{
        text: `Thick Pizza Cook Book.`,
        cb: scope.KriFqZhXxW,
        condition: () => { return player.get( 'book_location' ) === 'chair' }
    },{
        text: `Trash Can.`,
        cb: scope.PZadnuAJnm,
        condition: () => { return true; }
    },{
        text: `Chair.`,
        cb: scope.GErNfPfkGB,
        condition: () => { return true; }
    },{
        text: `Clock.`,
        cb: scope.RSgWLiDJiL,
        condition: () => { return true; }
    },{
        text: `High Shelf.`,
        cb: scope.rMJqyWTDXA,
        condition: () => { return true; }
    },{
        text: `Picture.`,
        cb: scope.IlbxaTXXdy,
        condition: () => { return true; }
    }]);
};

// TEXT
scope.XubxCqiFGi = function(){
    player.set( 'current_in2_node', 'XubxCqiFGi' );
    var text = `Go back.`;
    core.say( text, scope.EhVUKJtSww );
};

// TEXT
scope.FWGzbCfbwH = function(){
    player.set( 'current_in2_node', 'FWGzbCfbwH' );
    var text = `Door.`;
    core.say( text, scope.PZXGlbnwkt );
};

// pass_fail
scope.PZXGlbnwkt = function(){
    player.set( 'current_in2_node', 'PZXGlbnwkt' );
    var condition = ( function(){ return player.get( 'av_key_location' ) === 'ada' } )();
    if( !condition ){
        player.set( 'current_in2_node', 'mPHaRHZBAn' );
        var text = ``;
        core.say( text, scope.gMGMVJXfrN );
    }
    if( condition ){
        player.set( 'current_in2_node', 'pygXePhBRQ' );
        var text = ``;
        core.say( text, scope.LsnClByBkY );
    }
};
// pass_fail
scope.gMGMVJXfrN = function(){
    player.set( 'current_in2_node', 'gMGMVJXfrN' );
    var condition = ( function(){ return player.get( 'has_examined_av_room_door' ) } )();
    if( !condition ){
        player.set( 'current_in2_node', 'qRntYgLfqb' );
        var text = ``;
        core.say( text, scope.qwGSPVEgQZ );
    }
    if( condition ){
        player.set( 'current_in2_node', 'rKCfXgRAaT' );
        var text = ``;
        core.say( text, scope.FZlxAUKZJC );
    }
};
// chunk FIRST
scope.qwGSPVEgQZ = function(){
    scope.qwGSPVEgQZ_0();
};
// ACTION
scope.qwGSPVEgQZ_0 = function(){
    scene.startConversation( 'BlackBar', 'black-bar', [ { name: 'port1', anim: 'Ada_normal' } ] );;
    scope.qwGSPVEgQZ_1();
};

// ACTION
scope.qwGSPVEgQZ_1 = function(){
    scene.setActor( 'Adalais_act', 153, 65 );;
    scope.qwGSPVEgQZ_2();
};

// ACTION
scope.qwGSPVEgQZ_2 = function(){
    scene.setAnimation( 'Adalais_act', 'Ada_actor_classroom1_up' );;
    scope.qwGSPVEgQZ_3();
};

// ACTION
scope.qwGSPVEgQZ_3 = function(){
    scene.setConv( 'port1', 'Ada_normal' );;
    scope.qwGSPVEgQZ_4();
};

// TEXT
scope.qwGSPVEgQZ_4 = function(){
    player.set( 'current_in2_node', 'qwGSPVEgQZ_4' );
    var text = `Adalais: This is the door to the A/V closet.`;
    core.say( text, scope.qwGSPVEgQZ_5 );
};

// ACTION
scope.qwGSPVEgQZ_5 = function(){
    scene.setConv( 'port1', 'Ada_thoughtful' );;
    scope.qwGSPVEgQZ_6();
};

// TEXT
scope.qwGSPVEgQZ_6 = function(){
    player.set( 'current_in2_node', 'qwGSPVEgQZ_6' );
    var text = `Adalais: I cannot leave the room from this door, but I suppose something in there might help me.`;
    core.say( text, scope.qwGSPVEgQZ_7 );
};

// ACTION
scope.qwGSPVEgQZ_7 = function(){
    scene.setConv( 'port1', 'Ada_struggle' );;
    scope.qwGSPVEgQZ_8();
};

// TEXT
scope.qwGSPVEgQZ_8 = function(){
    player.set( 'current_in2_node', 'qwGSPVEgQZ_8' );
    var text = `...`;
    core.say( text, scope.qwGSPVEgQZ_9 );
};

// ACTION
scope.qwGSPVEgQZ_9 = function(){
    scene.setConv( 'port1', 'Ada_angry' );;
    scope.qwGSPVEgQZ_10();
};

// TEXT
scope.qwGSPVEgQZ_10 = function(){
    player.set( 'current_in2_node', 'qwGSPVEgQZ_10' );
    var text = `Adalais: It is locked.`;
    core.say( text, scope.qwGSPVEgQZ_11 );
};

// ACTION
scope.qwGSPVEgQZ_11 = function(){
    scene.setConv( 'port1', 'Ada_thoughtful' );;
    scope.qwGSPVEgQZ_12();
};

// TEXT
scope.qwGSPVEgQZ_12 = function(){
    player.set( 'current_in2_node', 'qwGSPVEgQZ_12' );
    var text = `Adalais: Perhaps Mr. Ralgo has the key to open it.`;
    core.say( text, scope.qwGSPVEgQZ_13 );
};

// ACTION
scope.qwGSPVEgQZ_13 = function(){
    scene.endConversation();;
    scope.qwGSPVEgQZ_14();
};

// ACTION
scope.qwGSPVEgQZ_14 = function(){
    scene.restoreActorBase( 'Adalais_act' );;
    scope.qwGSPVEgQZ_15();
};
// chunk LAST
scope.qwGSPVEgQZ_15 = function(){
    scope.eunqduTUPw();
};
// ACTION
scope.eunqduTUPw = function(){
    player.set( "has_examined_av_room_door", true );
    scope.IYXlBsdLHg();
};


// chunk FIRST
scope.FZlxAUKZJC = function(){
    scope.FZlxAUKZJC_0();
};
// ACTION
scope.FZlxAUKZJC_0 = function(){
    scene.startConversation( 'BlackBar', 'black-bar', [ { name: 'port1', anim: 'Ada_normal' } ] );;
    scope.FZlxAUKZJC_1();
};

// ACTION
scope.FZlxAUKZJC_1 = function(){
    scene.setActor( 'Adalais_act', 153, 65 );;
    scope.FZlxAUKZJC_2();
};

// ACTION
scope.FZlxAUKZJC_2 = function(){
    scene.setAnimation( 'Adalais_act', 'Ada_actor_classroom1_up' );;
    scope.FZlxAUKZJC_3();
};

// ACTION
scope.FZlxAUKZJC_3 = function(){
    scene.setConv( 'port1', 'Ada_normal' );;
    scope.FZlxAUKZJC_4();
};

// TEXT
scope.FZlxAUKZJC_4 = function(){
    player.set( 'current_in2_node', 'FZlxAUKZJC_4' );
    var text = `Adalais: This is the door to the A/V closet.`;
    core.say( text, scope.FZlxAUKZJC_5 );
};

// ACTION
scope.FZlxAUKZJC_5 = function(){
    scene.setConv( 'port1', 'Ada_thoughtful' );;
    scope.FZlxAUKZJC_6();
};

// TEXT
scope.FZlxAUKZJC_6 = function(){
    player.set( 'current_in2_node', 'FZlxAUKZJC_6' );
    var text = `Adalais: It is currently locked, and I do not have the key.`;
    core.say( text, scope.FZlxAUKZJC_7 );
};

// ACTION
scope.FZlxAUKZJC_7 = function(){
    scene.restoreActorBase( 'Adalais_act' );;
    scope.FZlxAUKZJC_8();
};

// ACTION
scope.FZlxAUKZJC_8 = function(){
    scene.endConversation();;
    scope.FZlxAUKZJC_9();
};
// chunk LAST
scope.FZlxAUKZJC_9 = function(){
    scope.IYXlBsdLHg();
};

// pass_fail
scope.LsnClByBkY = function(){
    player.set( 'current_in2_node', 'LsnClByBkY' );
    var condition = ( function(){ return player.get( 'has_opened_av_door' ) } )();
    if( !condition ){
        player.set( 'current_in2_node', 'wzOnZlRYUs' );
        var text = ``;
        core.say( text, scope.WKxyQVbHhg );
    }
    if( condition ){
        player.set( 'current_in2_node', 'EbQaCKgkfm' );
        var text = ``;
        core.say( text, scope.XxDVswouUf );
    }
};
// chunk FIRST
scope.WKxyQVbHhg = function(){
    scope.WKxyQVbHhg_0();
};
// ACTION
scope.WKxyQVbHhg_0 = function(){
    scene.startConversation( 'BlackBar', 'black-bar', [ { name: 'port1', anim: 'Ada_normal' } ] );;
    scope.WKxyQVbHhg_1();
};

// ACTION
scope.WKxyQVbHhg_1 = function(){
    scene.setActor( 'Adalais_act', 153, 65 );;
    scope.WKxyQVbHhg_2();
};

// ACTION
scope.WKxyQVbHhg_2 = function(){
    scene.setAnimation( 'Adalais_act', 'Ada_actor_classroom1_up' );;
    scope.WKxyQVbHhg_3();
};

// ACTION
scope.WKxyQVbHhg_3 = function(){
    scene.setConv( 'port1', 'Ada_normal' );;
    scope.WKxyQVbHhg_4();
};

// TEXT
scope.WKxyQVbHhg_4 = function(){
    player.set( 'current_in2_node', 'WKxyQVbHhg_4' );
    var text = `Adalais: This is the door to the A/V closet.`;
    core.say( text, scope.WKxyQVbHhg_5 );
};

// ACTION
scope.WKxyQVbHhg_5 = function(){
    scene.setConv( 'port1', 'Ada_smug' );;
    scope.WKxyQVbHhg_6();
};

// TEXT
scope.WKxyQVbHhg_6 = function(){
    player.set( 'current_in2_node', 'WKxyQVbHhg_6' );
    var text = `Adalais: It is locked, but I have the key.`;
    core.say( text, scope.WKxyQVbHhg_7 );
};

// TEXT
scope.WKxyQVbHhg_7 = function(){
    player.set( 'current_in2_node', 'WKxyQVbHhg_7' );
    var text = `...`;
    core.say( text, scope.WKxyQVbHhg_8 );
};

// TEXT
scope.WKxyQVbHhg_8 = function(){
    player.set( 'current_in2_node', 'WKxyQVbHhg_8' );
    var text = `Adalais: Okay, now I can go inside if I want.`;
    core.say( text, scope.WKxyQVbHhg_9 );
};

// ACTION
scope.WKxyQVbHhg_9 = function(){
    scene.restoreActorBase( 'Adalais_act' );;
    scope.WKxyQVbHhg_10();
};

// ACTION
scope.WKxyQVbHhg_10 = function(){
    scene.endConversation();;
    scope.WKxyQVbHhg_11();
};
// chunk LAST
scope.WKxyQVbHhg_11 = function(){
    scope.RSHgapdWHW();
};
// ACTION
scope.RSHgapdWHW = function(){
    player.set( "has_opened_av_door", true );
    scope.uXhepFIJby();
};


// chunk FIRST
scope.XxDVswouUf = function(){
    scope.XxDVswouUf_0();
};
// ACTION
scope.XxDVswouUf_0 = function(){
    scene.startConversation( 'BlackBar', 'black-bar', [ { name: 'port1', anim: 'Ada_normal' } ] );;
    scope.XxDVswouUf_1();
};

// ACTION
scope.XxDVswouUf_1 = function(){
    scene.setActor( 'Adalais_act', 153, 65 );;
    scope.XxDVswouUf_2();
};

// ACTION
scope.XxDVswouUf_2 = function(){
    scene.setAnimation( 'Adalais_act', 'Ada_actor_classroom1_up' );;
    scope.XxDVswouUf_3();
};

// ACTION
scope.XxDVswouUf_3 = function(){
    scene.setConv( 'port1', 'Ada_smug' );;
    scope.XxDVswouUf_4();
};

// TEXT
scope.XxDVswouUf_4 = function(){
    player.set( 'current_in2_node', 'XxDVswouUf_4' );
    var text = `Adalais: I have already opened the door to the A/V closet.  I can go inside whenever I want.`;
    core.say( text, scope.XxDVswouUf_5 );
};

// ACTION
scope.XxDVswouUf_5 = function(){
    scene.restoreActorBase( 'Adalais_act' );;
    scope.XxDVswouUf_6();
};

// ACTION
scope.XxDVswouUf_6 = function(){
    scene.endConversation();;
    scope.XxDVswouUf_7();
};
// chunk LAST
scope.XxDVswouUf_7 = function(){
    scope.IYXlBsdLHg();
};
// TEXT
scope.KriFqZhXxW = function(){
    player.set( 'current_in2_node', 'KriFqZhXxW' );
    var text = `Thick Pizza Cook Book.`;
    core.say( text, scope.MNIgqscfyr );
};

// chunk FIRST
scope.MNIgqscfyr = function(){
    scope.MNIgqscfyr_0();
};
// ACTION
scope.MNIgqscfyr_0 = function(){
    scene.startConversation( 'BlackBar', 'black-bar', [ { name: 'port1', anim: 'Ada_normal' } ] );;
    scope.MNIgqscfyr_1();
};

// ACTION
scope.MNIgqscfyr_1 = function(){
    scene.setActor( 'Adalais_act', 210, 189 );;
    scope.MNIgqscfyr_2();
};

// ACTION
scope.MNIgqscfyr_2 = function(){
    scene.setAnimation( 'Adalais_act', 'Ada_actor_classroom1_right' );;
    scope.MNIgqscfyr_3();
};

// ACTION
scope.MNIgqscfyr_3 = function(){
    scene.setConv( 'port1', 'Ada_normal' );;
    scope.MNIgqscfyr_4();
};

// TEXT
scope.MNIgqscfyr_4 = function(){
    player.set( 'current_in2_node', 'MNIgqscfyr_4' );
    var text = `Adalais: I put that odd pizza cook book here.  Should I pick it up?`;
    core.say( text, scope.MNIgqscfyr_5 );
};

// ACTION
scope.MNIgqscfyr_5 = function(){
    scene.setConv( '' );;
    scope.MNIgqscfyr_6();
};
// chunk LAST
scope.MNIgqscfyr_6 = function(){
    scope.OOrEcoYkuf();
};
// choice
scope.OOrEcoYkuf = function(){
    player.set( 'current_in2_node', 'OOrEcoYkuf' );
    var text = `Should I pick up the book?`;
    core.choose( text, 'OOrEcoYkuf', [{
        text: `Yes.`,
        cb: scope.xhJNAoJaeC,
        condition: () => { return true; }
    },{
        text: `No.`,
        cb: scope.LBDDDorMFx,
        condition: () => { return true; }
    }]);
};

// TEXT
scope.xhJNAoJaeC = function(){
    player.set( 'current_in2_node', 'xhJNAoJaeC' );
    var text = `Yes.`;
    core.say( text, scope.XrReXeaBgN );
};

// chunk FIRST
scope.XrReXeaBgN = function(){
    scope.XrReXeaBgN_0();
};
// ACTION
scope.XrReXeaBgN_0 = function(){
    scene.setConv( 'port1', 'Ada_normal' );;
    scope.XrReXeaBgN_1();
};

// TEXT
scope.XrReXeaBgN_1 = function(){
    player.set( 'current_in2_node', 'XrReXeaBgN_1' );
    var text = `Adalais: Okay.  I will get the book again.`;
    core.say( text, scope.XrReXeaBgN_2 );
};

// ACTION
scope.XrReXeaBgN_2 = function(){
    scene.setAnimation( 'Book', 'invisible' );;
    scope.XrReXeaBgN_3();
};

// ACTION
scope.XrReXeaBgN_3 = function(){
    scene.setConv( 'port1', 'invisible' );;
    scope.XrReXeaBgN_4();
};

// TEXT
scope.XrReXeaBgN_4 = function(){
    player.set( 'current_in2_node', 'XrReXeaBgN_4' );
    var text = `...`;
    core.say( text, scope.XrReXeaBgN_5 );
};

// ACTION
scope.XrReXeaBgN_5 = function(){
    scene.setConv( 'port1', 'Ada_normal' );;
    scope.XrReXeaBgN_6();
};

// TEXT
scope.XrReXeaBgN_6 = function(){
    player.set( 'current_in2_node', 'XrReXeaBgN_6' );
    var text = `Adalais: I have the book now.`;
    core.say( text, scope.XrReXeaBgN_7 );
};

// ACTION
scope.XrReXeaBgN_7 = function(){
    scene.endConversation();;
    scope.XrReXeaBgN_8();
};
// chunk LAST
scope.XrReXeaBgN_8 = function(){
    scope.RxzyCfCOJW();
};
// ACTION
scope.RxzyCfCOJW = function(){
    player.set( "book_location", 'ada' );
    scope.IYXlBsdLHg();
};

// TEXT
scope.LBDDDorMFx = function(){
    player.set( 'current_in2_node', 'LBDDDorMFx' );
    var text = `No.`;
    core.say( text, scope.dNLxEFBUmQ );
};

// chunk FIRST
scope.dNLxEFBUmQ = function(){
    scope.dNLxEFBUmQ_0();
};
// ACTION
scope.dNLxEFBUmQ_0 = function(){
    scene.setConv( 'port1', 'Ada_normal' );;
    scope.dNLxEFBUmQ_1();
};

// TEXT
scope.dNLxEFBUmQ_1 = function(){
    player.set( 'current_in2_node', 'dNLxEFBUmQ_1' );
    var text = `Adalais: Okay, I have the book now.`;
    core.say( text, scope.dNLxEFBUmQ_2 );
};

// ACTION
scope.dNLxEFBUmQ_2 = function(){
    scene.endConversation();;
    scope.dNLxEFBUmQ_3();
};

// ACTION
scope.dNLxEFBUmQ_3 = function(){
    scene.restoreActorBase( 'Adalais_act' );;
    scope.dNLxEFBUmQ_4();
};
// chunk LAST
scope.dNLxEFBUmQ_4 = function(){
    scope.IYXlBsdLHg();
};
// TEXT
scope.PZadnuAJnm = function(){
    player.set( 'current_in2_node', 'PZadnuAJnm' );
    var text = `Trash Can.`;
    core.say( text, scope.GuPsaTqAbJ );
};

// pass_fail
scope.GuPsaTqAbJ = function(){
    player.set( 'current_in2_node', 'GuPsaTqAbJ' );
    var condition = ( function(){ return player.get( 'has_examined_trash_can' ) } )();
    if( !condition ){
        player.set( 'current_in2_node', 'MidbEbgoSQ' );
        var text = ``;
        core.say( text, scope.ztBLafXfhi );
    }
    if( condition ){
        player.set( 'current_in2_node', 'VUJtPKtZVQ' );
        var text = ``;
        core.say( text, scope.VozzDmcTGP );
    }
};
// chunk FIRST
scope.ztBLafXfhi = function(){
    scope.ztBLafXfhi_0();
};
// ACTION
scope.ztBLafXfhi_0 = function(){
    scene.startConversation( 'BlackBar', 'black-bar', [ { name: 'port1', anim: 'Ada_normal' } ] );;
    scope.ztBLafXfhi_1();
};

// ACTION
scope.ztBLafXfhi_1 = function(){
    scene.setActor( 'Adalais_act', 58, 75 );;
    scope.ztBLafXfhi_2();
};

// ACTION
scope.ztBLafXfhi_2 = function(){
    scene.setAnimation( 'Adalais_act', 'Ada_actor_classroom1_up' );;
    scope.ztBLafXfhi_3();
};

// ACTION
scope.ztBLafXfhi_3 = function(){
    scene.setConv( 'port1', 'Ada_struggle' );;
    scope.ztBLafXfhi_4();
};

// TEXT
scope.ztBLafXfhi_4 = function(){
    player.set( 'current_in2_node', 'ztBLafXfhi_4' );
    var text = `Adalais: Eww, I think this trash can has a rancid banana in it.  I can smell it from here.`;
    core.say( text, scope.ztBLafXfhi_5 );
};

// ACTION
scope.ztBLafXfhi_5 = function(){
    scene.endConversation();;
    scope.ztBLafXfhi_6();
};

// ACTION
scope.ztBLafXfhi_6 = function(){
    scene.restoreActorBase( 'Adalais_act' );;
    scope.ztBLafXfhi_7();
};
// chunk LAST
scope.ztBLafXfhi_7 = function(){
    scope.kegBAGiqZU();
};
// ACTION
scope.kegBAGiqZU = function(){
    player.set( "has_examined_trash_can", true );
    scope.IYXlBsdLHg();
};


// pass_fail
scope.VozzDmcTGP = function(){
    player.set( 'current_in2_node', 'VozzDmcTGP' );
    var condition = ( function(){ return player.get( 'banana_location' ) === 'trash' } )();
    if( condition ){
        player.set( 'current_in2_node', 'oziyRmebga' );
        var text = ``;
        core.say( text, scope.VQcubFBfuF );
    }
    if( !condition ){
        player.set( 'current_in2_node', 'SZVVCfNxRc' );
        var text = ``;
        core.say( text, scope.DOXLIuaOoO );
    }
};
// chunk FIRST
scope.VQcubFBfuF = function(){
    scope.VQcubFBfuF_0();
};
// ACTION
scope.VQcubFBfuF_0 = function(){
    scene.startConversation( 'BlackBar', 'black-bar', [ { name: 'port1', anim: 'Ada_normal' } ] );;
    scope.VQcubFBfuF_1();
};

// ACTION
scope.VQcubFBfuF_1 = function(){
    scene.setActor( 'Adalais_act', 58, 75 );;
    scope.VQcubFBfuF_2();
};

// ACTION
scope.VQcubFBfuF_2 = function(){
    scene.setAnimation( 'Adalais_act', 'Ada_actor_classroom1_up' );;
    scope.VQcubFBfuF_3();
};

// ACTION
scope.VQcubFBfuF_3 = function(){
    scene.setConv( 'port1', 'Ada_annoyed' );;
    scope.VQcubFBfuF_4();
};

// TEXT
scope.VQcubFBfuF_4 = function(){
    player.set( 'current_in2_node', 'VQcubFBfuF_4' );
    var text = `Adalais: The trash can again? What would I want with that? Do I really want to get the banana out of that?`;
    core.say( text, scope.VQcubFBfuF_5 );
};

// ACTION
scope.VQcubFBfuF_5 = function(){
    scene.setConv( 'port1', 'Ada_angry' );;
    scope.VQcubFBfuF_6();
};

// TEXT
scope.VQcubFBfuF_6 = function(){
    player.set( 'current_in2_node', 'VQcubFBfuF_6' );
    var text = `Adalais: Ugh, fine.`;
    core.say( text, scope.VQcubFBfuF_7 );
};

// ACTION
scope.VQcubFBfuF_7 = function(){
    scene.setConv( 'port1', 'Ada_struggle' );;
    scope.VQcubFBfuF_8();
};

// TEXT
scope.VQcubFBfuF_8 = function(){
    player.set( 'current_in2_node', 'VQcubFBfuF_8' );
    var text = `Adalais: Eww this thing is disgusting.  It must have been in there for over a week.`;
    core.say( text, scope.VQcubFBfuF_9 );
};

// ACTION
scope.VQcubFBfuF_9 = function(){
    scene.setConv( 'port1', 'Ada_normal' );;
    scope.VQcubFBfuF_10();
};

// TEXT
scope.VQcubFBfuF_10 = function(){
    player.set( 'current_in2_node', 'VQcubFBfuF_10' );
    var text = `Adalais: I guess I have a rancid banana now.`;
    core.say( text, scope.VQcubFBfuF_11 );
};

// ACTION
scope.VQcubFBfuF_11 = function(){
    scene.endConversation();;
    scope.VQcubFBfuF_12();
};

// ACTION
scope.VQcubFBfuF_12 = function(){
    scene.restoreActorBase( 'Adalais_act' );;
    scope.VQcubFBfuF_13();
};
// chunk LAST
scope.VQcubFBfuF_13 = function(){
    scope.EKUSnktNxp();
};
// ACTION
scope.EKUSnktNxp = function(){
    player.set( "banana_location", 'ada' );
    scope.HHTsyxgrCb();
};

// ACTION
scope.HHTsyxgrCb = function(){
    player.set( "has_banana", true );
    scope.IYXlBsdLHg();
};


// chunk FIRST
scope.DOXLIuaOoO = function(){
    scope.DOXLIuaOoO_0();
};
// ACTION
scope.DOXLIuaOoO_0 = function(){
    scene.startConversation( 'BlackBar', 'black-bar', [ { name: 'port1', anim: 'Ada_normal' } ] );;
    scope.DOXLIuaOoO_1();
};

// ACTION
scope.DOXLIuaOoO_1 = function(){
    scene.setConv( 'port1', 'Ada_annoyed' );;
    scope.DOXLIuaOoO_2();
};

// TEXT
scope.DOXLIuaOoO_2 = function(){
    player.set( 'current_in2_node', 'DOXLIuaOoO_2' );
    var text = `Adalais: I already have a rancid banana from that trash can, and I doubt I want anything else out of it.`;
    core.say( text, scope.DOXLIuaOoO_3 );
};

// ACTION
scope.DOXLIuaOoO_3 = function(){
    scene.endConversation();;
    scope.DOXLIuaOoO_4();
};

// ACTION
scope.DOXLIuaOoO_4 = function(){
    scene.restoreActorBase( 'Adalais_act' );;
    scope.DOXLIuaOoO_5();
};

// ACTION
scope.DOXLIuaOoO_5 = function(){
    ;
    scope.DOXLIuaOoO_6();
};
// chunk LAST
scope.DOXLIuaOoO_6 = function(){
    scope.IYXlBsdLHg();
};
// TEXT
scope.GErNfPfkGB = function(){
    player.set( 'current_in2_node', 'GErNfPfkGB' );
    var text = `Chair.`;
    core.say( text, scope.ebeadnfMfc );
};

// pass_fail
scope.ebeadnfMfc = function(){
    player.set( 'current_in2_node', 'ebeadnfMfc' );
    var condition = ( function(){ return player.get( 'classroom4_chair_location' ) === 'shelf' } )();
    if( !condition ){
        player.set( 'current_in2_node', 'AuFJMJLhgW' );
        var text = ``;
        core.say( text, scope.AHfeFUaxVR );
    }
    if( condition ){
        player.set( 'current_in2_node', 'fkOCEhtyfx' );
        var text = ``;
        core.say( text, scope.VngcZndzPy );
    }
};
// chunk FIRST
scope.AHfeFUaxVR = function(){
    scope.AHfeFUaxVR_0();
};
// ACTION
scope.AHfeFUaxVR_0 = function(){
    scene.startConversation( 'BlackBar', 'black-bar', [ { name: 'port1', anim: 'Ada_normal' } ] );;
    scope.AHfeFUaxVR_1();
};

// ACTION
scope.AHfeFUaxVR_1 = function(){
    scene.setActor( 'Adalais_act', 260, 189 );;
    scope.AHfeFUaxVR_2();
};

// ACTION
scope.AHfeFUaxVR_2 = function(){
    scene.setAnimation( 'Adalais_act', 'Ada_actor_classroom1_right' );;
    scope.AHfeFUaxVR_3();
};

// ACTION
scope.AHfeFUaxVR_3 = function(){
    scene.setConv( 'port1', 'Ada_smug' );;
    scope.AHfeFUaxVR_4();
};

// TEXT
scope.AHfeFUaxVR_4 = function(){
    player.set( 'current_in2_node', 'AHfeFUaxVR_4' );
    var text = `Adalais: I suppose, if I wanted to, I could move a chair so I could see what is on the shelf.`;
    core.say( text, scope.AHfeFUaxVR_5 );
};

// ACTION
scope.AHfeFUaxVR_5 = function(){
    scene.setConv( '' );;
    scope.AHfeFUaxVR_6();
};
// chunk LAST
scope.AHfeFUaxVR_6 = function(){
    scope.NYzLngZobI();
};
// choice
scope.NYzLngZobI = function(){
    player.set( 'current_in2_node', 'NYzLngZobI' );
    var text = `Should I move a chair to the shelf?`;
    core.choose( text, 'NYzLngZobI', [{
        text: `Move chair.`,
        cb: scope.VZzyBJSZTy,
        condition: () => { return true; }
    },{
        text: `Do not move chair.`,
        cb: scope.rFIGungzuf,
        condition: () => { return true; }
    }]);
};

// TEXT
scope.VZzyBJSZTy = function(){
    player.set( 'current_in2_node', 'VZzyBJSZTy' );
    var text = `Move chair.`;
    core.say( text, scope.OCprDrfyCt );
};

// chunk FIRST
scope.OCprDrfyCt = function(){
    scope.OCprDrfyCt_0();
};
// ACTION
scope.OCprDrfyCt_0 = function(){
    scene.setConv( 'port1', 'invisible' );;
    scope.OCprDrfyCt_1();
};

// ACTION
scope.OCprDrfyCt_1 = function(){
    scene.setAnimation( 'Chair', 'invisible' );;
    scope.OCprDrfyCt_2();
};

// ACTION
scope.OCprDrfyCt_2 = function(){
    scene.setAnimation( 'Adalais_act', 'Ada_moving_chair' );;
    scope.OCprDrfyCt_3();
};

// ACTION
scope.OCprDrfyCt_3 = function(){
    scene.setActor( 'Adalais_act', -40, 129 );;
    scope.OCprDrfyCt_4();
};

// TEXT
scope.OCprDrfyCt_4 = function(){
    player.set( 'current_in2_node', 'OCprDrfyCt_4' );
    var text = `...`;
    core.say( text, scope.OCprDrfyCt_5 );
};

// ACTION
scope.OCprDrfyCt_5 = function(){
    scene.setConv( 'port1', 'Ada_normal' );;
    scope.OCprDrfyCt_6();
};

// ACTION
scope.OCprDrfyCt_6 = function(){
    scene.setActor('Chair', 283, 207);;
    scope.OCprDrfyCt_7();
};

// TEXT
scope.OCprDrfyCt_7 = function(){
    player.set( 'current_in2_node', 'OCprDrfyCt_7' );
    var text = `Adalais: Okay, I moved the chair.`;
    core.say( text, scope.OCprDrfyCt_8 );
};

// ACTION
scope.OCprDrfyCt_8 = function(){
    scene.setAnimation( 'Chair', 'Chair' );;
    scope.OCprDrfyCt_9();
};

// ACTION
scope.OCprDrfyCt_9 = function(){
    scene.endConversation();;
    scope.OCprDrfyCt_10();
};

// ACTION
scope.OCprDrfyCt_10 = function(){
    scene.restoreActorBase( 'Adalais_act' );;
    scope.OCprDrfyCt_11();
};
// chunk LAST
scope.OCprDrfyCt_11 = function(){
    scope.YKRmFerZgY();
};
// ACTION
scope.YKRmFerZgY = function(){
    player.set( "classroom4_chair_location", "shelf" );
    scope.IYXlBsdLHg();
};

// TEXT
scope.rFIGungzuf = function(){
    player.set( 'current_in2_node', 'rFIGungzuf' );
    var text = `Do not move chair.`;
    core.say( text, scope.HAHQIJRxgR );
};

// chunk FIRST
scope.HAHQIJRxgR = function(){
    scope.HAHQIJRxgR_0();
};
// ACTION
scope.HAHQIJRxgR_0 = function(){
    scene.setConv( 'Ada_normal' );;
    scope.HAHQIJRxgR_1();
};

// TEXT
scope.HAHQIJRxgR_1 = function(){
    player.set( 'current_in2_node', 'HAHQIJRxgR_1' );
    var text = `Adalais: I do not need to move that chair yet.`;
    core.say( text, scope.HAHQIJRxgR_2 );
};

// ACTION
scope.HAHQIJRxgR_2 = function(){
    scene.endConversation();;
    scope.HAHQIJRxgR_3();
};

// ACTION
scope.HAHQIJRxgR_3 = function(){
    scene.restoreActorBase( 'Adalais_act' );;
    scope.HAHQIJRxgR_4();
};
// chunk LAST
scope.HAHQIJRxgR_4 = function(){
    scope.IYXlBsdLHg();
};

// chunk FIRST
scope.VngcZndzPy = function(){
    scope.VngcZndzPy_0();
};
// ACTION
scope.VngcZndzPy_0 = function(){
    scene.startConversation( 'BlackBar', 'black-bar', [ { name: 'port1', anim: 'Ada_normal' } ] );;
    scope.VngcZndzPy_1();
};

// ACTION
scope.VngcZndzPy_1 = function(){
    scene.setConv( 'port1', 'Ada_annoyed' );;
    scope.VngcZndzPy_2();
};

// TEXT
scope.VngcZndzPy_2 = function(){
    player.set( 'current_in2_node', 'VngcZndzPy_2' );
    var text = `Adalais: I already moved the chair to the shelf.`;
    core.say( text, scope.VngcZndzPy_3 );
};

// ACTION
scope.VngcZndzPy_3 = function(){
    scene.endConversation();;
    scope.VngcZndzPy_4();
};

// ACTION
scope.VngcZndzPy_4 = function(){
    scene.restoreActorBase( 'Adalais_act' );;
    scope.VngcZndzPy_5();
};
// chunk LAST
scope.VngcZndzPy_5 = function(){
    scope.IYXlBsdLHg();
};
// TEXT
scope.RSgWLiDJiL = function(){
    player.set( 'current_in2_node', 'RSgWLiDJiL' );
    var text = `Clock.`;
    core.say( text, scope.CDCHsYlQbu );
};

// chunk FIRST
scope.CDCHsYlQbu = function(){
    scope.CDCHsYlQbu_0();
};
// ACTION
scope.CDCHsYlQbu_0 = function(){
    scene.startConversation( 'BlackBar', 'black-bar', [ { name: 'port1', anim: 'Ada_normal' } ] );;
    scope.CDCHsYlQbu_1();
};

// ACTION
scope.CDCHsYlQbu_1 = function(){
    scene.setActor( 'Adalais_act', 198, 93 );;
    scope.CDCHsYlQbu_2();
};

// ACTION
scope.CDCHsYlQbu_2 = function(){
    scene.setAnimation( 'Adalais_act', 'Ada_actor_classroom1_right' );;
    scope.CDCHsYlQbu_3();
};

// ACTION
scope.CDCHsYlQbu_3 = function(){
    scene.setConv( 'port1', 'Ada_normal' );;
    scope.CDCHsYlQbu_4();
};

// TEXT
scope.CDCHsYlQbu_4 = function(){
    player.set( 'current_in2_node', 'CDCHsYlQbu_4' );
    var text = `Adalais: Mr. Ralgo put the clock in the back of the classroom so he could see students looking back at it.`;
    core.say( text, scope.CDCHsYlQbu_5 );
};

// ACTION
scope.CDCHsYlQbu_5 = function(){
    scene.setConv( 'port1', 'Ada_annoyed' );;
    scope.CDCHsYlQbu_6();
};

// TEXT
scope.CDCHsYlQbu_6 = function(){
    player.set( 'current_in2_node', 'CDCHsYlQbu_6' );
    var text = `Adalais: Perhaps he forgot that most students check the time with their phones.`;
    core.say( text, scope.CDCHsYlQbu_7 );
};

// ACTION
scope.CDCHsYlQbu_7 = function(){
    scene.endConversation();;
    scope.CDCHsYlQbu_8();
};

// ACTION
scope.CDCHsYlQbu_8 = function(){
    scene.restoreActorBase( 'Adalais_act' );;
    scope.CDCHsYlQbu_9();
};
// chunk LAST
scope.CDCHsYlQbu_9 = function(){
    scope.IYXlBsdLHg();
};
// TEXT
scope.rMJqyWTDXA = function(){
    player.set( 'current_in2_node', 'rMJqyWTDXA' );
    var text = `High Shelf.`;
    core.say( text, scope.HIRstupFHa );
};

// pass_fail
scope.HIRstupFHa = function(){
    player.set( 'current_in2_node', 'HIRstupFHa' );
    var condition = ( function(){ return player.get( 'classroom4_chair_location' ) === 'shelf' } )();
    if( !condition ){
        player.set( 'current_in2_node', 'WepNmrUqNX' );
        var text = ``;
        core.say( text, scope.hkLgZibWtc );
    }
    if( condition ){
        player.set( 'current_in2_node', 'KGqKozigSV' );
        var text = ``;
        core.say( text, scope.qFzhbtduTk );
    }
};
// chunk FIRST
scope.hkLgZibWtc = function(){
    scope.hkLgZibWtc_0();
};
// ACTION
scope.hkLgZibWtc_0 = function(){
    scene.startConversation( 'BlackBar', 'black-bar', [ { name: 'port1', anim: 'Ada_normal' } ] );;
    scope.hkLgZibWtc_1();
};

// ACTION
scope.hkLgZibWtc_1 = function(){
    scene.setActor( 'Adalais_act', 260, 189 );;
    scope.hkLgZibWtc_2();
};

// ACTION
scope.hkLgZibWtc_2 = function(){
    scene.setAnimation( 'Adalais_act', 'Ada_actor_classroom1_right' );;
    scope.hkLgZibWtc_3();
};

// ACTION
scope.hkLgZibWtc_3 = function(){
    scene.setConv( 'port1', 'Ada_normal' );;
    scope.hkLgZibWtc_4();
};

// TEXT
scope.hkLgZibWtc_4 = function(){
    player.set( 'current_in2_node', 'hkLgZibWtc_4' );
    var text = `Adalais: I wish I was tall enough to see what was on that shelf.`;
    core.say( text, scope.hkLgZibWtc_5 );
};

// ACTION
scope.hkLgZibWtc_5 = function(){
    scene.endConversation();;
    scope.hkLgZibWtc_6();
};

// ACTION
scope.hkLgZibWtc_6 = function(){
    scene.restoreActorBase( 'Adalais_act' );;
    scope.hkLgZibWtc_7();
};
// chunk LAST
scope.hkLgZibWtc_7 = function(){
    scope.IYXlBsdLHg();
};

// pass_fail
scope.qFzhbtduTk = function(){
    player.set( 'current_in2_node', 'qFzhbtduTk' );
    var condition = ( function(){ return player.get( 'book_location' ) === 'chair' } )();
    if( condition ){
        player.set( 'current_in2_node', 'FLmSMLTNIX' );
        var text = ``;
        core.say( text, scope.BbUeMkJNnu );
    }
    if( !condition ){
        player.set( 'current_in2_node', 'VfsmPUWZCU' );
        var text = ``;
        core.say( text, scope.TawaSKIkgM );
    }
};
// pass_fail
scope.BbUeMkJNnu = function(){
    player.set( 'current_in2_node', 'BbUeMkJNnu' );
    var condition = ( function(){ return player.get( 'ink_revealer_location' ) === 'shelf' } )();
    if( !condition ){
        player.set( 'current_in2_node', 'zLzLGccaBL' );
        var text = ``;
        core.say( text, scope.OiRczqtmNN );
    }
    if( condition ){
        player.set( 'current_in2_node', 'MCyuuuXHgg' );
        var text = ``;
        core.say( text, scope.NDJPXbQmaY );
    }
};
// chunk FIRST
scope.OiRczqtmNN = function(){
    scope.OiRczqtmNN_0();
};
// ACTION
scope.OiRczqtmNN_0 = function(){
    scene.startConversation( 'BlackBar', 'black-bar', [ { name: 'port1', anim: 'Ada_normal' } ] );;
    scope.OiRczqtmNN_1();
};

// TEXT
scope.OiRczqtmNN_1 = function(){
    player.set( 'current_in2_node', 'OiRczqtmNN_1' );
    var text = `Adalais: I already got something need from up there.`;
    core.say( text, scope.OiRczqtmNN_2 );
};

// ACTION
scope.OiRczqtmNN_2 = function(){
    scene.endConversation();;
    scope.OiRczqtmNN_3();
};
// chunk LAST
scope.OiRczqtmNN_3 = function(){
    scope.IYXlBsdLHg();
};

// ACTION
scope.NDJPXbQmaY = function(){
    player.set( "ink_revealer_location", 'ada' );
    scope.BRYCBagCRa();
};

// chunk FIRST
scope.BRYCBagCRa = function(){
    scope.BRYCBagCRa_0();
};
// ACTION
scope.BRYCBagCRa_0 = function(){
    scene.startConversation( 'BlackBar', 'black-bar', [ { name: 'port1', anim: 'Ada_normal' } ] );;
    scope.BRYCBagCRa_1();
};

// ACTION
scope.BRYCBagCRa_1 = function(){
    scene.setActor( 'Adalais_act', 251, 129 );;
    scope.BRYCBagCRa_2();
};

// ACTION
scope.BRYCBagCRa_2 = function(){
    scene.setAnimation( 'Adalais_act', 'Ada_actor_classroom1_right' );;
    scope.BRYCBagCRa_3();
};

// ACTION
scope.BRYCBagCRa_3 = function(){
    scene.setConv( 'port1', 'Ada_normal' );;
    scope.BRYCBagCRa_4();
};

// TEXT
scope.BRYCBagCRa_4 = function(){
    player.set( 'current_in2_node', 'BRYCBagCRa_4' );
    var text = `Adalais: *hup*`;
    core.say( text, scope.BRYCBagCRa_5 );
};

// ACTION
scope.BRYCBagCRa_5 = function(){
    scene.setConv( 'port1', 'Ada_normal2' );;
    scope.BRYCBagCRa_6();
};

// TEXT
scope.BRYCBagCRa_6 = function(){
    player.set( 'current_in2_node', 'BRYCBagCRa_6' );
    var text = `Adalais: Wow, I can see much more of the shelf now.  I think I might be able to reach that.`;
    core.say( text, scope.BRYCBagCRa_7 );
};

// ACTION
scope.BRYCBagCRa_7 = function(){
    scene.setAnimation( 'Adalais_act', 'Ada_actor_reaching' );;
    scope.BRYCBagCRa_8();
};

// ACTION
scope.BRYCBagCRa_8 = function(){
    scene.setActor( 'Adalais_act', 283, 114 );;
    scope.BRYCBagCRa_9();
};

// ACTION
scope.BRYCBagCRa_9 = function(){
    scene.setConv( 'port1', 'invisible' );;
    scope.BRYCBagCRa_10();
};

// TEXT
scope.BRYCBagCRa_10 = function(){
    player.set( 'current_in2_node', 'BRYCBagCRa_10' );
    var text = `...`;
    core.say( text, scope.BRYCBagCRa_11 );
};

// ACTION
scope.BRYCBagCRa_11 = function(){
    scene.setAnimation( 'Ink', 'invisible' );;
    scope.BRYCBagCRa_12();
};

// ACTION
scope.BRYCBagCRa_12 = function(){
    scene.setActor( 'Adalais_act', 251, 129 );;
    scope.BRYCBagCRa_13();
};

// ACTION
scope.BRYCBagCRa_13 = function(){
    scene.setAnimation( 'Adalais_act', 'Ada_actor_classroom1_right' );;
    scope.BRYCBagCRa_14();
};

// ACTION
scope.BRYCBagCRa_14 = function(){
    scene.setConv( 'port1', 'Ada_smug' );;
    scope.BRYCBagCRa_15();
};

// TEXT
scope.BRYCBagCRa_15 = function(){
    player.set( 'current_in2_node', 'BRYCBagCRa_15' );
    var text = `Adalas: Got it!`;
    core.say( text, scope.BRYCBagCRa_16 );
};

// ACTION
scope.BRYCBagCRa_16 = function(){
    scene.setConv( 'port1', 'Ada_normal' );;
    scope.BRYCBagCRa_17();
};

// TEXT
scope.BRYCBagCRa_17 = function(){
    player.set( 'current_in2_node', 'BRYCBagCRa_17' );
    var text = `Adalas: Let me see what this is.`;
    core.say( text, scope.BRYCBagCRa_18 );
};

// ACTION
scope.BRYCBagCRa_18 = function(){
    scene.setConv( 'port1', 'Ada_thoughtful' );;
    scope.BRYCBagCRa_19();
};

// TEXT
scope.BRYCBagCRa_19 = function(){
    player.set( 'current_in2_node', 'BRYCBagCRa_19' );
    var text = `Adalas: I have "invisible ink revealer."  Who put that there?`;
    core.say( text, scope.BRYCBagCRa_20 );
};

// ACTION
scope.BRYCBagCRa_20 = function(){
    scene.endConversation();;
    scope.BRYCBagCRa_21();
};

// ACTION
scope.BRYCBagCRa_21 = function(){
    scene.restoreActorBase( 'Adalais_act' );;
    scope.BRYCBagCRa_22();
};
// chunk LAST
scope.BRYCBagCRa_22 = function(){
    scope.IYXlBsdLHg();
};

// chunk FIRST
scope.TawaSKIkgM = function(){
    scope.TawaSKIkgM_0();
};
// ACTION
scope.TawaSKIkgM_0 = function(){
    scene.startConversation( 'BlackBar', 'black-bar', [ { name: 'port1', anim: 'Ada_normal' } ] );;
    scope.TawaSKIkgM_1();
};

// ACTION
scope.TawaSKIkgM_1 = function(){
    scene.setActor( 'Adalais_act', 255, 145 );;
    scope.TawaSKIkgM_2();
};

// ACTION
scope.TawaSKIkgM_2 = function(){
    scene.setAnimation( 'Adalais_act', 'Ada_actor_classroom1_right' );;
    scope.TawaSKIkgM_3();
};

// ACTION
scope.TawaSKIkgM_3 = function(){
    scene.setConv( 'port1', 'Ada_invisible' );;
    scope.TawaSKIkgM_4();
};

// TEXT
scope.TawaSKIkgM_4 = function(){
    player.set( 'current_in2_node', 'TawaSKIkgM_4' );
    var text = `Adalais: *hup*`;
    core.say( text, scope.TawaSKIkgM_5 );
};

// ACTION
scope.TawaSKIkgM_5 = function(){
    scene.setConv( 'port1', 'Ada_angry' );;
    scope.TawaSKIkgM_6();
};

// TEXT
scope.TawaSKIkgM_6 = function(){
    player.set( 'current_in2_node', 'TawaSKIkgM_6' );
    var text = `Adalais: I still cannot reach the shelf.  If only I was a bit taller.`;
    core.say( text, scope.TawaSKIkgM_7 );
};

// ACTION
scope.TawaSKIkgM_7 = function(){
    scene.endConversation();;
    scope.TawaSKIkgM_8();
};

// ACTION
scope.TawaSKIkgM_8 = function(){
    scene.restoreActorBase( 'Adalais_act' );;
    scope.TawaSKIkgM_9();
};
// chunk LAST
scope.TawaSKIkgM_9 = function(){
    scope.IYXlBsdLHg();
};
// TEXT
scope.IlbxaTXXdy = function(){
    player.set( 'current_in2_node', 'IlbxaTXXdy' );
    var text = `Picture.`;
    core.say( text, scope.hUZDPCdhut );
};

// chunk FIRST
scope.hUZDPCdhut = function(){
    scope.hUZDPCdhut_0();
};
// ACTION
scope.hUZDPCdhut_0 = function(){
    scene.startConversation( 'BlackBar', 'black-bar', [ { name: 'port1', anim: 'Ada_normal' } ] );;
    scope.hUZDPCdhut_1();
};

// ACTION
scope.hUZDPCdhut_1 = function(){
    scene.setActor( 'Adalais_act', -16, 65 );;
    scope.hUZDPCdhut_2();
};

// ACTION
scope.hUZDPCdhut_2 = function(){
    scene.setAnimation( 'Adalais_act', 'Ada_actor_classroom1_up' );;
    scope.hUZDPCdhut_3();
};

// ACTION
scope.hUZDPCdhut_3 = function(){
    scene.setConv( 'port1', 'Ada_normal' );;
    scope.hUZDPCdhut_4();
};

// TEXT
scope.hUZDPCdhut_4 = function(){
    player.set( 'current_in2_node', 'hUZDPCdhut_4' );
    var text = `Adalais: Mr. Ralgo hung this picture on the wall last week.`;
    core.say( text, scope.hUZDPCdhut_5 );
};

// ACTION
scope.hUZDPCdhut_5 = function(){
    scene.setConv( 'port1', 'Ada_smug' );;
    scope.hUZDPCdhut_6();
};

// TEXT
scope.hUZDPCdhut_6 = function(){
    player.set( 'current_in2_node', 'hUZDPCdhut_6' );
    var text = `Adalais: He claimed that an artist painstakingly painted every pixel on it, but it is obviously just a subset of a julia fractal in grayscale.  Such a thing is easily generated via computer.`;
    core.say( text, scope.hUZDPCdhut_7 );
};

// ACTION
scope.hUZDPCdhut_7 = function(){
    scene.endConversation();;
    scope.hUZDPCdhut_8();
};

// ACTION
scope.hUZDPCdhut_8 = function(){
    scene.restoreActorBase( 'Adalais_act' );;
    scope.hUZDPCdhut_9();
};
// chunk LAST
scope.hUZDPCdhut_9 = function(){
    scope.IYXlBsdLHg();
};
// TEXT
scope.RRuSKQYfWV = function(){
    player.set( 'current_in2_node', 'RRuSKQYfWV' );
    var text = `Talk.`;
    core.say( text, scope.RUEBUODSWQ );
};

// chunk FIRST
scope.RUEBUODSWQ = function(){
    scope.RUEBUODSWQ_0();
};
// ACTION
scope.RUEBUODSWQ_0 = function(){
    scene.startConversation( 'BlackBar', 'black-bar', [ { name: 'port1', anim: 'Ada_normal' } ] );;
    scope.RUEBUODSWQ_1();
};

// TEXT
scope.RUEBUODSWQ_1 = function(){
    player.set( 'current_in2_node', 'RUEBUODSWQ_1' );
    var text = `Adalais: Nobody is over on this side of the room right now.`;
    core.say( text, scope.RUEBUODSWQ_2 );
};

// ACTION
scope.RUEBUODSWQ_2 = function(){
    scene.endConversation();;
    scope.RUEBUODSWQ_3();
};
// chunk LAST
scope.RUEBUODSWQ_3 = function(){
    scope.uXhepFIJby();
};
// TEXT
scope.iXgQaNxtXq = function(){
    player.set( 'current_in2_node', 'iXgQaNxtXq' );
    var text = `Inventory`;
    core.say( text, scope.PPIdbiPsOb );
};

// ACTION
scope.PPIdbiPsOb = function(){
    player.set( 'last_room', 'comic-classroom4-se.json' );;
    scope.RLfpNhTfCi();
};

// next_file
scope.RLfpNhTfCi = function(){
    var key = `comic-inventory.json`;
    var func = files[ key ];
    if( func ) {
        func();
    } else {
        core.say( `EXECUTION WARNING, no file exists named ${key}. You are probably running a subset of all the files, and not the whole scenario. ` + Object.keys( files ), files.exit );
    }
};
// TEXT
scope.rzOkdEdbJS = function(){
    player.set( 'current_in2_node', 'rzOkdEdbJS' );
    var text = `Go to A/V room.`;
    core.say( text, scope.fHKYDXpmlp );
};

// chunk FIRST
scope.fHKYDXpmlp = function(){
    scope.fHKYDXpmlp_0();
};
// ACTION
scope.fHKYDXpmlp_0 = function(){
    scene.setAnimation( 'Overlay', 'black-screen', true );;
    scope.fHKYDXpmlp_1();
};

// TEXT
scope.fHKYDXpmlp_1 = function(){
    player.set( 'current_in2_node', 'fHKYDXpmlp_1' );
    var text = `...`;
    core.say( text, scope.fHKYDXpmlp_2 );
};
// chunk LAST
scope.fHKYDXpmlp_2 = function(){
    scope.CrgOZbGIxR();
};
// next_file
scope.CrgOZbGIxR = function(){
    var key = `comic-avcloset.json`;
    var func = files[ key ];
    if( func ) {
        func();
    } else {
        core.say( `EXECUTION WARNING, no file exists named ${key}. You are probably running a subset of all the files, and not the whole scenario. ` + Object.keys( files ), files.exit );
    }
};
if( !id ){
    scope.AmAhDLKxRO();
}
else {
    scope[ id ]();
}
};


files[ `comic-classroom3-sw.json` ] = function( id ){
player.set( 'current_in2_file', 'comic-classroom3-sw.json' );
// ACTION
scope.PHBZLBlgMu = function(){
    player.setIfUnset( 'first_aid_location', 'shelf' );
player.setIfUnset( 'scissors_location', 'desk' );
player.setIfUnset( 'girls_location', 'sw' );
player.setIfUnset( 'banana_location', 'ada' );
player.setIfUnset( 'classroom3_chair_location', 'desk' );
player.setIfUnset( 'book_location', 'ada');

scene.clearActors();
scene.addActor('Background', 0, 0, 'black-screen');
scene.addActor('FirstAid', 100, 119, 'invisible');
scene.addActor('Chair', 284, 192, 'invisible');
scene.addActor('Girls_act', 145, 81, 'invisible');
scene.addActor('Adalais_act', 75, 80, 'invisible');
scene.addActor('Foreground', 0, 0, 'invisible');
scene.addActor('Scissors', 367, 210, 'invisible');
scene.addActor('Banana', 356, 169, 'invisible');
scene.addActor('ShelfBooks', 0, 78, 'invisible');
scene.addActor('ShelfBooks2', 50, 80, 'invisible');
scene.addActor('Overlay', 0, 0, 'invisible');
scene.addActor('BlackBarLeft', 0, 300, 'invisible');
scene.addActor('BlackBarRight', 200, 300, 'invisible');
scene.addActor('BlackBar', 0, 350, 'invisible');
scene.addActor('port1', 100, 200, 'invisible');
scene.addActor('port2', 100, 200, 'invisible');

if( player.get( 'scissors_location' ) === 'desk' ){
  scene.setAnimation('Scissors', 'Scissors', true);
}
if( player.get( 'first_aid_location' ) === 'top' ){
  scene.setAnimation('FirstAid', 'First_Aid', true);
}
if( player.get( 'banana_location' ) === 'sw' ){
  scene.setAnimation('Banana', 'Banana', true);
}
if( player.get( 'girls_location' ) === 'sw' ){
  scene.setAnimation('Girls_act', 'Girls_actor_talking', true);
}
if( player.get( 'classroom3_chair_location' ) === 'shelf' ){
  scene.setActor( 'Chair', 60, 205 );
}
if( player.get( 'book_location' ) !== 'shelf' ){
  scene.setAnimation( 'ShelfBooks', 'Book2', true );
  scene.setActor( 'ShelfBooks', 30, 79 );
} else {
  scene.setAnimation( 'ShelfBooks', 'Classroom3_shelf_books', true );
}
scene.setActorBase('Adalais_act', 98, 192, 'Ada_actor_idle1' );
scene.restoreActorBase( 'Adalais_act' );
scene.setAnimation('Chair','Chair2',true);
scene.setAnimation('Background', 'Classroom3_bg', true);
scene.setAnimation('Foreground', 'Classroom3_fg', true);;
    scope.HognBcDVem();
};

// choice
scope.HognBcDVem = function(){
    player.set( 'current_in2_node', 'HognBcDVem' );
    var text = `Classroom SW - I need to find a way out of this classroom.`;
    core.choose( text, 'HognBcDVem', [{
        text: `Go to NW corner.`,
        cb: scope.mOryqpfnnK,
        condition: () => { return true; }
    },{
        text: `Go to SE corner.`,
        cb: scope.JqZGpMUfPF,
        condition: () => { return true; }
    },{
        text: `Examine surroundings.`,
        cb: scope.OmuINQmADg,
        condition: () => { return true; }
    },{
        text: `Talk`,
        cb: scope.bgpqKuInKd,
        condition: () => { return true; }
    },{
        text: `Inventory.`,
        cb: scope.GYwwcJDsTZ,
        condition: () => { return true; }
    }]);
};

// TEXT
scope.mOryqpfnnK = function(){
    player.set( 'current_in2_node', 'mOryqpfnnK' );
    var text = `Go to NW corner.`;
    core.say( text, scope.UKtHpCKNql );
};

// chunk FIRST
scope.UKtHpCKNql = function(){
    scope.UKtHpCKNql_0();
};
// ACTION
scope.UKtHpCKNql_0 = function(){
    scene.setAnimation( 'Overlay', 'black-screen', true );;
    scope.UKtHpCKNql_1();
};

// TEXT
scope.UKtHpCKNql_1 = function(){
    player.set( 'current_in2_node', 'UKtHpCKNql_1' );
    var text = `...`;
    core.say( text, scope.UKtHpCKNql_2 );
};
// chunk LAST
scope.UKtHpCKNql_2 = function(){
    scope.okQlOQkgxX();
};
// next_file
scope.okQlOQkgxX = function(){
    var key = `comic-classroom1.json`;
    var func = files[ key ];
    if( func ) {
        func();
    } else {
        core.say( `EXECUTION WARNING, no file exists named ${key}. You are probably running a subset of all the files, and not the whole scenario. ` + Object.keys( files ), files.exit );
    }
};
// TEXT
scope.JqZGpMUfPF = function(){
    player.set( 'current_in2_node', 'JqZGpMUfPF' );
    var text = `Go to SE corner.`;
    core.say( text, scope.FgIOObnaPL );
};

// chunk FIRST
scope.FgIOObnaPL = function(){
    scope.FgIOObnaPL_0();
};
// ACTION
scope.FgIOObnaPL_0 = function(){
    scene.setAnimation( 'Overlay', 'black-screen', true );;
    scope.FgIOObnaPL_1();
};

// TEXT
scope.FgIOObnaPL_1 = function(){
    player.set( 'current_in2_node', 'FgIOObnaPL_1' );
    var text = `...`;
    core.say( text, scope.FgIOObnaPL_2 );
};
// chunk LAST
scope.FgIOObnaPL_2 = function(){
    scope.pkYmDITnEZ();
};
// next_file
scope.pkYmDITnEZ = function(){
    var key = `comic-classroom4-se.json`;
    var func = files[ key ];
    if( func ) {
        func();
    } else {
        core.say( `EXECUTION WARNING, no file exists named ${key}. You are probably running a subset of all the files, and not the whole scenario. ` + Object.keys( files ), files.exit );
    }
};
// TEXT
scope.OmuINQmADg = function(){
    player.set( 'current_in2_node', 'OmuINQmADg' );
    var text = `Examine surroundings.`;
    core.say( text, scope.CgsgfdgyFN );
};

// choice
scope.CgsgfdgyFN = function(){
    player.set( 'current_in2_node', 'CgsgfdgyFN' );
    var text = `I can see these things from here:`;
    core.choose( text, 'CgsgfdgyFN', [{
        text: `Go back.`,
        cb: scope.fYfbglfbGV,
        condition: () => { return true; }
    },{
        text: `Square shelving.`,
        cb: scope.gkuYbiGabQ,
        condition: () => { return player.get( 'first_aid_location' ) !== 'top' }
    },{
        text: `High shelf.`,
        cb: scope.pciSAmNRVm,
        condition: () => { return true; }
    },{
        text: `Chair.`,
        cb: scope.wmhslERPhp,
        condition: () => { return true; }
    },{
        text: `Scissors.`,
        cb: scope.WJFFcdzYgT,
        condition: () => { return player.get( 'scissors_location' ) === 'desk' }
    },{
        text: `First Aid kit.`,
        cb: scope.bXhJIxEzsB,
        condition: () => { return player.get( 'first_aid_location' ) === 'top' }
    },{
        text: `Rancid Banana.`,
        cb: scope.GsDTHUwFgZ,
        condition: () => { return player.get('banana_location') === 'sw' }
    }]);
};

// TEXT
scope.fYfbglfbGV = function(){
    player.set( 'current_in2_node', 'fYfbglfbGV' );
    var text = `Go back.`;
    core.say( text, scope.HognBcDVem );
};

// TEXT
scope.gkuYbiGabQ = function(){
    player.set( 'current_in2_node', 'gkuYbiGabQ' );
    var text = `Square shelving.`;
    core.say( text, scope.hKygIHQPPt );
};

// pass_fail
scope.hKygIHQPPt = function(){
    player.set( 'current_in2_node', 'hKygIHQPPt' );
    var condition = ( function(){ return player.get( 'girls_location' ) === 'sw' } )();
    if( condition ){
        player.set( 'current_in2_node', 'QPsiUQTfWh' );
        var text = ``;
        core.say( text, scope.YfnuBWbLxk );
    }
    if( !condition ){
        player.set( 'current_in2_node', 'RBtEsQzKVp' );
        var text = ``;
        core.say( text, scope.aeyCLztTxS );
    }
};
// chunk FIRST
scope.YfnuBWbLxk = function(){
    scope.YfnuBWbLxk_0();
};
// ACTION
scope.YfnuBWbLxk_0 = function(){
    scene.startConversation( 'BlackBar', 'black-bar', [ { name: 'port1', anim: 'invisible' }, { name: 'port2', anim: 'invisible' }  ] );;
    scope.YfnuBWbLxk_1();
};

// ACTION
scope.YfnuBWbLxk_1 = function(){
    scene.setConv( 'port2', 'Ada_normal' );;
    scope.YfnuBWbLxk_2();
};

// TEXT
scope.YfnuBWbLxk_2 = function(){
    player.set( 'current_in2_node', 'YfnuBWbLxk_2' );
    var text = `Adalais: I would go look at the square shelving, except Eva and Mildrid are having a conversation over there.`;
    core.say( text, scope.YfnuBWbLxk_3 );
};

// ACTION
scope.YfnuBWbLxk_3 = function(){
    scene.setConv( 'port2', 'Ada_annoyed' );;
    scope.YfnuBWbLxk_4();
};

// TEXT
scope.YfnuBWbLxk_4 = function(){
    player.set( 'current_in2_node', 'YfnuBWbLxk_4' );
    var text = `Adalais: I do not like them very much, and I doubt that they would move at my behest, even if I asked *nicely*.`;
    core.say( text, scope.YfnuBWbLxk_5 );
};

// ACTION
scope.YfnuBWbLxk_5 = function(){
    scene.endConversation();;
    scope.YfnuBWbLxk_6();
};
// chunk LAST
scope.YfnuBWbLxk_6 = function(){
    scope.CgsgfdgyFN();
};

// chunk FIRST
scope.aeyCLztTxS = function(){
    scope.aeyCLztTxS_0();
};
// ACTION
scope.aeyCLztTxS_0 = function(){
    scene.startConversation( 'BlackBar', 'black-bar', [ { name: 'port1', anim: 'Ada_normal' } ] );;
    scope.aeyCLztTxS_1();
};

// ACTION
scope.aeyCLztTxS_1 = function(){
    scene.setActor( 'Adalais_act', 126, 71 );;
    scope.aeyCLztTxS_2();
};

// ACTION
scope.aeyCLztTxS_2 = function(){
    scene.setAnimation( 'Adalais_act', 'Ada_actor_classroom1_left' );;
    scope.aeyCLztTxS_3();
};

// ACTION
scope.aeyCLztTxS_3 = function(){
    scene.setConv( 'port1' );;
    scope.aeyCLztTxS_4();
};

// TEXT
scope.aeyCLztTxS_4 = function(){
    player.set( 'current_in2_node', 'aeyCLztTxS_4' );
    var text = `Adalais: These cubbyhole shelves are here for students so that we can store our backpacks during class.`;
    core.say( text, scope.aeyCLztTxS_5 );
};

// ACTION
scope.aeyCLztTxS_5 = function(){
    scene.setConv( 'port1', 'Ada_smug' );;
    scope.aeyCLztTxS_6();
};

// TEXT
scope.aeyCLztTxS_6 = function(){
    player.set( 'current_in2_node', 'aeyCLztTxS_6' );
    var text = `Adalais: Nobody uses them though, since it is more convenient to have your backpack by your desk.`;
    core.say( text, scope.aeyCLztTxS_7 );
};

// ACTION
scope.aeyCLztTxS_7 = function(){
    scene.setConv( 'port1', 'Ada_normal' );;
    scope.aeyCLztTxS_8();
};

// TEXT
scope.aeyCLztTxS_8 = function(){
    player.set( 'current_in2_node', 'aeyCLztTxS_8' );
    var text = `Adalais: So right now the only thing inside is the school-issued First Aid kit.`;
    core.say( text, scope.aeyCLztTxS_9 );
};

// ACTION
scope.aeyCLztTxS_9 = function(){
    scene.setConv( 'port1', 'Ada_normal' );;
    scope.aeyCLztTxS_10();
};

// TEXT
scope.aeyCLztTxS_10 = function(){
    player.set( 'current_in2_node', 'aeyCLztTxS_10' );
    var text = `Adalais: Should I get it out?`;
    core.say( text, scope.aeyCLztTxS_11 );
};

// ACTION
scope.aeyCLztTxS_11 = function(){
    ;
    scope.aeyCLztTxS_12();
};
// chunk LAST
scope.aeyCLztTxS_12 = function(){
    scope.RABTUcbfDJ();
};
// choice
scope.RABTUcbfDJ = function(){
    player.set( 'current_in2_node', 'RABTUcbfDJ' );
    var text = `Should I get the first aid kit out?`;
    core.choose( text, 'RABTUcbfDJ', [{
        text: `Yes.`,
        cb: scope.kzpKSinqLf,
        condition: () => { return true; }
    },{
        text: `No.`,
        cb: scope.tfqkUzYhGI,
        condition: () => { return true; }
    }]);
};

// TEXT
scope.kzpKSinqLf = function(){
    player.set( 'current_in2_node', 'kzpKSinqLf' );
    var text = `Yes.`;
    core.say( text, scope.UrQbcqaboG );
};

// chunk FIRST
scope.UrQbcqaboG = function(){
    scope.UrQbcqaboG_0();
};
// ACTION
scope.UrQbcqaboG_0 = function(){
    scene.setConv( 'port1', 'Ada_normal' );;
    scope.UrQbcqaboG_1();
};

// TEXT
scope.UrQbcqaboG_1 = function(){
    player.set( 'current_in2_node', 'UrQbcqaboG_1' );
    var text = `Adalais: Okay...`;
    core.say( text, scope.UrQbcqaboG_2 );
};

// ACTION
scope.UrQbcqaboG_2 = function(){
    scene.setConv( 'port1', 'invisible' );;
    scope.UrQbcqaboG_3();
};

// ACTION
scope.UrQbcqaboG_3 = function(){
    scene.setAnimation( 'FirstAid', 'First_Aid' );;
    scope.UrQbcqaboG_4();
};

// TEXT
scope.UrQbcqaboG_4 = function(){
    player.set( 'current_in2_node', 'UrQbcqaboG_4' );
    var text = `...`;
    core.say( text, scope.UrQbcqaboG_5 );
};

// ACTION
scope.UrQbcqaboG_5 = function(){
    scene.setConv( 'port1', 'Ada_normal' );;
    scope.UrQbcqaboG_6();
};

// TEXT
scope.UrQbcqaboG_6 = function(){
    player.set( 'current_in2_node', 'UrQbcqaboG_6' );
    var text = `Adalais: I got the first aid kit out.  Now what?`;
    core.say( text, scope.UrQbcqaboG_7 );
};

// ACTION
scope.UrQbcqaboG_7 = function(){
    scene.endConversation();;
    scope.UrQbcqaboG_8();
};

// ACTION
scope.UrQbcqaboG_8 = function(){
    scene.restoreActorBase( 'Adalais_act' );;
    scope.UrQbcqaboG_9();
};
// chunk LAST
scope.UrQbcqaboG_9 = function(){
    scope.DcrUgIHtOK();
};
// ACTION
scope.DcrUgIHtOK = function(){
    player.set( "first_aid_location", 'top' );
    scope.CgsgfdgyFN();
};

// TEXT
scope.tfqkUzYhGI = function(){
    player.set( 'current_in2_node', 'tfqkUzYhGI' );
    var text = `No.`;
    core.say( text, scope.OVLVVgBrwK );
};

// chunk FIRST
scope.OVLVVgBrwK = function(){
    scope.OVLVVgBrwK_0();
};
// ACTION
scope.OVLVVgBrwK_0 = function(){
    scene.setConv( 'port1', 'Ada_normal' );;
    scope.OVLVVgBrwK_1();
};

// TEXT
scope.OVLVVgBrwK_1 = function(){
    player.set( 'current_in2_node', 'OVLVVgBrwK_1' );
    var text = `Adalais: I will leave it where it is for now.`;
    core.say( text, scope.OVLVVgBrwK_2 );
};

// ACTION
scope.OVLVVgBrwK_2 = function(){
    scene.endConversation();;
    scope.OVLVVgBrwK_3();
};

// ACTION
scope.OVLVVgBrwK_3 = function(){
    scene.restoreActorBase( 'Adalais_act' );;
    scope.OVLVVgBrwK_4();
};
// chunk LAST
scope.OVLVVgBrwK_4 = function(){
    scope.CgsgfdgyFN();
};
// TEXT
scope.pciSAmNRVm = function(){
    player.set( 'current_in2_node', 'pciSAmNRVm' );
    var text = `High shelf.`;
    core.say( text, scope.CBumpkPuKr );
};

// pass_fail
scope.CBumpkPuKr = function(){
    player.set( 'current_in2_node', 'CBumpkPuKr' );
    var condition = ( function(){ return player.get( 'classroom3_chair_location' ) === 'shelf' } )();
    if( !condition ){
        player.set( 'current_in2_node', 'gZzmdsHFfp' );
        var text = ``;
        core.say( text, scope.xCBuXJgfyl );
    }
    if( condition ){
        player.set( 'current_in2_node', 'tPgLVbYXUJ' );
        var text = ``;
        core.say( text, scope.LhOcTKscZd );
    }
};
// chunk FIRST
scope.xCBuXJgfyl = function(){
    scope.xCBuXJgfyl_0();
};
// ACTION
scope.xCBuXJgfyl_0 = function(){
    scene.startConversation( 'BlackBar', 'black-bar', [ { name: 'port1', anim: 'Ada_normal' } ] );;
    scope.xCBuXJgfyl_1();
};

// ACTION
scope.xCBuXJgfyl_1 = function(){
    scene.setActor( 'Adalais_act', 51, 175 );;
    scope.xCBuXJgfyl_2();
};

// ACTION
scope.xCBuXJgfyl_2 = function(){
    scene.setAnimation( 'Adalais_act', 'Ada_actor_classroom1_leftup' );;
    scope.xCBuXJgfyl_3();
};

// ACTION
scope.xCBuXJgfyl_3 = function(){
    scene.setConv( 'port1' );;
    scope.xCBuXJgfyl_4();
};

// TEXT
scope.xCBuXJgfyl_4 = function(){
    player.set( 'current_in2_node', 'xCBuXJgfyl_4' );
    var text = `Adalais: I wish I was tall enough to see what is on that shelf.`;
    core.say( text, scope.xCBuXJgfyl_5 );
};

// ACTION
scope.xCBuXJgfyl_5 = function(){
    scene.endConversation();;
    scope.xCBuXJgfyl_6();
};

// ACTION
scope.xCBuXJgfyl_6 = function(){
    scene.restoreActorBase( 'Adalais_act' );;
    scope.xCBuXJgfyl_7();
};
// chunk LAST
scope.xCBuXJgfyl_7 = function(){
    scope.CgsgfdgyFN();
};

// pass_fail
scope.LhOcTKscZd = function(){
    player.set( 'current_in2_node', 'LhOcTKscZd' );
    var condition = ( function(){ return player.get( 'book_location' ) !== "shelf" } )();
    if( !condition ){
        player.set( 'current_in2_node', 'XZXMGsirGI' );
        var text = ``;
        core.say( text, scope.axhqoWdBiw );
    }
    if( condition ){
        player.set( 'current_in2_node', 'qbJdmacByQ' );
        var text = ``;
        core.say( text, scope.oRnILWOWaY );
    }
};
// chunk FIRST
scope.axhqoWdBiw = function(){
    scope.axhqoWdBiw_0();
};
// ACTION
scope.axhqoWdBiw_0 = function(){
    scene.startConversation( 'BlackBar', 'black-bar', [ { name: 'port1', anim: 'Ada_normal' } ] );;
    scope.axhqoWdBiw_1();
};

// ACTION
scope.axhqoWdBiw_1 = function(){
    scene.setActor( 'Adalais_act', 51, 175 );;
    scope.axhqoWdBiw_2();
};

// ACTION
scope.axhqoWdBiw_2 = function(){
    scene.setAnimation( 'Adalais_act', 'Ada_actor_classroom1_leftup' );;
    scope.axhqoWdBiw_3();
};

// ACTION
scope.axhqoWdBiw_3 = function(){
    scene.setConv( 'port1', 'invisible' );;
    scope.axhqoWdBiw_4();
};

// ACTION
scope.axhqoWdBiw_4 = function(){
    scene.setActor( 'Adalais_act', 47, 145 );;
    scope.axhqoWdBiw_5();
};

// TEXT
scope.axhqoWdBiw_5 = function(){
    player.set( 'current_in2_node', 'axhqoWdBiw_5' );
    var text = `Adalais: *hup*`;
    core.say( text, scope.axhqoWdBiw_6 );
};

// ACTION
scope.axhqoWdBiw_6 = function(){
    scene.setConv( 'port1', 'Ada_angry' );;
    scope.axhqoWdBiw_7();
};

// TEXT
scope.axhqoWdBiw_7 = function(){
    player.set( 'current_in2_node', 'axhqoWdBiw_7' );
    var text = `Adalais: Even standing on this chair, I cannot quite reach the shelf.`;
    core.say( text, scope.axhqoWdBiw_8 );
};

// ACTION
scope.axhqoWdBiw_8 = function(){
    scene.setConv( 'port1', 'Ada_normal' );;
    scope.axhqoWdBiw_9();
};

// TEXT
scope.axhqoWdBiw_9 = function(){
    player.set( 'current_in2_node', 'axhqoWdBiw_9' );
    var text = `Adalais: But there is a dangling piece of paper I can pull.`;
    core.say( text, scope.axhqoWdBiw_10 );
};

// ACTION
scope.axhqoWdBiw_10 = function(){
    scene.setAnimation( 'ShelfBooks', 'invisible' );;
    scope.axhqoWdBiw_11();
};

// ACTION
scope.axhqoWdBiw_11 = function(){
    scene.setAnimation( 'Adalais_act', 'Ada_actor_pull_book' );;
    scope.axhqoWdBiw_12();
};

// ACTION
scope.axhqoWdBiw_12 = function(){
    scene.setActor( 'Adalais_act', -2, 19 );
    scope.axhqoWdBiw_13();
};

// ACTION
scope.axhqoWdBiw_13 = function(){
    scene.setConv( 'port1', 'invisible' );;
    scope.axhqoWdBiw_14();
};

// TEXT
scope.axhqoWdBiw_14 = function(){
    player.set( 'current_in2_node', 'axhqoWdBiw_14' );
    var text = `...`;
    core.say( text, scope.axhqoWdBiw_15 );
};

// ACTION
scope.axhqoWdBiw_15 = function(){
    scene.setConv( 'port1', 'Ada_worried' );;
    scope.axhqoWdBiw_16();
};

// TEXT
scope.axhqoWdBiw_16 = function(){
    player.set( 'current_in2_node', 'axhqoWdBiw_16' );
    var text = `Adalais: Oh dear...  That large book fell down.`;
    core.say( text, scope.axhqoWdBiw_17 );
};

// ACTION
scope.axhqoWdBiw_17 = function(){
    scene.setConv( 'port1', 'Ada_normal2' );;
    scope.axhqoWdBiw_18();
};

// TEXT
scope.axhqoWdBiw_18 = function(){
    player.set( 'current_in2_node', 'axhqoWdBiw_18' );
    var text = `Adalais: I suppose I should pick the book up off the ground, since I was the one who knocked it over.`;
    core.say( text, scope.axhqoWdBiw_19 );
};

// ACTION
scope.axhqoWdBiw_19 = function(){
    scene.setAnimation( 'ShelfBooks', 'Book2' );;
    scope.axhqoWdBiw_20();
};

// ACTION
scope.axhqoWdBiw_20 = function(){
    scene.setActor( 'ShelfBooks', 30, 79 );;
    scope.axhqoWdBiw_21();
};

// ACTION
scope.axhqoWdBiw_21 = function(){
    scene.setAnimation( 'Adalais_act', 'Ada_actor_classroom1_leftup' );;
    scope.axhqoWdBiw_22();
};

// ACTION
scope.axhqoWdBiw_22 = function(){
    scene.setActor( 'Adalais_act', 51, 195 );;
    scope.axhqoWdBiw_23();
};

// ACTION
scope.axhqoWdBiw_23 = function(){
    scene.setActor( 'ShelfBooks2', 36, 288 );;
    scope.axhqoWdBiw_24();
};

// ACTION
scope.axhqoWdBiw_24 = function(){
    scene.setAnimation( 'ShelfBooks2', 'Book' );;
    scope.axhqoWdBiw_25();
};

// TEXT
scope.axhqoWdBiw_25 = function(){
    player.set( 'current_in2_node', 'axhqoWdBiw_25' );
    var text = `...`;
    core.say( text, scope.axhqoWdBiw_26 );
};

// ACTION
scope.axhqoWdBiw_26 = function(){
    scene.setAnimation( 'ShelfBooks2', 'invisible' );;
    scope.axhqoWdBiw_27();
};

// ACTION
scope.axhqoWdBiw_27 = function(){
    scene.setConv( 'port1', 'Ada_normal' );;
    scope.axhqoWdBiw_28();
};

// TEXT
scope.axhqoWdBiw_28 = function(){
    player.set( 'current_in2_node', 'axhqoWdBiw_28' );
    var text = `Adalais: Okay, I have that book now.`;
    core.say( text, scope.axhqoWdBiw_29 );
};

// ACTION
scope.axhqoWdBiw_29 = function(){
    scene.setConv( 'port1', 'Ada_normal' );;
    scope.axhqoWdBiw_30();
};

// TEXT
scope.axhqoWdBiw_30 = function(){
    player.set( 'current_in2_node', 'axhqoWdBiw_30' );
    var text = `Adalais: The title is "One-Hundred-Thousand Recipes for Pizza".`;
    core.say( text, scope.axhqoWdBiw_31 );
};

// ACTION
scope.axhqoWdBiw_31 = function(){
    scene.setConv( 'port1', 'Ada_annoyed' );;
    scope.axhqoWdBiw_32();
};

// TEXT
scope.axhqoWdBiw_32 = function(){
    player.set( 'current_in2_node', 'axhqoWdBiw_32' );
    var text = `Adalais: Why was this up there?`;
    core.say( text, scope.axhqoWdBiw_33 );
};

// ACTION
scope.axhqoWdBiw_33 = function(){
    scene.setConv( 'por1', 'Ada_thoughtful' );;
    scope.axhqoWdBiw_34();
};

// TEXT
scope.axhqoWdBiw_34 = function(){
    player.set( 'current_in2_node', 'axhqoWdBiw_34' );
    var text = `Adalais: And this piece of paper is completely blank.  How strange...`;
    core.say( text, scope.axhqoWdBiw_35 );
};

// ACTION
scope.axhqoWdBiw_35 = function(){
    scene.endConversation();;
    scope.axhqoWdBiw_36();
};

// ACTION
scope.axhqoWdBiw_36 = function(){
    scene.restoreActorBase( 'Adalais_act' );;
    scope.axhqoWdBiw_37();
};
// chunk LAST
scope.axhqoWdBiw_37 = function(){
    scope.fzUKRyqAQz();
};
// ACTION
scope.fzUKRyqAQz = function(){
    player.set( "blank_paper_location", 'ada' );
    scope.tISxeVNTbf();
};

// ACTION
scope.tISxeVNTbf = function(){
    player.set( "book_location", 'ada' );
    scope.PHBZLBlgMu();
};


// chunk FIRST
scope.oRnILWOWaY = function(){
    scope.oRnILWOWaY_0();
};
// ACTION
scope.oRnILWOWaY_0 = function(){
    scene.startConversation( 'BlackBar', 'black-bar', [ { name: 'port1', anim: 'Ada_normal' } ] );;
    scope.oRnILWOWaY_1();
};

// ACTION
scope.oRnILWOWaY_1 = function(){
    scene.setActor( 'Adalais_act', 51, 185 );;
    scope.oRnILWOWaY_2();
};

// ACTION
scope.oRnILWOWaY_2 = function(){
    scene.setAnimation( 'Adalais_act', 'Ada_actor_classroom1_leftup' );;
    scope.oRnILWOWaY_3();
};

// ACTION
scope.oRnILWOWaY_3 = function(){
    scene.setConv( 'port1', 'Ada_normal' );;
    scope.oRnILWOWaY_4();
};

// TEXT
scope.oRnILWOWaY_4 = function(){
    player.set( 'current_in2_node', 'oRnILWOWaY_4' );
    var text = `Adalais: I already got something from there.`;
    core.say( text, scope.oRnILWOWaY_5 );
};

// ACTION
scope.oRnILWOWaY_5 = function(){
    scene.endConversation();;
    scope.oRnILWOWaY_6();
};

// ACTION
scope.oRnILWOWaY_6 = function(){
    scene.restoreActorBase( 'Adalais_act' );;
    scope.oRnILWOWaY_7();
};
// chunk LAST
scope.oRnILWOWaY_7 = function(){
    scope.CgsgfdgyFN();
};
// TEXT
scope.wmhslERPhp = function(){
    player.set( 'current_in2_node', 'wmhslERPhp' );
    var text = `Chair.`;
    core.say( text, scope.GodgGNJxhP );
};

// pass_fail
scope.GodgGNJxhP = function(){
    player.set( 'current_in2_node', 'GodgGNJxhP' );
    var condition = ( function(){ return player.get( 'classroom3_chair_location' ) === 'shelf' } )();
    if( condition ){
        player.set( 'current_in2_node', 'wSMzoIIpCi' );
        var text = ``;
        core.say( text, scope.YSKeCwuKQI );
    }
    if( !condition ){
        player.set( 'current_in2_node', 'kOaSLDRzXl' );
        var text = ``;
        core.say( text, scope.AVIreteDAQ );
    }
};
// chunk FIRST
scope.YSKeCwuKQI = function(){
    scope.YSKeCwuKQI_0();
};
// ACTION
scope.YSKeCwuKQI_0 = function(){
    scene.startConversation( 'BlackBar', 'black-bar', [ { name: 'port1', anim: 'Ada_normal' } ] );;
    scope.YSKeCwuKQI_1();
};

// ACTION
scope.YSKeCwuKQI_1 = function(){
    scene.setConv( 'port1', 'Ada_annoyed' );;
    scope.YSKeCwuKQI_2();
};

// TEXT
scope.YSKeCwuKQI_2 = function(){
    player.set( 'current_in2_node', 'YSKeCwuKQI_2' );
    var text = `Adalais: I already moved the chair to the shelf.`;
    core.say( text, scope.YSKeCwuKQI_3 );
};

// ACTION
scope.YSKeCwuKQI_3 = function(){
    scene.endConversation();;
    scope.YSKeCwuKQI_4();
};

// ACTION
scope.YSKeCwuKQI_4 = function(){
    scene.restoreActorBase( 'Adalais_act' );;
    scope.YSKeCwuKQI_5();
};
// chunk LAST
scope.YSKeCwuKQI_5 = function(){
    scope.CgsgfdgyFN();
};

// chunk FIRST
scope.AVIreteDAQ = function(){
    scope.AVIreteDAQ_0();
};
// ACTION
scope.AVIreteDAQ_0 = function(){
    scene.startConversation( 'BlackBar', 'black-bar', [ { name: 'port1', anim: 'Ada_normal' } ] );;
    scope.AVIreteDAQ_1();
};

// ACTION
scope.AVIreteDAQ_1 = function(){
    scene.setConv( 'port1', 'Ada_normal' );;
    scope.AVIreteDAQ_2();
};

// TEXT
scope.AVIreteDAQ_2 = function(){
    player.set( 'current_in2_node', 'AVIreteDAQ_2' );
    var text = `Adalais: Should I move the chair to the shelf?`;
    core.say( text, scope.AVIreteDAQ_3 );
};
// chunk LAST
scope.AVIreteDAQ_3 = function(){
    scope.GAdZDzZJdP();
};
// choice
scope.GAdZDzZJdP = function(){
    player.set( 'current_in2_node', 'GAdZDzZJdP' );
    var text = `Should I move a chair to the shelf?`;
    core.choose( text, 'GAdZDzZJdP', [{
        text: `Move chair.`,
        cb: scope.lbwpgFbdKc,
        condition: () => { return true; }
    },{
        text: `Do not move chair.`,
        cb: scope.gFBAlGKuSV,
        condition: () => { return true; }
    }]);
};

// TEXT
scope.lbwpgFbdKc = function(){
    player.set( 'current_in2_node', 'lbwpgFbdKc' );
    var text = `Move chair.`;
    core.say( text, scope.VqPKuIqPHF );
};

// chunk FIRST
scope.VqPKuIqPHF = function(){
    scope.VqPKuIqPHF_0();
};
// ACTION
scope.VqPKuIqPHF_0 = function(){
    scene.setConv( 'port1', 'invisible' );;
    scope.VqPKuIqPHF_1();
};

// ACTION
scope.VqPKuIqPHF_1 = function(){
    scene.setAnimation( 'Chair', 'invisible' );;
    scope.VqPKuIqPHF_2();
};

// ACTION
scope.VqPKuIqPHF_2 = function(){
    scene.setAnimation( 'Adalais_act', 'Ada_moving_chair2' );;
    scope.VqPKuIqPHF_3();
};

// ACTION
scope.VqPKuIqPHF_3 = function(){
    scene.setActor( 'Adalais_act', 25, 129 );;
    scope.VqPKuIqPHF_4();
};

// TEXT
scope.VqPKuIqPHF_4 = function(){
    player.set( 'current_in2_node', 'VqPKuIqPHF_4' );
    var text = `...`;
    core.say( text, scope.VqPKuIqPHF_5 );
};

// ACTION
scope.VqPKuIqPHF_5 = function(){
    scene.setConv( 'port1', 'Ada_normal' );;
    scope.VqPKuIqPHF_6();
};

// ACTION
scope.VqPKuIqPHF_6 = function(){
    scene.setActor('Chair', 60, 205);;
    scope.VqPKuIqPHF_7();
};

// TEXT
scope.VqPKuIqPHF_7 = function(){
    player.set( 'current_in2_node', 'VqPKuIqPHF_7' );
    var text = `Adalais: Okay, I moved the chair.`;
    core.say( text, scope.VqPKuIqPHF_8 );
};

// ACTION
scope.VqPKuIqPHF_8 = function(){
    scene.setAnimation( 'Chair', 'Chair2' );;
    scope.VqPKuIqPHF_9();
};

// ACTION
scope.VqPKuIqPHF_9 = function(){
    scene.endConversation();;
    scope.VqPKuIqPHF_10();
};

// ACTION
scope.VqPKuIqPHF_10 = function(){
    scene.restoreActorBase( 'Adalais_act' );;
    scope.VqPKuIqPHF_11();
};
// chunk LAST
scope.VqPKuIqPHF_11 = function(){
    scope.ucPsSDiDir();
};
// ACTION
scope.ucPsSDiDir = function(){
    player.set( "classroom3_chair_location", "shelf" );
    scope.CgsgfdgyFN();
};

// TEXT
scope.gFBAlGKuSV = function(){
    player.set( 'current_in2_node', 'gFBAlGKuSV' );
    var text = `Do not move chair.`;
    core.say( text, scope.ufJOtMPiWX );
};

// chunk FIRST
scope.ufJOtMPiWX = function(){
    scope.ufJOtMPiWX_0();
};
// ACTION
scope.ufJOtMPiWX_0 = function(){
    scene.setConv( 'Ada_normal' );;
    scope.ufJOtMPiWX_1();
};

// TEXT
scope.ufJOtMPiWX_1 = function(){
    player.set( 'current_in2_node', 'ufJOtMPiWX_1' );
    var text = `Adalais: I do not need to move that chair yet.`;
    core.say( text, scope.ufJOtMPiWX_2 );
};

// ACTION
scope.ufJOtMPiWX_2 = function(){
    scene.endConversation();;
    scope.ufJOtMPiWX_3();
};

// ACTION
scope.ufJOtMPiWX_3 = function(){
    scene.restoreActorBase( 'Adalais_act' );;
    scope.ufJOtMPiWX_4();
};
// chunk LAST
scope.ufJOtMPiWX_4 = function(){
    scope.CgsgfdgyFN();
};
// TEXT
scope.WJFFcdzYgT = function(){
    player.set( 'current_in2_node', 'WJFFcdzYgT' );
    var text = `Scissors.`;
    core.say( text, scope.cnYoTqXotn );
};

// chunk FIRST
scope.cnYoTqXotn = function(){
    scope.cnYoTqXotn_0();
};
// ACTION
scope.cnYoTqXotn_0 = function(){
    scene.startConversation( 'BlackBar', 'black-bar', [ { name: 'port1', anim: 'Ada_normal' } ] );;
    scope.cnYoTqXotn_1();
};

// ACTION
scope.cnYoTqXotn_1 = function(){
    scene.setActor( 'Adalais_act', 310, 116 );;
    scope.cnYoTqXotn_2();
};

// ACTION
scope.cnYoTqXotn_2 = function(){
    //scene.setAnimation( 'Adalais_act', 'Ada_actor_classroom1_right' );;
    scope.cnYoTqXotn_3();
};

// ACTION
scope.cnYoTqXotn_3 = function(){
    scene.setConv( 'port1' );;
    scope.cnYoTqXotn_4();
};

// TEXT
scope.cnYoTqXotn_4 = function(){
    player.set( 'current_in2_node', 'cnYoTqXotn_4' );
    var text = `Adalais: It looks like somebody left some scissors on this desk.`;
    core.say( text, scope.cnYoTqXotn_5 );
};

// ACTION
scope.cnYoTqXotn_5 = function(){
    scene.setConv( 'port1', 'Ada_thoughtful' );;
    scope.cnYoTqXotn_6();
};

// TEXT
scope.cnYoTqXotn_6 = function(){
    player.set( 'current_in2_node', 'cnYoTqXotn_6' );
    var text = `Adalais: Perhaps I will take them, just in case I need them.`;
    core.say( text, scope.cnYoTqXotn_7 );
};

// ACTION
scope.cnYoTqXotn_7 = function(){
    scene.setConv( 'port1', 'invisible' );;
    scope.cnYoTqXotn_8();
};

// ACTION
scope.cnYoTqXotn_8 = function(){
    scene.setAnimation( 'Scissors', 'invisible' );;
    scope.cnYoTqXotn_9();
};

// TEXT
scope.cnYoTqXotn_9 = function(){
    player.set( 'current_in2_node', 'cnYoTqXotn_9' );
    var text = `...`;
    core.say( text, scope.cnYoTqXotn_10 );
};

// ACTION
scope.cnYoTqXotn_10 = function(){
    scene.setConv( 'port1', 'Ada_normal' );;
    scope.cnYoTqXotn_11();
};

// TEXT
scope.cnYoTqXotn_11 = function(){
    player.set( 'current_in2_node', 'cnYoTqXotn_11' );
    var text = `Adalais: Okay, I have scissors now.`;
    core.say( text, scope.cnYoTqXotn_12 );
};

// ACTION
scope.cnYoTqXotn_12 = function(){
    scene.endConversation();;
    scope.cnYoTqXotn_13();
};

// ACTION
scope.cnYoTqXotn_13 = function(){
    scene.restoreActorBase( 'Adalais_act' );;
    scope.cnYoTqXotn_14();
};
// chunk LAST
scope.cnYoTqXotn_14 = function(){
    scope.zVxuGBxItB();
};
// ACTION
scope.zVxuGBxItB = function(){
    player.set( "scissors_location", 'ada' );
    scope.CgsgfdgyFN();
};

// TEXT
scope.bXhJIxEzsB = function(){
    player.set( 'current_in2_node', 'bXhJIxEzsB' );
    var text = `First Aid kit.`;
    core.say( text, scope.whotypcUPf );
};

// pass_fail
scope.whotypcUPf = function(){
    player.set( 'current_in2_node', 'whotypcUPf' );
    var condition = ( function(){ return player.get( 'girls_location' ) === 'sw' } )();
    if( condition ){
        player.set( 'current_in2_node', 'uQgWrEBpyM' );
        var text = ``;
        core.say( text, scope.nBagoXGIWl );
    }
    if( !condition ){
        player.set( 'current_in2_node', 'pwgalBfLFx' );
        var text = ``;
        core.say( text, scope.dhFReGhGXM );
    }
};
// chunk FIRST
scope.nBagoXGIWl = function(){
    scope.nBagoXGIWl_0();
};
// ACTION
scope.nBagoXGIWl_0 = function(){
    scene.startConversation( 'BlackBar', 'black-bar', [ { name: 'port1', anim: 'invisible' }, { name: 'port2', anim: 'invisible' }  ] );;
    scope.nBagoXGIWl_1();
};

// ACTION
scope.nBagoXGIWl_1 = function(){
    scene.setConv( 'port2', 'Ada_normal' );;
    scope.nBagoXGIWl_2();
};

// TEXT
scope.nBagoXGIWl_2 = function(){
    player.set( 'current_in2_node', 'nBagoXGIWl_2' );
    var text = `Adalais: I would go look at the First Aid kit, except Eva and Mildrid are having a conversation over there.`;
    core.say( text, scope.nBagoXGIWl_3 );
};

// ACTION
scope.nBagoXGIWl_3 = function(){
    scene.setConv( 'port2', 'Ada_annoyed' );;
    scope.nBagoXGIWl_4();
};

// TEXT
scope.nBagoXGIWl_4 = function(){
    player.set( 'current_in2_node', 'nBagoXGIWl_4' );
    var text = `Adalais: I do not like them very much, and I doubt that they would move even if I swallowed my pride and asked them nicely.`;
    core.say( text, scope.nBagoXGIWl_5 );
};

// ACTION
scope.nBagoXGIWl_5 = function(){
    scene.endConversation();;
    scope.nBagoXGIWl_6();
};
// chunk LAST
scope.nBagoXGIWl_6 = function(){
    scope.CgsgfdgyFN();
};

// chunk FIRST
scope.dhFReGhGXM = function(){
    scope.dhFReGhGXM_0();
};
// ACTION
scope.dhFReGhGXM_0 = function(){
    scene.startConversation( 'BlackBar', 'black-bar', [ { name: 'port1', anim: 'Ada_normal' } ] );;
    scope.dhFReGhGXM_1();
};

// ACTION
scope.dhFReGhGXM_1 = function(){
    scene.setActor( 'Adalais_act', 126, 71 );;
    scope.dhFReGhGXM_2();
};

// ACTION
scope.dhFReGhGXM_2 = function(){
    scene.setAnimation( 'Adalais_act', 'Ada_actor_classroom1_left' );;
    scope.dhFReGhGXM_3();
};

// ACTION
scope.dhFReGhGXM_3 = function(){
    scene.setConv( 'port1', 'Ada_normal' );;
    scope.dhFReGhGXM_4();
};

// TEXT
scope.dhFReGhGXM_4 = function(){
    player.set( 'current_in2_node', 'dhFReGhGXM_4' );
    var text = `Adalais: This is the school-issued first aid kit.`;
    core.say( text, scope.dhFReGhGXM_5 );
};

// ACTION
scope.dhFReGhGXM_5 = function(){
    scene.setConv( 'port1', 'Ada_normal' );;
    scope.dhFReGhGXM_6();
};

// TEXT
scope.dhFReGhGXM_6 = function(){
    player.set( 'current_in2_node', 'dhFReGhGXM_6' );
    var text = `Adalais: Inside is only one bandage, a little antiseptic, and a ludicrous amount of cotton balls.`;
    core.say( text, scope.dhFReGhGXM_7 );
};

// ACTION
scope.dhFReGhGXM_7 = function(){
    scene.setConv( 'port1', 'Ada_thoughtful' );;
    scope.dhFReGhGXM_8();
};

// TEXT
scope.dhFReGhGXM_8 = function(){
    player.set( 'current_in2_node', 'dhFReGhGXM_8' );
    var text = `Adalais: It looks like they just stuffed the kit with them to make it look like it was full of other useful stuff.`;
    core.say( text, scope.dhFReGhGXM_9 );
};

// ACTION
scope.dhFReGhGXM_9 = function(){
    scene.setConv( 'port1', 'Ada_angry' );;
    scope.dhFReGhGXM_10();
};

// TEXT
scope.dhFReGhGXM_10 = function(){
    player.set( 'current_in2_node', 'dhFReGhGXM_10' );
    var text = `Adalais: Such incompetence...`;
    core.say( text, scope.dhFReGhGXM_11 );
};

// ACTION
scope.dhFReGhGXM_11 = function(){
    scene.endConversation();;
    scope.dhFReGhGXM_12();
};

// ACTION
scope.dhFReGhGXM_12 = function(){
    scene.restoreActorBase( 'Adalais_act' );;
    scope.dhFReGhGXM_13();
};
// chunk LAST
scope.dhFReGhGXM_13 = function(){
    scope.CgsgfdgyFN();
};
// TEXT
scope.GsDTHUwFgZ = function(){
    player.set( 'current_in2_node', 'GsDTHUwFgZ' );
    var text = `Rancid Banana.`;
    core.say( text, scope.GoxYrTwudD );
};

// chunk FIRST
scope.GoxYrTwudD = function(){
    scope.GoxYrTwudD_0();
};
// ACTION
scope.GoxYrTwudD_0 = function(){
    scene.startConversation( 'BlackBar', 'black-bar', [ { name: 'port1', anim: 'Ada_normal' } ] );;
    scope.GoxYrTwudD_1();
};

// ACTION
scope.GoxYrTwudD_1 = function(){
    scene.setActor( 'Adalais_act', 296, 116 );;
    scope.GoxYrTwudD_2();
};

// ACTION
scope.GoxYrTwudD_2 = function(){
    scene.setAnimation( 'Adalais_act', 'Ada_actor_classroom1_left' );;
    scope.GoxYrTwudD_3();
};

// TEXT
scope.GoxYrTwudD_3 = function(){
    player.set( 'current_in2_node', 'GoxYrTwudD_3' );
    var text = `Adalais: That rancid banana is still over here.  Should I pick it up again?`;
    core.say( text, scope.GoxYrTwudD_4 );
};
// chunk LAST
scope.GoxYrTwudD_4 = function(){
    scope.bNxtMagLQI();
};
// choice
scope.bNxtMagLQI = function(){
    player.set( 'current_in2_node', 'bNxtMagLQI' );
    var text = `Should I pick up the banana?`;
    core.choose( text, 'bNxtMagLQI', [{
        text: `Yes.`,
        cb: scope.UaHZbDSlRO,
        condition: () => { return true; }
    },{
        text: `No.`,
        cb: scope.SnnmACNTMA,
        condition: () => { return true; }
    }]);
};

// TEXT
scope.UaHZbDSlRO = function(){
    player.set( 'current_in2_node', 'UaHZbDSlRO' );
    var text = `Yes.`;
    core.say( text, scope.nWlwTYNBQP );
};

// chunk FIRST
scope.nWlwTYNBQP = function(){
    scope.nWlwTYNBQP_0();
};
// ACTION
scope.nWlwTYNBQP_0 = function(){
    scene.setConv( 'Adalais_act', 'Ada_struggle' );;
    scope.nWlwTYNBQP_1();
};

// TEXT
scope.nWlwTYNBQP_1 = function(){
    player.set( 'current_in2_node', 'nWlwTYNBQP_1' );
    var text = `Adalais: Okay, I have the rancid banana again.`;
    core.say( text, scope.nWlwTYNBQP_2 );
};

// ACTION
scope.nWlwTYNBQP_2 = function(){
    scene.endConversation();;
    scope.nWlwTYNBQP_3();
};

// ACTION
scope.nWlwTYNBQP_3 = function(){
    scene.restoreActorBase( 'Adalais_act' );;
    scope.nWlwTYNBQP_4();
};
// chunk LAST
scope.nWlwTYNBQP_4 = function(){
    scope.rrNzrBClsT();
};
// ACTION
scope.rrNzrBClsT = function(){
    player.set( "banana_location", 'ada' );
    scope.PHBZLBlgMu();
};

// TEXT
scope.SnnmACNTMA = function(){
    player.set( 'current_in2_node', 'SnnmACNTMA' );
    var text = `No.`;
    core.say( text, scope.lnHNzWwGVr );
};

// chunk FIRST
scope.lnHNzWwGVr = function(){
    scope.lnHNzWwGVr_0();
};
// ACTION
scope.lnHNzWwGVr_0 = function(){
    scene.setConv( 'Adalais_act', 'Ada_normal' );;
    scope.lnHNzWwGVr_1();
};

// TEXT
scope.lnHNzWwGVr_1 = function(){
    player.set( 'current_in2_node', 'lnHNzWwGVr_1' );
    var text = `Adalais: I think I should stay away from that for now.`;
    core.say( text, scope.lnHNzWwGVr_2 );
};

// ACTION
scope.lnHNzWwGVr_2 = function(){
    scene.endConversation();;
    scope.lnHNzWwGVr_3();
};

// ACTION
scope.lnHNzWwGVr_3 = function(){
    scene.restoreActorBase( 'Adalais_act' );;
    scope.lnHNzWwGVr_4();
};
// chunk LAST
scope.lnHNzWwGVr_4 = function(){
    scope.CgsgfdgyFN();
};
// TEXT
scope.bgpqKuInKd = function(){
    player.set( 'current_in2_node', 'bgpqKuInKd' );
    var text = `Talk`;
    core.say( text, scope.qZFthbnlGr );
};

// pass_fail
scope.qZFthbnlGr = function(){
    player.set( 'current_in2_node', 'qZFthbnlGr' );
    var condition = ( function(){ return player.get( 'girls_location' ) === 'sw' } )();
    if( condition ){
        player.set( 'current_in2_node', 'DrGUKOgKoi' );
        var text = ``;
        core.say( text, scope.gmofgaXxIp );
    }
    if( !condition ){
        player.set( 'current_in2_node', 'tJfSqGCXZR' );
        var text = ``;
        core.say( text, scope.RufYJYnZOC );
    }
};
// chunk FIRST
scope.gmofgaXxIp = function(){
    scope.gmofgaXxIp_0();
};
// ACTION
scope.gmofgaXxIp_0 = function(){
    scene.startConversation( 'BlackBar', 'black-bar', [ { name: 'port1', anim: 'Ada_normal' } ] );;
    scope.gmofgaXxIp_1();
};

// ACTION
scope.gmofgaXxIp_1 = function(){
    scene.setConv( 'port1' );;
    scope.gmofgaXxIp_2();
};

// TEXT
scope.gmofgaXxIp_2 = function(){
    player.set( 'current_in2_node', 'gmofgaXxIp_2' );
    var text = `Adalais: The only people over here are Eva and Mildrid...`;
    core.say( text, scope.gmofgaXxIp_3 );
};

// ACTION
scope.gmofgaXxIp_3 = function(){
    scene.setConv( 'port1', 'Ada_worried' );;
    scope.gmofgaXxIp_4();
};

// TEXT
scope.gmofgaXxIp_4 = function(){
    player.set( 'current_in2_node', 'gmofgaXxIp_4' );
    var text = `Adalais: Ummm... Am I sure I want to go talk to them?  This seems like not a great idea.  They dislike me almost as much as I dislike them.`;
    core.say( text, scope.gmofgaXxIp_5 );
};

// ACTION
scope.gmofgaXxIp_5 = function(){
    scene.setConv( 'port1', 'Ada_annoyed' );;
    scope.gmofgaXxIp_6();
};

// TEXT
scope.gmofgaXxIp_6 = function(){
    player.set( 'current_in2_node', 'gmofgaXxIp_6' );
    var text = `Adalais: Fine... let us just get this over with.`;
    core.say( text, scope.gmofgaXxIp_7 );
};

// ACTION
scope.gmofgaXxIp_7 = function(){
    scene.setActor( 'Adalais_act', 120, 140 );;
    scope.gmofgaXxIp_8();
};

// ACTION
scope.gmofgaXxIp_8 = function(){
    scene.setAnimation( 'Adalais_act', 'Ada_actor_classroom1_up' );;
    scope.gmofgaXxIp_9();
};

// ACTION
scope.gmofgaXxIp_9 = function(){
    scene.endConversation();;
    scope.gmofgaXxIp_10();
};

// ACTION
scope.gmofgaXxIp_10 = function(){
    scene.startConversation( 'BlackBar', 'black-bar', [ { name: 'port1', anim: 'Ada_normal' }, { name: 'port2', anim: 'Girl1_normal' } ] );;
    scope.gmofgaXxIp_11();
};

// ACTION
scope.gmofgaXxIp_11 = function(){
    scene.setConv( 'port2' );;
    scope.gmofgaXxIp_12();
};

// TEXT
scope.gmofgaXxIp_12 = function(){
    player.set( 'current_in2_node', 'gmofgaXxIp_12' );
    var text = `Eva: "And that's when I just told her to get lost.  She's not even worth my time you know..."`;
    core.say( text, scope.gmofgaXxIp_13 );
};

// ACTION
scope.gmofgaXxIp_13 = function(){
    scene.setConv( 'port1', 'Ada_talking' );;
    scope.gmofgaXxIp_14();
};

// TEXT
scope.gmofgaXxIp_14 = function(){
    player.set( 'current_in2_node', 'gmofgaXxIp_14' );
    var text = `Adalais: "Excuse me... can I talk to you girls for a second."`;
    core.say( text, scope.gmofgaXxIp_15 );
};

// ACTION
scope.gmofgaXxIp_15 = function(){
    scene.setConv( 'port2' );;
    scope.gmofgaXxIp_16();
};

// TEXT
scope.gmofgaXxIp_16 = function(){
    player.set( 'current_in2_node', 'gmofgaXxIp_16' );
    var text = `Mildrid: "Well well well, look who it is." `;
    core.say( text, scope.gmofgaXxIp_17 );
};

// ACTION
scope.gmofgaXxIp_17 = function(){
    scene.setConv( 'port2' );;
    scope.gmofgaXxIp_18();
};

// TEXT
scope.gmofgaXxIp_18 = function(){
    player.set( 'current_in2_node', 'gmofgaXxIp_18' );
    var text = `Eva: "What do you want Ada?  Come to bore us with your knowledge?"`;
    core.say( text, scope.gmofgaXxIp_19 );
};

// ACTION
scope.gmofgaXxIp_19 = function(){
    scene.setConv( 'port2' );;
    scope.gmofgaXxIp_20();
};

// TEXT
scope.gmofgaXxIp_20 = function(){
    player.set( 'current_in2_node', 'gmofgaXxIp_20' );
    var text = `Mildrid: "Haha yeah.  I bet she already knew all about calculus before this class period."`;
    core.say( text, scope.gmofgaXxIp_21 );
};

// ACTION
scope.gmofgaXxIp_21 = function(){
    scene.setConv( 'port2' );;
    scope.gmofgaXxIp_22();
};

// TEXT
scope.gmofgaXxIp_22 = function(){
    player.set( 'current_in2_node', 'gmofgaXxIp_22' );
    var text = `Eva: "What a complete dork."`;
    core.say( text, scope.gmofgaXxIp_23 );
};

// ACTION
scope.gmofgaXxIp_23 = function(){
    scene.setConv( 'port2' );;
    scope.gmofgaXxIp_24();
};

// TEXT
scope.gmofgaXxIp_24 = function(){
    player.set( 'current_in2_node', 'gmofgaXxIp_24' );
    var text = `Mildrid: "Just get lost Ada.  You're way too much of a dork for us."`;
    core.say( text, scope.gmofgaXxIp_25 );
};

// ACTION
scope.gmofgaXxIp_25 = function(){
    scene.setConv( 'port1', 'Ada_annoyed' );;
    scope.gmofgaXxIp_26();
};

// TEXT
scope.gmofgaXxIp_26 = function(){
    player.set( 'current_in2_node', 'gmofgaXxIp_26' );
    var text = `Adalais: "Fine."`;
    core.say( text, scope.gmofgaXxIp_27 );
};

// ACTION
scope.gmofgaXxIp_27 = function(){
    scene.restoreActorBase( 'Adalais_act' );;
    scope.gmofgaXxIp_28();
};

// ACTION
scope.gmofgaXxIp_28 = function(){
    scene.setConv( 'port1', 'Ada_angry' );;
    scope.gmofgaXxIp_29();
};

// ACTION
scope.gmofgaXxIp_29 = function(){
    scene.setAnimation( 'port2', 'invisible' );;
    scope.gmofgaXxIp_30();
};

// TEXT
scope.gmofgaXxIp_30 = function(){
    player.set( 'current_in2_node', 'gmofgaXxIp_30' );
    var text = `Adalais: And people tell me I have a social problem...  I would say 'I told you so', but I think you just wanted to see me suffer.`;
    core.say( text, scope.gmofgaXxIp_31 );
};

// ACTION
scope.gmofgaXxIp_31 = function(){
    scene.restoreActorBase( 'Adalais_act' );;
    scope.gmofgaXxIp_32();
};

// ACTION
scope.gmofgaXxIp_32 = function(){
    scene.endConversation();;
    scope.gmofgaXxIp_33();
};
// chunk LAST
scope.gmofgaXxIp_33 = function(){
    scope.HognBcDVem();
};

// chunk FIRST
scope.RufYJYnZOC = function(){
    scope.RufYJYnZOC_0();
};
// ACTION
scope.RufYJYnZOC_0 = function(){
    scene.startConversation( 'BlackBar', 'black-bar', [ { name: 'port1', anim: 'Ada_normal' } ] );;
    scope.RufYJYnZOC_1();
};

// TEXT
scope.RufYJYnZOC_1 = function(){
    player.set( 'current_in2_node', 'RufYJYnZOC_1' );
    var text = `Adalais: Nobody is over on this side of the room right now.`;
    core.say( text, scope.RufYJYnZOC_2 );
};

// ACTION
scope.RufYJYnZOC_2 = function(){
    scene.endConversation();;
    scope.RufYJYnZOC_3();
};
// chunk LAST
scope.RufYJYnZOC_3 = function(){
    scope.HognBcDVem();
};
// TEXT
scope.GYwwcJDsTZ = function(){
    player.set( 'current_in2_node', 'GYwwcJDsTZ' );
    var text = `Inventory.`;
    core.say( text, scope.COzbfPwSXS );
};

// ACTION
scope.COzbfPwSXS = function(){
    player.set( 'last_room', 'comic-classroom3-sw.json' );;
    scope.yKfBQyfiNx();
};

// next_file
scope.yKfBQyfiNx = function(){
    var key = `comic-inventory.json`;
    var func = files[ key ];
    if( func ) {
        func();
    } else {
        core.say( `EXECUTION WARNING, no file exists named ${key}. You are probably running a subset of all the files, and not the whole scenario. ` + Object.keys( files ), files.exit );
    }
};
if( !id ){
    scope.PHBZLBlgMu();
}
else {
    scope[ id ]();
}
};


files[ `comic-avcloset.json` ] = function( id ){
player.set( 'current_in2_file', 'comic-avcloset.json' );
// ACTION
scope.lOAbDewxdY = function(){
    player.setIfUnset( 'has_entered_avcloset', true );
player.setIfUnset( 'makeshift_pillow_location', 'ada' );
player.setIfUnset( 'has_seen_otis_note', true );
player.setIfUnset( 'aux_cable_location', 'otis' );

scene.clearActors();
scene.addActor('Background', 0, 0, 'black-screen'); 
scene.addActor('Wires', 14, 270, 'invisible');
scene.addActor('Pillow', 28, 288, 'invisible');
scene.addActor('Otis_act', 38, 264, 'invisible');
scene.addActor('Foreground', 0, 0, 'invisible'); 
scene.addActor('Lights', 0, 0, 'invisible');
scene.addActor('Adalais_act', 90, 84, 'invisible');
scene.addActor('Door', 0, 0, 'invisible');

scene.addActor('Overlay', 0, 0, 'invisible'); 
scene.addActor('BlackBarLeft', 0, 300, 'invisible');
scene.addActor('BlackBarRight', 200, 300, 'invisible'); 
scene.addActor('BlackBar', 0, 350, 'invisible'); 
scene.addActor('port1', 100, 200, 'invisible');
scene.addActor('port2', 100, 200, 'invisible');  

if( player.get( 'aux_cable_location' ) === 'otis' ){
  scene.setAnimation( 'Wires', 'Wires', true );
} else {
  scene.setAnimation( 'Pillow', 'Pillow', true );
}

scene.setActorBase('Adalais_act', 90, 84, 'Ada_actor_avcloset' );
scene.restoreActorBase( 'Adalais_act' );
scene.setAnimation('Otis_act', 'Otis_sleeping' );
scene.setAnimation('Background', 'AVCloset_bg', true);
scene.setAnimation('Foreground', 'AVCloset_fg', true);
scene.setAnimation('Door', 'AVCloset_door', false); ;
    scope.fPnzHfqXZW();
};

// pass_fail
scope.fPnzHfqXZW = function(){
    player.set( 'current_in2_node', 'fPnzHfqXZW' );
    var condition = ( function(){ return player.get( 'has_entered_avcloset' ); } )();
    if( condition ){
        player.set( 'current_in2_node', 'sCzizkNyHh' );
        var text = ``;
        core.say( text, scope.SCPPoDQBZh );
    }
    if( !condition ){
        player.set( 'current_in2_node', 'cnXaoYnanK' );
        var text = ``;
        core.say( text, scope.sbgbteOGxy );
    }
};
// choice
scope.SCPPoDQBZh = function(){
    player.set( 'current_in2_node', 'SCPPoDQBZh' );
    var text = `What should I do in the avcloset?`;
    core.choose( text, 'SCPPoDQBZh', [{
        text: `Go back.`,
        cb: scope.cZxEfhDyVJ,
        condition: () => { return true; }
    },{
        text: `Talk to Otis.`,
        cb: scope.fbifMNSFAd,
        condition: () => { return true; }
    }]);
};

// TEXT
scope.cZxEfhDyVJ = function(){
    player.set( 'current_in2_node', 'cZxEfhDyVJ' );
    var text = `Go back.`;
    core.say( text, scope.sKwVuKsmxt );
};

// chunk FIRST
scope.sKwVuKsmxt = function(){
    scope.sKwVuKsmxt_0();
};
// ACTION
scope.sKwVuKsmxt_0 = function(){
    scene.setAnimation( 'Overlay', 'black-screen', true );;
    scope.sKwVuKsmxt_1();
};

// TEXT
scope.sKwVuKsmxt_1 = function(){
    player.set( 'current_in2_node', 'sKwVuKsmxt_1' );
    var text = `...`;
    core.say( text, scope.sKwVuKsmxt_2 );
};
// chunk LAST
scope.sKwVuKsmxt_2 = function(){
    scope.zrLBPQlMVW();
};
// next_file
scope.zrLBPQlMVW = function(){
    var key = `comic-classroom4-se.json`;
    var func = files[ key ];
    if( func ) {
        func();
    } else {
        core.say( `EXECUTION WARNING, no file exists named ${key}. You are probably running a subset of all the files, and not the whole scenario. ` + Object.keys( files ), files.exit );
    }
};
// TEXT
scope.fbifMNSFAd = function(){
    player.set( 'current_in2_node', 'fbifMNSFAd' );
    var text = `Talk to Otis.`;
    core.say( text, scope.XeDztAzOGA );
};

// chunk FIRST
scope.XeDztAzOGA = function(){
    scope.XeDztAzOGA_0();
};
// ACTION
scope.XeDztAzOGA_0 = function(){
    scene.startConversation( 'BlackBar', 'black-bar', [ { name: 'port1', anim: 'Ada_normal' }, { name: 'port2', anim: 'Otis_normal' } ] );;
    scope.XeDztAzOGA_1();
};

// ACTION
scope.XeDztAzOGA_1 = function(){
    scene.setConv( 'port1', 'Ada_annoyed' );;
    scope.XeDztAzOGA_2();
};

// TEXT
scope.XeDztAzOGA_2 = function(){
    player.set( 'current_in2_node', 'XeDztAzOGA_2' );
    var text = `Adalais: "Otis!"`;
    core.say( text, scope.XeDztAzOGA_3 );
};

// ACTION
scope.XeDztAzOGA_3 = function(){
    scene.setConv( 'port2', 'Otis_talking' );;
    scope.XeDztAzOGA_4();
};

// TEXT
scope.XeDztAzOGA_4 = function(){
    player.set( 'current_in2_node', 'XeDztAzOGA_4' );
    var text = `Otis: "Mmmmmm.  Go away Ada."`;
    core.say( text, scope.XeDztAzOGA_5 );
};

// ACTION
scope.XeDztAzOGA_5 = function(){
    scene.setConv( '' );;
    scope.XeDztAzOGA_6();
};
// chunk LAST
scope.XeDztAzOGA_6 = function(){
    scope.oSJELOzhff();
};
// choice
scope.oSJELOzhff = function(){
    player.set( 'current_in2_node', 'oSJELOzhff' );
    var text = `About what should I ask Otis?`;
    core.choose( text, 'oSJELOzhff', [{
        text: `Go back.`,
        cb: scope.KKGJUAogff,
        condition: () => { return true; }
    },{
        text: `Did you write a note in invisible ink?`,
        cb: scope.GhALUlSnwg,
        condition: () => { return player.get( 'has_seen_otis_note' ); }
    },{
        text: `I have a pillow for you.`,
        cb: scope.OsuhzDdJmI,
        condition: () => { return player.get( 'makeshift_pillow_location' ) === 'ada' }
    }]);
};

// TEXT
scope.KKGJUAogff = function(){
    player.set( 'current_in2_node', 'KKGJUAogff' );
    var text = `Go back.`;
    core.say( text, scope.aXgnKneOJm );
};

// chunk FIRST
scope.aXgnKneOJm = function(){
    scope.aXgnKneOJm_0();
};
// ACTION
scope.aXgnKneOJm_0 = function(){
    scene.setConv( 'port1', 'Ada_normal2' );;
    scope.aXgnKneOJm_1();
};

// TEXT
scope.aXgnKneOJm_1 = function(){
    player.set( 'current_in2_node', 'aXgnKneOJm_1' );
    var text = `Adalais: "I will talk to you later Otis."`;
    core.say( text, scope.aXgnKneOJm_2 );
};

// ACTION
scope.aXgnKneOJm_2 = function(){
    scene.endConversation( '' );;
    scope.aXgnKneOJm_3();
};
// chunk LAST
scope.aXgnKneOJm_3 = function(){
    scope.SCPPoDQBZh();
};
// TEXT
scope.GhALUlSnwg = function(){
    player.set( 'current_in2_node', 'GhALUlSnwg' );
    var text = `Did you write a note in invisible ink?`;
    core.say( text, scope.dEUyDnVFNf );
};

// chunk FIRST
scope.dEUyDnVFNf = function(){
    scope.dEUyDnVFNf_0();
};
// ACTION
scope.dEUyDnVFNf_0 = function(){
    scene.setConv( 'port1', 'Ada_surprised' );;
    scope.dEUyDnVFNf_1();
};

// TEXT
scope.dEUyDnVFNf_1 = function(){
    player.set( 'current_in2_node', 'dEUyDnVFNf_1' );
    var text = `Adalais: "Otis did you really steal all of Mr. Ralgo's keys?"`;
    core.say( text, scope.dEUyDnVFNf_2 );
};

// ACTION
scope.dEUyDnVFNf_2 = function(){
    scene.setConv( 'port2', 'Otis_talking' );;
    scope.dEUyDnVFNf_3();
};

// TEXT
scope.dEUyDnVFNf_3 = function(){
    player.set( 'current_in2_node', 'dEUyDnVFNf_3' );
    var text = `Otis: "How do you think I got in here and locked the door?"`;
    core.say( text, scope.dEUyDnVFNf_4 );
};

// ACTION
scope.dEUyDnVFNf_4 = function(){
    scene.setConv( 'port1', 'Ada_worried' );;
    scope.dEUyDnVFNf_5();
};

// TEXT
scope.dEUyDnVFNf_5 = function(){
    player.set( 'current_in2_node', 'dEUyDnVFNf_5' );
    var text = `Adalais: "You could get into a lot of trouble for that, you know."`;
    core.say( text, scope.dEUyDnVFNf_6 );
};

// ACTION
scope.dEUyDnVFNf_6 = function(){
    scene.setConv( 'port2', 'Otis_talking' );;
    scope.dEUyDnVFNf_7();
};

// TEXT
scope.dEUyDnVFNf_7 = function(){
    player.set( 'current_in2_node', 'dEUyDnVFNf_7' );
    var text = `Otis: "Look who's talking."`;
    core.say( text, scope.dEUyDnVFNf_8 );
};

// ACTION
scope.dEUyDnVFNf_8 = function(){
    scene.setConv( '' );;
    scope.dEUyDnVFNf_9();
};
// chunk LAST
scope.dEUyDnVFNf_9 = function(){
    scope.oSJELOzhff();
};
// TEXT
scope.OsuhzDdJmI = function(){
    player.set( 'current_in2_node', 'OsuhzDdJmI' );
    var text = `I have a pillow for you.`;
    core.say( text, scope.DgYryXWmwh );
};

// chunk FIRST
scope.DgYryXWmwh = function(){
    scope.DgYryXWmwh_0();
};
// ACTION
scope.DgYryXWmwh_0 = function(){
    scene.setConv( 'port1', 'Ada_normal2' );;
    scope.DgYryXWmwh_1();
};

// TEXT
scope.DgYryXWmwh_1 = function(){
    player.set( 'current_in2_node', 'DgYryXWmwh_1' );
    var text = `Adalais: "Otis, I cannot believe I had to do this, but I have a pillow for you."`;
    core.say( text, scope.DgYryXWmwh_2 );
};

// ACTION
scope.DgYryXWmwh_2 = function(){
    scene.setConv( 'port2', 'Otis_talking' );;
    scope.DgYryXWmwh_3();
};

// TEXT
scope.DgYryXWmwh_3 = function(){
    player.set( 'current_in2_node', 'DgYryXWmwh_3' );
    var text = `Otis: "Oh...?  Nice.  Give it here."`;
    core.say( text, scope.DgYryXWmwh_4 );
};

// ACTION
scope.DgYryXWmwh_4 = function(){
    scene.setConv( 'port1', 'Ada_normal2' );;
    scope.DgYryXWmwh_5();
};

// TEXT
scope.DgYryXWmwh_5 = function(){
    player.set( 'current_in2_node', 'DgYryXWmwh_5' );
    var text = `Adalais: "Alright."`;
    core.say( text, scope.DgYryXWmwh_6 );
};

// ACTION
scope.DgYryXWmwh_6 = function(){
    scene.setConv( '' );;
    scope.DgYryXWmwh_7();
};

// ACTION
scope.DgYryXWmwh_7 = function(){
    scene.setAnimation( 'port1', 'invisible' );;
    scope.DgYryXWmwh_8();
};

// ACTION
scope.DgYryXWmwh_8 = function(){
    scene.setAnimation( 'port2', 'invisible' );;
    scope.DgYryXWmwh_9();
};

// ACTION
scope.DgYryXWmwh_9 = function(){
    scene.setAnimation( 'Pillow', 'Pillow' );;
    scope.DgYryXWmwh_10();
};

// TEXT
scope.DgYryXWmwh_10 = function(){
    player.set( 'current_in2_node', 'DgYryXWmwh_10' );
    var text = `...`;
    core.say( text, scope.DgYryXWmwh_11 );
};

// ACTION
scope.DgYryXWmwh_11 = function(){
    scene.setConv( 'port2', 'Otis_talking' );;
    scope.DgYryXWmwh_12();
};

// TEXT
scope.DgYryXWmwh_12 = function(){
    player.set( 'current_in2_node', 'DgYryXWmwh_12' );
    var text = `Otis: "Eh, it's not that much better.  It kinda feels prickly, like you stapled it together or something."`;
    core.say( text, scope.DgYryXWmwh_13 );
};

// ACTION
scope.DgYryXWmwh_13 = function(){
    scene.setConv( 'port1', 'Ada_angry' );;
    scope.DgYryXWmwh_14();
};

// TEXT
scope.DgYryXWmwh_14 = function(){
    player.set( 'current_in2_node', 'DgYryXWmwh_14' );
    var text = `Adalais: "Suck it up Otis, I am not going to make you another one."`;
    core.say( text, scope.DgYryXWmwh_15 );
};

// ACTION
scope.DgYryXWmwh_15 = function(){
    scene.setConv( 'port1', 'Ada_normal2' );;
    scope.DgYryXWmwh_16();
};

// TEXT
scope.DgYryXWmwh_16 = function(){
    player.set( 'current_in2_node', 'DgYryXWmwh_16' );
    var text = `Adalais: "Now let me see that bundle of wires on which your overlarge head has been resting!"`;
    core.say( text, scope.DgYryXWmwh_17 );
};

// ACTION
scope.DgYryXWmwh_17 = function(){
    scene.setConv( 'port2', 'Otis_talking' );;
    scope.DgYryXWmwh_18();
};

// TEXT
scope.DgYryXWmwh_18 = function(){
    player.set( 'current_in2_node', 'DgYryXWmwh_18' );
    var text = `Otis: "Here..."`;
    core.say( text, scope.DgYryXWmwh_19 );
};

// ACTION
scope.DgYryXWmwh_19 = function(){
    scene.setConv( '' );;
    scope.DgYryXWmwh_20();
};

// ACTION
scope.DgYryXWmwh_20 = function(){
    scene.setAnimation( 'port1', 'invisible' );;
    scope.DgYryXWmwh_21();
};

// ACTION
scope.DgYryXWmwh_21 = function(){
    scene.setAnimation( 'port2', 'invisible' );;
    scope.DgYryXWmwh_22();
};

// ACTION
scope.DgYryXWmwh_22 = function(){
    scene.setAnimation( 'Wires', 'invisible' );;
    scope.DgYryXWmwh_23();
};

// ACTION
scope.DgYryXWmwh_23 = function(){
    scene.setAnimation( 'Adalais_act', 'Ada_actor_avcloset2' );;
    scope.DgYryXWmwh_24();
};

// ACTION
scope.DgYryXWmwh_24 = function(){
    scene.setActor( 'Adalais_act', 65, 84 );;
    scope.DgYryXWmwh_25();
};

// TEXT
scope.DgYryXWmwh_25 = function(){
    player.set( 'current_in2_node', 'DgYryXWmwh_25' );
    var text = `...`;
    core.say( text, scope.DgYryXWmwh_26 );
};

// ACTION
scope.DgYryXWmwh_26 = function(){
    scene.setConv( 'port1', 'Ada_smug' );;
    scope.DgYryXWmwh_27();
};

// TEXT
scope.DgYryXWmwh_27 = function(){
    player.set( 'current_in2_node', 'DgYryXWmwh_27' );
    var text = `Adalais: "Ah yes.  What a surprise.  There is an AUX cable right here."`;
    core.say( text, scope.DgYryXWmwh_28 );
};

// ACTION
scope.DgYryXWmwh_28 = function(){
    scene.setConv( 'port1', 'Ada_normal2' );;
    scope.DgYryXWmwh_29();
};

// TEXT
scope.DgYryXWmwh_29 = function(){
    player.set( 'current_in2_node', 'DgYryXWmwh_29' );
    var text = `Adalais: "Was that really so hard Otis?"`;
    core.say( text, scope.DgYryXWmwh_30 );
};

// ACTION
scope.DgYryXWmwh_30 = function(){
    scene.setConv( 'port2', 'Otis_talking' );;
    scope.DgYryXWmwh_31();
};

// TEXT
scope.DgYryXWmwh_31 = function(){
    player.set( 'current_in2_node', 'DgYryXWmwh_31' );
    var text = `Otis: "Nah.  Now go away so I can sleep."`;
    core.say( text, scope.DgYryXWmwh_32 );
};

// ACTION
scope.DgYryXWmwh_32 = function(){
    scene.restoreActorBase( 'Adalais_act' );;
    scope.DgYryXWmwh_33();
};

// ACTION
scope.DgYryXWmwh_33 = function(){
    scene.setConv( 'port2', 'Otis_talking' );;
    scope.DgYryXWmwh_34();
};

// TEXT
scope.DgYryXWmwh_34 = function(){
    player.set( 'current_in2_node', 'DgYryXWmwh_34' );
    var text = `Otis: "Oh and Ada?"`;
    core.say( text, scope.DgYryXWmwh_35 );
};

// ACTION
scope.DgYryXWmwh_35 = function(){
    scene.setConv( 'port1', 'Ada_surprised' );;
    scope.DgYryXWmwh_36();
};

// TEXT
scope.DgYryXWmwh_36 = function(){
    player.set( 'current_in2_node', 'DgYryXWmwh_36' );
    var text = `Adalais: "What?"`;
    core.say( text, scope.DgYryXWmwh_37 );
};

// ACTION
scope.DgYryXWmwh_37 = function(){
    scene.setConv( 'port2', 'Otis_talking' );;
    scope.DgYryXWmwh_38();
};

// TEXT
scope.DgYryXWmwh_38 = function(){
    player.set( 'current_in2_node', 'DgYryXWmwh_38' );
    var text = `Otis: "Thanks for letting me manipulate you into getting me a pillow."`;
    core.say( text, scope.DgYryXWmwh_39 );
};

// ACTION
scope.DgYryXWmwh_39 = function(){
    scene.setConv( 'port1', 'Ada_angry' );;
    scope.DgYryXWmwh_40();
};

// TEXT
scope.DgYryXWmwh_40 = function(){
    player.set( 'current_in2_node', 'DgYryXWmwh_40' );
    var text = `Adalais: (Oh Otis. My retaliation for this injustice will be utterly disparaging.  Mark my words.)`;
    core.say( text, scope.DgYryXWmwh_41 );
};

// ACTION
scope.DgYryXWmwh_41 = function(){
    scene.setConv( 'port1', 'Ada_normal2' );;
    scope.DgYryXWmwh_42();
};

// TEXT
scope.DgYryXWmwh_42 = function(){
    player.set( 'current_in2_node', 'DgYryXWmwh_42' );
    var text = `Adalais: "Sure, Otis.  Whatever you need."  `;
    core.say( text, scope.DgYryXWmwh_43 );
};

// ACTION
scope.DgYryXWmwh_43 = function(){
    scene.setConv( '' );;
    scope.DgYryXWmwh_44();
};
// chunk LAST
scope.DgYryXWmwh_44 = function(){
    scope.QWrMyeEgYO();
};
// ACTION
scope.QWrMyeEgYO = function(){
    player.set( "makeshift_pillow_location", 'otis' );
    scope.NoQMYxswNf();
};

// ACTION
scope.NoQMYxswNf = function(){
    player.set( "aux_cable_location", 'ada' );
    scope.oSJELOzhff();
};


// chunk FIRST
scope.sbgbteOGxy = function(){
    scope.sbgbteOGxy_0();
};
// ACTION
scope.sbgbteOGxy_0 = function(){
    scene.startConversation( 'BlackBar', 'black-bar', [ { name: 'port1', anim: 'Ada_normal' } ] );;
    scope.sbgbteOGxy_1();
};

// ACTION
scope.sbgbteOGxy_1 = function(){
    scene.setAnimation( 'Lights', 'black-screen' );;
    scope.sbgbteOGxy_2();
};

// ACTION
scope.sbgbteOGxy_2 = function(){
    scene.setConv( 'port1', 'invisible' );;
    scope.sbgbteOGxy_3();
};

// TEXT
scope.sbgbteOGxy_3 = function(){
    player.set( 'current_in2_node', 'sbgbteOGxy_3' );
    var text = `.....`;
    core.say( text, scope.sbgbteOGxy_4 );
};

// ACTION
scope.sbgbteOGxy_4 = function(){
    scene.setConv( 'port1', 'Ada_normal' );;
    scope.sbgbteOGxy_5();
};

// TEXT
scope.sbgbteOGxy_5 = function(){
    player.set( 'current_in2_node', 'sbgbteOGxy_5' );
    var text = `Adalais: It is really dark in here.  Let me turn the lights on.`;
    core.say( text, scope.sbgbteOGxy_6 );
};

// ACTION
scope.sbgbteOGxy_6 = function(){
    scene.setAnimation( 'BlackBar', 'invisible' );;
    scope.sbgbteOGxy_7();
};

// ACTION
scope.sbgbteOGxy_7 = function(){
    scene.setAnimation( 'Lights', 'invisible', true );;
    scope.sbgbteOGxy_8();
};

// ACTION
scope.sbgbteOGxy_8 = function(){
    scene.setConv( 'port1', 'invisible' );;
    scope.sbgbteOGxy_9();
};

// TEXT
scope.sbgbteOGxy_9 = function(){
    player.set( 'current_in2_node', 'sbgbteOGxy_9' );
    var text = `...`;
    core.say( text, scope.sbgbteOGxy_10 );
};

// TEXT
scope.sbgbteOGxy_10 = function(){
    player.set( 'current_in2_node', 'sbgbteOGxy_10' );
    var text = `Sleeping Boy: "Ugh... turn the light off..."`;
    core.say( text, scope.sbgbteOGxy_11 );
};

// ACTION
scope.sbgbteOGxy_11 = function(){
    scene.endConversation();;
    scope.sbgbteOGxy_12();
};

// ACTION
scope.sbgbteOGxy_12 = function(){
    scene.startConversation( 'BlackBar', 'black-bar', [ { name: 'port1', anim: 'Ada_normal' }, { name: 'port2', anim: 'Otis_normal' } ] );;
    scope.sbgbteOGxy_13();
};

// ACTION
scope.sbgbteOGxy_13 = function(){
    scene.setConv( 'port1', 'Ada_surprised' );;
    scope.sbgbteOGxy_14();
};

// TEXT
scope.sbgbteOGxy_14 = function(){
    player.set( 'current_in2_node', 'sbgbteOGxy_14' );
    var text = `Adalais: "Ahh!  Who is in here?  Is that you Otis?"`;
    core.say( text, scope.sbgbteOGxy_15 );
};

// ACTION
scope.sbgbteOGxy_15 = function(){
    scene.setConv( 'port2', 'Otis_talking' );;
    scope.sbgbteOGxy_16();
};

// TEXT
scope.sbgbteOGxy_16 = function(){
    player.set( 'current_in2_node', 'sbgbteOGxy_16' );
    var text = `Otis: "Turn the light off Ada, I'm sleeping."`;
    core.say( text, scope.sbgbteOGxy_17 );
};

// ACTION
scope.sbgbteOGxy_17 = function(){
    scene.setConv( 'port1', 'Ada_angry' );;
    scope.sbgbteOGxy_18();
};

// TEXT
scope.sbgbteOGxy_18 = function(){
    player.set( 'current_in2_node', 'sbgbteOGxy_18' );
    var text = `Adalais: "Did you come in here to sleep through class?  How despicable!`;
    core.say( text, scope.sbgbteOGxy_19 );
};

// ACTION
scope.sbgbteOGxy_19 = function(){
    scene.setConv( 'port1', 'Ada_thoughtful' );;
    scope.sbgbteOGxy_20();
};

// TEXT
scope.sbgbteOGxy_20 = function(){
    player.set( 'current_in2_node', 'sbgbteOGxy_20' );
    var text = `Adalais: "But how did you get in here?  The door was locked."`;
    core.say( text, scope.sbgbteOGxy_21 );
};

// ACTION
scope.sbgbteOGxy_21 = function(){
    scene.setConv( 'port2', 'Otis_talking' );;
    scope.sbgbteOGxy_22();
};

// TEXT
scope.sbgbteOGxy_22 = function(){
    player.set( 'current_in2_node', 'sbgbteOGxy_22' );
    var text = `Otis: "I locked it..."`;
    core.say( text, scope.sbgbteOGxy_23 );
};

// ACTION
scope.sbgbteOGxy_23 = function(){
    scene.setConv( 'port1', 'Ada_annoyed' );;
    scope.sbgbteOGxy_24();
};

// TEXT
scope.sbgbteOGxy_24 = function(){
    player.set( 'current_in2_node', 'sbgbteOGxy_24' );
    var text = `Adalais: "Oh I see.  Well I need you to wake up so I can check this room."`;
    core.say( text, scope.sbgbteOGxy_25 );
};

// ACTION
scope.sbgbteOGxy_25 = function(){
    scene.setConv( 'port2', 'Otis_talking' );;
    scope.sbgbteOGxy_26();
};

// TEXT
scope.sbgbteOGxy_26 = function(){
    player.set( 'current_in2_node', 'sbgbteOGxy_26' );
    var text = `Otis: "No, I'm still sleeping, leave me alone."`;
    core.say( text, scope.sbgbteOGxy_27 );
};

// ACTION
scope.sbgbteOGxy_27 = function(){
    scene.setConv( 'port1', 'Ada_talking' );;
    scope.sbgbteOGxy_28();
};

// TEXT
scope.sbgbteOGxy_28 = function(){
    player.set( 'current_in2_node', 'sbgbteOGxy_28' );
    var text = `Adalais: "Are you sleeping on a tangled bed of wires?" `;
    core.say( text, scope.sbgbteOGxy_29 );
};

// ACTION
scope.sbgbteOGxy_29 = function(){
    scene.setConv( 'port2', 'Otis_talking' );;
    scope.sbgbteOGxy_30();
};

// TEXT
scope.sbgbteOGxy_30 = function(){
    player.set( 'current_in2_node', 'sbgbteOGxy_30' );
    var text = `Otis: "It's the only thing in here I can use as a pillow."`;
    core.say( text, scope.sbgbteOGxy_31 );
};

// ACTION
scope.sbgbteOGxy_31 = function(){
    scene.setConv( 'port1', 'Ada_annoyed' );;
    scope.sbgbteOGxy_32();
};

// TEXT
scope.sbgbteOGxy_32 = function(){
    player.set( 'current_in2_node', 'sbgbteOGxy_32' );
    var text = `Adalais: "That does not look at all comfortable..."`;
    core.say( text, scope.sbgbteOGxy_33 );
};

// ACTION
scope.sbgbteOGxy_33 = function(){
    scene.setConv( 'port1', 'Ada_talking' );;
    scope.sbgbteOGxy_34();
};

// TEXT
scope.sbgbteOGxy_34 = function(){
    player.set( 'current_in2_node', 'sbgbteOGxy_34' );
    var text = `Adalais: "But I may need those wires, Otis.  Please wake up."`;
    core.say( text, scope.sbgbteOGxy_35 );
};

// ACTION
scope.sbgbteOGxy_35 = function(){
    scene.setConv( 'port2', 'Otis_talking' );;
    scope.sbgbteOGxy_36();
};

// TEXT
scope.sbgbteOGxy_36 = function(){
    player.set( 'current_in2_node', 'sbgbteOGxy_36' );
    var text = `Otis: "No!  It's my pillow.  You cannot have it!"`;
    core.say( text, scope.sbgbteOGxy_37 );
};

// ACTION
scope.sbgbteOGxy_37 = function(){
    scene.setConv( 'port1', 'Ada_thoughtful' );;
    scope.sbgbteOGxy_38();
};

// TEXT
scope.sbgbteOGxy_38 = function(){
    player.set( 'current_in2_node', 'sbgbteOGxy_38' );
    var text = `Adalais: (How terribly inconvenient.  Perhaps I can exchange a proper pillow for those wires).`;
    core.say( text, scope.sbgbteOGxy_39 );
};

// ACTION
scope.sbgbteOGxy_39 = function(){
    scene.endConversation();;
    scope.sbgbteOGxy_40();
};
// chunk LAST
scope.sbgbteOGxy_40 = function(){
    scope.iaUpMfgQsk();
};
// ACTION
scope.iaUpMfgQsk = function(){
    player.set( "has_entered_avcloset", true );
    scope.fPnzHfqXZW();
};

if( !id ){
    scope.lOAbDewxdY();
}
else {
    scope[ id ]();
}
};


files[ `comic-classroom-start.json` ] = function( id ){
player.set( 'current_in2_file', 'comic-classroom-start.json' );
// ACTION
scope.hwSsQmAmbB = function(){
    scene.clearActors(); 
scene.addActor('Background', 0, 0, 'black-screen'); 
scene.addActor('Ralgo_act', 255, 120, 'invisible');
scene.addActor('Foreground', 0, 0, 'invisible'); 
scene.addActor('BlackBar', 0, 300, 'invisible'); 
scene.addActor('Adalais', 100, 200, 'invisible'); 
scene.addActor('Ralgo', 50, 200, 'invisible');
scene.addActor('Overlay',0,0,'invisible');
scene.playSound( 'bgm2', true );
player.state = {};
;
    scope.gPJWTVTkVd();
};

// TEXT
scope.gPJWTVTkVd = function(){
    player.set( 'current_in2_node', 'gPJWTVTkVd' );
    var text = `*RING* *RING* *RING* *RING*`;
    core.say( text, scope.OyQMknmqql );
};

// ACTION
scope.OyQMknmqql = function(){
    scene.setAnimation('Background', 'Classroom1_bg', true); scene.setAnimation('Foreground', 'Classroom1_fg', true); scene.setAnimation('Ralgo_act', 'Ralgo_actor_lecturing', true );;
    scope.VCWLiJWbdf();
};

// TEXT
scope.VCWLiJWbdf = function(){
    player.set( 'current_in2_node', 'VCWLiJWbdf' );
    var text = `...`;
    core.say( text, scope.KasytYDSJX );
};

// ACTION
scope.KasytYDSJX = function(){
    scene.setAnimation('Ralgo', 'Ralgo_bored', true); scene.setAnimation('BlackBar', 'black-bar', true);;
    scope.EWHpWQcgti();
};

// TEXT
scope.EWHpWQcgti = function(){
    player.set( 'current_in2_node', 'EWHpWQcgti' );
    var text = `Mr. Ralgo: "...And to conclude my lecture, remember that your solutions are always first, and then fourth, in that order."`;
    core.say( text, scope.DoariNxgLP );
};

// ACTION
scope.DoariNxgLP = function(){
    scene.setAnimation('Ralgo', 'Ralgo_normal', false);;
    scope.AxwdKZiBiN();
};

// TEXT
scope.AxwdKZiBiN = function(){
    player.set( 'current_in2_node', 'AxwdKZiBiN' );
    var text = `Mr. Ralgo: "Just one more thing before you may leave:"`;
    core.say( text, scope.hgZaQkGMOH );
};

// ACTION
scope.hgZaQkGMOH = function(){
    scene.setAnimation('Ralgo', 'Ralgo_normal', false);;
    scope.XThIccSzwP();
};

// TEXT
scope.XThIccSzwP = function(){
    player.set( 'current_in2_node', 'XThIccSzwP' );
    var text = `Mr. Ralgo: "Remember to turn in your signed field trip forms at the front office before you leave school today."`;
    core.say( text, scope.uWtEidixoR );
};

// ACTION
scope.uWtEidixoR = function(){
    scene.setAnimation('Ralgo', 'Ralgo_bored', false);;
    scope.ZqgbkPardP();
};

// TEXT
scope.ZqgbkPardP = function(){
    player.set( 'current_in2_node', 'ZqgbkPardP' );
    var text = `Mr. Ralgo: "I'd take them myself, but I'm much too busy to walk all the way over there with such a *heavy* stack of papers."`;
    core.say( text, scope.GyDsSScsJT );
};

// ACTION
scope.GyDsSScsJT = function(){
    scene.setAnimation('Ralgo', 'Ralgo_normal', false);;
    scope.uEsNqmgfQB();
};

// TEXT
scope.uEsNqmgfQB = function(){
    player.set( 'current_in2_node', 'uEsNqmgfQB' );
    var text = `Mr. Ralgo: "Make sure you don't forget though, otherwise you won't be going on the field trip tomorrow."`;
    core.say( text, scope.segBTHZmSz );
};

// ACTION
scope.segBTHZmSz = function(){
    scene.setAnimation('Ralgo', 'Ralgo_bored', false);;
    scope.OOlothfCNl();
};

// TEXT
scope.OOlothfCNl = function(){
    player.set( 'current_in2_node', 'OOlothfCNl' );
    var text = `Mr. Ralgo: "Okay, that's it.  Go away now."`;
    core.say( text, scope.XniaJlNsfr );
};

// ACTION
scope.XniaJlNsfr = function(){
    scene.setAnimation('Ralgo', 'invisible', true); scene.setAnimation('Adalais', 'Ada_normal', true); ;
    scope.shGDoFbNwh();
};

// TEXT
scope.shGDoFbNwh = function(){
    player.set( 'current_in2_node', 'shGDoFbNwh' );
    var text = `Adalais: Ugh, I still have to do that.  But I was planning to catch the early bus home today...`;
    core.say( text, scope.YdICfTdtHW );
};

// ACTION
scope.YdICfTdtHW = function(){
    scene.setAnimation('Adalais', 'Ada_thoughtful', false);;
    scope.zDcMbyfRaO();
};

// TEXT
scope.zDcMbyfRaO = function(){
    player.set( 'current_in2_node', 'zDcMbyfRaO' );
    var text = `Adalais: The form is in my locker, so I will have to go there to acquire it before proceeding to the office.`;
    core.say( text, scope.PzPLPYsycr );
};

// ACTION
scope.PzPLPYsycr = function(){
    scene.setAnimation('Adalais', 'Ada_worried', false);;
    scope.qJiFSbkulJ();
};

// TEXT
scope.qJiFSbkulJ = function(){
    player.set( 'current_in2_node', 'qJiFSbkulJ' );
    var text = `Adalais: I just hope nobody causes a delay, otherwise I may miss the bus...`;
    core.say( text, scope.EwHTmgREaz );
};

// ACTION
scope.EwHTmgREaz = function(){
    scene.setAnimation('Adalais', 'Ada_surprised', false);;
    scope.eQYUODRxSV();
};

// TEXT
scope.eQYUODRxSV = function(){
    player.set( 'current_in2_node', 'eQYUODRxSV' );
    var text = `Adalais: Oh? Where did most of the class go?  Did they leave already?  I need to hurry!`;
    core.say( text, scope.ITRsshEFhw );
};

// ACTION
scope.ITRsshEFhw = function(){
    scene.setAnimation( 'Overlay', 'black-screen', true );;
    scope.ylMhJrkpKL();
};

// TEXT
scope.ylMhJrkpKL = function(){
    player.set( 'current_in2_node', 'ylMhJrkpKL' );
    var text = `...`;
    core.say( text, scope.mlAMyUJXqO );
};

// next_file
scope.mlAMyUJXqO = function(){
    var key = `comic-classroom1.json`;
    var func = files[ key ];
    if( func ) {
        func();
    } else {
        core.say( `EXECUTION WARNING, no file exists named ${key}. You are probably running a subset of all the files, and not the whole scenario. ` + Object.keys( files ), files.exit );
    }
};
if( !id ){
    scope.hwSsQmAmbB();
}
else {
    scope[ id ]();
}
};


files[ `comic-classroom1.json` ] = function( id ){
player.set( 'current_in2_file', 'comic-classroom1.json' );
// ACTION
scope.WpEJJQaEsI = function(){
    player.setIfUnset( 'has_gone_to_door', false ); 
player.setIfUnset( 'has_been_to_classroom2', false );
player.setIfUnset( 'music_is_on', false );
player.setIfUnset( 'girls_location', 'nw' );
player.setIfUnset( 'cell_phone_location', 'jonathan' );
player.setIfUnset( 'mousepad_location', 'desk' );
player.setIfUnset( 'pop_quiz_location', 'desk' );
player.setIfUnset( 'aux_cable_location', 'otis' );
player.setIfUnset( 'stapler_location', 'desk' );
player.setIfUnset( 'scissors_location', 'desk' );
player.setIfUnset( 'av_key_location', 'ralgo' );
player.setIfUnset( 'book_location', 'shelf' );
player.setIfUnset( 'banana_location', 'trash' );
player.setIfUnset( 'has_seen_cell_phone', false );
player.setIfUnset( 'has_examined_av_room_door', false );
player.setIfUnset( 'has_seen_otis_note', false );
player.setIfUnset( 'music_is_on', false );
player.setIfUnset( 'has_permission_to_take_cell_phone', false );
player.setIfUnset( 'has_entered_avcloset', false );
player.setIfUnset( 'banana_location', 'trash' );
player.setIfUnset( 'classroom3_chair_location', 'desk' );
player.setIfUnset( 'classroom4_chair_location', 'desk' );
player.setIfUnset( 'ink_revealer_location', 'shelf' );
player.setIfUnset( 'blank_paper_location', 'shelf' );
player.setIfUnset( 'makeshift_pillow_location', 'nothing' );;
    scope.zCRpmftRDY();
};

// ACTION
scope.zCRpmftRDY = function(){
    scene.clearActors();
scene.addActor('Background', 0, 0, 'black-screen'); 
scene.addActor('Adalais_act', 75, 80, 'invisible'); 
scene.addActor('Girls_act', 100, 230, 'invisible'); 
scene.addActor('Foreground', 0, 0, 'invisible');
scene.addActor('CellPhone', 268, 298, 'invisible'); 
scene.addActor('Banana', 30, 250, 'invisible'); 
scene.addActor('Bwow', -10, 85, 'invisible');  
scene.addActor('Overlay', 0, 0, 'invisible'); 
scene.addActor('BlackBarLeft', 0, 300, 'invisible');
scene.addActor('BlackBarRight', 200, 300, 'invisible'); 
scene.addActor('BlackBar', 0, 350, 'invisible'); 
scene.addActor('Adalais', 100, 200, 'invisible');
scene.addActor('port1', 100, 200, 'invisible');
scene.addActor('port2', 100, 200, 'invisible');  
scene.addActor('Girls', 100, 200, 'invisible'); 
scene.addActor('Door', 200, 200, 'invisible');

scene.setActorBase('Adalais_act', 75, 80, 'Ada_actor_idle1' );
scene.setAnimation('Background', 'Classroom1_bg', true);
scene.setAnimation('Foreground', 'Classroom1_fg', true); 
scene.setAnimation('Girls_act', 'Girls_actor_talking', true );
scene.restoreActorBase( 'Adalais_act' );

if( player.get( 'girls_location' ) !== 'nw' ) { 
  scene.setAnimation( 'Girls_act', 'invisible' ); 
}
if( player.get( 'banana_location' ) === 'nw' ) {
  scene.setAnimation( 'Banana', 'Banana', true ); 
}
if( player.get( 'cell_phone_location' ) === 'desk' ){
  scene.setAnimation( 'CellPhone', 'Phone', true ); 
};
    scope.DcsHKdiqZQ();
};

// pass_fail
scope.DcsHKdiqZQ = function(){
    player.set( 'current_in2_node', 'DcsHKdiqZQ' );
    var condition = ( function(){ return player.get( 'has_gone_to_door' ); } )();
    if( condition ){
        player.set( 'current_in2_node', 'dEVRXVQoIS' );
        var text = ``;
        core.say( text, scope.DnStGUyupw );
    }
    if( !condition ){
        player.set( 'current_in2_node', 'rXIFFRENPz' );
        var text = ``;
        core.say( text, scope.LDgHfsLulJ );
    }
};
// pass_fail
scope.DnStGUyupw = function(){
    player.set( 'current_in2_node', 'DnStGUyupw' );
    var condition = ( function(){ return player.get( 'music_is_on' ) } )();
    if( !condition ){
        player.set( 'current_in2_node', 'ZTTSzdxgSd' );
        var text = ``;
        core.say( text, scope.QsMmdyaJNH );
    }
    if( condition ){
        player.set( 'current_in2_node', 'XXyDPirsYC' );
        var text = ``;
        core.say( text, scope.QsMmdyaJNH );
    }
};
// ACTION
scope.QsMmdyaJNH = function(){
    scene.restoreActorBase( 'Adalais_act' );;
    scope.ScIdIpOKfr();
};

// choice
scope.ScIdIpOKfr = function(){
    player.set( 'current_in2_node', 'ScIdIpOKfr' );
    var text = `Classroom NW - I need to find a way out of the classroom.`;
    core.choose( text, 'ScIdIpOKfr', [{
        text: `Walk to NE corner.`,
        cb: scope.DHKbtUCybl,
        condition: () => { return true; }
    },{
        text: `Walk to SW corner.`,
        cb: scope.AzPUqOaGHu,
        condition: () => { return true; }
    },{
        text: `Examine surroundings.`,
        cb: scope.nYDyCJcthe,
        condition: () => { return true; }
    },{
        text: `Talk.`,
        cb: scope.PbPMqINgNn,
        condition: () => { return true; }
    },{
        text: `Inventory.`,
        cb: scope.aeaKNEBMoZ,
        condition: () => { return true; }
    },{
        text: `Go to the door.`,
        cb: scope.HqBYgWNTal,
        condition: () => { return true; }
    }]);
};

// TEXT
scope.DHKbtUCybl = function(){
    player.set( 'current_in2_node', 'DHKbtUCybl' );
    var text = `Walk to NE corner.`;
    core.say( text, scope.hcfwgOhSlO );
};

// chunk FIRST
scope.hcfwgOhSlO = function(){
    scope.hcfwgOhSlO_0();
};
// ACTION
scope.hcfwgOhSlO_0 = function(){
    scene.setAnimation( 'Overlay', 'black-screen', true );;
    scope.hcfwgOhSlO_1();
};

// TEXT
scope.hcfwgOhSlO_1 = function(){
    player.set( 'current_in2_node', 'hcfwgOhSlO_1' );
    var text = `...`;
    core.say( text, scope.hcfwgOhSlO_2 );
};
// chunk LAST
scope.hcfwgOhSlO_2 = function(){
    scope.tWIIDKcaBr();
};
// next_file
scope.tWIIDKcaBr = function(){
    var key = `comic-classroom2.json`;
    var func = files[ key ];
    if( func ) {
        func();
    } else {
        core.say( `EXECUTION WARNING, no file exists named ${key}. You are probably running a subset of all the files, and not the whole scenario. ` + Object.keys( files ), files.exit );
    }
};
// TEXT
scope.AzPUqOaGHu = function(){
    player.set( 'current_in2_node', 'AzPUqOaGHu' );
    var text = `Walk to SW corner.`;
    core.say( text, scope.HhMEzsHiMn );
};

// chunk FIRST
scope.HhMEzsHiMn = function(){
    scope.HhMEzsHiMn_0();
};
// ACTION
scope.HhMEzsHiMn_0 = function(){
    scene.setAnimation( 'Overlay', 'black-screen', true );;
    scope.HhMEzsHiMn_1();
};

// TEXT
scope.HhMEzsHiMn_1 = function(){
    player.set( 'current_in2_node', 'HhMEzsHiMn_1' );
    var text = `...`;
    core.say( text, scope.HhMEzsHiMn_2 );
};
// chunk LAST
scope.HhMEzsHiMn_2 = function(){
    scope.lqghxGWkSw();
};
// next_file
scope.lqghxGWkSw = function(){
    var key = `comic-classroom3-sw.json`;
    var func = files[ key ];
    if( func ) {
        func();
    } else {
        core.say( `EXECUTION WARNING, no file exists named ${key}. You are probably running a subset of all the files, and not the whole scenario. ` + Object.keys( files ), files.exit );
    }
};
// TEXT
scope.nYDyCJcthe = function(){
    player.set( 'current_in2_node', 'nYDyCJcthe' );
    var text = `Examine surroundings.`;
    core.say( text, scope.LxnFPGeibi );
};

// choice
scope.LxnFPGeibi = function(){
    player.set( 'current_in2_node', 'LxnFPGeibi' );
    var text = `I see these things in this room:`;
    core.choose( text, 'LxnFPGeibi', [{
        text: `Go back.`,
        cb: scope.ZdEZObEqwg,
        condition: () => { return true; }
    },{
        text: `Window.`,
        cb: scope.heVdpYkYSz,
        condition: () => { return true; }
    },{
        text: `Mr. Ralgo's Speakers.`,
        cb: scope.kpGxAJGkZK,
        condition: () => { return true; }
    },{
        text: `Whiteboard.`,
        cb: scope.UFPuKlWWJq,
        condition: () => { return true; }
    },{
        text: `Podium.`,
        cb: scope.cMKpowoFDf,
        condition: () => { return true; }
    },{
        text: `Rancid Banana.`,
        cb: scope.fERTffirGx,
        condition: () => { return player.get( 'banana_location' ) === 'nw' }
    }]);
};

// TEXT
scope.ZdEZObEqwg = function(){
    player.set( 'current_in2_node', 'ZdEZObEqwg' );
    var text = `Go back.`;
    core.say( text, scope.QsMmdyaJNH );
};

// TEXT
scope.heVdpYkYSz = function(){
    player.set( 'current_in2_node', 'heVdpYkYSz' );
    var text = `Window.`;
    core.say( text, scope.IytlXfnPZL );
};

// pass_fail
scope.IytlXfnPZL = function(){
    player.set( 'current_in2_node', 'IytlXfnPZL' );
    var condition = ( function(){ return player.get( 'john_will_open_window' ); } )();
    if( !condition ){
        player.set( 'current_in2_node', 'KFnSexaLbk' );
        var text = ``;
        core.say( text, scope.WdgsoUSfpf );
    }
    if( condition ){
        player.set( 'current_in2_node', 'zAruJoYAMD' );
        var text = ``;
        core.say( text, scope.TqSuOLOXxT );
    }
};
// chunk FIRST
scope.WdgsoUSfpf = function(){
    scope.WdgsoUSfpf_0();
};
// ACTION
scope.WdgsoUSfpf_0 = function(){
    scene.startConversation( 'BlackBar', 'black-bar', [ { name: 'port1', anim: 'Ada_normal' } ] );;
    scope.WdgsoUSfpf_1();
};

// ACTION
scope.WdgsoUSfpf_1 = function(){
    scene.setActor( 'Adalais_act', 132, 53 );;
    scope.WdgsoUSfpf_2();
};

// ACTION
scope.WdgsoUSfpf_2 = function(){
    scene.setAnimation( 'Adalais_act', 'Ada_actor_classroom1_up' );;
    scope.WdgsoUSfpf_3();
};

// ACTION
scope.WdgsoUSfpf_3 = function(){
    scene.setConv( 'port1', 'Ada_thoughtful' );;
    scope.WdgsoUSfpf_4();
};

// TEXT
scope.WdgsoUSfpf_4 = function(){
    player.set( 'current_in2_node', 'WdgsoUSfpf_4' );
    var text = `Adalias: "Maybe I can get out using the window."`;
    core.say( text, scope.WdgsoUSfpf_5 );
};

// ACTION
scope.WdgsoUSfpf_5 = function(){
    scene.setAnimation('Adalais_act', 'Ada_actor_struggle2' );;
    scope.WdgsoUSfpf_6();
};

// ACTION
scope.WdgsoUSfpf_6 = function(){
    scene.setConv( 'port1', 'Ada_struggle' );;
    scope.WdgsoUSfpf_7();
};

// TEXT
scope.WdgsoUSfpf_7 = function(){
    player.set( 'current_in2_node', 'WdgsoUSfpf_7' );
    var text = `...`;
    core.say( text, scope.WdgsoUSfpf_8 );
};

// TEXT
scope.WdgsoUSfpf_8 = function(){
    player.set( 'current_in2_node', 'WdgsoUSfpf_8' );
    var text = `Adalais: It is too heavy for me to lift.`;
    core.say( text, scope.WdgsoUSfpf_9 );
};

// TEXT
scope.WdgsoUSfpf_9 = function(){
    player.set( 'current_in2_node', 'WdgsoUSfpf_9' );
    var text = `Adalais: If I want to open it, I will need some help.`;
    core.say( text, scope.WdgsoUSfpf_10 );
};

// ACTION
scope.WdgsoUSfpf_10 = function(){
    scene.setActor( 'Adalais_act', 75, 80 ); ;
    scope.WdgsoUSfpf_11();
};

// ACTION
scope.WdgsoUSfpf_11 = function(){
    scene.setAnimation( 'Adalais_act', 'Ada_actor_idle1' );;
    scope.WdgsoUSfpf_12();
};

// ACTION
scope.WdgsoUSfpf_12 = function(){
    scene.endConversation();;
    scope.WdgsoUSfpf_13();
};
// chunk LAST
scope.WdgsoUSfpf_13 = function(){
    scope.LxnFPGeibi();
};

// chunk FIRST
scope.TqSuOLOXxT = function(){
    scope.TqSuOLOXxT_0();
};
// ACTION
scope.TqSuOLOXxT_0 = function(){
    scene.setAnimation( 'Overlay', 'black-screen', true );;
    scope.TqSuOLOXxT_1();
};

// TEXT
scope.TqSuOLOXxT_1 = function(){
    player.set( 'current_in2_node', 'TqSuOLOXxT_1' );
    var text = `...`;
    core.say( text, scope.TqSuOLOXxT_2 );
};
// chunk LAST
scope.TqSuOLOXxT_2 = function(){
    scope.caLCdkNxEE();
};
// next_file
scope.caLCdkNxEE = function(){
    var key = `comic-end.json`;
    var func = files[ key ];
    if( func ) {
        func();
    } else {
        core.say( `EXECUTION WARNING, no file exists named ${key}. You are probably running a subset of all the files, and not the whole scenario. ` + Object.keys( files ), files.exit );
    }
};
// TEXT
scope.kpGxAJGkZK = function(){
    player.set( 'current_in2_node', 'kpGxAJGkZK' );
    var text = `Mr. Ralgo's Speakers.`;
    core.say( text, scope.UVDackgfuq );
};

// pass_fail
scope.UVDackgfuq = function(){
    player.set( 'current_in2_node', 'UVDackgfuq' );
    var condition = ( function(){ return player.get( 'girls_location' ) === 'nw' } )();
    if( condition ){
        player.set( 'current_in2_node', 'IpYYeQupZw' );
        var text = ``;
        core.say( text, scope.NPlBPDTkxA );
    }
    if( !condition ){
        player.set( 'current_in2_node', 'DCiDcrakfV' );
        var text = ``;
        core.say( text, scope.fSapSOQADu );
    }
};
// chunk FIRST
scope.NPlBPDTkxA = function(){
    scope.NPlBPDTkxA_0();
};
// ACTION
scope.NPlBPDTkxA_0 = function(){
    scene.startConversation( 'BlackBar', 'black-bar', [ { name: 'port1', anim: 'invisible' }, { name: 'port2', anim: 'invisible' }  ] );;
    scope.NPlBPDTkxA_1();
};

// ACTION
scope.NPlBPDTkxA_1 = function(){
    scene.setConv( 'port2', 'Ada_normal' );;
    scope.NPlBPDTkxA_2();
};

// TEXT
scope.NPlBPDTkxA_2 = function(){
    player.set( 'current_in2_node', 'NPlBPDTkxA_2' );
    var text = `Adalais: I would go look at Mr, Ralgo's speakers, except Eva and Mildrid are having a conversation over there.`;
    core.say( text, scope.NPlBPDTkxA_3 );
};

// ACTION
scope.NPlBPDTkxA_3 = function(){
    scene.setConv( 'port2', 'Ada_annoyed' );;
    scope.NPlBPDTkxA_4();
};

// TEXT
scope.NPlBPDTkxA_4 = function(){
    player.set( 'current_in2_node', 'NPlBPDTkxA_4' );
    var text = `Adalais: I do not like them very much, and I doubt that they would move at my behest, even if I asked *nicely*.`;
    core.say( text, scope.NPlBPDTkxA_5 );
};

// ACTION
scope.NPlBPDTkxA_5 = function(){
    scene.endConversation();;
    scope.NPlBPDTkxA_6();
};
// chunk LAST
scope.NPlBPDTkxA_6 = function(){
    scope.LxnFPGeibi();
};

// chunk FIRST
scope.fSapSOQADu = function(){
    scope.fSapSOQADu_0();
};
// ACTION
scope.fSapSOQADu_0 = function(){
    scene.startConversation( 'BlackBarLeft', 'black-bar-left', [ { name: 'port1', anim: 'Ada_normal' } ] );;
    scope.fSapSOQADu_1();
};

// ACTION
scope.fSapSOQADu_1 = function(){
    scene.setActor( 'Adalais_act', 142, 259 );;
    scope.fSapSOQADu_2();
};

// ACTION
scope.fSapSOQADu_2 = function(){
    scene.setAnimation( 'Adalais_act', 'Ada_actor_classroom1_right' );;
    scope.fSapSOQADu_3();
};

// ACTION
scope.fSapSOQADu_3 = function(){
    scene.setConv( 'port1', 'Ada_normal' );;
    scope.fSapSOQADu_4();
};

// TEXT
scope.fSapSOQADu_4 = function(){
    player.set( 'current_in2_node', 'fSapSOQADu_4' );
    var text = `Adalais: These are Mr. Ralgo's 2.1 Stereo speakers${player.get( 'cell_phone_location' ) !== 'desk' ? '.  They are powered on, but will require an AUX cable to play sound' : ''}.`;
    core.say( text, scope.fSapSOQADu_5 );
};
// chunk LAST
scope.fSapSOQADu_5 = function(){
    scope.QfrdnEboMC();
};
// pass_fail
scope.QfrdnEboMC = function(){
    player.set( 'current_in2_node', 'QfrdnEboMC' );
    var condition = ( function(){ return player.get( 'cell_phone_location' ) == 'desk' } )();
    if( !condition ){
        player.set( 'current_in2_node', 'OXcnDxXCCU' );
        var text = ``;
        core.say( text, scope.yBSBkoPxuA );
    }
    if( condition ){
        player.set( 'current_in2_node', 'SOnAGLhioO' );
        var text = ``;
        core.say( text, scope.ERsFocRxVz );
    }
};
// chunk FIRST
scope.yBSBkoPxuA = function(){
    scope.yBSBkoPxuA_0();
};
// ACTION
scope.yBSBkoPxuA_0 = function(){
    scene.setConv( 'port1', 'Ada_thoughtful' );;
    scope.yBSBkoPxuA_1();
};

// TEXT
scope.yBSBkoPxuA_1 = function(){
    player.set( 'current_in2_node', 'yBSBkoPxuA_1' );
    var text = `Adalais: I wonder what he was planning to do with these...`;
    core.say( text, scope.yBSBkoPxuA_2 );
};

// ACTION
scope.yBSBkoPxuA_2 = function(){
    scene.endConversation();;
    scope.yBSBkoPxuA_3();
};

// ACTION
scope.yBSBkoPxuA_3 = function(){
    scene.restoreActorBase( 'Adalais_act' );;
    scope.yBSBkoPxuA_4();
};
// chunk LAST
scope.yBSBkoPxuA_4 = function(){
    scope.LxnFPGeibi();
};

// chunk FIRST
scope.ERsFocRxVz = function(){
    scope.ERsFocRxVz_0();
};
// ACTION
scope.ERsFocRxVz_0 = function(){
    scene.startConversation( 'BlackBarLeft', 'black-bar-left', [ { name: 'port1', anim: 'Ada_normal2' } ] );;
    scope.ERsFocRxVz_1();
};

// ACTION
scope.ERsFocRxVz_1 = function(){
    scene.setActor( 'Adalais_act', 142, 259 );;
    scope.ERsFocRxVz_2();
};

// ACTION
scope.ERsFocRxVz_2 = function(){
    scene.setAnimation( 'Adalais_act', 'Ada_actor_classroom1_right' );;
    scope.ERsFocRxVz_3();
};

// ACTION
scope.ERsFocRxVz_3 = function(){
    scene.setConv( 'port1', 'Ada_thoughtful' );
    scope.ERsFocRxVz_4();
};

// TEXT
scope.ERsFocRxVz_4 = function(){
    player.set( 'current_in2_node', 'ERsFocRxVz_4' );
    var text = `Adalais: I suppose, if I so desired, I could use Jonathan's cell phone to play music on them.`;
    core.say( text, scope.ERsFocRxVz_5 );
};

// ACTION
scope.ERsFocRxVz_5 = function(){
    ;
    scope.ERsFocRxVz_6();
};
// chunk LAST
scope.ERsFocRxVz_6 = function(){
    scope.pQQxmVFPdx();
};
// choice
scope.pQQxmVFPdx = function(){
    player.set( 'current_in2_node', 'pQQxmVFPdx' );
    var text = `Should I turn the music on?`;
    core.choose( text, 'pQQxmVFPdx', [{
        text: `Yes.`,
        cb: scope.cVizMofQai,
        condition: () => { return true; }
    },{
        text: `No.`,
        cb: scope.rKnfdYnUsi,
        condition: () => { return true; }
    }]);
};

// TEXT
scope.cVizMofQai = function(){
    player.set( 'current_in2_node', 'cVizMofQai' );
    var text = `Yes.`;
    core.say( text, scope.KsWOAOsZKb );
};

// chunk FIRST
scope.KsWOAOsZKb = function(){
    scope.KsWOAOsZKb_0();
};
// ACTION
scope.KsWOAOsZKb_0 = function(){
    scene.setConv( 'port1', 'Ada_normal' );;
    scope.KsWOAOsZKb_1();
};

// ACTION
scope.KsWOAOsZKb_1 = function(){
    scene.stopSound( 'bgm3', true );;
    scope.KsWOAOsZKb_2();
};

// TEXT
scope.KsWOAOsZKb_2 = function(){
    player.set( 'current_in2_node', 'KsWOAOsZKb_2' );
    var text = `Adalais: I have never heard of any of the songs on Jonathan's phone.`;
    core.say( text, scope.KsWOAOsZKb_3 );
};

// ACTION
scope.KsWOAOsZKb_3 = function(){
    scene.setConv( 'port1' );;
    scope.KsWOAOsZKb_4();
};

// TEXT
scope.KsWOAOsZKb_4 = function(){
    player.set( 'current_in2_node', 'KsWOAOsZKb_4' );
    var text = `Adalais: I guess this one is fine; 'Escape From Midwich Valley by Carpenter Brut'.  That sounds like an interesting one.`;
    core.say( text, scope.KsWOAOsZKb_5 );
};

// TEXT
scope.KsWOAOsZKb_5 = function(){
    player.set( 'current_in2_node', 'KsWOAOsZKb_5' );
    var text = `Adalais: Now all I have to do is turn the volume up and press play---`;
    core.say( text, scope.KsWOAOsZKb_6 );
};

// ACTION
scope.KsWOAOsZKb_6 = function(){
    scene.playSound( 'bwow' );;
    scope.KsWOAOsZKb_7();
};

// ACTION
scope.KsWOAOsZKb_7 = function(){
    scene.setAnimation( 'Bwow', 'Bwow' );;
    scope.KsWOAOsZKb_8();
};

// ACTION
scope.KsWOAOsZKb_8 = function(){
    scene.setAnimation( 'Overlay', 'invisible' );;
    scope.KsWOAOsZKb_9();
};

// ACTION
scope.KsWOAOsZKb_9 = function(){
    scene.setConv( 'port1', 'Ada_struggle' );;
    scope.KsWOAOsZKb_10();
};

// TEXT
scope.KsWOAOsZKb_10 = function(){
    player.set( 'current_in2_node', 'KsWOAOsZKb_10' );
    var text = `*BWOW* *BWOW* *BWOW* *BWOW* *BWOW* *BWOW*`;
    core.say( text, scope.KsWOAOsZKb_11 );
};

// ACTION
scope.KsWOAOsZKb_11 = function(){
    scene.setConv( 'port1', 'Ralgo_bored' );;
    scope.KsWOAOsZKb_12();
};

// TEXT
scope.KsWOAOsZKb_12 = function(){
    player.set( 'current_in2_node', 'KsWOAOsZKb_12' );
    var text = `Mr. Ralgo: "What is that God-awful racket!?"`;
    core.say( text, scope.KsWOAOsZKb_13 );
};

// ACTION
scope.KsWOAOsZKb_13 = function(){
    scene.setConv( 'port1', 'Ada_surprised' );;
    scope.KsWOAOsZKb_14();
};

// TEXT
scope.KsWOAOsZKb_14 = function(){
    player.set( 'current_in2_node', 'KsWOAOsZKb_14' );
    var text = `Adalais: I need to get away, quickly!`;
    core.say( text, scope.KsWOAOsZKb_15 );
};

// ACTION
scope.KsWOAOsZKb_15 = function(){
    scene.endConversation();;
    scope.KsWOAOsZKb_16();
};
// chunk LAST
scope.KsWOAOsZKb_16 = function(){
    scope.BibVSXYbYw();
};
// ACTION
scope.BibVSXYbYw = function(){
    player.set( "music_is_on", true );
    scope.hcfwgOhSlO();
};

// TEXT
scope.rKnfdYnUsi = function(){
    player.set( 'current_in2_node', 'rKnfdYnUsi' );
    var text = `No.`;
    core.say( text, scope.PiOIzlxuPf );
};

// chunk FIRST
scope.PiOIzlxuPf = function(){
    scope.PiOIzlxuPf_0();
};
// ACTION
scope.PiOIzlxuPf_0 = function(){
    scene.setConv( 'port1', 'Ada_normal' );;
    scope.PiOIzlxuPf_1();
};

// TEXT
scope.PiOIzlxuPf_1 = function(){
    player.set( 'current_in2_node', 'PiOIzlxuPf_1' );
    var text = `Adalais: I will just leave it alone for now.`;
    core.say( text, scope.PiOIzlxuPf_2 );
};

// ACTION
scope.PiOIzlxuPf_2 = function(){
    scene.endConversation();;
    scope.PiOIzlxuPf_3();
};

// ACTION
scope.PiOIzlxuPf_3 = function(){
    scene.restoreActorBase();;
    scope.PiOIzlxuPf_4();
};
// chunk LAST
scope.PiOIzlxuPf_4 = function(){
    scope.LxnFPGeibi();
};
// TEXT
scope.UFPuKlWWJq = function(){
    player.set( 'current_in2_node', 'UFPuKlWWJq' );
    var text = `Whiteboard.`;
    core.say( text, scope.DhgfsFqKcF );
};

// chunk FIRST
scope.DhgfsFqKcF = function(){
    scope.DhgfsFqKcF_0();
};
// ACTION
scope.DhgfsFqKcF_0 = function(){
    scene.startConversation( 'BlackBar', 'black-bar', [ { name: 'port1', anim: 'Ada_normal' } ] );;
    scope.DhgfsFqKcF_1();
};

// ACTION
scope.DhgfsFqKcF_1 = function(){
    scene.setActor( 'Adalais_act', 263, 164 );;
    scope.DhgfsFqKcF_2();
};

// ACTION
scope.DhgfsFqKcF_2 = function(){
    scene.setAnimation( 'Adalais_act', 'Ada_actor_classroom1_right' );;
    scope.DhgfsFqKcF_3();
};

// TEXT
scope.DhgfsFqKcF_3 = function(){
    player.set( 'current_in2_node', 'DhgfsFqKcF_3' );
    var text = `Adalais: Mr. Ralgo usually erases the whiteboard at the beginning of class, but he never uses it, so this side is squeaky clean.`;
    core.say( text, scope.DhgfsFqKcF_4 );
};

// ACTION
scope.DhgfsFqKcF_4 = function(){
    scene.endConversation();;
    scope.DhgfsFqKcF_5();
};

// ACTION
scope.DhgfsFqKcF_5 = function(){
    scene.restoreActorBase( 'Adalais_act' );;
    scope.DhgfsFqKcF_6();
};
// chunk LAST
scope.DhgfsFqKcF_6 = function(){
    scope.LxnFPGeibi();
};
// TEXT
scope.cMKpowoFDf = function(){
    player.set( 'current_in2_node', 'cMKpowoFDf' );
    var text = `Podium.`;
    core.say( text, scope.BdqXlKIkQw );
};

// chunk FIRST
scope.BdqXlKIkQw = function(){
    scope.BdqXlKIkQw_0();
};
// ACTION
scope.BdqXlKIkQw_0 = function(){
    scene.startConversation( 'BlackBar', 'black-bar', [ { name: 'port1', anim: 'Ada_normal' } ] );;
    scope.BdqXlKIkQw_1();
};

// ACTION
scope.BdqXlKIkQw_1 = function(){
    scene.setActor( 'Adalais_act', 220, 132 );;
    scope.BdqXlKIkQw_2();
};

// ACTION
scope.BdqXlKIkQw_2 = function(){
    scene.setAnimation( 'Adalais_act', 'Ada_actor_classroom1_left' );;
    scope.BdqXlKIkQw_3();
};

// ACTION
scope.BdqXlKIkQw_3 = function(){
    scene.setConv( 'port1', 'Ada_normal' );;
    scope.BdqXlKIkQw_4();
};

// TEXT
scope.BdqXlKIkQw_4 = function(){
    player.set( 'current_in2_node', 'BdqXlKIkQw_4' );
    var text = `Adalais: Mr. Ralgo was just explaining calculus to us from this podium.  It still has a paper with his lecture notes on it.`;
    core.say( text, scope.BdqXlKIkQw_5 );
};

// ACTION
scope.BdqXlKIkQw_5 = function(){
    scene.setConv( 'port1', 'Ada_annoyed' );;
    scope.BdqXlKIkQw_6();
};

// TEXT
scope.BdqXlKIkQw_6 = function(){
    player.set( 'current_in2_node', 'BdqXlKIkQw_6' );
    var text = `Adalais: The paper simply says 'calculus' at the top, and there are a bunch of incoherent scribbles.  Also at the bottom it says 'PS remember to give pop quiz tomorrow, I've got to keep them on their toes.'`;
    core.say( text, scope.BdqXlKIkQw_7 );
};

// ACTION
scope.BdqXlKIkQw_7 = function(){
    scene.endConversation();;
    scope.BdqXlKIkQw_8();
};

// ACTION
scope.BdqXlKIkQw_8 = function(){
    scene.restoreActorBase( 'Adalais_act' );;
    scope.BdqXlKIkQw_9();
};
// chunk LAST
scope.BdqXlKIkQw_9 = function(){
    scope.LxnFPGeibi();
};
// TEXT
scope.fERTffirGx = function(){
    player.set( 'current_in2_node', 'fERTffirGx' );
    var text = `Rancid Banana.`;
    core.say( text, scope.xCnYNStKgR );
};

// chunk FIRST
scope.xCnYNStKgR = function(){
    scope.xCnYNStKgR_0();
};
// ACTION
scope.xCnYNStKgR_0 = function(){
    scene.startConversation( 'BlackBar', 'black-bar', [ { name: 'port1', anim: 'Ada_normal' } ] );;
    scope.xCnYNStKgR_1();
};

// ACTION
scope.xCnYNStKgR_1 = function(){
    scene.setActor( 'Adalais_act', 30, 180 );;
    scope.xCnYNStKgR_2();
};

// TEXT
scope.xCnYNStKgR_2 = function(){
    player.set( 'current_in2_node', 'xCnYNStKgR_2' );
    var text = `Adalais: That rancid banana is still over here.  Should I pick it up again?`;
    core.say( text, scope.xCnYNStKgR_3 );
};

// ACTION
scope.xCnYNStKgR_3 = function(){
    ;
    scope.xCnYNStKgR_4();
};
// chunk LAST
scope.xCnYNStKgR_4 = function(){
    scope.mgRgYHZsBd();
};
// choice
scope.mgRgYHZsBd = function(){
    player.set( 'current_in2_node', 'mgRgYHZsBd' );
    var text = `Should I pick up the banana?`;
    core.choose( text, 'mgRgYHZsBd', [{
        text: `Yes.`,
        cb: scope.LZpuZrffEm,
        condition: () => { return true; }
    },{
        text: `No.`,
        cb: scope.EbNByBlyzl,
        condition: () => { return true; }
    }]);
};

// TEXT
scope.LZpuZrffEm = function(){
    player.set( 'current_in2_node', 'LZpuZrffEm' );
    var text = `Yes.`;
    core.say( text, scope.fdMexEVlEB );
};

// chunk FIRST
scope.fdMexEVlEB = function(){
    scope.fdMexEVlEB_0();
};
// ACTION
scope.fdMexEVlEB_0 = function(){
    scene.setConv( 'Adalais_act', 'Ada_struggle' );;
    scope.fdMexEVlEB_1();
};

// TEXT
scope.fdMexEVlEB_1 = function(){
    player.set( 'current_in2_node', 'fdMexEVlEB_1' );
    var text = `Adalais: Okay, I have the rancid banana again.`;
    core.say( text, scope.fdMexEVlEB_2 );
};

// ACTION
scope.fdMexEVlEB_2 = function(){
    scene.endConversation();;
    scope.fdMexEVlEB_3();
};

// ACTION
scope.fdMexEVlEB_3 = function(){
    scene.restoreActorBase( 'Adalais_act' );;
    scope.fdMexEVlEB_4();
};
// chunk LAST
scope.fdMexEVlEB_4 = function(){
    scope.JWRLqgxpRw();
};
// ACTION
scope.JWRLqgxpRw = function(){
    player.set( "banana_location", 'ada' );
    scope.wKngrDXxqc();
};

// ACTION
scope.wKngrDXxqc = function(){
    player.set( "has_banana", true );
    scope.zCRpmftRDY();
};

// TEXT
scope.EbNByBlyzl = function(){
    player.set( 'current_in2_node', 'EbNByBlyzl' );
    var text = `No.`;
    core.say( text, scope.AWYurpLMgi );
};

// chunk FIRST
scope.AWYurpLMgi = function(){
    scope.AWYurpLMgi_0();
};
// ACTION
scope.AWYurpLMgi_0 = function(){
    scene.setConv( 'Adalais_act', 'Ada_normal' );;
    scope.AWYurpLMgi_1();
};

// TEXT
scope.AWYurpLMgi_1 = function(){
    player.set( 'current_in2_node', 'AWYurpLMgi_1' );
    var text = `Adalais: I think I should stay away from that for now.`;
    core.say( text, scope.AWYurpLMgi_2 );
};

// ACTION
scope.AWYurpLMgi_2 = function(){
    scene.endConversation();;
    scope.AWYurpLMgi_3();
};

// ACTION
scope.AWYurpLMgi_3 = function(){
    scene.restoreActorBase( 'Adalais_act' );;
    scope.AWYurpLMgi_4();
};
// chunk LAST
scope.AWYurpLMgi_4 = function(){
    scope.LxnFPGeibi();
};
// TEXT
scope.PbPMqINgNn = function(){
    player.set( 'current_in2_node', 'PbPMqINgNn' );
    var text = `Talk.`;
    core.say( text, scope.HTkNAKiDhM );
};

// pass_fail
scope.HTkNAKiDhM = function(){
    player.set( 'current_in2_node', 'HTkNAKiDhM' );
    var condition = ( function(){ return player.get( 'girls_location' ) !== 'nw' } )();
    if( !condition ){
        player.set( 'current_in2_node', 'AaGflHqGxO' );
        var text = ``;
        core.say( text, scope.lzIFyflgCc );
    }
    if( condition ){
        player.set( 'current_in2_node', 'kdfXdkzAIX' );
        var text = ``;
        core.say( text, scope.wAzBATmaGJ );
    }
};
// chunk FIRST
scope.lzIFyflgCc = function(){
    scope.lzIFyflgCc_0();
};
// ACTION
scope.lzIFyflgCc_0 = function(){
    scene.startConversation( 'BlackBar', 'black-bar', [ { name: 'port1', anim: 'Ada_normal' } ] );;
    scope.lzIFyflgCc_1();
};

// ACTION
scope.lzIFyflgCc_1 = function(){
    scene.setConv( 'port1' );;
    scope.lzIFyflgCc_2();
};

// TEXT
scope.lzIFyflgCc_2 = function(){
    player.set( 'current_in2_node', 'lzIFyflgCc_2' );
    var text = `Adalais: The only people over here are Eva and Mildrid...`;
    core.say( text, scope.lzIFyflgCc_3 );
};

// ACTION
scope.lzIFyflgCc_3 = function(){
    scene.setConv( 'port1', 'Ada_worried' );;
    scope.lzIFyflgCc_4();
};

// TEXT
scope.lzIFyflgCc_4 = function(){
    player.set( 'current_in2_node', 'lzIFyflgCc_4' );
    var text = `Adalais: Ummm... Am I sure I want to go talk to them?  This seems like not a great idea.  They dislike me almost as much as I dislike them.`;
    core.say( text, scope.lzIFyflgCc_5 );
};

// ACTION
scope.lzIFyflgCc_5 = function(){
    scene.setConv( 'port1', 'Ada_annoyed' );;
    scope.lzIFyflgCc_6();
};

// TEXT
scope.lzIFyflgCc_6 = function(){
    player.set( 'current_in2_node', 'lzIFyflgCc_6' );
    var text = `Adalais: Fine... let us just get this over with.`;
    core.say( text, scope.lzIFyflgCc_7 );
};

// ACTION
scope.lzIFyflgCc_7 = function(){
    scene.setActor( 'Adalais_act', 120, 190 );;
    scope.lzIFyflgCc_8();
};

// ACTION
scope.lzIFyflgCc_8 = function(){
    scene.endConversation();;
    scope.lzIFyflgCc_9();
};

// ACTION
scope.lzIFyflgCc_9 = function(){
    scene.startConversation( 'BlackBar', 'black-bar', [ { name: 'port1', anim: 'Ada_normal' }, { name: 'port2', anim: 'Girl1_normal' } ] );;
    scope.lzIFyflgCc_10();
};

// ACTION
scope.lzIFyflgCc_10 = function(){
    scene.setConv( 'port2' );;
    scope.lzIFyflgCc_11();
};

// TEXT
scope.lzIFyflgCc_11 = function(){
    player.set( 'current_in2_node', 'lzIFyflgCc_11' );
    var text = `Eva: "And that's when I just told her to get lost.  She's not even worth my time you know..."`;
    core.say( text, scope.lzIFyflgCc_12 );
};

// ACTION
scope.lzIFyflgCc_12 = function(){
    scene.setConv( 'port1', 'Ada_talking' );;
    scope.lzIFyflgCc_13();
};

// TEXT
scope.lzIFyflgCc_13 = function(){
    player.set( 'current_in2_node', 'lzIFyflgCc_13' );
    var text = `Adalais: "Excuse me... can I talk to you girls for a second."`;
    core.say( text, scope.lzIFyflgCc_14 );
};

// ACTION
scope.lzIFyflgCc_14 = function(){
    scene.setConv( 'port2', 'Mildred' );;
    scope.lzIFyflgCc_15();
};

// TEXT
scope.lzIFyflgCc_15 = function(){
    player.set( 'current_in2_node', 'lzIFyflgCc_15' );
    var text = `Mildrid: "Well well well, look who it is." `;
    core.say( text, scope.lzIFyflgCc_16 );
};

// ACTION
scope.lzIFyflgCc_16 = function(){
    scene.setConv( 'port2' );;
    scope.lzIFyflgCc_17();
};

// TEXT
scope.lzIFyflgCc_17 = function(){
    player.set( 'current_in2_node', 'lzIFyflgCc_17' );
    var text = `Eva: "What do you want Ada?  Come to bore us with your knowledge?"`;
    core.say( text, scope.lzIFyflgCc_18 );
};

// ACTION
scope.lzIFyflgCc_18 = function(){
    scene.setConv( 'port2', 'Mildred' );;
    scope.lzIFyflgCc_19();
};

// TEXT
scope.lzIFyflgCc_19 = function(){
    player.set( 'current_in2_node', 'lzIFyflgCc_19' );
    var text = `Mildrid: "Haha yeah.  I bet she already knew all about calculus before this class period."`;
    core.say( text, scope.lzIFyflgCc_20 );
};

// ACTION
scope.lzIFyflgCc_20 = function(){
    scene.setConv( 'port2' );;
    scope.lzIFyflgCc_21();
};

// TEXT
scope.lzIFyflgCc_21 = function(){
    player.set( 'current_in2_node', 'lzIFyflgCc_21' );
    var text = `Eva: "What a complete dork."`;
    core.say( text, scope.lzIFyflgCc_22 );
};

// ACTION
scope.lzIFyflgCc_22 = function(){
    scene.setConv( 'port2', 'Mildred' );;
    scope.lzIFyflgCc_23();
};

// TEXT
scope.lzIFyflgCc_23 = function(){
    player.set( 'current_in2_node', 'lzIFyflgCc_23' );
    var text = `Mildrid: "Just get lost Ada.  You're way too much of a dork for us."`;
    core.say( text, scope.lzIFyflgCc_24 );
};

// ACTION
scope.lzIFyflgCc_24 = function(){
    scene.setConv( 'port1', 'Ada_annoyed' );;
    scope.lzIFyflgCc_25();
};

// TEXT
scope.lzIFyflgCc_25 = function(){
    player.set( 'current_in2_node', 'lzIFyflgCc_25' );
    var text = `Adalais: "Fine."`;
    core.say( text, scope.lzIFyflgCc_26 );
};

// ACTION
scope.lzIFyflgCc_26 = function(){
    scene.restoreActorBase( 'Adalais_act' );;
    scope.lzIFyflgCc_27();
};

// ACTION
scope.lzIFyflgCc_27 = function(){
    scene.setConv( 'port1', 'Ada_angry' );;
    scope.lzIFyflgCc_28();
};

// ACTION
scope.lzIFyflgCc_28 = function(){
    scene.setAnimation( 'port2', 'invisible' );;
    scope.lzIFyflgCc_29();
};

// TEXT
scope.lzIFyflgCc_29 = function(){
    player.set( 'current_in2_node', 'lzIFyflgCc_29' );
    var text = `Adalais: And people tell me I have a social problem...  I would say 'I told you so', but I think you just wanted to see me suffer.`;
    core.say( text, scope.lzIFyflgCc_30 );
};

// ACTION
scope.lzIFyflgCc_30 = function(){
    scene.restoreActorBase( 'Adalais_act' );;
    scope.lzIFyflgCc_31();
};

// ACTION
scope.lzIFyflgCc_31 = function(){
    scene.endConversation();;
    scope.lzIFyflgCc_32();
};
// chunk LAST
scope.lzIFyflgCc_32 = function(){
    scope.ScIdIpOKfr();
};

// chunk FIRST
scope.wAzBATmaGJ = function(){
    scope.wAzBATmaGJ_0();
};
// ACTION
scope.wAzBATmaGJ_0 = function(){
    scene.startConversation( 'BlackBar', 'black-bar', [ { name: 'port1', anim: 'Ada_normal' } ] );;
    scope.wAzBATmaGJ_1();
};

// TEXT
scope.wAzBATmaGJ_1 = function(){
    player.set( 'current_in2_node', 'wAzBATmaGJ_1' );
    var text = `Adalais: Nobody is over on this side of the room right now.`;
    core.say( text, scope.wAzBATmaGJ_2 );
};

// ACTION
scope.wAzBATmaGJ_2 = function(){
    scene.endConversation();;
    scope.wAzBATmaGJ_3();
};
// chunk LAST
scope.wAzBATmaGJ_3 = function(){
    scope.QsMmdyaJNH();
};
// TEXT
scope.aeaKNEBMoZ = function(){
    player.set( 'current_in2_node', 'aeaKNEBMoZ' );
    var text = `Inventory.`;
    core.say( text, scope.qfelfPmaiQ );
};

// ACTION
scope.qfelfPmaiQ = function(){
    player.set( 'last_room', 'comic-classroom1.json' );;
    scope.YLSCZsqEoA();
};

// next_file
scope.YLSCZsqEoA = function(){
    var key = `comic-inventory.json`;
    var func = files[ key ];
    if( func ) {
        func();
    } else {
        core.say( `EXECUTION WARNING, no file exists named ${key}. You are probably running a subset of all the files, and not the whole scenario. ` + Object.keys( files ), files.exit );
    }
};
// TEXT
scope.HqBYgWNTal = function(){
    player.set( 'current_in2_node', 'HqBYgWNTal' );
    var text = `Go to the door.`;
    core.say( text, scope.nmgxCCmTSI );
};

// chunk FIRST
scope.nmgxCCmTSI = function(){
    scope.nmgxCCmTSI_0();
};
// ACTION
scope.nmgxCCmTSI_0 = function(){
    scene.startConversation( 'BlackBar', 'black-bar', [ { name: 'port1', anim: 'Ada_normal' } ] );;
    scope.nmgxCCmTSI_1();
};

// ACTION
scope.nmgxCCmTSI_1 = function(){
    scene.setConv( 'port1', 'Ada_annoyed' );;
    scope.nmgxCCmTSI_2();
};

// TEXT
scope.nmgxCCmTSI_2 = function(){
    player.set( 'current_in2_node', 'nmgxCCmTSI_2' );
    var text = `Adalais: No, I cannot get out of the room via the door.  Some idiots have blocked it off.`;
    core.say( text, scope.nmgxCCmTSI_3 );
};

// TEXT
scope.nmgxCCmTSI_3 = function(){
    player.set( 'current_in2_node', 'nmgxCCmTSI_3' );
    var text = `Adalais: Come on, think of a different answer.`;
    core.say( text, scope.nmgxCCmTSI_4 );
};

// ACTION
scope.nmgxCCmTSI_4 = function(){
    scene.endConversation();;
    scope.nmgxCCmTSI_5();
};
// chunk LAST
scope.nmgxCCmTSI_5 = function(){
    scope.QsMmdyaJNH();
};


// choice
scope.LDgHfsLulJ = function(){
    player.set( 'current_in2_node', 'LDgHfsLulJ' );
    var text = `I should probably head to my locker now.`;
    core.choose( text, 'LDgHfsLulJ', [{
        text: `Go to the door.`,
        cb: scope.zUVzYeFRXG,
        condition: () => { return true; }
    },{
        text: `Inventory.`,
        cb: scope.mVnBJCUifw,
        condition: () => { return true; }
    }]);
};

// TEXT
scope.zUVzYeFRXG = function(){
    player.set( 'current_in2_node', 'zUVzYeFRXG' );
    var text = `Go to the door.`;
    core.say( text, scope.rfgExVAKpf );
};

// chunk FIRST
scope.rfgExVAKpf = function(){
    scope.rfgExVAKpf_0();
};
// ACTION
scope.rfgExVAKpf_0 = function(){
    scene.startConversation( 'BlackBar', 'black-bar', [ { name: 'port1', anim: 'Ada_normal' } ] );;
    scope.rfgExVAKpf_1();
};

// ACTION
scope.rfgExVAKpf_1 = function(){
    scene.setActor( 'Adalais_act', 198, 76 );;
    scope.rfgExVAKpf_2();
};

// TEXT
scope.rfgExVAKpf_2 = function(){
    player.set( 'current_in2_node', 'rfgExVAKpf_2' );
    var text = `Adalais: Okay, time to go to my locker.`;
    core.say( text, scope.rfgExVAKpf_3 );
};

// ACTION
scope.rfgExVAKpf_3 = function(){
    scene.setConv( 'port1', 'Ada_thoughtful' );;
    scope.rfgExVAKpf_4();
};

// ACTION
scope.rfgExVAKpf_4 = function(){
    scene.setAnimation( 'Adalais_act', 'Ada_actor_door' );;
    scope.rfgExVAKpf_5();
};

// TEXT
scope.rfgExVAKpf_5 = function(){
    player.set( 'current_in2_node', 'rfgExVAKpf_5' );
    var text = `Adalais: If I hurry, I can make it to the bus in time.`;
    core.say( text, scope.rfgExVAKpf_6 );
};

// ACTION
scope.rfgExVAKpf_6 = function(){
    scene.setConv( 'port1', 'Ada_surprised' );;
    scope.rfgExVAKpf_7();
};

// TEXT
scope.rfgExVAKpf_7 = function(){
    player.set( 'current_in2_node', 'rfgExVAKpf_7' );
    var text = `...`;
    core.say( text, scope.rfgExVAKpf_8 );
};

// ACTION
scope.rfgExVAKpf_8 = function(){
    scene.setConv( 'port1', 'Ada_angry' );;
    scope.rfgExVAKpf_9();
};

// TEXT
scope.rfgExVAKpf_9 = function(){
    player.set( 'current_in2_node', 'rfgExVAKpf_9' );
    var text = `Adalais: What?  It wont open...`;
    core.say( text, scope.rfgExVAKpf_10 );
};

// ACTION
scope.rfgExVAKpf_10 = function(){
    scene.setActor( 'Adalais_act', 195, 79 );;
    scope.rfgExVAKpf_11();
};

// ACTION
scope.rfgExVAKpf_11 = function(){
    scene.setAnimation( 'Adalais_act', 'Ada_actor_struggle1' );;
    scope.rfgExVAKpf_12();
};

// ACTION
scope.rfgExVAKpf_12 = function(){
    scene.setConv( 'port1', 'Ada_struggle' );;
    scope.rfgExVAKpf_13();
};

// TEXT
scope.rfgExVAKpf_13 = function(){
    player.set( 'current_in2_node', 'rfgExVAKpf_13' );
    var text = `Adalais: "Oof..."`;
    core.say( text, scope.rfgExVAKpf_14 );
};

// ACTION
scope.rfgExVAKpf_14 = function(){
    scene.setConv( 'port1', 'Ada_struggle' );;
    scope.rfgExVAKpf_15();
};

// TEXT
scope.rfgExVAKpf_15 = function(){
    player.set( 'current_in2_node', 'rfgExVAKpf_15' );
    var text = `Adalais: "Why... Is... This... STUCK?!"`;
    core.say( text, scope.rfgExVAKpf_16 );
};

// ACTION
scope.rfgExVAKpf_16 = function(){
    scene.endConversation();;
    scope.rfgExVAKpf_17();
};

// ACTION
scope.rfgExVAKpf_17 = function(){
    scene.startConversation( 'BlackBar', 'black-bar', [ { name: 'port1', anim: 'Ada_normal' }, { name: 'port2', anim: 'Door_normal' } ] );;
    scope.rfgExVAKpf_18();
};

// ACTION
scope.rfgExVAKpf_18 = function(){
    scene.setConv( 'port2' );;
    scope.rfgExVAKpf_19();
};

// TEXT
scope.rfgExVAKpf_19 = function(){
    player.set( 'current_in2_node', 'rfgExVAKpf_19' );
    var text = `Voice Behind Door: "Dude hold on, I think I just heard something."`;
    core.say( text, scope.rfgExVAKpf_20 );
};

// TEXT
scope.rfgExVAKpf_20 = function(){
    player.set( 'current_in2_node', 'rfgExVAKpf_20' );
    var text = `Another Voice Behind Door: "What are you talking about?"`;
    core.say( text, scope.rfgExVAKpf_21 );
};

// TEXT
scope.rfgExVAKpf_21 = function(){
    player.set( 'current_in2_node', 'rfgExVAKpf_21' );
    var text = `Voice 1: "Dude I just heard somebody try to get through the door.  I think there's somebody in that classroom!"`;
    core.say( text, scope.rfgExVAKpf_22 );
};

// TEXT
scope.rfgExVAKpf_22 = function(){
    player.set( 'current_in2_node', 'rfgExVAKpf_22' );
    var text = `Voice 2: "Oh crap.  That's not good."`;
    core.say( text, scope.rfgExVAKpf_23 );
};

// TEXT
scope.rfgExVAKpf_23 = function(){
    player.set( 'current_in2_node', 'rfgExVAKpf_23' );
    var text = `Voice 1: *POUND* *POUND* "Hey, is there somebody inside?"`;
    core.say( text, scope.rfgExVAKpf_24 );
};

// ACTION
scope.rfgExVAKpf_24 = function(){
    scene.setActor( 'Adalais_act', 198, 76 );;
    scope.rfgExVAKpf_25();
};

// ACTION
scope.rfgExVAKpf_25 = function(){
    scene.setAnimation( 'Adalais_act', 'Ada_actor_classroom1_right' );;
    scope.rfgExVAKpf_26();
};

// ACTION
scope.rfgExVAKpf_26 = function(){
    scene.setConv( 'port1', 'Ada_angry' );;
    scope.rfgExVAKpf_27();
};

// TEXT
scope.rfgExVAKpf_27 = function(){
    player.set( 'current_in2_node', 'rfgExVAKpf_27' );
    var text = `Adalais: "Of course somebody is in here!  Why will this door not open?"`;
    core.say( text, scope.rfgExVAKpf_28 );
};

// ACTION
scope.rfgExVAKpf_28 = function(){
    scene.setConv( 'port2' );;
    scope.rfgExVAKpf_29();
};

// TEXT
scope.rfgExVAKpf_29 = function(){
    player.set( 'current_in2_node', 'rfgExVAKpf_29' );
    var text = `Voice1: "Oh geez.  Listen, sorry but you can't open this door right now!"`;
    core.say( text, scope.rfgExVAKpf_30 );
};

// TEXT
scope.rfgExVAKpf_30 = function(){
    player.set( 'current_in2_node', 'rfgExVAKpf_30' );
    var text = `Voice1: "The school asked us to do some rearranging out here in the hallway, and there's a vending machine right outside your door."`;
    core.say( text, scope.rfgExVAKpf_31 );
};

// TEXT
scope.rfgExVAKpf_31 = function(){
    player.set( 'current_in2_node', 'rfgExVAKpf_31' );
    var text = `Voice2: "Sorry!  We didn't think anybody was in that classroom!"`;
    core.say( text, scope.rfgExVAKpf_32 );
};

// ACTION
scope.rfgExVAKpf_32 = function(){
    scene.setConv( 'port1', 'Ada_angry' );;
    scope.rfgExVAKpf_33();
};

// TEXT
scope.rfgExVAKpf_33 = function(){
    player.set( 'current_in2_node', 'rfgExVAKpf_33' );
    var text = `...`;
    core.say( text, scope.rfgExVAKpf_34 );
};

// ACTION
scope.rfgExVAKpf_34 = function(){
    scene.endConversation();;
    scope.rfgExVAKpf_35();
};

// ACTION
scope.rfgExVAKpf_35 = function(){
    scene.startConversation( 'BlackBar', 'black-bar', [ { name: 'port1', anim: 'Ada_angry' } ] );;
    scope.rfgExVAKpf_36();
};

// ACTION
scope.rfgExVAKpf_36 = function(){
    scene.setConv( 'port1' );;
    scope.rfgExVAKpf_37();
};

// TEXT
scope.rfgExVAKpf_37 = function(){
    player.set( 'current_in2_node', 'rfgExVAKpf_37' );
    var text = `Adalais: They did not think anybody was in here?!  What are they, idiots?`;
    core.say( text, scope.rfgExVAKpf_38 );
};

// TEXT
scope.rfgExVAKpf_38 = function(){
    player.set( 'current_in2_node', 'rfgExVAKpf_38' );
    var text = `Adalais: I do not have an hour!  I have to leave this classroom *now* lest I miss the bus.`;
    core.say( text, scope.rfgExVAKpf_39 );
};

// ACTION
scope.rfgExVAKpf_39 = function(){
    scene.stopSound( 'bgm2', true );;
    scope.rfgExVAKpf_40();
};

// ACTION
scope.rfgExVAKpf_40 = function(){
    scene.setConv( 'port1', 'Ada_thoughtful' );
    scope.rfgExVAKpf_41();
};

// TEXT
scope.rfgExVAKpf_41 = function(){
    player.set( 'current_in2_node', 'rfgExVAKpf_41' );
    var text = `Adalais: There has to be another way out of here...`;
    core.say( text, scope.rfgExVAKpf_42 );
};

// TEXT
scope.rfgExVAKpf_42 = function(){
    player.set( 'current_in2_node', 'rfgExVAKpf_42' );
    var text = `Adalais: I need to find it quickly, though.`;
    core.say( text, scope.rfgExVAKpf_43 );
};

// ACTION
scope.rfgExVAKpf_43 = function(){
    scene.endConversation();
    scope.rfgExVAKpf_44();
};

// ACTION
scope.rfgExVAKpf_44 = function(){
    scene.playSound( 'bgm3', true );;
    scope.rfgExVAKpf_45();
};
// chunk LAST
scope.rfgExVAKpf_45 = function(){
    scope.PcIVRQghgp();
};
// ACTION
scope.PcIVRQghgp = function(){
    player.set( "has_gone_to_door", true );
    scope.DcsHKdiqZQ();
};

// TEXT
scope.mVnBJCUifw = function(){
    player.set( 'current_in2_node', 'mVnBJCUifw' );
    var text = `Inventory.`;
    core.say( text, scope.HgZtMpbctI );
};

// chunk FIRST
scope.HgZtMpbctI = function(){
    scope.HgZtMpbctI_0();
};
// ACTION
scope.HgZtMpbctI_0 = function(){
    scene.startConversation( 'BlackBar', 'black-bar', [ { name: 'port1', anim: 'Ada_normal' } ] );;
    scope.HgZtMpbctI_1();
};

// TEXT
scope.HgZtMpbctI_1 = function(){
    player.set( 'current_in2_node', 'HgZtMpbctI_1' );
    var text = `Adalais: I do not have anything at the moment.`;
    core.say( text, scope.HgZtMpbctI_2 );
};

// ACTION
scope.HgZtMpbctI_2 = function(){
    scene.endConversation();;
    scope.HgZtMpbctI_3();
};

// ACTION
scope.HgZtMpbctI_3 = function(){
    ;
    scope.HgZtMpbctI_4();
};
// chunk LAST
scope.HgZtMpbctI_4 = function(){
    scope.LDgHfsLulJ();
};
if( !id ){
    scope.WpEJJQaEsI();
}
else {
    scope[ id ]();
}
};


files[ `comic-classroom2.json` ] = function( id ){
player.set( 'current_in2_file', 'comic-classroom2.json' );
// ACTION
scope.RgkOTaNwOz = function(){
    player.setIfUnset( 'cell_phone_location', 'jonathan' );
player.setIfUnset( 'mousepad_location', 'desk' );
player.setIfUnset( 'pop_quiz_location', 'desk' );
player.setIfUnset( 'has_seen_cell_phone', false );
player.setIfUnset( 'av_key_location', 'ralgo' );
player.setIfUnset( 'has_examined_av_room_door', true );
player.setIfUnset( 'music_is_on', false );
player.setIfUnset( 'has_permission_to_take_cell_phone', false );

player.setIfUnset( 'has_entered_avcloset', true );
player.setIfUnset( 'stapler_location', 'ada' );
player.setIfUnset( 'scissors_location', 'ada' );
player.setIfUnset( 'has_seen_otis_note', true );
player.setIfUnset( 'has_been_to_classroom2', true );
player.setIfUnset( 'book_location', 'ada' );;
    scope.VLHKYRrnWn();
};

// ACTION
scope.VLHKYRrnWn = function(){
    scene.clearActors();
scene.addActor('Background', 0, 0, 'black-screen');
scene.addActor('Ralgo_act', 290, 0, 'invisible');
scene.addActor('John_act', 200, 200, 'invisible');
scene.addActor('Book', 221, 145, 'invisible'); 
scene.addActor('Adalais_act', 10, 80, 'invisible');
scene.addActor('Foreground', 0, 0, 'invisible'); 
scene.addActor('Phone', 316, 250, 'invisible'); 
scene.addActor('Mousepad', 0, 309, 'invisible');
scene.addActor('Stapler', 43, 293, 'invisible');
scene.addActor('Props', 0, 280, 'invisible' );
scene.addActor('Overlay', 0, 0, 'invisible'); 
scene.addActor('BlackBarLeft', 0, 300, 'invisible');
scene.addActor('BlackBarRight', 200, 300, 'invisible'); 
scene.addActor('BlackBar', 0, 350, 'invisible'); 
scene.addActor('port1', 0, 200, 'invisible'); 
scene.addActor('port2', 0, 200, 'invisible');
scene.addActor('Calculus', 100, 100, 'invisible'); 

if( player.get( 'cell_phone_location' ) === 'jonathan' ){
  scene.setAnimation( 'Phone', 'Phone', true );
}
if( player.get( 'mousepad_location' ) === 'desk' ) {
  scene.setAnimation( 'Mousepad', 'Mousepad', true );
}
if( player.get( 'stapler_location' ) === 'desk' ) {
  scene.setAnimation( 'Stapler', 'Stapler', true );
}
if( player.get( 'book_location' ) === 'bookshelf' ) {
  scene.setAnimation( 'Book', 'Book4', true );
}
scene.setActorBase( 'Adalais_act', 140, 170, 'Ada_actor_idle1' );
scene.setAnimation( 'Background', 'Classroom2_bg', true );
scene.setAnimation( 'Foreground', 'Classroom2_fg', true );
scene.setAnimation( 'Props', 'Classroom2_Props', true );
scene.setAnimation( 'Ralgo_act', 'Ralgo_actor_idle1', true );
scene.setAnimation( 'Adalais_act', 'Ada_actor_idle1' );
scene.setAnimation( 'John_act', 'Jonathan_actor_idle1', true ); scene.setActor( 'Adalais_act', 80, 200 );
scene.setActor( 'Adalais_act',  140, 170 );
scene.setActor( 'Ralgo_act', 290, 0);
scene.setActor( 'John_act', 30, 150 );;
    scope.gaBUGXaOqX();
};

// ACTION
scope.gaBUGXaOqX = function(){
    player.setIfUnset( 'calculus_questions', [ {
	'question': "Let h(x) = 8 * log[5](x). Find h'(x).",
	'solutions': [ "8 / ln(5) * x", "8 / x", "8 / x * log[5](x)", "8 * ln(5) / ln(x)" ]
}, {
	'question': "Given -4 ∫ 2 f(x)dx = 2P and -4 ∫ 2 g(x)dx = P - Q.  What is the value of -4 ∫ 2 ( 6 * g(x) - 3 * f(x) )dx?",
	'solutions': [ "-6Q", "6Q", "6Q - 12P", "12P - 6Q" ]
}, {
	'question': "Integrate: ∫ csc( x ) * cot( x )dx",
	'solutions': [ "-csc( x ) + C", "-sec( x ) + C", "-tan( x ) + C", "-cot( x ) + C" ]
}, {
	'question': "Integrate: ∫ 3 * cot( x ) * csc( x )",
	'solutions': [ "-3 * csc( x ) + C", "3 * csc( x ) + C", "3 * csc^3( x ) + 3 * csc( x ) * cot^2( x ) + C", "-3 * csc^3( x ) - 3 * csc( x ) * cot^2( x ) + C" ]
}, {
	'question': "Integrate: ∫ 3 * sec^2( x )dx",
	'solutions': [ "3 * tan( x ) + C", "tan( x ) + C", "3 * csc( x ) + C", "csc( x ) + C" ]
}, {
	'question': "Let y = ( 4 * sin( 3 * x ) ). Find the second derivative with respect to y.",
	'solutions': [ "-36 * sin( 3 * x )", "12 * cos( 3 * x )", "-4 * sin( 3 * x )", "( 4 / 9 ) * cos( 3 * x )" ]
}, {
	'question': "Find the second derivative with respect to x: ( 6 * cos( 3 * x + 3 ) )",
	'solutions': [ "54 * cos( 3 * x + 3 )", "-6 * cos( 3 * x )", "( 2 / 3 ) * sin( 3 * x + 3 )", "-18 * sin( 3 * x + 3 )" ]
}, {
	'question': "Let f(x) = -10 * ln(x). Find f'(x).",
	'solutions': [ "-10 / x", "-1 / 10 * ln(x)", "-10 / ln(x)", "-1 / 10 * x" ]
} ] );
player.setIfUnset( 'calculus_num_answered', 0 );
player.set( 'genereate_calculus_question', () => {
	let questions = player.get( 'calculus_questions' ) || [];
	let used_questions = player.get( 'calculus_used_inds' ) || [];
	let ind = Math.floor( Math.random() * questions.length );

	if( used_questions.length === questions.length ){
		used_questions = [];
	}

	while( used_questions.indexOf( ind ) > -1 ){
		ind = ( ind + 1 ) % questions.length;
	}

	used_questions.push( ind );
	let obj = questions[ ind ];

	let sprite_name = 'calc' + ( ind + 1 );
	let spr = scene && scene.sprites && scene.sprites[ sprite_name ];
	if( spr ) {
		scene.setAnimation( 'Calculus', sprite_name );
		scene.setActor( 'Calculus', 200 - spr.clip_w / 2, 200 );
		player.set( 'calculus_current_question', obj.question );
		player.set( 'calculus_current_ans_correct', obj.solutions[ 0 ] );
		player.set( 'calculus_current_ans_wrong1', obj.solutions[ 1 ] );
		player.set( 'calculus_current_ans_wrong2', obj.solutions[ 2 ] );
		player.set( 'calculus_current_ans_wrong3', obj.solutions[ 3 ] );
		player.set( 'calculus_used_inds', used_questions );
	}
} );;
    scope.fxxyBANDhi();
};

// pass_fail
scope.fxxyBANDhi = function(){
    player.set( 'current_in2_node', 'fxxyBANDhi' );
    var condition = ( function(){ return player.get( 'has_been_to_classroom2' ); } )();
    if( condition ){
        player.set( 'current_in2_node', 'pdPVoJGMCt' );
        var text = ``;
        core.say( text, scope.SBGNghnVEc );
    }
    if( !condition ){
        player.set( 'current_in2_node', 'gNFbHKDCKc' );
        var text = ``;
        core.say( text, scope.KDEUsLwxMG );
    }
};
// ACTION
scope.SBGNghnVEc = function(){
    scene.setActor( 'Adalais_act',  140, 170 );
scene.setActor( 'Ralgo_act', 290, 0);
scene.setActor( 'John_act', 30, 150 ); 
scene.setAnimation( 'Adalais_act', 'Ada_actor_idle1' ); 
scene.setAnimation( 'BlackBarLeft', 'invisible' );
scene.setAnimation( 'BlackBarRight', 'invisible' ); 
scene.setAnimation( 'BlackBar', 'invisible' );
scene.restoreActorBase( 'Adalais_act' );;
    scope.AncRgtzYxH();
};

// pass_fail
scope.AncRgtzYxH = function(){
    player.set( 'current_in2_node', 'AncRgtzYxH' );
    var condition = ( function(){ return player.get( 'music_is_on' ) } )();
    if( condition ){
        player.set( 'current_in2_node', 'snOAoTqrZJ' );
        var text = ``;
        core.say( text, scope.PZSgLMLUFc );
    }
    if( !condition ){
        player.set( 'current_in2_node', 'DzDMehdIFJ' );
        var text = ``;
        core.say( text, scope.lsPBRnsedI );
    }
};
// ACTION
scope.PZSgLMLUFc = function(){
    scene.setAnimation( 'Ralgo_act', 'invisible' );;
    scope.lsPBRnsedI();
};

// choice
scope.lsPBRnsedI = function(){
    player.set( 'current_in2_node', 'lsPBRnsedI' );
    var text = `Classroom NE - I need to find a way out of the classroom.`;
    core.choose( text, 'lsPBRnsedI', [{
        text: `Go to NW corner.`,
        cb: scope.mQlUaKIyRg,
        condition: () => { return true; }
    },{
        text: `Go to SE corner.`,
        cb: scope.qSntLgAgfc,
        condition: () => { return true; }
    },{
        text: `Examine surroundings.`,
        cb: scope.coLgwydkHR,
        condition: () => { return true; }
    },{
        text: `Talk.`,
        cb: scope.gpbiTraTaO,
        condition: () => { return true; }
    },{
        text: `Inventory.`,
        cb: scope.bLauQYEgmK,
        condition: () => { return true; }
    }]);
};

// TEXT
scope.mQlUaKIyRg = function(){
    player.set( 'current_in2_node', 'mQlUaKIyRg' );
    var text = `Go to NW corner.`;
    core.say( text, scope.ORxYCzGHoY );
};

// pass_fail
scope.ORxYCzGHoY = function(){
    player.set( 'current_in2_node', 'ORxYCzGHoY' );
    var condition = ( function(){ return player.get( 'music_is_on' ); } )();
    if( !condition ){
        player.set( 'current_in2_node', 'ZyGFoXRPnw' );
        var text = ``;
        core.say( text, scope.WibfunHNsF );
    }
    if( condition ){
        player.set( 'current_in2_node', 'YKyKleaTKE' );
        var text = ``;
        core.say( text, scope.PIYggYPAyC );
    }
};
// chunk FIRST
scope.WibfunHNsF = function(){
    scope.WibfunHNsF_0();
};
// ACTION
scope.WibfunHNsF_0 = function(){
    scene.setAnimation( 'Overlay', 'black-screen', true );;
    scope.WibfunHNsF_1();
};

// TEXT
scope.WibfunHNsF_1 = function(){
    player.set( 'current_in2_node', 'WibfunHNsF_1' );
    var text = `...`;
    core.say( text, scope.WibfunHNsF_2 );
};
// chunk LAST
scope.WibfunHNsF_2 = function(){
    scope.OcHsdahmVf();
};
// next_file
scope.OcHsdahmVf = function(){
    var key = `comic-classroom1.json`;
    var func = files[ key ];
    if( func ) {
        func();
    } else {
        core.say( `EXECUTION WARNING, no file exists named ${key}. You are probably running a subset of all the files, and not the whole scenario. ` + Object.keys( files ), files.exit );
    }
};

// chunk FIRST
scope.PIYggYPAyC = function(){
    scope.PIYggYPAyC_0();
};
// ACTION
scope.PIYggYPAyC_0 = function(){
    scene.setAnimation( 'Overlay', 'black-screen', true );;
    scope.PIYggYPAyC_1();
};

// ACTION
scope.PIYggYPAyC_1 = function(){
    scene.startConversation( 'BlackBarLeft', 'black-bar-left', [ { name: 'port1', anim: 'Ada_normal2' } ] );;
    scope.PIYggYPAyC_2();
};

// ACTION
scope.PIYggYPAyC_2 = function(){
    scene.stopSound();;
    scope.PIYggYPAyC_3();
};

// ACTION
scope.PIYggYPAyC_3 = function(){
    scene.setConv( 'port1', 'Ralgo_normal' );;
    scope.PIYggYPAyC_4();
};

// TEXT
scope.PIYggYPAyC_4 = function(){
    player.set( 'current_in2_node', 'PIYggYPAyC_4' );
    var text = `Mr. Ralgo: "Damn kids these days play the loudest music.  Where did they even find a cable for my speakers..."`;
    core.say( text, scope.PIYggYPAyC_5 );
};

// ACTION
scope.PIYggYPAyC_5 = function(){
    scene.setConv( 'port1', 'Ada_thoughtful' );;
    scope.PIYggYPAyC_6();
};

// TEXT
scope.PIYggYPAyC_6 = function(){
    player.set( 'current_in2_node', 'PIYggYPAyC_6' );
    var text = `Adalais: I guess, he turned the speakers down, but Jonathan's cell phone is still connected to them.`;
    core.say( text, scope.PIYggYPAyC_7 );
};

// ACTION
scope.PIYggYPAyC_7 = function(){
    scene.playSound( "bgm3" );;
    scope.PIYggYPAyC_8();
};

// ACTION
scope.PIYggYPAyC_8 = function(){
    scene.endConversation();;
    scope.PIYggYPAyC_9();
};

// TEXT
scope.PIYggYPAyC_9 = function(){
    player.set( 'current_in2_node', 'PIYggYPAyC_9' );
    var text = `...`;
    core.say( text, scope.PIYggYPAyC_10 );
};
// chunk LAST
scope.PIYggYPAyC_10 = function(){
    scope.JByUMqCyEU();
};
// ACTION
scope.JByUMqCyEU = function(){
    player.set( "music_is_on", false );
    scope.OcHsdahmVf();
};

// TEXT
scope.qSntLgAgfc = function(){
    player.set( 'current_in2_node', 'qSntLgAgfc' );
    var text = `Go to SE corner.`;
    core.say( text, scope.kyYSGXgcuG );
};

// pass_fail
scope.kyYSGXgcuG = function(){
    player.set( 'current_in2_node', 'kyYSGXgcuG' );
    var condition = ( function(){ return player.get( 'music_is_on' ); } )();
    if( !condition ){
        player.set( 'current_in2_node', 'bttPQPpbdX' );
        var text = ``;
        core.say( text, scope.hphrTriZTu );
    }
    if( condition ){
        player.set( 'current_in2_node', 'cDyfPaPklu' );
        var text = ``;
        core.say( text, scope.KUfkTrqfmM );
    }
};
// chunk FIRST
scope.hphrTriZTu = function(){
    scope.hphrTriZTu_0();
};
// ACTION
scope.hphrTriZTu_0 = function(){
    scene.setAnimation( 'Overlay', 'black-screen', true );;
    scope.hphrTriZTu_1();
};

// TEXT
scope.hphrTriZTu_1 = function(){
    player.set( 'current_in2_node', 'hphrTriZTu_1' );
    var text = `...`;
    core.say( text, scope.hphrTriZTu_2 );
};
// chunk LAST
scope.hphrTriZTu_2 = function(){
    scope.sCrMJfFErd();
};
// next_file
scope.sCrMJfFErd = function(){
    var key = `comic-classroom4-se.json`;
    var func = files[ key ];
    if( func ) {
        func();
    } else {
        core.say( `EXECUTION WARNING, no file exists named ${key}. You are probably running a subset of all the files, and not the whole scenario. ` + Object.keys( files ), files.exit );
    }
};

// chunk FIRST
scope.KUfkTrqfmM = function(){
    scope.KUfkTrqfmM_0();
};
// ACTION
scope.KUfkTrqfmM_0 = function(){
    scene.setAnimation( 'Overlay', 'black-screen', true );;
    scope.KUfkTrqfmM_1();
};

// ACTION
scope.KUfkTrqfmM_1 = function(){
    scene.startConversation( 'BlackBarLeft', 'black-bar-left', [ { name: 'port1', anim: 'Ada_normal2' } ] );;
    scope.KUfkTrqfmM_2();
};

// ACTION
scope.KUfkTrqfmM_2 = function(){
    scene.stopSound();;
    scope.KUfkTrqfmM_3();
};

// ACTION
scope.KUfkTrqfmM_3 = function(){
    scene.setConv( 'port1', 'Ralgo_normal' );;
    scope.KUfkTrqfmM_4();
};

// TEXT
scope.KUfkTrqfmM_4 = function(){
    player.set( 'current_in2_node', 'KUfkTrqfmM_4' );
    var text = `Mr. Ralgo: "Damn kids these days play the loudest music.  Where did they even find a cable for my speakers..."`;
    core.say( text, scope.KUfkTrqfmM_5 );
};

// ACTION
scope.KUfkTrqfmM_5 = function(){
    scene.setConv( 'port1', 'Ada_thoughtful' );;
    scope.KUfkTrqfmM_6();
};

// TEXT
scope.KUfkTrqfmM_6 = function(){
    player.set( 'current_in2_node', 'KUfkTrqfmM_6' );
    var text = `Adalais: I guess, he turned the speakers down, but Jonathan's cell phone is still connected to them.`;
    core.say( text, scope.KUfkTrqfmM_7 );
};

// ACTION
scope.KUfkTrqfmM_7 = function(){
    scene.playSound( "bgm3" );;
    scope.KUfkTrqfmM_8();
};

// ACTION
scope.KUfkTrqfmM_8 = function(){
    scene.endConversation();;
    scope.KUfkTrqfmM_9();
};

// TEXT
scope.KUfkTrqfmM_9 = function(){
    player.set( 'current_in2_node', 'KUfkTrqfmM_9' );
    var text = `...`;
    core.say( text, scope.KUfkTrqfmM_10 );
};
// chunk LAST
scope.KUfkTrqfmM_10 = function(){
    scope.nxJRTuYVXk();
};
// ACTION
scope.nxJRTuYVXk = function(){
    player.set( "music_is_on", false );
    scope.sCrMJfFErd();
};

// TEXT
scope.coLgwydkHR = function(){
    player.set( 'current_in2_node', 'coLgwydkHR' );
    var text = `Examine surroundings.`;
    core.say( text, scope.BMHubEninb );
};

// ACTION
scope.BMHubEninb = function(){
    scene.restoreActorBase( 'Adalais_act' );;
    scope.FiNaUoyDgf();
};

// choice
scope.FiNaUoyDgf = function(){
    player.set( 'current_in2_node', 'FiNaUoyDgf' );
    var text = `I can see these things from here:`;
    core.choose( text, 'FiNaUoyDgf', [{
        text: `Go back.`,
        cb: scope.fftkUZrwJg,
        condition: () => { return true; }
    },{
        text: `Stapler.`,
        cb: scope.ikCkgOumfn,
        condition: () => { return player.get( 'stapler_location' ) !== 'ada' }
    },{
        text: `Teacher's desk.`,
        cb: scope.KwgIKMCNTc,
        condition: () => { return true; }
    },{
        text: `Filing cabinet.`,
        cb: scope.CDJykzgJYL,
        condition: () => { return true; }
    },{
        text: `Bookshelf.`,
        cb: scope.pYRNrZFmHx,
        condition: () => { return true; }
    },{
        text: `Jonathan's desk.`,
        cb: scope.xFaglRAgYk,
        condition: () => { return true; }
    },{
        text: `Mouse pad.`,
        cb: scope.RiyOhfZkVn,
        condition: () => { return player.get( 'has_entered_avcloset' ) }
    }]);
};

// TEXT
scope.fftkUZrwJg = function(){
    player.set( 'current_in2_node', 'fftkUZrwJg' );
    var text = `Go back.`;
    core.say( text, scope.SBGNghnVEc );
};

// TEXT
scope.ikCkgOumfn = function(){
    player.set( 'current_in2_node', 'ikCkgOumfn' );
    var text = `Stapler.`;
    core.say( text, scope.qHArgRazmf );
};

// chunk FIRST
scope.qHArgRazmf = function(){
    scope.qHArgRazmf_0();
};
// ACTION
scope.qHArgRazmf_0 = function(){
    scene.startConversation( 'BlackBar', 'black-bar', [ { name: 'port1', anim: 'Ada_normal' } ] );;
    scope.qHArgRazmf_1();
};

// ACTION
scope.qHArgRazmf_1 = function(){
    scene.setActor( 'Adalais_act', 45, 220 );;
    scope.qHArgRazmf_2();
};

// ACTION
scope.qHArgRazmf_2 = function(){
    scene.setAnimation( 'Adalais_act', 'Ada_actor_classroom1_left' );;
    scope.qHArgRazmf_3();
};

// ACTION
scope.qHArgRazmf_3 = function(){
    scene.setConv( 'port1' );;
    scope.qHArgRazmf_4();
};

// TEXT
scope.qHArgRazmf_4 = function(){
    player.set( 'current_in2_node', 'qHArgRazmf_4' );
    var text = `Adalais: This is Mr. Ralgo's stapler.  Should I pick it up?`;
    core.say( text, scope.qHArgRazmf_5 );
};

// ACTION
scope.qHArgRazmf_5 = function(){
    scene.setConv( '' );;
    scope.qHArgRazmf_6();
};
// chunk LAST
scope.qHArgRazmf_6 = function(){
    scope.sGOdOPnLlP();
};
// choice
scope.sGOdOPnLlP = function(){
    player.set( 'current_in2_node', 'sGOdOPnLlP' );
    var text = `Should I pick up the stapler?`;
    core.choose( text, 'sGOdOPnLlP', [{
        text: `Yes.`,
        cb: scope.caNqufszgt,
        condition: () => { return true; }
    },{
        text: `No.`,
        cb: scope.paEzmqwnQE,
        condition: () => { return true; }
    }]);
};

// TEXT
scope.caNqufszgt = function(){
    player.set( 'current_in2_node', 'caNqufszgt' );
    var text = `Yes.`;
    core.say( text, scope.ZyZNsCnysC );
};

// chunk FIRST
scope.ZyZNsCnysC = function(){
    scope.ZyZNsCnysC_0();
};
// ACTION
scope.ZyZNsCnysC_0 = function(){
    scene.setConv( 'port1' );;
    scope.ZyZNsCnysC_1();
};

// TEXT
scope.ZyZNsCnysC_1 = function(){
    player.set( 'current_in2_node', 'ZyZNsCnysC_1' );
    var text = `Adalais: I may need this.`;
    core.say( text, scope.ZyZNsCnysC_2 );
};

// ACTION
scope.ZyZNsCnysC_2 = function(){
    scene.setAnimation( 'Stapler', 'invisible' );;
    scope.ZyZNsCnysC_3();
};

// ACTION
scope.ZyZNsCnysC_3 = function(){
    scene.setConv( 'port1', 'invisible' );;
    scope.ZyZNsCnysC_4();
};

// TEXT
scope.ZyZNsCnysC_4 = function(){
    player.set( 'current_in2_node', 'ZyZNsCnysC_4' );
    var text = `...`;
    core.say( text, scope.ZyZNsCnysC_5 );
};

// ACTION
scope.ZyZNsCnysC_5 = function(){
    scene.setConv( 'port1' );;
    scope.ZyZNsCnysC_6();
};

// TEXT
scope.ZyZNsCnysC_6 = function(){
    player.set( 'current_in2_node', 'ZyZNsCnysC_6' );
    var text = `Adalais: Okay, I have a stapler now.`;
    core.say( text, scope.ZyZNsCnysC_7 );
};

// ACTION
scope.ZyZNsCnysC_7 = function(){
    scene.endConversation();;
    scope.ZyZNsCnysC_8();
};

// ACTION
scope.ZyZNsCnysC_8 = function(){
    scene.restoreActorBase( 'Adalais_act' );;
    scope.ZyZNsCnysC_9();
};
// chunk LAST
scope.ZyZNsCnysC_9 = function(){
    scope.GPAtcGhNZK();
};
// ACTION
scope.GPAtcGhNZK = function(){
    player.set( "stapler_location", 'ada' );
    scope.FiNaUoyDgf();
};

// TEXT
scope.paEzmqwnQE = function(){
    player.set( 'current_in2_node', 'paEzmqwnQE' );
    var text = `No.`;
    core.say( text, scope.eNabxFgthz );
};

// chunk FIRST
scope.eNabxFgthz = function(){
    scope.eNabxFgthz_0();
};
// TEXT
scope.eNabxFgthz_0 = function(){
    player.set( 'current_in2_node', 'eNabxFgthz_0' );
    var text = `Adalais: I shall leave the stapler where it is for now.`;
    core.say( text, scope.eNabxFgthz_1 );
};

// ACTION
scope.eNabxFgthz_1 = function(){
    scene.endConversation();;
    scope.eNabxFgthz_2();
};

// ACTION
scope.eNabxFgthz_2 = function(){
    scene.restoreActorBase( 'Adalais_act' );;
    scope.eNabxFgthz_3();
};
// chunk LAST
scope.eNabxFgthz_3 = function(){
    scope.FiNaUoyDgf();
};
// TEXT
scope.KwgIKMCNTc = function(){
    player.set( 'current_in2_node', 'KwgIKMCNTc' );
    var text = `Teacher's desk.`;
    core.say( text, scope.AwgdKlZwFc );
};

// chunk FIRST
scope.AwgdKlZwFc = function(){
    scope.AwgdKlZwFc_0();
};
// ACTION
scope.AwgdKlZwFc_0 = function(){
    scene.startConversation( 'BlackBar', 'black-bar', [ { name: 'port1', anim: 'Ada_normal' } ] );;
    scope.AwgdKlZwFc_1();
};

// ACTION
scope.AwgdKlZwFc_1 = function(){
    scene.setActor( 'Adalais_act', 45, 220 );;
    scope.AwgdKlZwFc_2();
};

// ACTION
scope.AwgdKlZwFc_2 = function(){
    scene.setAnimation( 'Adalais_act', 'Ada_actor_classroom1_left' );;
    scope.AwgdKlZwFc_3();
};

// ACTION
scope.AwgdKlZwFc_3 = function(){
    scene.setConv( 'port1' );;
    scope.AwgdKlZwFc_4();
};

// TEXT
scope.AwgdKlZwFc_4 = function(){
    player.set( 'current_in2_node', 'AwgdKlZwFc_4' );
    var text = `Adalais: Mr. Ralgo seems to have quite a large mousepad on his desk.`;
    core.say( text, scope.AwgdKlZwFc_5 );
};

// ACTION
scope.AwgdKlZwFc_5 = function(){
    scene.setConv( 'port1', 'Ada_thoughtful' );;
    scope.AwgdKlZwFc_6();
};

// TEXT
scope.AwgdKlZwFc_6 = function(){
    player.set( 'current_in2_node', 'AwgdKlZwFc_6' );
    var text = `Adalais: He brought this in about a week ago and he has been giving almost daily pop quizzes ever since.`;
    core.say( text, scope.AwgdKlZwFc_7 );
};

// ACTION
scope.AwgdKlZwFc_7 = function(){
    scene.endConversation();;
    scope.AwgdKlZwFc_8();
};

// ACTION
scope.AwgdKlZwFc_8 = function(){
    scene.restoreActorBase( 'Adalais_act' );;
    scope.AwgdKlZwFc_9();
};
// chunk LAST
scope.AwgdKlZwFc_9 = function(){
    scope.FiNaUoyDgf();
};
// TEXT
scope.CDJykzgJYL = function(){
    player.set( 'current_in2_node', 'CDJykzgJYL' );
    var text = `Filing cabinet.`;
    core.say( text, scope.CRCYAgmxtg );
};

// pass_fail
scope.CRCYAgmxtg = function(){
    player.set( 'current_in2_node', 'CRCYAgmxtg' );
    var condition = ( function(){ return player.get( 'music_is_on' ) } )();
    if( !condition ){
        player.set( 'current_in2_node', 'QNakfOOCZM' );
        var text = ``;
        core.say( text, scope.krrCgKnoZg );
    }
    if( condition ){
        player.set( 'current_in2_node', 'ZJBBgWOAKo' );
        var text = ``;
        core.say( text, scope.ndURqqnCVb );
    }
};
// pass_fail
scope.krrCgKnoZg = function(){
    player.set( 'current_in2_node', 'krrCgKnoZg' );
    var condition = ( function(){ return player.get( 'has_filing_cabinet_key' ) } )();
    if( !condition ){
        player.set( 'current_in2_node', 'sugVSkVMbF' );
        var text = ``;
        core.say( text, scope.IPMNFTRJgw );
    }
    if( condition ){
        player.set( 'current_in2_node', 'IweGXEwDyE' );
        var text = ``;
        core.say( text, scope.iXSMnXOMLU );
    }
};
// chunk FIRST
scope.IPMNFTRJgw = function(){
    scope.IPMNFTRJgw_0();
};
// ACTION
scope.IPMNFTRJgw_0 = function(){
    scene.startConversation( 'BlackBar', 'black-bar', [ { name: 'port1', anim: 'Ada_normal' } ] );;
    scope.IPMNFTRJgw_1();
};

// ACTION
scope.IPMNFTRJgw_1 = function(){
    scene.setActor( 'Adalais_act', 224, 91);;
    scope.IPMNFTRJgw_2();
};

// ACTION
scope.IPMNFTRJgw_2 = function(){
    scene.setAnimation( 'Adalais_act', 'Ada_actor_classroom1_up' );;
    scope.IPMNFTRJgw_3();
};

// ACTION
scope.IPMNFTRJgw_3 = function(){
    scene.setConv( 'port1', 'Ada_normal' );;
    scope.IPMNFTRJgw_4();
};

// TEXT
scope.IPMNFTRJgw_4 = function(){
    player.set( 'current_in2_node', 'IPMNFTRJgw_4' );
    var text = `Adalais: A filing cabinet is over here.`;
    core.say( text, scope.IPMNFTRJgw_5 );
};

// ACTION
scope.IPMNFTRJgw_5 = function(){
    scene.setConv( 'port1', 'Ada_annoyed' );;
    scope.IPMNFTRJgw_6();
};

// TEXT
scope.IPMNFTRJgw_6 = function(){
    player.set( 'current_in2_node', 'IPMNFTRJgw_6' );
    var text = `Adalais: It is locked, but there is a key just sitting on top of it.`;
    core.say( text, scope.IPMNFTRJgw_7 );
};

// ACTION
scope.IPMNFTRJgw_7 = function(){
    scene.setConv( 'port1', 'Ralgo_bored' );;
    scope.IPMNFTRJgw_8();
};

// TEXT
scope.IPMNFTRJgw_8 = function(){
    player.set( 'current_in2_node', 'IPMNFTRJgw_8' );
    var text = `Mr. Ralgo: "Don't touch that Ada.  There's no need for you to get in there."`;
    core.say( text, scope.IPMNFTRJgw_9 );
};

// ACTION
scope.IPMNFTRJgw_9 = function(){
    scene.setConv( 'port1', 'Ada_thoughtful' );;
    scope.IPMNFTRJgw_10();
};

// TEXT
scope.IPMNFTRJgw_10 = function(){
    player.set( 'current_in2_node', 'IPMNFTRJgw_10' );
    var text = `Adalais: (I suppose he does not want to see me get into that cabinet.)`;
    core.say( text, scope.IPMNFTRJgw_11 );
};

// ACTION
scope.IPMNFTRJgw_11 = function(){
    scene.endConversation();;
    scope.IPMNFTRJgw_12();
};

// ACTION
scope.IPMNFTRJgw_12 = function(){
    scene.restoreActorBase( 'Adalais_act' );;
    scope.IPMNFTRJgw_13();
};
// chunk LAST
scope.IPMNFTRJgw_13 = function(){
    scope.FiNaUoyDgf();
};

// chunk FIRST
scope.iXSMnXOMLU = function(){
    scope.iXSMnXOMLU_0();
};
// ACTION
scope.iXSMnXOMLU_0 = function(){
    scene.startConversation( 'BlackBar', 'black-bar', [ { name: 'port1', anim: 'Ada_normal' } ] );;
    scope.iXSMnXOMLU_1();
};

// ACTION
scope.iXSMnXOMLU_1 = function(){
    scene.setActor( 'Adalais_act', 224, 91);;
    scope.iXSMnXOMLU_2();
};

// ACTION
scope.iXSMnXOMLU_2 = function(){
    scene.setAnimation( 'Adalais_act', 'Ada_actor_classroom1_up' );;
    scope.iXSMnXOMLU_3();
};

// ACTION
scope.iXSMnXOMLU_3 = function(){
    scene.setConv( 'port1', 'Ada_normal' );;
    scope.iXSMnXOMLU_4();
};

// TEXT
scope.iXSMnXOMLU_4 = function(){
    player.set( 'current_in2_node', 'iXSMnXOMLU_4' );
    var text = `Adalais: A filing cabinet is over here.  It is locked, but I have the key for it.`;
    core.say( text, scope.iXSMnXOMLU_5 );
};

// ACTION
scope.iXSMnXOMLU_5 = function(){
    scene.setConv( 'port1', 'invisible' );;
    scope.iXSMnXOMLU_6();
};

// TEXT
scope.iXSMnXOMLU_6 = function(){
    player.set( 'current_in2_node', 'iXSMnXOMLU_6' );
    var text = `...`;
    core.say( text, scope.iXSMnXOMLU_7 );
};

// ACTION
scope.iXSMnXOMLU_7 = function(){
    scene.endConversation();;
    scope.iXSMnXOMLU_8();
};

// ACTION
scope.iXSMnXOMLU_8 = function(){
    scene.startConversation( 'BlackBar', 'black-bar', [ { name: 'port1', anim: 'Ada_normal' }, { name: 'port2', anim: 'Ralgo_normal' } ] );;
    scope.iXSMnXOMLU_9();
};

// ACTION
scope.iXSMnXOMLU_9 = function(){
    scene.setConv( 'port2', 'Ralgo_bored' );;
    scope.iXSMnXOMLU_10();
};

// TEXT
scope.iXSMnXOMLU_10 = function(){
    player.set( 'current_in2_node', 'iXSMnXOMLU_10' );
    var text = `Ralgo: "Hey Ada.  Don't touch that cabinet."`;
    core.say( text, scope.iXSMnXOMLU_11 );
};

// ACTION
scope.iXSMnXOMLU_11 = function(){
    scene.setConv( 'port2', 'Ada_normal' );;
    scope.iXSMnXOMLU_12();
};

// TEXT
scope.iXSMnXOMLU_12 = function(){
    player.set( 'current_in2_node', 'iXSMnXOMLU_12' );
    var text = `Ralgo: "There's important stuff in there.  Stay away from it."`;
    core.say( text, scope.iXSMnXOMLU_13 );
};

// ACTION
scope.iXSMnXOMLU_13 = function(){
    scene.setConv( 'port1', 'Ada_thoughtful' );;
    scope.iXSMnXOMLU_14();
};

// TEXT
scope.iXSMnXOMLU_14 = function(){
    player.set( 'current_in2_node', 'iXSMnXOMLU_14' );
    var text = `Adalais: (Perhaps Mr. Ralgo does not want to see me open this filing cabinet.)`;
    core.say( text, scope.iXSMnXOMLU_15 );
};

// ACTION
scope.iXSMnXOMLU_15 = function(){
    scene.endConversation();;
    scope.iXSMnXOMLU_16();
};

// ACTION
scope.iXSMnXOMLU_16 = function(){
    scene.restoreActorBase( 'Adalais_act' );;
    scope.iXSMnXOMLU_17();
};
// chunk LAST
scope.iXSMnXOMLU_17 = function(){
    scope.FiNaUoyDgf();
};

// pass_fail
scope.ndURqqnCVb = function(){
    player.set( 'current_in2_node', 'ndURqqnCVb' );
    var condition = ( function(){ return player.get( 'has_filing_cabinet_key' ) } )();
    if( !condition ){
        player.set( 'current_in2_node', 'FSispfIDLf' );
        var text = ``;
        core.say( text, scope.RgoYRVDMTI );
    }
    if( condition ){
        player.set( 'current_in2_node', 'JODkVFgEAg' );
        var text = ``;
        core.say( text, scope.oaDsWWhZJq );
    }
};
// chunk FIRST
scope.RgoYRVDMTI = function(){
    scope.RgoYRVDMTI_0();
};
// ACTION
scope.RgoYRVDMTI_0 = function(){
    scene.startConversation( 'BlackBar', 'black-bar', [ { name: 'port1', anim: 'Ada_normal' } ] );;
    scope.RgoYRVDMTI_1();
};

// ACTION
scope.RgoYRVDMTI_1 = function(){
    scene.setActor( 'Adalais_act', 224, 91);;
    scope.RgoYRVDMTI_2();
};

// ACTION
scope.RgoYRVDMTI_2 = function(){
    scene.setAnimation( 'Adalais_act', 'Ada_actor_classroom1_up' );;
    scope.RgoYRVDMTI_3();
};

// ACTION
scope.RgoYRVDMTI_3 = function(){
    scene.setConv( 'port1', 'Ada_normal' );;
    scope.RgoYRVDMTI_4();
};

// TEXT
scope.RgoYRVDMTI_4 = function(){
    player.set( 'current_in2_node', 'RgoYRVDMTI_4' );
    var text = `Adalais: A filing cabinet is over here.  It is locked, but the key for it is right on top.`;
    core.say( text, scope.RgoYRVDMTI_5 );
};

// ACTION
scope.RgoYRVDMTI_5 = function(){
    scene.setConv( 'port1', 'Ada_invisible' );;
    scope.RgoYRVDMTI_6();
};

// TEXT
scope.RgoYRVDMTI_6 = function(){
    player.set( 'current_in2_node', 'RgoYRVDMTI_6' );
    var text = `...`;
    core.say( text, scope.RgoYRVDMTI_7 );
};

// ACTION
scope.RgoYRVDMTI_7 = function(){
    scene.setConv( 'port1', 'Ada_angry' );;
    scope.RgoYRVDMTI_8();
};

// TEXT
scope.RgoYRVDMTI_8 = function(){
    player.set( 'current_in2_node', 'RgoYRVDMTI_8' );
    var text = `Adalais: Wait a second, this key doesn't fit at all!`;
    core.say( text, scope.RgoYRVDMTI_9 );
};

// ACTION
scope.RgoYRVDMTI_9 = function(){
    scene.setConv( 'port1', 'Ada_worried' );;
    scope.RgoYRVDMTI_10();
};

// TEXT
scope.RgoYRVDMTI_10 = function(){
    player.set( 'current_in2_node', 'RgoYRVDMTI_10' );
    var text = `Adalais: Is this a fake or something?`;
    core.say( text, scope.RgoYRVDMTI_11 );
};

// ACTION
scope.RgoYRVDMTI_11 = function(){
    scene.endConversation();;
    scope.RgoYRVDMTI_12();
};

// ACTION
scope.RgoYRVDMTI_12 = function(){
    scene.restoreActorBase( 'Adalais_act' );;
    scope.RgoYRVDMTI_13();
};
// chunk LAST
scope.RgoYRVDMTI_13 = function(){
    scope.FiNaUoyDgf();
};

// pass_fail
scope.oaDsWWhZJq = function(){
    player.set( 'current_in2_node', 'oaDsWWhZJq' );
    var condition = ( function(){ return player.get( 'pop_quiz_location' ) === 'desk' } )();
    if( !condition ){
        player.set( 'current_in2_node', 'mdwAYbtgpM' );
        var text = ``;
        core.say( text, scope.VXTKGgNXeJ );
    }
    if( condition ){
        player.set( 'current_in2_node', 'BquaqXNRsu' );
        var text = ``;
        core.say( text, scope.yIqxotKelH );
    }
};
// chunk FIRST
scope.VXTKGgNXeJ = function(){
    scope.VXTKGgNXeJ_0();
};
// ACTION
scope.VXTKGgNXeJ_0 = function(){
    scene.startConversation( 'BlackBar', 'black-bar', [ { name: 'port1', anim: 'Ada_normal' } ] );;
    scope.VXTKGgNXeJ_1();
};

// ACTION
scope.VXTKGgNXeJ_1 = function(){
    scene.setActor( 'Adalais_act', 224, 91 );;
    scope.VXTKGgNXeJ_2();
};

// ACTION
scope.VXTKGgNXeJ_2 = function(){
    scene.setAnimation( 'Adalais_act', 'Ada_actor_classroom1_up' );;
    scope.VXTKGgNXeJ_3();
};

// ACTION
scope.VXTKGgNXeJ_3 = function(){
    scene.setConv( 'port1', 'Ada_normal' );;
    scope.VXTKGgNXeJ_4();
};

// TEXT
scope.VXTKGgNXeJ_4 = function(){
    player.set( 'current_in2_node', 'VXTKGgNXeJ_4' );
    var text = `Adalais: I already got the pop quiz from this filing cabinet.`;
    core.say( text, scope.VXTKGgNXeJ_5 );
};

// ACTION
scope.VXTKGgNXeJ_5 = function(){
    scene.endConversation();;
    scope.VXTKGgNXeJ_6();
};

// ACTION
scope.VXTKGgNXeJ_6 = function(){
    scene.restoreActorBase( 'Adalais_act' );;
    scope.VXTKGgNXeJ_7();
};
// chunk LAST
scope.VXTKGgNXeJ_7 = function(){
    scope.FiNaUoyDgf();
};

// chunk FIRST
scope.yIqxotKelH = function(){
    scope.yIqxotKelH_0();
};
// ACTION
scope.yIqxotKelH_0 = function(){
    scene.startConversation( 'BlackBar', 'black-bar', [ { name: 'port1', anim: 'Ada_normal' } ] );;
    scope.yIqxotKelH_1();
};

// ACTION
scope.yIqxotKelH_1 = function(){
    scene.setActor( 'Adalais_act', 224, 91 );;
    scope.yIqxotKelH_2();
};

// ACTION
scope.yIqxotKelH_2 = function(){
    scene.setAnimation( 'Adalais_act', 'Ada_actor_classroom1_up' );;
    scope.yIqxotKelH_3();
};

// ACTION
scope.yIqxotKelH_3 = function(){
    scene.setConv( 'port1', 'Ada_smug' );;
    scope.yIqxotKelH_4();
};

// TEXT
scope.yIqxotKelH_4 = function(){
    player.set( 'current_in2_node', 'yIqxotKelH_4' );
    var text = `Adalais: Now might be my chance to see what is in this cabinet.  And I have the proper key this time!`;
    core.say( text, scope.yIqxotKelH_5 );
};

// ACTION
scope.yIqxotKelH_5 = function(){
    scene.setConv( 'port1', 'Ada_thoughtful' );;
    scope.yIqxotKelH_6();
};

// TEXT
scope.yIqxotKelH_6 = function(){
    player.set( 'current_in2_node', 'yIqxotKelH_6' );
    var text = `Adalais: Hmm... Ah yes, here it is.`;
    core.say( text, scope.yIqxotKelH_7 );
};

// ACTION
scope.yIqxotKelH_7 = function(){
    scene.setConv( 'port1', 'Ada_surprised' );;
    scope.yIqxotKelH_8();
};

// ACTION
scope.yIqxotKelH_8 = function(){
    scene.setConv( 'port1', 'Ada_annoyed' );;
    scope.yIqxotKelH_9();
};

// TEXT
scope.yIqxotKelH_9 = function(){
    player.set( 'current_in2_node', 'yIqxotKelH_9' );
    var text = `Adalais: This is a paper labeled 'Pop Quiz'.  It has material on it that Mr. Ralgo was lecturing about today.`;
    core.say( text, scope.yIqxotKelH_10 );
};

// ACTION
scope.yIqxotKelH_10 = function(){
    scene.setConv( 'port1', 'Ada_normal' );;
    scope.yIqxotKelH_11();
};

// TEXT
scope.yIqxotKelH_11 = function(){
    player.set( 'current_in2_node', 'yIqxotKelH_11' );
    var text = `Adalais: I think I might keep this...`;
    core.say( text, scope.yIqxotKelH_12 );
};

// ACTION
scope.yIqxotKelH_12 = function(){
    scene.endConversation();;
    scope.yIqxotKelH_13();
};

// ACTION
scope.yIqxotKelH_13 = function(){
    scene.restoreActorBase( 'Adalais_act' );;
    scope.yIqxotKelH_14();
};
// chunk LAST
scope.yIqxotKelH_14 = function(){
    scope.JNzDqaBxwz();
};
// ACTION
scope.JNzDqaBxwz = function(){
    player.set( "pop_quiz_location", 'ada' );
    scope.FiNaUoyDgf();
};

// TEXT
scope.pYRNrZFmHx = function(){
    player.set( 'current_in2_node', 'pYRNrZFmHx' );
    var text = `Bookshelf.`;
    core.say( text, scope.YVsFSRWYCb );
};

// pass_fail
scope.YVsFSRWYCb = function(){
    player.set( 'current_in2_node', 'YVsFSRWYCb' );
    var condition = ( function(){ return player.get( 'has_seen_otis_note' ); } )();
    if( condition ){
        player.set( 'current_in2_node', 'XmUOPKtIaA' );
        var text = ``;
        core.say( text, scope.syCBmpPsMc );
    }
    if( !condition ){
        player.set( 'current_in2_node', 'nPuJfEDgtf' );
        var text = ``;
        core.say( text, scope.WMnJcKtfro );
    }
};
// chunk FIRST
scope.syCBmpPsMc = function(){
    scope.syCBmpPsMc_0();
};
// ACTION
scope.syCBmpPsMc_0 = function(){
    scene.startConversation( 'BlackBar', 'black-bar', [ { name: 'port1', anim: 'Ada_normal' } ] );;
    scope.syCBmpPsMc_1();
};

// ACTION
scope.syCBmpPsMc_1 = function(){
    scene.setActor( 'Adalais_act', 137, 74 );;
    scope.syCBmpPsMc_2();
};

// ACTION
scope.syCBmpPsMc_2 = function(){
    scene.setAnimation( 'Adalais_act', 'Ada_actor_classroom1_up' );;
    scope.syCBmpPsMc_3();
};

// ACTION
scope.syCBmpPsMc_3 = function(){
    scene.setConv( 'port1' );;
    scope.syCBmpPsMc_4();
};

// TEXT
scope.syCBmpPsMc_4 = function(){
    player.set( 'current_in2_node', 'syCBmpPsMc_4' );
    var text = `Adalais: This bookshelf is currently empty.  As far as I know, it has always been that way.`;
    core.say( text, scope.syCBmpPsMc_5 );
};

// TEXT
scope.syCBmpPsMc_5 = function(){
    player.set( 'current_in2_node', 'syCBmpPsMc_5' );
    var text = `Adalais: Otis's note said I need to put a book in the bottom shelf.`;
    core.say( text, scope.syCBmpPsMc_6 );
};

// ACTION
scope.syCBmpPsMc_6 = function(){
    scene.endConversation();;
    scope.syCBmpPsMc_7();
};

// ACTION
scope.syCBmpPsMc_7 = function(){
    scene.restoreActorBase( 'Adalais_act' );;
    scope.syCBmpPsMc_8();
};
// chunk LAST
scope.syCBmpPsMc_8 = function(){
    scope.FiNaUoyDgf();
};

// chunk FIRST
scope.WMnJcKtfro = function(){
    scope.WMnJcKtfro_0();
};
// ACTION
scope.WMnJcKtfro_0 = function(){
    scene.startConversation( 'BlackBar', 'black-bar', [ { name: 'port1', anim: 'Ada_normal' } ] );;
    scope.WMnJcKtfro_1();
};

// ACTION
scope.WMnJcKtfro_1 = function(){
    scene.setActor( 'Adalais_act', 137, 74 );;
    scope.WMnJcKtfro_2();
};

// ACTION
scope.WMnJcKtfro_2 = function(){
    scene.setAnimation( 'Adalais_act', 'Ada_actor_classroom1_up' );;
    scope.WMnJcKtfro_3();
};

// ACTION
scope.WMnJcKtfro_3 = function(){
    scene.setConv( 'port1' );;
    scope.WMnJcKtfro_4();
};

// TEXT
scope.WMnJcKtfro_4 = function(){
    player.set( 'current_in2_node', 'WMnJcKtfro_4' );
    var text = `Adalais: This bookshelf is currently empty.  As far as I know, it has always been that way.`;
    core.say( text, scope.WMnJcKtfro_5 );
};

// ACTION
scope.WMnJcKtfro_5 = function(){
    scene.endConversation();;
    scope.WMnJcKtfro_6();
};

// ACTION
scope.WMnJcKtfro_6 = function(){
    scene.restoreActorBase( 'Adalais_act' );;
    scope.WMnJcKtfro_7();
};
// chunk LAST
scope.WMnJcKtfro_7 = function(){
    scope.FiNaUoyDgf();
};
// TEXT
scope.xFaglRAgYk = function(){
    player.set( 'current_in2_node', 'xFaglRAgYk' );
    var text = `Jonathan's desk.`;
    core.say( text, scope.IykHAOiMKx );
};

// pass_fail
scope.IykHAOiMKx = function(){
    player.set( 'current_in2_node', 'IykHAOiMKx' );
    var condition = ( function(){ return player.get( 'phone_location' ) === 'ada' } )();
    if( !condition ){
        player.set( 'current_in2_node', 'hDdxYYbgMm' );
        var text = ``;
        core.say( text, scope.GHmLoYlGBA );
    }
    if( condition ){
        player.set( 'current_in2_node', 'yeSNIssydF' );
        var text = ``;
        core.say( text, scope.tZHkAsJhAQ );
    }
};
// pass_fail
scope.GHmLoYlGBA = function(){
    player.set( 'current_in2_node', 'GHmLoYlGBA' );
    var condition = ( function(){ return player.get( 'has_permission_to_take_cell_phone' ) && player.get( 'cell_phone_location' ) === 'jonathan' } )();
    if( !condition ){
        player.set( 'current_in2_node', 'LhTrZThhWL' );
        var text = ``;
        core.say( text, scope.wHtGFdDukd );
    }
    if( condition ){
        player.set( 'current_in2_node', 'XXqmzikymn' );
        var text = ``;
        core.say( text, scope.UXHePhOYCO );
    }
};
// pass_fail
scope.wHtGFdDukd = function(){
    player.set( 'current_in2_node', 'wHtGFdDukd' );
    var condition = ( function(){ return player.get( 'has_seen_cell_phone' ) } )();
    if( !condition ){
        player.set( 'current_in2_node', 'eiWIhWNiIF' );
        var text = ``;
        core.say( text, scope.QqRSAHACzP );
    }
    if( condition ){
        player.set( 'current_in2_node', 'XgfQUBgzPr' );
        var text = ``;
        core.say( text, scope.ZEdhLiDtnt );
    }
};
// chunk FIRST
scope.QqRSAHACzP = function(){
    scope.QqRSAHACzP_0();
};
// ACTION
scope.QqRSAHACzP_0 = function(){
    scene.startConversation( 'BlackBar', 'black-bar', [ { name: 'port1', anim: 'Ada_normal' } ] );;
    scope.QqRSAHACzP_1();
};

// ACTION
scope.QqRSAHACzP_1 = function(){
    scene.setActor( 'Adalais_act', 293, 175 );;
    scope.QqRSAHACzP_2();
};

// ACTION
scope.QqRSAHACzP_2 = function(){
    scene.setAnimation( 'Adalais_act', 'Ada_actor_classroom1_left' );;
    scope.QqRSAHACzP_3();
};

// ACTION
scope.QqRSAHACzP_3 = function(){
    scene.setConv( 'port1', 'Ada_thoughtful' );;
    scope.QqRSAHACzP_4();
};

// TEXT
scope.QqRSAHACzP_4 = function(){
    player.set( 'current_in2_node', 'QqRSAHACzP_4' );
    var text = `Adalais: This is Jonathan's desk.  I do not really want to invade his privacy by looking at it--`;
    core.say( text, scope.QqRSAHACzP_5 );
};

// ACTION
scope.QqRSAHACzP_5 = function(){
    scene.setConv( 'port1', 'Ada_annoyed' );;
    scope.QqRSAHACzP_6();
};

// TEXT
scope.QqRSAHACzP_6 = function(){
    player.set( 'current_in2_node', 'QqRSAHACzP_6' );
    var text = `Adalais: Wait a second!  Is that a cell phone?  He has a cell phone!?`;
    core.say( text, scope.QqRSAHACzP_7 );
};

// ACTION
scope.QqRSAHACzP_7 = function(){
    scene.setConv( 'port1', 'Ada_angry' );;
    scope.QqRSAHACzP_8();
};

// TEXT
scope.QqRSAHACzP_8 = function(){
    player.set( 'current_in2_node', 'QqRSAHACzP_8' );
    var text = `Adalais: Mother told me I was not allowed to have one until I turned 18! Why does Jonathan get one?!`;
    core.say( text, scope.QqRSAHACzP_9 );
};

// ACTION
scope.QqRSAHACzP_9 = function(){
    scene.endConversation();;
    scope.QqRSAHACzP_10();
};

// ACTION
scope.QqRSAHACzP_10 = function(){
    scene.restoreActorBase( 'Adalais_act' );;
    scope.QqRSAHACzP_11();
};
// chunk LAST
scope.QqRSAHACzP_11 = function(){
    scope.QlNmxaHRwe();
};
// ACTION
scope.QlNmxaHRwe = function(){
    player.set( "has_seen_cell_phone", true );
    scope.FiNaUoyDgf();
};


// chunk FIRST
scope.ZEdhLiDtnt = function(){
    scope.ZEdhLiDtnt_0();
};
// ACTION
scope.ZEdhLiDtnt_0 = function(){
    scene.startConversation( 'BlackBar', 'black-bar', [ { name: 'port1', anim: 'Ada_normal' } ] );;
    scope.ZEdhLiDtnt_1();
};

// ACTION
scope.ZEdhLiDtnt_1 = function(){
    scene.setActor( 'Adalais_act', 293, 175 );;
    scope.ZEdhLiDtnt_2();
};

// ACTION
scope.ZEdhLiDtnt_2 = function(){
    scene.setAnimation( 'Adalais_act', 'Ada_actor_classroom1_left' );;
    scope.ZEdhLiDtnt_3();
};

// ACTION
scope.ZEdhLiDtnt_3 = function(){
    scene.setConv( 'port1', 'Ada_normal' );;
    scope.ZEdhLiDtnt_4();
};

// TEXT
scope.ZEdhLiDtnt_4 = function(){
    player.set( 'current_in2_node', 'ZEdhLiDtnt_4' );
    var text = `Adalais: I hate to admit it, but I am very jealous of Jonathan's phone.`;
    core.say( text, scope.ZEdhLiDtnt_5 );
};

// ACTION
scope.ZEdhLiDtnt_5 = function(){
    scene.endConversation();;
    scope.ZEdhLiDtnt_6();
};

// ACTION
scope.ZEdhLiDtnt_6 = function(){
    scene.restoreActorBase( 'Adalais_act' );;
    scope.ZEdhLiDtnt_7();
};
// chunk LAST
scope.ZEdhLiDtnt_7 = function(){
    scope.FiNaUoyDgf();
};

// chunk FIRST
scope.UXHePhOYCO = function(){
    scope.UXHePhOYCO_0();
};
// ACTION
scope.UXHePhOYCO_0 = function(){
    scene.startConversation( 'BlackBar', 'black-bar', [ { name: 'port1', anim: 'Ada_normal' } ] );;
    scope.UXHePhOYCO_1();
};

// ACTION
scope.UXHePhOYCO_1 = function(){
    scene.setActor( 'Adalais_act', 293, 175 );;
    scope.UXHePhOYCO_2();
};

// ACTION
scope.UXHePhOYCO_2 = function(){
    scene.setAnimation( 'Adalais_act', 'Ada_actor_classroom1_left' );;
    scope.UXHePhOYCO_3();
};

// ACTION
scope.UXHePhOYCO_3 = function(){
    scene.setConv( 'port1', 'Ada_normal' );;
    scope.UXHePhOYCO_4();
};

// TEXT
scope.UXHePhOYCO_4 = function(){
    player.set( 'current_in2_node', 'UXHePhOYCO_4' );
    var text = `Adalais: Jonathan said I could take his phone for now.`;
    core.say( text, scope.UXHePhOYCO_5 );
};

// ACTION
scope.UXHePhOYCO_5 = function(){
    scene.setConv( 'port1', 'invisible' );;
    scope.UXHePhOYCO_6();
};

// TEXT
scope.UXHePhOYCO_6 = function(){
    player.set( 'current_in2_node', 'UXHePhOYCO_6' );
    var text = `...`;
    core.say( text, scope.UXHePhOYCO_7 );
};

// ACTION
scope.UXHePhOYCO_7 = function(){
    scene.setAnimation( 'Phone', 'invisible' );;
    scope.UXHePhOYCO_8();
};

// ACTION
scope.UXHePhOYCO_8 = function(){
    scene.setConv( 'port1', 'Ada_normal' );;
    scope.UXHePhOYCO_9();
};

// TEXT
scope.UXHePhOYCO_9 = function(){
    player.set( 'current_in2_node', 'UXHePhOYCO_9' );
    var text = `Adalais: Okay I have Jonathan's cell phone now.`;
    core.say( text, scope.UXHePhOYCO_10 );
};

// ACTION
scope.UXHePhOYCO_10 = function(){
    scene.endConversation();;
    scope.UXHePhOYCO_11();
};

// ACTION
scope.UXHePhOYCO_11 = function(){
    scene.restoreActorBase( 'Adalais_act' );;
    scope.UXHePhOYCO_12();
};

// ACTION
scope.UXHePhOYCO_12 = function(){
    ;
    scope.UXHePhOYCO_13();
};
// chunk LAST
scope.UXHePhOYCO_13 = function(){
    scope.APrKYfSoBL();
};
// ACTION
scope.APrKYfSoBL = function(){
    player.set( "cell_phone_location", "ada" );
    scope.FiNaUoyDgf();
};


// chunk FIRST
scope.tZHkAsJhAQ = function(){
    scope.tZHkAsJhAQ_0();
};
// ACTION
scope.tZHkAsJhAQ_0 = function(){
    scene.startConversation( 'BlackBar', 'black-bar', [ { name: 'port1', anim: 'Ada_normal' } ] );;
    scope.tZHkAsJhAQ_1();
};

// ACTION
scope.tZHkAsJhAQ_1 = function(){
    scene.setActor( 'Adalais_act', 293, 175 );;
    scope.tZHkAsJhAQ_2();
};

// ACTION
scope.tZHkAsJhAQ_2 = function(){
    scene.setAnimation( 'Adalais_act', 'Ada_actor_classroom1_left' );;
    scope.tZHkAsJhAQ_3();
};

// ACTION
scope.tZHkAsJhAQ_3 = function(){
    scene.setConv( 'port1', 'Ada_normal' );;
    scope.tZHkAsJhAQ_4();
};

// TEXT
scope.tZHkAsJhAQ_4 = function(){
    player.set( 'current_in2_node', 'tZHkAsJhAQ_4' );
    var text = `Adalais: I already got Jonathan's phone from his desk, I do not need to go snooping around there anymore.`;
    core.say( text, scope.tZHkAsJhAQ_5 );
};

// ACTION
scope.tZHkAsJhAQ_5 = function(){
    scene.endConversation();;
    scope.tZHkAsJhAQ_6();
};

// ACTION
scope.tZHkAsJhAQ_6 = function(){
    scene.restoreActorBase( 'Adalais_act' );;
    scope.tZHkAsJhAQ_7();
};
// chunk LAST
scope.tZHkAsJhAQ_7 = function(){
    scope.FiNaUoyDgf();
};
// TEXT
scope.RiyOhfZkVn = function(){
    player.set( 'current_in2_node', 'RiyOhfZkVn' );
    var text = `Mouse pad.`;
    core.say( text, scope.JcwAUwpFfl );
};

// chunk FIRST
scope.JcwAUwpFfl = function(){
    scope.JcwAUwpFfl_0();
};
// ACTION
scope.JcwAUwpFfl_0 = function(){
    scene.startConversation( 'BlackBar', 'black-bar', [ { name: 'port1', anim: 'Ada_normal' } ] );;
    scope.JcwAUwpFfl_1();
};

// ACTION
scope.JcwAUwpFfl_1 = function(){
    scene.setActor( 'Adalais_act', 45, 220 );;
    scope.JcwAUwpFfl_2();
};

// ACTION
scope.JcwAUwpFfl_2 = function(){
    scene.setAnimation( 'Adalais_act', 'Ada_actor_classroom1_left' );;
    scope.JcwAUwpFfl_3();
};

// ACTION
scope.JcwAUwpFfl_3 = function(){
    scene.setConv( 'port1', 'Ada_annoyed' );;
    scope.JcwAUwpFfl_4();
};

// TEXT
scope.JcwAUwpFfl_4 = function(){
    player.set( 'current_in2_node', 'JcwAUwpFfl_4' );
    var text = `Adalais: Last week, Mr. Ralgo brought this mouse pad to the classroom, most likely for 'recreational' purposes.`;
    core.say( text, scope.JcwAUwpFfl_5 );
};

// ACTION
scope.JcwAUwpFfl_5 = function(){
    scene.setConv( 'port1', 'Ada_thoughtful' );;
    scope.JcwAUwpFfl_6();
};

// TEXT
scope.JcwAUwpFfl_6 = function(){
    player.set( 'current_in2_node', 'JcwAUwpFfl_6' );
    var text = `Adalais: I do not really blame him though.  I have heard that it is easier to play FPS games with one.`;
    core.say( text, scope.JcwAUwpFfl_7 );
};

// ACTION
scope.JcwAUwpFfl_7 = function(){
    scene.setConv( 'port1', 'Ada_smug' );;
    scope.JcwAUwpFfl_8();
};

// TEXT
scope.JcwAUwpFfl_8 = function(){
    player.set( 'current_in2_node', 'JcwAUwpFfl_8' );
    var text = `Adalais: I would probably use the same thing if I played those games.`;
    core.say( text, scope.JcwAUwpFfl_9 );
};

// ACTION
scope.JcwAUwpFfl_9 = function(){
    scene.endConversation();;
    scope.JcwAUwpFfl_10();
};

// ACTION
scope.JcwAUwpFfl_10 = function(){
    scene.restoreActorBase( 'Adalais_act' );;
    scope.JcwAUwpFfl_11();
};
// chunk LAST
scope.JcwAUwpFfl_11 = function(){
    scope.FiNaUoyDgf();
};
// TEXT
scope.gpbiTraTaO = function(){
    player.set( 'current_in2_node', 'gpbiTraTaO' );
    var text = `Talk.`;
    core.say( text, scope.HRAmVkAWHL );
};

// choice
scope.HRAmVkAWHL = function(){
    player.set( 'current_in2_node', 'HRAmVkAWHL' );
    var text = `Who should I talk to?`;
    core.choose( text, 'HRAmVkAWHL', [{
        text: `Go back.`,
        cb: scope.HqwEqrEKXE,
        condition: () => { return true; }
    },{
        text: `Jonathan.`,
        cb: scope.oXGMYmXnNw,
        condition: () => { return true; }
    },{
        text: `Mr. Ralgo.`,
        cb: scope.kncOgfgrGb,
        condition: () => { return !player.get( 'music_is_on' ) }
    }]);
};

// TEXT
scope.HqwEqrEKXE = function(){
    player.set( 'current_in2_node', 'HqwEqrEKXE' );
    var text = `Go back.`;
    core.say( text, scope.lsPBRnsedI );
};

// TEXT
scope.oXGMYmXnNw = function(){
    player.set( 'current_in2_node', 'oXGMYmXnNw' );
    var text = `Jonathan.`;
    core.say( text, scope.RkRtkcZHLc );
};

// pass_fail
scope.RkRtkcZHLc = function(){
    player.set( 'current_in2_node', 'RkRtkcZHLc' );
    var condition = ( function(){ return player.get( 'has_talked_to_jonathan' ); } )();
    if( !condition ){
        player.set( 'current_in2_node', 'xRnloJWNJx' );
        var text = ``;
        core.say( text, scope.JepgtglbkG );
    }
    if( condition ){
        player.set( 'current_in2_node', 'zHaopEeOnU' );
        var text = ``;
        core.say( text, scope.pMqcSUZFoG );
    }
};
// chunk FIRST
scope.JepgtglbkG = function(){
    scope.JepgtglbkG_0();
};
// ACTION
scope.JepgtglbkG_0 = function(){
    scene.startConversation( 'BlackBar', 'black-bar', [ { name: 'port1', anim: 'Ada_normal' }, { name: 'port2', anim: 'Jonathan_normal' } ] );;
    scope.JepgtglbkG_1();
};

// ACTION
scope.JepgtglbkG_1 = function(){
    scene.setActor( 'Adalais_act', 85, 100 );;
    scope.JepgtglbkG_2();
};

// ACTION
scope.JepgtglbkG_2 = function(){
    scene.setConv( 'port1', 'Ada_surprised' );;
    scope.JepgtglbkG_3();
};

// TEXT
scope.JepgtglbkG_3 = function(){
    player.set( 'current_in2_node', 'JepgtglbkG_3' );
    var text = `Adalais: "Jonathan?  Why are you still in the classroom?  Class ended a while ago."`;
    core.say( text, scope.JepgtglbkG_4 );
};

// ACTION
scope.JepgtglbkG_4 = function(){
    scene.setConv( 'port2', 'Jonathan_normal' );;
    scope.JepgtglbkG_5();
};

// TEXT
scope.JepgtglbkG_5 = function(){
    player.set( 'current_in2_node', 'JepgtglbkG_5' );
    var text = `Jonathan: "I could ask you the same thing."`;
    core.say( text, scope.JepgtglbkG_6 );
};

// ACTION
scope.JepgtglbkG_6 = function(){
    scene.setConv( 'port1', 'Ada_annoyed' );;
    scope.JepgtglbkG_7();
};

// TEXT
scope.JepgtglbkG_7 = function(){
    player.set( 'current_in2_node', 'JepgtglbkG_7' );
    var text = `Adalais: "I got a bit... distracted, and now I need to take my field trip form to the office."`;
    core.say( text, scope.JepgtglbkG_8 );
};

// ACTION
scope.JepgtglbkG_8 = function(){
    scene.setConv( 'port2', 'Jonathan_normal' );;
    scope.JepgtglbkG_9();
};

// TEXT
scope.JepgtglbkG_9 = function(){
    player.set( 'current_in2_node', 'JepgtglbkG_9' );
    var text = `Jonathan: "So then why aren't you at the office?"`;
    core.say( text, scope.JepgtglbkG_10 );
};

// ACTION
scope.JepgtglbkG_10 = function(){
    scene.setConv( 'port1', 'Ada_normal2' );;
    scope.JepgtglbkG_11();
};

// TEXT
scope.JepgtglbkG_11 = function(){
    player.set( 'current_in2_node', 'JepgtglbkG_11' );
    var text = `Adalais: "Well, for your information we are trapped in this room.  Some dorks have put a vending machine right outside the door."`;
    core.say( text, scope.JepgtglbkG_12 );
};

// ACTION
scope.JepgtglbkG_12 = function(){
    scene.setConv( 'port2', 'Jonathan_normal' );;
    scope.JepgtglbkG_13();
};

// TEXT
scope.JepgtglbkG_13 = function(){
    player.set( 'current_in2_node', 'JepgtglbkG_13' );
    var text = `Jonathan: "Hmm.  I guess we just have to wait for them to move it..."`;
    core.say( text, scope.JepgtglbkG_14 );
};

// ACTION
scope.JepgtglbkG_14 = function(){
    scene.setConv( 'port1', 'Ada_angry' );;
    scope.JepgtglbkG_15();
};

// TEXT
scope.JepgtglbkG_15 = function(){
    player.set( 'current_in2_node', 'JepgtglbkG_15' );
    var text = `Adalais: "You are far too complacent, Jonathan."`;
    core.say( text, scope.JepgtglbkG_16 );
};

// ACTION
scope.JepgtglbkG_16 = function(){
    scene.setConv( '' );;
    scope.JepgtglbkG_17();
};
// chunk LAST
scope.JepgtglbkG_17 = function(){
    scope.iJzfkECUTp();
};
// ACTION
scope.iJzfkECUTp = function(){
    player.set( "has_talked_to_jonathan", true );
    scope.qqBpfnJMSk();
};

// choice
scope.qqBpfnJMSk = function(){
    player.set( 'current_in2_node', 'qqBpfnJMSk' );
    var text = `What should I ask Jonathan about?`;
    core.choose( text, 'qqBpfnJMSk', [{
        text: `Go back.`,
        cb: scope.sbrVrYloNp,
        condition: () => { return true; }
    },{
        text: `What are you doing?`,
        cb: scope.XfzYawWPsw,
        condition: () => { return player.get( 'pop_quiz_location' ) !== 'jonathan' }
    },{
        text: `Can you help me open the window to get out?`,
        cb: scope.TxhsnniLQT,
        condition: () => { return true; }
    },{
        text: `Look at this Pop Quiz.`,
        cb: scope.BrlkMibdqT,
        condition: () => { return player.get( 'pop_quiz_location' ) === 'ada' }
    },{
        text: `Could I borrow your phone?`,
        cb: scope.IzlCWLgCHY,
        condition: () => { return player.get( 'has_asked_about_cell_phone' ) && player.get( 'cell_phone_location' ) === 'jonathan' }
    },{
        text: `About your cell phone?`,
        cb: scope.RGggJFDBwz,
        condition: () => { return player.get( 'has_seen_cell_phone' ) && player.get( 'cell_phone_location' ) === 'jonathan' }
    },{
        text: `Do you want help with your calculus?`,
        cb: scope.FVUoMBXgff,
        condition: () => { return player.get( 'asked_john_about_calculus' ) && player.get( 'pop_quiz_location' ) !== 'jonathan' }
    }]);
};

// TEXT
scope.sbrVrYloNp = function(){
    player.set( 'current_in2_node', 'sbrVrYloNp' );
    var text = `Go back.`;
    core.say( text, scope.StThkCPZKS );
};

// chunk FIRST
scope.StThkCPZKS = function(){
    scope.StThkCPZKS_0();
};
// ACTION
scope.StThkCPZKS_0 = function(){
    scene.setConv( 'port1', 'Ada_normal2' );;
    scope.StThkCPZKS_1();
};

// TEXT
scope.StThkCPZKS_1 = function(){
    player.set( 'current_in2_node', 'StThkCPZKS_1' );
    var text = `Adalais: "Okay, I will be back."`;
    core.say( text, scope.StThkCPZKS_2 );
};

// ACTION
scope.StThkCPZKS_2 = function(){
    scene.endConversation();;
    scope.StThkCPZKS_3();
};

// ACTION
scope.StThkCPZKS_3 = function(){
    scene.restoreActorBase( 'Adalais_act' );;
    scope.StThkCPZKS_4();
};
// chunk LAST
scope.StThkCPZKS_4 = function(){
    scope.lsPBRnsedI();
};
// TEXT
scope.XfzYawWPsw = function(){
    player.set( 'current_in2_node', 'XfzYawWPsw' );
    var text = `What are you doing?`;
    core.say( text, scope.pVtMbEBgJF );
};

// ACTION
scope.pVtMbEBgJF = function(){
    player.set( "asked_john_about_calculus", true );
    scope.RQYKgdzbeg();
};

// chunk FIRST
scope.RQYKgdzbeg = function(){
    scope.RQYKgdzbeg_0();
};
// ACTION
scope.RQYKgdzbeg_0 = function(){
    scene.setConv( 'port1', 'Ada_normal' );;
    scope.RQYKgdzbeg_1();
};

// TEXT
scope.RQYKgdzbeg_1 = function(){
    player.set( 'current_in2_node', 'RQYKgdzbeg_1' );
    var text = `Adalais: "Seriously, what are you still doing here?"`;
    core.say( text, scope.RQYKgdzbeg_2 );
};

// ACTION
scope.RQYKgdzbeg_2 = function(){
    scene.setConv( 'port2', 'Jonathan_normal' );;
    scope.RQYKgdzbeg_3();
};

// TEXT
scope.RQYKgdzbeg_3 = function(){
    player.set( 'current_in2_node', 'RQYKgdzbeg_3' );
    var text = `Jonathan: "Err.  Well it's because I'm kind of struggling to understand this 'calculus' thing."`;
    core.say( text, scope.RQYKgdzbeg_4 );
};

// ACTION
scope.RQYKgdzbeg_4 = function(){
    scene.setConv( 'port2', 'Jonathan_worried' );;
    scope.RQYKgdzbeg_5();
};

// TEXT
scope.RQYKgdzbeg_5 = function(){
    player.set( 'current_in2_node', 'RQYKgdzbeg_5' );
    var text = `Jonathan: "I keep trying and trying but none of it makes any sense..."`;
    core.say( text, scope.RQYKgdzbeg_6 );
};

// ACTION
scope.RQYKgdzbeg_6 = function(){
    scene.setConv( 'port2', 'Jonathan_normal' );;
    scope.RQYKgdzbeg_7();
};

// TEXT
scope.RQYKgdzbeg_7 = function(){
    player.set( 'current_in2_node', 'RQYKgdzbeg_7' );
    var text = `Jonathan: "So I decided to stay after class to see if I could somehow absorb it a bit better."`;
    core.say( text, scope.RQYKgdzbeg_8 );
};

// ACTION
scope.RQYKgdzbeg_8 = function(){
    scene.setConv( 'port1', 'Ada_normal' );;
    scope.RQYKgdzbeg_9();
};

// TEXT
scope.RQYKgdzbeg_9 = function(){
    player.set( 'current_in2_node', 'RQYKgdzbeg_9' );
    var text = `Adalais: "How is that working out for you?"`;
    core.say( text, scope.RQYKgdzbeg_10 );
};

// ACTION
scope.RQYKgdzbeg_10 = function(){
    scene.setConv( 'port2', 'Jonathan_normal' );;
    scope.RQYKgdzbeg_11();
};

// TEXT
scope.RQYKgdzbeg_11 = function(){
    player.set( 'current_in2_node', 'RQYKgdzbeg_11' );
    var text = `Jonathan: "Not too well, Ada."`;
    core.say( text, scope.RQYKgdzbeg_12 );
};

// ACTION
scope.RQYKgdzbeg_12 = function(){
    scene.setConv( '' );;
    scope.RQYKgdzbeg_13();
};
// chunk LAST
scope.RQYKgdzbeg_13 = function(){
    scope.qqBpfnJMSk();
};
// TEXT
scope.TxhsnniLQT = function(){
    player.set( 'current_in2_node', 'TxhsnniLQT' );
    var text = `Can you help me open the window to get out?`;
    core.say( text, scope.CsGSIUBFdi );
};

// pass_fail
scope.CsGSIUBFdi = function(){
    player.set( 'current_in2_node', 'CsGSIUBFdi' );
    var condition = ( function(){ return player.get( 'pop_quiz_location' ) === 'jonathan' } )();
    if( !condition ){
        player.set( 'current_in2_node', 'ZGczWqpfIo' );
        var text = ``;
        core.say( text, scope.FDkKGwigzh );
    }
    if( condition ){
        player.set( 'current_in2_node', 'sbBhTTtgFd' );
        var text = ``;
        core.say( text, scope.qucILGZomx );
    }
};
// ACTION
scope.FDkKGwigzh = function(){
    player.set( "asked_john_about_calculus", true );
    scope.UfgnPCskJU();
};

// chunk FIRST
scope.UfgnPCskJU = function(){
    scope.UfgnPCskJU_0();
};
// ACTION
scope.UfgnPCskJU_0 = function(){
    scene.setConv( 'port1', 'Ada_normal' );;
    scope.UfgnPCskJU_1();
};

// TEXT
scope.UfgnPCskJU_1 = function(){
    player.set( 'current_in2_node', 'UfgnPCskJU_1' );
    var text = `Adalais: "I need you to help me open up the window over there so I can escape this room."`;
    core.say( text, scope.UfgnPCskJU_2 );
};

// ACTION
scope.UfgnPCskJU_2 = function(){
    scene.setConv( 'port2', 'Jonathan_normal' );;
    scope.UfgnPCskJU_3();
};

// TEXT
scope.UfgnPCskJU_3 = function(){
    player.set( 'current_in2_node', 'UfgnPCskJU_3' );
    var text = `Jonathan: "Normally I would Ada, but I really need to study this 'calculus' thing.  There might be a quiz on it soon."`;
    core.say( text, scope.UfgnPCskJU_4 );
};

// ACTION
scope.UfgnPCskJU_4 = function(){
    scene.setConv( 'port1', 'Ada_normal' );;
    scope.UfgnPCskJU_5();
};

// TEXT
scope.UfgnPCskJU_5 = function(){
    player.set( 'current_in2_node', 'UfgnPCskJU_5' );
    var text = `Adalais: (geez it is not that difficult...)`;
    core.say( text, scope.UfgnPCskJU_6 );
};

// ACTION
scope.UfgnPCskJU_6 = function(){
    scene.setConv( '' );;
    scope.UfgnPCskJU_7();
};
// chunk LAST
scope.UfgnPCskJU_7 = function(){
    scope.qqBpfnJMSk();
};

// ACTION
scope.qucILGZomx = function(){
    player.set( "john_will_open_window", true );
    scope.UXZEuJtTlg();
};

// chunk FIRST
scope.UXZEuJtTlg = function(){
    scope.UXZEuJtTlg_0();
};
// ACTION
scope.UXZEuJtTlg_0 = function(){
    scene.setConv( 'port1', 'Ada_normal' );;
    scope.UXZEuJtTlg_1();
};

// TEXT
scope.UXZEuJtTlg_1 = function(){
    player.set( 'current_in2_node', 'UXZEuJtTlg_1' );
    var text = `Adalais: "Can you help me open the window now?"`;
    core.say( text, scope.UXZEuJtTlg_2 );
};

// ACTION
scope.UXZEuJtTlg_2 = function(){
    scene.setConv( 'port2', 'Jonathan_normal' );;
    scope.UXZEuJtTlg_3();
};

// TEXT
scope.UXZEuJtTlg_3 = function(){
    player.set( 'current_in2_node', 'UXZEuJtTlg_3' );
    var text = `Jonathan: "Certainly, just head over there and I can help you out."`;
    core.say( text, scope.UXZEuJtTlg_4 );
};

// ACTION
scope.UXZEuJtTlg_4 = function(){
    scene.setConv( '' );;
    scope.UXZEuJtTlg_5();
};
// chunk LAST
scope.UXZEuJtTlg_5 = function(){
    scope.qqBpfnJMSk();
};
// TEXT
scope.BrlkMibdqT = function(){
    player.set( 'current_in2_node', 'BrlkMibdqT' );
    var text = `Look at this Pop Quiz.`;
    core.say( text, scope.wrmioZCUPf );
};

// ACTION
scope.wrmioZCUPf = function(){
    player.set( "pop_quiz_location", 'jonathan' );
    scope.RfyKQHPfhq();
};

// chunk FIRST
scope.RfyKQHPfhq = function(){
    scope.RfyKQHPfhq_0();
};
// ACTION
scope.RfyKQHPfhq_0 = function(){
    scene.setConv( 'port1', 'Ada_normal2' );;
    scope.RfyKQHPfhq_1();
};

// TEXT
scope.RfyKQHPfhq_1 = function(){
    player.set( 'current_in2_node', 'RfyKQHPfhq_1' );
    var text = `Adalais: "Jonathan, I have something that might help you."`;
    core.say( text, scope.RfyKQHPfhq_2 );
};

// ACTION
scope.RfyKQHPfhq_2 = function(){
    scene.setConv( 'port2', 'Jonathan_normal' );;
    scope.RfyKQHPfhq_3();
};

// TEXT
scope.RfyKQHPfhq_3 = function(){
    player.set( 'current_in2_node', 'RfyKQHPfhq_3' );
    var text = `Jonathan: "Oh yeah?  What's that?"`;
    core.say( text, scope.RfyKQHPfhq_4 );
};

// ACTION
scope.RfyKQHPfhq_4 = function(){
    scene.setConv( 'port1', 'Ada_normal2' );;
    scope.RfyKQHPfhq_5();
};

// TEXT
scope.RfyKQHPfhq_5 = function(){
    player.set( 'current_in2_node', 'RfyKQHPfhq_5' );
    var text = `Adalais: "I have this Pop Quiz that Mr. Ralgo was planning to give tomorrow.  I think you might want to take a look at it."`;
    core.say( text, scope.RfyKQHPfhq_6 );
};

// ACTION
scope.RfyKQHPfhq_6 = function(){
    scene.setConv( 'port2', 'Jonathan_normal' );;
    scope.RfyKQHPfhq_7();
};

// TEXT
scope.RfyKQHPfhq_7 = function(){
    player.set( 'current_in2_node', 'RfyKQHPfhq_7' );
    var text = `Jonathan: "Wha... Where did you get that?!"`;
    core.say( text, scope.RfyKQHPfhq_8 );
};

// ACTION
scope.RfyKQHPfhq_8 = function(){
    scene.setConv( 'port1', 'Ada_thoughtful' );;
    scope.RfyKQHPfhq_9();
};

// TEXT
scope.RfyKQHPfhq_9 = function(){
    player.set( 'current_in2_node', 'RfyKQHPfhq_9' );
    var text = `Adalais: "Oh I have my ways."`;
    core.say( text, scope.RfyKQHPfhq_10 );
};

// ACTION
scope.RfyKQHPfhq_10 = function(){
    scene.setConv( 'port1', 'Ada_normal2' );;
    scope.RfyKQHPfhq_11();
};

// TEXT
scope.RfyKQHPfhq_11 = function(){
    player.set( 'current_in2_node', 'RfyKQHPfhq_11' );
    var text = `Adalais: "You can have it, as long as you help me get outside this classroom."`;
    core.say( text, scope.RfyKQHPfhq_12 );
};

// ACTION
scope.RfyKQHPfhq_12 = function(){
    scene.setConv( 'port2', 'Jonathan_normal' );;
    scope.RfyKQHPfhq_13();
};

// TEXT
scope.RfyKQHPfhq_13 = function(){
    player.set( 'current_in2_node', 'RfyKQHPfhq_13' );
    var text = `Jonathan: "You've got a deal!"`;
    core.say( text, scope.RfyKQHPfhq_14 );
};

// ACTION
scope.RfyKQHPfhq_14 = function(){
    scene.setConv( '' );;
    scope.RfyKQHPfhq_15();
};
// chunk LAST
scope.RfyKQHPfhq_15 = function(){
    scope.qqBpfnJMSk();
};
// TEXT
scope.IzlCWLgCHY = function(){
    player.set( 'current_in2_node', 'IzlCWLgCHY' );
    var text = `Could I borrow your phone?`;
    core.say( text, scope.SgqEQRngoS );
};

// ACTION
scope.SgqEQRngoS = function(){
    player.set( "has_permission_to_take_cell_phone", true );
    scope.rntAgVbbos();
};

// chunk FIRST
scope.rntAgVbbos = function(){
    scope.rntAgVbbos_0();
};
// ACTION
scope.rntAgVbbos_0 = function(){
    scene.setConv( 'port1', 'Ada_normal2' );;
    scope.rntAgVbbos_1();
};

// TEXT
scope.rntAgVbbos_1 = function(){
    player.set( 'current_in2_node', 'rntAgVbbos_1' );
    var text = `Adalais: "Could I borrow your phone?"`;
    core.say( text, scope.rntAgVbbos_2 );
};

// ACTION
scope.rntAgVbbos_2 = function(){
    scene.setConv( 'port2', 'Jonathan_normal' );;
    scope.rntAgVbbos_3();
};

// TEXT
scope.rntAgVbbos_3 = function(){
    player.set( 'current_in2_node', 'rntAgVbbos_3' );
    var text = `Jonathan: "My phone?  You want to borrow it?  Ya sure I guess."`;
    core.say( text, scope.rntAgVbbos_4 );
};

// ACTION
scope.rntAgVbbos_4 = function(){
    scene.setConv( 'port2', 'Jonathan_normal' );;
    scope.rntAgVbbos_5();
};

// TEXT
scope.rntAgVbbos_5 = function(){
    player.set( 'current_in2_node', 'rntAgVbbos_5' );
    var text = `Jonathan: "Like I said, I don't really plan to use it until I need to leave here."`;
    core.say( text, scope.rntAgVbbos_6 );
};

// ACTION
scope.rntAgVbbos_6 = function(){
    scene.setConv( 'port2', 'Jonathan_normal' );;
    scope.rntAgVbbos_7();
};

// TEXT
scope.rntAgVbbos_7 = function(){
    player.set( 'current_in2_node', 'rntAgVbbos_7' );
    var text = `Jonathan: "Just don't lose it, okay?"`;
    core.say( text, scope.rntAgVbbos_8 );
};

// ACTION
scope.rntAgVbbos_8 = function(){
    scene.setConv( 'port1', 'Ada_surprised' );;
    scope.rntAgVbbos_9();
};

// TEXT
scope.rntAgVbbos_9 = function(){
    player.set( 'current_in2_node', 'rntAgVbbos_9' );
    var text = `Adalais: "Thanks!"`;
    core.say( text, scope.rntAgVbbos_10 );
};

// ACTION
scope.rntAgVbbos_10 = function(){
    scene.setConv( '' );;
    scope.rntAgVbbos_11();
};
// chunk LAST
scope.rntAgVbbos_11 = function(){
    scope.qqBpfnJMSk();
};
// TEXT
scope.RGggJFDBwz = function(){
    player.set( 'current_in2_node', 'RGggJFDBwz' );
    var text = `Do you own a cell phone?`;
    core.say( text, scope.qQufhyCdby );
};

// ACTION
scope.qQufhyCdby = function(){
    player.set( "has_asked_about_cell_phone", true );
    scope.eIFBtkhgGg();
};

// chunk FIRST
scope.eIFBtkhgGg = function(){
    scope.eIFBtkhgGg_0();
};
// ACTION
scope.eIFBtkhgGg_0 = function(){
    scene.setConv( 'port1', 'Ada_normal2' );;
    scope.eIFBtkhgGg_1();
};

// TEXT
scope.eIFBtkhgGg_1 = function(){
    player.set( 'current_in2_node', 'eIFBtkhgGg_1' );
    var text = `Adalais: "Jonathan, I was just looking in your desk and I saw a cell phone.  Is that really yours?"`;
    core.say( text, scope.eIFBtkhgGg_2 );
};

// ACTION
scope.eIFBtkhgGg_2 = function(){
    scene.setConv( 'port2', 'Jonathan_normal' );;
    scope.eIFBtkhgGg_3();
};

// TEXT
scope.eIFBtkhgGg_3 = function(){
    player.set( 'current_in2_node', 'eIFBtkhgGg_3' );
    var text = `Jonathan: "Um... Yes?  That's mine.  I got one this year so I could call my parents to come pick me up whenever I stay late."`;
    core.say( text, scope.eIFBtkhgGg_4 );
};

// ACTION
scope.eIFBtkhgGg_4 = function(){
    scene.setConv( 'port2', 'Jonathan_normal' );;
    scope.eIFBtkhgGg_5();
};

// TEXT
scope.eIFBtkhgGg_5 = function(){
    player.set( 'current_in2_node', 'eIFBtkhgGg_5' );
    var text = `Jonathan: "I tend to stay after school a lot these days..."`;
    core.say( text, scope.eIFBtkhgGg_6 );
};

// ACTION
scope.eIFBtkhgGg_6 = function(){
    scene.setConv( 'port2', 'Jonathan_normal' );;
    scope.eIFBtkhgGg_7();
};

// TEXT
scope.eIFBtkhgGg_7 = function(){
    player.set( 'current_in2_node', 'eIFBtkhgGg_7' );
    var text = `Jonathan: "I also put all my music on it, you know, like most people do."`;
    core.say( text, scope.eIFBtkhgGg_8 );
};

// ACTION
scope.eIFBtkhgGg_8 = function(){
    scene.setConv( 'port2', 'Jonathan_normal' );;
    scope.eIFBtkhgGg_9();
};

// TEXT
scope.eIFBtkhgGg_9 = function(){
    player.set( 'current_in2_node', 'eIFBtkhgGg_9' );
    var text = `Jonathan: "But other than that, I don't really use it.  I'm not really into that whole 'internet' thing."`;
    core.say( text, scope.eIFBtkhgGg_10 );
};

// ACTION
scope.eIFBtkhgGg_10 = function(){
    scene.setConv( 'port1', 'Ada_angry' );;
    scope.eIFBtkhgGg_11();
};

// TEXT
scope.eIFBtkhgGg_11 = function(){
    player.set( 'current_in2_node', 'eIFBtkhgGg_11' );
    var text = `Adalais: (Oh Jonathan... Perhaps I should not press further; I may need his help later.)`;
    core.say( text, scope.eIFBtkhgGg_12 );
};

// ACTION
scope.eIFBtkhgGg_12 = function(){
    scene.setConv( 'port1', 'Ada_surprised' );;
    scope.eIFBtkhgGg_13();
};

// TEXT
scope.eIFBtkhgGg_13 = function(){
    player.set( 'current_in2_node', 'eIFBtkhgGg_13' );
    var text = `Adalais: "I suppose that makes sense."`;
    core.say( text, scope.eIFBtkhgGg_14 );
};

// ACTION
scope.eIFBtkhgGg_14 = function(){
    scene.setConv( '' );;
    scope.eIFBtkhgGg_15();
};
// chunk LAST
scope.eIFBtkhgGg_15 = function(){
    scope.qqBpfnJMSk();
};
// TEXT
scope.FVUoMBXgff = function(){
    player.set( 'current_in2_node', 'FVUoMBXgff' );
    var text = `Do you want help with your calculus?`;
    core.say( text, scope.kzWmduniWf );
};

// chunk FIRST
scope.kzWmduniWf = function(){
    scope.kzWmduniWf_0();
};
// ACTION
scope.kzWmduniWf_0 = function(){
    scene.setConv( 'port1', 'Ada_thoughtful' );;
    scope.kzWmduniWf_1();
};

// TEXT
scope.kzWmduniWf_1 = function(){
    player.set( 'current_in2_node', 'kzWmduniWf_1' );
    var text = `Adalais: (Umm. I do not have time at the moment to help him.)`;
    core.say( text, scope.kzWmduniWf_2 );
};

// ACTION
scope.kzWmduniWf_2 = function(){
    scene.setConv( 'port1', 'Ada_normal2' );;
    scope.kzWmduniWf_3();
};

// TEXT
scope.kzWmduniWf_3 = function(){
    player.set( 'current_in2_node', 'kzWmduniWf_3' );
    var text = `Adalais: "I would help you, but I am in a hurry to get out of this room."`;
    core.say( text, scope.kzWmduniWf_4 );
};

// ACTION
scope.kzWmduniWf_4 = function(){
    scene.setConv( 'port2', 'Jonathan_normal' );;
    scope.kzWmduniWf_5();
};

// TEXT
scope.kzWmduniWf_5 = function(){
    player.set( 'current_in2_node', 'kzWmduniWf_5' );
    var text = `Jonathan: "Oh, well thanks anyway."`;
    core.say( text, scope.kzWmduniWf_6 );
};

// ACTION
scope.kzWmduniWf_6 = function(){
    scene.setConv( '' );;
    scope.kzWmduniWf_7();
};
// chunk LAST
scope.kzWmduniWf_7 = function(){
    scope.qqBpfnJMSk();
};

// chunk FIRST
scope.pMqcSUZFoG = function(){
    scope.pMqcSUZFoG_0();
};
// ACTION
scope.pMqcSUZFoG_0 = function(){
    scene.startConversation( 'BlackBar', 'black-bar', [ { name: 'port1', anim: 'Ada_normal' }, { name: 'port2', anim: 'Jonathan_normal' } ] );;
    scope.pMqcSUZFoG_1();
};

// ACTION
scope.pMqcSUZFoG_1 = function(){
    scene.setActor( 'Adalais_act', 50, 100 );;
    scope.pMqcSUZFoG_2();
};

// ACTION
scope.pMqcSUZFoG_2 = function(){
    scene.setConv( 'port2' );;
    scope.pMqcSUZFoG_3();
};

// TEXT
scope.pMqcSUZFoG_3 = function(){
    player.set( 'current_in2_node', 'pMqcSUZFoG_3' );
    var text = `Jonathan: "Oh, hi Ada."`;
    core.say( text, scope.pMqcSUZFoG_4 );
};

// ACTION
scope.pMqcSUZFoG_4 = function(){
    scene.setConv( '' );;
    scope.pMqcSUZFoG_5();
};
// chunk LAST
scope.pMqcSUZFoG_5 = function(){
    scope.qqBpfnJMSk();
};
// TEXT
scope.kncOgfgrGb = function(){
    player.set( 'current_in2_node', 'kncOgfgrGb' );
    var text = `Mr. Ralgo.`;
    core.say( text, scope.qXqkDKkUJi );
};

// chunk FIRST
scope.qXqkDKkUJi = function(){
    scope.qXqkDKkUJi_0();
};
// ACTION
scope.qXqkDKkUJi_0 = function(){
    scene.startConversation( 'BlackBar', 'black-bar', [ { name: 'port1', anim: 'Ada_normal' }, { name: 'port2', anim: 'Ralgo_normal' } ] );;
    scope.qXqkDKkUJi_1();
};

// ACTION
scope.qXqkDKkUJi_1 = function(){
    scene.setActor( 'Adalais_act', 288, 101 );;
    scope.qXqkDKkUJi_2();
};

// ACTION
scope.qXqkDKkUJi_2 = function(){
    scene.setAnimation( 'Adalais_act', 'Ada_actor_classroom1_up' );;
    scope.qXqkDKkUJi_3();
};

// ACTION
scope.qXqkDKkUJi_3 = function(){
    scene.setConv( 'port2' );;
    scope.qXqkDKkUJi_4();
};

// TEXT
scope.qXqkDKkUJi_4 = function(){
    player.set( 'current_in2_node', 'qXqkDKkUJi_4' );
    var text = `Jonathan: "What do you want Ada? I'm busy right now."`;
    core.say( text, scope.qXqkDKkUJi_5 );
};

// ACTION
scope.qXqkDKkUJi_5 = function(){
    scene.setConv( '' );;
    scope.qXqkDKkUJi_6();
};
// chunk LAST
scope.qXqkDKkUJi_6 = function(){
    scope.fuGCRtNPfB();
};
// choice
scope.fuGCRtNPfB = function(){
    player.set( 'current_in2_node', 'fuGCRtNPfB' );
    var text = `${scene.setAnimation( 'Calculus', 'invisible' ),''}What should I ask Mr. Ralgo about?`;
    core.choose( text, 'fuGCRtNPfB', [{
        text: `Go back.`,
        cb: scope.HNbeIgzAnE,
        condition: () => { return true; }
    },{
        text: `About your speakers...`,
        cb: scope.uTfwZDyPgf,
        condition: () => { return player.get( 'has_examined_teacher_desk' ) }
    },{
        text: `Do you have the key to the A/V room?`,
        cb: scope.MRgoizrweL,
        condition: () => { return player.get( 'has_examined_av_room_door' ) && player.get( 'av_key_location' ) === 'ralgo' }
    },{
        text: `We are stuck in this classroom.`,
        cb: scope.adFwIhTsOg,
        condition: () => { return true; }
    },{
        text: `You do not look that busy.`,
        cb: scope.wtbuEDSMul,
        condition: () => { return true; }
    },{
        text: `Give me a calculus question.`,
        cb: scope.MWYzMGNQzp,
        condition: () => { return player.get( 'has_asked_ralgo_about_av_key' ) && player.get( 'av_key_location' ) === 'ralgo' }
    }]);
};

// TEXT
scope.HNbeIgzAnE = function(){
    player.set( 'current_in2_node', 'HNbeIgzAnE' );
    var text = `Go back.`;
    core.say( text, scope.nUKOrnMUqu );
};

// chunk FIRST
scope.nUKOrnMUqu = function(){
    scope.nUKOrnMUqu_0();
};
// ACTION
scope.nUKOrnMUqu_0 = function(){
    scene.endConversation();;
    scope.nUKOrnMUqu_1();
};

// ACTION
scope.nUKOrnMUqu_1 = function(){
    scene.restoreActorBase('Adalais_act');;
    scope.nUKOrnMUqu_2();
};
// chunk LAST
scope.nUKOrnMUqu_2 = function(){
    scope.lsPBRnsedI();
};
// TEXT
scope.uTfwZDyPgf = function(){
    player.set( 'current_in2_node', 'uTfwZDyPgf' );
    var text = `About your speakers...`;
    core.say( text, scope.pIMOkYNgBc );
};

// chunk FIRST
scope.pIMOkYNgBc = function(){
    scope.pIMOkYNgBc_0();
};
// ACTION
scope.pIMOkYNgBc_0 = function(){
    scene.setConv( 'port1', 'Ada_normal2' );;
    scope.pIMOkYNgBc_1();
};

// TEXT
scope.pIMOkYNgBc_1 = function(){
    player.set( 'current_in2_node', 'pIMOkYNgBc_1' );
    var text = `Adalais: "Why did you bring your 2.1 stereo speakers into class?  You did not use them today."`;
    core.say( text, scope.pIMOkYNgBc_2 );
};

// ACTION
scope.pIMOkYNgBc_2 = function(){
    scene.setConv( 'port2', 'Ralgo_normal' );;
    scope.pIMOkYNgBc_3();
};

// TEXT
scope.pIMOkYNgBc_3 = function(){
    player.set( 'current_in2_node', 'pIMOkYNgBc_3' );
    var text = `Mr. Ralgo: "I was planning to play some soothing music during my lecture, but I forgot aux cable for them, so they're basically useless."`;
    core.say( text, scope.pIMOkYNgBc_4 );
};

// ACTION
scope.pIMOkYNgBc_4 = function(){
    scene.setConv( 'port1', 'Ada_thoughtful' );;
    scope.pIMOkYNgBc_5();
};

// TEXT
scope.pIMOkYNgBc_5 = function(){
    player.set( 'current_in2_node', 'pIMOkYNgBc_5' );
    var text = `Adalais: "Did you check the A/V closet for one?`;
    core.say( text, scope.pIMOkYNgBc_6 );
};

// ACTION
scope.pIMOkYNgBc_6 = function(){
    scene.setConv( 'port2', 'Ralgo_normal' );;
    scope.pIMOkYNgBc_7();
};

// TEXT
scope.pIMOkYNgBc_7 = function(){
    player.set( 'current_in2_node', 'pIMOkYNgBc_7' );
    var text = `Mr. Ralgo: "Nah I've been too busy all day to bother looking."`;
    core.say( text, scope.pIMOkYNgBc_8 );
};

// ACTION
scope.pIMOkYNgBc_8 = function(){
    scene.setConv( 'port1', 'Ada_annoyed' );;
    scope.pIMOkYNgBc_9();
};

// TEXT
scope.pIMOkYNgBc_9 = function(){
    player.set( 'current_in2_node', 'pIMOkYNgBc_9' );
    var text = `Adalais: (But the A/V closet is right across the room... Clearly he is not telling the full truth.)`;
    core.say( text, scope.pIMOkYNgBc_10 );
};

// ACTION
scope.pIMOkYNgBc_10 = function(){
    scene.setConv( '' );;
    scope.pIMOkYNgBc_11();
};
// chunk LAST
scope.pIMOkYNgBc_11 = function(){
    scope.fuGCRtNPfB();
};
// TEXT
scope.MRgoizrweL = function(){
    player.set( 'current_in2_node', 'MRgoizrweL' );
    var text = `Do you have the key to the A/V room?`;
    core.say( text, scope.tLZkWcHVMd );
};

// chunk FIRST
scope.tLZkWcHVMd = function(){
    scope.tLZkWcHVMd_0();
};
// ACTION
scope.tLZkWcHVMd_0 = function(){
    scene.setConv( 'port1', 'Ada_normal2' );;
    scope.tLZkWcHVMd_1();
};

// TEXT
scope.tLZkWcHVMd_1 = function(){
    player.set( 'current_in2_node', 'tLZkWcHVMd_1' );
    var text = `Adalais: "Do you have the key to the storage room?"`;
    core.say( text, scope.tLZkWcHVMd_2 );
};

// ACTION
scope.tLZkWcHVMd_2 = function(){
    scene.setConv( 'port2', 'Ralgo_normal' );;
    scope.tLZkWcHVMd_3();
};

// TEXT
scope.tLZkWcHVMd_3 = function(){
    player.set( 'current_in2_node', 'tLZkWcHVMd_3' );
    var text = `Mr. Ralgo: "The storage room?  Is it locked?"`;
    core.say( text, scope.tLZkWcHVMd_4 );
};

// ACTION
scope.tLZkWcHVMd_4 = function(){
    scene.setConv( 'port1', 'Ada_angry' );;
    scope.tLZkWcHVMd_5();
};

// TEXT
scope.tLZkWcHVMd_5 = function(){
    player.set( 'current_in2_node', 'tLZkWcHVMd_5' );
    var text = `Adalais: "Yes, and I would like the key so that I may open it."`;
    core.say( text, scope.tLZkWcHVMd_6 );
};

// ACTION
scope.tLZkWcHVMd_6 = function(){
    scene.setConv( 'port2', 'Ralgo_normal' );;
    scope.tLZkWcHVMd_7();
};

// TEXT
scope.tLZkWcHVMd_7 = function(){
    player.set( 'current_in2_node', 'tLZkWcHVMd_7' );
    var text = `Mr. Ralgo: "How odd... I didn't lock it.  I wonder who did..."`;
    core.say( text, scope.tLZkWcHVMd_8 );
};

// ACTION
scope.tLZkWcHVMd_8 = function(){
    scene.setConv( 'port2', 'Ralgo_normal' );;
    scope.tLZkWcHVMd_9();
};

// TEXT
scope.tLZkWcHVMd_9 = function(){
    player.set( 'current_in2_node', 'tLZkWcHVMd_9' );
    var text = `Mr. Ralgo: "But you want the key to that room?"`;
    core.say( text, scope.tLZkWcHVMd_10 );
};

// ACTION
scope.tLZkWcHVMd_10 = function(){
    scene.setConv( 'port2', 'Ralgo_normal' );;
    scope.tLZkWcHVMd_11();
};

// TEXT
scope.tLZkWcHVMd_11 = function(){
    player.set( 'current_in2_node', 'tLZkWcHVMd_11' );
    var text = `Mr. Ralgo: "Yeah I guess I could give you the key, but only if you show me that you were listening to my lecture today."`;
    core.say( text, scope.tLZkWcHVMd_12 );
};

// ACTION
scope.tLZkWcHVMd_12 = function(){
    scene.setConv( 'port1', 'Ada_angry' );;
    scope.tLZkWcHVMd_13();
};

// TEXT
scope.tLZkWcHVMd_13 = function(){
    player.set( 'current_in2_node', 'tLZkWcHVMd_13' );
    var text = `Adalais: "Ugh, do we really have to do this?"`;
    core.say( text, scope.tLZkWcHVMd_14 );
};

// ACTION
scope.tLZkWcHVMd_14 = function(){
    scene.setConv( 'port2', 'Ralgo_normal' );;
    scope.tLZkWcHVMd_15();
};

// TEXT
scope.tLZkWcHVMd_15 = function(){
    player.set( 'current_in2_node', 'tLZkWcHVMd_15' );
    var text = `Mr. Ralgo: "Yep.  You can't expect everything to just be handed to you for free.  The sooner you learn that, the better."`;
    core.say( text, scope.tLZkWcHVMd_16 );
};

// ACTION
scope.tLZkWcHVMd_16 = function(){
    scene.setConv( 'port1', 'Ada_angry' );;
    scope.tLZkWcHVMd_17();
};

// TEXT
scope.tLZkWcHVMd_17 = function(){
    player.set( 'current_in2_node', 'tLZkWcHVMd_17' );
    var text = `Adalais: "Fine... What do you need me to do?"`;
    core.say( text, scope.tLZkWcHVMd_18 );
};

// ACTION
scope.tLZkWcHVMd_18 = function(){
    scene.setConv( 'port2', 'Ralgo_normal' );;
    scope.tLZkWcHVMd_19();
};

// TEXT
scope.tLZkWcHVMd_19 = function(){
    player.set( 'current_in2_node', 'tLZkWcHVMd_19' );
    var text = `Mr. Ralgo: "Answer two questions I have for you - all of them will be about calculus - and you can have the key to the store room."`;
    core.say( text, scope.tLZkWcHVMd_20 );
};

// ACTION
scope.tLZkWcHVMd_20 = function(){
    scene.setConv( 'port2', 'Ralgo_normal' );;
    scope.tLZkWcHVMd_21();
};

// TEXT
scope.tLZkWcHVMd_21 = function(){
    player.set( 'current_in2_node', 'tLZkWcHVMd_21' );
    var text = `Mr. Ralgo: "Of course, you have to answer the questions correctly.  That should go without saying."`;
    core.say( text, scope.tLZkWcHVMd_22 );
};

// ACTION
scope.tLZkWcHVMd_22 = function(){
    scene.setConv( '' );;
    scope.tLZkWcHVMd_23();
};
// chunk LAST
scope.tLZkWcHVMd_23 = function(){
    scope.QxsuZhiIbn();
};
// ACTION
scope.QxsuZhiIbn = function(){
    player.set( "has_asked_ralgo_about_av_key", true );
    scope.fuGCRtNPfB();
};

// TEXT
scope.adFwIhTsOg = function(){
    player.set( 'current_in2_node', 'adFwIhTsOg' );
    var text = `We are stuck in this classroom.`;
    core.say( text, scope.bsPSyWGNbX );
};

// chunk FIRST
scope.bsPSyWGNbX = function(){
    scope.bsPSyWGNbX_0();
};
// ACTION
scope.bsPSyWGNbX_0 = function(){
    scene.setConv( 'port1', 'Ada_normal2' );;
    scope.bsPSyWGNbX_1();
};

// TEXT
scope.bsPSyWGNbX_1 = function(){
    player.set( 'current_in2_node', 'bsPSyWGNbX_1' );
    var text = `Adalais: "Mr. Ralgo, we are currently stuck in this classroom.  Someone has blocked the door."`;
    core.say( text, scope.bsPSyWGNbX_2 );
};

// ACTION
scope.bsPSyWGNbX_2 = function(){
    scene.setConv( 'port2', 'Ralgo_normal' );;
    scope.bsPSyWGNbX_3();
};

// TEXT
scope.bsPSyWGNbX_3 = function(){
    player.set( 'current_in2_node', 'bsPSyWGNbX_3' );
    var text = `Mr. Ralgo: "Oh are we?  That's really too bad."`;
    core.say( text, scope.bsPSyWGNbX_4 );
};

// ACTION
scope.bsPSyWGNbX_4 = function(){
    scene.setConv( 'port1', 'Ada_annoyed' );;
    scope.bsPSyWGNbX_5();
};

// TEXT
scope.bsPSyWGNbX_5 = function(){
    player.set( 'current_in2_node', 'bsPSyWGNbX_5' );
    var text = `Adalais: (I suppose Mr. Ralgo is too 'busy' to care about much right now...)`;
    core.say( text, scope.bsPSyWGNbX_6 );
};

// ACTION
scope.bsPSyWGNbX_6 = function(){
    scene.setConv( '' );;
    scope.bsPSyWGNbX_7();
};
// chunk LAST
scope.bsPSyWGNbX_7 = function(){
    scope.fuGCRtNPfB();
};
// TEXT
scope.wtbuEDSMul = function(){
    player.set( 'current_in2_node', 'wtbuEDSMul' );
    var text = `You do not look that busy.`;
    core.say( text, scope.zhlZKDTYHJ );
};

// chunk FIRST
scope.zhlZKDTYHJ = function(){
    scope.zhlZKDTYHJ_0();
};
// ACTION
scope.zhlZKDTYHJ_0 = function(){
    scene.setConv( 'port1', 'Ada_normal2' );;
    scope.zhlZKDTYHJ_1();
};

// TEXT
scope.zhlZKDTYHJ_1 = function(){
    player.set( 'current_in2_node', 'zhlZKDTYHJ_1' );
    var text = `Adalais: "You do not look that busy to me."`;
    core.say( text, scope.zhlZKDTYHJ_2 );
};

// ACTION
scope.zhlZKDTYHJ_2 = function(){
    scene.setConv( 'port2', 'Ralgo_normal' );;
    scope.zhlZKDTYHJ_3();
};

// TEXT
scope.zhlZKDTYHJ_3 = function(){
    player.set( 'current_in2_node', 'zhlZKDTYHJ_3' );
    var text = `Mr. Ralgo: "This is very important stuff I'm doing.  You wouldn't understand.  You are still a child."`;
    core.say( text, scope.zhlZKDTYHJ_4 );
};

// ACTION
scope.zhlZKDTYHJ_4 = function(){
    scene.setConv( 'port1', 'Ada_normal2' );;
    scope.zhlZKDTYHJ_5();
};

// TEXT
scope.zhlZKDTYHJ_5 = function(){
    player.set( 'current_in2_node', 'zhlZKDTYHJ_5' );
    var text = `Adalais: "Who are you texting?"`;
    core.say( text, scope.zhlZKDTYHJ_6 );
};

// ACTION
scope.zhlZKDTYHJ_6 = function(){
    scene.setConv( 'port2', 'Ralgo_normal' );;
    scope.zhlZKDTYHJ_7();
};

// TEXT
scope.zhlZKDTYHJ_7 = function(){
    player.set( 'current_in2_node', 'zhlZKDTYHJ_7' );
    var text = `Mr. Ralgo: "Mind your own business."`;
    core.say( text, scope.zhlZKDTYHJ_8 );
};

// ACTION
scope.zhlZKDTYHJ_8 = function(){
    scene.setConv( '' );;
    scope.zhlZKDTYHJ_9();
};
// chunk LAST
scope.zhlZKDTYHJ_9 = function(){
    scope.fuGCRtNPfB();
};
// TEXT
scope.MWYzMGNQzp = function(){
    player.set( 'current_in2_node', 'MWYzMGNQzp' );
    var text = `Give me a calculus question.`;
    core.say( text, scope.amGMzCPWDT );
};

// chunk FIRST
scope.amGMzCPWDT = function(){
    scope.amGMzCPWDT_0();
};
// ACTION
scope.amGMzCPWDT_0 = function(){
    scene.setConv( 'port1', 'Ada_normal2' );;
    scope.amGMzCPWDT_1();
};

// TEXT
scope.amGMzCPWDT_1 = function(){
    player.set( 'current_in2_node', 'amGMzCPWDT_1' );
    var text = `Adalais: "May I have a calculus question?"`;
    core.say( text, scope.amGMzCPWDT_2 );
};

// ACTION
scope.amGMzCPWDT_2 = function(){
    scene.setConv( 'port2', 'Ralgo_normal' );;
    scope.amGMzCPWDT_3();
};

// TEXT
scope.amGMzCPWDT_3 = function(){
    player.set( 'current_in2_node', 'amGMzCPWDT_3' );
    var text = `Ralgo: "You want a calculus question?  Okay."`;
    core.say( text, scope.amGMzCPWDT_4 );
};

// TEXT
scope.amGMzCPWDT_4 = function(){
    player.set( 'current_in2_node', 'amGMzCPWDT_4' );
    var text = `Ralgo: "You need to answer ${2 - player.state.calculus_num_answered} more."`;
    core.say( text, scope.amGMzCPWDT_5 );
};

// TEXT
scope.amGMzCPWDT_5 = function(){
    player.set( 'current_in2_node', 'amGMzCPWDT_5' );
    var text = `Ralgo: "Okay, I've got a good one for you.  You should have no problems with it."`;
    core.say( text, scope.amGMzCPWDT_6 );
};

// ACTION
scope.amGMzCPWDT_6 = function(){
    player.get( 'genereate_calculus_question' ) && player.get( 'genereate_calculus_question' )();;
    scope.amGMzCPWDT_7();
};

// TEXT
scope.amGMzCPWDT_7 = function(){
    player.set( 'current_in2_node', 'amGMzCPWDT_7' );
    var text = `Ralgo: "${player.state.calculus_current_question}"`;
    core.say( text, scope.amGMzCPWDT_8 );
};

// ACTION
scope.amGMzCPWDT_8 = function(){
    scene.setConv( '' );;
    scope.amGMzCPWDT_9();
};
// chunk LAST
scope.amGMzCPWDT_9 = function(){
    scope.chFwEPYeVD();
};
// pass_fail
scope.chFwEPYeVD = function(){
    player.set( 'current_in2_node', 'chFwEPYeVD' );
    var condition = ( function(){ return player.get( 'calculus_num_answered' ) === 0 } )();
    if( !condition ){
        player.set( 'current_in2_node', 'FtmQpeAgnf' );
        var text = ``;
        core.say( text, scope.plgCrkkUrF );
    }
    if( condition ){
        player.set( 'current_in2_node', 'mIzCZbAQoq' );
        var text = ``;
        core.say( text, scope.QCxYebgAie );
    }
};
// choice
scope.plgCrkkUrF = function(){
    player.set( 'current_in2_node', 'plgCrkkUrF' );
    var text = `What is the correct solution?`;
    core.choose( text, 'plgCrkkUrF', [{
        text: `${player.get( 'calculus_current_ans_wrong2' )}`,
        cb: scope.VRQhLVOgeD,
        condition: () => { return true; }
    },{
        text: `${player.get( 'calculus_current_ans_wrong1' )}`,
        cb: scope.GfLMtdYnfg,
        condition: () => { return true; }
    },{
        text: `${player.get( 'calculus_current_ans_wrong3' )}`,
        cb: scope.XdhULiOlsH,
        condition: () => { return true; }
    },{
        text: `${player.get( 'calculus_current_ans_correct' )}`,
        cb: scope.IItQLzukww,
        condition: () => { return true; }
    }]);
};

// TEXT
scope.VRQhLVOgeD = function(){
    player.set( 'current_in2_node', 'VRQhLVOgeD' );
    var text = `${player.get( 'calculus_current_ans_wrong2' )}`;
    core.say( text, scope.zqgbledWxq );
};

// chunk FIRST
scope.zqgbledWxq = function(){
    scope.zqgbledWxq_0();
};
// ACTION
scope.zqgbledWxq_0 = function(){
    scene.setConv( 'port2', 'Ralgo_bored' );
    scope.zqgbledWxq_1();
};

// TEXT
scope.zqgbledWxq_1 = function(){
    player.set( 'current_in2_node', 'zqgbledWxq_1' );
    var text = `Nope, that's wrong.  I guess you're not so smart after all.  You're going to have to try again.`;
    core.say( text, scope.zqgbledWxq_2 );
};

// ACTION
scope.zqgbledWxq_2 = function(){
    scene.setConv( '' );;
    scope.zqgbledWxq_3();
};
// chunk LAST
scope.zqgbledWxq_3 = function(){
    scope.fuGCRtNPfB();
};
// TEXT
scope.GfLMtdYnfg = function(){
    player.set( 'current_in2_node', 'GfLMtdYnfg' );
    var text = `${player.get( 'calculus_current_ans_wrong1' )}`;
    core.say( text, scope.zqgbledWxq );
};

// TEXT
scope.XdhULiOlsH = function(){
    player.set( 'current_in2_node', 'XdhULiOlsH' );
    var text = `${player.get( 'calculus_current_ans_wrong3' )}`;
    core.say( text, scope.zqgbledWxq );
};

// TEXT
scope.IItQLzukww = function(){
    player.set( 'current_in2_node', 'IItQLzukww' );
    var text = `${player.get( 'calculus_current_ans_correct' )}`;
    core.say( text, scope.fRexkbaLAd );
};

// chunk FIRST
scope.fRexkbaLAd = function(){
    scope.fRexkbaLAd_0();
};
// ACTION
scope.fRexkbaLAd_0 = function(){
    scene.setAnimation( 'Calculus', 'invisible' );;
    scope.fRexkbaLAd_1();
};

// ACTION
scope.fRexkbaLAd_1 = function(){
    scene.setConv( 'port2', 'Ralgo_bored' );
    scope.fRexkbaLAd_2();
};

// TEXT
scope.fRexkbaLAd_2 = function(){
    player.set( 'current_in2_node', 'fRexkbaLAd_2' );
    var text = `Ralgo: "Yep, that's correct.  I suppose you were listening to my lecture after all."`;
    core.say( text, scope.fRexkbaLAd_3 );
};

// ACTION
scope.fRexkbaLAd_3 = function(){
    scene.setConv( 'por1', 'Ada_angry' );;
    scope.fRexkbaLAd_4();
};

// TEXT
scope.fRexkbaLAd_4 = function(){
    player.set( 'current_in2_node', 'fRexkbaLAd_4' );
    var text = `Adalais: "I do not know why you doubted me."`;
    core.say( text, scope.fRexkbaLAd_5 );
};

// ACTION
scope.fRexkbaLAd_5 = function(){
    scene.setConv( 'port2', 'Ralgo_bored' );
    scope.fRexkbaLAd_6();
};

// TEXT
scope.fRexkbaLAd_6 = function(){
    player.set( 'current_in2_node', 'fRexkbaLAd_6' );
    var text = `Ralgo: "Eh, you never know."`;
    core.say( text, scope.fRexkbaLAd_7 );
};

// TEXT
scope.fRexkbaLAd_7 = function(){
    player.set( 'current_in2_node', 'fRexkbaLAd_7' );
    var text = `Ralgo: "Anyway, here's the key to the A/V room.  I guess you deserve it."`;
    core.say( text, scope.fRexkbaLAd_8 );
};

// ACTION
scope.fRexkbaLAd_8 = function(){
    scene.setConv( '' );;
    scope.fRexkbaLAd_9();
};
// chunk LAST
scope.fRexkbaLAd_9 = function(){
    scope.JTBVLpLUcB();
};
// ACTION
scope.JTBVLpLUcB = function(){
    player.set( "calculus_num_answered", 2 );
    scope.aOdLmgEXoN();
};

// ACTION
scope.aOdLmgEXoN = function(){
    player.set( "av_key_location", 'ada' );
    scope.fuGCRtNPfB();
};


// choice
scope.QCxYebgAie = function(){
    player.set( 'current_in2_node', 'QCxYebgAie' );
    var text = `What is the correct solution?`;
    core.choose( text, 'QCxYebgAie', [{
        text: `${player.get( 'calculus_current_ans_correct' )}`,
        cb: scope.ufSiEMgHgA,
        condition: () => { return true; }
    },{
        text: `${player.get( 'calculus_current_ans_wrong3' )}`,
        cb: scope.ITTeTWIXLr,
        condition: () => { return true; }
    },{
        text: `${player.get( 'calculus_current_ans_wrong1' )}`,
        cb: scope.htxEnVtmXL,
        condition: () => { return true; }
    },{
        text: `${player.get( 'calculus_current_ans_wrong2' )}`,
        cb: scope.PgaBggqKim,
        condition: () => { return true; }
    }]);
};

// TEXT
scope.ufSiEMgHgA = function(){
    player.set( 'current_in2_node', 'ufSiEMgHgA' );
    var text = `${player.get( 'calculus_current_ans_correct' )}`;
    core.say( text, scope.GsNBQPsecY );
};

// chunk FIRST
scope.GsNBQPsecY = function(){
    scope.GsNBQPsecY_0();
};
// ACTION
scope.GsNBQPsecY_0 = function(){
    scene.setConv( 'port2', 'Ralgo_bored' );
    scope.GsNBQPsecY_1();
};

// TEXT
scope.GsNBQPsecY_1 = function(){
    player.set( 'current_in2_node', 'GsNBQPsecY_1' );
    var text = `Yep, that's correct.  But you still need to answer one more to impress me.`;
    core.say( text, scope.GsNBQPsecY_2 );
};

// ACTION
scope.GsNBQPsecY_2 = function(){
    scene.setConv( '' );;
    scope.GsNBQPsecY_3();
};

// ACTION
scope.GsNBQPsecY_3 = function(){
    scene.setAnimation( 'Calculus', 'invisible' );;
    scope.GsNBQPsecY_4();
};
// chunk LAST
scope.GsNBQPsecY_4 = function(){
    scope.sCwPeqisMH();
};
// ACTION
scope.sCwPeqisMH = function(){
    player.set( "calculus_num_answered", 1 );
    scope.fuGCRtNPfB();
};

// TEXT
scope.ITTeTWIXLr = function(){
    player.set( 'current_in2_node', 'ITTeTWIXLr' );
    var text = `${player.get( 'calculus_current_ans_wrong3' )}`;
    core.say( text, scope.YwflNNtEZH );
};

// chunk FIRST
scope.YwflNNtEZH = function(){
    scope.YwflNNtEZH_0();
};
// ACTION
scope.YwflNNtEZH_0 = function(){
    scene.setConv( 'port2', 'Ralgo_bored' );
    scope.YwflNNtEZH_1();
};

// TEXT
scope.YwflNNtEZH_1 = function(){
    player.set( 'current_in2_node', 'YwflNNtEZH_1' );
    var text = `Nope, that's wrong.  I guess you're not so smart after all.  You're going to have to try again.`;
    core.say( text, scope.YwflNNtEZH_2 );
};

// ACTION
scope.YwflNNtEZH_2 = function(){
    scene.setConv( '' );;
    scope.YwflNNtEZH_3();
};

// ACTION
scope.YwflNNtEZH_3 = function(){
    scene.setAnimation( 'Calculus', 'invisible' );;
    scope.YwflNNtEZH_4();
};
// chunk LAST
scope.YwflNNtEZH_4 = function(){
    scope.fuGCRtNPfB();
};
// TEXT
scope.htxEnVtmXL = function(){
    player.set( 'current_in2_node', 'htxEnVtmXL' );
    var text = `${player.get( 'calculus_current_ans_wrong1' )}`;
    core.say( text, scope.YwflNNtEZH );
};

// TEXT
scope.PgaBggqKim = function(){
    player.set( 'current_in2_node', 'PgaBggqKim' );
    var text = `${player.get( 'calculus_current_ans_wrong2' )}`;
    core.say( text, scope.YwflNNtEZH );
};

// TEXT
scope.bLauQYEgmK = function(){
    player.set( 'current_in2_node', 'bLauQYEgmK' );
    var text = `Inventory.`;
    core.say( text, scope.fsfukHJTJI );
};

// ACTION
scope.fsfukHJTJI = function(){
    player.set( 'last_room', 'comic-classroom2.json' );;
    scope.fJZYzcgRPr();
};

// next_file
scope.fJZYzcgRPr = function(){
    var key = `comic-inventory.json`;
    var func = files[ key ];
    if( func ) {
        func();
    } else {
        core.say( `EXECUTION WARNING, no file exists named ${key}. You are probably running a subset of all the files, and not the whole scenario. ` + Object.keys( files ), files.exit );
    }
};


// ACTION
scope.KDEUsLwxMG = function(){
    player.set( "has_been_to_classroom2", true );
    scope.YfgFxklXIP();
};

// chunk FIRST
scope.YfgFxklXIP = function(){
    scope.YfgFxklXIP_0();
};
// ACTION
scope.YfgFxklXIP_0 = function(){
    scene.startConversation( 'BlackBar', 'black-bar', [ { name: 'port1', anim: 'Ada_normal' } ] );;
    scope.YfgFxklXIP_1();
};

// ACTION
scope.YfgFxklXIP_1 = function(){
    scene.setConv( 'port1', 'Ada_surprised' );;
    scope.YfgFxklXIP_2();
};

// TEXT
scope.YfgFxklXIP_2 = function(){
    player.set( 'current_in2_node', 'YfgFxklXIP_2' );
    var text = `Adalais: Oh, Jonathan is still here?`;
    core.say( text, scope.YfgFxklXIP_3 );
};

// TEXT
scope.YfgFxklXIP_3 = function(){
    player.set( 'current_in2_node', 'YfgFxklXIP_3' );
    var text = `Adalais: Why has he not left yet?`;
    core.say( text, scope.YfgFxklXIP_4 );
};

// ACTION
scope.YfgFxklXIP_4 = function(){
    scene.endConversation();;
    scope.YfgFxklXIP_5();
};

// ACTION
scope.YfgFxklXIP_5 = function(){
    scene.restoreActorBase( 'Adalais_act' );;
    scope.YfgFxklXIP_6();
};
// chunk LAST
scope.YfgFxklXIP_6 = function(){
    scope.SBGNghnVEc();
};
if( !id ){
    scope.RgkOTaNwOz();
}
else {
    scope[ id ]();
}
};
files.exit = function(){
    core.exit()
};
//files[ `main.json` ]();
