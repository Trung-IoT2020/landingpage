function generatePseudoUUID() {

    let v =localStorage.getItem('tokenDeviceId');
    if(v && v!=='undefined'){
        return localStorage.getItem('tokenDeviceId');
    }else{

    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
    }
  }
  
 

function generateSessionId() {
    let v =sessionStorage.getItem('trackingSessionId');
    if(v && v!=='undefined'){
        return sessionStorage.getItem('trackingSessionId');
    }else{
        const timestamp = Date.now().toString(16);
        const randomPart = Math.random().toString(16).substr(2, 8);
        return timestamp + randomPart;
    }
  }
  const sessionId = generateSessionId();
  const tokenDeviceId =generatePseudoUUID();
  console.log(tokenDeviceId); 
  localStorage.setItem('tokenDeviceId',tokenDeviceId);
  sessionStorage.setItem('trackingSessionId',sessionId);
        window.onload = function () {
            var targetElement = document.getElementById('target');
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            } console.log(targetElement);
        };
        function goto(url, id) {
            var span = document.getElementsByClassName("close")[0];
 modal.style.display = "none";
            let sessionId = sessionStorage.getItem('trackingSessionId');
            if (!sessionId || sessionId === 'null' || sessionId === 'undefined') {
                sessionId = `NoHaveSessionId`;
            }
            Countly?.q?.push([
                'add_event',
                {
                    key: 'action',
                    segmentation: {
                        type: 'click',
                        target_type: 'button',
                        target_id: url,
                        session_id: sessionId
                    },
                },
            ]);
            console.log(Countly)
            setTimeout(()=>{
                if (id === 2) {
                    window.open(
                        url,
                        '_blank'
                    );
                } else {
                    window.location.href = url;
                }
            },400)
      
        }
        function openView(screen_id) {
            let sessionId = sessionStorage.getItem('trackingSessionId');
            if (!sessionId || sessionId === 'null' || sessionId === 'undefined') {
                // let timestamp = Date.now();
                sessionId = `NoHaveSessionId`;
            }
            Countly?.q?.push([
                'add_event',
                {
                    key: 'start_view',
                    segmentation: {
                        screen_id: 'fsafego/landingpage/'+screen_id,
                        session_id: sessionId
                    },
                },
            ]);
            console.log(Countly)
        }