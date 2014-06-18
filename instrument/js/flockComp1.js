//var myaudio = new Audio('mysong.mp3');
			// Create a new synth consisting of a sine wave,
			// modulating its amplitude slowly with another sine wave.
			
(function () {
	"use strict";
	
	fluid.registerNamespace("flockComp1");
	
	flock.init();
	
	fluid.defaults("flockComp1.fall", {
		gradeNames: ["flock.synth", "autoInit"],
				
    synthDef: {
        id: "carrier",
        ugen: "flock.ugen.sinOsc",
        freq: 540,
        mul: {
            id: "mod",
            ugen: "flock.ugen.sinOsc",
            freq: 1.50,
            mul: {
                    id: "mod",
                    ugen: "flock.ugen.triOsc",
                    freq: .230,
                    mul: {
                                    ugen: "flock.ugen.filter.biquad.bp",
                                    freq: {
                                        ugen: "flock.ugen.mouse.cursor",
                                        options: {
                                            interpolation: "exponential"
                                        	},
                                        mul: 10000,
                                        add: 500,
                                        lag: 12
                                    		},
                                    q: 1.0,
	                                    source: {
	                                        ugen: "flock.ugen.triOsc",
	                                        freq: 200,
	                                        mul: 0.1
                                    }
                },
        	},
        }
    }
		}); //FINISH FIRST SYNTH

		//FINISH 2nd SYNTH

		fluid.defaults("flockComp1.synth2", {
		gradeNames: ["flock.synth", "autoInit"],
				
    synthDef: {
        ugen: "flock.ugen.filter.moog",
        cutoff: {
            ugen: "flock.ugen.sinOsc",
            freq: 1/4,
            mul: 5000,
            add: 7000
        },
        resonance: {
            ugen: "flock.ugen.sinOsc",
            freq: .2,
            mul: 1.5,
            add: 1.5
        },
        source: {
            ugen: "flock.ugen.sinOsc",
            freq: {
                ugen: "flock.ugen.sequence",
                freq: .1,
                loop: 1,
                list: [60, 40 * 5/4,],
                options: {
                    interpolation: "linear"
                }
            }
        },
        mul: 0.5
    }

		}); //FINISH FIRST SYNTH

			fluid.defaults("flockComp1.sample", {
		gradeNames: ["flock.synth", "autoInit"],

		synthDef: {
        ugen: "flock.ugen.playBuffer",
        buffer: {
            id: "chord",
            url: "audio/bolhas.wav"
        },

        speed: {
            ugen: "flock.ugen.mouse.cursor",
            options: {
                axis: "y"
            },
            add: 0.5
        },

        loop: 1,

        start: 0,

        end: {
            ugen: "flock.ugen.mouse.cursor",
            options: {
                axis: "x"
            }
        }
    }
				
		}); //FINISH FIRST SYNTH
	
	fluid.defaults("flockComp1.dust", {
		gradeNames: ["flock.synth", "autoInit"],
				
		

   synthDef: {
        ugen: "flock.ugen.sinOsc",
         freq: {
                                        ugen: "flock.ugen.mouse.cursor",
                                        options: {
                                            interpolation: "exponential"
                                        },
                                        mul: 10000,
                                        add: 500,
                                        lag: 32
                                    },
        mul: {
            ugen: "flock.ugen.env.simpleASR",
            attack: .025,
            sustain: .0125,
            release: 2.15,
            gate: {
                ugen: "flock.ugen.mouse.click"
            }
                       
        }
    }
}); //FINISH FIRST SYNTH

}());

clock.schedule(12, function () {

"use strict";
	
	fluid.registerNamespace("flockComp1");
	
	flock.init();

	fluid.defaults("flockComp1.dust", {
		gradeNames: ["flock.synth", "autoInit"],
		    
		    synthDef: {
        	ugen: "flock.ugen.dust",
        	density: 10,
         	mul: {
                ugen: "flock.ugen.whiteNoise"       
             
            },
        	freq: {
            ugen: "flock.ugen.xLine",
            start: 180,
            end: 2,
            duration: 10.0
        }
    }		
		}); 


    //
}());

/*
	fluid.defaults("audioTon.dust", {
		gradeNames: ["flock.synth", "autoInit"],
				
		}); //FINISH FIRST SYNTH
*/

