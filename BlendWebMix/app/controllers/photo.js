var args = arguments[0] || {};

$.takephoto.addEventListener('click', function(e) {
    Ti.Media.showCamera({
        success:function(event) {
            // called when media returned from the camera
            Ti.API.debug('Our type was: '+event.mediaType);
            if(event.mediaType == Ti.Media.MEDIA_TYPE_PHOTO) {
                var imageView = Ti.UI.createImageView({
                    width:200,
                    height:200,
                    image:event.media
                });
                $.photocontainer.add(imageView);
            } else {
                alert("got the wrong type back ="+event.mediaType);
            }
        },
        cancel:function() {
            // called when user cancels taking a picture
        },
        error:function(error) {
            // called when there's an error
            var a = Ti.UI.createAlertDialog({title:'Camera'});
            if (error.code == Titanium.Media.NO_CAMERA) {
                a.setMessage('Please run this test on device');
            } else {
                a.setMessage('Unexpected error: ' + error.code);
            }
            a.show();
        },
        saveToPhotoGallery:true,
        // allowEditing and mediaTypes are iOS-only settings
        allowEditing:true,
        mediaTypes:[Ti.Media.MEDIA_TYPE_PHOTO]
    });
});