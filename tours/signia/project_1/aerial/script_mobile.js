(function(){
var translateObjs = {};
function trans(a, b) {
    var c = arguments['length'] === 0x1 ? [arguments[0x0]] : Array['apply'](null, arguments);
    return translateObjs[c[0x0]] = c, '';
}
function regTextVar(a, b) {
    var c = ![];
    return d(b);
    function d(k, l) {
        switch (k['toLowerCase']()) {
        case 'title':
        case 'subtitle':
        case 'photo.title':
        case 'photo.description':
            var m = (function () {
                switch (k['toLowerCase']()) {
                case 'title':
                case 'photo.title':
                    return 'media.label';
                case 'subtitle':
                    return 'media.data.subtitle';
                case 'photo.description':
                    return 'media.data.description';
                }
            }());
            if (m)
                return function () {
                    var r, s, t = (l && l['viewerName'] ? this['getComponentByName'](l['viewerName']) : undefined) || this['getMainViewer']();
                    if (k['toLowerCase']()['startsWith']('photo'))
                        r = this['getByClassName']('PhotoAlbumPlayListItem')['filter'](function (v) {
                            var w = v['get']('player');
                            return w && w['get']('viewerArea') == t;
                        })['map'](function (v) {
                            return v['get']('media')['get']('playList');
                        });
                    else
                        r = this['_getPlayListsWithViewer'](t), s = j['bind'](this, t);
                    if (!c) {
                        for (var u = 0x0; u < r['length']; ++u) {
                            r[u]['bind']('changing', f, this);
                        }
                        c = !![];
                    }
                    return i['call'](this, r, m, s);
                };
            break;
        case 'tour.name':
        case 'tour.description':
            return function () {
                return this['get']('data')['tour']['locManager']['trans'](k);
            };
        default:
            if (k['toLowerCase']()['startsWith']('viewer.')) {
                var n = k['split']('.'), o = n[0x1];
                if (o) {
                    var p = n['slice'](0x2)['join']('.');
                    return d(p, { 'viewerName': o });
                }
            } else {
                if (k['toLowerCase']()['startsWith']('quiz.') && 'Quiz' in TDV) {
                    var q = undefined, m = (function () {
                            switch (k['toLowerCase']()) {
                            case 'quiz.questions.answered':
                                return TDV['Quiz']['PROPERTY']['QUESTIONS_ANSWERED'];
                            case 'quiz.question.count':
                                return TDV['Quiz']['PROPERTY']['QUESTION_COUNT'];
                            case 'quiz.items.found':
                                return TDV['Quiz']['PROPERTY']['ITEMS_FOUND'];
                            case 'quiz.item.count':
                                return TDV['Quiz']['PROPERTY']['ITEM_COUNT'];
                            case 'quiz.score':
                                return TDV['Quiz']['PROPERTY']['SCORE'];
                            case 'quiz.score.total':
                                return TDV['Quiz']['PROPERTY']['TOTAL_SCORE'];
                            case 'quiz.time.remaining':
                                return TDV['Quiz']['PROPERTY']['REMAINING_TIME'];
                            case 'quiz.time.elapsed':
                                return TDV['Quiz']['PROPERTY']['ELAPSED_TIME'];
                            case 'quiz.time.limit':
                                return TDV['Quiz']['PROPERTY']['TIME_LIMIT'];
                            case 'quiz.media.items.found':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_ITEMS_FOUND'];
                            case 'quiz.media.item.count':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_ITEM_COUNT'];
                            case 'quiz.media.questions.answered':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                            case 'quiz.media.question.count':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_QUESTION_COUNT'];
                            case 'quiz.media.score':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_SCORE'];
                            case 'quiz.media.score.total':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_TOTAL_SCORE'];
                            case 'quiz.media.index':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'];
                            case 'quiz.media.count':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_COUNT'];
                            case 'quiz.media.visited':
                                return TDV['Quiz']['PROPERTY']['PANORAMA_VISITED_COUNT'];
                            default:
                                var s = /quiz\.([\w_]+)\.(.+)/['exec'](k);
                                if (s) {
                                    q = s[0x1];
                                    switch ('quiz.' + s[0x2]) {
                                    case 'quiz.score':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['SCORE'];
                                    case 'quiz.score.total':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['TOTAL_SCORE'];
                                    case 'quiz.media.items.found':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEMS_FOUND'];
                                    case 'quiz.media.item.count':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_ITEM_COUNT'];
                                    case 'quiz.media.questions.answered':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTIONS_ANSWERED'];
                                    case 'quiz.media.question.count':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_QUESTION_COUNT'];
                                    case 'quiz.questions.answered':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTIONS_ANSWERED'];
                                    case 'quiz.question.count':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['QUESTION_COUNT'];
                                    case 'quiz.items.found':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEMS_FOUND'];
                                    case 'quiz.item.count':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['ITEM_COUNT'];
                                    case 'quiz.media.score':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_SCORE'];
                                    case 'quiz.media.score.total':
                                        return TDV['Quiz']['OBJECTIVE_PROPERTY']['PANORAMA_TOTAL_SCORE'];
                                    }
                                }
                            }
                        }());
                    if (m)
                        return function () {
                            var r = this['get']('data')['quiz'];
                            if (r) {
                                if (!c) {
                                    if (q != undefined) {
                                        if (q == 'global') {
                                            var s = this['get']('data')['quizConfig'], t = s['objectives'];
                                            for (var u = 0x0, v = t['length']; u < v; ++u) {
                                                r['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], h['call'](this, t[u]['id'], m), this);
                                            }
                                        } else
                                            r['bind'](TDV['Quiz']['EVENT_OBJECTIVE_PROPERTIES_CHANGE'], h['call'](this, q, m), this);
                                    } else
                                        r['bind'](TDV['Quiz']['EVENT_PROPERTIES_CHANGE'], g['call'](this, m), this);
                                    c = !![];
                                }
                                try {
                                    var w = 0x0;
                                    if (q != undefined) {
                                        if (q == 'global') {
                                            var s = this['get']('data')['quizConfig'], t = s['objectives'];
                                            for (var u = 0x0, v = t['length']; u < v; ++u) {
                                                w += r['getObjective'](t[u]['id'], m);
                                            }
                                        } else
                                            w = r['getObjective'](q, m);
                                    } else {
                                        w = r['get'](m);
                                        if (m == TDV['Quiz']['PROPERTY']['PANORAMA_INDEX'])
                                            w += 0x1;
                                    }
                                    return w;
                                } catch (x) {
                                    return undefined;
                                }
                            }
                        };
                }
            }
            break;
        }
        return function () {
            return '';
        };
    }
    function e() {
        var k = this['get']('data');
        k['updateText'](k['translateObjs'][a]);
    }
    function f(k) {
        var l = k['data']['nextSelectedIndex'];
        if (l >= 0x0) {
            var m = k['source']['get']('items')[l], n = function () {
                    m['unbind']('begin', n, this), e['call'](this);
                };
            m['bind']('begin', n, this);
        }
    }
    function g(k) {
        return function (l) {
            k in l && e['call'](this);
        }['bind'](this);
    }
    function h(k, l) {
        return function (m, n) {
            k == m && l in n && e['call'](this);
        }['bind'](this);
    }
    function i(k, l, m) {
        for (var n = 0x0; n < k['length']; ++n) {
            var o = k[n], p = o['get']('selectedIndex');
            if (p >= 0x0) {
                var q = l['split']('.'), r = o['get']('items')[p];
                if (m !== undefined && !m['call'](this, r))
                    continue;
                for (var s = 0x0; s < q['length']; ++s) {
                    if (r == undefined)
                        return '';
                    r = 'get' in r ? r['get'](q[s]) : r[q[s]];
                }
                return r;
            }
        }
        return '';
    }
    function j(k, l) {
        var m = l['get']('player');
        return m !== undefined && m['get']('viewerArea') == k;
    }
}
var script = {"scrollBarMargin":2,"creationPolicy":"inAdvance","id":"rootPlayer","data":{"history":{},"defaultLocale":"en","displayTooltipInTouchScreens":true,"name":"Player880","locales":{"en":"locale/en.txt"},"textToSpeechConfig":{"pitch":1,"speechOnTooltip":false,"speechOnInfoWindow":false,"volume":1,"speechOnQuizQuestion":false,"rate":1,"stopBackgroundAudio":false}},"class":"Player","backgroundColor":["#FFFFFF"],"gap":10,"start":"this.init(); this.syncPlaylists([this.mainPlayList,this.DropDown_7A2ABAA2_74E1_7407_41D1_FEF577625E1B_mobile_playlist]); if(!this.get('fullscreenAvailable')) { [this.IconButton_7BE05E98_74E7_6C04_41B1_53DD8FFC6F97_mobile].forEach(function(component) { if(component.get('class') != 'ViewerArea') component.set('visible', false); }) }","scripts":{"getComponentByName":TDV.Tour.Script.getComponentByName,"setLocale":TDV.Tour.Script.setLocale,"playAudioList":TDV.Tour.Script.playAudioList,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"getAudioByTags":TDV.Tour.Script.getAudioByTags,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"setPlayListSelectedIndex":TDV.Tour.Script.setPlayListSelectedIndex,"setMeasurementUnits":TDV.Tour.Script.setMeasurementUnits,"clone":TDV.Tour.Script.clone,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"setMapLocation":TDV.Tour.Script.setMapLocation,"toggleMeasurementsVisibility":TDV.Tour.Script.toggleMeasurementsVisibility,"updateIndexGlobalZoomImage":TDV.Tour.Script.updateIndexGlobalZoomImage,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"startMeasurement":TDV.Tour.Script.startMeasurement,"getStateTextToSpeech":TDV.Tour.Script.getStateTextToSpeech,"createTween":TDV.Tour.Script.createTween,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"getPixels":TDV.Tour.Script.getPixels,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"startPanoramaWithModel":TDV.Tour.Script.startPanoramaWithModel,"clonePanoramaCamera":TDV.Tour.Script.clonePanoramaCamera,"historyGoForward":TDV.Tour.Script.historyGoForward,"isPanorama":TDV.Tour.Script.isPanorama,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"cloneBindings":TDV.Tour.Script.cloneBindings,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"getPlayListItemIndexByMedia":TDV.Tour.Script.getPlayListItemIndexByMedia,"initQuiz":TDV.Tour.Script.initQuiz,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"startModel3DWithCameraSpot":TDV.Tour.Script.startModel3DWithCameraSpot,"openLink":TDV.Tour.Script.openLink,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"setObjectsVisibilityByTags":TDV.Tour.Script.setObjectsVisibilityByTags,"quizShowScore":TDV.Tour.Script.quizShowScore,"getQuizTotalObjectiveProperty":TDV.Tour.Script.getQuizTotalObjectiveProperty,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"init":TDV.Tour.Script.init,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"getMediaByName":TDV.Tour.Script.getMediaByName,"setObjectsVisibilityByID":TDV.Tour.Script.setObjectsVisibilityByID,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"initAnalytics":TDV.Tour.Script.initAnalytics,"takeScreenshot":TDV.Tour.Script.takeScreenshot,"restartTourWithoutInteraction":TDV.Tour.Script.restartTourWithoutInteraction,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"initOverlayGroupRotationOnClick":TDV.Tour.Script.initOverlayGroupRotationOnClick,"showWindow":TDV.Tour.Script.showWindow,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"mixObject":TDV.Tour.Script.mixObject,"playGlobalAudioWhilePlayActiveMedia":TDV.Tour.Script.playGlobalAudioWhilePlayActiveMedia,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"setObjectsVisibility":TDV.Tour.Script.setObjectsVisibility,"setMeasurementsVisibility":TDV.Tour.Script.setMeasurementsVisibility,"downloadFile":TDV.Tour.Script.downloadFile,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"setModel3DCameraSequence":TDV.Tour.Script.setModel3DCameraSequence,"existsKey":TDV.Tour.Script.existsKey,"showPopupImage":TDV.Tour.Script.showPopupImage,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"cloneGeneric":TDV.Tour.Script.cloneGeneric,"setValue":TDV.Tour.Script.setValue,"setModel3DCameraWithCurrentSpot":TDV.Tour.Script.setModel3DCameraWithCurrentSpot,"toggleTextToSpeechComponent":TDV.Tour.Script.toggleTextToSpeechComponent,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"quizFinish":TDV.Tour.Script.quizFinish,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"executeAudioAction":TDV.Tour.Script.executeAudioAction,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"unregisterKey":TDV.Tour.Script.unregisterKey,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"getMainViewer":TDV.Tour.Script.getMainViewer,"executeJS":TDV.Tour.Script.executeJS,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"registerKey":TDV.Tour.Script.registerKey,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"setModel3DCameraSpot":TDV.Tour.Script.setModel3DCameraSpot,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"getModel3DInnerObject":TDV.Tour.Script.getModel3DInnerObject,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"shareSocial":TDV.Tour.Script.shareSocial,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"toggleVR":TDV.Tour.Script.toggleVR,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"executeAudioActionByTags":TDV.Tour.Script.executeAudioActionByTags,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"historyGoBack":TDV.Tour.Script.historyGoBack,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"getActivePlayersWithViewer":TDV.Tour.Script.getActivePlayersWithViewer,"textToSpeech":TDV.Tour.Script.textToSpeech,"cleanSelectedMeasurements":TDV.Tour.Script.cleanSelectedMeasurements,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"enableVR":TDV.Tour.Script.enableVR,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"cleanAllMeasurements":TDV.Tour.Script.cleanAllMeasurements,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"setDirectionalPanoramaAudio":TDV.Tour.Script.setDirectionalPanoramaAudio,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"quizStart":TDV.Tour.Script.quizStart,"disableVR":TDV.Tour.Script.disableVR,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"translate":TDV.Tour.Script.translate,"quizResumeTimer":TDV.Tour.Script.quizResumeTimer,"getOverlays":TDV.Tour.Script.getOverlays,"getRootOverlay":TDV.Tour.Script.getRootOverlay,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"resumePlayers":TDV.Tour.Script.resumePlayers,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"getKey":TDV.Tour.Script.getKey,"toggleMeasurement":TDV.Tour.Script.toggleMeasurement,"getOverlaysByGroupname":TDV.Tour.Script.getOverlaysByGroupname,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"stopMeasurement":TDV.Tour.Script.stopMeasurement,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"quizPauseTimer":TDV.Tour.Script.quizPauseTimer},"defaultMenu":["fullscreen","mute","rotation"],"minHeight":0,"minWidth":0,"backgroundColorRatios":[0],"watermark":false,"scrollBarColor":"#000000","width":"100%","layout":"absolute","height":"100%","buttonToggleFullscreen":"this.IconButton_7BE05E98_74E7_6C04_41B1_53DD8FFC6F97_mobile","propagateClick":false,"children":["this.MainViewer_mobile","this.Container_7A1C0E95_74E7_6C0C_41CE_44FE0BB037D3_mobile","this.Container_79455DB8_74E1_6C03_41D2_55B8949D93FC_mobile","this.Container_7BDDA77E_74EF_3CFC_41D1_0A77EE3BAEC0_mobile"],"hash": "05de394b27b9d4f70351797d465180dde6474de8f87c0e5c1ae871920edbd107", "definitions": [{"scrollBarMargin":1,"paddingRight":10,"creationPolicy":"inAdvance","id":"Container_79455DB8_74E1_6C03_41D2_55B8949D93FC_mobile","backgroundOpacity":0.3,"class":"Container","backgroundColor":[],"data":{"name":"Container1929","initialScale":0.5},"right":"5%","left":"0%","paddingBottom":7.5,"horizontalAlign":"right","overflow":"scroll","gap":5,"backgroundColorRatios":[],"verticalAlign":"bottom","minWidth":1,"minHeight":1,"top":"90%","layout":"horizontal","bottom":"0%","scrollBarColor":"#000000","children":["this.DropDown_7A2ABAA2_74E1_7407_41D1_FEF577625E1B_mobile"],"propagateClick":false,"scrollBarWidth":5},{"toolTipTextShadowColor":"#000000","progressBackgroundColorRatios":[0],"playbackBarHeadBackgroundColor":["#111111","#666666"],"progressRight":"33%","subtitlesBackgroundColor":"#000000","toolTipFontColor":"#606060","subtitlesGap":0,"progressBarBackgroundColorDirection":"horizontal","progressOpacity":0.7,"progressBarBorderColor":"#000000","toolTipBorderColor":"#767676","class":"ViewerArea","progressBarBackgroundColorRatios":[0],"playbackBarBottom":5,"vrPointerColor":"#FFFFFF","playbackBarHeight":10,"toolTipBackgroundColor":"#F6F6F6","toolTipTextShadowBlurRadius":1,"subtitlesFontFamily":"Arial","progressBorderColor":"#000000","playbackBarBackgroundColor":["#FFFFFF"],"progressBarBackgroundColor":["#3399FF"],"playbackBarHeadWidth":6,"playbackBarBackgroundColorDirection":"vertical","playbackBarProgressBorderSize":0,"data":{"name":"Main Viewer"},"minHeight":25,"subtitlesTextShadowOpacity":1,"minWidth":50,"playbackBarProgressBackgroundColor":["#3399FF"],"toolTipFontFamily":"Arial","toolTipPaddingRight":3,"playbackBarProgressBorderRadius":0,"progressBorderSize":0,"toolTipShadowBlurRadius":1,"progressBackgroundColor":["#000000"],"progressHeight":2,"progressBarBorderRadius":2,"progressBarBorderSize":0,"vrPointerSelectionColor":"#FF6600","progressBottom":10,"playbackBarRight":0,"playbackBarProgressBackgroundColorRatios":[0],"propagateClick":false,"playbackBarHeadShadowOpacity":0.7,"subtitlesBottom":50,"playbackBarBorderColor":"#FFFFFF","playbackBarBackgroundOpacity":1,"vrThumbstickRotationStep":20,"progressBorderRadius":2,"toolTipPaddingLeft":3,"playbackBarBorderRadius":0,"vrPointerSelectionTime":2000,"playbackBarProgressBorderColor":"#000000","progressLeft":"33%","subtitlesTop":0,"subtitlesFontColor":"#FFFFFF","playbackBarHeadBorderRadius":0,"id":"MainViewer_mobile","surfaceReticleColor":"#FFFFFF","toolTipBorderRadius":1,"playbackBarBorderSize":0,"subtitlesFontSize":"3vmin","playbackBarHeadBorderColor":"#000000","firstTransitionDuration":0,"subtitlesTextShadowHorizontalLength":1,"subtitlesTextShadowColor":"#000000","subtitlesBackgroundOpacity":0.2,"surfaceReticleSelectionColor":"#FFFFFF","playbackBarHeadShadowBlurRadius":1.5,"subtitlesBorderColor":"#FFFFFF","playbackBarLeft":0,"playbackBarHeadHeight":15,"width":"100%","playbackBarHeadShadowColor":"#000000","height":"100%","playbackBarHeadBackgroundColorRatios":[0,1],"playbackBarHeadBorderSize":0,"toolTipFontSize":"1.11vmin","toolTipShadowColor":"#333138","subtitlesTextShadowVerticalLength":1,"playbackBarHeadShadow":true},{"enterPointingToHorizon":true,"initialSequence":"this.sequence_7FABA168_74E3_F404_41D2_4B5C88CFC32D","initialPosition":{"pitch":0.69,"class":"PanoramaCameraPosition","yaw":-56.55},"class":"PanoramaCamera","id":"panorama_7FAA13B8_74E3_3403_41BA_3A671D4D6EA7_camera"},{"scrollBarMargin":1,"paddingRight":7.5,"creationPolicy":"inAdvance","id":"Container_7A1C0E95_74E7_6C0C_41CE_44FE0BB037D3_mobile","backgroundOpacity":0.3,"class":"Container","backgroundColor":[],"data":{"name":"Container1929","initialScale":0.5},"right":"0%","left":"0%","paddingBottom":7.5,"horizontalAlign":"right","overflow":"scroll","gap":5,"backgroundColorRatios":[],"verticalAlign":"bottom","minWidth":1,"minHeight":1,"top":"90%","layout":"horizontal","bottom":"0%","scrollBarColor":"#000000","children":["this.IconButton_7BE05E98_74E7_6C04_41B1_53DD8FFC6F97_mobile"],"propagateClick":false,"scrollBarWidth":5},{"class":"Panorama","hfovMax":130,"frames":[{"cube":{"levels":[{"width":24576,"url":"media/panorama_7FAA4E34_74E3_2C03_4162_322EC3487742_0/{face}/0/{row}_{column}.webp","colCount":48,"height":4096,"tags":"ondemand","rowCount":8,"class":"TiledImageResourceLevel"},{"width":12288,"url":"media/panorama_7FAA4E34_74E3_2C03_4162_322EC3487742_0/{face}/1/{row}_{column}.webp","colCount":24,"height":2048,"tags":"ondemand","rowCount":4,"class":"TiledImageResourceLevel"},{"width":6144,"url":"media/panorama_7FAA4E34_74E3_2C03_4162_322EC3487742_0/{face}/2/{row}_{column}.webp","colCount":12,"height":1024,"tags":"ondemand","rowCount":2,"class":"TiledImageResourceLevel"},{"width":3072,"url":"media/panorama_7FAA4E34_74E3_2C03_4162_322EC3487742_0/{face}/3/{row}_{column}.webp","colCount":6,"height":512,"tags":["ondemand","preload"],"rowCount":1,"class":"TiledImageResourceLevel"}],"class":"ImageResource"},"thumbnailUrl":"media/panorama_7FAA4E34_74E3_2C03_4162_322EC3487742_t.webp","class":"CubicPanoramaFrame"}],"id":"panorama_7FAA4E34_74E3_2C03_4162_322EC3487742","pitch":0.17,"data":{"label":"10TH FLOOR"},"vfov":84.15,"thumbnailUrl":"media/panorama_7FAA4E34_74E3_2C03_4162_322EC3487742_t.webp","hfov":360,"label":trans('panorama_7FAA4E34_74E3_2C03_4162_322EC3487742.label'),"hfovMin":"120%"},{"items":[{"player":"this.MainViewer_mobilePanoramaPlayer","camera":"this.panorama_781C7F83_74E2_EC04_41B3_242EDD3C245B_camera","class":"PanoramaPlayListItem","media":"this.panorama_781C7F83_74E2_EC04_41B3_242EDD3C245B"},{"player":"this.MainViewer_mobilePanoramaPlayer","camera":"this.panorama_7FAA6886_74E3_140F_41CB_316E14AFFABE_camera","class":"PanoramaPlayListItem","media":"this.panorama_7FAA6886_74E3_140F_41CB_316E14AFFABE"},{"player":"this.MainViewer_mobilePanoramaPlayer","camera":"this.panorama_7FAA13B8_74E3_3403_41BA_3A671D4D6EA7_camera","class":"PanoramaPlayListItem","media":"this.panorama_7FAA13B8_74E3_3403_41BA_3A671D4D6EA7"},{"player":"this.MainViewer_mobilePanoramaPlayer","camera":"this.panorama_7FAA4E34_74E3_2C03_4162_322EC3487742_camera","class":"PanoramaPlayListItem","media":"this.panorama_7FAA4E34_74E3_2C03_4162_322EC3487742"},{"player":"this.MainViewer_mobilePanoramaPlayer","camera":"this.panorama_7FAA27B5_74E3_1C0C_41D8_5BCCD527996E_camera","class":"PanoramaPlayListItem","media":"this.panorama_7FAA27B5_74E3_1C0C_41D8_5BCCD527996E"}],"class":"PlayList","id":"DropDown_7A2ABAA2_74E1_7407_41D1_FEF577625E1B_mobile_playlist"},{"aaEnabled":true,"keepModel3DLoadedWithoutLocation":true,"mouseControlMode":"drag_rotation","displayPlaybackBar":true,"arrowKeysAction":"translate","viewerArea":"this.MainViewer_mobile","touchControlMode":"drag_rotation","class":"PanoramaPlayer","id":"MainViewer_mobilePanoramaPlayer"},{"toolTipTextShadowColor":"#000000","toolTipPaddingLeft":3,"transparencyActive":true,"toolTipFontColor":"#606060","class":"IconButton","id":"IconButton_7BE05E98_74E7_6C04_41B1_53DD8FFC6F97_mobile","toolTipBorderColor":"#767676","tabIndex":0,"iconURL":"skin/IconButton_7BE05E98_74E7_6C04_41B1_53DD8FFC6F97.png","data":{"name":"IconButton1493"},"toolTipBorderRadius":1,"toolTipBackgroundColor":"#F6F6F6","horizontalAlign":"center","maxHeight":64,"toolTipTextShadowBlurRadius":1,"maxWidth":64,"mode":"toggle","minHeight":1,"verticalAlign":"middle","minWidth":1,"toolTipFontFamily":"Arial","toolTipPaddingRight":3,"toolTipShadowBlurRadius":1,"width":20,"height":20,"toolTipFontSize":6,"toolTip":trans('IconButton_7BE05E98_74E7_6C04_41B1_53DD8FFC6F97_mobile.toolTip'),"toolTipShadowColor":"#333333","propagateClick":false,"backgroundOpacity":0},{"scrollBarMargin":1,"paddingRight":2.5,"creationPolicy":"inAdvance","class":"Container","id":"Container_7BDDA77E_74EF_3CFC_41D1_0A77EE3BAEC0_mobile","backgroundOpacity":0,"data":{"name":"Container"},"right":"0%","horizontalAlign":"right","overflow":"scroll","gap":5,"minHeight":10,"verticalAlign":"middle","minWidth":10,"bottom":"30%","scrollBarColor":"#000000","width":"100%","layout":"horizontal","height":"40%","children":["this.IconButton_611DD7D4_7527_76CF_4182_B608E438C8C3_mobile"],"propagateClick":false,"scrollBarWidth":5},{"rollOverPopUpBackgroundColor":"#FFFFFF","popUpPaddingLeft":0,"paddingRight":2.5,"id":"DropDown_7A2ABAA2_74E1_7407_41D1_FEF577625E1B_mobile","popUpBackgroundOpacity":0.9,"backgroundOpacity":0.9,"fontSize":7,"class":"DropDown","backgroundColor":["#666666"],"data":{"name":"DropDown1204"},"paddingTop":0,"popUpBackgroundColor":"#FFFFFF","horizontalAlign":"center","fontFamily":"Arial","paddingBottom":0,"arrowColor":"#FFFFFF","label":trans('DropDown_7A2ABAA2_74E1_7407_41D1_FEF577625E1B_mobile.label'),"selectedPopUpBackgroundColor":"#333333","popUpFontColor":"#000000","minHeight":10,"popUpShadow":false,"minWidth":100,"borderSize":0,"backgroundColorRatios":[0],"popUpPaddingRight":0,"popUpPaddingBottom":0,"width":"17.551%","playList":"this.DropDown_7A2ABAA2_74E1_7407_41D1_FEF577625E1B_mobile_playlist","fontColor":"#FFFFFF","selectedPopUpFontColor":"#FFFFFF","popUpPaddingTop":0,"paddingLeft":2.5,"propagateClick":false,"height":"58.288%","borderRadius":0,"tabIndex":0},{"vfov":180,"label":trans('panorama_781C7F83_74E2_EC04_41B3_242EDD3C245B.label'),"thumbnailUrl":"media/panorama_781C7F83_74E2_EC04_41B3_242EDD3C245B_t.webp","hfovMax":130,"frames":[{"cube":{"levels":[{"width":24576,"url":"media/panorama_781C7F83_74E2_EC04_41B3_242EDD3C245B_0/{face}/0/{row}_{column}.webp","colCount":48,"height":4096,"tags":"ondemand","rowCount":8,"class":"TiledImageResourceLevel"},{"width":12288,"url":"media/panorama_781C7F83_74E2_EC04_41B3_242EDD3C245B_0/{face}/1/{row}_{column}.webp","colCount":24,"height":2048,"tags":"ondemand","rowCount":4,"class":"TiledImageResourceLevel"},{"width":6144,"url":"media/panorama_781C7F83_74E2_EC04_41B3_242EDD3C245B_0/{face}/2/{row}_{column}.webp","colCount":12,"height":1024,"tags":"ondemand","rowCount":2,"class":"TiledImageResourceLevel"},{"width":3072,"url":"media/panorama_781C7F83_74E2_EC04_41B3_242EDD3C245B_0/{face}/3/{row}_{column}.webp","colCount":6,"height":512,"tags":["ondemand","preload"],"rowCount":1,"class":"TiledImageResourceLevel"}],"class":"ImageResource"},"thumbnailUrl":"media/panorama_781C7F83_74E2_EC04_41B3_242EDD3C245B_t.webp","class":"CubicPanoramaFrame"}],"data":{"label":"AERIAL VIEW"},"hfov":360,"class":"Panorama","id":"panorama_781C7F83_74E2_EC04_41B3_242EDD3C245B"},{"class":"Panorama","hfovMax":130,"frames":[{"cube":{"levels":[{"width":24576,"url":"media/panorama_7FAA13B8_74E3_3403_41BA_3A671D4D6EA7_0/{face}/0/{row}_{column}.webp","colCount":48,"height":4096,"tags":"ondemand","rowCount":8,"class":"TiledImageResourceLevel"},{"width":12288,"url":"media/panorama_7FAA13B8_74E3_3403_41BA_3A671D4D6EA7_0/{face}/1/{row}_{column}.webp","colCount":24,"height":2048,"tags":"ondemand","rowCount":4,"class":"TiledImageResourceLevel"},{"width":6144,"url":"media/panorama_7FAA13B8_74E3_3403_41BA_3A671D4D6EA7_0/{face}/2/{row}_{column}.webp","colCount":12,"height":1024,"tags":"ondemand","rowCount":2,"class":"TiledImageResourceLevel"},{"width":3072,"url":"media/panorama_7FAA13B8_74E3_3403_41BA_3A671D4D6EA7_0/{face}/3/{row}_{column}.webp","colCount":6,"height":512,"tags":["ondemand","preload"],"rowCount":1,"class":"TiledImageResourceLevel"}],"class":"ImageResource"},"thumbnailUrl":"media/panorama_7FAA13B8_74E3_3403_41BA_3A671D4D6EA7_t.webp","class":"CubicPanoramaFrame"}],"id":"panorama_7FAA13B8_74E3_3403_41BA_3A671D4D6EA7","pitch":0.69,"data":{"label":"15TH FLOOR"},"vfov":82.02,"thumbnailUrl":"media/panorama_7FAA13B8_74E3_3403_41BA_3A671D4D6EA7_t.webp","hfov":360,"label":trans('panorama_7FAA13B8_74E3_3403_41BA_3A671D4D6EA7.label'),"hfovMin":"120%"},{"initialSequence":"this.sequence_7FBE5E3B_74E3_2C05_41A3_31DC0746C7DC","class":"PanoramaCamera","enterPointingToHorizon":true,"displayOriginPosition":{"pitch":-90,"class":"RotationalCameraDisplayPosition","stereographicFactor":1,"yaw":-91.19,"hfov":165},"initialPosition":{"pitch":2.72,"class":"PanoramaCameraPosition","yaw":-91.19},"displayMovements":[{"duration":1000,"class":"TargetRotationalCameraDisplayMovement"},{"easing":"cubic_in_out","duration":3000,"class":"TargetRotationalCameraDisplayMovement","targetStereographicFactor":0,"targetPitch":2.72}],"id":"panorama_781C7F83_74E2_EC04_41B3_242EDD3C245B_camera"},{"enterPointingToHorizon":true,"initialSequence":"this.sequence_7FAA6168_74E3_F404_41A0_0EDCF095F593","initialPosition":{"pitch":-0.82,"class":"PanoramaCameraPosition","yaw":-97.59},"class":"PanoramaCamera","id":"panorama_7FAA27B5_74E3_1C0C_41D8_5BCCD527996E_camera"},{"enterPointingToHorizon":true,"initialSequence":"this.sequence_7FABC168_74E3_F404_41B3_0BE798A65566","initialPosition":{"pitch":-1.19,"class":"PanoramaCameraPosition","yaw":-101.23},"class":"PanoramaCamera","id":"panorama_7FAA6886_74E3_140F_41CB_316E14AFFABE_camera"},{"transparencyActive":true,"id":"IconButton_611DD7D4_7527_76CF_4182_B608E438C8C3_mobile","backgroundOpacity":0.3,"tabIndex":0,"class":"IconButton","iconURL":"skin/IconButton_611DD7D4_7527_76CF_4182_B608E438C8C3.png","backgroundColor":[],"data":{"name":"IconButton"},"horizontalAlign":"center","backgroundColorRatios":[],"verticalAlign":"middle","minWidth":1,"minHeight":1,"width":452.6,"height":56.35,"interactionEnabled":false,"propagateClick":false},{"class":"Panorama","hfovMax":130,"frames":[{"cube":{"levels":[{"width":24576,"url":"media/panorama_7FAA27B5_74E3_1C0C_41D8_5BCCD527996E_0/{face}/0/{row}_{column}.webp","colCount":48,"height":4096,"tags":"ondemand","rowCount":8,"class":"TiledImageResourceLevel"},{"width":12288,"url":"media/panorama_7FAA27B5_74E3_1C0C_41D8_5BCCD527996E_0/{face}/1/{row}_{column}.webp","colCount":24,"height":2048,"tags":"ondemand","rowCount":4,"class":"TiledImageResourceLevel"},{"width":6144,"url":"media/panorama_7FAA27B5_74E3_1C0C_41D8_5BCCD527996E_0/{face}/2/{row}_{column}.webp","colCount":12,"height":1024,"tags":"ondemand","rowCount":2,"class":"TiledImageResourceLevel"},{"width":3072,"url":"media/panorama_7FAA27B5_74E3_1C0C_41D8_5BCCD527996E_0/{face}/3/{row}_{column}.webp","colCount":6,"height":512,"tags":["ondemand","preload"],"rowCount":1,"class":"TiledImageResourceLevel"}],"class":"ImageResource"},"thumbnailUrl":"media/panorama_7FAA27B5_74E3_1C0C_41D8_5BCCD527996E_t.webp","class":"CubicPanoramaFrame"}],"id":"panorama_7FAA27B5_74E3_1C0C_41D8_5BCCD527996E","pitch":-0.82,"data":{"label":"5TH FLOOR"},"vfov":85.2,"thumbnailUrl":"media/panorama_7FAA27B5_74E3_1C0C_41D8_5BCCD527996E_t.webp","hfov":360,"label":trans('panorama_7FAA27B5_74E3_1C0C_41D8_5BCCD527996E.label'),"hfovMin":"120%"},{"items":[{"camera":"this.panorama_781C7F83_74E2_EC04_41B3_242EDD3C245B_camera","media":"this.panorama_781C7F83_74E2_EC04_41B3_242EDD3C245B","player":"this.MainViewer_mobilePanoramaPlayer","class":"PanoramaPlayListItem","begin":"this.setEndToItemIndex(this.mainPlayList, 0, 1)"},{"camera":"this.panorama_7FAA6886_74E3_140F_41CB_316E14AFFABE_camera","media":"this.panorama_7FAA6886_74E3_140F_41CB_316E14AFFABE","player":"this.MainViewer_mobilePanoramaPlayer","class":"PanoramaPlayListItem","begin":"this.setEndToItemIndex(this.mainPlayList, 1, 2)"},{"camera":"this.panorama_7FAA13B8_74E3_3403_41BA_3A671D4D6EA7_camera","media":"this.panorama_7FAA13B8_74E3_3403_41BA_3A671D4D6EA7","player":"this.MainViewer_mobilePanoramaPlayer","class":"PanoramaPlayListItem","begin":"this.setEndToItemIndex(this.mainPlayList, 2, 3)"},{"camera":"this.panorama_7FAA4E34_74E3_2C03_4162_322EC3487742_camera","media":"this.panorama_7FAA4E34_74E3_2C03_4162_322EC3487742","player":"this.MainViewer_mobilePanoramaPlayer","class":"PanoramaPlayListItem","begin":"this.setEndToItemIndex(this.mainPlayList, 3, 4)"},{"camera":"this.panorama_7FAA27B5_74E3_1C0C_41D8_5BCCD527996E_camera","media":"this.panorama_7FAA27B5_74E3_1C0C_41D8_5BCCD527996E","player":"this.MainViewer_mobilePanoramaPlayer","class":"PanoramaPlayListItem","begin":"this.setEndToItemIndex(this.mainPlayList, 4, 5)"},{"camera":"this.panorama_78D60E75_74E3_6C0D_41DA_376C84E4E6EF_camera","media":"this.panorama_78D60E75_74E3_6C0D_41DA_376C84E4E6EF","end":"this.trigger('tourEnded')","player":"this.MainViewer_mobilePanoramaPlayer","class":"PanoramaPlayListItem","begin":"this.setEndToItemIndex(this.mainPlayList, 5, 0)"}],"class":"PlayList","id":"mainPlayList"},{"class":"Panorama","hfovMax":130,"frames":[{"cube":{"levels":[{"width":24576,"url":"media/panorama_78D60E75_74E3_6C0D_41DA_376C84E4E6EF_0/{face}/0/{row}_{column}.webp","colCount":48,"height":4096,"tags":"ondemand","rowCount":8,"class":"TiledImageResourceLevel"},{"width":12288,"url":"media/panorama_78D60E75_74E3_6C0D_41DA_376C84E4E6EF_0/{face}/1/{row}_{column}.webp","colCount":24,"height":2048,"tags":"ondemand","rowCount":4,"class":"TiledImageResourceLevel"},{"width":6144,"url":"media/panorama_78D60E75_74E3_6C0D_41DA_376C84E4E6EF_0/{face}/2/{row}_{column}.webp","colCount":12,"height":1024,"tags":"ondemand","rowCount":2,"class":"TiledImageResourceLevel"},{"width":3072,"url":"media/panorama_78D60E75_74E3_6C0D_41DA_376C84E4E6EF_0/{face}/3/{row}_{column}.webp","colCount":6,"height":512,"tags":["ondemand","preload"],"rowCount":1,"class":"TiledImageResourceLevel"}],"class":"ImageResource"},"thumbnailUrl":"media/panorama_78D60E75_74E3_6C0D_41DA_376C84E4E6EF_t.webp","class":"CubicPanoramaFrame"}],"id":"panorama_78D60E75_74E3_6C0D_41DA_376C84E4E6EF","pitch":0.17,"data":{"label":"VIEW 5"},"vfov":85.74,"thumbnailUrl":"media/panorama_78D60E75_74E3_6C0D_41DA_376C84E4E6EF_t.webp","hfov":360,"label":trans('panorama_78D60E75_74E3_6C0D_41DA_376C84E4E6EF.label'),"hfovMin":"120%"},{"enterPointingToHorizon":true,"initialSequence":"this.sequence_7FABE168_74E3_F403_41D6_9E61DE64B7C4","initialPosition":{"pitch":0.41,"class":"PanoramaCameraPosition","yaw":-109.08},"class":"PanoramaCamera","id":"panorama_78D60E75_74E3_6C0D_41DA_376C84E4E6EF_camera"},{"enterPointingToHorizon":true,"initialSequence":"this.sequence_7FAB8168_74E3_F404_41D5_EEFB4DA31D5E","initialPosition":{"pitch":0.17,"class":"PanoramaCameraPosition","yaw":174},"class":"PanoramaCamera","id":"panorama_7FAA4E34_74E3_2C03_4162_322EC3487742_camera"},{"class":"Panorama","hfovMax":130,"frames":[{"cube":{"levels":[{"width":24576,"url":"media/panorama_7FAA6886_74E3_140F_41CB_316E14AFFABE_0/{face}/0/{row}_{column}.webp","colCount":48,"height":4096,"tags":"ondemand","rowCount":8,"class":"TiledImageResourceLevel"},{"width":12288,"url":"media/panorama_7FAA6886_74E3_140F_41CB_316E14AFFABE_0/{face}/1/{row}_{column}.webp","colCount":24,"height":2048,"tags":"ondemand","rowCount":4,"class":"TiledImageResourceLevel"},{"width":6144,"url":"media/panorama_7FAA6886_74E3_140F_41CB_316E14AFFABE_0/{face}/2/{row}_{column}.webp","colCount":12,"height":1024,"tags":"ondemand","rowCount":2,"class":"TiledImageResourceLevel"},{"width":3072,"url":"media/panorama_7FAA6886_74E3_140F_41CB_316E14AFFABE_0/{face}/3/{row}_{column}.webp","colCount":6,"height":512,"tags":["ondemand","preload"],"rowCount":1,"class":"TiledImageResourceLevel"}],"class":"ImageResource"},"thumbnailUrl":"media/panorama_7FAA6886_74E3_140F_41CB_316E14AFFABE_t.webp","class":"CubicPanoramaFrame"}],"id":"panorama_7FAA6886_74E3_140F_41CB_316E14AFFABE","pitch":-2.27,"data":{"label":"20TH FLOOR"},"vfov":93.21,"thumbnailUrl":"media/panorama_7FAA6886_74E3_140F_41CB_316E14AFFABE_t.webp","hfov":360,"label":trans('panorama_7FAA6886_74E3_140F_41CB_316E14AFFABE.label'),"hfovMin":"120%"},{"movements":[{"easing":"cubic_in","class":"DistancePanoramaCameraMovement","yawSpeed":7.96,"yawDelta":18.5},{"class":"DistancePanoramaCameraMovement","yawSpeed":7.96,"yawDelta":323000},{"easing":"cubic_out","class":"DistancePanoramaCameraMovement","yawSpeed":7.96,"yawDelta":18.5}],"class":"PanoramaCameraSequence","id":"sequence_7FABA168_74E3_F404_41D2_4B5C88CFC32D"},{"movements":[{"easing":"cubic_in","class":"DistancePanoramaCameraMovement","yawSpeed":7.96,"yawDelta":18.5},{"class":"DistancePanoramaCameraMovement","yawSpeed":7.96,"yawDelta":323000},{"easing":"cubic_out","class":"DistancePanoramaCameraMovement","yawSpeed":7.96,"yawDelta":18.5}],"class":"PanoramaCameraSequence","id":"sequence_7FBE5E3B_74E3_2C05_41A3_31DC0746C7DC"},{"movements":[{"easing":"cubic_in","class":"DistancePanoramaCameraMovement","yawSpeed":7.96,"yawDelta":18.5},{"class":"DistancePanoramaCameraMovement","yawSpeed":7.96,"yawDelta":323000},{"easing":"cubic_out","class":"DistancePanoramaCameraMovement","yawSpeed":7.96,"yawDelta":18.5}],"class":"PanoramaCameraSequence","id":"sequence_7FAA6168_74E3_F404_41A0_0EDCF095F593"},{"movements":[{"easing":"cubic_in","class":"DistancePanoramaCameraMovement","yawSpeed":7.96,"yawDelta":18.5},{"class":"DistancePanoramaCameraMovement","yawSpeed":7.96,"yawDelta":323000},{"easing":"cubic_out","class":"DistancePanoramaCameraMovement","yawSpeed":7.96,"yawDelta":18.5}],"class":"PanoramaCameraSequence","id":"sequence_7FABC168_74E3_F404_41B3_0BE798A65566"},{"movements":[{"easing":"cubic_in","class":"DistancePanoramaCameraMovement","yawSpeed":7.96,"yawDelta":18.5},{"class":"DistancePanoramaCameraMovement","yawSpeed":7.96,"yawDelta":323000},{"easing":"cubic_out","class":"DistancePanoramaCameraMovement","yawSpeed":7.96,"yawDelta":18.5}],"class":"PanoramaCameraSequence","id":"sequence_7FABE168_74E3_F403_41D6_9E61DE64B7C4"},{"movements":[{"easing":"cubic_in","class":"DistancePanoramaCameraMovement","yawSpeed":7.96,"yawDelta":18.5},{"class":"DistancePanoramaCameraMovement","yawSpeed":7.96,"yawDelta":323000},{"easing":"cubic_out","class":"DistancePanoramaCameraMovement","yawSpeed":7.96,"yawDelta":18.5}],"class":"PanoramaCameraSequence","id":"sequence_7FAB8168_74E3_F404_41D5_EEFB4DA31D5E"}]};
if (script['data'] == undefined)
    script['data'] = {};
script['data']['translateObjs'] = translateObjs, script['data']['createQuizConfig'] = function () {
    var a = {};
    return this['get']('data')['translateObjs'] = translateObjs, a;
}, TDV['PlayerAPI']['defineScript'](script);
//# sourceMappingURL=script_device.js.map
})();
//Generated with v2025.1.11, Thu Jun 19 2025