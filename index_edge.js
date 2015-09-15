/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='images/',
        aud='media/',
        vid='media/',
        js='js/',
        fonts = {
            'cedarville-cursive, cursive': '<script src=\"http://use.edgefonts.net/cedarville-cursive:n4:all.js\"></script>'        },
        opts = {
            'gAudioPreloadPreference': 'auto',
            'gVideoPreloadPreference': 'auto'
        },
        resources = [
        ],
        scripts = [
            js+"jquery-1.7.1.min.js",
            js+"jquery-2.0.3.min.js",
            js+"TweenMax.min.js"
        ],
        symbols = {
            "stage": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'pageContainer',
                            type: 'rect',
                            rect: ['0px', '0px', '1024px', '768px', 'auto', 'auto'],
                            overflow: 'hidden',
                            borderRadius: ["0px", "0px", "0px", "0px"],
                            fill: ["rgba(192,192,192,0.00)"],
                            stroke: [0,"rgba(0,0,0,1)","none"],
                            userClass: ""
                        },
                        {
                            id: 'plyHome',
                            type: 'text',
                            rect: ['117px', '724px', '90px', '23px', 'auto', 'auto'],
                            cursor: 'pointer',
                            text: "Home",
                            align: "left",
                            font: ['Arial, Helvetica, sans-serif', [20, "px"], "rgba(129,26,86,1)", "400", "none solid rgb(129, 26, 86)", "normal", "break-word", "normal"]
                        },
                        {
                            id: 'plyIndex',
                            type: 'text',
                            rect: ['512px', '788px', '90px', '23px', 'auto', 'auto'],
                            cursor: 'pointer',
                            text: "Pages",
                            align: "center",
                            font: ['Arial, Helvetica, sans-serif', [20, "px"], "rgba(129,26,86,1)", "400", "none solid rgb(129, 26, 86)", "normal", "break-word", "normal"]
                        },
                        {
                            id: 'separateLine',
                            type: 'rect',
                            rect: ['108px', '725px', '2px', '21px', 'auto', 'auto'],
                            fill: ["rgba(129,26,86,1.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"]
                        },
                        {
                            id: 'prevBtn',
                            type: 'image',
                            rect: ['22px', '-107px', '52px', '60px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(0,0,0,0)",im+"arrow.png",'0px','0px']
                        },
                        {
                            id: 'nextBtn',
                            type: 'image',
                            rect: ['950px', '-107px', '52px', '60px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ["rgba(0,0,0,0)",im+"arrow.png",'0px','0px'],
                            transform: [[],['180']]
                        },
                        {
                            id: 'indexOpen',
                            type: 'text',
                            rect: ['46px', '724', '61px', '23px', 'auto', 'auto'],
                            cursor: 'pointer',
                            text: "Index",
                            align: "center",
                            font: ['Arial, Helvetica, sans-serif', [20, "px"], "rgba(129,26,86,1.00)", "normal", "none", "normal", "break-word", ""]
                        },
                        {
                            id: 'index',
                            symbolName: 'index',
                            type: 'rect',
                            rect: ['0px', '0px', '367', '768', 'auto', 'auto'],
                            overflow: 'visible',
                            opacity: '0'
                        },
                        {
                            id: 'Index',
                            symbolName: 'Index',
                            type: 'rect',
                            rect: ['-1024', '0', '1024', '768', 'auto', 'auto'],
                            overflow: 'hidden'
                        }
                    ],
                    style: {
                        '${Stage}': {
                            isStage: true,
                            rect: ['null', 'null', '1024', '768', 'auto', 'auto'],
                            overflow: 'hidden',
                            fill: ["rgba(255,255,255,1)"]
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "title": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            text: 'For postmenopausal women with HR + locally advanced or Metastatic Breast Cancer with disease relapse, or disease progression after antiestrogen therapy   ...',
                            font: ['Arial, Helvetica, sans-serif', [33, 'px'], 'rgba(255,255,255,1.00)', '600', 'none', 'italic', 'break-word', ''],
                            align: 'left',
                            opacity: '0',
                            id: 'Text',
                            textStyle: ['181px', '', '90px', '52px'],
                            rect: ['0', '0', '897px', '111', 'auto', 'auto'],
                            type: 'text'
                        },
                        {
                            rect: ['770', '73', 'auto', 'auto', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [16, 'px'], 'rgba(255,255,255,1)', '600', 'none', 'italic', 'break-word', 'nowrap'],
                            align: 'center',
                            id: 'Text2',
                            text: '1',
                            opacity: '0',
                            type: 'text'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '897', '111']
                        }
                    }
                },
                timeline: {
                    duration: 1000,
                    autoPlay: false,
                    data: [
                        [
                            "eid67",
                            "opacity",
                            332,
                            668,
                            "linear",
                            "${Text2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid61",
                            "text-indent",
                            0,
                            668,
                            "linear",
                            "${Text}",
                            '52px',
                            '0px'
                        ],
                        [
                            "eid59",
                            "letter-spacing",
                            0,
                            668,
                            "linear",
                            "${Text}",
                            '181px',
                            '0px'
                        ],
                        [
                            "eid63",
                            "line-height",
                            0,
                            668,
                            "linear",
                            "${Text}",
                            '90px',
                            '35px'
                        ],
                        [
                            "eid65",
                            "opacity",
                            0,
                            668,
                            "linear",
                            "${Text}",
                            '0',
                            '1'
                        ]
                    ]
                }
            },
            "title2": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['234', '71', 'auto', 'auto', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [16, 'px'], 'rgba(0,0,0,1)', 'normal', 'none', 'normal', 'break-word', 'nowrap'],
                            align: 'left',
                            id: 'Text4',
                            text: '2',
                            opacity: '0',
                            type: 'text'
                        },
                        {
                            text: 'RIGHT AFTER',
                            font: ['Lucida Sans Unicode, Lucida Grande, sans-serif', [40, 'px'], 'rgba(0,0,0,1.00)', '900', 'none', 'normal', 'break-word', ''],
                            align: 'left',
                            opacity: '0',
                            id: 'Text3',
                            textStyle: ['315px', '492px', '422px', '164px'],
                            rect: ['0', '0', '312', 'auto', 'auto', 'auto'],
                            type: 'text'
                        },
                        {
                            text: 'recurrence<br>or progression',
                            font: ['Arial, Helvetica, sans-serif', [32, 'px'], 'rgba(0,0,0,1.00)', '400', 'none', 'normal', 'break-word', 'nowrap'],
                            align: 'center',
                            opacity: '0',
                            id: 'Text3Copy',
                            textStyle: ['199px', '444px', '220px', '255px'],
                            rect: ['27', '48', 'auto', 'auto', 'auto', 'auto'],
                            type: 'text'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '279', '122']
                        }
                    }
                },
                timeline: {
                    duration: 1000,
                    autoPlay: false,
                    data: [
                        [
                            "eid53",
                            "text-indent",
                            332,
                            332,
                            "linear",
                            "${Text3Copy}",
                            '255px',
                            '0px'
                        ],
                        [
                            "eid43",
                            "text-indent",
                            0,
                            332,
                            "linear",
                            "${Text3}",
                            '164px',
                            '0px'
                        ],
                        [
                            "eid55",
                            "line-height",
                            332,
                            332,
                            "linear",
                            "${Text3Copy}",
                            '220px',
                            '30px'
                        ],
                        [
                            "eid51",
                            "letter-spacing",
                            332,
                            332,
                            "linear",
                            "${Text3Copy}",
                            '199px',
                            '0px'
                        ],
                        [
                            "eid41",
                            "word-spacing",
                            0,
                            332,
                            "linear",
                            "${Text3}",
                            '492px',
                            '0px'
                        ],
                        [
                            "eid57",
                            "opacity",
                            668,
                            332,
                            "linear",
                            "${Text4}",
                            '0',
                            '1'
                        ],
                        [
                            "eid49",
                            "word-spacing",
                            332,
                            332,
                            "linear",
                            "${Text3Copy}",
                            '444px',
                            '0px'
                        ],
                        [
                            "eid45",
                            "line-height",
                            0,
                            332,
                            "linear",
                            "${Text3}",
                            '422px',
                            '48px'
                        ],
                        [
                            "eid116",
                            "opacity",
                            0,
                            1000,
                            "linear",
                            "${Text3Copy}",
                            '0',
                            '1'
                        ],
                        [
                            "eid47",
                            "opacity",
                            0,
                            332,
                            "linear",
                            "${Text3}",
                            '0',
                            '1'
                        ],
                        [
                            "eid39",
                            "letter-spacing",
                            0,
                            332,
                            "linear",
                            "${Text3}",
                            '315px',
                            '0px'
                        ]
                    ]
                }
            },
            "title3": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            text: 'Give your',
                            font: ['Arial, Helvetica, sans-serif', [30, 'px'], 'rgba(0,0,0,1)', 'normal', 'none', 'normal', 'break-word', 'nowrap'],
                            align: 'left',
                            opacity: '0',
                            id: 'Text5',
                            textStyle: ['', '212px', '158px', ''],
                            rect: ['0', '0', 'auto', 'auto', 'auto', 'auto'],
                            type: 'text'
                        },
                        {
                            type: 'text',
                            id: 'Text5Copy',
                            opacity: '1',
                            font: ['Arial Black, Gadget, sans-serif', [35, 'px'], 'rgba(96,11,125,1.00)', '900', 'none', 'normal', 'break-word', 'nowrap'],
                            transform: [[], ['720'], [], ['0', '0']],
                            textStyle: ['0px', '', '39px', '0px'],
                            rect: ['119', '35', 'auto', 'auto', 'auto', 'auto'],
                            align: 'right',
                            text: 'Time'
                        },
                        {
                            text: 'Patients',
                            font: ['Arial, Helvetica, sans-serif', [30, 'px'], 'rgba(0,0,0,1)', 'normal', 'none', 'normal', 'break-word', 'nowrap'],
                            align: 'left',
                            opacity: '0',
                            id: 'Text5Copy2',
                            textStyle: ['161px', '', '', ''],
                            rect: ['0', '39', 'auto', 'auto', 'auto', 'auto'],
                            type: 'text'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '227', '85']
                        }
                    }
                },
                timeline: {
                    duration: 1500,
                    autoPlay: false,
                    data: [
                        [
                            "eid113",
                            "opacity",
                            0,
                            501,
                            "linear",
                            "${Text5}",
                            '0',
                            '1'
                        ],
                        [
                            "eid71",
                            "line-height",
                            0,
                            501,
                            "linear",
                            "${Text5}",
                            '158px',
                            '36px'
                        ],
                        [
                            "eid69",
                            "word-spacing",
                            0,
                            501,
                            "linear",
                            "${Text5}",
                            '212px',
                            '0px'
                        ],
                        [
                            "eid73",
                            "letter-spacing",
                            501,
                            501,
                            "linear",
                            "${Text5Copy2}",
                            '161px',
                            '0px'
                        ],
                        [
                            "eid121",
                            "opacity",
                            501,
                            501,
                            "linear",
                            "${Text5Copy2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1067",
                            "scaleY",
                            1002,
                            498,
                            "linear",
                            "${Text5Copy}",
                            '0',
                            '1'
                        ],
                        [
                            "eid1065",
                            "scaleX",
                            1002,
                            498,
                            "linear",
                            "${Text5Copy}",
                            '0',
                            '1'
                        ]
                    ]
                }
            },
            "Glass_sym": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'Glass',
                            rect: [0, 0, '365px', '544px', 'auto', 'auto'],
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/Cover/Glass.png', '0px', '0px', '100% 100%', '100%']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'hidden',
                            rect: [null, null, 365, 544]
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "Cover": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'Back',
                            type: 'image',
                            rect: ['0', '0', '1024px', '768px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/Cover/Back.png', '0px', '0px']
                        },
                        {
                            type: 'rect',
                            overflow: 'hidden',
                            id: 'Hourglass',
                            symbolName: 'Hourglass',
                            clip: 'rect(0px 1020px 684.06787109375px 0px)',
                            rect: ['2px', '84px', '1020', '768', 'auto', 'auto']
                        },
                        {
                            id: 'Faslodex',
                            type: 'image',
                            rect: ['692', '573', '282px', '145px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/Cover/Faslodex.png', '0px', '0px']
                        },
                        {
                            type: 'rect',
                            overflow: 'hidden',
                            id: 'title1',
                            symbolName: 'title',
                            rect: ['63', '47', '897', '111', 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            overflow: 'hidden',
                            id: 'title2',
                            symbolName: 'title2',
                            rect: ['83', '308', '279', '122', 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            overflow: 'hidden',
                            id: 'title3',
                            symbolName: 'title3',
                            rect: ['740', '402', '227', '85', 'auto', 'auto']
                        },
                        {
                            type: 'rect',
                            overflow: 'hidden',
                            id: 'Ref_Cover_01',
                            symbolName: 'Ref_Cover_01',
                            clip: 'rect(100px 400px 100px 400px)',
                            rect: ['112', '568', '800', '200', 'auto', 'auto']
                        },
                        {
                            rect: ['33', '642', '96px', '96px', 'auto', 'auto'],
                            type: 'image',
                            id: 'i_info2',
                            display: 'none',
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/i_info2.png', '0px', '0px']
                        },
                        {
                            rect: ['62', '673', '36px', '36px', 'auto', 'auto'],
                            id: 'i_info1',
                            type: 'image',
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/i_info1.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1024', '768']
                        }
                    }
                },
                timeline: {
                    duration: 3500,
                    autoPlay: false,
                    data: [
                        [
                            "eid281",
                            "display",
                            0,
                            0,
                            "linear",
                            "${i_info2}",
                            'none',
                            'none'
                        ],
                            [ "eid104", "trigger", 0, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${title1}', [0] ] ],
                            [ "eid1068", "trigger", 500, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${Hourglass}', [0] ] ],
                            [ "eid105", "trigger", 1000, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${title2}', [0] ] ],
                            [ "eid106", "trigger", 2000, function executeSymbolFunction(e, data) { this._executeSymbolAction(e, data); }, ['play', '${title3}', [0] ] ]
                    ]
                }
            },
            "Ref_Cover_01": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: [48, 38, 700, 120, 'auto', 'auto'],
                            borderRadius: ['5px 5px', '5px 5px', '5px 5px', '5px 5px'],
                            boxShadow: ['', '0px', '0px', '50px', 0, 'rgba(0,0,0,1.00)'],
                            id: 'Rectangle',
                            stroke: ['2px', 'rgba(255,255,255,1.00)', 'solid'],
                            type: 'rect',
                            fill: ['rgba(122,120,120,1.00)']
                        },
                        {
                            rect: [71, 82, 'auto', 'auto', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [14, 'px'], 'rgba(255,255,255,1.00)', 'normal', 'none', 'normal', '', 'nowrap'],
                            textStyle: ['', '', '18px', ''],
                            id: 'Text6',
                            text: '1. NICE technology appraisal guidance 239, Issued: December 2011, last updated: 28 June 2012.<br>2. Nicholson R. and Johnston S.',
                            align: 'left',
                            type: 'text'
                        },
                        {
                            rect: [277, 100, 'auto', 'auto', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [14, 'px'], 'rgba(255,255,255,1.00)', '600', 'none', 'italic', '', 'nowrap'],
                            textStyle: ['', '', '18px', ''],
                            id: 'Text6Copy',
                            text: 'Breast Cancer Research and Treatment',
                            align: 'left',
                            type: 'text'
                        },
                        {
                            rect: [550, 100, 'auto', 'auto', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [14, 'px'], 'rgba(255,255,255,1.00)', 'normal', 'none', 'normal', '', 'nowrap'],
                            textStyle: ['', '', '18px', ''],
                            id: 'Text6Copy2',
                            text: '(2005) 93: S3–S10.',
                            align: 'left',
                            type: 'text'
                        },
                        {
                            type: 'text',
                            id: 'close',
                            text: 'X',
                            cursor: 'pointer',
                            font: ['Arial, Helvetica, sans-serif', [20, 'px'], 'rgba(255,255,255,1)', 'normal', 'none', 'normal', '', ''],
                            textStyle: ['', '', '53px', ''],
                            rect: [700, 40, 50, 50, 'auto', 'auto'],
                            textShadow: ['rgba(0,0,0,0.65)', '3px', '3px', '3px'],
                            align: 'center'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'hidden',
                            rect: [null, null, 800, 200]
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "BackGround": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: [0, 5, 1024, 7, 'auto', 'auto'],
                            id: 'Rectangle2',
                            stroke: [2, 'rgb(255, 255, 255)', 'none'],
                            type: 'rect',
                            fill: ['rgba(252,177,22,1.00)']
                        },
                        {
                            rect: [0, 467, 792, 100, 'auto', 'auto'],
                            borderRadius: ['0px', '5px 5px', '5px 5px', '0px'],
                            boxShadow: ['', '2px', '0px', '7px', 0, 'rgba(0,0,0,0.65)'],
                            id: 'Rectangle3Copy4',
                            stroke: [2, 'rgb(255, 255, 255)', 'none'],
                            type: 'rect',
                            fill: ['rgba(129,26,86,1.00)']
                        },
                        {
                            id: 'Faslodex_500',
                            type: 'image',
                            rect: [805, 492, '159px', '50px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/Faslodex_500.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'hidden',
                            rect: [null, null, 1038, 567]
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "Slide_01": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'Back',
                            type: 'image',
                            rect: ['0', '0', '1024px', '768px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/Cover/Back.png', '0px', '0px']
                        },
                        {
                            rect: ['0', '0', '1024px', '768px', 'auto', 'auto'],
                            id: 'Slide_1',
                            stroke: [2, 'rgb(255, 255, 255)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,0.00)']
                        },
                        {
                            type: 'rect',
                            overflow: 'hidden',
                            id: 'BackGround',
                            symbolName: 'BackGround',
                            rect: ['0', '150', '1038', '567', 'auto', 'auto']
                        },
                        {
                            type: 'text',
                            rect: ['60', '96', 'auto', '45', 'auto', 'auto'],
                            id: 'Text8',
                            text: 'NAVIGATOR',
                            align: 'left',
                            font: ['Arial, Helvetica, sans-serif', [0, 'px'], 'rgba(255,255,255,1.00)', '700', 'none', 'normal', 'break-word', 'nowrap']
                        },
                        {
                            rect: ['54', '170', '0', '0', 'auto', 'auto'],
                            id: 'Tab_1',
                            type: 'image',
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/Navigator/Tab_1.png', '0px', '0px']
                        },
                        {
                            rect: ['auto', '170', '0', '0', '49', 'auto'],
                            id: 'Tab_2',
                            type: 'image',
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/Navigator/Tab_2.png', '0px', '0px']
                        },
                        {
                            rect: ['54', '314', '0', '0', 'auto', 'auto'],
                            id: 'Tab_3',
                            type: 'image',
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/Navigator/Tab_3.png', '0px', '0px']
                        },
                        {
                            rect: ['auto', '314', '0', '0', '49', 'auto'],
                            id: 'Tab_4',
                            type: 'image',
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/Navigator/Tab_4.png', '0px', '0px']
                        },
                        {
                            rect: ['307', '470', '0', '0', 'auto', 'auto'],
                            id: 'Tab_5',
                            type: 'image',
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/Navigator/Tab_5.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1024', '768']
                        }
                    }
                },
                timeline: {
                    duration: 1000,
                    autoPlay: false,
                    data: [
                        [
                            "eid288",
                            "height",
                            0,
                            1000,
                            "easeOutBack",
                            "${Tab_3}",
                            '0px',
                            '111px'
                        ],
                        [
                            "eid293",
                            "width",
                            0,
                            1000,
                            "easeOutBack",
                            "${Tab_4}",
                            '0px',
                            '409px'
                        ],
                        [
                            "eid319",
                            "font-size",
                            0,
                            1000,
                            "easeOutBack",
                            "${Text8}",
                            '0px',
                            '40px'
                        ],
                        [
                            "eid289",
                            "height",
                            0,
                            1000,
                            "easeOutBack",
                            "${Tab_4}",
                            '0px',
                            '111px'
                        ],
                        [
                            "eid292",
                            "width",
                            0,
                            1000,
                            "easeOutBack",
                            "${Tab_3}",
                            '0px',
                            '409px'
                        ],
                        [
                            "eid287",
                            "width",
                            0,
                            1000,
                            "easeOutBack",
                            "${Tab_2}",
                            '0px',
                            '409px'
                        ],
                        [
                            "eid290",
                            "height",
                            0,
                            1000,
                            "easeOutBack",
                            "${Tab_5}",
                            '0px',
                            '111px'
                        ],
                        [
                            "eid294",
                            "width",
                            0,
                            1000,
                            "easeOutBack",
                            "${Tab_5}",
                            '0px',
                            '409px'
                        ],
                        [
                            "eid283",
                            "height",
                            0,
                            1000,
                            "easeOutBack",
                            "${Tab_1}",
                            '0px',
                            '111px'
                        ],
                        [
                            "eid286",
                            "height",
                            0,
                            1000,
                            "easeOutBack",
                            "${Tab_2}",
                            '0px',
                            '111px'
                        ],
                        [
                            "eid285",
                            "width",
                            0,
                            1000,
                            "easeOutBack",
                            "${Tab_1}",
                            '0px',
                            '409px'
                        ]
                    ]
                }
            },
            "Ref_S02": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: [48, 38, 700, 120, 'auto', 'auto'],
                            borderRadius: ['5px 5px', '5px 5px', '5px 5px', '5px 5px'],
                            boxShadow: ['', '0px', '0px', '50px', 0, 'rgba(0,0,0,1.00)'],
                            id: 'Rectangle',
                            stroke: ['2px', 'rgba(255,255,255,1.00)', 'solid'],
                            type: 'rect',
                            fill: ['rgba(122,120,120,1.00)']
                        },
                        {
                            type: 'text',
                            id: 'close',
                            text: 'X',
                            cursor: 'pointer',
                            font: ['Arial, Helvetica, sans-serif', [20, 'px'], 'rgba(255,255,255,1)', 'normal', 'none', 'normal', '', ''],
                            textStyle: ['', '', '41px', ''],
                            rect: [712, 40, 38, 40, 'auto', 'auto'],
                            textShadow: ['rgba(0,0,0,0.65)', '3px', '3px', '3px'],
                            align: 'center'
                        },
                        {
                            id: 'txt_Ref_S2',
                            type: 'image',
                            rect: [60, 51, 657, '102px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/txt_Ref_S2.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'hidden',
                            rect: [null, null, 800, 200]
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "Ref_S04": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: [48, 38, 700, 120, 'auto', 'auto'],
                            borderRadius: ['5px 5px', '5px 5px', '5px 5px', '5px 5px'],
                            boxShadow: ['', '0px', '0px', '50px', 0, 'rgba(0,0,0,1.00)'],
                            id: 'Rectangle',
                            stroke: ['2px', 'rgba(255,255,255,1.00)', 'solid'],
                            type: 'rect',
                            fill: ['rgba(122,120,120,1.00)']
                        },
                        {
                            type: 'text',
                            id: 'Text7',
                            text: 'X',
                            cursor: 'pointer',
                            font: ['Arial, Helvetica, sans-serif', [20, 'px'], 'rgba(255,255,255,1)', 'normal', 'none', 'normal', '', ''],
                            textStyle: ['', '', '53px', ''],
                            rect: [700, 40, 50, 50, 'auto', 'auto'],
                            textShadow: ['rgba(0,0,0,0.65)', '3px', '3px', '3px'],
                            align: 'center'
                        },
                        {
                            rect: [69, 90, 618, 22, 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [14, 'px'], 'rgba(255,255,255,1.00)', 'normal', 'none', 'normal', '', ''],
                            textStyle: ['', '', '18px', ''],
                            id: 'Text6',
                            text: '4. Data on File, Distributed by: AstraZeneca Pharmaceuticals LP, Revised: 11/2012.',
                            align: 'left',
                            type: 'text'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'hidden',
                            rect: [null, null, 800, 200]
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "Ref_S05": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: [48, 38, 700, 120, 'auto', 'auto'],
                            borderRadius: ['5px 5px', '5px 5px', '5px 5px', '5px 5px'],
                            boxShadow: ['', '0px', '0px', '50px', 0, 'rgba(0,0,0,1.00)'],
                            id: 'Rectangle',
                            stroke: ['2px', 'rgba(255,255,255,1.00)', 'solid'],
                            type: 'rect',
                            fill: ['rgba(122,120,120,1.00)']
                        },
                        {
                            type: 'text',
                            id: 'Text7',
                            text: 'X',
                            cursor: 'pointer',
                            font: ['Arial, Helvetica, sans-serif', [20, 'px'], 'rgba(255,255,255,1)', 'normal', 'none', 'normal', '', ''],
                            textStyle: ['', '', '53px', ''],
                            rect: [700, 40, 50, 50, 'auto', 'auto'],
                            textShadow: ['rgba(0,0,0,0.65)', '3px', '3px', '3px'],
                            align: 'center'
                        },
                        {
                            rect: [71, 111, 'auto', 'auto', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [14, 'px'], 'rgba(255,255,255,1.00)', 'normal', 'none', 'normal', '', 'nowrap'],
                            textStyle: ['', '', '18px', ''],
                            id: 'Text6',
                            text: '8. Kraus  A. et al.',
                            align: 'left',
                            type: 'text'
                        },
                        {
                            rect: [181, 111, 'auto', 'auto', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [14, 'px'], 'rgba(255,255,255,1.00)', '600', 'none', 'italic', '', 'nowrap'],
                            textStyle: ['', '', '18px', ''],
                            id: 'Text6Copy7',
                            text: 'Mod Pathol.',
                            align: 'left',
                            type: 'text'
                        },
                        {
                            rect: [264, 111, 'auto', 'auto', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [14, 'px'], 'rgba(255,255,255,1.00)', 'normal', 'none', 'normal', '', 'nowrap'],
                            textStyle: ['', '', '18px', ''],
                            id: 'Text6Copy8',
                            text: ' 2012;25(6):869-876.',
                            align: 'left',
                            type: 'text'
                        },
                        {
                            rect: [71, 131, 'auto', 'auto', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [14, 'px'], 'rgba(255,255,255,1.00)', 'normal', 'none', 'normal', '', 'nowrap'],
                            textStyle: ['', '', '18px', ''],
                            id: 'Text6Copy6',
                            text: '9. Kuter I. et al. ',
                            align: 'left',
                            type: 'text'
                        },
                        {
                            rect: [172, 131, 'auto', 'auto', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [14, 'px'], 'rgba(255,255,255,1.00)', '600', 'none', 'italic', '', 'nowrap'],
                            textStyle: ['', '', '18px', ''],
                            id: 'Text6Copy9',
                            text: 'Breast Cancer Res Treat',
                            align: 'left',
                            type: 'text'
                        },
                        {
                            rect: [343, 131, 'auto', 'auto', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [14, 'px'], 'rgba(255,255,255,1.00)', 'normal', 'none', 'normal', '', 'nowrap'],
                            textStyle: ['', '', '18px', ''],
                            id: 'Text6Copy10',
                            text: ' (2012) 133:237–246.',
                            align: 'left',
                            type: 'text'
                        },
                        {
                            rect: [86, 48, 609, 'auto', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [14, 'px'], 'rgba(252,177,22,1.00)', 'normal', 'none', 'normal', '', ''],
                            textStyle: ['', '', '18px', ''],
                            id: 'Text6Copy2',
                            text: '500mg (2 injections of the drug – each of 250mg) – 1 in a month. First month: 500mg – 2 times (second injection two weeks after the first dose) <br>A primary method for assessing hormone receptor status.',
                            align: 'left',
                            type: 'text'
                        },
                        {
                            rect: [71, 51, 18, 'auto', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [14, 'px'], 'rgba(252,177,22,1.00)', 'normal', 'none', 'normal', '', ''],
                            textStyle: ['', '', '18px', ''],
                            id: 'Text6Copy3',
                            text: '*<br><br>**',
                            align: 'left',
                            type: 'text'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'hidden',
                            rect: [null, null, 800, 200]
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "Ref_S06": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: [48, 38, 700, 120, 'auto', 'auto'],
                            borderRadius: ['5px 5px', '5px 5px', '5px 5px', '5px 5px'],
                            boxShadow: ['', '0px', '0px', '50px', 0, 'rgba(0,0,0,1.00)'],
                            id: 'Rectangle',
                            stroke: ['2px', 'rgba(255,255,255,1.00)', 'solid'],
                            type: 'rect',
                            fill: ['rgba(122,120,120,1.00)']
                        },
                        {
                            type: 'text',
                            id: 'Text7',
                            text: 'X',
                            cursor: 'pointer',
                            font: ['Arial, Helvetica, sans-serif', [20, 'px'], 'rgba(255,255,255,1)', 'normal', 'none', 'normal', '', ''],
                            textStyle: ['', '', '53px', ''],
                            rect: [700, 40, 50, 50, 'auto', 'auto'],
                            textShadow: ['rgba(0,0,0,0.65)', '3px', '3px', '3px'],
                            align: 'center'
                        },
                        {
                            rect: [91, 55, 612, 'auto', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [14, 'px'], 'rgba(252,177,22,1.00)', 'normal', 'none', 'normal', '', ''],
                            textStyle: ['', '', '18px', ''],
                            id: 'Text6Copy4',
                            text: '500mg (2 injections of the drug – each of 250mg) – 1 in a month. First month: 500mg – 2 times (second injection two weeks after the first dose) <br>Automated cellular imaging system.',
                            align: 'left',
                            type: 'text'
                        },
                        {
                            rect: [71, 58, 25, 'auto', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [14, 'px'], 'rgba(252,177,22,1.00)', 'normal', 'none', 'normal', '', ''],
                            textStyle: ['', '', '18px', ''],
                            id: 'Text6Copy5',
                            text: '*<br><br>**',
                            align: 'left',
                            type: 'text'
                        },
                        {
                            rect: [71, 131, 'auto', 'auto', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [14, 'px'], 'rgba(255,255,255,1)', 'normal', 'none', 'normal', '', 'nowrap'],
                            textStyle: ['', '', '18px', ''],
                            id: 'Text6Copy14',
                            text: '9. Kuter I. et al. ',
                            align: 'left',
                            type: 'text'
                        },
                        {
                            rect: [172, 131, 'auto', 'auto', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [14, 'px'], 'rgba(255,255,255,1)', '600', 'none', 'italic', '', 'nowrap'],
                            textStyle: ['', '', '18px', ''],
                            id: 'Text6Copy13',
                            text: 'Breast Cancer Res Treat',
                            align: 'left',
                            type: 'text'
                        },
                        {
                            rect: [343, 131, 'auto', 'auto', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [14, 'px'], 'rgba(255,255,255,1)', 'normal', 'none', 'normal', '', 'nowrap'],
                            textStyle: ['', '', '18px', ''],
                            id: 'Text6Copy12',
                            text: ' (2012) 133:237–246.',
                            align: 'left',
                            type: 'text'
                        }
                    ],
                    style: {
                        '${Text6Copy11}': {
                            rect: [71, 127, 0, 0],
                            textStyle: '{{:}{{:}:{:}}',
                            font: '{{:}{undefined{:}:{:}}{:}{{:}u{:}n{:}d'
                        },
                        '${symbolSelector}': {
                            overflow: 'hidden',
                            rect: [null, null, 800, 200]
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "Ref_S07": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: [48, 38, 700, 120, 'auto', 'auto'],
                            borderRadius: ['5px 5px', '5px 5px', '5px 5px', '5px 5px'],
                            boxShadow: ['', '0px', '0px', '50px', 0, 'rgba(0,0,0,1.00)'],
                            id: 'Rectangle',
                            stroke: ['2px', 'rgba(255,255,255,1.00)', 'solid'],
                            type: 'rect',
                            fill: ['rgba(122,120,120,1.00)']
                        },
                        {
                            type: 'text',
                            id: 'Text7',
                            text: 'X',
                            cursor: 'pointer',
                            font: ['Arial, Helvetica, sans-serif', [20, 'px'], 'rgba(255,255,255,1)', 'normal', 'none', 'normal', '', ''],
                            textStyle: ['', '', '53px', ''],
                            rect: [700, 40, 50, 50, 'auto', 'auto'],
                            textShadow: ['rgba(0,0,0,0.65)', '3px', '3px', '3px'],
                            align: 'center'
                        },
                        {
                            rect: [71, 114, 'auto', 'auto', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [14, 'px'], 'rgba(255,255,255,1.00)', 'normal', 'none', 'normal', '', 'nowrap'],
                            textStyle: ['', '', '18px', ''],
                            id: 'Text6',
                            text: '10.  Di Leo A, et al. ',
                            align: 'left',
                            type: 'text'
                        },
                        {
                            rect: [194, 114, 'auto', 'auto', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [14, 'px'], 'rgba(255,255,255,1.00)', '600', 'none', 'italic', '', 'nowrap'],
                            textStyle: ['', '', '18px', ''],
                            id: 'Text6Copy15',
                            text: 'J Clin Oncol ',
                            align: 'left',
                            type: 'text'
                        },
                        {
                            rect: [288, 114, 'auto', 'auto', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [14, 'px'], 'rgba(255,255,255,1.00)', 'normal', 'none', 'normal', '', 'nowrap'],
                            textStyle: ['', '', '18px', ''],
                            id: 'Text6Copy16',
                            text: '2010; 28: 4594-4600.',
                            align: 'left',
                            type: 'text'
                        },
                        {
                            rect: [71, 59, 'auto', 'auto', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [14, 'px'], 'rgba(252,177,22,1.00)', 'normal', 'none', 'normal', '', 'nowrap'],
                            textStyle: ['', '', '18px', ''],
                            id: 'Text6Copy6',
                            text: '* LDDC – Last Date of Data Collection <br>** cancer of the mammary gland with positive estrogen receptors',
                            align: 'left',
                            type: 'text'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'hidden',
                            rect: [null, null, 800, 200]
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "Ref_S08": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: [48, 38, 700, 120, 'auto', 'auto'],
                            borderRadius: ['5px 5px', '5px 5px', '5px 5px', '5px 5px'],
                            boxShadow: ['', '0px', '0px', '50px', 0, 'rgba(0,0,0,1.00)'],
                            id: 'Rectangle',
                            stroke: ['2px', 'rgba(255,255,255,1.00)', 'solid'],
                            type: 'rect',
                            fill: ['rgba(122,120,120,1.00)']
                        },
                        {
                            type: 'text',
                            id: 'Text7',
                            text: 'X',
                            cursor: 'pointer',
                            font: ['Arial, Helvetica, sans-serif', [20, 'px'], 'rgba(255,255,255,1)', 'normal', 'none', 'normal', '', ''],
                            textStyle: ['', '', '53px', ''],
                            rect: [700, 40, 50, 50, 'auto', 'auto'],
                            textShadow: ['rgba(0,0,0,0.65)', '3px', '3px', '3px'],
                            align: 'center'
                        },
                        {
                            rect: [73, 90, 'auto', 'auto', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [14, 'px'], 'rgba(255,255,255,1)', 'normal', 'none', 'normal', '', 'nowrap'],
                            textStyle: ['', '', '18px', ''],
                            id: 'Text6Copy2',
                            text: '10.  Di Leo A, et al. ',
                            align: 'left',
                            type: 'text'
                        },
                        {
                            rect: [196, 90, 'auto', 'auto', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [14, 'px'], 'rgba(255,255,255,1)', '600', 'none', 'italic', '', 'nowrap'],
                            textStyle: ['', '', '18px', ''],
                            id: 'Text6Copy',
                            text: 'J Clin Oncol ',
                            align: 'left',
                            type: 'text'
                        },
                        {
                            rect: [290, 90, 'auto', 'auto', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [14, 'px'], 'rgba(255,255,255,1)', 'normal', 'none', 'normal', '', 'nowrap'],
                            textStyle: ['', '', '18px', ''],
                            id: 'Text6',
                            text: '2010; 28: 4594-4600.',
                            align: 'left',
                            type: 'text'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'hidden',
                            rect: [null, null, 800, 200]
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "Ref_S09": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: [48, 38, 700, 120, 'auto', 'auto'],
                            borderRadius: ['5px 5px', '5px 5px', '5px 5px', '5px 5px'],
                            boxShadow: ['', '0px', '0px', '50px', 0, 'rgba(0,0,0,1.00)'],
                            id: 'Rectangle',
                            stroke: ['2px', 'rgba(255,255,255,1.00)', 'solid'],
                            type: 'rect',
                            fill: ['rgba(122,120,120,1.00)']
                        },
                        {
                            type: 'text',
                            id: 'Text7',
                            text: 'X',
                            cursor: 'pointer',
                            font: ['Arial, Helvetica, sans-serif', [20, 'px'], 'rgba(255,255,255,1)', 'normal', 'none', 'normal', '', ''],
                            textStyle: ['', '', '53px', ''],
                            rect: [700, 40, 50, 50, 'auto', 'auto'],
                            textShadow: ['rgba(0,0,0,0.65)', '3px', '3px', '3px'],
                            align: 'center'
                        },
                        {
                            rect: [71, 94, 'auto', 'auto', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [14, 'px'], 'rgba(255,255,255,1)', 'normal', 'none', 'normal', '', 'nowrap'],
                            textStyle: ['', '', '18px', ''],
                            id: 'Text6Copy19',
                            text: '10.  Di Leo A, et al. ',
                            align: 'left',
                            type: 'text'
                        },
                        {
                            rect: [194, 94, 'auto', 'auto', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [14, 'px'], 'rgba(255,255,255,1)', '600', 'none', 'italic', '', 'nowrap'],
                            textStyle: ['', '', '18px', ''],
                            id: 'Text6Copy18',
                            text: 'J Clin Oncol ',
                            align: 'left',
                            type: 'text'
                        },
                        {
                            rect: [288, 94, 'auto', 'auto', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [14, 'px'], 'rgba(255,255,255,1)', 'normal', 'none', 'normal', '', 'nowrap'],
                            textStyle: ['', '', '18px', ''],
                            id: 'Text6Copy17',
                            text: '2010; 28: 4594-4600.',
                            align: 'left',
                            type: 'text'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'hidden',
                            rect: [null, null, 800, 200]
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "Ref_S10": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: [48, 38, 700, 120, 'auto', 'auto'],
                            borderRadius: ['5px 5px', '5px 5px', '5px 5px', '5px 5px'],
                            boxShadow: ['', '0px', '0px', '50px', 0, 'rgba(0,0,0,1.00)'],
                            id: 'Rectangle',
                            stroke: ['2px', 'rgba(255,255,255,1.00)', 'solid'],
                            type: 'rect',
                            fill: ['rgba(122,120,120,1.00)']
                        },
                        {
                            type: 'text',
                            id: 'Text7',
                            text: 'X',
                            cursor: 'pointer',
                            font: ['Arial, Helvetica, sans-serif', [20, 'px'], 'rgba(255,255,255,1)', 'normal', 'none', 'normal', '', ''],
                            textStyle: ['', '', '53px', ''],
                            rect: [700, 40, 50, 50, 'auto', 'auto'],
                            textShadow: ['rgba(0,0,0,0.65)', '3px', '3px', '3px'],
                            align: 'center'
                        },
                        {
                            rect: [71, 72, 'auto', 'auto', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [14, 'px'], 'rgba(252,177,22,1.00)', 'normal', 'none', 'normal', '', 'nowrap'],
                            textStyle: ['', '', '18px', ''],
                            id: 'Text6Copy7',
                            text: '* Progression free survival.',
                            align: 'left',
                            type: 'text'
                        },
                        {
                            rect: [71, 114, 'auto', 'auto', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [14, 'px'], 'rgba(255,255,255,1)', 'normal', 'none', 'normal', '', 'nowrap'],
                            textStyle: ['', '', '18px', ''],
                            id: 'Text6Copy22',
                            text: '10.  Di Leo A, et al. ',
                            align: 'left',
                            type: 'text'
                        },
                        {
                            rect: [194, 114, 'auto', 'auto', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [14, 'px'], 'rgba(255,255,255,1)', '600', 'none', 'italic', '', 'nowrap'],
                            textStyle: ['', '', '18px', ''],
                            id: 'Text6Copy21',
                            text: 'J Clin Oncol ',
                            align: 'left',
                            type: 'text'
                        },
                        {
                            rect: [288, 114, 'auto', 'auto', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [14, 'px'], 'rgba(255,255,255,1)', 'normal', 'none', 'normal', '', 'nowrap'],
                            textStyle: ['', '', '18px', ''],
                            id: 'Text6Copy20',
                            text: '2010; 28: 4594-4600.',
                            align: 'left',
                            type: 'text'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'hidden',
                            rect: [null, null, 800, 200]
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "Ref_S11": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: [48, 38, 700, 120, 'auto', 'auto'],
                            borderRadius: ['5px 5px', '5px 5px', '5px 5px', '5px 5px'],
                            boxShadow: ['', '0px', '0px', '50px', 0, 'rgba(0,0,0,1.00)'],
                            id: 'Rectangle',
                            stroke: ['2px', 'rgba(255,255,255,1.00)', 'solid'],
                            type: 'rect',
                            fill: ['rgba(122,120,120,1.00)']
                        },
                        {
                            type: 'text',
                            id: 'Text7',
                            text: 'X',
                            cursor: 'pointer',
                            font: ['Arial, Helvetica, sans-serif', [20, 'px'], 'rgba(255,255,255,1)', 'normal', 'none', 'normal', '', ''],
                            textStyle: ['', '', '53px', ''],
                            rect: [700, 40, 50, 50, 'auto', 'auto'],
                            textShadow: ['rgba(0,0,0,0.65)', '3px', '3px', '3px'],
                            align: 'center'
                        },
                        {
                            rect: [71, 94, 'auto', 'auto', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [14, 'px'], 'rgba(255,255,255,1)', 'normal', 'none', 'normal', '', 'nowrap'],
                            textStyle: ['', '', '18px', ''],
                            id: 'Text6Copy25',
                            text: '10.  Di Leo A, et al. ',
                            align: 'left',
                            type: 'text'
                        },
                        {
                            rect: [194, 94, 'auto', 'auto', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [14, 'px'], 'rgba(255,255,255,1)', '600', 'none', 'italic', '', 'nowrap'],
                            textStyle: ['', '', '18px', ''],
                            id: 'Text6Copy24',
                            text: 'J Clin Oncol ',
                            align: 'left',
                            type: 'text'
                        },
                        {
                            rect: [288, 94, 'auto', 'auto', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [14, 'px'], 'rgba(255,255,255,1)', 'normal', 'none', 'normal', '', 'nowrap'],
                            textStyle: ['', '', '18px', ''],
                            id: 'Text6Copy23',
                            text: '2010; 28: 4594-4600.',
                            align: 'left',
                            type: 'text'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'hidden',
                            rect: [null, null, 800, 200]
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "Ref_S12": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: [48, 38, 700, 120, 'auto', 'auto'],
                            borderRadius: ['5px 5px', '5px 5px', '5px 5px', '5px 5px'],
                            boxShadow: ['', '0px', '0px', '50px', 0, 'rgba(0,0,0,1.00)'],
                            id: 'Rectangle',
                            stroke: ['2px', 'rgba(255,255,255,1.00)', 'solid'],
                            type: 'rect',
                            fill: ['rgba(122,120,120,1.00)']
                        },
                        {
                            type: 'text',
                            id: 'Text7',
                            text: 'X',
                            cursor: 'pointer',
                            font: ['Arial, Helvetica, sans-serif', [20, 'px'], 'rgba(255,255,255,1)', 'normal', 'none', 'normal', '', ''],
                            textStyle: ['', '', '53px', ''],
                            rect: [700, 40, 50, 50, 'auto', 'auto'],
                            textShadow: ['rgba(0,0,0,0.65)', '3px', '3px', '3px'],
                            align: 'center'
                        },
                        {
                            rect: [66, 72, 'auto', 'auto', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [14, 'px'], 'rgba(255,255,255,1)', 'normal', 'none', 'normal', '', 'nowrap'],
                            textStyle: ['', '', '18px', ''],
                            id: 'Text6Copy38',
                            text: '10.  Di Leo A, et al. ',
                            align: 'left',
                            type: 'text'
                        },
                        {
                            rect: [189, 72, 'auto', 'auto', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [14, 'px'], 'rgba(255,255,255,1)', '600', 'none', 'italic', '', 'nowrap'],
                            textStyle: ['', '', '18px', ''],
                            id: 'Text6Copy37',
                            text: 'J Clin Oncol ',
                            align: 'left',
                            type: 'text'
                        },
                        {
                            rect: [280, 72, 'auto', 'auto', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [14, 'px'], 'rgba(255,255,255,1)', 'normal', 'none', 'normal', '', 'nowrap'],
                            textStyle: ['', '', '18px', ''],
                            id: 'Text6Copy36',
                            text: '2010; 28: 4594-4600.',
                            align: 'left',
                            type: 'text'
                        },
                        {
                            rect: [66, 100, 'auto', 'auto', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [14, 'px'], 'rgba(255,255,255,1)', 'normal', 'none', 'normal', '', 'nowrap'],
                            textStyle: ['', '', '18px', ''],
                            id: 'Text6Copy41',
                            text: '11. Ingle N.  et al.',
                            align: 'left',
                            type: 'text'
                        },
                        {
                            rect: [180, 100, 'auto', 'auto', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [14, 'px'], 'rgba(255,255,255,1)', '600', 'none', 'italic', '', 'nowrap'],
                            textStyle: ['', '', '18px', ''],
                            id: 'Text6Copy40',
                            text: 'J Clin Oncol',
                            align: 'left',
                            type: 'text'
                        },
                        {
                            rect: [272, 100, 'auto', 'auto', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [14, 'px'], 'rgba(255,255,255,1)', 'normal', 'none', 'normal', '', 'nowrap'],
                            textStyle: ['', '', '18px', ''],
                            id: 'Text6Copy39',
                            text: '(2006) 24:1052-1056.',
                            align: 'left',
                            type: 'text'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'hidden',
                            rect: [null, null, 800, 200]
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "Ref_S03": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: [48, 38, 700, 120, 'auto', 'auto'],
                            borderRadius: ['5px 5px', '5px 5px', '5px 5px', '5px 5px'],
                            boxShadow: ['', '0px', '0px', '50px', 0, 'rgba(0,0,0,1.00)'],
                            id: 'Rectangle',
                            stroke: ['2px', 'rgba(255,255,255,1.00)', 'solid'],
                            type: 'rect',
                            fill: ['rgba(122,120,120,1.00)']
                        },
                        {
                            rect: [71, 90, 'auto', 'auto', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [14, 'px'], 'rgba(255,255,255,1.00)', 'normal', 'none', 'normal', '', 'nowrap'],
                            textStyle: ['', '', '18px', ''],
                            id: 'Text6',
                            text: '1. NICE technology appraisal guidance 239, Issued: December 2011, last updated: 28 June 2012.<br>2. Nicholson R. and Johnston S. ',
                            align: 'left',
                            type: 'text'
                        },
                        {
                            rect: [278, 108, 'auto', 'auto', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [14, 'px'], 'rgba(255,255,255,1.00)', '600', 'none', 'italic', '', 'nowrap'],
                            textStyle: ['', '', '18px', ''],
                            id: 'Text6Copy3',
                            text: 'Breast Cancer Research and Treatment',
                            align: 'left',
                            type: 'text'
                        },
                        {
                            rect: [550, 108, 'auto', 'auto', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [14, 'px'], 'rgba(255,255,255,1.00)', 'normal', 'none', 'normal', '', 'nowrap'],
                            textStyle: ['', '', '18px', ''],
                            id: 'Text6Copy4',
                            text: '(2005) 93: S3–S10.',
                            align: 'left',
                            type: 'text'
                        },
                        {
                            rect: [71, 54, 'auto', 'auto', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [14, 'px'], 'rgba(252,177,22,1.00)', '400', 'none', 'normal', '', 'nowrap'],
                            textStyle: ['', '', '18px', ''],
                            id: 'Text6Copy',
                            text: '*  Positive receptors towards estrogens',
                            align: 'left',
                            type: 'text'
                        },
                        {
                            type: 'text',
                            id: 'close',
                            text: 'X',
                            cursor: 'pointer',
                            font: ['Arial, Helvetica, sans-serif', [20, 'px'], 'rgba(255,255,255,1)', 'normal', 'none', 'normal', '', ''],
                            textStyle: ['', '', '53px', ''],
                            rect: [700, 40, 50, 50, 'auto', 'auto'],
                            textShadow: ['rgba(0,0,0,0.65)', '3px', '3px', '3px'],
                            align: 'center'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'hidden',
                            rect: [null, null, 800, 200]
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "Ref_S13": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: [48, 38, 700, 120, 'auto', 'auto'],
                            borderRadius: ['5px 5px', '5px 5px', '5px 5px', '5px 5px'],
                            boxShadow: ['', '0px', '0px', '50px', 0, 'rgb(0,0,0)'],
                            id: 'Rectangle',
                            stroke: ['2px', 'rgb(255, 255, 255)', 'solid'],
                            type: 'rect',
                            fill: ['rgba(122,120,120,1)']
                        },
                        {
                            rect: [71, 94, 'auto', 'auto', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [14, 'px'], 'rgba(255,255,255,1)', 'normal', 'none', 'normal', '', 'nowrap'],
                            textStyle: ['', '', '18px', ''],
                            id: 'Text6Copy30',
                            text: '10.  Di Leo A, et al. ',
                            align: 'left',
                            type: 'text'
                        },
                        {
                            rect: [194, 94, 'auto', 'auto', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [14, 'px'], 'rgba(255,255,255,1)', '600', 'none', 'italic', '', 'nowrap'],
                            textStyle: ['', '', '18px', ''],
                            id: 'Text6Copy29',
                            text: 'J Clin Oncol ',
                            align: 'left',
                            type: 'text'
                        },
                        {
                            rect: [288, 94, 'auto', 'auto', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [14, 'px'], 'rgba(255,255,255,1)', 'normal', 'none', 'normal', '', 'nowrap'],
                            textStyle: ['', '', '18px', ''],
                            id: 'Text6Copy28',
                            text: '2010; 28: 4594-4600.',
                            align: 'left',
                            type: 'text'
                        },
                        {
                            type: 'text',
                            id: 'Text7',
                            text: 'X',
                            cursor: 'pointer',
                            font: ['Arial, Helvetica, sans-serif', [20, 'px'], 'rgba(255,255,255,1)', 'normal', 'none', 'normal', '', ''],
                            textStyle: ['', '', '53px', ''],
                            rect: [700, 40, 50, 50, 'auto', 'auto'],
                            textShadow: ['rgba(0,0,0,0.65)', '3px', '3px', '3px'],
                            align: 'center'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'hidden',
                            rect: [null, null, 800, 200]
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "Ref_S14": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: [48, 38, 700, 120, 'auto', 'auto'],
                            borderRadius: ['5px 5px', '5px 5px', '5px 5px', '5px 5px'],
                            boxShadow: ['', '0px', '0px', '50px', 0, 'rgb(0,0,0)'],
                            id: 'RectangleCopy',
                            stroke: ['2px', 'rgb(255, 255, 255)', 'solid'],
                            type: 'rect',
                            fill: ['rgba(122,120,120,1)']
                        },
                        {
                            type: 'text',
                            id: 'Text7',
                            text: 'X',
                            cursor: 'pointer',
                            font: ['Arial, Helvetica, sans-serif', [20, 'px'], 'rgba(255,255,255,1)', 'normal', 'none', 'normal', '', ''],
                            textStyle: ['', '', '53px', ''],
                            rect: [700, 40, 50, 50, 'auto', 'auto'],
                            textShadow: ['rgba(0,0,0,0.65)', '3px', '3px', '3px'],
                            align: 'center'
                        },
                        {
                            rect: [71, 89, 'auto', 'auto', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [14, 'px'], 'rgba(255,255,255,1.00)', 'normal', 'none', 'normal', '', 'nowrap'],
                            textStyle: ['', '', '18px', ''],
                            id: 'Text6',
                            text: '12. Robertson J. et al.',
                            align: 'left',
                            type: 'text'
                        },
                        {
                            rect: [216, 89, 'auto', 'auto', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [14, 'px'], 'rgba(255,255,255,1.00)', '600', 'none', 'italic', '', 'nowrap'],
                            textStyle: ['', '', '18px', ''],
                            id: 'Text6Copy34',
                            text: 'Breast Cancer Res Treat',
                            align: 'left',
                            type: 'text'
                        },
                        {
                            rect: [389, 89, 'auto', 'auto', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [14, 'px'], 'rgba(255,255,255,1.00)', 'normal', 'none', 'normal', '', 'nowrap'],
                            textStyle: ['', '', '18px', ''],
                            id: 'Text6Copy35',
                            text: '(2012) 136:503–511.',
                            align: 'left',
                            type: 'text'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'hidden',
                            rect: [null, null, 800, 200]
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "Ref_S15": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: [48, 38, 700, 120, 'auto', 'auto'],
                            borderRadius: ['5px 5px', '5px 5px', '5px 5px', '5px 5px'],
                            boxShadow: ['', '0px', '0px', '50px', 0, 'rgb(0,0,0)'],
                            id: 'RectangleCopy2',
                            stroke: ['2px', 'rgb(255, 255, 255)', 'solid'],
                            type: 'rect',
                            fill: ['rgba(122,120,120,1)']
                        },
                        {
                            type: 'text',
                            id: 'Text7',
                            text: 'X',
                            cursor: 'pointer',
                            font: ['Arial, Helvetica, sans-serif', [20, 'px'], 'rgba(255,255,255,1)', 'normal', 'none', 'normal', '', ''],
                            textStyle: ['', '', '53px', ''],
                            rect: [700, 40, 50, 50, 'auto', 'auto'],
                            textShadow: ['rgba(0,0,0,0.65)', '3px', '3px', '3px'],
                            align: 'center'
                        },
                        {
                            rect: [71, 89, 'auto', 'auto', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [14, 'px'], 'rgba(255,255,255,1)', 'normal', 'none', 'normal', '', 'nowrap'],
                            textStyle: ['', '', '18px', ''],
                            id: 'Text6Copy2',
                            text: '12. Robertson J. et al.',
                            align: 'left',
                            type: 'text'
                        },
                        {
                            rect: [216, 89, 'auto', 'auto', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [14, 'px'], 'rgba(255,255,255,1)', '600', 'none', 'italic', '', 'nowrap'],
                            textStyle: ['', '', '18px', ''],
                            id: 'Text6Copy',
                            text: 'Breast Cancer Res Treat',
                            align: 'left',
                            type: 'text'
                        },
                        {
                            rect: [389, 89, 'auto', 'auto', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [14, 'px'], 'rgba(255,255,255,1)', 'normal', 'none', 'normal', '', 'nowrap'],
                            textStyle: ['', '', '18px', ''],
                            id: 'Text6',
                            text: '(2012) 136:503–511.',
                            align: 'left',
                            type: 'text'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'hidden',
                            rect: [null, null, 800, 200]
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "Ref_S16": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: [48, 38, 700, 120, 'auto', 'auto'],
                            borderRadius: ['5px 5px', '5px 5px', '5px 5px', '5px 5px'],
                            boxShadow: ['', '0px', '0px', '50px', 0, 'rgba(0,0,0,1.00)'],
                            id: 'Rectangle',
                            stroke: ['2px', 'rgba(255,255,255,1.00)', 'solid'],
                            type: 'rect',
                            fill: ['rgba(122,120,120,1.00)']
                        },
                        {
                            type: 'text',
                            id: 'Text7',
                            text: 'X',
                            cursor: 'pointer',
                            font: ['Arial, Helvetica, sans-serif', [20, 'px'], 'rgba(255,255,255,1)', 'normal', 'none', 'normal', '', ''],
                            textStyle: ['', '', '53px', ''],
                            rect: [700, 40, 50, 50, 'auto', 'auto'],
                            textShadow: ['rgba(0,0,0,0.65)', '3px', '3px', '3px'],
                            align: 'center'
                        },
                        {
                            rect: [71, 91, 'auto', 'auto', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [14, 'px'], 'rgba(255,255,255,1.00)', 'normal', 'none', 'normal', '', 'nowrap'],
                            textStyle: ['', '', '18px', ''],
                            id: 'Text6',
                            text: '13. AstraZeneca Pharmaceuticals LP Wilmington, DE 19850, Rev. 12/2011.',
                            align: 'left',
                            type: 'text'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'hidden',
                            rect: [null, null, 800, 200]
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "Slide_02": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'Back2',
                            type: 'image',
                            rect: ['0', '0', '1024px', '768px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/Cover/Back.png', '0px', '0px']
                        },
                        {
                            type: 'rect',
                            id: 'Slide_2',
                            stroke: [2, 'rgb(255, 255, 255)', 'none'],
                            rect: ['0', '0', '1024px', '768px', 'auto', 'auto'],
                            fill: ['rgba(255,255,255,0.00)']
                        },
                        {
                            type: 'rect',
                            overflow: 'hidden',
                            id: 'BackGround',
                            symbolName: 'BackGround',
                            rect: ['0', '150', '1038', '567', 'auto', 'auto']
                        },
                        {
                            type: 'image',
                            id: 'S2_11',
                            rect: ['60', '639', '697px', '52px', 'auto', 'auto'],
                            clip: 'rect(0px -10.8671875px 52px 0px)',
                            fill: ['rgba(0,0,0,0)', 'images/S2/S2_11.png', '0px', '0px']
                        },
                        {
                            id: 'S2_10',
                            type: 'image',
                            rect: ['680', '506', '291px', '89px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/S2/S2_10.png', '0px', '-108.296875px']
                        },
                        {
                            id: 'S2_08',
                            type: 'image',
                            rect: ['671', '195', '309px', '76px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/S2/S2_08.png', '0px', '-84.21875px']
                        },
                        {
                            id: 'S2_07',
                            type: 'image',
                            rect: ['366', '506', '291px', '56px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/S2/S2_07.png', '315.1875px', '0px']
                        },
                        {
                            id: 'S2_05',
                            type: 'image',
                            rect: ['357', '195', '309px', '76px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/S2/S2_05.png', '0px', '90.8203125px']
                        },
                        {
                            id: 'S2_04',
                            type: 'image',
                            rect: ['55', '506', '291px', '56px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/S2/S2_04.png', '308.296875px', '0px']
                        },
                        {
                            font: ['Arial, Helvetica, sans-serif', [12, 'px'], 'rgba(0,0,0,1.00)', 'normal', 'none', 'normal', 'break-word', ''],
                            type: 'text',
                            text: '5',
                            id: 'Text',
                            opacity: '0',
                            align: 'center',
                            rect: ['295', '512', '20', 'auto', 'auto', 'auto']
                        },
                        {
                            font: ['Arial, Helvetica, sans-serif', [12, 'px'], 'rgba(0,0,0,1.00)', 'normal', 'none', 'normal', 'break-word', ''],
                            type: 'text',
                            text: '6',
                            id: 'TextCopy',
                            opacity: '0',
                            align: 'center',
                            rect: ['591', '512', '20', 'auto', 'auto', 'auto']
                        },
                        {
                            font: ['Arial, Helvetica, sans-serif', [12, 'px'], 'rgba(0,0,0,1.00)', 'normal', 'none', 'normal', 'break-word', ''],
                            type: 'text',
                            text: '4, 6',
                            id: 'TextCopy2',
                            opacity: '0',
                            align: 'center',
                            rect: ['928', '523', '40', 'auto', 'auto', 'auto']
                        },
                        {
                            id: 'S2_02',
                            type: 'image',
                            rect: ['43', '195', '309px', '76px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/S2/S2_02.png', '-330.96875px', '0px']
                        },
                        {
                            type: 'image',
                            filter: [0, 0, 1, 1, 0, 0, 0, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            id: 'S2_01',
                            rect: ['60', '65', '924px', '75px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/S2/S2_01.png', '-943.9453125px', '0px']
                        },
                        {
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/S2/S2_03.png', '0px', '0px'],
                            rect: ['73', '292', '250', '168px', 'auto', 'auto'],
                            id: 'S2_03',
                            opacity: '0',
                            cursor: 'pointer',
                            boxShadow: ['', 3, 3, 3, 0, 'rgba(0,0,0,0.65)']
                        },
                        {
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/S2/S2_06.png', '0px', '0px'],
                            rect: ['386', '292', '250', '168px', 'auto', 'auto'],
                            id: 'S2_06',
                            opacity: '0',
                            cursor: 'pointer',
                            boxShadow: ['', 3, 3, 3, 0, 'rgba(0,0,0,0.65)']
                        },
                        {
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/S2/S2_09.png', '0px', '0px'],
                            rect: ['701', '292', '250', '168px', 'auto', 'auto'],
                            id: 'S2_09',
                            opacity: '0',
                            cursor: 'pointer',
                            boxShadow: ['', 3, 3, 3, 0, 'rgba(0,0,0,0.65)']
                        },
                        {
                            type: 'rect',
                            overflow: 'hidden',
                            id: 'Ref_S02',
                            symbolName: 'Ref_S02',
                            clip: 'rect(100px 400px 100px 400px)',
                            rect: ['0', '0', '800', '200', 'auto', 'auto']
                        },
                        {
                            type: 'image',
                            rect: ['902', '104', '96px', '96px', 'auto', 'auto'],
                            display: 'none',
                            id: 'i_info2',
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/i_info2.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'i_info1',
                            rect: ['931', '135', '36px', '36px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/i_info1.png', '0px', '0px']
                        },
                        {
                            type: 'rect',
                            overflow: 'hidden',
                            id: 'Video_Frame',
                            symbolName: 'Video_Frame',
                            rect: ['1024', '0', '1024', '768', 'auto', 'auto']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1024', '768']
                        }
                    }
                },
                timeline: {
                    duration: 1500,
                    autoPlay: false,
                    data: [
                        [
                            "eid886",
                            "opacity",
                            750,
                            250,
                            "linear",
                            "${S2_06}",
                            '0',
                            '1'
                        ],
                        [
                            "eid702",
                            "opacity",
                            1250,
                            250,
                            "linear",
                            "${TextCopy2}",
                            '0',
                            '1'
                        ],
                        [
                            "eid345",
                            "background-position",
                            250,
                            500,
                            "easeOutBack",
                            "${S2_02}",
                            [-330.96875,0],
                            [0,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid343",
                            "background-position",
                            250,
                            500,
                            "easeOutBack",
                            "${S2_05}",
                            [0,90.8203125],
                            [0,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid341",
                            "background-position",
                            250,
                            500,
                            "easeOutBack",
                            "${S2_08}",
                            [0,-84.21875],
                            [0,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid890",
                            "opacity",
                            750,
                            250,
                            "linear",
                            "${S2_09}",
                            '0',
                            '1'
                        ],
                        [
                            "eid323",
                            "display",
                            0,
                            0,
                            "linear",
                            "${i_info2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid357",
                            "background-position",
                            1000,
                            250,
                            "swing",
                            "${S2_04}",
                            [308.296875,0],
                            [0,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid353",
                            "background-position",
                            1000,
                            250,
                            "swing",
                            "${S2_10}",
                            [0,-108.296875],
                            [0,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid359",
                            "clip",
                            1250,
                            250,
                            "swing",
                            "${S2_11}",
                            [0,-10.8671875,52,0],
                            [0,697,52,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid339",
                            "background-position",
                            0,
                            250,
                            "swing",
                            "${S2_01}",
                            [-943.9453125,0],
                            [0,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid888",
                            "opacity",
                            750,
                            250,
                            "linear",
                            "${S2_03}",
                            '0',
                            '1'
                        ],
                        [
                            "eid706",
                            "opacity",
                            1250,
                            250,
                            "linear",
                            "${TextCopy}",
                            '0',
                            '1'
                        ],
                        [
                            "eid355",
                            "background-position",
                            1000,
                            250,
                            "swing",
                            "${S2_07}",
                            [315.1875,0],
                            [0,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid704",
                            "opacity",
                            1250,
                            250,
                            "linear",
                            "${Text}",
                            '0',
                            '1'
                        ]
                    ]
                }
            },
            "Slide_03": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'Back',
                            type: 'image',
                            rect: ['0', '0', '1024px', '768px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/Cover/Back.png', '0px', '0px']
                        },
                        {
                            type: 'rect',
                            id: 'Slide_3',
                            stroke: [2, 'rgb(255, 255, 255)', 'none'],
                            rect: ['0', '0', '1024px', '768px', 'auto', 'auto'],
                            fill: ['rgba(255,255,255,0.00)']
                        },
                        {
                            transform: [[], [], [], ['0.1', '0.1']],
                            tag: 'img',
                            type: 'image',
                            id: 'S3_02',
                            opacity: '1',
                            rect: ['-2092', '-1966', '4650', '4720', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/S3/S3_02.png', '0px', '0px']
                        },
                        {
                            type: 'rect',
                            overflow: 'hidden',
                            id: 'BackGround',
                            symbolName: 'BackGround',
                            rect: ['0', '150', '1038', '567', 'auto', 'auto']
                        },
                        {
                            id: 'S3_01',
                            type: 'image',
                            rect: ['60', '98', '227px', '39px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/S3/S3_01.png', '0px', '-47.5625px']
                        },
                        {
                            type: 'image',
                            id: 'S3_03',
                            rect: ['487', '240', '506px', '263px', 'auto', 'auto'],
                            clip: 'rect(0px -33.7890625px 263px 0px)',
                            fill: ['rgba(0,0,0,0)', 'images/S3/S3_03.png', '0px', '0px']
                        },
                        {
                            id: 'S3_04',
                            type: 'image',
                            rect: ['50', '655', '709px', '28px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/S3/S3_04.png', '-720.234375px', '0px']
                        },
                        {
                            type: 'rect',
                            overflow: 'hidden',
                            id: 'Ref_S03',
                            symbolName: 'Ref_S03',
                            clip: 'rect(100px 400px 100px 400px)',
                            rect: ['0', '0', '800', '200', 'auto', 'auto']
                        },
                        {
                            type: 'image',
                            rect: ['902', '104', '96px', '96px', 'auto', 'auto'],
                            display: 'none',
                            id: 'i_info2',
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/i_info2.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'i_info1',
                            rect: ['931', '135', '36px', '36px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/i_info1.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1024', '768']
                        }
                    }
                },
                timeline: {
                    duration: 1000,
                    autoPlay: false,
                    data: [
                        [
                            "eid361",
                            "background-position",
                            0,
                            500,
                            "swing",
                            "${S3_01}",
                            [0,-47.5625],
                            [0,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid373",
                            "clip",
                            500,
                            250,
                            "swing",
                            "${S3_03}",
                            [0,-33.7890625,263,0],
                            [0,506,263,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid324",
                            "display",
                            0,
                            0,
                            "linear",
                            "${i_info2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid375",
                            "background-position",
                            750,
                            250,
                            "swing",
                            "${S3_04}",
                            [-720.234375,0],
                            [0,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ]
                    ]
                }
            },
            "Slide_04": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'Back2',
                            type: 'image',
                            rect: ['0', '0', '1024px', '768px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/Cover/Back.png', '0px', '0px']
                        },
                        {
                            type: 'rect',
                            id: 'Slide_4',
                            stroke: [2, 'rgb(255, 255, 255)', 'none'],
                            rect: ['0', '0', '1024px', '768px', 'auto', 'auto'],
                            fill: ['rgba(255,255,255,0.00)']
                        },
                        {
                            type: 'rect',
                            overflow: 'hidden',
                            id: 'BackGround',
                            symbolName: 'BackGround',
                            rect: ['0', '150', '1038', '567', 'auto', 'auto']
                        },
                        {
                            type: 'image',
                            id: 'S4_01',
                            rect: ['60', '63', '925px', '75px', 'auto', 'auto'],
                            clip: 'rect(0px -18.203125px 75px 0px)',
                            fill: ['rgba(0,0,0,0)', 'images/S4/S4_01.png', '0px', '0px']
                        },
                        {
                            transform: [[], ['360'], [], ['0', '0']],
                            rect: ['51', '176', '922px', '428px', 'auto', 'auto'],
                            id: 'S4_02',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/S4/S4_02.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'S4_03',
                            opacity: '0',
                            rect: ['213', '193', '598px', '30px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/S4/S4_03.png', '0px', '-36.34375px']
                        },
                        {
                            id: 'S4_04',
                            type: 'image',
                            rect: ['112', '237', '438px', '44px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/S4/S4_04.png', '0px', '-50.71875px']
                        },
                        {
                            type: 'image',
                            id: 'S4_05',
                            rect: ['117', '274', '135px', '231px', 'auto', 'auto'],
                            clip: 'rect(0px 135px -7.6666259765625px 0px)',
                            fill: ['rgba(0,0,0,0)', 'images/S4/S4_05.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'S4_06',
                            rect: ['264', '274', '135px', '231px', 'auto', 'auto'],
                            clip: 'rect(0px 135px -10.0364990234375px 0px)',
                            fill: ['rgba(0,0,0,0)', 'images/S4/S4_06.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'S4_07',
                            rect: ['411', '274', '135px', '231px', 'auto', 'auto'],
                            clip: 'rect(0px 135px -8.9998779296875px 0px)',
                            fill: ['rgba(0,0,0,0)', 'images/S4/S4_07.png', '0px', '0px']
                        },
                        {
                            id: 'S4_08',
                            type: 'image',
                            rect: ['649', '237', '207px', '43px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/S4/S4_08.png', '0px', '-54.911499023438px']
                        },
                        {
                            type: 'image',
                            id: 'S4_09',
                            rect: ['685', '274', '135px', '231px', 'auto', 'auto'],
                            clip: 'rect(0px 135px -7.223876953125px 0px)',
                            fill: ['rgba(0,0,0,0)', 'images/S4/S4_09.png', '0px', '0px']
                        },
                        {
                            id: 'S4_10',
                            type: 'image',
                            rect: ['117', '433', '782px', '48px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/S4/S4_10.png', '-805.33325195312px', '0px']
                        },
                        {
                            id: 'S4_11',
                            type: 'image',
                            rect: ['216', '546', '160px', '47px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/S4/S4_11.png', '-181.67700195312px', '-50.71875px']
                        },
                        {
                            id: 'S4_12',
                            type: 'image',
                            rect: ['272', '520', '160px', '47px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/S4/S4_12.png', '-168.9375px', '-49.729248046875px']
                        },
                        {
                            transform: [[], [], [], ['0', '0']],
                            rect: ['453', '534', '312px', '54px', 'auto', 'auto'],
                            id: 'S4_13',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/S4/S4_13.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'S4_14',
                            opacity: '0',
                            rect: ['62', '644', '119', '9', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/S4/S4_14.png', '0px', '-59.755126953125px']
                        },
                        {
                            type: 'rect',
                            overflow: 'hidden',
                            id: 'Ref_S04',
                            symbolName: 'Ref_S04',
                            clip: 'rect(100px 400px 100px 400px)',
                            rect: ['0', '0', '800', '200', 'auto', 'auto']
                        },
                        {
                            type: 'image',
                            rect: ['902', '104', '96px', '96px', 'auto', 'auto'],
                            display: 'none',
                            id: 'i_info2',
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/i_info2.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'i_info1',
                            rect: ['931', '135', '36px', '36px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/i_info1.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1024', '768']
                        }
                    }
                },
                timeline: {
                    duration: 3500,
                    autoPlay: false,
                    data: [
                        [
                            "eid814",
                            "clip",
                            1250,
                            250,
                            "easeOutBack",
                            "${S4_06}",
                            [0,135,-10.0364990234375,0],
                            [0,135,231,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid798",
                            "rotateZ",
                            250,
                            250,
                            "easeOutBack",
                            "${S4_02}",
                            '360deg',
                            '0deg'
                        ],
                        [
                            "eid834",
                            "opacity",
                            3000,
                            250,
                            "easeOutBack",
                            "${S4_13}",
                            '0',
                            '1'
                        ],
                        [
                            "eid828",
                            "background-position",
                            2750,
                            250,
                            "easeOutBack",
                            "${S4_12}",
                            [-168.9375,-49.729248046875],
                            [0,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid826",
                            "background-position",
                            2500,
                            250,
                            "easeOutBack",
                            "${S4_11}",
                            [-181.67700195312,-50.71875],
                            [0,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid804",
                            "opacity",
                            250,
                            250,
                            "easeOutBack",
                            "${S4_02}",
                            '0',
                            '1'
                        ],
                        [
                            "eid812",
                            "clip",
                            1000,
                            250,
                            "easeOutBack",
                            "${S4_05}",
                            [0,135,-7.6666259765625,0],
                            [0,135,231,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid824",
                            "background-position",
                            2250,
                            250,
                            "easeOutBack",
                            "${S4_10}",
                            [-805.33325195312,0],
                            [0,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid808",
                            "opacity",
                            500,
                            250,
                            "easeOutBack",
                            "${S4_03}",
                            '0',
                            '1'
                        ],
                        [
                            "eid325",
                            "display",
                            0,
                            0,
                            "linear",
                            "${i_info2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid810",
                            "background-position",
                            750,
                            250,
                            "easeOutBack",
                            "${S4_04}",
                            [0,-50.71875],
                            [0,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid838",
                            "opacity",
                            3250,
                            250,
                            "easeOutBack",
                            "${S4_14}",
                            '0',
                            '1'
                        ],
                        [
                            "eid832",
                            "scaleY",
                            3000,
                            250,
                            "easeOutBack",
                            "${S4_13}",
                            '0',
                            '1'
                        ],
                        [
                            "eid802",
                            "scaleY",
                            250,
                            250,
                            "easeOutBack",
                            "${S4_02}",
                            '0',
                            '1'
                        ],
                        [
                            "eid377",
                            "clip",
                            0,
                            250,
                            "swing",
                            "${S4_01}",
                            [0,-18.203125,75,0],
                            [0,925,75,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid846",
                            "width",
                            3250,
                            250,
                            "easeOutBack",
                            "${S4_14}",
                            '119px',
                            '720px'
                        ],
                        [
                            "eid820",
                            "clip",
                            2000,
                            250,
                            "easeOutBack",
                            "${S4_09}",
                            [0,135,-7.223876953125,0],
                            [0,135,231,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid816",
                            "clip",
                            1500,
                            250,
                            "easeOutBack",
                            "${S4_07}",
                            [0,135,-8.9998779296875,0],
                            [0,135,231,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid836",
                            "background-position",
                            3250,
                            250,
                            "easeOutBack",
                            "${S4_14}",
                            [0,-59.755126953125],
                            [0,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid800",
                            "scaleX",
                            250,
                            250,
                            "easeOutBack",
                            "${S4_02}",
                            '0',
                            '1'
                        ],
                        [
                            "eid806",
                            "background-position",
                            500,
                            250,
                            "easeOutBack",
                            "${S4_03}",
                            [0,-36.34375],
                            [0,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid830",
                            "scaleX",
                            3000,
                            250,
                            "easeOutBack",
                            "${S4_13}",
                            '0',
                            '1'
                        ],
                        [
                            "eid844",
                            "height",
                            3250,
                            250,
                            "easeOutBack",
                            "${S4_14}",
                            '9px',
                            '52px'
                        ],
                        [
                            "eid818",
                            "background-position",
                            1750,
                            250,
                            "easeOutBack",
                            "${S4_08}",
                            [0,-54.911499023438],
                            [0,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ]
                    ]
                }
            },
            "Slide_05": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'Back3',
                            type: 'image',
                            rect: ['0', '0', '1024px', '768px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/Cover/Back.png', '0px', '0px']
                        },
                        {
                            rect: [0, 0, '1024px', '768px', 'auto', 'auto'],
                            id: 'Slide_5',
                            stroke: [2, 'rgb(255, 255, 255)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,0.00)']
                        },
                        {
                            rect: [0, 150, 1038, 567, 'auto', 'auto'],
                            overflow: 'hidden',
                            id: 'BackGround',
                            symbolName: 'BackGround',
                            type: 'rect'
                        },
                        {
                            id: 'S5_01',
                            type: 'image',
                            rect: [60, 72, '924px', '69px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/S5/S5_01.png', '-1019.5703125px', '-140.296875px']
                        },
                        {
                            type: 'image',
                            id: 'S5_02',
                            rect: [92, 171, '615px', '433px', 'auto', 'auto'],
                            transform: [[0, 0, 0], ['720', 0, 0], [0, 0], ['0', '0', 1], ['50%', '50%']],
                            fill: ['rgba(0,0,0,0)', 'images/S5/S5_02.png', '0px', '0px']
                        },
                        {
                            id: 'S5_07',
                            type: 'image',
                            rect: [733, 531, 16, 5, 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/S5/S5_07.png', '247.5546875px', '-318.6015625px']
                        },
                        {
                            rect: [50, 632, 10, 10, 'auto', 'auto'],
                            id: 'S5_08',
                            type: 'image',
                            clip: 'rect(0px -66.2421875px -67.1484375px 0px)',
                            fill: ['rgba(0,0,0,0)', 'images/S5/S5_08.png', '0px', '0px']
                        },
                        {
                            rect: ['281', 228, 345, 301, 'auto', 'auto'],
                            overflow: 'hidden',
                            id: 'Graph_S05',
                            symbolName: 'Graph_S05',
                            type: 'rect'
                        },
                        {
                            rect: [0, 0, 800, 200, 'auto', 'auto'],
                            overflow: 'hidden',
                            id: 'Ref_S05',
                            symbolName: 'Ref_S05',
                            clip: 'rect(100px 400px 100px 400px)',
                            type: 'rect'
                        },
                        {
                            rect: [902, 104, '96px', '96px', 'auto', 'auto'],
                            type: 'image',
                            id: 'i_info2',
                            display: 'none',
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/i_info2.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'i_info1',
                            rect: [931, 135, '36px', '36px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/i_info1.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'hidden',
                            rect: [null, null, 1024, 768]
                        }
                    }
                },
                timeline: {
                    duration: 1500,
                    autoPlay: false,
                    data: [
                        [
                            "eid326",
                            "display",
                            0,
                            0,
                            "linear",
                            "${i_info2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid395",
                            "background-position",
                            0,
                            500,
                            "swing",
                            "${S5_01}",
                            [-1019.5703125,-140.296875],
                            [0,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid401",
                            "top",
                            500,
                            500,
                            "swing",
                            "${S5_07}",
                            '531px',
                            '231px'
                        ],
                        [
                            "eid405",
                            "clip",
                            1000,
                            500,
                            "swing",
                            "${S5_08}",
                            [0,-66.2421875,-67.1484375,0],
                            [0,722,67,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid399",
                            "height",
                            500,
                            500,
                            "swing",
                            "${S5_07}",
                            '5px',
                            '305px'
                        ],
                        [
                            "eid415",
                            "scaleX",
                            250,
                            500,
                            "swing",
                            "${S5_02}",
                            '0',
                            '1'
                        ],
                        [
                            "eid419",
                            "rotateZ",
                            250,
                            250,
                            "swing",
                            "${S5_02}",
                            '720deg',
                            '0deg'
                        ],
                        [
                            "eid409",
                            "left",
                            1000,
                            500,
                            "swing",
                            "${S5_08}",
                            '50px',
                            '60px'
                        ],
                        [
                            "eid407",
                            "height",
                            1000,
                            500,
                            "swing",
                            "${S5_08}",
                            '10px',
                            '67px'
                        ],
                        [
                            "eid417",
                            "scaleY",
                            250,
                            500,
                            "swing",
                            "${S5_02}",
                            '0',
                            '1'
                        ],
                        [
                            "eid397",
                            "background-position",
                            500,
                            500,
                            "swing",
                            "${S5_07}",
                            [247.5546875,-318.6015625],
                            [0,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid403",
                            "width",
                            500,
                            500,
                            "swing",
                            "${S5_07}",
                            '16px',
                            '231px'
                        ],
                        [
                            "eid413",
                            "left",
                            250,
                            500,
                            "swing",
                            "${S5_02}",
                            '92px',
                            '93px'
                        ],
                        [
                            "eid411",
                            "width",
                            1000,
                            500,
                            "swing",
                            "${S5_08}",
                            '10px',
                            '722px'
                        ]
                    ]
                }
            },
            "Slide_06": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: [0, 0, '1024px', '768px', 'auto', 'auto'],
                            id: 'Slide_6',
                            stroke: [2, 'rgb(255, 255, 255)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,0.00)']
                        },
                        {
                            id: 'Back4',
                            type: 'image',
                            rect: ['0', '0', '1024px', '768px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/Cover/Back.png', '0px', '0px']
                        },
                        {
                            rect: [0, 150, 1038, 567, 'auto', 'auto'],
                            overflow: 'hidden',
                            id: 'BackGround',
                            symbolName: 'BackGround',
                            type: 'rect'
                        },
                        {
                            id: 'S6_01',
                            type: 'image',
                            rect: [60, 73, 0, '68px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/S6/S6_01.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'S6_02',
                            rect: [57, 170, '666px', '433px', 'auto', 'auto'],
                            transform: [[0, 0, 0], ['360', 0, 0], [0, 0], ['0', '0', 1], ['50%', '50%']],
                            fill: ['rgba(0,0,0,0)', 'images/S6/S6_02.png', '0px', '0px']
                        },
                        {
                            id: 'S6_07',
                            type: 'image',
                            rect: [733, 234, '231px', '281px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/S6/S6_07.png', '245.140625px', '0px']
                        },
                        {
                            id: 'S6_08',
                            type: 'image',
                            rect: [60, 627, 715, '76px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/S6/S6_08.png', '-724.31262207031px', '0px']
                        },
                        {
                            rect: ['278', '229', 332, 315, 'auto', 'auto'],
                            overflow: 'hidden',
                            id: 'Graph_S06',
                            symbolName: 'Graph_S06',
                            type: 'rect'
                        },
                        {
                            rect: [0, 0, 800, 200, 'auto', 'auto'],
                            overflow: 'hidden',
                            id: 'Ref_S06',
                            symbolName: 'Ref_S06',
                            clip: 'rect(100px 400px 100px 400px)',
                            type: 'rect'
                        },
                        {
                            rect: [902, 104, '96px', '96px', 'auto', 'auto'],
                            type: 'image',
                            id: 'i_info2',
                            display: 'none',
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/i_info2.png', '0px', '0px']
                        },
                        {
                            rect: [931, 135, '36px', '36px', 'auto', 'auto'],
                            id: 'i_info1',
                            type: 'image',
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/i_info1.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'hidden',
                            rect: [null, null, 1024, 768]
                        }
                    }
                },
                timeline: {
                    duration: 1250,
                    autoPlay: false,
                    data: [
                        [
                            "eid441",
                            "background-position",
                            750,
                            500,
                            "swing",
                            "${S6_08}",
                            [-724.31262207031,0],
                            [0,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid327",
                            "display",
                            0,
                            0,
                            "linear",
                            "${i_info2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid433",
                            "scaleX",
                            250,
                            500,
                            "swing",
                            "${S6_02}",
                            '0',
                            '1'
                        ],
                        [
                            "eid435",
                            "scaleY",
                            250,
                            500,
                            "swing",
                            "${S6_02}",
                            '0',
                            '1'
                        ],
                        [
                            "eid439",
                            "background-position",
                            500,
                            500,
                            "swing",
                            "${S6_07}",
                            [245.140625,0],
                            [0,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid437",
                            "rotateZ",
                            250,
                            250,
                            "swing",
                            "${S6_02}",
                            '360deg',
                            '0deg'
                        ],
                        [
                            "eid431",
                            "width",
                            0,
                            500,
                            "swing",
                            "${S6_01}",
                            '0px',
                            '924px'
                        ]
                    ]
                }
            },
            "Slide_07": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'Back5',
                            type: 'image',
                            rect: ['0', '0', '1024px', '768px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/Cover/Back.png', '0px', '0px']
                        },
                        {
                            rect: [0, 0, '1024px', '768px', 'auto', 'auto'],
                            id: 'Slide_7',
                            stroke: [2, 'rgb(255, 255, 255)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,0.00)']
                        },
                        {
                            rect: [0, 150, 1038, 567, 'auto', 'auto'],
                            overflow: 'hidden',
                            id: 'BackGround',
                            symbolName: 'BackGround',
                            type: 'rect'
                        },
                        {
                            id: 'S7_21',
                            type: 'image',
                            rect: [60, 655, 383, '28px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/S7/S7_21.png', '-534.33337402344px', '0px']
                        },
                        {
                            id: 'S7_20',
                            type: 'image',
                            rect: [726, 261, '223px', 267, 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/S7/S7_20.png', '243.36450195312px', '0px']
                        },
                        {
                            id: 'S7_01',
                            type: 'image',
                            rect: [58, 96, 0, '39px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/S7/S7_01.png', '0px', '0px']
                        },
                        {
                            rect: [902, 104, '96px', '96px', 'auto', 'auto'],
                            type: 'image',
                            id: 'i_info2',
                            display: 'none',
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/i_info2.png', '0px', '0px']
                        },
                        {
                            rect: [931, 135, '36px', '36px', 'auto', 'auto'],
                            id: 'i_info1',
                            type: 'image',
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/i_info1.png', '0px', '0px']
                        },
                        {
                            rect: [-140, 19, 998, 740, 'auto', 'auto'],
                            overflow: 'hidden',
                            id: 'Chart_S07',
                            symbolName: 'Chart_S07',
                            type: 'rect',
                            transform: [[0, 0, 0], [0, 0, 0], [0, 0], ['0', '0', 1], ['50%', '50%']]
                        },
                        {
                            rect: [0, 0, 800, 200, 'auto', 'auto'],
                            overflow: 'hidden',
                            id: 'Ref_S07',
                            symbolName: 'Ref_S07',
                            clip: 'rect(100px 400px 100px 400px)',
                            type: 'rect'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'hidden',
                            rect: [null, null, 1024, 768]
                        }
                    }
                },
                timeline: {
                    duration: 1250,
                    autoPlay: false,
                    data: [
                        [
                            "eid328",
                            "display",
                            0,
                            0,
                            "linear",
                            "${i_info2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid461",
                            "background-position",
                            750,
                            500,
                            "easeOutBack",
                            "${S7_21}",
                            [-534.33337402344,0],
                            [0,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid453",
                            "width",
                            0,
                            250,
                            "easeOutBack",
                            "${S7_01}",
                            '0px',
                            '386px'
                        ],
                        [
                            "eid459",
                            "background-position",
                            500,
                            500,
                            "easeOutBack",
                            "${S7_20}",
                            [243.36450195312,0],
                            [0,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid457",
                            "scaleY",
                            250,
                            500,
                            "easeOutBack",
                            "${Chart_S07}",
                            '0',
                            '0.59619'
                        ],
                        [
                            "eid455",
                            "scaleX",
                            250,
                            500,
                            "easeOutBack",
                            "${Chart_S07}",
                            '0',
                            '0.59619'
                        ],
                        [
                            "eid451",
                            "left",
                            0,
                            250,
                            "easeOutBack",
                            "${S7_01}",
                            '58px',
                            '60px'
                        ]
                    ]
                }
            },
            "Slide_08": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'Back6',
                            type: 'image',
                            rect: [0, '0', '1024px', '768px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/Cover/Back.png', '0px', '0px']
                        },
                        {
                            rect: [0, 0, '1024px', '768px', 'auto', 'auto'],
                            id: 'Slide_8',
                            stroke: [2, 'rgb(255, 255, 255)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,0.00)']
                        },
                        {
                            rect: [0, 153, 1038, 567, 'auto', 'auto'],
                            overflow: 'hidden',
                            id: 'BackGround',
                            symbolName: 'BackGround',
                            type: 'rect'
                        },
                        {
                            id: 'S8_01',
                            type: 'image',
                            rect: [60, 104, 0, '39px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/S8/S8_01.png', '0px', '0px']
                        },
                        {
                            rect: [217, 168, '590px', '54px', 'auto', 'auto'],
                            id: 'S8_02',
                            type: 'image',
                            clip: 'rect(0px 300px 54px 300px)',
                            fill: ['rgba(0,0,0,0)', 'images/S8/S8_02.png', '0px', '0px']
                        },
                        {
                            rect: [39, 217, '946px', '401px', 'auto', 'auto'],
                            id: 'S8_03',
                            type: 'image',
                            clip: 'rect(0px -10.197998046875px 401px 0px)',
                            fill: ['rgba(0,0,0,0)', 'images/S8/S8_03.png', '0px', '0px']
                        },
                        {
                            id: 'S8_04',
                            type: 'image',
                            rect: [313, 232, '398px', '28px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/S8/S8_04.png', '0px', '-35.604248046875px']
                        },
                        {
                            rect: [94, 260, '845px', '330px', 'auto', 'auto'],
                            id: 'S8_05',
                            type: 'image',
                            clip: 'rect(0px 845px -40.4686279296875px 0px)',
                            fill: ['rgba(0,0,0,0)', 'images/S8/S8_05.png', '0px', '0px']
                        },
                        {
                            rect: [93, 324, '832px', '244px', 'auto', 'auto'],
                            type: 'image',
                            id: 'S8_06',
                            transform: [[0, 0, 0], [0, 0, 0], [0, 0], ['1.01635', 1, 1], ['50%', '50%']],
                            clip: 'rect(0px 111.6468505859375px 244px 786.21875px)',
                            fill: ['rgba(0,0,0,0)', 'images/S8/S8_06.png', '0px', '0px']
                        },
                        {
                            rect: [60, 636, '734px', '56px', 'auto', 'auto'],
                            id: 'S8_07',
                            type: 'image',
                            clip: 'rect(0px -8.46875px 56px 0px)',
                            fill: ['rgba(0,0,0,0)', 'images/S8/S8_07.png', '0px', '0px']
                        },
                        {
                            rect: [0, 0, 800, 200, 'auto', 'auto'],
                            overflow: 'hidden',
                            id: 'Ref_S08',
                            symbolName: 'Ref_S08',
                            clip: 'rect(100px 400px 100px 400px)',
                            type: 'rect'
                        },
                        {
                            rect: [902, 104, '96px', '96px', 'auto', 'auto'],
                            type: 'image',
                            id: 'i_info2',
                            display: 'none',
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/i_info2.png', '0px', '0px']
                        },
                        {
                            rect: [931, 135, '36px', '36px', 'auto', 'auto'],
                            id: 'i_info1',
                            type: 'image',
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/i_info1.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'hidden',
                            rect: [null, null, 1024, 768]
                        }
                    }
                },
                timeline: {
                    duration: 2250,
                    autoPlay: false,
                    data: [
                        [
                            "eid497",
                            "width",
                            0,
                            500,
                            "easeOutBack",
                            "${S8_01}",
                            '0px',
                            '639px'
                        ],
                        [
                            "eid329",
                            "display",
                            0,
                            0,
                            "linear",
                            "${i_info2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid731",
                            "background-position",
                            1250,
                            250,
                            "linear",
                            "${S8_04}",
                            [0,-35.604248046875],
                            [0,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid729",
                            "clip",
                            1000,
                            250,
                            "linear",
                            "${S8_03}",
                            [0,-10.197998046875,401,0],
                            [0,946,401,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid737",
                            "clip",
                            2000,
                            250,
                            "linear",
                            "${S8_07}",
                            [0,-8.46875,56,0],
                            [0,734,56,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid733",
                            "clip",
                            1500,
                            250,
                            "linear",
                            "${S8_05}",
                            [0,845,-40.4686279296875,0],
                            [0,845,330,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid727",
                            "clip",
                            500,
                            500,
                            "linear",
                            "${S8_02}",
                            [0,300,54,300],
                            [0,590,54,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid742",
                            "clip",
                            1750,
                            250,
                            "linear",
                            "${S8_06}",
                            [0,111.6468505859375,244,786.21875],
                            [0,832,244,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ]
                    ]
                }
            },
            "Slide_09": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'Back7',
                            type: 'image',
                            rect: ['0', '0', '1024px', '768px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/Cover/Back.png', '0px', '0px']
                        },
                        {
                            rect: [0, 0, '1024px', '768px', 'auto', 'auto'],
                            id: 'Slide_9',
                            stroke: [2, 'rgb(255, 255, 255)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,0.00)']
                        },
                        {
                            rect: [0, 150, 1038, 567, 'auto', 'auto'],
                            overflow: 'hidden',
                            id: 'BackGround',
                            symbolName: 'BackGround',
                            type: 'rect'
                        },
                        {
                            rect: [60, 64, '862px', '75px', 'auto', 'auto'],
                            id: 'S9_01',
                            type: 'image',
                            clip: 'rect(0px -8.1875px 75px 0px)',
                            fill: ['rgba(0,0,0,0)', 'images/S9/S9_01.png', '0px', '0px']
                        },
                        {
                            rect: [58, 171, '711px', '425px', 'auto', 'auto'],
                            id: 'S9_02',
                            type: 'image',
                            clip: 'rect(198.375px 353.755126953125px 175.5626220703125px 388.84375px)',
                            fill: ['rgba(0,0,0,0)', 'images/S9/S9_02.png', '0px', '0px']
                        },
                        {
                            rect: ['142', '237', 598, 277, 'auto', 'auto'],
                            overflow: 'hidden',
                            id: 'Graph_S09',
                            symbolName: 'Graph_S09',
                            type: 'rect'
                        },
                        {
                            id: 'S9_07',
                            type: 'image',
                            rect: [790, 277, '166px', '213px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/S9/S9_07.png', '183.70849609375px', '0px']
                        },
                        {
                            id: 'S9_08',
                            type: 'image',
                            rect: [60, 639, '732px', '52px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/S9/S9_08.png', '-744.75524902344px', '0px']
                        },
                        {
                            rect: [0, 0, 800, 200, 'auto', 'auto'],
                            overflow: 'hidden',
                            id: 'Ref_S09',
                            symbolName: 'Ref_S09',
                            clip: 'rect(100px 400px 100px 400px)',
                            type: 'rect'
                        },
                        {
                            rect: [902, 104, '96px', '96px', 'auto', 'auto'],
                            type: 'image',
                            id: 'i_info2',
                            display: 'none',
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/i_info2.png', '0px', '0px']
                        },
                        {
                            rect: [931, 135, '36px', '36px', 'auto', 'auto'],
                            id: 'i_info1',
                            type: 'image',
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/i_info1.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'hidden',
                            rect: [null, null, 1024, 768]
                        }
                    }
                },
                timeline: {
                    duration: 1250,
                    autoPlay: false,
                    data: [
                        [
                            "eid511",
                            "background-position",
                            750,
                            500,
                            "easeOutBack",
                            "${S9_08}",
                            [-744.75524902344,0],
                            [0,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid505",
                            "clip",
                            0,
                            500,
                            "easeOutBack",
                            "${S9_01}",
                            [0,-8.1875,75,0],
                            [0,862,75,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid509",
                            "background-position",
                            500,
                            500,
                            "easeOutBack",
                            "${S9_07}",
                            [183.70849609375,0],
                            [0,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid507",
                            "clip",
                            250,
                            500,
                            "easeOutBack",
                            "${S9_02}",
                            [198.375,353.755126953125,175.5626220703125,388.84375],
                            [0,711,425,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid330",
                            "display",
                            0,
                            0,
                            "linear",
                            "${i_info2}",
                            'none',
                            'none'
                        ]
                    ]
                }
            },
            "Slide_10": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'Back8',
                            type: 'image',
                            rect: ['0', '0', '1024px', '768px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/Cover/Back.png', '0px', '0px']
                        },
                        {
                            rect: [0, 150, 1038, 567, 'auto', 'auto'],
                            overflow: 'hidden',
                            id: 'BackGround',
                            symbolName: 'BackGround',
                            type: 'rect'
                        },
                        {
                            rect: [0, 0, '1024px', '768px', 'auto', 'auto'],
                            id: 'Slide_10',
                            stroke: [2, 'rgb(255, 255, 255)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,0.00)']
                        },
                        {
                            type: 'image',
                            id: 'S10_03',
                            rect: [156, 201, '711px', '411px', 'auto', 'auto'],
                            transform: [[0, 0, 0], ['720', 0, 0], [0, 0], ['0', '0', 1], ['50%', '50%']],
                            fill: ['rgba(0,0,0,0)', 'images/S10/S10_03.png', '0px', '0px']
                        },
                        {
                            rect: [60, 65, '656px', '75px', 'auto', 'auto'],
                            id: 'S10_01',
                            type: 'image',
                            clip: 'rect(0px -86.921875px 75px 0px)',
                            fill: ['rgba(0,0,0,0)', 'images/S10/S10_01.png', '0px', '0px']
                        },
                        {
                            rect: [197, 165, '630px', '36px', 'auto', 'auto'],
                            type: 'image',
                            id: 'S10_02',
                            opacity: '0',
                            clip: 'rect(0px -20.963623046875px 36px 0px)',
                            fill: ['rgba(0,0,0,0)', 'images/S10/S10_02.png', '0px', '0px']
                        },
                        {
                            rect: [341, 210, '342px', '38px', 'auto', 'auto'],
                            id: 'S10_04',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/S10/S10_04.png', '0px', '-46.8125px']
                        },
                        {
                            rect: [225, 249, '573px', '351px', 'auto', 'auto'],
                            type: 'image',
                            id: 'S10_05',
                            opacity: '0',
                            clip: 'rect(0px 346.432373046875px 351px 354.661376953125px)',
                            fill: ['rgba(0,0,0,0)', 'images/S10/S10_05.png', '0px', '0px']
                        },
                        {
                            rect: [60, 636, 711, '52px', 'auto', 'auto'],
                            type: 'image',
                            id: 'S10_06',
                            opacity: '0',
                            clip: 'rect(0px -25.244873046875px 52px 0px)',
                            fill: ['rgba(0,0,0,0)', 'images/S10/S10_06.png', '0px', '0px']
                        },
                        {
                            rect: [0, 0, 800, 200, 'auto', 'auto'],
                            overflow: 'hidden',
                            id: 'Ref_S10',
                            symbolName: 'Ref_S10',
                            clip: 'rect(100px 400px 100px 400px)',
                            type: 'rect'
                        },
                        {
                            rect: [902, 104, '96px', '96px', 'auto', 'auto'],
                            type: 'image',
                            id: 'i_info2',
                            display: 'none',
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/i_info2.png', '0px', '0px']
                        },
                        {
                            rect: [931, 135, '36px', '36px', 'auto', 'auto'],
                            id: 'i_info1',
                            type: 'image',
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/i_info1.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'hidden',
                            rect: [null, null, 1024, 768]
                        }
                    }
                },
                timeline: {
                    duration: 3000,
                    autoPlay: false,
                    data: [
                        [
                            "eid862",
                            "opacity",
                            1500,
                            500,
                            "easeOutBack",
                            "${S10_04}",
                            '0',
                            '1'
                        ],
                        [
                            "eid331",
                            "display",
                            0,
                            0,
                            "linear",
                            "${i_info2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid870",
                            "opacity",
                            2500,
                            500,
                            "easeOutBack",
                            "${S10_06}",
                            '0',
                            '1'
                        ],
                        [
                            "eid860",
                            "background-position",
                            1500,
                            500,
                            "easeOutBack",
                            "${S10_04}",
                            [0,-46.8125],
                            [0,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid850",
                            "clip",
                            1000,
                            500,
                            "easeOutBack",
                            "${S10_02}",
                            [0,-20.963623046875,36,0],
                            [0,630,36,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid521",
                            "clip",
                            0,
                            500,
                            "swing",
                            "${S10_01}",
                            [0,-86.921875,75,0],
                            [0,656,75,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid864",
                            "clip",
                            2000,
                            500,
                            "easeOutBack",
                            "${S10_05}",
                            [0,346.432373046875,351,354.661376953125],
                            [0,573,351,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid854",
                            "scaleX",
                            500,
                            500,
                            "swing",
                            "${S10_03}",
                            '0',
                            '1'
                        ],
                        [
                            "eid866",
                            "opacity",
                            2000,
                            500,
                            "easeOutBack",
                            "${S10_05}",
                            '0',
                            '1'
                        ],
                        [
                            "eid856",
                            "scaleY",
                            500,
                            500,
                            "swing",
                            "${S10_03}",
                            '0',
                            '1'
                        ],
                        [
                            "eid858",
                            "rotateZ",
                            500,
                            500,
                            "swing",
                            "${S10_03}",
                            '720deg',
                            '0deg'
                        ],
                        [
                            "eid868",
                            "clip",
                            2500,
                            500,
                            "easeOutBack",
                            "${S10_06}",
                            [0,-25.244873046875,52,0],
                            [0,711,52,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid852",
                            "opacity",
                            1000,
                            500,
                            "easeOutBack",
                            "${S10_02}",
                            '0',
                            '1'
                        ]
                    ]
                }
            },
            "Slide_11": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'Back9',
                            type: 'image',
                            rect: ['0', '0', '1024px', '768px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/Cover/Back.png', '0px', '0px']
                        },
                        {
                            rect: [0, 0, '1024px', '768px', 'auto', 'auto'],
                            id: 'Slide_11',
                            stroke: [2, 'rgb(255, 255, 255)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,0.00)']
                        },
                        {
                            rect: [0, 150, 1038, 567, 'auto', 'auto'],
                            overflow: 'hidden',
                            id: 'BackGround',
                            symbolName: 'BackGround',
                            type: 'rect'
                        },
                        {
                            rect: [60, 99, '820px', '39px', 'auto', 'auto'],
                            id: 'S11_01',
                            type: 'image',
                            clip: 'rect(0px -79.46875px 39px 0px)',
                            fill: ['rgba(0,0,0,0)', 'images/S11/S11_01.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'S11_02',
                            rect: [160, 169, '704px', '441px', 'auto', 'auto'],
                            transform: [[0, 0, 0], [0, 0, 0], [0, 0], ['0', '1', 1], ['50%', '50%']],
                            fill: ['rgba(0,0,0,0)', 'images/S11/S11_02.png', '0px', '0px']
                        },
                        {
                            rect: [60, 643, '711px', '55px', 'auto', 'auto'],
                            id: 'S11_07',
                            type: 'image',
                            clip: 'rect(0px -126.890625px 55px 0px)',
                            fill: ['rgba(0,0,0,0)', 'images/S11/S11_07.png', '0px', '0px']
                        },
                        {
                            rect: ['397', 212, 308, 340, 'auto', 'auto'],
                            overflow: 'hidden',
                            id: 'Graph_S11',
                            symbolName: 'Graph_S11',
                            type: 'rect'
                        },
                        {
                            rect: [0, 0, 800, 200, 'auto', 'auto'],
                            overflow: 'hidden',
                            id: 'Ref_S11',
                            symbolName: 'Ref_S11',
                            clip: 'rect(100px 400px 100px 400px)',
                            type: 'rect'
                        },
                        {
                            rect: [902, 104, '96px', '96px', 'auto', 'auto'],
                            type: 'image',
                            id: 'i_info2',
                            display: 'none',
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/i_info2.png', '0px', '0px']
                        },
                        {
                            rect: [931, 135, '36px', '36px', 'auto', 'auto'],
                            id: 'i_info1',
                            type: 'image',
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/i_info1.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'hidden',
                            rect: [null, null, 1024, 768]
                        }
                    }
                },
                timeline: {
                    duration: 500,
                    autoPlay: false,
                    data: [
                        [
                            "eid539",
                            "clip",
                            0,
                            500,
                            "swing",
                            "${S11_01}",
                            [0,-79.46875,39,0],
                            [0,820,39,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid547",
                            "clip",
                            0,
                            500,
                            "swing",
                            "${S11_07}",
                            [0,-126.890625,55,0],
                            [0,711,55,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid544",
                            "scaleY",
                            0,
                            0,
                            "swing",
                            "${S11_02}",
                            '1',
                            '1'
                        ],
                        [
                            "eid545",
                            "scaleY",
                            500,
                            0,
                            "swing",
                            "${S11_02}",
                            '1',
                            '1'
                        ],
                        [
                            "eid332",
                            "display",
                            0,
                            0,
                            "linear",
                            "${i_info2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid541",
                            "scaleX",
                            0,
                            500,
                            "swing",
                            "${S11_02}",
                            '0',
                            '1'
                        ]
                    ]
                }
            },
            "Slide_12": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: [0, 0, '1024px', '768px', 'auto', 'auto'],
                            id: 'Slide_12',
                            stroke: [2, 'rgb(255, 255, 255)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,0.00)']
                        },
                        {
                            id: 'Back10',
                            type: 'image',
                            rect: ['0', '0', '1024px', '768px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/Cover/Back.png', '0px', '0px']
                        },
                        {
                            rect: [0, 150, 1038, 567, 'auto', 'auto'],
                            overflow: 'hidden',
                            id: 'BackGround',
                            symbolName: 'BackGround',
                            type: 'rect'
                        },
                        {
                            rect: [60, 39, '900px', '101px', 'auto', 'auto'],
                            id: 'S12_01',
                            type: 'image',
                            clip: 'rect(0px -47.36962890625px 101px 0px)',
                            fill: ['rgba(0,0,0,0)', 'images/S12/S12_01.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'S12_02',
                            rect: [160, 168, '704px', '441px', 'auto', 'auto'],
                            transform: [[0, 0, 0], [0, 0, 0], [0, 0], ['0', '0', 1], ['50%', '50%']],
                            fill: ['rgba(0,0,0,0)', 'images/S12/S12_02.png', '0px', '0px']
                        },
                        {
                            rect: ['266', 193, 550, 255, 'auto', 'auto'],
                            overflow: 'hidden',
                            id: 'Graph_S12',
                            symbolName: 'Graph_S12',
                            type: 'rect'
                        },
                        {
                            rect: [0, 0, 800, 200, 'auto', 'auto'],
                            overflow: 'hidden',
                            id: 'Ref_S12',
                            symbolName: 'Ref_S12',
                            clip: 'rect(100px 400px 100px 400px)',
                            type: 'rect'
                        },
                        {
                            rect: [902, 104, '96px', '96px', 'auto', 'auto'],
                            type: 'image',
                            id: 'i_info2',
                            display: 'none',
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/i_info2.png', '0px', '0px']
                        },
                        {
                            rect: [931, 135, '36px', '36px', 'auto', 'auto'],
                            id: 'i_info1',
                            type: 'image',
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/i_info1.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'hidden',
                            rect: [null, null, 1024, 768]
                        }
                    }
                },
                timeline: {
                    duration: 1000,
                    autoPlay: false,
                    data: [
                        [
                            "eid561",
                            "scaleY",
                            500,
                            500,
                            "swing",
                            "${S12_02}",
                            '0',
                            '1'
                        ],
                        [
                            "eid559",
                            "scaleX",
                            500,
                            500,
                            "swing",
                            "${S12_02}",
                            '0',
                            '1'
                        ],
                        [
                            "eid557",
                            "clip",
                            0,
                            500,
                            "swing",
                            "${S12_01}",
                            [0,-47.36962890625,101,0],
                            [0,900,101,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid333",
                            "display",
                            0,
                            0,
                            "linear",
                            "${i_info2}",
                            'none',
                            'none'
                        ]
                    ]
                }
            },
            "Slide_13": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: [0, 0, '1024px', '768px', 'auto', 'auto'],
                            id: 'Slide_13',
                            stroke: [2, 'rgb(255, 255, 255)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,0.00)']
                        },
                        {
                            id: 'Back11',
                            type: 'image',
                            rect: ['0', '0', '1024px', '768px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/Cover/Back.png', '0px', '0px']
                        },
                        {
                            rect: [0, 150, 1038, 567, 'auto', 'auto'],
                            overflow: 'hidden',
                            id: 'BackGround',
                            symbolName: 'BackGround',
                            type: 'rect'
                        },
                        {
                            rect: [65, 90, '891px', '39px', 'auto', 'auto'],
                            type: 'image',
                            id: 'S13_01',
                            transform: [[0, 0, 0], [0, 0, 0], [0, 0], ['1.01198', 1, 1], ['50%', '50%']],
                            clip: 'rect(0px -60.177001953125px 39px 0px)',
                            fill: ['rgba(0,0,0,0)', 'images/S13/S13_01.png', '0px', '0px']
                        },
                        {
                            rect: [50, 199, '924px', '390px', 'auto', 'auto'],
                            type: 'image',
                            id: 'S13_02',
                            opacity: '0',
                            clip: 'rect(0px 460.536376953125px 390px 464.255126953125px)',
                            fill: ['rgba(0,0,0,0)', 'images/S13/S13_02.png', '0px', '0px']
                        },
                        {
                            rect: [90, 244, '264px', '318px', 'auto', 'auto'],
                            id: 'S13_03',
                            type: 'image',
                            clip: 'rect(0px 264px -8.765625px 0px)',
                            fill: ['rgba(0,0,0,0)', 'images/S13/S13_03.png', '0px', '0px']
                        },
                        {
                            rect: [371, 209, '246px', '349px', 'auto', 'auto'],
                            id: 'S13_04',
                            type: 'image',
                            clip: 'rect(0px 246px -23.203125px 0px)',
                            fill: ['rgba(0,0,0,0)', 'images/S13/S13_04.png', '0px', '0px']
                        },
                        {
                            rect: [666, 213, '244px', '349px', 'auto', 'auto'],
                            id: 'S13_05',
                            type: 'image',
                            clip: 'rect(0px 244px -12.588623046875px 0px)',
                            fill: ['rgba(0,0,0,0)', 'images/S13/S13_05.png', '0px', '0px']
                        },
                        {
                            rect: [60, 649, '712px', '28px', 'auto', 'auto'],
                            id: 'S13_06',
                            type: 'image',
                            clip: 'rect(0px -23.270751953125px 28px 0px)',
                            fill: ['rgba(0,0,0,0)', 'images/S13/S13_06.png', '0px', '0px']
                        },
                        {
                            rect: [0, 0, 800, 200, 'auto', 'auto'],
                            overflow: 'hidden',
                            id: 'Ref_S13',
                            symbolName: 'Ref_S13',
                            clip: 'rect(100px 400px 100px 400px)',
                            type: 'rect'
                        },
                        {
                            rect: [902, 104, '96px', '96px', 'auto', 'auto'],
                            type: 'image',
                            id: 'i_info2',
                            display: 'none',
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/i_info2.png', '0px', '0px']
                        },
                        {
                            rect: [931, 135, '36px', '36px', 'auto', 'auto'],
                            id: 'i_info1',
                            type: 'image',
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/i_info1.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'hidden',
                            rect: [null, null, 1024, 768]
                        }
                    }
                },
                timeline: {
                    duration: 3000,
                    autoPlay: false,
                    data: [
                        [
                            "eid585",
                            "clip",
                            1000,
                            500,
                            "swing",
                            "${S13_03}",
                            [0,264,-8.765625,0],
                            [0,264,318,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid334",
                            "display",
                            0,
                            0,
                            "linear",
                            "${i_info2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid589",
                            "clip",
                            2000,
                            500,
                            "swing",
                            "${S13_05}",
                            [0,244,-12.588623046875,0],
                            [0,244,349,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid587",
                            "clip",
                            1500,
                            500,
                            "swing",
                            "${S13_04}",
                            [0,246,-23.203125,0],
                            [0,246,349,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid591",
                            "clip",
                            2500,
                            500,
                            "swing",
                            "${S13_06}",
                            [0,-23.270751953125,28,0],
                            [0,712,28,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid583",
                            "opacity",
                            500,
                            500,
                            "swing",
                            "${S13_02}",
                            '0',
                            '1'
                        ],
                        [
                            "eid579",
                            "clip",
                            0,
                            500,
                            "swing",
                            "${S13_01}",
                            [0,-60.177001953125,39,0],
                            [0,891,39,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid581",
                            "clip",
                            500,
                            500,
                            "swing",
                            "${S13_02}",
                            [0,460.536376953125,390,464.255126953125],
                            [0,924,390,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ]
                    ]
                }
            },
            "Slide_14": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'Back12',
                            type: 'image',
                            rect: ['0', '0', '1024px', '768px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/Cover/Back.png', '0px', '0px']
                        },
                        {
                            rect: [0, 0, '1024px', '768px', 'auto', 'auto'],
                            id: 'Slide_14',
                            stroke: [2, 'rgb(255, 255, 255)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,0.00)']
                        },
                        {
                            rect: [0, 150, 1038, 567, 'auto', 'auto'],
                            overflow: 'hidden',
                            id: 'BackGround',
                            symbolName: 'BackGround',
                            type: 'rect'
                        },
                        {
                            rect: [50, 165, '924px', '449px', 'auto', 'auto'],
                            transform: [[0, 0, 0], [0, 0, 0], [0, 0], ['0', '0', 1], ['50%', '50%']],
                            id: 'S14_05',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/S14/S14_05.png', '0px', '0px']
                        },
                        {
                            rect: [50, 84, '924px', '58px', 'auto', 'auto'],
                            transform: [[0, 0, 0], [0, 0, 0], [0, 0], ['0', '0', 1], ['50%', '50%']],
                            id: 'S14_01',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/S14/S14_01.png', '0px', '0px']
                        },
                        {
                            rect: [381, 377, '262px', '54px', 'auto', 'auto'],
                            id: 'S14_07',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/S14/S14_07.png', '0px', '-62.317749023438px']
                        },
                        {
                            rect: [293, 429, 192, 176, 'auto', 'auto'],
                            id: 'S14_08',
                            type: 'image',
                            clip: 'rect(0px 192px -27.161376953125px 0px)',
                            fill: ['rgba(0,0,0,0)', 'images/S14/S14_08.png', '0px', '0px']
                        },
                        {
                            rect: [549, 429, 192, 176, 'auto', 'auto'],
                            id: 'S14_09',
                            type: 'image',
                            clip: 'rect(0px 192px -17.036376953125px 0px)',
                            fill: ['rgba(0,0,0,0)', 'images/S14/S14_09.png', '0px', '0px']
                        },
                        {
                            rect: [136, 169, '751px', '207px', 'auto', 'auto'],
                            type: 'image',
                            id: 'S14_06',
                            opacity: '0',
                            clip: 'rect(0px 751px -24.260498046875px 0px)',
                            fill: ['rgba(0,0,0,0)', 'images/S14/S14_06.png', '0px', '0px']
                        },
                        {
                            rect: [63, 662, '723px', '16px', 'auto', 'auto'],
                            id: 'S14_10',
                            type: 'image',
                            clip: 'rect(0px -15.8125px 16px 0px)',
                            fill: ['rgba(0,0,0,0)', 'images/S14/S14_10.png', '0px', '0px']
                        },
                        {
                            rect: [0, 0, 800, 200, 'auto', 'auto'],
                            overflow: 'hidden',
                            id: 'Ref_S14',
                            symbolName: 'Ref_S14',
                            clip: 'rect(100px 400px 100px 400px)',
                            type: 'rect'
                        },
                        {
                            rect: [902, 104, '96px', '96px', 'auto', 'auto'],
                            type: 'image',
                            id: 'i_info2',
                            display: 'none',
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/i_info2.png', '0px', '0px']
                        },
                        {
                            rect: [931, 135, '36px', '36px', 'auto', 'auto'],
                            id: 'i_info1',
                            type: 'image',
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/i_info1.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'hidden',
                            rect: [null, null, 1024, 768]
                        }
                    }
                },
                timeline: {
                    duration: 3750,
                    autoPlay: false,
                    data: [
                        [
                            "eid335",
                            "display",
                            0,
                            0,
                            "linear",
                            "${i_info2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid779",
                            "background-position",
                            1750,
                            500,
                            "linear",
                            "${S14_07}",
                            [0,-62.317749023438],
                            [0,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid775",
                            "clip",
                            1500,
                            500,
                            "linear",
                            "${S14_06}",
                            [0,751,-24.260498046875,0],
                            [0,751,207,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid787",
                            "clip",
                            2250,
                            500,
                            "linear",
                            "${S14_09}",
                            [0,192,-17.036376953125,0],
                            [0,192,176,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid773",
                            "opacity",
                            1000,
                            500,
                            "linear",
                            "${S14_05}",
                            '0',
                            '1'
                        ],
                        [
                            "eid777",
                            "opacity",
                            1500,
                            500,
                            "linear",
                            "${S14_06}",
                            '0',
                            '1'
                        ],
                        [
                            "eid876",
                            "scaleY",
                            0,
                            1000,
                            "linear",
                            "${S14_01}",
                            '0',
                            '1'
                        ],
                        [
                            "eid789",
                            "clip",
                            2750,
                            500,
                            "linear",
                            "${S14_08}",
                            [0,192,-27.161376953125,0],
                            [0,192,176,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid769",
                            "scaleX",
                            1000,
                            500,
                            "linear",
                            "${S14_05}",
                            '0',
                            '1'
                        ],
                        [
                            "eid791",
                            "clip",
                            3250,
                            500,
                            "linear",
                            "${S14_10}",
                            [0,-15.8125,16,0],
                            [0,723,16,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid878",
                            "opacity",
                            0,
                            1000,
                            "linear",
                            "${S14_01}",
                            '0',
                            '1'
                        ],
                        [
                            "eid771",
                            "scaleY",
                            1000,
                            500,
                            "linear",
                            "${S14_05}",
                            '0',
                            '1'
                        ],
                        [
                            "eid781",
                            "opacity",
                            1750,
                            500,
                            "linear",
                            "${S14_07}",
                            '0',
                            '1'
                        ],
                        [
                            "eid874",
                            "scaleX",
                            0,
                            1000,
                            "linear",
                            "${S14_01}",
                            '0',
                            '1'
                        ]
                    ]
                }
            },
            "Slide_15": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'Back13',
                            type: 'image',
                            rect: ['0', '0', '1024px', '768px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/Cover/Back.png', '0px', '0px']
                        },
                        {
                            rect: [0, 0, '1024px', '768px', 'auto', 'auto'],
                            id: 'Slide_15',
                            stroke: [2, 'rgb(255, 255, 255)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,0.00)']
                        },
                        {
                            rect: [0, 150, 1038, 567, 'auto', 'auto'],
                            overflow: 'hidden',
                            id: 'BackGround',
                            symbolName: 'BackGround',
                            type: 'rect'
                        },
                        {
                            rect: [60, 63, '919px', '75px', 'auto', 'auto'],
                            id: 'S15_01',
                            type: 'image',
                            clip: 'rect(0px -70.796875px 75px 0px)',
                            fill: ['rgba(0,0,0,0)', 'images/S15/S15_01.png', '0px', '0px']
                        },
                        {
                            rect: [160, 168, '704px', '441px', 'auto', 'auto'],
                            type: 'image',
                            id: 'S15_02',
                            opacity: '0',
                            clip: 'rect(0px 347.651123046875px 441px 356.645751953125px)',
                            fill: ['rgba(0,0,0,0)', 'images/S15/S15_02.png', '0px', '0px']
                        },
                        {
                            rect: ['261', 190, 442, 309, 'auto', 'auto'],
                            overflow: 'hidden',
                            id: 'Graph_S15',
                            symbolName: 'Graph_S15',
                            type: 'rect'
                        },
                        {
                            rect: [0, 0, 800, 200, 'auto', 'auto'],
                            overflow: 'hidden',
                            id: 'Ref_S15',
                            symbolName: 'Ref_S15',
                            clip: 'rect(100px 400px 100px 400px)',
                            type: 'rect'
                        },
                        {
                            rect: [902, 104, '96px', '96px', 'auto', 'auto'],
                            type: 'image',
                            id: 'i_info2',
                            display: 'none',
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/i_info2.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'i_info1',
                            rect: [931, 135, '36px', '36px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/i_info1.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'hidden',
                            rect: [null, null, 1024, 768]
                        }
                    }
                },
                timeline: {
                    duration: 1000,
                    autoPlay: false,
                    data: [
                        [
                            "eid617",
                            "clip",
                            500,
                            500,
                            "easeOutBack",
                            "${S15_02}",
                            [0,347.651123046875,441,356.645751953125],
                            [0,704,441,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid336",
                            "display",
                            0,
                            0,
                            "linear",
                            "${i_info2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid615",
                            "clip",
                            0,
                            500,
                            "easeOutBack",
                            "${S15_01}",
                            [0,-70.796875,75,0],
                            [0,919,75,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid619",
                            "opacity",
                            500,
                            500,
                            "easeOutBack",
                            "${S15_02}",
                            '0',
                            '1'
                        ]
                    ]
                }
            },
            "Slide_16": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'Back',
                            type: 'image',
                            rect: ['0', '0', '1024px', '768px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/Cover/Back.png', '0px', '0px']
                        },
                        {
                            rect: [0, 0, '1024px', '768px', 'auto', 'auto'],
                            id: 'Slide_16',
                            stroke: [2, 'rgb(255, 255, 255)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,0.00)']
                        },
                        {
                            font: ['Arial, Helvetica, sans-serif', [10, 'px'], 'rgba(0,0,0,1)', 'normal', 'none', '', '', ''],
                            rect: [925, 527, 157, 'auto', 'auto', 'auto'],
                            transform: [[0, 0, 0], ['90', 0, 0], [0, 0], [1, 1, 1], ['50%', '50%']],
                            textStyle: ['', '', '19px', ''],
                            id: 'Text',
                            text: 'FAS-RDA-3-1113-1115',
                            align: 'center',
                            type: 'text'
                        },
                        {
                            rect: [990, 625, 'auto', 'auto', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [10, ''], 'rgba(0,0,0,1)', 'normal', 'none', 'normal', '', 'nowrap'],
                            transform: [[0, 0, 0], ['90', 0, 0], [0, 0], [1, 1, 1], ['50%', '50%']],
                            align: 'center',
                            id: 'Text2',
                            text: '©CAT',
                            type: 'text',
                            tag: 'code'
                        },
                        {
                            rect: [0, 669, '521px', '99px', 'auto', 'auto'],
                            id: 'S16_03',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/S16/S16_03.png', '0px', '-116.36987304688px']
                        },
                        {
                            rect: [529, 168, '443px', '468px', 'auto', 'auto'],
                            type: 'image',
                            id: 'S16_04',
                            opacity: '0',
                            clip: 'rect(0px 443px -21.9844970703125px 0px)',
                            fill: ['rgba(0,0,0,0)', 'images/S16/S16_04.png', '0px', '0px']
                        },
                        {
                            rect: [788, 679, '184px', '61px', 'auto', 'auto'],
                            id: 'S16_05',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/S16/S16_05.png', '-189.390625px', '0px']
                        },
                        {
                            rect: [50, 66, '924px', '68px', 'auto', 'auto'],
                            transform: [[0, 0, 0], [0, 0, 0], [0, 0], ['0', '0', 1], ['50%', '50%']],
                            id: 'S16_01',
                            opacity: '0',
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/S16/S16_01.png', '0px', '0px']
                        },
                        {
                            rect: [50, 168, '443px', '516px', 'auto', 'auto'],
                            type: 'image',
                            id: 'S16_02',
                            opacity: '0',
                            clip: 'rect(0px 443px -11.072998046875px 0px)',
                            fill: ['rgba(0,0,0,0)', 'images/S16/S16_02.png', '0px', '0px']
                        },
                        {
                            rect: [0, 0, 800, 200, 'auto', 'auto'],
                            overflow: 'hidden',
                            id: 'Ref_S16',
                            symbolName: 'Ref_S16',
                            clip: 'rect(100px 400px 100px 400px)',
                            type: 'rect'
                        },
                        {
                            rect: [902, 104, '96px', '96px', 'auto', 'auto'],
                            type: 'image',
                            id: 'i_info2',
                            display: 'none',
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/i_info2.png', '0px', '0px']
                        },
                        {
                            type: 'image',
                            id: 'i_info1',
                            rect: [931, 135, '36px', '36px', 'auto', 'auto'],
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/i_info1.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'hidden',
                            rect: [null, null, 1024, 768]
                        }
                    }
                },
                timeline: {
                    duration: 2000,
                    autoPlay: false,
                    data: [
                        [
                            "eid765",
                            "opacity",
                            1500,
                            500,
                            "linear",
                            "${S16_05}",
                            '0',
                            '1'
                        ],
                        [
                            "eid337",
                            "display",
                            0,
                            0,
                            "linear",
                            "${i_info2}",
                            'none',
                            'none'
                        ],
                        [
                            "eid751",
                            "clip",
                            500,
                            500,
                            "linear",
                            "${S16_02}",
                            [0,443,-11.072998046875,0],
                            [0,443,516,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid745",
                            "scaleX",
                            0,
                            500,
                            "linear",
                            "${S16_01}",
                            '0',
                            '1'
                        ],
                        [
                            "eid753",
                            "opacity",
                            500,
                            500,
                            "linear",
                            "${S16_02}",
                            '0',
                            '1'
                        ],
                        [
                            "eid759",
                            "clip",
                            1250,
                            500,
                            "linear",
                            "${S16_04}",
                            [0,443,-21.9844970703125,0],
                            [0,443,468,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid761",
                            "opacity",
                            1250,
                            500,
                            "linear",
                            "${S16_04}",
                            '0',
                            '1'
                        ],
                        [
                            "eid757",
                            "opacity",
                            750,
                            500,
                            "linear",
                            "${S16_03}",
                            '0',
                            '1'
                        ],
                        [
                            "eid755",
                            "background-position",
                            750,
                            500,
                            "linear",
                            "${S16_03}",
                            [0,-116.36987304688],
                            [0,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid749",
                            "opacity",
                            0,
                            500,
                            "linear",
                            "${S16_01}",
                            '0',
                            '1'
                        ],
                        [
                            "eid747",
                            "scaleY",
                            0,
                            500,
                            "linear",
                            "${S16_01}",
                            '0',
                            '1'
                        ],
                        [
                            "eid763",
                            "background-position",
                            1500,
                            500,
                            "linear",
                            "${S16_05}",
                            [-189.390625,0],
                            [0,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ]
                    ]
                }
            },
            "Chart_S07": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'S7_02',
                            type: 'image',
                            rect: [0, -13, 998, 753, 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/S7/S7_02.png', '0px', '0px']
                        },
                        {
                            id: 'S7_03',
                            type: 'image',
                            rect: [0, 0, '998px', '740px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/S7/S7_03.png', '0px', '0px']
                        },
                        {
                            id: 'S7_04',
                            type: 'image',
                            rect: [62, 11, '874px', '219px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/S7/S7_04.png', '0px', '0px']
                        },
                        {
                            id: 'S7_05',
                            type: 'image',
                            rect: [76, 103, '324px', '64px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/S7/S7_05.png', '-327.31787109375px', '-64.645751953125px']
                        },
                        {
                            id: 'S7_06',
                            type: 'image',
                            rect: [407, 103, '405px', '69px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/S7/S7_06.png', '411.16650390625px', '-74.369750976562px']
                        },
                        {
                            id: 'S7_07',
                            type: 'image',
                            rect: [217, 159, '452px', '84px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/S7/S7_07.png', '0px', '-95.161376953125px']
                        },
                        {
                            rect: [151, 240, '689px', '84px', 'auto', 'auto'],
                            id: 'S7_08',
                            type: 'image',
                            clip: 'rect(0px 333.385498046875px 84px 344.40087890625px)',
                            fill: ['rgba(0,0,0,0)', 'images/S7/S7_08.png', '0px', '0px']
                        },
                        {
                            id: 'S7_09',
                            type: 'image',
                            rect: [271, 308, '451px', '52px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/S7/S7_09.png', '0px', '-63.552001953125px']
                        },
                        {
                            id: 'S7_12',
                            type: 'image',
                            rect: [92, 463, '276px', '54px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/S7/S7_12.png', '-287.61450195312px', '0px']
                        },
                        {
                            id: 'S7_13',
                            type: 'image',
                            rect: [364, 442, '66px', '103px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/S7/S7_13.png', '70.421875px', '0px']
                        },
                        {
                            id: 'S7_14',
                            type: 'image',
                            rect: [543, 442, '60px', '103px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/S7/S7_14.png', '-62.52099609375px', '0px']
                        },
                        {
                            id: 'S7_15',
                            type: 'image',
                            rect: [600, 462, '270px', '54px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/S7/S7_15.png', '280.59887695312px', '0px']
                        },
                        {
                            id: 'S7_16',
                            type: 'image',
                            rect: [77, 540, '410px', '84px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/S7/S7_16.png', '0px', '-89.682373046875px']
                        },
                        {
                            id: 'S7_17',
                            type: 'image',
                            rect: [508, 540, '410px', '84px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/S7/S7_17.png', '0px', '-92.890625px']
                        },
                        {
                            id: 'S7_18',
                            type: 'image',
                            rect: [67, 623, '410px', '81px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/S7/S7_18.png', '0px', '-92.59912109375px']
                        },
                        {
                            id: 'S7_19',
                            type: 'image',
                            rect: [517, 621, '410px', '81px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/S7/S7_19.png', '0px', '-90.572998046875px']
                        },
                        {
                            id: 'S7_10',
                            type: 'image',
                            rect: [67, 347, '410px', '116px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/S7/S7_10.png', '-419.21875px', '-118.61962890625px']
                        },
                        {
                            id: 'S7_11',
                            type: 'image',
                            rect: [511, 358, '410px', '107px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/S7/S7_11.png', '414.03125px', '-108.49487304688px']
                        },
                        {
                            rect: [7, 103, 981, 631, 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            type: 'ellipse',
                            id: 'stop',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(255,255,255,0)']
                        },
                        {
                            rect: [5, 103, 985, 631, 'auto', 'auto'],
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            type: 'ellipse',
                            id: 'ply',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(255,255,255,0)']
                        },
                        {
                            type: 'ellipse',
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            rect: [7, 5, '48px', '52px', 'auto', 'auto'],
                            id: 'zoom',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(255,255,255,0)']
                        },
                        {
                            type: 'ellipse',
                            borderRadius: ['50%', '50%', '50%', '50%'],
                            rect: [942, 5, '48px', '52px', 'auto', 'auto'],
                            id: 'out',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(255,255,255,0)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'hidden',
                            rect: [null, null, 998, 740]
                        }
                    }
                },
                timeline: {
                    duration: 3000,
                    autoPlay: false,
                    data: [
                        [
                            "eid477",
                            "background-position",
                            1250,
                            500,
                            "easeOutBack",
                            "${S7_14}",
                            [-62.52099609375,0],
                            [0,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid491",
                            "background-position",
                            2000,
                            500,
                            "easeOutBack",
                            "${S7_17}",
                            [0,-92.890625],
                            [0,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid473",
                            "background-position",
                            1000,
                            500,
                            "easeOutBack",
                            "${S7_11}",
                            [414.03125,-108.49487304688],
                            [0,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid481",
                            "background-position",
                            1750,
                            500,
                            "easeOutBack",
                            "${S7_15}",
                            [280.59887695312,0],
                            [0,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid493",
                            "background-position",
                            2500,
                            500,
                            "easeOutBack",
                            "${S7_19}",
                            [0,-90.572998046875],
                            [0,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid495",
                            "background-position",
                            2500,
                            500,
                            "easeOutBack",
                            "${S7_18}",
                            [0,-92.59912109375],
                            [0,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid467",
                            "background-position",
                            250,
                            500,
                            "easeOutBack",
                            "${S7_07}",
                            [0,-95.161376953125],
                            [0,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid479",
                            "background-position",
                            1250,
                            500,
                            "easeOutBack",
                            "${S7_13}",
                            [70.421875,0],
                            [0,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid483",
                            "background-position",
                            1750,
                            500,
                            "easeOutBack",
                            "${S7_12}",
                            [-287.61450195312,0],
                            [0,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid469",
                            "clip",
                            500,
                            500,
                            "easeOutBack",
                            "${S7_08}",
                            [0,333.385498046875,84,344.40087890625],
                            [0,689,84,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid475",
                            "background-position",
                            1000,
                            500,
                            "easeOutBack",
                            "${S7_10}",
                            [-419.21875,-118.61962890625],
                            [0,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid465",
                            "background-position",
                            0,
                            500,
                            "easeOutBack",
                            "${S7_05}",
                            [-327.31787109375,-64.645751953125],
                            [0,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid463",
                            "background-position",
                            0,
                            250,
                            "easeOutBack",
                            "${S7_06}",
                            [411.16650390625,-74.369750976562],
                            [0,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid485",
                            "background-position",
                            2000,
                            500,
                            "easeOutBack",
                            "${S7_16}",
                            [0,-89.682373046875],
                            [0,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid471",
                            "background-position",
                            750,
                            500,
                            "easeOutBack",
                            "${S7_09}",
                            [0,-63.552001953125],
                            [0,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ]
                    ]
                }
            },
            "Graph_S05": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: [0, 132, '103px', '169px', 'auto', 'auto'],
                            id: 'S5_04',
                            type: 'image',
                            clip: 'rect(193.109375px 103px 169px 0px)',
                            fill: ['rgba(0,0,0,0)', 'images/S5/S5_04.png', '0px', '0px']
                        },
                        {
                            rect: [197, 98, '103px', '68px', 'auto', 'auto'],
                            id: 'S5_06',
                            type: 'image',
                            clip: 'rect(76.375px 103px 68px 0px)',
                            fill: ['rgba(0,0,0,0)', 'images/S5/S5_06.png', '0px', '0px']
                        },
                        {
                            id: 'S5_03',
                            type: 'image',
                            rect: [50, 40, '99px', '109px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/S5/S5_03.png', '0px', '117.703125px']
                        },
                        {
                            id: 'S5_05',
                            type: 'image',
                            rect: [246, 0, '99px', '112px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/S5/S5_05.png', '0px', '124.5234375px']
                        },
                        {
                            rect: [-189, -58, 614, 433, 'auto', 'auto'],
                            type: 'rect',
                            opacity: '0',
                            id: 'stop',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(255,255,255,0.00)']
                        },
                        {
                            rect: [-192, -58, 614, 433, 'auto', 'auto'],
                            type: 'rect',
                            opacity: '0',
                            id: 'ply',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(255,255,255,0.00)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'hidden',
                            rect: [null, null, 345, 301]
                        }
                    }
                },
                timeline: {
                    duration: 1750,
                    autoPlay: false,
                    data: [
                        [
                            "eid429",
                            "background-position",
                            1250,
                            500,
                            "easeOutBounce",
                            "${S5_05}",
                            [0,124.5234375],
                            [0,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid425",
                            "background-position",
                            500,
                            500,
                            "easeOutBounce",
                            "${S5_03}",
                            [0,117.703125],
                            [0,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid427",
                            "clip",
                            1000,
                            250,
                            "swing",
                            "${S5_06}",
                            [76.375,103,68,0],
                            [0,103,68,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid421",
                            "clip",
                            0,
                            500,
                            "swing",
                            "${S5_04}",
                            [193.109375,103,169,0],
                            [0,103,169,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ]
                    ]
                }
            },
            "Graph_S06": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: [201, 73, '93px', '160px', 'auto', 'auto'],
                            id: 'S6_06',
                            type: 'image',
                            clip: 'rect(168.0521240234375px 93px 160px 0px)',
                            fill: ['rgba(0,0,0,0)', 'images/S6/S6_06.png', '0px', '0px']
                        },
                        {
                            id: 'S6_05',
                            type: 'image',
                            rect: [243, 3, '89px', '88px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/S6/S6_05.png', '0px', '99.510375976562px']
                        },
                        {
                            rect: [0, 70, '93px', '245px', 'auto', 'auto'],
                            id: 'S6_04',
                            type: 'image',
                            clip: 'rect(262.1248779296875px 93px 245px 0px)',
                            fill: ['rgba(0,0,0,0)', 'images/S6/S6_04.png', '0px', '0px']
                        },
                        {
                            id: 'S6_03',
                            type: 'image',
                            rect: [42, 0, '89px', '85px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/S6/S6_03.png', '0px', '96.84375px']
                        },
                        {
                            rect: [-189, -58, 614, 433, 'auto', 'auto'],
                            type: 'rect',
                            opacity: '0',
                            id: 'stop',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(255,255,255,0.00)']
                        },
                        {
                            rect: [-192, -58, 614, 433, 'auto', 'auto'],
                            type: 'rect',
                            opacity: '0',
                            id: 'ply',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(255,255,255,0.00)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'hidden',
                            rect: [null, null, 332, 315]
                        }
                    }
                },
                timeline: {
                    duration: 1500,
                    autoPlay: false,
                    data: [
                        [
                            "eid449",
                            "background-position",
                            1125,
                            375,
                            "easeOutBack",
                            "${S6_05}",
                            [0,99.510375976562],
                            [0,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid443",
                            "clip",
                            0,
                            375,
                            "swing",
                            "${S6_04}",
                            [262.1248779296875,93,245,0],
                            [0,93,245,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid445",
                            "background-position",
                            375,
                            375,
                            "easeOutBack",
                            "${S6_03}",
                            [0,96.84375],
                            [0,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid447",
                            "clip",
                            750,
                            375,
                            "swing",
                            "${S6_06}",
                            [168.0521240234375,93,160,0],
                            [0,93,160,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ]
                    ]
                }
            },
            "Graph_S09": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: [0, 0, '598px', '277px', 'auto', 'auto'],
                            id: 'S9_03',
                            type: 'image',
                            clip: 'rect(0px -7.88525390625px 277px 0px)',
                            fill: ['rgba(0,0,0,0)', 'images/S9/S9_03.png', '0px', '0px']
                        },
                        {
                            rect: [3, 0, '595px', '261px', 'auto', 'auto'],
                            id: 'S9_05',
                            type: 'image',
                            clip: 'rect(0px -8.567626953125px 261px 0px)',
                            fill: ['rgba(0,0,0,0)', 'images/S9/S9_05.png', '0px', '0px']
                        },
                        {
                            id: 'S9_04',
                            type: 'image',
                            rect: [174, 233, '46px', '20px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/S9/S9_04.png', '-63.16162109375px', '24.291748046875px']
                        },
                        {
                            id: 'S9_06',
                            type: 'image',
                            rect: [168, 147, '46px', '20px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/S9/S9_06.png', '63.901123046875px', '-25.729125976562px']
                        },
                        {
                            rect: [-80, -70, 707, 433, 'auto', 'auto'],
                            type: 'rect',
                            opacity: '0',
                            id: 'stop',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(255,255,255,0.00)']
                        },
                        {
                            rect: [-83, -70, 707, 433, 'auto', 'auto'],
                            type: 'rect',
                            opacity: '0',
                            id: 'ply',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(255,255,255,0.00)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'hidden',
                            rect: [null, null, 598, 277]
                        }
                    }
                },
                timeline: {
                    duration: 2000,
                    autoPlay: false,
                    data: [
                        [
                            "eid519",
                            "background-position",
                            1000,
                            500,
                            "swing",
                            "${S9_04}",
                            [-63.16162109375,24.291748046875],
                            [0,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid517",
                            "background-position",
                            1500,
                            500,
                            "swing",
                            "${S9_06}",
                            [63.901123046875,-25.729125976562],
                            [0,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid513",
                            "clip",
                            500,
                            500,
                            "swing",
                            "${S9_05}",
                            [0,-8.567626953125,261,0],
                            [0,595,261,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid515",
                            "clip",
                            0,
                            500,
                            "swing",
                            "${S9_03}",
                            [0,-7.88525390625,277,0],
                            [0,598,277,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ]
                    ]
                }
            },
            "Graph_S11": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: [0, 134, '94px', '206px', 'auto', 'auto'],
                            id: 'S11_04',
                            type: 'image',
                            clip: 'rect(212.3958740234375px 94px 206px 0px)',
                            fill: ['rgba(0,0,0,0)', 'images/S11/S11_04.png', '0px', '0px']
                        },
                        {
                            rect: [172, 91, '94px', '249px', 'auto', 'auto'],
                            id: 'S11_06',
                            type: 'image',
                            clip: 'rect(264.5001220703125px 94px 249px 0px)',
                            fill: ['rgba(0,0,0,0)', 'images/S11/S11_06.png', '0px', '0px']
                        },
                        {
                            id: 'S11_03',
                            type: 'image',
                            rect: [47, 38, '90px', '105px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/S11/S11_03.png', '0px', '124.54162597656px']
                        },
                        {
                            id: 'S11_05',
                            type: 'image',
                            rect: [219, 0, '89px', '105px', 'auto', 'auto'],
                            fill: ['rgba(0,0,0,0)', 'images/S11/S11_05.png', '0px', '113.1875px']
                        },
                        {
                            rect: [-230, -39, 696, 433, 'auto', 'auto'],
                            type: 'rect',
                            opacity: '0',
                            id: 'stop',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(255,255,255,0.00)']
                        },
                        {
                            rect: [-233, -39, 696, 433, 'auto', 'auto'],
                            type: 'rect',
                            opacity: '0',
                            id: 'ply',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(255,255,255,0.00)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'hidden',
                            rect: [null, null, 308, 340]
                        }
                    }
                },
                timeline: {
                    duration: 2000,
                    autoPlay: false,
                    data: [
                        [
                            "eid553",
                            "clip",
                            1000,
                            500,
                            "swing",
                            "${S11_06}",
                            [264.5001220703125,94,249,0],
                            [0,94,249,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid551",
                            "background-position",
                            500,
                            500,
                            "swing",
                            "${S11_03}",
                            [0,124.54162597656],
                            [0,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid549",
                            "clip",
                            0,
                            500,
                            "swing",
                            "${S11_04}",
                            [212.3958740234375,94,206,0],
                            [0,94,206,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid555",
                            "background-position",
                            1500,
                            500,
                            "swing",
                            "${S11_05}",
                            [0,113.1875],
                            [0,0],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ]
                    ]
                }
            },
            "Graph_S12": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: [2, 1, '538px', '254px', 'auto', 'auto'],
                            id: 'S12_03',
                            type: 'image',
                            clip: 'rect(0px 269.255126953125px 254px 291.114501953125px)',
                            fill: ['rgba(0,0,0,0)', 'images/S12/S12_03.png', '0px', '0px']
                        },
                        {
                            rect: [0, 0, '550px', '237px', 'auto', 'auto'],
                            id: 'S12_04',
                            type: 'image',
                            clip: 'rect(0px 276.5625px 237px 287.11962890625px)',
                            fill: ['rgba(0,0,0,0)', 'images/S12/S12_04.png', '0px', '0px']
                        },
                        {
                            rect: [-96, -17, 691, 433, 'auto', 'auto'],
                            type: 'rect',
                            opacity: '0',
                            id: 'stop',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(255,255,255,0.00)']
                        },
                        {
                            rect: [-99, -17, 691, 433, 'auto', 'auto'],
                            type: 'rect',
                            opacity: '0',
                            id: 'ply',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(255,255,255,0.00)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'hidden',
                            rect: [null, null, 550, 255]
                        }
                    }
                },
                timeline: {
                    duration: 1000,
                    autoPlay: false,
                    data: [
                        [
                            "eid575",
                            "clip",
                            0,
                            500,
                            "swing",
                            "${S12_03}",
                            [0,269.255126953125,254,291.114501953125],
                            [0,538,254,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid577",
                            "clip",
                            500,
                            500,
                            "swing",
                            "${S12_04}",
                            [0,276.5625,237,287.11962890625],
                            [0,550,237,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ]
                    ]
                }
            },
            "Graph_S15": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: [0, 0, '442px', '279px', 'auto', 'auto'],
                            id: 'S15_03',
                            type: 'image',
                            clip: 'rect(0px 215.427001953125px 279px 215.604248046875px)',
                            fill: ['rgba(0,0,0,0)', 'images/S15/S15_03.png', '0px', '0px']
                        },
                        {
                            rect: [0, 0, '442px', '309px', 'auto', 'auto'],
                            id: 'S15_04',
                            type: 'image',
                            clip: 'rect(0px 203.18212890625px 309px 227.11474609375px)',
                            fill: ['rgba(0,0,0,0)', 'images/S15/S15_04.png', '0px', '0px']
                        },
                        {
                            rect: [-91, -17, 689, 433, 'auto', 'auto'],
                            type: 'rect',
                            opacity: '0',
                            id: 'stop',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(255,255,255,0.00)']
                        },
                        {
                            rect: [-94, -17, 689, 433, 'auto', 'auto'],
                            type: 'rect',
                            opacity: '0',
                            id: 'ply',
                            stroke: [0, 'rgba(0,0,0,1)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(255,255,255,0.00)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            overflow: 'hidden',
                            rect: [null, null, 442, 309]
                        }
                    }
                },
                timeline: {
                    duration: 1000,
                    autoPlay: false,
                    data: [
                        [
                            "eid623",
                            "clip",
                            500,
                            500,
                            "swing",
                            "${S15_04}",
                            [0,203.18212890625,309,227.11474609375],
                            [0,442,309,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ],
                        [
                            "eid621",
                            "clip",
                            0,
                            500,
                            "swing",
                            "${S15_03}",
                            [0,215.427001953125,279,215.604248046875],
                            [0,442,279,0],
                            {valueTemplate: 'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'}
                        ]
                    ]
                }
            },
            "Index": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0', '0', '1024px', '768px', 'auto', 'auto'],
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            id: 'waterMark',
                            opacity: '0.7',
                            type: 'rect',
                            fill: ['rgba(0,0,0,1.00)']
                        },
                        {
                            rect: ['274', '126', '158', '114', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            stroke: [1, 'rgba(255,255,255,1.00)', 'solid'],
                            id: 'RoundRect',
                            opacity: '1',
                            type: 'rect',
                            fill: ['rgba(255,255,255,0.00)']
                        },
                        {
                            rect: ['521', '124', '158', '114', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            stroke: [1, 'rgba(22,247,252,1.00)', 'solid'],
                            id: 'RoundRectCopy8',
                            opacity: '1',
                            type: 'rect',
                            fill: ['rgba(255,255,255,0.00)']
                        },
                        {
                            rect: ['274', '596', '158', '114', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            stroke: [1, 'rgba(236,134,255,1.00)', 'solid'],
                            id: 'RoundRectCopy10',
                            opacity: '1',
                            type: 'rect',
                            fill: ['rgba(255,255,255,0.00)']
                        },
                        {
                            rect: ['765', '596', '158', '114', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            stroke: [1, 'rgba(255,244,134,1.00)', 'solid'],
                            id: 'RoundRectCopy3',
                            opacity: '1',
                            type: 'rect',
                            fill: ['rgba(255,255,255,0.00)']
                        },
                        {
                            rect: ['451', '596', '296', '114', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            stroke: [1, 'rgba(197,197,252,1.00)', 'solid'],
                            id: 'RoundRectCopy',
                            opacity: '1',
                            type: 'rect',
                            fill: ['rgba(255,255,255,0.00)']
                        },
                        {
                            rect: ['767', '126', '154', '114', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            id: 'RoundRectCopy2',
                            stroke: [1, 'rgba(44,252,22,1.00)', 'solid'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,0.00)']
                        },
                        {
                            rect: ['274', '297', '649', '230', 'auto', 'auto'],
                            borderRadius: ['10px', '10px', '10px', '10px'],
                            id: 'RoundRectCopy9',
                            stroke: [1, 'rgba(252,177,22,1.00)', 'solid'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,0.00)']
                        },
                        {
                            type: 'text',
                            id: 'Text',
                            text: 'Mechanism of action',
                            rect: ['282', '107', 'auto', 'auto', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [14, 'px'], 'rgba(255,255,255,1.00)', '700', 'none', '', 'break-word', 'nowrap']
                        },
                        {
                            type: 'text',
                            rect: ['540', '92', 'auto', 'auto', 'auto', 'auto'],
                            id: 'TextCopy2',
                            text: 'Faslodex 500mg: <br>WHOM',
                            align: 'center',
                            font: ['Arial, Helvetica, sans-serif', [14, 'px'], 'rgba(22,247,252,1.00)', '700', 'none', '', 'break-word', 'nowrap']
                        },
                        {
                            type: 'text',
                            rect: ['478', '271', 'auto', 'auto', 'auto', 'auto'],
                            id: 'TextCopy4',
                            text: 'Faslodex 500mg: Efficacy that lasts',
                            align: 'center',
                            font: ['Arial, Helvetica, sans-serif', [14, 'px'], 'rgba(252,177,22,1.00)', '700', 'none', '', 'break-word', 'nowrap']
                        },
                        {
                            type: 'text',
                            id: 'TextCopy5',
                            text: 'Faslodex 500mg: Early Start',
                            rect: ['503', '576', 'auto', 'auto', 'auto', 'auto'],
                            font: ['Arial, Helvetica, sans-serif', [14, 'px'], 'rgba(197,197,252,1.00)', '700', 'none', '', 'break-word', 'nowrap']
                        },
                        {
                            type: 'text',
                            rect: ['294', '560', 'auto', 'auto', 'auto', 'auto'],
                            id: 'TextCopy3',
                            text: 'Faslodex 500 mg:<br>Tolerability',
                            align: 'center',
                            font: ['Arial, Helvetica, sans-serif', [14, 'px'], 'rgba(236,134,255,1.00)', '700', 'none', '', 'break-word', 'nowrap']
                        },
                        {
                            type: 'text',
                            rect: ['784', '560', 'auto', 'auto', 'auto', 'auto'],
                            id: 'TextCopy6',
                            text: 'Faslodex 500 mg:<br>PI',
                            align: 'center',
                            font: ['Arial, Helvetica, sans-serif', [14, 'px'], 'rgba(255,244,134,1.00)', '700', 'none', '', 'break-word', 'nowrap']
                        },
                        {
                            type: 'text',
                            rect: ['779', '94', 'auto', 'auto', 'auto', 'auto'],
                            id: 'TextCopy',
                            text: 'Faslodex 500mg: <br>Dose',
                            align: 'center',
                            font: ['Arial, Helvetica, sans-serif', [14, 'px'], 'rgba(44,252,22,1.00)', '700', 'none', '', 'break-word', 'nowrap']
                        },
                        {
                            transform: [[], [], [], ['0.13', '0.13']],
                            id: 'Poster17',
                            opacity: '0.5',
                            cursor: 'pointer',
                            rect: ['333', '270', '1024', '768', 'auto', 'auto'],
                            fi: [0, 0, 1, 1, 0, 0, 0, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            boxShadow: ['', 0, 0, 0, 10, 'rgba(255,255,255,1.00)'],
                            type: 'image',
                            filter: [0, 0, 1, 1, 0, 0, 0, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            fill: ['rgba(0,0,0,0)', 'images/Poster17.png', '0px', '0px']
                        },
                        {
                            transform: [[], [], [], ['0.13', '0.13']],
                            id: 'Poster16',
                            opacity: '0.5',
                            cursor: 'pointer',
                            rect: ['160', '270', '1024', '768', 'auto', 'auto'],
                            fi: [0, 0, 1, 1, 0, 0, 0, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            boxShadow: ['', 0, 0, 0, 10, 'rgba(255,255,255,1.00)'],
                            type: 'image',
                            filter: [0, 0, 1, 1, 0, 0, 0, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            fill: ['rgba(0,0,0,0)', 'images/Poster16.png', '0px', '0px']
                        },
                        {
                            transform: [[], [], [], ['0.13', '0.13']],
                            id: 'Poster15',
                            opacity: '0.5',
                            cursor: 'pointer',
                            rect: ['14', '270', '1024', '768', 'auto', 'auto'],
                            fi: [0, 0, 1, 1, 0, 0, 0, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            boxShadow: ['', 0, 0, 0, 10, 'rgba(255,255,255,1.00)'],
                            type: 'image',
                            filter: [0, 0, 1, 1, 0, 0, 0, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            fill: ['rgba(0,0,0,0)', 'images/Poster15.png', '0px', '0px']
                        },
                        {
                            transform: [[], [], [], ['0.13', '0.13']],
                            id: 'Poster14',
                            opacity: '0.5',
                            cursor: 'pointer',
                            rect: ['-158', '270', '1024px', '768', 'auto', 'auto'],
                            fi: [0, 0, 1, 1, 0, 0, 0, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            boxShadow: ['', 0, 0, 0, 10, 'rgba(255,255,255,1.00)'],
                            type: 'image',
                            filter: [0, 0, 1, 1, 0, 0, 0, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            fill: ['rgba(0,0,0,0)', 'images/Poster14.png', '0px', '0px']
                        },
                        {
                            transform: [[], [], [], ['0.13', '0.13']],
                            id: 'Poster13',
                            opacity: '0.5',
                            cursor: 'pointer',
                            rect: ['333', '84', '1024', '768', 'auto', 'auto'],
                            fi: [0, 0, 1, 1, 0, 0, 0, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            boxShadow: ['', 0, 0, 0, 10, 'rgba(255,255,255,1.00)'],
                            type: 'image',
                            filter: [0, 0, 1, 1, 0, 0, 0, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            fill: ['rgba(0,0,0,0)', 'images/Poster13.png', '0px', '0px']
                        },
                        {
                            transform: [[], [], [], ['0.13', '0.13']],
                            id: 'Poster12',
                            opacity: '0.5',
                            cursor: 'pointer',
                            rect: ['171', '84', '1024', '768', 'auto', 'auto'],
                            fi: [0, 0, 1, 1, 0, 0, 0, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            boxShadow: ['', 0, 0, 0, 10, 'rgba(255,255,255,1.00)'],
                            type: 'image',
                            filter: [0, 0, 1, 1, 0, 0, 0, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            fill: ['rgba(0,0,0,0)', 'images/Poster12.png', '0px', '0px']
                        },
                        {
                            transform: [[], [], [], ['0.13', '0.13']],
                            id: 'Poster11',
                            opacity: '0.5',
                            cursor: 'pointer',
                            rect: ['10', '84', '1024', '768', 'auto', 'auto'],
                            fi: [0, 0, 1, 1, 0, 0, 0, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            boxShadow: ['', 0, 0, 0, 10, 'rgba(255,255,255,1.00)'],
                            type: 'image',
                            filter: [0, 0, 1, 1, 0, 0, 0, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            fill: ['rgba(0,0,0,0)', 'images/Poster11.png', '0px', '0px']
                        },
                        {
                            transform: [[], [], [], ['0.13', '0.13']],
                            id: 'Poster10',
                            opacity: '0.5',
                            cursor: 'pointer',
                            rect: ['-152', '84', '1024', '768', 'auto', 'auto'],
                            fi: [0, 0, 1, 1, 0, 0, 0, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            boxShadow: ['', 0, 0, 0, 10, 'rgba(255,255,255,1.00)'],
                            type: 'image',
                            filter: [0, 0, 1, 1, 0, 0, 0, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            fill: ['rgba(0,0,0,0)', 'images/Poster10.png', '0px', '0px']
                        },
                        {
                            transform: [[], [], [], ['0.13', '0.13']],
                            id: 'Poster9',
                            opacity: '0.5',
                            cursor: 'pointer',
                            rect: ['333', '-28', '1024px', '768', 'auto', 'auto'],
                            fi: [0, 0, 1, 1, 0, 0, 0, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            boxShadow: ['', 0, 0, 0, 10, 'rgba(255,255,255,1.00)'],
                            type: 'image',
                            filter: [0, 0, 1, 1, 0, 0, 0, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            fill: ['rgba(0,0,0,0)', 'images/Poster9.png', '0px', '0px']
                        },
                        {
                            transform: [[], [], [], ['0.13', '0.13']],
                            id: 'Poster8',
                            opacity: '0.5',
                            cursor: 'pointer',
                            rect: ['171', '-28', '1024', '768', 'auto', 'auto'],
                            fi: [0, 0, 1, 1, 0, 0, 0, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            boxShadow: ['', 0, 0, 0, 10, 'rgba(255,255,255,1.00)'],
                            type: 'image',
                            filter: [0, 0, 1, 1, 0, 0, 0, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            fill: ['rgba(0,0,0,0)', 'images/Poster8.png', '0px', '0px']
                        },
                        {
                            transform: [[], [], [], ['0.13', '0.13']],
                            id: 'Poster7',
                            opacity: '0.5',
                            cursor: 'pointer',
                            rect: ['10', '-28', '1024', '768', 'auto', 'auto'],
                            boxShadow: ['', 0, 0, 0, 10, 'rgba(255,255,255,1.00)'],
                            fi: [0, 0, 1, 1, 0, 0, 0, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            type: 'image',
                            fill: ['rgba(0,0,0,0)', 'images/Poster7.png', '0px', '0px'],
                            filter: [0, 0, 1, 1, 0, 0, 0, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            tag: 'img'
                        },
                        {
                            transform: [[], [], [], ['0.13', '0.13']],
                            id: 'Poster6',
                            opacity: '0.5',
                            cursor: 'pointer',
                            rect: ['-152', '-28', '1024', '768', 'auto', 'auto'],
                            fi: [0, 0, 1, 1, 0, 0, 0, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            boxShadow: ['', 0, 0, 0, 10, 'rgba(255,255,255,1.00)'],
                            type: 'image',
                            filter: [0, 0, 1, 1, 0, 0, 0, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            fill: ['rgba(0,0,0,0)', 'images/Poster6.png', '0px', '0px']
                        },
                        {
                            transform: [[], [], [], ['0.13', '0.13']],
                            id: 'Poster5',
                            opacity: '0.5',
                            cursor: 'pointer',
                            rect: ['334', '-201', '1024px', '768px', 'auto', 'auto'],
                            fi: [0, 0, 1, 1, 0, 0, 0, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            boxShadow: ['', 0, 0, 0, 10, 'rgba(255,255,255,1.00)'],
                            type: 'image',
                            filter: [0, 0, 1, 1, 0, 0, 0, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            fill: ['rgba(0,0,0,0)', 'images/Poster5.png', '0px', '0px']
                        },
                        {
                            transform: [[], [], [], ['0.13', '0.13']],
                            id: 'Poster4',
                            opacity: '0.5',
                            cursor: 'pointer',
                            rect: ['88', '-202', '1024px', '768px', 'auto', 'auto'],
                            fi: [0, 0, 1, 1, 0, 0, 0, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            boxShadow: ['', 0, 0, 0, 10, 'rgba(255,255,255,1.00)'],
                            type: 'image',
                            filter: [0, 0, 1, 1, 0, 0, 0, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            fill: ['rgba(0,0,0,0)', 'images/Poster4.png', '0px', '0px']
                        },
                        {
                            transform: [[], [], [], ['0.13', '0.13']],
                            id: 'Poster3',
                            opacity: '0.5',
                            cursor: 'pointer',
                            rect: ['-158', '-200', '1024px', '768px', 'auto', 'auto'],
                            fi: [0, 0, 1, 1, 0, 0, 0, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            boxShadow: ['', 0, 0, 0, 10, 'rgba(255,255,255,1.00)'],
                            type: 'image',
                            filter: [0, 0, 1, 1, 0, 0, 0, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            fill: ['rgba(0,0,0,0)', 'images/Poster3.png', '0px', '0px']
                        },
                        {
                            transform: [[], [], [], ['0.16', '0.16']],
                            id: 'Poster2',
                            opacity: '0.5',
                            cursor: 'pointer',
                            rect: ['-391', '-45', '1024px', '768px', 'auto', 'auto'],
                            fi: [0, 0, 1, 1, 0, 0, 0, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            boxShadow: ['', 0, 0, 0, 10, 'rgba(255,255,255,1.00)'],
                            type: 'image',
                            filter: [0, 0, 1, 1, 0, 0, 0, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            fill: ['rgba(0,0,0,0)', 'images/Poster2.png', '0px', '0px']
                        },
                        {
                            transform: [[], [], [], ['0.16', '0.16']],
                            id: 'Poster',
                            opacity: '0.5',
                            cursor: 'pointer',
                            rect: ['-391', '-181', '1024px', '768px', 'auto', 'auto'],
                            fi: [0, 0, 1, 1, 0, 0, 0, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            boxShadow: ['', 0, 0, 0, 10, 'rgba(255,255,255,1.00)'],
                            type: 'image',
                            filter: [0, 0, 1, 1, 0, 0, 0, 0, 'rgba(0,0,0,0)', 0, 0, 0],
                            fill: ['rgba(0,0,0,0)', 'images/Poster.png', '0px', '0px']
                        },
                        {
                            type: 'text',
                            align: 'center',
                            textStyle: ['0px', '', '', ''],
                            font: ['Arial, Helvetica, sans-serif', [40, 'px'], 'rgba(255,255,255,1.00)', 'normal', 'none', '', 'break-word', ''],
                            text: 'index',
                            rect: ['21', '47', '189', 'auto', 'auto', 'auto'],
                            textShadow: ['rgba(0,0,0,0.65)', 3, 3, 3],
                            id: 'index'
                        },
                        {
                            type: 'text',
                            font: ['Arial, Helvetica, sans-serif', [35, 'px'], 'rgba(255,255,255,1.00)', 'normal', 'none', '', 'break-word', 'nowrap'],
                            transform: [[], ['-90'], [0, 0, 0], [1, 1, 1]],
                            id: 'FasContent',
                            text: 'Faslodex Content',
                            textShadow: ['rgba(0,0,0,0.65)', 3, 3, 3],
                            rect: ['-25', '548', 'auto', 'auto', 'auto', 'auto']
                        },
                        {
                            type: 'text',
                            id: 'close',
                            text: 'X',
                            cursor: 'pointer',
                            font: ['Arial, Helvetica, sans-serif', [30, 'px'], 'rgba(255,255,255,1)', 'normal', 'none', 'normal', 'break-word', ''],
                            rect: ['954', '30', '40', '40', 'auto', 'auto'],
                            textStyle: ['', '', '45px', ''],
                            textShadow: ['rgba(0,0,0,0.65)', 3, 3, 3],
                            align: 'center'
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1024', '768']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "Video_Frame": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'rect',
                            rect: ['0', '0', '1024', '768', 'auto', 'auto'],
                            id: 'back',
                            stroke: [10, 'rgb(252, 177, 22)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,1.00)']
                        },
                        {
                            type: 'rect',
                            rect: ['0', '84', '1024', '600', 'auto', 'auto'],
                            id: 'Vid3',
                            stroke: [10, 'rgb(252, 177, 22)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,1.00)']
                        },
                        {
                            type: 'rect',
                            rect: ['0', '84', '1024', '600', 'auto', 'auto'],
                            id: 'Vid2',
                            stroke: [10, 'rgb(252, 177, 22)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,1.00)']
                        },
                        {
                            type: 'rect',
                            rect: ['0', '84', '1024', '600', 'auto', 'auto'],
                            id: 'Vid1',
                            stroke: [10, 'rgb(252, 177, 22)', 'none'],
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,1.00)']
                        },
                        {
                            type: 'text',
                            rect: ['46', '47', '47', '45', 'auto', 'auto'],
                            id: 'close',
                            text: 'X',
                            align: 'center',
                            textStyle: ['', '', '45px', ''],
                            cursor: 'pointer',
                            font: ['Arial, Helvetica, sans-serif', [24, ''], 'rgba(255,255,255,1.00)', 'normal', 'none', '', 'break-word', '']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1024', '768']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "Hourglass": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0', '0', '1024px', '768px', 'auto', 'auto'],
                            id: '_0_00750',
                            type: 'image',
                            display: 'block',
                            fill: ['rgba(0,0,0,0)', 'images/Hourglass/0_00750.png', '0px', '0px']
                        },
                        {
                            rect: ['0', '0', '1024px', '768px', 'auto', 'auto'],
                            id: '_0_00751',
                            type: 'image',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/Hourglass/0_00751.png', '0px', '0px']
                        },
                        {
                            rect: ['0', '0', '1024px', '768px', 'auto', 'auto'],
                            id: '_0_00752',
                            type: 'image',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/Hourglass/0_00752.png', '0px', '0px']
                        },
                        {
                            rect: ['0', '0', '1024px', '768px', 'auto', 'auto'],
                            id: '_0_00753',
                            type: 'image',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/Hourglass/0_00753.png', '0px', '0px']
                        },
                        {
                            rect: ['0', '0', '1024px', '768px', 'auto', 'auto'],
                            id: '_0_00754',
                            type: 'image',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/Hourglass/0_00754.png', '0px', '0px']
                        },
                        {
                            rect: ['0', '0', '1024px', '768px', 'auto', 'auto'],
                            id: '_0_00755',
                            type: 'image',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/Hourglass/0_00755.png', '0px', '0px']
                        },
                        {
                            rect: ['0', '0', '1024px', '768px', 'auto', 'auto'],
                            id: '_0_00756',
                            type: 'image',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/Hourglass/0_00756.png', '0px', '0px']
                        },
                        {
                            rect: ['0', '0', '1024px', '768px', 'auto', 'auto'],
                            id: '_0_00757',
                            type: 'image',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/Hourglass/0_00757.png', '0px', '0px']
                        },
                        {
                            rect: ['0', '0', '1024px', '768px', 'auto', 'auto'],
                            id: '_0_00758',
                            type: 'image',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/Hourglass/0_00758.png', '0px', '0px']
                        },
                        {
                            rect: ['0', '0', '1024px', '768px', 'auto', 'auto'],
                            id: '_0_00759',
                            type: 'image',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/Hourglass/0_00759.png', '0px', '0px']
                        },
                        {
                            rect: ['0', '0', '1024px', '768px', 'auto', 'auto'],
                            id: '_0_00760',
                            type: 'image',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/Hourglass/0_00760.png', '0px', '0px']
                        },
                        {
                            rect: ['0', '0', '1024px', '768px', 'auto', 'auto'],
                            id: '_0_00761',
                            type: 'image',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/Hourglass/0_00761.png', '0px', '0px']
                        },
                        {
                            rect: ['0', '0', '1024px', '768px', 'auto', 'auto'],
                            id: '_0_00762',
                            type: 'image',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/Hourglass/0_00762.png', '0px', '0px']
                        },
                        {
                            rect: ['0', '0', '1024px', '768px', 'auto', 'auto'],
                            id: '_0_00763',
                            type: 'image',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/Hourglass/0_00763.png', '0px', '0px']
                        },
                        {
                            rect: ['0', '0', '1024px', '768px', 'auto', 'auto'],
                            id: '_0_00764',
                            type: 'image',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/Hourglass/0_00764.png', '0px', '0px']
                        },
                        {
                            rect: ['0', '0', '1024px', '768px', 'auto', 'auto'],
                            id: '_0_00765',
                            type: 'image',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/Hourglass/0_00765.png', '0px', '0px']
                        },
                        {
                            rect: ['0', '0', '1024px', '768px', 'auto', 'auto'],
                            id: '_0_00766',
                            type: 'image',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/Hourglass/0_00766.png', '0px', '0px']
                        },
                        {
                            rect: ['0', '0', '1024px', '768px', 'auto', 'auto'],
                            id: '_0_00767',
                            type: 'image',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/Hourglass/0_00767.png', '0px', '0px']
                        },
                        {
                            rect: ['0', '0', '1024px', '768px', 'auto', 'auto'],
                            id: '_0_00768',
                            type: 'image',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/Hourglass/0_00768.png', '0px', '0px']
                        },
                        {
                            rect: ['0', '0', '1024px', '768px', 'auto', 'auto'],
                            id: '_0_00769',
                            type: 'image',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/Hourglass/0_00769.png', '0px', '0px']
                        },
                        {
                            rect: ['0', '0', '1024px', '768px', 'auto', 'auto'],
                            id: '_0_00770',
                            type: 'image',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/Hourglass/0_00770.png', '0px', '0px']
                        },
                        {
                            rect: ['0', '0', '1024px', '768px', 'auto', 'auto'],
                            id: '_0_00771',
                            type: 'image',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/Hourglass/0_00771.png', '0px', '0px']
                        },
                        {
                            rect: ['0', '0', '1024px', '768px', 'auto', 'auto'],
                            id: '_0_00772',
                            type: 'image',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/Hourglass/0_00772.png', '0px', '0px']
                        },
                        {
                            rect: ['0', '0', '1024px', '768px', 'auto', 'auto'],
                            id: '_0_00773',
                            type: 'image',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/Hourglass/0_00773.png', '0px', '0px']
                        },
                        {
                            rect: ['0', '0', '1024px', '768px', 'auto', 'auto'],
                            id: '_0_00774',
                            type: 'image',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/Hourglass/0_00774.png', '0px', '0px']
                        },
                        {
                            rect: ['0', '0', '1024px', '768px', 'auto', 'auto'],
                            id: '_0_00775',
                            type: 'image',
                            display: 'none',
                            fill: ['rgba(0,0,0,0)', 'images/Hourglass/0_00775.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1020', '768']
                        }
                    }
                },
                timeline: {
                    duration: 1000,
                    autoPlay: false,
                    data: [
                        [
                            "eid1013",
                            "display",
                            120,
                            0,
                            "linear",
                            "${_0_00753}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1014",
                            "display",
                            160,
                            0,
                            "linear",
                            "${_0_00753}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1039",
                            "display",
                            640,
                            0,
                            "linear",
                            "${_0_00766}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1040",
                            "display",
                            680,
                            0,
                            "linear",
                            "${_0_00766}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1019",
                            "display",
                            240,
                            0,
                            "linear",
                            "${_0_00756}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1020",
                            "display",
                            280,
                            0,
                            "linear",
                            "${_0_00756}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1015",
                            "display",
                            160,
                            0,
                            "linear",
                            "${_0_00754}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1016",
                            "display",
                            200,
                            0,
                            "linear",
                            "${_0_00754}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1017",
                            "display",
                            200,
                            0,
                            "linear",
                            "${_0_00755}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1018",
                            "display",
                            240,
                            0,
                            "linear",
                            "${_0_00755}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1021",
                            "display",
                            280,
                            0,
                            "linear",
                            "${_0_00757}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1022",
                            "display",
                            320,
                            0,
                            "linear",
                            "${_0_00757}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1023",
                            "display",
                            320,
                            0,
                            "linear",
                            "${_0_00758}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1024",
                            "display",
                            360,
                            0,
                            "linear",
                            "${_0_00758}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1031",
                            "display",
                            480,
                            0,
                            "linear",
                            "${_0_00762}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1032",
                            "display",
                            520,
                            0,
                            "linear",
                            "${_0_00762}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1055",
                            "display",
                            960,
                            0,
                            "linear",
                            "${_0_00774}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1056",
                            "display",
                            1000,
                            0,
                            "linear",
                            "${_0_00774}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1047",
                            "display",
                            800,
                            0,
                            "linear",
                            "${_0_00770}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1048",
                            "display",
                            840,
                            0,
                            "linear",
                            "${_0_00770}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1035",
                            "display",
                            560,
                            0,
                            "linear",
                            "${_0_00764}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1036",
                            "display",
                            600,
                            0,
                            "linear",
                            "${_0_00764}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1037",
                            "display",
                            600,
                            0,
                            "linear",
                            "${_0_00765}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1038",
                            "display",
                            640,
                            0,
                            "linear",
                            "${_0_00765}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1057",
                            "display",
                            1000,
                            0,
                            "linear",
                            "${_0_00775}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1051",
                            "display",
                            880,
                            0,
                            "linear",
                            "${_0_00772}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1052",
                            "display",
                            920,
                            0,
                            "linear",
                            "${_0_00772}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1029",
                            "display",
                            440,
                            0,
                            "linear",
                            "${_0_00761}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1030",
                            "display",
                            480,
                            0,
                            "linear",
                            "${_0_00761}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1053",
                            "display",
                            920,
                            0,
                            "linear",
                            "${_0_00773}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1054",
                            "display",
                            960,
                            0,
                            "linear",
                            "${_0_00773}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1033",
                            "display",
                            520,
                            0,
                            "linear",
                            "${_0_00763}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1034",
                            "display",
                            560,
                            0,
                            "linear",
                            "${_0_00763}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1011",
                            "display",
                            80,
                            0,
                            "linear",
                            "${_0_00752}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1012",
                            "display",
                            120,
                            0,
                            "linear",
                            "${_0_00752}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1041",
                            "display",
                            680,
                            0,
                            "linear",
                            "${_0_00767}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1043",
                            "display",
                            720,
                            0,
                            "linear",
                            "${_0_00767}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1042",
                            "display",
                            720,
                            0,
                            "linear",
                            "${_0_00768}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1044",
                            "display",
                            760,
                            0,
                            "linear",
                            "${_0_00768}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1007",
                            "display",
                            0,
                            0,
                            "linear",
                            "${_0_00750}",
                            'block',
                            'block'
                        ],
                        [
                            "eid1008",
                            "display",
                            40,
                            0,
                            "linear",
                            "${_0_00750}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1027",
                            "display",
                            400,
                            0,
                            "linear",
                            "${_0_00760}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1028",
                            "display",
                            440,
                            0,
                            "linear",
                            "${_0_00760}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1025",
                            "display",
                            360,
                            0,
                            "linear",
                            "${_0_00759}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1026",
                            "display",
                            400,
                            0,
                            "linear",
                            "${_0_00759}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1009",
                            "display",
                            40,
                            0,
                            "linear",
                            "${_0_00751}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1010",
                            "display",
                            80,
                            0,
                            "linear",
                            "${_0_00751}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1045",
                            "display",
                            760,
                            0,
                            "linear",
                            "${_0_00769}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1046",
                            "display",
                            800,
                            0,
                            "linear",
                            "${_0_00769}",
                            'block',
                            'none'
                        ],
                        [
                            "eid1049",
                            "display",
                            840,
                            0,
                            "linear",
                            "${_0_00771}",
                            'none',
                            'block'
                        ],
                        [
                            "eid1050",
                            "display",
                            880,
                            0,
                            "linear",
                            "${_0_00771}",
                            'block',
                            'none'
                        ]
                    ]
                }
            },
            "index": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '62px', '367px', '706px', 'auto', 'auto'],
                            userClass: 'scroll',
                            overflow: 'visible',
                            id: 'indexListContainer',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(0,0,0,0.00)']
                        },
                        {
                            rect: ['0', '0px', '367px', '61', 'auto', 'auto'],
                            id: 'Rectangle3',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(252,177,22,1.00)']
                        },
                        {
                            font: ['Arial, Helvetica, sans-serif', [21, 'px'], 'rgba(255,255,255,1)', '400', 'none', 'normal', 'break-word', 'nowrap'],
                            type: 'text',
                            id: 'Text3',
                            text: 'index',
                            align: 'left',
                            rect: ['21', '20', 'auto', 'auto', 'auto', 'auto']
                        },
                        {
                            rect: ['315px', '0px', '52px', '60px', 'auto', 'auto'],
                            id: 'closeBtn',
                            type: 'image',
                            cursor: 'pointer',
                            fill: ['rgba(0,0,0,0)', 'images/closeBtn.png', '0px', '0px']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '367', '768']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            },
            "IndexItemSymbol": {
                version: "5.0.1",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.1.386",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '367px', '120px', 'auto', 'auto'],
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            id: 'bg',
                            opacity: '0.86991869918699',
                            type: 'rect',
                            fill: ['rgba(197,197,252,1.00)']
                        },
                        {
                            rect: ['20px', '15px', '120px', '90px', 'auto', 'auto'],
                            id: 'imageHolder',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(0,0,0,0)']
                        },
                        {
                            rect: ['184px', '34px', '171px', '24px', 'auto', 'auto'],
                            textStyle: ['', '', '20px', ''],
                            id: 'titleText',
                            text: 'Cervarix',
                            font: ['Trebuchet MS, Arial, Helvetica, sans-serif', [20, 'px'], 'rgba(0,0,0,1)', 'normal', 'none', '', 'break-word', ''],
                            type: 'text'
                        },
                        {
                            rect: ['184px', '68px', '171px', '24px', 'auto', 'auto'],
                            textStyle: ['', '', '18px', ''],
                            id: 'bodyText',
                            text: 'Cover',
                            font: ['Trebuchet MS, Arial, Helvetica, sans-serif', [18, 'px'], 'rgba(255,255,255,1.00)', '300', 'none', '', 'break-word', ''],
                            type: 'text'
                        },
                        {
                            rect: ['0px', '119px', '333px', '1px', 'auto', 'auto'],
                            id: 'line',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            type: 'rect',
                            fill: ['rgba(255,255,255,1.00)']
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '367px', '120px']
                        }
                    }
                },
                timeline: {
                    duration: 0,
                    autoPlay: false,
                    data: [

                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("index_edgeActions.js");
})("EDGE-2741850");
