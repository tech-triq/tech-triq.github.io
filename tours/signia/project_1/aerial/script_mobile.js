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
var script = {"children":["this.MainViewer_mobile","this.Container_7A1C0E95_74E7_6C0C_41CE_44FE0BB037D3_mobile","this.Container_79455DB8_74E1_6C03_41D2_55B8949D93FC_mobile","this.Container_7BDDA77E_74EF_3CFC_41D1_0A77EE3BAEC0_mobile"],"height":"100%","layout":"absolute","width":"100%","scripts":{"getQuizTotalObjectiveProperty":TDV.Tour.Script.getQuizTotalObjectiveProperty,"translate":TDV.Tour.Script.translate,"createTween":TDV.Tour.Script.createTween,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"historyGoBack":TDV.Tour.Script.historyGoBack,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"isPanorama":TDV.Tour.Script.isPanorama,"initAnalytics":TDV.Tour.Script.initAnalytics,"clone":TDV.Tour.Script.clone,"setPlayListSelectedIndex":TDV.Tour.Script.setPlayListSelectedIndex,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"openLink":TDV.Tour.Script.openLink,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"quizFinish":TDV.Tour.Script.quizFinish,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"textToSpeech":TDV.Tour.Script.textToSpeech,"toggleMeasurement":TDV.Tour.Script.toggleMeasurement,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"getAudioByTags":TDV.Tour.Script.getAudioByTags,"executeJS":TDV.Tour.Script.executeJS,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"takeScreenshot":TDV.Tour.Script.takeScreenshot,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"getPixels":TDV.Tour.Script.getPixels,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"unregisterKey":TDV.Tour.Script.unregisterKey,"startMeasurement":TDV.Tour.Script.startMeasurement,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"cleanSelectedMeasurements":TDV.Tour.Script.cleanSelectedMeasurements,"startPanoramaWithModel":TDV.Tour.Script.startPanoramaWithModel,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"initOverlayGroupRotationOnClick":TDV.Tour.Script.initOverlayGroupRotationOnClick,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"disableVR":TDV.Tour.Script.disableVR,"historyGoForward":TDV.Tour.Script.historyGoForward,"mixObject":TDV.Tour.Script.mixObject,"resumePlayers":TDV.Tour.Script.resumePlayers,"cleanAllMeasurements":TDV.Tour.Script.cleanAllMeasurements,"setObjectsVisibilityByID":TDV.Tour.Script.setObjectsVisibilityByID,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"toggleVR":TDV.Tour.Script.toggleVR,"getActivePlayersWithViewer":TDV.Tour.Script.getActivePlayersWithViewer,"enableVR":TDV.Tour.Script.enableVR,"restartTourWithoutInteraction":TDV.Tour.Script.restartTourWithoutInteraction,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"setModel3DCameraSequence":TDV.Tour.Script.setModel3DCameraSequence,"init":TDV.Tour.Script.init,"setModel3DCameraWithCurrentSpot":TDV.Tour.Script.setModel3DCameraWithCurrentSpot,"stopMeasurement":TDV.Tour.Script.stopMeasurement,"setModel3DCameraSpot":TDV.Tour.Script.setModel3DCameraSpot,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios,"quizResumeTimer":TDV.Tour.Script.quizResumeTimer,"initQuiz":TDV.Tour.Script.initQuiz,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"showPopupImage":TDV.Tour.Script.showPopupImage,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"setValue":TDV.Tour.Script.setValue,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"executeAudioAction":TDV.Tour.Script.executeAudioAction,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"setMapLocation":TDV.Tour.Script.setMapLocation,"shareSocial":TDV.Tour.Script.shareSocial,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"downloadFile":TDV.Tour.Script.downloadFile,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"showWindow":TDV.Tour.Script.showWindow,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"registerKey":TDV.Tour.Script.registerKey,"playGlobalAudioWhilePlayActiveMedia":TDV.Tour.Script.playGlobalAudioWhilePlayActiveMedia,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"setObjectsVisibility":TDV.Tour.Script.setObjectsVisibility,"cloneGeneric":TDV.Tour.Script.cloneGeneric,"getPlayListItemIndexByMedia":TDV.Tour.Script.getPlayListItemIndexByMedia,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"toggleTextToSpeechComponent":TDV.Tour.Script.toggleTextToSpeechComponent,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"getModel3DInnerObject":TDV.Tour.Script.getModel3DInnerObject,"getMainViewer":TDV.Tour.Script.getMainViewer,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"updateIndexGlobalZoomImage":TDV.Tour.Script.updateIndexGlobalZoomImage,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"executeAudioActionByTags":TDV.Tour.Script.executeAudioActionByTags,"getOverlaysByGroupname":TDV.Tour.Script.getOverlaysByGroupname,"setMeasurementUnits":TDV.Tour.Script.setMeasurementUnits,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"startModel3DWithCameraSpot":TDV.Tour.Script.startModel3DWithCameraSpot,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"clonePanoramaCamera":TDV.Tour.Script.clonePanoramaCamera,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"quizShowScore":TDV.Tour.Script.quizShowScore,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"getOverlays":TDV.Tour.Script.getOverlays,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"getComponentByName":TDV.Tour.Script.getComponentByName,"playAudioList":TDV.Tour.Script.playAudioList,"quizPauseTimer":TDV.Tour.Script.quizPauseTimer,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"quizStart":TDV.Tour.Script.quizStart,"getStateTextToSpeech":TDV.Tour.Script.getStateTextToSpeech,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"setMeasurementsVisibility":TDV.Tour.Script.setMeasurementsVisibility,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"getRootOverlay":TDV.Tour.Script.getRootOverlay,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"getMediaByName":TDV.Tour.Script.getMediaByName,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"setObjectsVisibilityByTags":TDV.Tour.Script.setObjectsVisibilityByTags,"getKey":TDV.Tour.Script.getKey,"existsKey":TDV.Tour.Script.existsKey,"cloneBindings":TDV.Tour.Script.cloneBindings,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"setDirectionalPanoramaAudio":TDV.Tour.Script.setDirectionalPanoramaAudio,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"toggleMeasurementsVisibility":TDV.Tour.Script.toggleMeasurementsVisibility,"setLocale":TDV.Tour.Script.setLocale,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera},"scrollBarColor":"#000000","id":"rootPlayer","data":{"defaultLocale":"en","history":{},"locales":{"en":"locale/en.txt"},"displayTooltipInTouchScreens":true,"name":"Player880","textToSpeechConfig":{"pitch":1,"speechOnInfoWindow":false,"rate":1,"speechOnQuizQuestion":false,"speechOnTooltip":false,"volume":1,"stopBackgroundAudio":false}},"hash": "27a8525d24b1f2d25c812ec933139987d98685c287ac15036a95372af383269c", "definitions": [{"verticalAlign":"middle","iconURL":"skin/IconButton_611DD7D4_7527_76CF_4182_B608E438C8C3.png","id":"IconButton_611DD7D4_7527_76CF_4182_B608E438C8C3_mobile","data":{"name":"IconButton"},"tabIndex":0,"minHeight":1,"minWidth":1,"transparencyActive":true,"backgroundColor":[],"backgroundColorRatios":[],"horizontalAlign":"center","propagateClick":false,"class":"IconButton","interactionEnabled":false,"width":452.6,"backgroundOpacity":0.3,"height":56.35},{"class":"PanoramaCamera","id":"panorama_DDD46E18_D154_2339_41CB_05510F8DBBAE_camera","initialPosition":{"pitch":-0.72,"class":"PanoramaCameraPosition","yaw":169.18},"initialSequence":"this.sequence_7FAB8168_74E3_F404_41D5_EEFB4DA31D5E","enterPointingToHorizon":true},{"vfov":180,"overlays":["this.overlay_DC5BF6E4_D1CC_2308_41BE_FC58A304D47B"],"hfovMin":"120%","frames":[{"class":"CubicPanoramaFrame","cube":{"levels":[{"class":"TiledImageResourceLevel","width":24576,"url":"media/panorama_DC55F234_D1BC_6309_41E5_61833816A639_0/{face}/0/{row}_{column}.webp","colCount":48,"height":4096,"tags":"ondemand","rowCount":8},{"class":"TiledImageResourceLevel","width":12288,"url":"media/panorama_DC55F234_D1BC_6309_41E5_61833816A639_0/{face}/1/{row}_{column}.webp","colCount":24,"height":2048,"tags":"ondemand","rowCount":4},{"class":"TiledImageResourceLevel","width":6144,"url":"media/panorama_DC55F234_D1BC_6309_41E5_61833816A639_0/{face}/2/{row}_{column}.webp","colCount":12,"height":1024,"tags":"ondemand","rowCount":2},{"class":"TiledImageResourceLevel","width":3072,"url":"media/panorama_DC55F234_D1BC_6309_41E5_61833816A639_0/{face}/3/{row}_{column}.webp","colCount":6,"height":512,"tags":["ondemand","preload"],"rowCount":1}],"class":"ImageResource"},"thumbnailUrl":"media/panorama_DC55F234_D1BC_6309_41E5_61833816A639_t.webp"}],"thumbnailUrl":"media/panorama_DC55F234_D1BC_6309_41E5_61833816A639_t.webp","class":"Panorama","id":"panorama_DC55F234_D1BC_6309_41E5_61833816A639","data":{"label":"15TH FLOOR"},"hfov":360,"hfovMax":130,"label":trans('panorama_DC55F234_D1BC_6309_41E5_61833816A639.label')},{"creationPolicy":"inAdvance","height":"40%","layout":"horizontal","scrollBarColor":"#000000","id":"Container_7BDDA77E_74EF_3CFC_41D1_0A77EE3BAEC0_mobile","data":{"name":"Container"},"minWidth":10,"minHeight":10,"overflow":"scroll","right":"0%","gap":5,"horizontalAlign":"right","propagateClick":false,"bottom":"30%","scrollBarWidth":5,"class":"Container","paddingRight":2.5,"scrollBarMargin":1,"backgroundOpacity":0,"verticalAlign":"middle","visible":false,"children":["this.IconButton_611DD7D4_7527_76CF_4182_B608E438C8C3_mobile"],"width":"100%"},{"toolTipTextShadowBlurRadius":1,"iconURL":"skin/IconButton_7BE05E98_74E7_6C04_41B1_53DD8FFC6F97.png","maxHeight":64,"maxWidth":64,"id":"IconButton_7BE05E98_74E7_6C04_41B1_53DD8FFC6F97_mobile","data":{"name":"IconButton1493"},"tabIndex":0,"minWidth":1,"toolTipPaddingRight":3,"toolTipTextShadowColor":"#000000","minHeight":1,"toolTipShadowBlurRadius":1,"transparencyActive":true,"mode":"toggle","toolTip":trans('IconButton_7BE05E98_74E7_6C04_41B1_53DD8FFC6F97_mobile.toolTip'),"toolTipShadowColor":"#333333","horizontalAlign":"center","propagateClick":false,"toolTipPaddingLeft":3,"class":"IconButton","toolTipFontFamily":"Arial","width":20,"toolTipBorderRadius":1,"backgroundOpacity":0,"height":20,"toolTipFontColor":"#606060","toolTipBorderColor":"#767676","toolTipBackgroundColor":"#F6F6F6","toolTipFontSize":6,"verticalAlign":"middle"},{"class":"PanoramaCamera","id":"panorama_DC7CE53A_D1BC_E178_41C3_2B0D0E52286A_camera","initialPosition":{"pitch":1.09,"class":"PanoramaCameraPosition","yaw":-101.23},"initialSequence":"this.sequence_7FABC168_74E3_F404_41B3_0BE798A65566","enterPointingToHorizon":true},{"vfov":130.86,"hfovMin":"120%","frames":[{"class":"CubicPanoramaFrame","cube":{"levels":[{"class":"TiledImageResourceLevel","width":24576,"url":"media/panorama_DDC07649_D157_E318_41BA_5CDBBF4C1DF3_0/{face}/0/{row}_{column}.webp","colCount":48,"height":4096,"tags":"ondemand","rowCount":8},{"class":"TiledImageResourceLevel","width":12288,"url":"media/panorama_DDC07649_D157_E318_41BA_5CDBBF4C1DF3_0/{face}/1/{row}_{column}.webp","colCount":24,"height":2048,"tags":"ondemand","rowCount":4},{"class":"TiledImageResourceLevel","width":6144,"url":"media/panorama_DDC07649_D157_E318_41BA_5CDBBF4C1DF3_0/{face}/2/{row}_{column}.webp","colCount":12,"height":1024,"tags":"ondemand","rowCount":2},{"class":"TiledImageResourceLevel","width":3072,"url":"media/panorama_DDC07649_D157_E318_41BA_5CDBBF4C1DF3_0/{face}/3/{row}_{column}.webp","colCount":6,"height":512,"tags":["ondemand","preload"],"rowCount":1}],"class":"ImageResource"},"thumbnailUrl":"media/panorama_DDC07649_D157_E318_41BA_5CDBBF4C1DF3_t.webp"}],"thumbnailUrl":"media/panorama_DDC07649_D157_E318_41BA_5CDBBF4C1DF3_t.webp","class":"Panorama","id":"panorama_DDC07649_D157_E318_41BA_5CDBBF4C1DF3","data":{"label":"5TH FLOOR"},"hfov":360,"hfovMax":130,"label":trans('panorama_DDC07649_D157_E318_41BA_5CDBBF4C1DF3.label')},{"creationPolicy":"inAdvance","layout":"horizontal","scrollBarColor":"#000000","id":"Container_7A1C0E95_74E7_6C0C_41CE_44FE0BB037D3_mobile","data":{"name":"Container1929","initialScale":0.5},"backgroundColor":[],"left":"0%","minHeight":1,"minWidth":1,"right":"0%","overflow":"scroll","gap":5,"backgroundColorRatios":[],"paddingBottom":7.5,"horizontalAlign":"right","top":"90%","propagateClick":false,"bottom":"0%","scrollBarWidth":5,"class":"Container","paddingRight":7.5,"scrollBarMargin":1,"backgroundOpacity":0.3,"verticalAlign":"bottom","children":["this.IconButton_7BE05E98_74E7_6C04_41B1_53DD8FFC6F97_mobile"]},{"items":[{"class":"PanoramaPlayListItem","player":"this.MainViewer_mobilePanoramaPlayer","camera":"this.panorama_DFBFEA81_D1CC_E308_41DB_6052B74166AE_camera","media":"this.panorama_DFBFEA81_D1CC_E308_41DB_6052B74166AE"},{"class":"PanoramaPlayListItem","player":"this.MainViewer_mobilePanoramaPlayer","camera":"this.panorama_DC7CE53A_D1BC_E178_41C3_2B0D0E52286A_camera","media":"this.panorama_DC7CE53A_D1BC_E178_41C3_2B0D0E52286A"},{"class":"PanoramaPlayListItem","player":"this.MainViewer_mobilePanoramaPlayer","camera":"this.panorama_DC55F234_D1BC_6309_41E5_61833816A639_camera","media":"this.panorama_DC55F234_D1BC_6309_41E5_61833816A639"},{"class":"PanoramaPlayListItem","player":"this.MainViewer_mobilePanoramaPlayer","camera":"this.panorama_DDD46E18_D154_2339_41CB_05510F8DBBAE_camera","media":"this.panorama_DDD46E18_D154_2339_41CB_05510F8DBBAE"},{"class":"PanoramaPlayListItem","player":"this.MainViewer_mobilePanoramaPlayer","camera":"this.panorama_DDC07649_D157_E318_41BA_5CDBBF4C1DF3_camera","media":"this.panorama_DDC07649_D157_E318_41BA_5CDBBF4C1DF3"}],"class":"PlayList","id":"DropDown_7A2ABAA2_74E1_7407_41D1_FEF577625E1B_mobile_playlist"},{"items":[{"class":"PanoramaPlayListItem","camera":"this.panorama_DFBFEA81_D1CC_E308_41DB_6052B74166AE_camera","media":"this.panorama_DFBFEA81_D1CC_E308_41DB_6052B74166AE","player":"this.MainViewer_mobilePanoramaPlayer","begin":"this.setEndToItemIndex(this.mainPlayList, 0, 1)"},{"class":"PanoramaPlayListItem","camera":"this.panorama_DC7CE53A_D1BC_E178_41C3_2B0D0E52286A_camera","media":"this.panorama_DC7CE53A_D1BC_E178_41C3_2B0D0E52286A","player":"this.MainViewer_mobilePanoramaPlayer","begin":"this.setEndToItemIndex(this.mainPlayList, 1, 2)"},{"class":"PanoramaPlayListItem","camera":"this.panorama_DC55F234_D1BC_6309_41E5_61833816A639_camera","media":"this.panorama_DC55F234_D1BC_6309_41E5_61833816A639","player":"this.MainViewer_mobilePanoramaPlayer","begin":"this.setEndToItemIndex(this.mainPlayList, 2, 3)"},{"class":"PanoramaPlayListItem","camera":"this.panorama_DDD46E18_D154_2339_41CB_05510F8DBBAE_camera","media":"this.panorama_DDD46E18_D154_2339_41CB_05510F8DBBAE","player":"this.MainViewer_mobilePanoramaPlayer","begin":"this.setEndToItemIndex(this.mainPlayList, 3, 4)"},{"class":"PanoramaPlayListItem","camera":"this.panorama_DDC07649_D157_E318_41BA_5CDBBF4C1DF3_camera","media":"this.panorama_DDC07649_D157_E318_41BA_5CDBBF4C1DF3","player":"this.MainViewer_mobilePanoramaPlayer","begin":"this.setEndToItemIndex(this.mainPlayList, 4, 5)"},{"class":"PanoramaPlayListItem","camera":"this.panorama_78D60E75_74E3_6C0D_41DA_376C84E4E6EF_camera","media":"this.panorama_78D60E75_74E3_6C0D_41DA_376C84E4E6EF","end":"this.trigger('tourEnded')","player":"this.MainViewer_mobilePanoramaPlayer","begin":"this.setEndToItemIndex(this.mainPlayList, 5, 0)"}],"class":"PlayList","id":"mainPlayList"},{"class":"PanoramaPlayer","viewerArea":"this.MainViewer_mobile","displayPlaybackBar":true,"touchControlMode":"drag_rotation","keepModel3DLoadedWithoutLocation":true,"aaEnabled":true,"arrowKeysAction":"translate","mouseControlMode":"drag_rotation","id":"MainViewer_mobilePanoramaPlayer"},{"class":"PanoramaCamera","id":"panorama_DDC07649_D157_E318_41BA_5CDBBF4C1DF3_camera","initialPosition":{"pitch":0.49,"class":"PanoramaCameraPosition","yaw":-101.52},"initialSequence":"this.sequence_7FAA6168_74E3_F404_41A0_0EDCF095F593","enterPointingToHorizon":true},{"creationPolicy":"inAdvance","layout":"horizontal","scrollBarColor":"#000000","id":"Container_79455DB8_74E1_6C03_41D2_55B8949D93FC_mobile","data":{"name":"Container1929","initialScale":0.5},"backgroundColor":[],"left":"0%","minHeight":1,"minWidth":1,"right":"5%","overflow":"scroll","gap":5,"backgroundColorRatios":[],"paddingBottom":7.5,"horizontalAlign":"right","top":"90%","propagateClick":false,"bottom":"0%","scrollBarWidth":5,"class":"Container","paddingRight":10,"scrollBarMargin":1,"backgroundOpacity":0.3,"verticalAlign":"bottom","children":["this.DropDown_7A2ABAA2_74E1_7407_41D1_FEF577625E1B_mobile"]},{"class":"PanoramaCamera","initialSequence":"this.sequence_7FBE5E3B_74E3_2C05_41A3_31DC0746C7DC","displayOriginPosition":{"pitch":-90,"class":"RotationalCameraDisplayPosition","stereographicFactor":1,"hfov":165,"yaw":-91.19},"enterPointingToHorizon":true,"displayMovements":[{"class":"TargetRotationalCameraDisplayMovement","duration":1000},{"class":"TargetRotationalCameraDisplayMovement","easing":"cubic_in_out","targetPitch":2.75,"targetStereographicFactor":0,"duration":3000}],"initialPosition":{"pitch":2.75,"class":"PanoramaCameraPosition","yaw":-91.19},"id":"panorama_DFBFEA81_D1CC_E308_41DB_6052B74166AE_camera"},{"vfov":180,"overlays":["this.overlay_DF8C6F9C_D1CC_6138_41B6_E346B9A641B1"],"hfovMin":"120%","frames":[{"class":"CubicPanoramaFrame","cube":{"levels":[{"class":"TiledImageResourceLevel","width":24576,"url":"media/panorama_DC7CE53A_D1BC_E178_41C3_2B0D0E52286A_0/{face}/0/{row}_{column}.webp","colCount":48,"height":4096,"tags":"ondemand","rowCount":8},{"class":"TiledImageResourceLevel","width":12288,"url":"media/panorama_DC7CE53A_D1BC_E178_41C3_2B0D0E52286A_0/{face}/1/{row}_{column}.webp","colCount":24,"height":2048,"tags":"ondemand","rowCount":4},{"class":"TiledImageResourceLevel","width":6144,"url":"media/panorama_DC7CE53A_D1BC_E178_41C3_2B0D0E52286A_0/{face}/2/{row}_{column}.webp","colCount":12,"height":1024,"tags":"ondemand","rowCount":2},{"class":"TiledImageResourceLevel","width":3072,"url":"media/panorama_DC7CE53A_D1BC_E178_41C3_2B0D0E52286A_0/{face}/3/{row}_{column}.webp","colCount":6,"height":512,"tags":["ondemand","preload"],"rowCount":1}],"class":"ImageResource"},"thumbnailUrl":"media/panorama_DC7CE53A_D1BC_E178_41C3_2B0D0E52286A_t.webp"}],"thumbnailUrl":"media/panorama_DC7CE53A_D1BC_E178_41C3_2B0D0E52286A_t.webp","class":"Panorama","id":"panorama_DC7CE53A_D1BC_E178_41C3_2B0D0E52286A","data":{"label":"20TH FLOOR"},"hfov":360,"hfovMax":130,"label":trans('panorama_DC7CE53A_D1BC_E178_41C3_2B0D0E52286A.label')},{"popUpBackgroundOpacity":0.9,"selectedPopUpBackgroundColor":"#333333","borderRadius":0,"height":"58.288%","id":"DropDown_7A2ABAA2_74E1_7407_41D1_FEF577625E1B_mobile","popUpPaddingTop":0,"popUpShadow":false,"fontFamily":"Arial","fontSize":7,"popUpPaddingRight":0,"data":{"name":"DropDown1204"},"minHeight":10,"label":trans('DropDown_7A2ABAA2_74E1_7407_41D1_FEF577625E1B_mobile.label'),"backgroundColor":["#666666"],"tabIndex":0,"arrowColor":"#FFFFFF","minWidth":100,"paddingTop":0,"backgroundColorRatios":[0],"selectedPopUpFontColor":"#FFFFFF","paddingBottom":0,"rollOverPopUpBackgroundColor":"#FFFFFF","horizontalAlign":"center","popUpPaddingLeft":0,"paddingLeft":2.5,"fontColor":"#FFFFFF","propagateClick":false,"popUpBackgroundColor":"#FFFFFF","popUpFontColor":"#000000","class":"DropDown","paddingRight":2.5,"borderSize":0,"popUpPaddingBottom":0,"backgroundOpacity":0.9,"width":"17.551%","playList":"this.DropDown_7A2ABAA2_74E1_7407_41D1_FEF577625E1B_mobile_playlist"},{"class":"PanoramaCamera","id":"panorama_78D60E75_74E3_6C0D_41DA_376C84E4E6EF_camera","initialPosition":{"pitch":0.41,"class":"PanoramaCameraPosition","yaw":-109.08},"initialSequence":"this.sequence_7FABE168_74E3_F403_41D6_9E61DE64B7C4","enterPointingToHorizon":true},{"class":"PanoramaCamera","id":"panorama_DC55F234_D1BC_6309_41E5_61833816A639_camera","initialPosition":{"pitch":-0.16,"class":"PanoramaCameraPosition","yaw":106.01},"initialSequence":"this.sequence_7FABA168_74E3_F404_41D2_4B5C88CFC32D","enterPointingToHorizon":true},{"vfov":180,"overlays":["this.overlay_DF2ACD98_D1CC_2139_415C_E51032DA8F9C"],"frames":[{"class":"CubicPanoramaFrame","cube":{"levels":[{"class":"TiledImageResourceLevel","width":24576,"url":"media/panorama_DFBFEA81_D1CC_E308_41DB_6052B74166AE_0/{face}/0/{row}_{column}.webp","colCount":48,"height":4096,"tags":"ondemand","rowCount":8},{"class":"TiledImageResourceLevel","width":12288,"url":"media/panorama_DFBFEA81_D1CC_E308_41DB_6052B74166AE_0/{face}/1/{row}_{column}.webp","colCount":24,"height":2048,"tags":"ondemand","rowCount":4},{"class":"TiledImageResourceLevel","width":6144,"url":"media/panorama_DFBFEA81_D1CC_E308_41DB_6052B74166AE_0/{face}/2/{row}_{column}.webp","colCount":12,"height":1024,"tags":"ondemand","rowCount":2},{"class":"TiledImageResourceLevel","width":3072,"url":"media/panorama_DFBFEA81_D1CC_E308_41DB_6052B74166AE_0/{face}/3/{row}_{column}.webp","colCount":6,"height":512,"tags":["ondemand","preload"],"rowCount":1}],"class":"ImageResource"},"thumbnailUrl":"media/panorama_DFBFEA81_D1CC_E308_41DB_6052B74166AE_t.webp"}],"thumbnailUrl":"media/panorama_DFBFEA81_D1CC_E308_41DB_6052B74166AE_t.webp","class":"Panorama","id":"panorama_DFBFEA81_D1CC_E308_41DB_6052B74166AE","data":{"label":"AERIAL VIEW"},"hfov":360,"hfovMax":130,"label":trans('panorama_DFBFEA81_D1CC_E308_41DB_6052B74166AE.label')},{"vfov":131.04,"hfovMin":"120%","frames":[{"class":"CubicPanoramaFrame","cube":{"levels":[{"class":"TiledImageResourceLevel","width":24576,"url":"media/panorama_DDD46E18_D154_2339_41CB_05510F8DBBAE_0/{face}/0/{row}_{column}.webp","colCount":48,"height":4096,"tags":"ondemand","rowCount":8},{"class":"TiledImageResourceLevel","width":12288,"url":"media/panorama_DDD46E18_D154_2339_41CB_05510F8DBBAE_0/{face}/1/{row}_{column}.webp","colCount":24,"height":2048,"tags":"ondemand","rowCount":4},{"class":"TiledImageResourceLevel","width":6144,"url":"media/panorama_DDD46E18_D154_2339_41CB_05510F8DBBAE_0/{face}/2/{row}_{column}.webp","colCount":12,"height":1024,"tags":"ondemand","rowCount":2},{"class":"TiledImageResourceLevel","width":3072,"url":"media/panorama_DDD46E18_D154_2339_41CB_05510F8DBBAE_0/{face}/3/{row}_{column}.webp","colCount":6,"height":512,"tags":["ondemand","preload"],"rowCount":1}],"class":"ImageResource"},"thumbnailUrl":"media/panorama_DDD46E18_D154_2339_41CB_05510F8DBBAE_t.webp"}],"thumbnailUrl":"media/panorama_DDD46E18_D154_2339_41CB_05510F8DBBAE_t.webp","class":"Panorama","id":"panorama_DDD46E18_D154_2339_41CB_05510F8DBBAE","data":{"label":"10TH FLOOR"},"hfov":360,"hfovMax":130,"label":trans('panorama_DDD46E18_D154_2339_41CB_05510F8DBBAE.label')},{"toolTipFontSize":"1.11vmin","progressRight":"33%","progressOpacity":0.7,"toolTipTextShadowBlurRadius":1,"playbackBarHeadBackgroundColor":["#111111","#666666"],"progressBarBackgroundColorDirection":"horizontal","subtitlesBackgroundColor":"#000000","vrPointerColor":"#FFFFFF","progressBarBorderColor":"#000000","subtitlesGap":0,"playbackBarBottom":5,"progressBarBackgroundColorRatios":[0],"data":{"name":"Main Viewer"},"playbackBarBackgroundColor":["#FFFFFF"],"playbackBarHeight":10,"minHeight":25,"progressBorderColor":"#000000","minWidth":50,"progressBarBackgroundColor":["#3399FF"],"toolTipShadowBlurRadius":1,"playbackBarProgressBorderSize":0,"playbackBarHeadWidth":6,"playbackBarBackgroundColorDirection":"vertical","subtitlesTextShadowOpacity":1,"playbackBarRight":0,"playbackBarProgressBackgroundColor":["#3399FF"],"progressBackgroundColor":["#000000"],"progressHeight":2,"progressBorderSize":0,"propagateClick":false,"progressBottom":10,"progressBarBorderRadius":2,"toolTipPaddingLeft":3,"playbackBarHeadShadowOpacity":0.7,"progressBarBorderSize":0,"class":"ViewerArea","playbackBarProgressBorderRadius":0,"subtitlesTextShadowHorizontalLength":1,"vrPointerSelectionColor":"#FF6600","playbackBarBackgroundOpacity":1,"playbackBarProgressBackgroundColorRatios":[0],"toolTipBorderRadius":1,"subtitlesFontColor":"#FFFFFF","vrPointerSelectionTime":2000,"playbackBarBorderColor":"#FFFFFF","subtitlesBottom":50,"progressBorderRadius":2,"playbackBarProgressBorderColor":"#000000","playbackBarBorderRadius":0,"progressLeft":"33%","firstTransitionDuration":0,"subtitlesTop":0,"playbackBarHeadBorderRadius":0,"playbackBarHeadBorderColor":"#000000","subtitlesTextShadowVerticalLength":1,"id":"MainViewer_mobile","playbackBarBorderSize":0,"subtitlesTextShadowColor":"#000000","surfaceReticleColor":"#FFFFFF","toolTipPaddingRight":3,"toolTipTextShadowColor":"#000000","subtitlesFontSize":"3vmin","vrThumbstickRotationStep":20,"subtitlesBackgroundOpacity":0.2,"surfaceReticleSelectionColor":"#FFFFFF","toolTipShadowColor":"#333138","playbackBarHeadShadowBlurRadius":1.5,"playbackBarHeadHeight":15,"playbackBarLeft":0,"playbackBarHeadShadowColor":"#000000","subtitlesBorderColor":"#FFFFFF","playbackBarHeadBackgroundColorRatios":[0,1],"toolTipFontFamily":"Arial","playbackBarHeadBorderSize":0,"playbackBarHeadShadow":true,"toolTipBorderColor":"#767676","subtitlesFontFamily":"Arial","toolTipFontColor":"#606060","height":"100%","toolTipBackgroundColor":"#F6F6F6","progressBackgroundColorRatios":[0],"width":"100%"},{"vfov":85.74,"hfovMin":"120%","frames":[{"class":"CubicPanoramaFrame","cube":{"levels":[{"class":"TiledImageResourceLevel","width":24576,"url":"media/panorama_78D60E75_74E3_6C0D_41DA_376C84E4E6EF_0/{face}/0/{row}_{column}.webp","colCount":48,"height":4096,"tags":"ondemand","rowCount":8},{"class":"TiledImageResourceLevel","width":12288,"url":"media/panorama_78D60E75_74E3_6C0D_41DA_376C84E4E6EF_0/{face}/1/{row}_{column}.webp","colCount":24,"height":2048,"tags":"ondemand","rowCount":4},{"class":"TiledImageResourceLevel","width":6144,"url":"media/panorama_78D60E75_74E3_6C0D_41DA_376C84E4E6EF_0/{face}/2/{row}_{column}.webp","colCount":12,"height":1024,"tags":"ondemand","rowCount":2},{"class":"TiledImageResourceLevel","width":3072,"url":"media/panorama_78D60E75_74E3_6C0D_41DA_376C84E4E6EF_0/{face}/3/{row}_{column}.webp","colCount":6,"height":512,"tags":["ondemand","preload"],"rowCount":1}],"class":"ImageResource"},"thumbnailUrl":"media/panorama_78D60E75_74E3_6C0D_41DA_376C84E4E6EF_t.webp"}],"thumbnailUrl":"media/panorama_78D60E75_74E3_6C0D_41DA_376C84E4E6EF_t.webp","pitch":0.17,"class":"Panorama","id":"panorama_78D60E75_74E3_6C0D_41DA_376C84E4E6EF","data":{"label":"VIEW 5"},"hfov":360,"hfovMax":130,"label":trans('panorama_78D60E75_74E3_6C0D_41DA_376C84E4E6EF.label')},{"class":"PanoramaCameraSequence","movements":[{"yawDelta":18.5,"class":"DistancePanoramaCameraMovement","easing":"cubic_in","yawSpeed":7.96},{"yawDelta":323000,"class":"DistancePanoramaCameraMovement","yawSpeed":7.96},{"yawDelta":18.5,"class":"DistancePanoramaCameraMovement","easing":"cubic_out","yawSpeed":7.96}],"id":"sequence_7FAB8168_74E3_F404_41D5_EEFB4DA31D5E"},{"class":"LensFlarePanoramaOverlay","yaw":81.7,"pitch":73.17,"bleaching":0.7,"id":"overlay_DC5BF6E4_D1CC_2308_41BE_FC58A304D47B"},{"class":"PanoramaCameraSequence","movements":[{"yawDelta":18.5,"class":"DistancePanoramaCameraMovement","easing":"cubic_in","yawSpeed":7.96},{"yawDelta":323000,"class":"DistancePanoramaCameraMovement","yawSpeed":7.96},{"yawDelta":18.5,"class":"DistancePanoramaCameraMovement","easing":"cubic_out","yawSpeed":7.96}],"id":"sequence_7FABC168_74E3_F404_41B3_0BE798A65566"},{"class":"PanoramaCameraSequence","movements":[{"yawDelta":18.5,"class":"DistancePanoramaCameraMovement","easing":"cubic_in","yawSpeed":7.96},{"yawDelta":323000,"class":"DistancePanoramaCameraMovement","yawSpeed":7.96},{"yawDelta":18.5,"class":"DistancePanoramaCameraMovement","easing":"cubic_out","yawSpeed":7.96}],"id":"sequence_7FAA6168_74E3_F404_41A0_0EDCF095F593"},{"class":"PanoramaCameraSequence","movements":[{"yawDelta":18.5,"class":"DistancePanoramaCameraMovement","easing":"cubic_in","yawSpeed":7.96},{"yawDelta":323000,"class":"DistancePanoramaCameraMovement","yawSpeed":7.96},{"yawDelta":18.5,"class":"DistancePanoramaCameraMovement","easing":"cubic_out","yawSpeed":7.96}],"id":"sequence_7FBE5E3B_74E3_2C05_41A3_31DC0746C7DC"},{"class":"LensFlarePanoramaOverlay","yaw":81.25,"pitch":68.75,"bleaching":0.7,"id":"overlay_DF8C6F9C_D1CC_6138_41B6_E346B9A641B1"},{"class":"PanoramaCameraSequence","movements":[{"yawDelta":18.5,"class":"DistancePanoramaCameraMovement","easing":"cubic_in","yawSpeed":7.96},{"yawDelta":323000,"class":"DistancePanoramaCameraMovement","yawSpeed":7.96},{"yawDelta":18.5,"class":"DistancePanoramaCameraMovement","easing":"cubic_out","yawSpeed":7.96}],"id":"sequence_7FABE168_74E3_F403_41D6_9E61DE64B7C4"},{"class":"PanoramaCameraSequence","movements":[{"yawDelta":18.5,"class":"DistancePanoramaCameraMovement","easing":"cubic_in","yawSpeed":7.96},{"yawDelta":323000,"class":"DistancePanoramaCameraMovement","yawSpeed":7.96},{"yawDelta":18.5,"class":"DistancePanoramaCameraMovement","easing":"cubic_out","yawSpeed":7.96}],"id":"sequence_7FABA168_74E3_F404_41D2_4B5C88CFC32D"},{"class":"LensFlarePanoramaOverlay","yaw":82.14,"pitch":65.65,"bleaching":0.7,"id":"overlay_DF2ACD98_D1CC_2139_415C_E51032DA8F9C"}],"minHeight":0,"backgroundColor":["#FFFFFF"],"minWidth":0,"defaultMenu":["fullscreen","mute","rotation"],"gap":10,"backgroundColorRatios":[0],"start":"this.init(); this.syncPlaylists([this.mainPlayList,this.DropDown_7A2ABAA2_74E1_7407_41D1_FEF577625E1B_mobile_playlist]); if(!this.get('fullscreenAvailable')) { [this.IconButton_7BE05E98_74E7_6C04_41B1_53DD8FFC6F97_mobile].forEach(function(component) { if(component.get('class') != 'ViewerArea') component.set('visible', false); }) }","propagateClick":false,"creationPolicy":"inAdvance","watermark":false,"buttonToggleFullscreen":"this.IconButton_7BE05E98_74E7_6C04_41B1_53DD8FFC6F97_mobile","class":"Player","scrollBarMargin":2};
if (script['data'] == undefined)
    script['data'] = {};
script['data']['translateObjs'] = translateObjs, script['data']['createQuizConfig'] = function () {
    var a = {};
    return this['get']('data')['translateObjs'] = translateObjs, a;
}, TDV['PlayerAPI']['defineScript'](script);
//# sourceMappingURL=script_device.js.map
})();
//Generated with v2025.1.14, Fri Jul 4 2025