﻿window.globalProvideData('slide', '{"title":"Tuliskan contoh-contoh bangun ruang balok dalam kehidupan sehari-hari?","trackViews":true,"showMenuResultIcon":false,"viewGroupId":"","historyGroupId":"","videoZoom":"","scrolling":false,"transition":"appear","transDuration":0,"transDir":1,"wipeTrans":false,"slideLock":false,"navIndex":-1,"globalAudioId":"","thumbnailid":"","slideNumberInScene":6,"includeInSlideCounts":true,"presenterRef":{"id":"none"},"showAnimationId":"","lmsId":"Slide6","width":960,"height":540,"resume":true,"background":{"type":"swf","imagedata":{"assetId":93,"url":"","type":"normal","width":0,"height":0,"mobiledx":0,"mobiledy":0}},"id":"5t4f5rraC0g","actionGroups":{"ActGrpOnSubmitButtonClick":{"kind":"actiongroup","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"noteq","valuea":"65LO8ZTGH25.$Text","typea":"property","valueb":"","typeb":"string"}},"thenActions":[{"kind":"eval_interaction","id":"_this.5sSTd32VGJz"}],"elseActions":[{"kind":"gotoplay","window":"MessageWnd","wndtype":"normal","objRef":{"type":"string","value":"_player.MsgScene_6mUX2CJ1BJq.InvalidPromptSlide"}}]}]},"ReviewInt_5o9V9TwgNPx":{"kind":"actiongroup","actions":[{"kind":"set_enabled","objRef":{"type":"string","value":"65LO8ZTGH25"},"enabled":{"type":"boolean","value":false}},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"5sSTd32VGJz.$Status","typea":"property","valueb":"correct","typeb":"string"}},"thenActions":[{"kind":"show","transition":"appear","objRef":{"type":"string","value":"5o9V9TwgNPx_CorrectReview"}}],"elseActions":[{"kind":"show","transition":"appear","objRef":{"type":"string","value":"5o9V9TwgNPx_IncorrectReview"}}]},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#CurrentQuiz_5o9V9TwgNPx","typea":"var","valueb":"65K4ukJ406I","typeb":"string"}},"thenActions":[{"kind":"exe_actiongroup","id":"SetLayout_pxabnsnfns00000000001"},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.65K4ukJ406I.$Passed","typea":"property","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"exe_actiongroup","id":"ReviewIntCorrectIncorrect_5o9V9TwgNPx"}]},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.65K4ukJ406I.$Passed","typea":"property","valueb":false,"typeb":"boolean"}},"thenActions":[{"kind":"exe_actiongroup","id":"ReviewIntCorrectIncorrect_5o9V9TwgNPx"}]}]}]},"ReviewIntCorrectIncorrect_5o9V9TwgNPx":{"kind":"actiongroup","actions":[{"kind":"show","transition":"appear","objRef":{"type":"string","value":"5o9V9TwgNPx_ReviewShape"}}]},"AnsweredInt_5o9V9TwgNPx":{"kind":"actiongroup","actions":[{"kind":"exe_actiongroup","id":"DisableChoices_5o9V9TwgNPx"},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"$WindowId","typea":"property","valueb":"_frame","typeb":"string"}},"thenActions":[{"kind":"set_frame_layout","name":"pxabnsnfns00000000001"}],"elseActions":[{"kind":"set_window_control_layout","name":"pxabnsnfns00000000001"}]}]},"DisableChoices_5o9V9TwgNPx":{"kind":"actiongroup","actions":[{"kind":"set_enabled","objRef":{"type":"string","value":"65LO8ZTGH25"},"enabled":{"type":"boolean","value":false}}]},"5o9V9TwgNPx_CheckAnswered":{"kind":"actiongroup","actions":[{"kind":"if_action","condition":{"statement":{"kind":"or","statements":[{"kind":"compare","operator":"eq","valuea":"5sSTd32VGJz.$Status","typea":"property","valueb":"correct","typeb":"string"},{"kind":"compare","operator":"eq","valuea":"_player.65K4ukJ406I.$QuizComplete","typea":"property","valueb":true,"typeb":"boolean"}]}},"thenActions":[{"kind":"exe_actiongroup","id":"AnsweredInt_5o9V9TwgNPx"}],"elseActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"5sSTd32VGJz.$Status","typea":"property","valueb":"incorrect","typeb":"string"}},"thenActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"gte","valuea":"5sSTd32VGJz.$AttemptCount","typea":"property","valueb":1,"typeb":"number"}},"thenActions":[{"kind":"exe_actiongroup","id":"AnsweredInt_5o9V9TwgNPx"}]}]}]}]},"SetLayout_pxabnsnfns00000000001":{"kind":"actiongroup","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"$WindowId","typea":"property","valueb":"_frame","typeb":"string"}},"thenActions":[{"kind":"set_frame_layout","name":"pxabnsnfns00000000001"}],"elseActions":[{"kind":"set_window_control_layout","name":"pxabnsnfns00000000001"}]}]},"NavigationRestrictionNextSlide_5t4f5rraC0g":{"kind":"actiongroup","actions":[{"kind":"gotoplay","window":"_current","wndtype":"normal","objRef":{"type":"string","value":"_parent.6SgJ3AUftYs"}}]},"NavigationRestrictionPreviousSlide_5t4f5rraC0g":{"kind":"actiongroup","actions":[{"kind":"history_prev"}]}},"events":[{"kind":"onslidestart","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_playerVars.#hasPrevHistory","typea":"var","valueb":false,"typeb":"boolean"}},"thenActions":[{"kind":"enable_window_control","name":"previous","enable":false,"affectTabStop":true}]},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.65K4ukJ406I.$QuizComplete","typea":"property","valueb":false,"typeb":"boolean"}},"thenActions":[{"kind":"starttimer","id":"_player.65K4ukJ406I_timer"},{"kind":"showtimer","id":"_player.65K4ukJ406I_timer"}]}]},{"kind":"onbeforeslidein","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"$WindowId","typea":"property","valueb":"_frame","typeb":"string"}},"thenActions":[{"kind":"set_frame_layout","name":"npnxnanbsnfns00000000001"}],"elseActions":[{"kind":"set_window_control_layout","name":"npnxnanbsnfns00000000001"}]}]},{"kind":"onsubmitslide","actions":[{"kind":"exe_actiongroup","id":"ActGrpOnSubmitButtonClick"}]},{"kind":"ontransitionin","actions":[{"kind":"adjustvar","variable":"_player.LastSlideViewed_6mUX2CJ1BJq","operator":"set","value":{"type":"string","value":"_player."}},{"kind":"adjustvar","variable":"_player.LastSlideViewed_6mUX2CJ1BJq","operator":"add","value":{"type":"property","value":"$AbsoluteId"}},{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#ReviewMode_5o9V9TwgNPx","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"exe_actiongroup","id":"ReviewInt_5o9V9TwgNPx"}],"elseActions":[{"kind":"exe_actiongroup","id":"5o9V9TwgNPx_CheckAnswered"}]}]},{"kind":"onnextslide","actions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#ReviewMode_5o9V9TwgNPx","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#CurrentQuiz_5o9V9TwgNPx","typea":"var","valueb":"65K4ukJ406I","typeb":"string"}},"thenActions":[{"kind":"nextviewedslide","quizRef":{"type":"string","value":"_player.65K4ukJ406I"},"completed_slide_ref":{"type":"string","value":"_player.5VCdd44TbPL.6SgJ3AUftYs"},"status_filter":""}],"elseActions":[]}],"elseActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#RetryMode_5o9V9TwgNPx","typea":"var","valueb":true,"typeb":"boolean"}},"thenActions":[{"kind":"if_action","condition":{"statement":{"kind":"compare","operator":"eq","valuea":"_player.#CurrentQuiz_5o9V9TwgNPx","typea":"var","valueb":"65K4ukJ406I","typeb":"string"}},"thenActions":[{"kind":"nextviewedslide","quizRef":{"type":"string","value":"_player.65K4ukJ406I"},"completed_slide_ref":{"type":"string","value":"_player.5VCdd44TbPL.6SgJ3AUftYs"},"status_filter":""}],"elseActions":[]}],"elseActions":[{"kind":"exe_actiongroup","id":"NavigationRestrictionNextSlide_5t4f5rraC0g"}]}]}]},{"kind":"onprevslide","actions":[{"kind":"exe_actiongroup","id":"NavigationRestrictionPreviousSlide_5t4f5rraC0g"}]}],"slideLayers":[{"audiolib":[{"kind":"audio","assetId":94,"id":"5Ug1b0BSEmJ"},{"kind":"audio","assetId":95,"id":"6GaiQuYFfSa"}],"enableSeek":true,"enableReplay":true,"timeline":{"duration":777984,"events":[{"kind":"ontimelinetick","time":0,"actions":[{"kind":"hide","transition":"appear","objRef":{"type":"string","value":"5o9V9TwgNPx_ReviewShape"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"65LO8ZTGH25"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6VPijRcTpge"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6czvSCSuo0w"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"6qQpQP9Wdr7"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"68rVXCtVVMN"}},{"kind":"show","transition":"appear","objRef":{"type":"string","value":"66pwKxBzjlW"}}]}]},"objects":[{"kind":"textinput","bindto":"_player.TextEntry3","align":"left","verticalAlign":"top","rtl":false,"numeric":false,"multiline":true,"maxchars":0,"placeholder":"ketik teks di sini","fontsize":25,"textcolor":"0x000000","bold":false,"italic":false,"font":"Times New Roman Charset70F17049","marginleft":10,"marginright":10,"margintop":0,"marginbottom":0,"shapemaskId":"","xPos":64,"yPos":214,"tabIndex":2,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":396,"rotateYPos":48,"scaleX":100,"scaleY":100,"alpha":100,"rotation":0,"depth":1,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"textdata":{"uniqueId":"65LO8ZTGH25","linkId":"","type":"vectortext","xPos":10,"yPos":5,"xAccOffset":0,"yAccOffset":0,"width":772,"height":96,"shadowIndex":-1,"scrollOverflow":false,"vectortext":{"left":0,"top":0,"right":158,"bottom":29,"pngfb":false,"pr":{"l":"Lib","i":122}}},"html5data":{"xPos":0,"yPos":0,"width":792,"height":96,"strokewidth":0}},"width":792,"height":96,"resume":true,"useHandCursor":true,"background":{"type":"vector","vectorData":{"left":0,"top":0,"right":792,"bottom":96,"altText":"ketik teks di sini","pngfb":false,"pr":{"l":"Lib","i":121}}},"id":"65LO8ZTGH25","events":[{"kind":"onlosefocus","actions":[{"kind":"adjustvar","variable":"_player.TextEntry3","operator":"set","value":{"type":"property","value":"$Text"}}]},{"kind":"onkeypress","keycode":13,"shift":false,"ctrl":false,"alt":false,"actions":[{"kind":"exe_actiongroup","id":"_parent.ActGrpOnSubmitButtonClick"}]}]},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","textLib":[{"kind":"textdata","uniqueId":"6VPijRcTpge_-2000469923","id":"01","linkId":"txt__default_6VPijRcTpge","type":"acctext","xPos":10,"yPos":5,"xAccOffset":10,"yAccOffset":5,"width":844,"height":74,"valign":"top","wordwrap":true,"textshadow":false,"shadowIndex":-1,"scrollOverflow":false,"vartext":{"blocks":[{"spans":[{"text":"Tuliskan contoh-contoh bangun ruang balok dalam kehidupan sehari-hari?","style":{"fontFamily":"\\"Times New Roman Charset70F17049\\",\\"Times New Roman\\"","fontSize":24,"ascent":28.516,"descent":6.922,"leading":1.359,"underlinePosition":-3.484,"underlineThickness":1.563,"xHeight":14.313}}],"style":{"tagType":"P"},"runs":[{"idx":0,"len":70,"flowDirection":"leftToRight","cursive":false}]}],"defaultBlockStyle":{"flowDirection":"leftToRight","leadingMargin":0,"trailingMargin":0,"firstLineMargin":0,"justification":"left","defaultTabStop":48,"listLevel":0,"lineSpacingRule":"multiple","lineSpacing":20,"indentSize":36,"spacingBefore":0,"spacingAfter":0,"baseSpanStyle":{"fontFamily":"Open Sans","fontSize":18.5,"fontIsBold":false,"fontIsItalic":false,"fontIsUnderline":false,"fontIsStrikeout":false,"underlineStyle":"normal","elevation":"normal","spacing":0,"ignoreKerningTable":false,"displayCase":"asIs","languageId":0,"foregroundColor":"#000000","linkColor":"#0000FF"},"listStyle":{"listType":"none","listTypeFormat":"plain","start":0,"size":100}},"direction":"horizontal"},"vectortext":{"left":0,"top":0,"right":812,"bottom":80,"pngfb":false,"pr":{"l":"Lib","i":124}}}],"shapemaskId":"","xPos":48,"yPos":110,"tabIndex":1,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":432,"rotateYPos":42,"scaleX":100,"scaleY":100,"alpha":100,"depth":2,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":864,"bottom":84,"altText":"Tuliskan contoh-contoh bangun ruang balok dalam kehidupan sehari-hari?","pngfb":false,"pr":{"l":"Lib","i":123}},"html5data":{"xPos":0,"yPos":0,"width":864,"height":84,"strokewidth":0}},"width":864,"height":84,"resume":true,"useHandCursor":true,"id":"6VPijRcTpge"},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","textLib":[{"kind":"textdata","uniqueId":"6czvSCSuo0w_-1764000938","id":"01","linkId":"txt__default_6czvSCSuo0w","type":"acctext","xPos":10,"yPos":5,"xAccOffset":10,"yAccOffset":5,"width":236,"height":50,"valign":"top","wordwrap":true,"textshadow":false,"shadowIndex":-1,"scrollOverflow":false,"vartext":{"blocks":[{"spans":[{"text":"SOAL 5","style":{"fontFamily":"\\"Times New RomanBoldBold3F3ED7D4\\",\\"Times New Roman\\"","fontSize":32,"fontIsBold":false,"foregroundColor":"#FFFFFF","linkColor":"#FFFFFF","ascent":38.021,"descent":9.229,"leading":1.813,"underlinePosition":-4.646,"underlineThickness":4.063,"xHeight":19.479}}],"style":{"justification":"center","tagType":"P"},"runs":[{"idx":0,"len":6,"flowDirection":"leftToRight","cursive":false}]}],"defaultBlockStyle":{"flowDirection":"leftToRight","leadingMargin":0,"trailingMargin":0,"firstLineMargin":0,"justification":"left","defaultTabStop":48,"listLevel":0,"lineSpacingRule":"multiple","lineSpacing":20,"indentSize":36,"spacingBefore":0,"spacingAfter":0,"baseSpanStyle":{"fontFamily":"Open Sans","fontSize":12,"fontIsBold":false,"fontIsItalic":false,"fontIsUnderline":false,"fontIsStrikeout":false,"underlineStyle":"normal","elevation":"normal","spacing":0,"ignoreKerningTable":false,"displayCase":"asIs","languageId":0,"foregroundColor":"#000000","linkColor":"#0000FF"},"listStyle":{"listType":"none","listTypeFormat":"plain","start":0,"size":100}},"direction":"horizontal"},"vectortext":{"left":0,"top":0,"right":201,"bottom":56,"pngfb":false,"pr":{"l":"Lib","i":125}}}],"shapemaskId":"","xPos":192,"yPos":22,"tabIndex":0,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":128,"rotateYPos":30,"scaleX":100,"scaleY":100,"alpha":100,"depth":3,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":256,"bottom":60,"altText":"SOAL 5","pngfb":false,"pr":{"l":"Lib","i":74}},"html5data":{"xPos":0,"yPos":0,"width":256,"height":60,"strokewidth":0}},"width":256,"height":60,"resume":true,"useHandCursor":true,"id":"6czvSCSuo0w"},{"kind":"vectorshape","rotation":0,"accType":"button","cliptobounds":false,"defaultAction":"onrelease","imagelib":[{"kind":"imagedata","assetId":5,"id":"01","url":"story_content/6NkwgcMXg0d_FFFFFF.png","type":"normal","altText":"MATERI (4).png","width":268,"height":268,"mobiledx":0,"mobiledy":0}],"shapemaskId":"","xPos":0,"yPos":462,"tabIndex":3,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":39,"rotateYPos":39,"scaleX":100,"scaleY":100,"alpha":100,"depth":4,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":78,"bottom":78,"altText":"MATERI (4).png","pngfb":false,"pr":{"l":"Lib","i":48}},"html5data":{"xPos":0,"yPos":0,"width":78,"height":78,"strokewidth":0}},"states":[{"kind":"state","name":"_default_Hover","data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":83,"bottom":83,"altText":"MATERI (4).png","pngfb":false,"pr":{"l":"Lib","i":49}},"html5data":{"xPos":0,"yPos":0,"width":83,"height":83,"strokewidth":0}}}],"width":78,"height":78,"resume":true,"useHandCursor":true,"id":"6qQpQP9Wdr7","variables":[{"kind":"variable","name":"_hover","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"_state","type":"string","value":"_default","resume":true},{"kind":"variable","name":"_disabled","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"_stateName","type":"string","value":"","resume":true},{"kind":"variable","name":"_tempStateName","type":"string","value":"","resume":false}],"actionGroups":{"ActGrpSetHoverState":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_hover","operator":"set","value":{"type":"boolean","value":true}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},"ActGrpClearHoverState":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_hover","operator":"set","value":{"type":"boolean","value":false}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},"ActGrpClearStateVars":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_hover","operator":"set","value":{"type":"boolean","value":false}}]},"ActGrpSetStatesFinal":{"kind":"actiongroup","actions":[{"kind":"if_action","condition":{"statement":{"kind":"and","statements":[{"kind":"compare","operator":"eq","valuea":"#_hover","typea":"var","valueb":true,"typeb":"boolean"}]}},"thenActions":[{"kind":"media_seek","position":0,"objRef":{"type":"string","value":"_parent.5Ug1b0BSEmJ"}},{"kind":"media_play","objRef":{"type":"string","value":"_parent.5Ug1b0BSEmJ"}},{"kind":"set_volume","volume":75,"objRef":{"type":"string","value":"_parent.5Ug1b0BSEmJ"}}],"elseActions":[{"kind":"media_pause","objRef":{"type":"string","value":"_parent.5Ug1b0BSEmJ"}},{"kind":"media_seek","position":0,"objRef":{"type":"string","value":"_parent.5Ug1b0BSEmJ"}}]}]}},"events":[{"kind":"onrelease","actions":[{"kind":"exe_actiongroup","id":"_this.ActGrpClearHoverState"},{"kind":"gotoplay","window":"_current","wndtype":"normal","objRef":{"type":"string","value":"_player.5aosSDOpJm8.66rmqkZxuY9"}}]},{"kind":"ontransitionin","actions":[{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},{"kind":"onrollover","actions":[{"kind":"exe_actiongroup","id":"ActGrpSetHoverState","scopeRef":{"type":"string","value":"_this"}}]},{"kind":"onrollout","actions":[{"kind":"exe_actiongroup","id":"ActGrpClearHoverState","scopeRef":{"type":"string","value":"_this"}}]}]},{"kind":"vectorshape","rotation":0,"accType":"button","cliptobounds":false,"defaultAction":"onrelease","imagelib":[{"kind":"imagedata","assetId":15,"id":"01","url":"story_content/6NG1mM2qwyA_FFFFFF.png","type":"normal","altText":"MATERI (6).png","width":272,"height":272,"mobiledx":0,"mobiledy":0}],"shapemaskId":"","xPos":824,"yPos":470,"tabIndex":4,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":32,"rotateYPos":32,"scaleX":100,"scaleY":100,"alpha":100,"depth":5,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":64,"bottom":64,"altText":"MATERI (6).png","pngfb":false,"pr":{"l":"Lib","i":45}},"html5data":{"xPos":0,"yPos":0,"width":64,"height":64,"strokewidth":0}},"states":[{"kind":"state","name":"_default_Hover","data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":71,"bottom":71,"altText":"MATERI (6).png","pngfb":false,"pr":{"l":"Lib","i":46}},"html5data":{"xPos":0,"yPos":0,"width":71,"height":71,"strokewidth":0}}}],"width":64,"height":64,"resume":true,"useHandCursor":true,"id":"68rVXCtVVMN","variables":[{"kind":"variable","name":"_hover","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"_state","type":"string","value":"_default","resume":true},{"kind":"variable","name":"_disabled","type":"boolean","value":false,"resume":true},{"kind":"variable","name":"_stateName","type":"string","value":"","resume":true},{"kind":"variable","name":"_tempStateName","type":"string","value":"","resume":false}],"actionGroups":{"ActGrpSetHoverState":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_hover","operator":"set","value":{"type":"boolean","value":true}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},"ActGrpClearHoverState":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_hover","operator":"set","value":{"type":"boolean","value":false}},{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},"ActGrpClearStateVars":{"kind":"actiongroup","actions":[{"kind":"adjustvar","variable":"_hover","operator":"set","value":{"type":"boolean","value":false}}]},"ActGrpSetStatesFinal":{"kind":"actiongroup","actions":[{"kind":"if_action","condition":{"statement":{"kind":"and","statements":[{"kind":"compare","operator":"eq","valuea":"#_hover","typea":"var","valueb":true,"typeb":"boolean"}]}},"thenActions":[{"kind":"media_seek","position":0,"objRef":{"type":"string","value":"_parent.6GaiQuYFfSa"}},{"kind":"media_play","objRef":{"type":"string","value":"_parent.6GaiQuYFfSa"}},{"kind":"set_volume","volume":75,"objRef":{"type":"string","value":"_parent.6GaiQuYFfSa"}}],"elseActions":[{"kind":"media_pause","objRef":{"type":"string","value":"_parent.6GaiQuYFfSa"}},{"kind":"media_seek","position":0,"objRef":{"type":"string","value":"_parent.6GaiQuYFfSa"}}]}]}},"events":[{"kind":"onrelease","actions":[{"kind":"exe_actiongroup","id":"_this.ActGrpClearHoverState"},{"kind":"history_prev_scene"}]},{"kind":"ontransitionin","actions":[{"kind":"exe_actiongroup","id":"_player._setstates","scopeRef":{"type":"string","value":"_this"}}]},{"kind":"onrollover","actions":[{"kind":"exe_actiongroup","id":"ActGrpSetHoverState","scopeRef":{"type":"string","value":"_this"}}]},{"kind":"onrollout","actions":[{"kind":"exe_actiongroup","id":"ActGrpClearHoverState","scopeRef":{"type":"string","value":"_this"}}]}]},{"kind":"vectorshape","rotation":0,"accType":"button","cliptobounds":false,"defaultAction":"onrelease","imagelib":[{"kind":"imagedata","assetId":2,"id":"01","url":"story_content/6nurRraEz9j_FFFFFF.png","type":"normal","altText":"MATERI (5).png","width":156,"height":156,"mobiledx":0,"mobiledy":0}],"shapemaskId":"","xPos":888,"yPos":470,"tabIndex":5,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":32,"rotateYPos":32,"scaleX":100,"scaleY":100,"alpha":100,"depth":6,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":64,"bottom":64,"altText":"MATERI (5).png","pngfb":false,"pr":{"l":"Lib","i":47}},"html5data":{"xPos":0,"yPos":0,"width":64,"height":64,"strokewidth":0}},"width":64,"height":64,"resume":true,"useHandCursor":true,"id":"66pwKxBzjlW","events":[{"kind":"onrelease","actions":[{"kind":"gotoplay","window":"_current","wndtype":"normal","objRef":{"type":"string","value":"_player.5VCdd44TbPL.6SgJ3AUftYs"}}]}]},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","textLib":[{"kind":"textdata","uniqueId":"5o9V9TwgNPx_CorrectReview","id":"01","linkId":"5o9V9TwgNPx_CorrectReview","type":"vectortext","xPos":0,"yPos":0,"xAccOffset":0,"yAccOffset":0,"width":0,"height":0,"shadowIndex":-1,"scrollOverflow":false,"vectortext":{"left":0,"top":0,"right":514,"bottom":37,"pngfb":false,"pr":{"l":"Lib","i":77}}}],"shapemaskId":"","xPos":0,"yPos":500,"tabIndex":7,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":480,"rotateYPos":20,"scaleX":100,"scaleY":100,"alpha":100,"depth":7,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-1,"top":-1,"right":960,"bottom":40,"altText":"Benar","pngfb":false,"pr":{"l":"Lib","i":76}},"html5data":{"xPos":1,"yPos":1,"width":957,"height":37,"strokewidth":2}},"width":960,"height":40,"resume":false,"useHandCursor":true,"id":"5o9V9TwgNPx_CorrectReview","events":[{"kind":"onrelease","actions":[{"kind":"hide","transition":"appear","objRef":{"type":"string","value":"_this"}}]}]},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","textLib":[{"kind":"textdata","uniqueId":"5o9V9TwgNPx_IncorrectReview","id":"01","linkId":"5o9V9TwgNPx_IncorrectReview","type":"vectortext","xPos":0,"yPos":0,"xAccOffset":0,"yAccOffset":0,"width":0,"height":0,"shadowIndex":-1,"scrollOverflow":false,"vectortext":{"left":0,"top":0,"right":511,"bottom":37,"pngfb":false,"pr":{"l":"Lib","i":79}}}],"shapemaskId":"","xPos":0,"yPos":500,"tabIndex":8,"tabEnabled":true,"xOffset":0,"yOffset":0,"rotateXPos":480,"rotateYPos":20,"scaleX":100,"scaleY":100,"alpha":100,"depth":8,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":-1,"top":-1,"right":960,"bottom":40,"altText":"Salah","pngfb":false,"pr":{"l":"Lib","i":78}},"html5data":{"xPos":1,"yPos":1,"width":957,"height":37,"strokewidth":2}},"width":960,"height":40,"resume":false,"useHandCursor":true,"id":"5o9V9TwgNPx_IncorrectReview","events":[{"kind":"onrelease","actions":[{"kind":"hide","transition":"appear","objRef":{"type":"string","value":"_this"}}]}]},{"kind":"vectorshape","rotation":0,"accType":"text","cliptobounds":false,"defaultAction":"","textLib":[{"kind":"textdata","uniqueId":"txt_5o9V9TwgNPx_ReviewShape","id":"01","linkId":"txt_5o9V9TwgNPx_ReviewShape","type":"vectortext","altText":"","xPos":0,"yPos":0,"xAccOffset":0,"yAccOffset":0,"width":0,"height":0,"shadowIndex":-1,"scrollOverflow":false,"vectortext":{"left":0,"top":0,"right":421,"bottom":379,"pngfb":false,"pr":{"l":"Lib","i":127}}}],"shapemaskId":"","xPos":0,"yPos":0,"tabIndex":6,"tabEnabled":false,"xOffset":0,"yOffset":0,"rotateXPos":432,"rotateYPos":212,"scaleX":100,"scaleY":100,"alpha":100,"depth":9,"scrolling":true,"shuffleLock":false,"data":{"hotlinkId":"","accState":0,"vectorData":{"left":0,"top":0,"right":940,"bottom":384,"altText":"","pngfb":false,"pr":{"l":"Lib","i":126}},"html5data":{"xPos":1,"yPos":1,"width":938,"height":382,"strokewidth":1}},"width":864,"height":424,"resume":false,"useHandCursor":true,"id":"5o9V9TwgNPx_ReviewShape"}],"startTime":-1,"elapsedTimeMode":"normal","useHandCursor":false,"resume":true,"kind":"slidelayer","isBaseLayer":true}]}');