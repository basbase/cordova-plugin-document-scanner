
module.exports = {
    scanDoc: function (successCallback, errorCallback, options) {
        options = options || {};
		options.sourceType = (options.sourceType == undefined) ? 1 : options.sourceType;
		options.fileName = (options.fileName == undefined) ? "image" : options.fileName;
		options.quality = (!isNaN(options.quality) && options.quality >= 1 && options.quality <= 5) ? options.quality : 1;
		options.returnBase64 = (typeof options.returnBase64 === "boolean") ? options.returnBase64 : false;
		var uri = options.uri ? options.uri : "";
		var outputQuality = options.outputQuality || 80;
		var targetWidth = options.targetWidth || 1600;
		var targetHeight = options.targetHeight || 1600;

		console.log("BASBASE options uri:"+uri+" outputQuality:"+outputQuality+" targetWidth:"+targetWidth +" targetHeight:"+targetHeight);
    	if((options.sourceType === 1 || options.sourceType === 0) && typeof options.fileName === "string")
    	{
			var sourceType = options.sourceType;	// 0 Gallery, 1 Camera
			var fileName = options.fileName;	// "image" if not specified
			var quality = options.quality;	// Quality defaults to 1 (highest). If value > 1, a smaller image is returned to save memory. https://developer.android.com/reference/android/graphics/BitmapFactory.Options.html#inSampleSize
			var returnBase64 = options.returnBase64;	// return base64 output if set to true. Defaults to false.
			var args = [sourceType, fileName, quality, returnBase64, uri, outputQuality, targetWidth, targetHeight];
        	cordova.exec(successCallback, errorCallback, "Scan", "scanDoc", args);
    	}
    	else
    	{
    		alert("Incorrect options/argument values specified by the plugin user!");
    	}
    }
};
