
    var secretKey = 'DfoGYczYULGmQuYewrEKnAkYfxBxngUQ';

    // Payload data
    var payload = {
      customer_id: localStorage.getItem('tokenDeviceId')
    };
    
    // Create a header for the JWT
    var header = { alg: 'HS256', typ: 'JWT',kid:'fsafe-go-public' };
    
    // Create the JWT
    var jwtToken = KJUR?.jws?.JWS?.sign("HS256", JSON.stringify(header), JSON.stringify(payload), secretKey);
    console.log(jwtToken);
    const h1 = window.location.hostname;
            var Countly = Countly || {};
            Countly.q = Countly.q || [];
            Countly.url = "https://hifpt-api-stag.fpt.vn/hi-tracking-api/";
            Countly.app_key = "fsafe-go-public-stag";
            Countly.force_post = true;
            Countly.headers = {
                Authorization: 'Bearer '+ jwtToken,
                'Access-Control-Allow-Credentials': true,
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
                'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token , Authorization',
                'Cache-Control': null,
                'X-Requested-With': null,
            };
            Countly.device_id = localStorage.getItem('tokenDeviceId');
            (function () {
                var cly = document.createElement("script");
                cly.type = "text/javascript";
                cly.async = true;
                cly.src = "https://cdnjs.cloudflare.com/ajax/libs/countly-sdk-web/20.4.0/countly.min.js";
                cly.onload = function () {
                    Countly.init();
                };
                var s = document.getElementsByTagName("script")[0];
                s.parentNode.insertBefore(cly, s);
            })();