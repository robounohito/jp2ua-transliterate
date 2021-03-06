﻿(function( $ ){

	var r2ua = {
		"a": {
			"~": "а",
			"i": "ай",
		},
		"i": "і",
		"u": "у",
		"e": "е",
		"o": {
			"~": "o",
			"u": "оо",
			"h": "оо",
		},

		"ā": "аа",
		"ī": "іі",
		"ū": "уу",
		"ē": "ее",
		"ō": "оо",

		"y": {
			"~": "й",
			"a": "я",
			"u": "ю",
			"o": {
				"~": ["ьо", "йо"],
				"u": ["ьоо", "йоо"],
			}, 
		},

		"j": {
			"i": "джі",
			"a": "джя",
			"u": "джю",
			"o": {
				"~": "джьо",
				"u": "джьоо",
			},
		},

		"s": {
			"~": "с",
			"h": {
				"~": "шь",
				"i": "ші",
				"a": "шя",
				"u": "шю",
				"o": {
					"~": "шьо",
					"u": "шьоо",
				},
			},
			"i": "ші",
			"s": {
				"~": "сс",
				"h": {
					"~": "шшь",
					"i": "шші",
					"a": "шшя",
					"u": "шшю",
					"o": {
						"~": "шшьо",
						"u": "шшьоо",
					},
				},
				"i": "шші",
			},
		},
		"t": {
			"~": "т",
			"s": "ц",
			"t": {
				"s": "цц",
			},
		},
		"c": {
			"h": {
				"~": "ч",
				"a": "чя",
				"u": "чю",
			},
			"c": {
				"h": {
					"~": "чч",
					"a": "ччя",
					"u": "ччю",
				},
			},
		},

		"n": "н",
		"k": "к",
		"h": "х",
		"m": "м",
		"r": "р",
		"w": {
			"~": "в",
			"o": "о",
		},
		"v": "в",     
		"f": "ф",
		"g": "ґ",
		"b": "б",
		"d": "д",
		"p": "п",
		"z": "з",
	};

var h2ua = {
      "・": " ",
      "っ": {
            "~": "",
            "か": "кка",
            "き": {
                  "~": "ккі",
                  "ゃ": "ккя",
                  "ゅ": "ккю",
                  "ょ": {
                        "~": "ккьо",
                        "う": "ккьоо",
                        },
            },
            "く": "кку",
            "け": "кке",
            "こ": {
                  "~": "кко",
                  "う": "ккоо",
            },
            "が": "ґґа",
            "ぎ": {
                  "~": "ґґі",
                  "ゃ": "ґґя",
                  "ゅ": "ґґю",
                  "ょ": {
                        "~": "ґґьо",
                        "う": "ґґьоо",
                        },
            },
           "ぐ": "ґґу",
            "げ": "ґґе",
            "ご": {
                  "~": "ґґо",
                  "う": "ґґоо",
            },
            "さ": "сса",
            "し": {
                  "~": "шші",
                  "ゃ": "шшя",
                  "ゅ": "шшю",
                  "ょ": {
                        "~": "шшьо",
                        "う": "шшьоо",
                        },
            },
            "す": "ссу",
            "せ": "ссе",
            "そ": {
                  "~": "ссо",
                  "う": "ссоо",
            },
            "ざ": "ддза",  
            "じ": {
                  "~": "дджі",
                  "ゃ": "дджя",
                  "ゅ": "дджю",
                  "ょ": {
                        "~": "дджьо",
                        "う": "дджьоо",
                        },
            },
            "ず": "ддзу",
            "ぜ": "ддзе",
            "ぞ": {
                  "~": "ддзо",
                  "う": "ддзоо",
            },
            "た": "тта",
            "ち": {
                  "~": "ччі",
                  "ゃ": "ччя",
                  "ゅ": "ччю",
                  "ょ": {
                        "~": "ччьо",
                        "う": "ччьоо",
                        },
            },
            "つ": "ццу",
            "て": "тте",
            "と": {
                  "~": "тто",
                  "う": "ттоо",
            },
            "だ": "дда",
            "ぢ": {
                  "~": "ддчі",
                  "ゃ": "ддчя",
                  "ゅ": "ддчю",
                  "ょ": {
                        "~": "ддчьо",
                        "う": "ддчьоо",
                        },
            },
            "づ": "ддзу",
            "で": "дде",
            "ど": {
                  "~": "ддо",
                  "う": "ддоо",
            },
            "な": "нна",      
            "に": {
                  "~": "нні",
                  "ゃ": "ння",
                  "ゅ": "нню",
                  "ょ": {
                        "~": "нньо",
                        "う": "нньоо",
                        },
            },
            "ぬ": "нну",
            "ね": "нне",
            "の": {
                  "~": "нно",
                  "う": "нноо",
            },
            "ば": "бба",   
            "び": {
                  "~": "ббі",
                  "ゃ": "ббя",
                  "ゅ": "ббю",
                  "ょ": {
                        "~": "ббьо",
                        "う": "ббьоо",
                        },
            },
            "ぶ": "ббу",
            "べ": "ббе",
            "ぼ": {
                  "~": "ббо",
                  "う": "ббоо",
            },
            "ぱ": "ппа", 
            "ぴ": {
                  "~": "ппі",
                  "ゃ": "ппя",
                  "ゅ": "ппю",
                  "ょ": {
                        "~": "ппьо",
                        "う": "ппьоо",
                        },
            },
            "ぷ": "ппу",
            "ぺ": "ппе",
            "ぽ": {
                  "~": "ппо",
                  "う": "ппоо",
            },
            "ま": "мма",
            "み": {
                  "~": "ммі",
                  "ゃ": "ммя",
                  "ゅ": "ммю",
                  "ょ": {
                        "~": "ммьо",
                        "う": "ммьоо",
                        },
            },
            "む": "мму",
            "め": "мме",
            "も": {
                  "~": "ммо",
                  "う": "ммоо",
            },
            "ら": "рра",
            "り": {
                  "~": "ррі",
                  "ゃ": "рря",
                  "ゅ": "ррю",
                  "ょ": {
                        "~": "ррьо",
                        "う": "ррьоо",
                        },
            },
            "る": "рру",
            "れ": "рре",
            "ろ": {
                  "~": "рро",
                  "う": "рроо",
            },
      },
      "あ": "а",
      "い": "і",
      "う": "у",
      "え": "е",
      "お": {
            "~": "о",
            "う": "оо",
      },
      "か": "ка",
      "き": {
            "~": "кі",
            "ゃ": "кя",
            "ゅ": "кю",
            "ょ": {
                  "~": "кьо",
                  "う": "кьоо",
                  },
      },
      "く": "ку",
      "け": "ке",
      "こ": {
            "~": "ко",
            "う": "коо",
      },
      "が": "ґа",
      "ぎ": {
            "~": "ґі",
            "ゃ": "ґя",
            "ゅ": "ґю",
            "ょ": {
                  "~": "ґьо",
                  "う": "ґьоо",
                  },
      },
      "ぐ": "ґу",
      "げ": "ґе",
      "ご": {
            "~": "ґо",
            "う": "ґоо",
      },
      "さ": "са",
      "し": {
            "~": "ші",
            "ゃ": "шя",
            "ゅ": "шю",
            "ょ": {
                  "~": "шьо",
                  "う": "шьоо",
                  },
      },
      "す": "су",
      "せ": "се",
      "そ": {
            "~": "со",
            "う": "соо",
      },
      "ざ": "дза",  
      "じ": {
            "~": "джі",
            "ゃ": "джя",
            "ゅ": "джю",
            "ょ": {
                  "~": "джьо",
                  "う": "джьоо",
                  },
      },
      "ず": "дзу",
      "ぜ": "дзе",
      "ぞ": {
            "~": "дзо",
            "う": "дзоо",
      },
      "た": "та",
      "ち": {
            "~": "чі",
            "ゃ": "чя",
            "ゅ": "чю",
            "ょ": {
                  "~": "чьо",
                  "う": "чьоо",
                  },
      },
      "つ": "цу",
      "て": "те",
      "と": {
            "~": "то",
            "う": "тоо",
      },
      "だ": "да",
      "ぢ": {
            "~": "дчі",
            "ゃ": "дчя",
            "ゅ": "дчю",
            "ょ": {
                  "~": "дчьо",
                  "う": "дчьоо",
                  },
      },
      "づ": "дзу",
      "で": "де",
      "ど": {
            "~": "до",
            "う": "доо",
      },
      "な": "на",      
      "に": {
            "~": "ні",
            "ゃ": "ня",
            "ゅ": "ню",
            "ょ": {
                  "~": "ньо",
                  "う": "ньоо",
                  },
      },
      "ぬ": "ну",
      "ね": "не",
      "の": {
            "~": "но",
            "う": "ноо",
      },
      "は": "ха",
      "ひ": {
            "~": "хі",
            "ゃ": "хя",
            "ゅ": "хю",
            "ょ": {
                  "~": "хьо",
                  "う": "хьоо",
                  },
      },
      "ふ": "фу",
      "へ": "хе",
      "ほ": {
            "~": "хо",
            "う": "хоо",
      },
      "ば": "ба",   
      "び": {
            "~": "бі",
            "ゃ": "бя",
            "ゅ": "бю",
            "ょ": {
                  "~": "бьо",
                  "う": "бьоо",
                  },
      },
      "ぶ": "бу",
      "べ": "бе",
      "ぼ": {
            "~": "бо",
            "う": "боо",
      },
      "ぱ": "па", 
      "ぴ": {
            "~": "пі",
            "ゃ": "пя",
            "ゅ": "пю",
            "ょ": {
                  "~": "пьо",
                  "う": "пьоо",
                  },
      },
      "ぷ": "пу",
      "ぺ": "пе",
      "ぽ": {
            "~": "по",
            "う": "поо",
      },
      "ま": "ма",
      "み": {
            "~": "мі",
            "ゃ": "мя",
            "ゅ": "мю",
            "ょ": {
                  "~": "мьо",
                  "う": "мьоо",
                  },
      },
      "む": "му",
      "め": "ме",
      "も": {
            "~": "мо",
            "う": "моо",
      },
      "や": "я",
      "ゆ": "ю",
      "よ": {
            "~": "йо",
            "う": "йоо",
      },
      "ら": "ра",
      "り": {
            "~": "рі",
            "ゃ": "ря",
            "ゅ": "рю",
            "ょ": {
                  "~": "рьо",
                  "う": "рьоо",
                  },
      },
      "る": "ру",
      "れ": "ре",
      "ろ": {
            "~": "ро",
            "う": "роо",
      },
      "わ": "ва",
      "を": "о",
      "ん": "н",
      "ゐ": "і",
      "ゑ": "е"
}

var k2ua = {
      "・": " ",
      "ア": {
            "~": "а",
            "ー": "аа",
      },
       "イ": {
            "~": "і",
            "ー": "іі",
            "ィ": {
                  "~": "ї",
                  "ー": "її",
            },
            "ェ": {
                  "~": "є",
                  "ー": "єє",
            },
      },
      "ウ": {
            "~": "у",
            "ー": "уу",
      },
      "エ": {
            "~": "е",
            "ー": "ее",
      },
      "オ": {
            "~": "о",
            "ー": "оо",
      },
       "ヴ": {
            "~": "ву",
            "ー": "вуу",
            "ァ": {
                  "~": "ва",
                  "ー": "ваа",
            },
            "ィ": {
                  "~": "ві",
                  "ー": "віі",
            },
            "ェ": {
                  "~": "ве",
                  "ー": "вее",
            },
            "ォ": {
                  "~": "во",
                  "ー": "воо",
            },
            "ャ": {
                  "~": "вя",
                  "ー": "вяя",
            },
            "ュ": {
                  "~": "вю",
                  "ー": "вюю",
            },
            "ョ": {
                  "~": "вьо",
                  "ー": "вьоо",
            },
      },
      "カ": {
            "~": "ка",
            "ー": "каа",
      },
      "キ": {
            "~": "кі",
            "ー": "кіі",
            "ャ": {
                  "~": "кя",
                  "ー": "кяя",
            },
            "ュ": {
                  "~": "кю",
                  "ー": "кюю",
            },
            "ョ": {
                  "~": "кьо",
                  "ー": "кьоо",
            },
      },
      "ク": {
            "~": "ку",
            "ー": "куу",
      },
      "ケ": {
            "~": "ке",
            "ー": "кее",
      },
      "コ": {
            "~": "ко",
            "ー": "коо",
      },
      "ガ": {
            "~": "ґа",
            "ー": "ґаа",
      },
      "ギ": {
            "~": "ґі",
            "ー": "ґіі",
            "ャ": {
                  "~": "ґя",
                  "ー": "ґяя",
            },
            "ュ": {
                  "~": "ґю",
                  "ー": "ґюю",
            },
            "ョ": {
                  "~": "ґьо",
                  "ー": "ґьоо",
            },
      },
      "グ": {
            "~": "ґу",
            "ー": "ґуу",
      },
      "ゲ": {
            "~": "ґе",
            "ー": "ґее",
      },
      "ゴ": {
            "~": "ґо",
            "ー": "ґоо",
      },
      "サ": {
            "~": "са",
            "ー": "саа",
      },
      "シ": {
            "~": "ші",
            "ー": "шіі",
            "ェ": {
                  "~": "ше",
                  "ー": "шее",
            },
            "ャ": {
                  "~": "шя",
                  "ー": "шяя",
            },
            "ュ": {
                  "~": "шю",
                  "ー": "шюю",
            },
            "ョ": {
                  "~": "шьо",
                  "ー": "шьоо",
            },
      },
      "ス": {
            "~": "су",
            "ー": "суу",
      },       
      "セ": {
            "~": "се",
            "ー": "сее",
      },       
      "ソ": {
            "~": "со",
            "ー": "соо",
      },       
      "ザ": {
            "~": "дза",
            "ー": "дзаа",
      },       
      "ジ": {
            "~": "джі",
            "ー": "джіі",
            "ェ": {
                  "~": "дже",
                  "ー": "джее",
            },
            "ャ": {
                  "~": "джя",
                  "ー": "джяя",
            },
            "ュ": {
                  "~": "джю",
                  "ー": "джюю",
            },
            "ョ": {
                  "~": "джьо",
                  "ー": "джьоо",
            },
      },
      "ズ": {
            "~": "дзу",
            "ー": "дзуу",
      },      
      "ゼ": {
            "~": "дзе",
            "ー": "дзее",
      },      
      "ゾ": {
            "~": "дзо",
            "ー": "дзоо",
      },      
      "タ": {
            "~": "та",
            "ー": "таа",
      },      
       "チ": {
            "~": "чі",
            "ー": "чіі",
            "ェ": {
                  "~": "че",
                  "ー": "чее",
            },
            "ャ": {
                  "~": "чя",
                  "ー": "чяя",
            },
            "ュ": {
                  "~": "чю",
                  "ー": "чюю",
            },
            "ョ": {
                  "~": "чьо",
                  "ー": "чьоо",
            },
      },
       "ツ": {
            "~": "цу",
            "ー": "цуу",
            "ァ": {
                  "~": "ца",
                  "ー": "цаа",
            },
            "ィ": {
                  "~": "ці",
                  "ー": "ціі",
            },
            "ェ": {
                  "~": "це",
                  "ー": "цее",
            },
            "ォ": {
                  "~": "цо",
                  "ー": "цоо",
            },
      },
      "テ": {
            "~": "те",
            "ー": "тее",
            "ィ": {
                  "~": "ті",
                  "ー": "тіі",
            },
      },
      "ト": {
            "~": "то",
            "ー": "тоо",
      },      
      "ダ": {
            "~": "да",
            "ー": "даа",
      },      
       "ヂ": {
            "~": "дчі",
            "ー": "дчіі",
            "ャ": {
                  "~": "дчя",
                  "ー": "дчяя",
            },
            "ュ": {
                  "~": "дчю",
                  "ー": "дчюю",
            },
            "ョ": {
                  "~": "дчьо",
                  "ー": "дчьоо",
            },
      },
      "ヅ": {
            "~": "дзу",
            "ー": "дзуу",
      },      
      "デ": {
            "~": "де",
            "ー": "дее",
            "ィ": {
                  "~": "ді",
                  "ー": "діі",
            },
      },
      "ド": {
            "~": "до",
            "ー": "доо",
      },      
      "ナ": {
            "~": "на",
            "ー": "наа",
      },      
       "ニ": {
            "~": "ні",
            "ー": "ніі",
            "ャ": {
                  "~": "ня",
                  "ー": "няя",
            },
            "ュ": {
                  "~": "ню",
                  "ー": "нюю",
            },
            "ョ": {
                  "~": "ньо",
                  "ー": "ньоо",
            },
      },
      "ヌ": {
            "~": "ну",
            "ー": "нуу",
      },
      "ネ": {
            "~": "не",
            "ー": "нее",
      },
      "ノ": {
            "~": "но",
            "ー": "ноо",
      },
      "ハ": {
            "~": "ха",
            "ー": "хаа",
      },
       "ヒ": {
            "~": "хі",
            "ー": "хіі",
            "ャ": {
                  "~": "хя",
                  "ー": "хяя",
            },
            "ュ": {
                  "~": "хю",
                  "ー": "хюю",
            },
            "ョ": {
                  "~": "хьо",
                  "ー": "хьоо",
            },
      },
       "フ": {
            "~": "фу",
            "ー": "фуу",
           "ァ": {
                  "~": "фа",
                  "ー": "фаа",
            },
           "ィ": {
                  "~": "фі",
                  "ー": "фіі",
            },
           "ェ": {
                  "~": "фе",
                  "ー": "фее",
            },
            "ォ": {
                  "~": "фо",
                  "ー": "фоо",
            },
            "ャ": {
                  "~": "фя",
                  "ー": "фяя",
            },
            "ュ": {
                  "~": "фю",
                  "ー": "фюю",
            },
            "ョ": {
                  "~": "фьо",
                  "ー": "фьоо",
            },
      },
      "ヘ": {
            "~": "хе",
            "ー": "хее",
      },
      "ホ": {
            "~": "хо",
            "ー": "хоо",
      },
      "バ": {
            "~": "ба",
            "ー": "баа",
      },
       "ビ": {
            "~": "бі",
            "ー": "біі",
            "ャ": {
                  "~": "бя",
                  "ー": "бяя",
            },
            "ュ": {
                  "~": "бю",
                  "ー": "бюю",
            },
            "ョ": {
                  "~": "бьо",
                  "ー": "бьоо",
            },
      },
      "ブ": {
            "~": "бу",
            "ー": "буу",
      },
      "ベ": {
            "~": "бе",
            "ー": "бее",
      },
      "ボ": {
            "~": "бо",
            "ー": "боо",
      },
      "パ": {
            "~": "па",
            "ー": "паа",
      },
       "ピ": {
            "~": "пі",
            "ー": "піі",
            "ャ": {
                  "~": "пя",
                  "ー": "пяя",
            },
            "ュ": {
                  "~": "пю",
                  "ー": "пюю",
            },
            "ョ": {
                  "~": "пьо",
                  "ー": "пьоо",
            },
      },
      "プ": {
            "~": "пу",
            "ー": "пуу",
      },
      "ペ": {
            "~": "пе",
            "ー": "пее",
      },
      "ポ": {
            "~": "по",
            "ー": "поо",
      },
      "マ": {
            "~": "ма",
            "ー": "маа",
      },
       "ミ": {
            "~": "мі",
            "ー": "міі",
            "ャ": {
                  "~": "мя",
                  "ー": "мяя",
            },
            "ュ": {
                  "~": "мю",
                  "ー": "мюю",
            },
            "ョ": {
                  "~": "мьо",
                  "ー": "мьоо",
            },
      },
      "ム": {
            "~": "му",
            "ー": "муу",
      },
      "メ": {
            "~": "ме",
            "ー": "мее",
      },
      "モ": {
            "~": "мо",
            "ー": "моо",
      },
      "ヤ": {
            "~": "я",
            "ー": "яя",
      },
      "ユ": {
            "~": "ю",
            "ー": "юю",
      },
      "ヨ": {
            "~": "йо",
            "ー": "йоо",
      },
      "ラ": {
            "~": "ра",
            "ー": "раа",
      },
      "リ": {
            "~": "рі",
            "ー": "ріі",
            "ャ": {
                  "~": "ря",
                  "ー": "ряя",
            },
            "ュ": {
                  "~": "рю",
                  "ー": "рюю",
            },
            "ョ": {
                  "~": "рьо",
                  "ー": "рьоо",
            },
      },
      "ル": {
            "~": "ру",
            "ー": "руу",
      },
      "レ": {
            "~": "ре",
            "ー": "рее",
      },
      "ロ": {
            "~": "ро",
            "ー": "роо",
      },
      "ワ": {
            "~": "ва",
            "ー": "ваа",
      },
      "ヲ": {
            "~": "о",
            "ー": "оо",
      },
      "ン": "н",
      "ヰ": {
            "~": "і",
            "ー": "іі",
      },
      "ヱ": {
            "~": "е",
            "ー": "ее",
      },
}

	var converterMap = r2ua;

	function doconvert(src) {
		function traverse(i, chars, ws) {
			var c = src[i];

		 	if (c in chars) {
		 		if (chars[c] instanceof Array)
		 			return (ws ? chars[c][1] : chars[c][0]) + traverse(i + 1, converterMap);
		 		else if (chars[c] instanceof Object)
		 			return traverse(i + 1, chars[c], ws);
		 		else
					return chars[c] + traverse(i + 1, converterMap);
			}
			else if ('~' in chars) {
				if (chars['~'] instanceof Array)
					return (ws ? chars['~'][1] : chars['~'][0]) + traverse(i, converterMap);
				else
					return chars['~'] + traverse(i, converterMap);
			}				
			else if (c) {
				return c + traverse(i + 1, converterMap, c == ' ');
			}
			return "";
		}

		return traverse(0, converterMap, true);
	}

	function translate() {
		var src = $("#jap-src").val();
		$("#jap-dst").val(doconvert(src.toLowerCase()));
	}


  $.fn.japTrans = function() {
  	this.html('\
<div id="japtrans-content"> \
	<table> \
		<tr> \
			<td><select style="width: 100%;" id="source-map"> \
				<option value="r2ua">Ромаджі</options> \
				<option value="h2ua">Хірагана</options> \
				<option value="k2ua">Катакана</options> \
			</select></td> \
			<td>Українська</td> \
		</tr> \
		<tr> \
			<td><input type="text" id="jap-src" /></td> \
			<td><input type="text" id="jap-dst" /></td> \
		</tr> \
			<td style="text-align: right;"><input type="button" id="jap-trans" value="Транслітерувати &raquo;" /></td> \
			<td>&nbsp;</td> \
		</tr> \
		<tr> \
	</table> \
</div>');

  	$('#jap-trans').click(translate);
  	$('#jap-src').change(translate);
  	$('#jap-src').keyup(translate);
  	$('#source-map').change(function() {
		converterMap = eval($('#source-map').val());
		translate();
	});
    };

})( jQuery );
