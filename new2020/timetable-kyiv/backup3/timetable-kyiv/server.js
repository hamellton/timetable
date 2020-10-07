var http = require('http');
var fs = require('fs');
var url = require('url');
var chat = require('./info');
var moment = require('moment');
var jsonfile = require('jsonfile');
var util = require('util');
var file = './json/events.json';
var STARTDATE = moment([2016, 0, 10]);
var daysOfYear = 366;
var datesOfYear = [];
var today = moment();
var daysPlusMonth = today.diff(STARTDATE, 'days') + 30;

var eventsfromJSON = JSON.parse(fs.readFileSync('./json/events.json', 'utf8'));

for (var i = 0; i < daysOfYear; i++) {
    datesOfYear[i] = moment([2016, 0, 11]).add(i, 'days').format("DD-MM-YYYY");
}
http.createServer(function(req, res) {
    var urlParsed = url.parse(req.url);

    switch (urlParsed.pathname) {
        case '/':
            sendFile("index.html", res);
            break;
        case '/css/main.css':
            sendFile("./css/main.css", res);
            break;
        case '/css/bootstrap.min.css':
            sendFile("./css/bootstrap.min.css", res);
            break;
        case '/css/jquery.fullpage.min.css':
            sendFile("./css/jquery.fullpage.min.css", res);
            break;
        case '/js/jquery.js':
            sendFile("./js/jquery.js", res);
            break;
        case '/js/vue.js':
            sendFile("./js/vue.js", res);
            break;
        case '/js/jquery.fullpage.min.js':
            sendFile("./js/jquery.fullpage.min.js", res);
            break;
        case '/js/bootstrap.min.js':
            sendFile("./js/bootstrap.min.js", res);
            break;
        case '/js/custom.js':
            sendFile("./js/custom.js", res);
            break;
        case '/js/weekend.js':
            sendFile("./js/weekend.js", res);
            break;
        case '/js/makehtml.js':
            sendFile("./js/makehtml.js", res);
            break;
        case '/js/jquery.scrollto.js':
            sendFile("./js/jquery.scrollto.js", res);
            break;
        case '/contacts.html':
            sendFile("contacts.html", res);
            break;

        case '/subscribe':
            chat.subscribe(req, res);
            break;

        case '/loadevents':
            jsonfile.readFile(file, function(err, obj) {
                return (function() {
                    chat.publish(obj);
                    res.end(JSON.stringify(obj));
                })();
            });
            break;

        case '/publish':
            var body = '';

            req
                .on('readable', function() {
                    body += req.read();

                    if (body.length > 1e4) {
                        res.statusCode = 413;
                        res.end("Your message is too big!");
                    }
                })
                .on('end', function() {
                    try {
                        body = JSON.parse(body);
                    } catch (e) {
                        res.statusCode = 400;
                        res.end("Bad Request");
                        return;
                    }

                    chat.publish({
                        typeEvent: body.typeEvent,
                        campaign: body.campaign,
                        eventStatus: body.eventStatus,
                        eventPlat: body.eventPlat,
                        date: body.date,
                        methodist: body.methodist,
                        theme: body.theme,
                        additionaltheme: body.additionaltheme,
                        additionalbook: body.additionalbook,
                        school: body.school,
                        time: body.time,
                        place: body.place,
                        manager: body.manager,
                        comment: body.comment,
                        /*new fields*/
                        book: body.book,
                        driver: body.driver,
                        certificate: body.certificate,
                        sectorpromoted: body.sectorpromoted,
                        numberC: body.numberC,
                        thankYouLetter: body.thankYouLetter,
                        ePanelComment: body.ePanelComment,
                        webinarsComment: body.webinarsComment,
                        dateSend: body.dateSend,
                        advertComment: body.advertComment,
                        competitionComment: body.competitionComment,
                        certificateComment: body.certificateComment,
                        invitationComment: body.linkComment,
                        linkComment: body.linkComment,
                        reportComment: body.reportComment,
                        offerComment: body.offerComment,
                        id: body.id
                    });
                    res.end("ok");
                });

            break;


        case '/sendevent':
            var sendBody = '';
            req
                .on('readable', function() {
                    sendBody += req.read();
                    if (sendBody.length > 1e4) {
                        res.statusCode = 413;
                        console.log('/sendevent 413') //new
                        res.end("Your message is too big!");
                    }
                })
                .on('end', function() {
                    try {
                        sendBody = sendBody.replace(/null/g, "") // удаляем null в конце строки
                        sendBody = JSON.parse(sendBody);
                    } catch (e) {
                        res.statusCode = 400;
                        res.end(sendBody);
                        console.log('Bad Request ' + e); //new
                        console.log(sendBody)
                        return;
                    }
                    jsonfile.readFile(file, function(err, obj) {

                        if (obj.events.length === 0) {
                            obj.events.push(sendBody);
                        } else {
                            console.log(obj.events.length);
                            for (var y = 0; y < obj.events.length; y++) {
                                if (obj.events[y].id === sendBody.id) {
                                    obj.events[y].typeEvent = sendBody.typeEvent;
                                    obj.events[y].campaign = sendBody.campaign;
                                    obj.events[y].statusEvent = sendBody.statusEvent;
                                    obj.events[y].statusPlat = sendBody.statusPlat;
                                    obj.events[y].theme = sendBody.theme;
                                    obj.events[y].additionaltheme = sendBody.additionaltheme;
                                    obj.events[y].additionalbook = sendBody.additionalbook;
                                    obj.events[y].school = sendBody.school;
                                    obj.events[y].time = sendBody.time;
                                    obj.events[y].place = sendBody.place;
                                    obj.events[y].manager = sendBody.manager;
                                    obj.events[y].comment = sendBody.comment;
                                    obj.events[y].book = sendBody.book;
                                    obj.events[y].driver = sendBody.driver;
                                    obj.events[y].certificate = sendBody.certificate;
                                    obj.events[y].sectorpromoted = sendBody.sectorpromoted;
                                    obj.events[y].numberC = sendBody.numberC;
                                    obj.events[y].thankYouLetter = sendBody.thankYouLetter;
                                    obj.events[y].ePanelComment = sendBody.ePanelComment;
                                    obj.events[y].webinarsComment = sendBody.webinarsComment;
                                    obj.events[y].dateSend = sendBody.dateSend;
                                    obj.events[y].advertComment = sendBody.advertComment;
                                    obj.events[y].competitionComment = sendBody.competitionComment;
                                    obj.events[y].certificateComment = sendBody.certificateComment;
                                    obj.events[y].invitationComment = sendBody.invitationComment;
                                    obj.events[y].linkComment = sendBody.linkComment;
                                    obj.events[y].reportComment = sendBody.reportComment;
                                    obj.events[y].offerComment = sendBody.offerComment;
                                    break;
                                } else if (y == (+(obj.events.length) - 1)) {
                                    //читаем id для новой записи с базы и обновляем id в базе
                                    var compareId = obj.next_id;
                                    sendBody.id = compareId.toString();
                                    obj.events.push(sendBody);
                                    obj.next_id = (+obj.next_id) + 1;
                                }
                            }
                        }
                        return (function() {
                            jsonfile.writeFile(file, obj, function(err) {
                                console.error(err);
                            });
                        })();
                    });

                    jsonfile.readFile(file, function(err, obj) {
                        return (function() {
                            chat.publish(obj);
                            res.end("ok");
                        })();
                    });
                });

            break;

        case '/deleteevent':
            var sendBodyDel = '';
            req
                .on('readable', function() {
                    sendBodyDel += req.read();

                    if (sendBodyDel.length > 1e4) {
                        res.statusCode = 413;
                        res.end("Your message is too big!");
                    }
                })
                .on('end', function() {
                    try {
                        sendBodyDel = sendBodyDel.replace(/null/g, "") // удаляем null в конце строки
                        sendBodyDel = JSON.parse(sendBodyDel);
                    } catch (e) {
                        res.statusCode = 400;
                        res.end("Bad Request");
                        return;
                    }
                    jsonfile.readFile(file, function(err, obj) {
                        //если файл пустой записать запись
                        if (obj.events.length === 0) {
                            obj.events.push(sendBodyDel);
                        } else {
                            for (var y = 0; y < obj.events.length; y++) {
                                if (obj.events[y].id === sendBodyDel.id) {
                                    obj.events[y].date += '-DEL';
                                    obj.events[y].methodist += '-DEL';

                                }
                            }
                        }
                        return (function() {
                            jsonfile.writeFile(file, obj, function(err) {
                                console.error(err);
                            });
                        })();
                    });

                    jsonfile.readFile(file, function(err, obj) {
                        return (function() {
                            chat.publish(obj);
                            res.end("ok");
                        })();
                    });
                });

            break;


        default:
            res.statusCode = 404;
            res.end("Not found");
    }


}).listen(2000);


function sendFile(fileName, res) {
    var fileStream = fs.createReadStream(fileName);
    fileStream
        .on('error', function() {
            res.statusCode = 500;
            res.end("Server error");
        })
        .pipe(res)
        .on('close', function() {
            fileStream.destroy();
        });
}