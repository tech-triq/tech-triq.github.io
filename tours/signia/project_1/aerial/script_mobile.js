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
var script = {"backgroundColorRatios":[0],"defaultMenu":["fullscreen","mute","rotation"],"propagateClick":false,"gap":10,"id":"rootPlayer","data":{"defaultLocale":"en","displayTooltipInTouchScreens":true,"name":"Player880","history":{},"locales":{"en":"locale/en.txt"},"textToSpeechConfig":{"pitch":1,"speechOnTooltip":false,"speechOnInfoWindow":false,"stopBackgroundAudio":false,"speechOnQuizQuestion":false,"rate":1,"volume":1}},"scrollBarColor":"#000000","layout":"absolute","backgroundColor":["#FFFFFF"],"creationPolicy":"inAdvance","start":"this.init(); this.syncPlaylists([this.mainPlayList,this.DropDown_7A2ABAA2_74E1_7407_41D1_FEF577625E1B_mobile_playlist]); if(!this.get('fullscreenAvailable')) { [this.IconButton_7BE05E98_74E7_6C04_41B1_53DD8FFC6F97_mobile].forEach(function(component) { if(component.get('class') != 'ViewerArea') component.set('visible', false); }) }","class":"Player","scrollBarMargin":2,"buttonToggleFullscreen":"this.IconButton_7BE05E98_74E7_6C04_41B1_53DD8FFC6F97_mobile","hash": "55e6cbcec4e22cdc65dc9c99f095dda3a7b052432e3aa351787660d4baf5a47e", "definitions": [{"hfovMax":130,"vfov":180,"thumbnailUrl":"media/panorama_AE2868CB_A316_A1DB_41D5_241245E32E24_t.webp","hfov":360,"frames":[{"thumbnailUrl":"media/panorama_AE2868CB_A316_A1DB_41D5_241245E32E24_t.webp","cube":{"levels":[{"width":24576,"url":"media/panorama_AE2868CB_A316_A1DB_41D5_241245E32E24_0/{face}/0/{row}_{column}.webp","rowCount":8,"class":"TiledImageResourceLevel","height":4096,"tags":"ondemand","colCount":48},{"width":12288,"url":"media/panorama_AE2868CB_A316_A1DB_41D5_241245E32E24_0/{face}/1/{row}_{column}.webp","rowCount":4,"class":"TiledImageResourceLevel","height":2048,"tags":"ondemand","colCount":24},{"width":6144,"url":"media/panorama_AE2868CB_A316_A1DB_41D5_241245E32E24_0/{face}/2/{row}_{column}.webp","rowCount":2,"class":"TiledImageResourceLevel","height":1024,"tags":"ondemand","colCount":12},{"width":3072,"url":"media/panorama_AE2868CB_A316_A1DB_41D5_241245E32E24_0/{face}/3/{row}_{column}.webp","rowCount":1,"class":"TiledImageResourceLevel","height":512,"tags":["ondemand","preload"],"colCount":6}],"class":"ImageResource"},"class":"CubicPanoramaFrame"}],"hfovMin":"120%","data":{"label":"20TH FLOOR"},"class":"Panorama","id":"panorama_AE2868CB_A316_A1DB_41D5_241245E32E24","label":trans('panorama_AE2868CB_A316_A1DB_41D5_241245E32E24.label')},{"transparencyActive":true,"toolTipFontColor":"#606060","toolTipShadowBlurRadius":1,"propagateClick":false,"id":"IconButton_7BE05E98_74E7_6C04_41B1_53DD8FFC6F97_mobile","data":{"name":"IconButton1493"},"backgroundOpacity":0,"iconURL":"skin/IconButton_7BE05E98_74E7_6C04_41B1_53DD8FFC6F97.png","tabIndex":0,"maxHeight":64,"toolTipPaddingLeft":3,"class":"IconButton","horizontalAlign":"center","toolTipBorderColor":"#767676","minHeight":1,"toolTipFontSize":6,"minWidth":1,"toolTipTextShadowBlurRadius":1,"toolTipTextShadowColor":"#000000","toolTipFontFamily":"Arial","toolTipBackgroundColor":"#F6F6F6","verticalAlign":"middle","toolTipPaddingRight":3,"mode":"toggle","maxWidth":64,"height":20,"width":20,"toolTip":trans('IconButton_7BE05E98_74E7_6C04_41B1_53DD8FFC6F97_mobile.toolTip'),"toolTipShadowColor":"#333333","toolTipBorderRadius":1},{"hfovMax":130,"vfov":180,"thumbnailUrl":"media/panorama_A4418E01_A804_B65F_41C4_E2B85A1E123F_t.webp","hfov":360,"frames":[{"thumbnailUrl":"media/panorama_A4418E01_A804_B65F_41C4_E2B85A1E123F_t.webp","cube":{"levels":[{"width":24576,"url":"media/panorama_A4418E01_A804_B65F_41C4_E2B85A1E123F_0/{face}/0/{row}_{column}.webp","rowCount":8,"class":"TiledImageResourceLevel","height":4096,"tags":"ondemand","colCount":48},{"width":12288,"url":"media/panorama_A4418E01_A804_B65F_41C4_E2B85A1E123F_0/{face}/1/{row}_{column}.webp","rowCount":4,"class":"TiledImageResourceLevel","height":2048,"tags":"ondemand","colCount":24},{"width":6144,"url":"media/panorama_A4418E01_A804_B65F_41C4_E2B85A1E123F_0/{face}/2/{row}_{column}.webp","rowCount":2,"class":"TiledImageResourceLevel","height":1024,"tags":"ondemand","colCount":12},{"width":3072,"url":"media/panorama_A4418E01_A804_B65F_41C4_E2B85A1E123F_0/{face}/3/{row}_{column}.webp","rowCount":1,"class":"TiledImageResourceLevel","height":512,"tags":["ondemand","preload"],"colCount":6}],"class":"ImageResource"},"class":"CubicPanoramaFrame"}],"hfovMin":"120%","data":{"label":"5TH FLOOR"},"class":"Panorama","id":"panorama_A4418E01_A804_B65F_41C4_E2B85A1E123F","label":trans('panorama_A4418E01_A804_B65F_41C4_E2B85A1E123F.label')},{"enterPointingToHorizon":true,"displayMovements":[{"duration":1000,"class":"TargetRotationalCameraDisplayMovement"},{"targetStereographicFactor":0,"duration":3000,"easing":"cubic_in_out","targetPitch":2.72,"class":"TargetRotationalCameraDisplayMovement"}],"initialSequence":"this.sequence_7FBE5E3B_74E3_2C05_41A3_31DC0746C7DC","displayOriginPosition":{"pitch":-90,"stereographicFactor":1,"hfov":165,"yaw":-91.19,"class":"RotationalCameraDisplayPosition"},"class":"PanoramaCamera","initialPosition":{"pitch":2.72,"yaw":-91.19,"class":"PanoramaCameraPosition"},"id":"panorama_781C7F83_74E2_EC04_41B3_242EDD3C245B_camera"},{"class":"PanoramaCamera","enterPointingToHorizon":true,"initialPosition":{"pitch":0.49,"yaw":-101.52,"class":"PanoramaCameraPosition"},"initialSequence":"this.sequence_7FAA6168_74E3_F404_41A0_0EDCF095F593","id":"panorama_A4418E01_A804_B65F_41C4_E2B85A1E123F_camera"},{"class":"PanoramaCamera","enterPointingToHorizon":true,"initialPosition":{"pitch":-0.16,"yaw":106.01,"class":"PanoramaCameraPosition"},"initialSequence":"this.sequence_7FABA168_74E3_F404_41D2_4B5C88CFC32D","id":"panorama_AECB2666_A317_E0CD_41D2_DB274335B023_camera"},{"popUpBackgroundColor":"#FFFFFF","popUpFontColor":"#000000","backgroundColorRatios":[0],"paddingRight":2.5,"selectedPopUpBackgroundColor":"#333333","propagateClick":false,"borderRadius":0,"paddingTop":0,"rollOverPopUpBackgroundColor":"#FFFFFF","paddingBottom":0,"id":"DropDown_7A2ABAA2_74E1_7407_41D1_FEF577625E1B_mobile","popUpPaddingRight":0,"fontFamily":"Arial","borderSize":0,"selectedPopUpFontColor":"#FFFFFF","backgroundOpacity":0.9,"popUpPaddingTop":0,"backgroundColor":["#666666"],"fontSize":7,"label":trans('DropDown_7A2ABAA2_74E1_7407_41D1_FEF577625E1B_mobile.label'),"popUpShadow":false,"class":"DropDown","popUpBackgroundOpacity":0.9,"horizontalAlign":"center","popUpPaddingLeft":0,"data":{"name":"DropDown1204"},"minHeight":10,"minWidth":100,"tabIndex":0,"popUpPaddingBottom":0,"height":"58.288%","paddingLeft":2.5,"width":"17.551%","fontColor":"#FFFFFF","arrowColor":"#FFFFFF","playList":"this.DropDown_7A2ABAA2_74E1_7407_41D1_FEF577625E1B_mobile_playlist"},{"backgroundColorRatios":[],"paddingRight":10,"overflow":"scroll","propagateClick":false,"gap":5,"paddingBottom":7.5,"id":"Container_79455DB8_74E1_6C03_41D2_55B8949D93FC_mobile","data":{"name":"Container1929","initialScale":0.5},"scrollBarColor":"#000000","layout":"horizontal","backgroundOpacity":0.3,"backgroundColor":[],"left":"0%","right":"5%","creationPolicy":"inAdvance","verticalAlign":"bottom","scrollBarMargin":1,"horizontalAlign":"right","class":"Container","minHeight":1,"minWidth":1,"top":"90%","bottom":"0%","children":["this.DropDown_7A2ABAA2_74E1_7407_41D1_FEF577625E1B_mobile"],"scrollBarWidth":5},{"class":"PanoramaCamera","enterPointingToHorizon":true,"initialPosition":{"pitch":-0.72,"yaw":169.18,"class":"PanoramaCameraPosition"},"initialSequence":"this.sequence_7FAB8168_74E3_F404_41D5_EEFB4DA31D5E","id":"panorama_A4C027F3_A803_B5A3_41D1_31F0CC5B920E_camera"},{"hfovMax":130,"vfov":85.74,"pitch":0.17,"thumbnailUrl":"media/panorama_78D60E75_74E3_6C0D_41DA_376C84E4E6EF_t.webp","hfov":360,"frames":[{"thumbnailUrl":"media/panorama_78D60E75_74E3_6C0D_41DA_376C84E4E6EF_t.webp","cube":{"levels":[{"width":24576,"url":"media/panorama_78D60E75_74E3_6C0D_41DA_376C84E4E6EF_0/{face}/0/{row}_{column}.webp","rowCount":8,"class":"TiledImageResourceLevel","height":4096,"tags":"ondemand","colCount":48},{"width":12288,"url":"media/panorama_78D60E75_74E3_6C0D_41DA_376C84E4E6EF_0/{face}/1/{row}_{column}.webp","rowCount":4,"class":"TiledImageResourceLevel","height":2048,"tags":"ondemand","colCount":24},{"width":6144,"url":"media/panorama_78D60E75_74E3_6C0D_41DA_376C84E4E6EF_0/{face}/2/{row}_{column}.webp","rowCount":2,"class":"TiledImageResourceLevel","height":1024,"tags":"ondemand","colCount":12},{"width":3072,"url":"media/panorama_78D60E75_74E3_6C0D_41DA_376C84E4E6EF_0/{face}/3/{row}_{column}.webp","rowCount":1,"class":"TiledImageResourceLevel","height":512,"tags":["ondemand","preload"],"colCount":6}],"class":"ImageResource"},"class":"CubicPanoramaFrame"}],"hfovMin":"120%","data":{"label":"VIEW 5"},"class":"Panorama","id":"panorama_78D60E75_74E3_6C0D_41DA_376C84E4E6EF","label":trans('panorama_78D60E75_74E3_6C0D_41DA_376C84E4E6EF.label')},{"class":"PanoramaCamera","enterPointingToHorizon":true,"initialPosition":{"pitch":0.41,"yaw":-109.08,"class":"PanoramaCameraPosition"},"initialSequence":"this.sequence_7FABE168_74E3_F403_41D6_9E61DE64B7C4","id":"panorama_78D60E75_74E3_6C0D_41DA_376C84E4E6EF_camera"},{"aaEnabled":true,"mouseControlMode":"drag_rotation","arrowKeysAction":"translate","id":"MainViewer_mobilePanoramaPlayer","touchControlMode":"drag_rotation","class":"PanoramaPlayer","keepModel3DLoadedWithoutLocation":true,"displayPlaybackBar":true,"viewerArea":"this.MainViewer_mobile"},{"backgroundColorRatios":[],"paddingRight":7.5,"overflow":"scroll","propagateClick":false,"gap":5,"paddingBottom":7.5,"id":"Container_7A1C0E95_74E7_6C0C_41CE_44FE0BB037D3_mobile","data":{"name":"Container1929","initialScale":0.5},"scrollBarColor":"#000000","layout":"horizontal","backgroundOpacity":0.3,"backgroundColor":[],"left":"0%","right":"0%","creationPolicy":"inAdvance","verticalAlign":"bottom","scrollBarMargin":1,"horizontalAlign":"right","class":"Container","minHeight":1,"minWidth":1,"top":"90%","bottom":"0%","children":["this.IconButton_7BE05E98_74E7_6C04_41B1_53DD8FFC6F97_mobile"],"scrollBarWidth":5},{"hfovMax":130,"vfov":180,"thumbnailUrl":"media/panorama_A4C027F3_A803_B5A3_41D1_31F0CC5B920E_t.webp","hfov":360,"frames":[{"thumbnailUrl":"media/panorama_A4C027F3_A803_B5A3_41D1_31F0CC5B920E_t.webp","cube":{"levels":[{"width":24576,"url":"media/panorama_A4C027F3_A803_B5A3_41D1_31F0CC5B920E_0/{face}/0/{row}_{column}.webp","rowCount":8,"class":"TiledImageResourceLevel","height":4096,"tags":"ondemand","colCount":48},{"width":12288,"url":"media/panorama_A4C027F3_A803_B5A3_41D1_31F0CC5B920E_0/{face}/1/{row}_{column}.webp","rowCount":4,"class":"TiledImageResourceLevel","height":2048,"tags":"ondemand","colCount":24},{"width":6144,"url":"media/panorama_A4C027F3_A803_B5A3_41D1_31F0CC5B920E_0/{face}/2/{row}_{column}.webp","rowCount":2,"class":"TiledImageResourceLevel","height":1024,"tags":"ondemand","colCount":12},{"width":3072,"url":"media/panorama_A4C027F3_A803_B5A3_41D1_31F0CC5B920E_0/{face}/3/{row}_{column}.webp","rowCount":1,"class":"TiledImageResourceLevel","height":512,"tags":["ondemand","preload"],"colCount":6}],"class":"ImageResource"},"class":"CubicPanoramaFrame"}],"hfovMin":"120%","data":{"label":"10TH FLOOR"},"class":"Panorama","id":"panorama_A4C027F3_A803_B5A3_41D1_31F0CC5B920E","label":trans('panorama_A4C027F3_A803_B5A3_41D1_31F0CC5B920E.label')},{"backgroundColorRatios":[],"propagateClick":false,"id":"IconButton_611DD7D4_7527_76CF_4182_B608E438C8C3_mobile","data":{"name":"IconButton"},"backgroundOpacity":0.3,"iconURL":"skin/IconButton_611DD7D4_7527_76CF_4182_B608E438C8C3.png","backgroundColor":[],"tabIndex":0,"interactionEnabled":false,"class":"IconButton","verticalAlign":"middle","horizontalAlign":"center","minHeight":1,"minWidth":1,"transparencyActive":true,"width":452.6,"height":56.35},{"items":[{"camera":"this.panorama_781C7F83_74E2_EC04_41B3_242EDD3C245B_camera","media":"this.panorama_781C7F83_74E2_EC04_41B3_242EDD3C245B","class":"PanoramaPlayListItem","player":"this.MainViewer_mobilePanoramaPlayer","begin":"this.setEndToItemIndex(this.mainPlayList, 0, 1)"},{"camera":"this.panorama_AE2868CB_A316_A1DB_41D5_241245E32E24_camera","media":"this.panorama_AE2868CB_A316_A1DB_41D5_241245E32E24","class":"PanoramaPlayListItem","player":"this.MainViewer_mobilePanoramaPlayer","begin":"this.setEndToItemIndex(this.mainPlayList, 1, 2)"},{"camera":"this.panorama_AECB2666_A317_E0CD_41D2_DB274335B023_camera","media":"this.panorama_AECB2666_A317_E0CD_41D2_DB274335B023","class":"PanoramaPlayListItem","player":"this.MainViewer_mobilePanoramaPlayer","begin":"this.setEndToItemIndex(this.mainPlayList, 2, 3)"},{"camera":"this.panorama_A4C027F3_A803_B5A3_41D1_31F0CC5B920E_camera","media":"this.panorama_A4C027F3_A803_B5A3_41D1_31F0CC5B920E","class":"PanoramaPlayListItem","player":"this.MainViewer_mobilePanoramaPlayer","begin":"this.setEndToItemIndex(this.mainPlayList, 3, 4)"},{"camera":"this.panorama_A4418E01_A804_B65F_41C4_E2B85A1E123F_camera","media":"this.panorama_A4418E01_A804_B65F_41C4_E2B85A1E123F","class":"PanoramaPlayListItem","player":"this.MainViewer_mobilePanoramaPlayer","begin":"this.setEndToItemIndex(this.mainPlayList, 4, 5)"},{"camera":"this.panorama_78D60E75_74E3_6C0D_41DA_376C84E4E6EF_camera","media":"this.panorama_78D60E75_74E3_6C0D_41DA_376C84E4E6EF","end":"this.trigger('tourEnded')","player":"this.MainViewer_mobilePanoramaPlayer","begin":"this.setEndToItemIndex(this.mainPlayList, 5, 0)","class":"PanoramaPlayListItem"}],"id":"mainPlayList","class":"PlayList"},{"hfovMax":130,"vfov":180,"thumbnailUrl":"media/panorama_AECB2666_A317_E0CD_41D2_DB274335B023_t.webp","hfov":360,"frames":[{"thumbnailUrl":"media/panorama_AECB2666_A317_E0CD_41D2_DB274335B023_t.webp","cube":{"levels":[{"width":24576,"url":"media/panorama_AECB2666_A317_E0CD_41D2_DB274335B023_0/{face}/0/{row}_{column}.webp","rowCount":8,"class":"TiledImageResourceLevel","height":4096,"tags":"ondemand","colCount":48},{"width":12288,"url":"media/panorama_AECB2666_A317_E0CD_41D2_DB274335B023_0/{face}/1/{row}_{column}.webp","rowCount":4,"class":"TiledImageResourceLevel","height":2048,"tags":"ondemand","colCount":24},{"width":6144,"url":"media/panorama_AECB2666_A317_E0CD_41D2_DB274335B023_0/{face}/2/{row}_{column}.webp","rowCount":2,"class":"TiledImageResourceLevel","height":1024,"tags":"ondemand","colCount":12},{"width":3072,"url":"media/panorama_AECB2666_A317_E0CD_41D2_DB274335B023_0/{face}/3/{row}_{column}.webp","rowCount":1,"class":"TiledImageResourceLevel","height":512,"tags":["ondemand","preload"],"colCount":6}],"class":"ImageResource"},"class":"CubicPanoramaFrame"}],"hfovMin":"120%","data":{"label":"15TH FLOOR"},"class":"Panorama","id":"panorama_AECB2666_A317_E0CD_41D2_DB274335B023","label":trans('panorama_AECB2666_A317_E0CD_41D2_DB274335B023.label')},{"class":"PanoramaCamera","enterPointingToHorizon":true,"initialPosition":{"pitch":1.09,"yaw":-101.23,"class":"PanoramaCameraPosition"},"initialSequence":"this.sequence_7FABC168_74E3_F404_41B3_0BE798A65566","id":"panorama_AE2868CB_A316_A1DB_41D5_241245E32E24_camera"},{"playbackBarHeadBackgroundColorRatios":[0,1],"progressBackgroundColorRatios":[0],"toolTipShadowBlurRadius":1,"playbackBarHeadShadow":true,"progressRight":"33%","playbackBarHeadBorderSize":0,"subtitlesBackgroundColor":"#000000","progressOpacity":0.7,"subtitlesGap":0,"progressBarBackgroundColorDirection":"horizontal","data":{"name":"Main Viewer"},"vrPointerSelectionColor":"#FF6600","progressBarBorderColor":"#000000","progressBarBackgroundColorRatios":[0],"playbackBarHeadBackgroundColor":["#111111","#666666"],"toolTipPaddingLeft":3,"playbackBarBottom":5,"progressBorderColor":"#000000","progressBarBackgroundColor":["#3399FF"],"vrPointerSelectionTime":2000,"minHeight":25,"toolTipTextShadowColor":"#000000","playbackBarBackgroundColor":["#FFFFFF"],"minWidth":50,"subtitlesTextShadowOpacity":1,"playbackBarHeight":10,"toolTipFontSize":"1.11vmin","toolTipFontFamily":"Arial","progressBackgroundColor":["#000000"],"playbackBarBackgroundOpacity":1,"toolTipShadowColor":"#333138","playbackBarBackgroundColorDirection":"vertical","toolTipPaddingRight":3,"progressBottom":10,"playbackBarRight":0,"playbackBarProgressBorderRadius":0,"playbackBarProgressBorderSize":0,"playbackBarProgressBackgroundColor":["#3399FF"],"playbackBarHeadWidth":6,"progressBorderSize":0,"progressBarBorderSize":0,"progressHeight":2,"progressBarBorderRadius":2,"playbackBarHeadShadowOpacity":0.7,"subtitlesBottom":50,"subtitlesFontColor":"#FFFFFF","progressBorderRadius":2,"surfaceReticleColor":"#FFFFFF","toolTipFontColor":"#606060","playbackBarProgressBackgroundColorRatios":[0],"propagateClick":false,"vrThumbstickRotationStep":20,"firstTransitionDuration":0,"subtitlesTop":0,"progressLeft":"33%","id":"MainViewer_mobile","playbackBarBorderColor":"#FFFFFF","playbackBarProgressBorderColor":"#000000","playbackBarBorderRadius":0,"subtitlesTextShadowColor":"#000000","playbackBarHeadBorderRadius":0,"playbackBarHeadBorderColor":"#000000","class":"ViewerArea","subtitlesTextShadowVerticalLength":1,"surfaceReticleSelectionColor":"#FFFFFF","playbackBarBorderSize":0,"toolTipBorderColor":"#767676","subtitlesFontSize":"3vmin","toolTipTextShadowBlurRadius":1,"subtitlesBackgroundOpacity":0.2,"toolTipBackgroundColor":"#F6F6F6","subtitlesBorderColor":"#FFFFFF","vrPointerColor":"#FFFFFF","subtitlesTextShadowHorizontalLength":1,"toolTipBorderRadius":1,"height":"100%","subtitlesFontFamily":"Arial","playbackBarHeadShadowBlurRadius":1.5,"playbackBarLeft":0,"width":"100%","playbackBarHeadHeight":15,"playbackBarHeadShadowColor":"#000000"},{"paddingRight":2.5,"overflow":"scroll","propagateClick":false,"scrollBarColor":"#000000","gap":5,"id":"Container_7BDDA77E_74EF_3CFC_41D1_0A77EE3BAEC0_mobile","data":{"name":"Container"},"layout":"horizontal","backgroundOpacity":0,"right":"0%","creationPolicy":"inAdvance","scrollBarMargin":1,"class":"Container","verticalAlign":"middle","horizontalAlign":"right","minHeight":10,"minWidth":10,"bottom":"30%","height":"40%","children":["this.IconButton_611DD7D4_7527_76CF_4182_B608E438C8C3_mobile"],"width":"100%","scrollBarWidth":5},{"items":[{"player":"this.MainViewer_mobilePanoramaPlayer","camera":"this.panorama_781C7F83_74E2_EC04_41B3_242EDD3C245B_camera","media":"this.panorama_781C7F83_74E2_EC04_41B3_242EDD3C245B","class":"PanoramaPlayListItem"},{"player":"this.MainViewer_mobilePanoramaPlayer","camera":"this.panorama_AE2868CB_A316_A1DB_41D5_241245E32E24_camera","media":"this.panorama_AE2868CB_A316_A1DB_41D5_241245E32E24","class":"PanoramaPlayListItem"},{"player":"this.MainViewer_mobilePanoramaPlayer","camera":"this.panorama_AECB2666_A317_E0CD_41D2_DB274335B023_camera","media":"this.panorama_AECB2666_A317_E0CD_41D2_DB274335B023","class":"PanoramaPlayListItem"},{"player":"this.MainViewer_mobilePanoramaPlayer","camera":"this.panorama_A4C027F3_A803_B5A3_41D1_31F0CC5B920E_camera","media":"this.panorama_A4C027F3_A803_B5A3_41D1_31F0CC5B920E","class":"PanoramaPlayListItem"},{"player":"this.MainViewer_mobilePanoramaPlayer","camera":"this.panorama_A4418E01_A804_B65F_41C4_E2B85A1E123F_camera","media":"this.panorama_A4418E01_A804_B65F_41C4_E2B85A1E123F","class":"PanoramaPlayListItem"}],"id":"DropDown_7A2ABAA2_74E1_7407_41D1_FEF577625E1B_mobile_playlist","class":"PlayList"},{"vfov":180,"hfovMax":130,"thumbnailUrl":"media/panorama_781C7F83_74E2_EC04_41B3_242EDD3C245B_t.webp","hfov":360,"frames":[{"thumbnailUrl":"media/panorama_781C7F83_74E2_EC04_41B3_242EDD3C245B_t.webp","cube":{"levels":[{"width":24576,"url":"media/panorama_781C7F83_74E2_EC04_41B3_242EDD3C245B_0/{face}/0/{row}_{column}.webp","rowCount":8,"class":"TiledImageResourceLevel","height":4096,"tags":"ondemand","colCount":48},{"width":12288,"url":"media/panorama_781C7F83_74E2_EC04_41B3_242EDD3C245B_0/{face}/1/{row}_{column}.webp","rowCount":4,"class":"TiledImageResourceLevel","height":2048,"tags":"ondemand","colCount":24},{"width":6144,"url":"media/panorama_781C7F83_74E2_EC04_41B3_242EDD3C245B_0/{face}/2/{row}_{column}.webp","rowCount":2,"class":"TiledImageResourceLevel","height":1024,"tags":"ondemand","colCount":12},{"width":3072,"url":"media/panorama_781C7F83_74E2_EC04_41B3_242EDD3C245B_0/{face}/3/{row}_{column}.webp","rowCount":1,"class":"TiledImageResourceLevel","height":512,"tags":["ondemand","preload"],"colCount":6}],"class":"ImageResource"},"class":"CubicPanoramaFrame"}],"class":"Panorama","label":trans('panorama_781C7F83_74E2_EC04_41B3_242EDD3C245B.label'),"id":"panorama_781C7F83_74E2_EC04_41B3_242EDD3C245B","data":{"label":"AERIAL VIEW"}},{"id":"sequence_7FBE5E3B_74E3_2C05_41A3_31DC0746C7DC","class":"PanoramaCameraSequence","movements":[{"yawDelta":18.5,"easing":"cubic_in","yawSpeed":7.96,"class":"DistancePanoramaCameraMovement"},{"yawDelta":323000,"yawSpeed":7.96,"class":"DistancePanoramaCameraMovement"},{"yawDelta":18.5,"easing":"cubic_out","yawSpeed":7.96,"class":"DistancePanoramaCameraMovement"}]},{"id":"sequence_7FAA6168_74E3_F404_41A0_0EDCF095F593","class":"PanoramaCameraSequence","movements":[{"yawDelta":18.5,"easing":"cubic_in","yawSpeed":7.96,"class":"DistancePanoramaCameraMovement"},{"yawDelta":323000,"yawSpeed":7.96,"class":"DistancePanoramaCameraMovement"},{"yawDelta":18.5,"easing":"cubic_out","yawSpeed":7.96,"class":"DistancePanoramaCameraMovement"}]},{"id":"sequence_7FABA168_74E3_F404_41D2_4B5C88CFC32D","class":"PanoramaCameraSequence","movements":[{"yawDelta":18.5,"easing":"cubic_in","yawSpeed":7.96,"class":"DistancePanoramaCameraMovement"},{"yawDelta":323000,"yawSpeed":7.96,"class":"DistancePanoramaCameraMovement"},{"yawDelta":18.5,"easing":"cubic_out","yawSpeed":7.96,"class":"DistancePanoramaCameraMovement"}]},{"id":"sequence_7FAB8168_74E3_F404_41D5_EEFB4DA31D5E","class":"PanoramaCameraSequence","movements":[{"yawDelta":18.5,"easing":"cubic_in","yawSpeed":7.96,"class":"DistancePanoramaCameraMovement"},{"yawDelta":323000,"yawSpeed":7.96,"class":"DistancePanoramaCameraMovement"},{"yawDelta":18.5,"easing":"cubic_out","yawSpeed":7.96,"class":"DistancePanoramaCameraMovement"}]},{"id":"sequence_7FABE168_74E3_F403_41D6_9E61DE64B7C4","class":"PanoramaCameraSequence","movements":[{"yawDelta":18.5,"easing":"cubic_in","yawSpeed":7.96,"class":"DistancePanoramaCameraMovement"},{"yawDelta":323000,"yawSpeed":7.96,"class":"DistancePanoramaCameraMovement"},{"yawDelta":18.5,"easing":"cubic_out","yawSpeed":7.96,"class":"DistancePanoramaCameraMovement"}]},{"id":"sequence_7FABC168_74E3_F404_41B3_0BE798A65566","class":"PanoramaCameraSequence","movements":[{"yawDelta":18.5,"easing":"cubic_in","yawSpeed":7.96,"class":"DistancePanoramaCameraMovement"},{"yawDelta":323000,"yawSpeed":7.96,"class":"DistancePanoramaCameraMovement"},{"yawDelta":18.5,"easing":"cubic_out","yawSpeed":7.96,"class":"DistancePanoramaCameraMovement"}]}],"minHeight":0,"minWidth":0,"watermark":false,"height":"100%","width":"100%","children":["this.MainViewer_mobile","this.Container_7A1C0E95_74E7_6C0C_41CE_44FE0BB037D3_mobile","this.Container_79455DB8_74E1_6C03_41D2_55B8949D93FC_mobile","this.Container_7BDDA77E_74EF_3CFC_41D1_0A77EE3BAEC0_mobile"],"scripts":{"isPanorama":TDV.Tour.Script.isPanorama,"updateDeepLink":TDV.Tour.Script.updateDeepLink,"_getObjectsByTags":TDV.Tour.Script._getObjectsByTags,"takeScreenshot":TDV.Tour.Script.takeScreenshot,"getMediaWidth":TDV.Tour.Script.getMediaWidth,"pauseGlobalAudio":TDV.Tour.Script.pauseGlobalAudio,"quizShowScore":TDV.Tour.Script.quizShowScore,"cloneGeneric":TDV.Tour.Script.cloneGeneric,"stopGlobalAudios":TDV.Tour.Script.stopGlobalAudios,"stopGlobalAudio":TDV.Tour.Script.stopGlobalAudio,"clone":TDV.Tour.Script.clone,"toggleMeasurement":TDV.Tour.Script.toggleMeasurement,"getPlayListItems":TDV.Tour.Script.getPlayListItems,"getActivePlayerWithViewer":TDV.Tour.Script.getActivePlayerWithViewer,"getPlayListItemByMedia":TDV.Tour.Script.getPlayListItemByMedia,"cleanAllMeasurements":TDV.Tour.Script.cleanAllMeasurements,"getPlayListsWithMedia":TDV.Tour.Script.getPlayListsWithMedia,"assignObjRecursively":TDV.Tour.Script.assignObjRecursively,"downloadFile":TDV.Tour.Script.downloadFile,"keepCompVisible":TDV.Tour.Script.keepCompVisible,"mixObject":TDV.Tour.Script.mixObject,"_initItemWithComps":TDV.Tour.Script._initItemWithComps,"setOverlayBehaviour":TDV.Tour.Script.setOverlayBehaviour,"quizShowTimeout":TDV.Tour.Script.quizShowTimeout,"setObjectsVisibilityByID":TDV.Tour.Script.setObjectsVisibilityByID,"sendAnalyticsData":TDV.Tour.Script.sendAnalyticsData,"setObjectsVisibilityByTags":TDV.Tour.Script.setObjectsVisibilityByTags,"stopTextToSpeech":TDV.Tour.Script.stopTextToSpeech,"updateIndexGlobalZoomImage":TDV.Tour.Script.updateIndexGlobalZoomImage,"setCameraSameSpotAsMedia":TDV.Tour.Script.setCameraSameSpotAsMedia,"createTween":TDV.Tour.Script.createTween,"openLink":TDV.Tour.Script.openLink,"getPixels":TDV.Tour.Script.getPixels,"setOverlaysVisibilityByTags":TDV.Tour.Script.setOverlaysVisibilityByTags,"playGlobalAudioWhilePlayActiveMedia":TDV.Tour.Script.playGlobalAudioWhilePlayActiveMedia,"copyToClipboard":TDV.Tour.Script.copyToClipboard,"getKey":TDV.Tour.Script.getKey,"setPanoramaCameraWithSpot":TDV.Tour.Script.setPanoramaCameraWithSpot,"updateVideoCues":TDV.Tour.Script.updateVideoCues,"setComponentVisibility":TDV.Tour.Script.setComponentVisibility,"setComponentsVisibilityByTags":TDV.Tour.Script.setComponentsVisibilityByTags,"getOverlaysByTags":TDV.Tour.Script.getOverlaysByTags,"updateMediaLabelFromPlayList":TDV.Tour.Script.updateMediaLabelFromPlayList,"getPanoramaOverlaysByTags":TDV.Tour.Script.getPanoramaOverlaysByTags,"setPlayListSelectedIndex":TDV.Tour.Script.setPlayListSelectedIndex,"quizStart":TDV.Tour.Script.quizStart,"setPanoramaCameraWithCurrentSpot":TDV.Tour.Script.setPanoramaCameraWithCurrentSpot,"getOverlaysByGroupname":TDV.Tour.Script.getOverlaysByGroupname,"copyObjRecursively":TDV.Tour.Script.copyObjRecursively,"enableVR":TDV.Tour.Script.enableVR,"_initTTSTooltips":TDV.Tour.Script._initTTSTooltips,"playAudioList":TDV.Tour.Script.playAudioList,"getMediaHeight":TDV.Tour.Script.getMediaHeight,"getQuizTotalObjectiveProperty":TDV.Tour.Script.getQuizTotalObjectiveProperty,"cleanSelectedMeasurements":TDV.Tour.Script.cleanSelectedMeasurements,"getPlayListItemIndexByMedia":TDV.Tour.Script.getPlayListItemIndexByMedia,"quizFinish":TDV.Tour.Script.quizFinish,"getActiveMediaWithViewer":TDV.Tour.Script.getActiveMediaWithViewer,"setMeasurementsVisibility":TDV.Tour.Script.setMeasurementsVisibility,"visibleComponentsIfPlayerFlagEnabled":TDV.Tour.Script.visibleComponentsIfPlayerFlagEnabled,"setDirectionalPanoramaAudio":TDV.Tour.Script.setDirectionalPanoramaAudio,"pauseGlobalAudios":TDV.Tour.Script.pauseGlobalAudios,"loadFromCurrentMediaPlayList":TDV.Tour.Script.loadFromCurrentMediaPlayList,"setOverlaysVisibility":TDV.Tour.Script.setOverlaysVisibility,"getRootOverlay":TDV.Tour.Script.getRootOverlay,"getMediaByName":TDV.Tour.Script.getMediaByName,"setSurfaceSelectionHotspotMode":TDV.Tour.Script.setSurfaceSelectionHotspotMode,"toggleMeasurementsVisibility":TDV.Tour.Script.toggleMeasurementsVisibility,"playGlobalAudioWhilePlay":TDV.Tour.Script.playGlobalAudioWhilePlay,"init":TDV.Tour.Script.init,"disableVR":TDV.Tour.Script.disableVR,"executeJS":TDV.Tour.Script.executeJS,"playGlobalAudio":TDV.Tour.Script.playGlobalAudio,"getOverlays":TDV.Tour.Script.getOverlays,"setMeasurementUnits":TDV.Tour.Script.setMeasurementUnits,"textToSpeech":TDV.Tour.Script.textToSpeech,"setStartTimeVideo":TDV.Tour.Script.setStartTimeVideo,"stopAndGoCamera":TDV.Tour.Script.stopAndGoCamera,"registerKey":TDV.Tour.Script.registerKey,"setEndToItemIndex":TDV.Tour.Script.setEndToItemIndex,"getComponentsByTags":TDV.Tour.Script.getComponentsByTags,"getStateTextToSpeech":TDV.Tour.Script.getStateTextToSpeech,"syncPlaylists":TDV.Tour.Script.syncPlaylists,"historyGoForward":TDV.Tour.Script.historyGoForward,"historyGoBack":TDV.Tour.Script.historyGoBack,"autotriggerAtStart":TDV.Tour.Script.autotriggerAtStart,"executeAudioActionByTags":TDV.Tour.Script.executeAudioActionByTags,"setStartTimeVideoSync":TDV.Tour.Script.setStartTimeVideoSync,"getGlobalAudio":TDV.Tour.Script.getGlobalAudio,"setValue":TDV.Tour.Script.setValue,"quizShowQuestion":TDV.Tour.Script.quizShowQuestion,"changeOpacityWhilePlay":TDV.Tour.Script.changeOpacityWhilePlay,"getActivePlayersWithViewer":TDV.Tour.Script.getActivePlayersWithViewer,"executeFunctionWhenChange":TDV.Tour.Script.executeFunctionWhenChange,"skip3DTransitionOnce":TDV.Tour.Script.skip3DTransitionOnce,"getMediaFromPlayer":TDV.Tour.Script.getMediaFromPlayer,"getCurrentPlayers":TDV.Tour.Script.getCurrentPlayers,"showComponentsWhileMouseOver":TDV.Tour.Script.showComponentsWhileMouseOver,"setMainMediaByIndex":TDV.Tour.Script.setMainMediaByIndex,"initAnalytics":TDV.Tour.Script.initAnalytics,"getModel3DInnerObject":TDV.Tour.Script.getModel3DInnerObject,"shareSocial":TDV.Tour.Script.shareSocial,"quizSetItemFound":TDV.Tour.Script.quizSetItemFound,"getComponentByName":TDV.Tour.Script.getComponentByName,"showPopupImage":TDV.Tour.Script.showPopupImage,"toggleVR":TDV.Tour.Script.toggleVR,"showPopupMedia":TDV.Tour.Script.showPopupMedia,"getMainViewer":TDV.Tour.Script.getMainViewer,"setMainMediaByName":TDV.Tour.Script.setMainMediaByName,"htmlToPlainText":TDV.Tour.Script.htmlToPlainText,"_getPlayListsWithViewer":TDV.Tour.Script._getPlayListsWithViewer,"clonePanoramaCamera":TDV.Tour.Script.clonePanoramaCamera,"setMediaBehaviour":TDV.Tour.Script.setMediaBehaviour,"getPlayListWithItem":TDV.Tour.Script.getPlayListWithItem,"quizPauseTimer":TDV.Tour.Script.quizPauseTimer,"textToSpeechComponent":TDV.Tour.Script.textToSpeechComponent,"existsKey":TDV.Tour.Script.existsKey,"setModel3DCameraSpot":TDV.Tour.Script.setModel3DCameraSpot,"cloneBindings":TDV.Tour.Script.cloneBindings,"executeAudioAction":TDV.Tour.Script.executeAudioAction,"unregisterKey":TDV.Tour.Script.unregisterKey,"pauseCurrentPlayers":TDV.Tour.Script.pauseCurrentPlayers,"changeBackgroundWhilePlay":TDV.Tour.Script.changeBackgroundWhilePlay,"initOverlayGroupRotationOnClick":TDV.Tour.Script.initOverlayGroupRotationOnClick,"setMapLocation":TDV.Tour.Script.setMapLocation,"initQuiz":TDV.Tour.Script.initQuiz,"toggleTextToSpeechComponent":TDV.Tour.Script.toggleTextToSpeechComponent,"showPopupPanoramaVideoOverlay":TDV.Tour.Script.showPopupPanoramaVideoOverlay,"startModel3DWithCameraSpot":TDV.Tour.Script.startModel3DWithCameraSpot,"setModel3DCameraWithCurrentSpot":TDV.Tour.Script.setModel3DCameraWithCurrentSpot,"showWindow":TDV.Tour.Script.showWindow,"getFirstPlayListWithMedia":TDV.Tour.Script.getFirstPlayListWithMedia,"startPanoramaWithCamera":TDV.Tour.Script.startPanoramaWithCamera,"triggerOverlay":TDV.Tour.Script.triggerOverlay,"_initSplitViewer":TDV.Tour.Script._initSplitViewer,"openEmbeddedPDF":TDV.Tour.Script.openEmbeddedPDF,"getPanoramaOverlayByName":TDV.Tour.Script.getPanoramaOverlayByName,"getCurrentPlayerWithMedia":TDV.Tour.Script.getCurrentPlayerWithMedia,"changePlayListWithSameSpot":TDV.Tour.Script.changePlayListWithSameSpot,"_initTwinsViewer":TDV.Tour.Script._initTwinsViewer,"restartTourWithoutInteraction":TDV.Tour.Script.restartTourWithoutInteraction,"quizResumeTimer":TDV.Tour.Script.quizResumeTimer,"showPopupPanoramaOverlay":TDV.Tour.Script.showPopupPanoramaOverlay,"getAudioByTags":TDV.Tour.Script.getAudioByTags,"getMediaByTags":TDV.Tour.Script.getMediaByTags,"isCardboardViewMode":TDV.Tour.Script.isCardboardViewMode,"startPanoramaWithModel":TDV.Tour.Script.startPanoramaWithModel,"pauseGlobalAudiosWhilePlayItem":TDV.Tour.Script.pauseGlobalAudiosWhilePlayItem,"resumePlayers":TDV.Tour.Script.resumePlayers,"setModel3DCameraSequence":TDV.Tour.Script.setModel3DCameraSequence,"setObjectsVisibility":TDV.Tour.Script.setObjectsVisibility,"stopMeasurement":TDV.Tour.Script.stopMeasurement,"translate":TDV.Tour.Script.translate,"startMeasurement":TDV.Tour.Script.startMeasurement,"fixTogglePlayPauseButton":TDV.Tour.Script.fixTogglePlayPauseButton,"setLocale":TDV.Tour.Script.setLocale,"resumeGlobalAudios":TDV.Tour.Script.resumeGlobalAudios}};
if (script['data'] == undefined)
    script['data'] = {};
script['data']['translateObjs'] = translateObjs, script['data']['createQuizConfig'] = function () {
    var a = {};
    return this['get']('data')['translateObjs'] = translateObjs, a;
}, TDV['PlayerAPI']['defineScript'](script);
//# sourceMappingURL=script_device.js.map
})();
//Generated with v2025.1.11, Wed Jun 25 2025