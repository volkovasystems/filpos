"use strict";

/*;
              	@module-license:
              		The MIT License (MIT)
              		@mit-license
              
              		Copyright (@c) 2017 Richeve Siodina Bebedor
              		@email: richeve.bebedor@gmail.com
              
              		Permission is hereby granted, free of charge, to any person obtaining a copy
              		of this software and associated documentation files (the "Software"), to deal
              		in the Software without restriction, including without limitation the rights
              		to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
              		copies of the Software, and to permit persons to whom the Software is
              		furnished to do so, subject to the following conditions:
              
              		The above copyright notice and this permission notice shall be included in all
              		copies or substantial portions of the Software.
              
              		THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
              		IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
              		FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
              		AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
              		LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
              		OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
              		SOFTWARE.
              	@end-module-license
              
              	@module-configuration:
              		{
              			"package": "filpos",
              			"path": "filpos/filpos.js",
              			"file": "filpos.js",
              			"module": "filpos",
              			"author": "Richeve S. Bebedor",
              			"eMail": "richeve.bebedor@gmail.com",
              			"contributors": [
              				"John Lenon Maghanoy <johnlenonmaghanoy@gmail.com>",
              				"Vinse Vinalon <vinsevinalon@gmail.com>"
              			],
              			"repository": "https://github.com/volkovasystems/filpos.git",
              			"test": "filpos-test.js",
              			"global": true
              		}
              	@end-module-configuration
              
              	@module-documentation:
              		Fill array like a pad right.
              	@end-module-documentation
              
              	@include:
              		{
              			"doubt": "doubt",
              			"falzy": "falzy",
              		}
              	@end-include
              */

var doubt = require("doubt");
var falzy = require("falzy");

var filpos = function filpos(array, length, defer) {
	/*;
                                                    	@meta-configuration:
                                                    		{
                                                    			"array:required": Array,
                                                    			"length:required": "number",
                                                    			"defer:required": "*"
                                                    		}
                                                    	@end-meta-configuration
                                                    */

	if (!doubt(array, ARRAY)) {
		throw new Error("invalid array");
	}

	if (falzy(length) || typeof length != "number" || length < 1) {
		throw new Error("invalid length");
	}

	if (arguments.length != 3) {
		throw new Error("empty default value");
	}

	for (var index = 0; index < length; index++) {
		if (falzy(array[index])) {
			array[index] = defer;
		}
	}

	return array;
};

module.exports = filpos;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbHBvcy5zdXBwb3J0LmpzIl0sIm5hbWVzIjpbImRvdWJ0IiwicmVxdWlyZSIsImZhbHp5IiwiZmlscG9zIiwiYXJyYXkiLCJsZW5ndGgiLCJkZWZlciIsIkFSUkFZIiwiRXJyb3IiLCJhcmd1bWVudHMiLCJpbmRleCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF5REEsSUFBTUEsUUFBUUMsUUFBUyxPQUFULENBQWQ7QUFDQSxJQUFNQyxRQUFRRCxRQUFTLE9BQVQsQ0FBZDs7QUFFQSxJQUFNRSxTQUFTLFNBQVNBLE1BQVQsQ0FBaUJDLEtBQWpCLEVBQXdCQyxNQUF4QixFQUFnQ0MsS0FBaEMsRUFBdUM7QUFDckQ7Ozs7Ozs7Ozs7QUFVQSxLQUFJLENBQUNOLE1BQU9JLEtBQVAsRUFBY0csS0FBZCxDQUFMLEVBQTRCO0FBQzNCLFFBQU0sSUFBSUMsS0FBSixDQUFXLGVBQVgsQ0FBTjtBQUNBOztBQUVELEtBQUlOLE1BQU9HLE1BQVAsS0FBbUIsT0FBT0EsTUFBUCxJQUFpQixRQUFwQyxJQUFnREEsU0FBUyxDQUE3RCxFQUFnRTtBQUMvRCxRQUFNLElBQUlHLEtBQUosQ0FBVyxnQkFBWCxDQUFOO0FBQ0E7O0FBRUQsS0FBSUMsVUFBVUosTUFBVixJQUFvQixDQUF4QixFQUEyQjtBQUMxQixRQUFNLElBQUlHLEtBQUosQ0FBVyxxQkFBWCxDQUFOO0FBQ0E7O0FBRUQsTUFBSyxJQUFJRSxRQUFRLENBQWpCLEVBQW9CQSxRQUFRTCxNQUE1QixFQUFvQ0ssT0FBcEMsRUFBNkM7QUFDNUMsTUFBSVIsTUFBT0UsTUFBT00sS0FBUCxDQUFQLENBQUosRUFBNkI7QUFDNUJOLFNBQU9NLEtBQVAsSUFBaUJKLEtBQWpCO0FBQ0E7QUFDRDs7QUFFRCxRQUFPRixLQUFQO0FBQ0EsQ0E5QkQ7O0FBZ0NBTyxPQUFPQyxPQUFQLEdBQWlCVCxNQUFqQiIsImZpbGUiOiJmaWxwb3Muc3VwcG9ydC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xyXG5cclxuLyo7XHJcblx0QG1vZHVsZS1saWNlbnNlOlxyXG5cdFx0VGhlIE1JVCBMaWNlbnNlIChNSVQpXHJcblx0XHRAbWl0LWxpY2Vuc2VcclxuXHJcblx0XHRDb3B5cmlnaHQgKEBjKSAyMDE3IFJpY2hldmUgU2lvZGluYSBCZWJlZG9yXHJcblx0XHRAZW1haWw6IHJpY2hldmUuYmViZWRvckBnbWFpbC5jb21cclxuXHJcblx0XHRQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XHJcblx0XHRvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXHJcblx0XHRpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXHJcblx0XHR0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXHJcblx0XHRjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcclxuXHRcdGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XHJcblxyXG5cdFx0VGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsXHJcblx0XHRjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxyXG5cclxuXHRcdFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcclxuXHRcdElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxyXG5cdFx0RklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXHJcblx0XHRBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXHJcblx0XHRMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxyXG5cdFx0T1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEVcclxuXHRcdFNPRlRXQVJFLlxyXG5cdEBlbmQtbW9kdWxlLWxpY2Vuc2VcclxuXHJcblx0QG1vZHVsZS1jb25maWd1cmF0aW9uOlxyXG5cdFx0e1xyXG5cdFx0XHRcInBhY2thZ2VcIjogXCJmaWxwb3NcIixcclxuXHRcdFx0XCJwYXRoXCI6IFwiZmlscG9zL2ZpbHBvcy5qc1wiLFxyXG5cdFx0XHRcImZpbGVcIjogXCJmaWxwb3MuanNcIixcclxuXHRcdFx0XCJtb2R1bGVcIjogXCJmaWxwb3NcIixcclxuXHRcdFx0XCJhdXRob3JcIjogXCJSaWNoZXZlIFMuIEJlYmVkb3JcIixcclxuXHRcdFx0XCJlTWFpbFwiOiBcInJpY2hldmUuYmViZWRvckBnbWFpbC5jb21cIixcclxuXHRcdFx0XCJjb250cmlidXRvcnNcIjogW1xyXG5cdFx0XHRcdFwiSm9obiBMZW5vbiBNYWdoYW5veSA8am9obmxlbm9ubWFnaGFub3lAZ21haWwuY29tPlwiLFxyXG5cdFx0XHRcdFwiVmluc2UgVmluYWxvbiA8dmluc2V2aW5hbG9uQGdtYWlsLmNvbT5cIlxyXG5cdFx0XHRdLFxyXG5cdFx0XHRcInJlcG9zaXRvcnlcIjogXCJodHRwczovL2dpdGh1Yi5jb20vdm9sa292YXN5c3RlbXMvZmlscG9zLmdpdFwiLFxyXG5cdFx0XHRcInRlc3RcIjogXCJmaWxwb3MtdGVzdC5qc1wiLFxyXG5cdFx0XHRcImdsb2JhbFwiOiB0cnVlXHJcblx0XHR9XHJcblx0QGVuZC1tb2R1bGUtY29uZmlndXJhdGlvblxyXG5cclxuXHRAbW9kdWxlLWRvY3VtZW50YXRpb246XHJcblx0XHRGaWxsIGFycmF5IGxpa2UgYSBwYWQgcmlnaHQuXHJcblx0QGVuZC1tb2R1bGUtZG9jdW1lbnRhdGlvblxyXG5cclxuXHRAaW5jbHVkZTpcclxuXHRcdHtcclxuXHRcdFx0XCJkb3VidFwiOiBcImRvdWJ0XCIsXHJcblx0XHRcdFwiZmFsenlcIjogXCJmYWx6eVwiLFxyXG5cdFx0fVxyXG5cdEBlbmQtaW5jbHVkZVxyXG4qL1xyXG5cclxuY29uc3QgZG91YnQgPSByZXF1aXJlKCBcImRvdWJ0XCIgKTtcclxuY29uc3QgZmFsenkgPSByZXF1aXJlKCBcImZhbHp5XCIgKTtcclxuXHJcbmNvbnN0IGZpbHBvcyA9IGZ1bmN0aW9uIGZpbHBvcyggYXJyYXksIGxlbmd0aCwgZGVmZXIgKXtcclxuXHQvKjtcclxuXHRcdEBtZXRhLWNvbmZpZ3VyYXRpb246XHJcblx0XHRcdHtcclxuXHRcdFx0XHRcImFycmF5OnJlcXVpcmVkXCI6IEFycmF5LFxyXG5cdFx0XHRcdFwibGVuZ3RoOnJlcXVpcmVkXCI6IFwibnVtYmVyXCIsXHJcblx0XHRcdFx0XCJkZWZlcjpyZXF1aXJlZFwiOiBcIipcIlxyXG5cdFx0XHR9XHJcblx0XHRAZW5kLW1ldGEtY29uZmlndXJhdGlvblxyXG5cdCovXHJcblxyXG5cdGlmKCAhZG91YnQoIGFycmF5LCBBUlJBWSApICl7XHJcblx0XHR0aHJvdyBuZXcgRXJyb3IoIFwiaW52YWxpZCBhcnJheVwiICk7XHJcblx0fVxyXG5cclxuXHRpZiggZmFsenkoIGxlbmd0aCApIHx8IHR5cGVvZiBsZW5ndGggIT0gXCJudW1iZXJcIiB8fCBsZW5ndGggPCAxICl7XHJcblx0XHR0aHJvdyBuZXcgRXJyb3IoIFwiaW52YWxpZCBsZW5ndGhcIiApO1xyXG5cdH1cclxuXHJcblx0aWYoIGFyZ3VtZW50cy5sZW5ndGggIT0gMyApe1xyXG5cdFx0dGhyb3cgbmV3IEVycm9yKCBcImVtcHR5IGRlZmF1bHQgdmFsdWVcIiApO1xyXG5cdH1cclxuXHJcblx0Zm9yKCBsZXQgaW5kZXggPSAwOyBpbmRleCA8IGxlbmd0aDsgaW5kZXgrKyApe1xyXG5cdFx0aWYoIGZhbHp5KCBhcnJheVsgaW5kZXggXSApICl7XHJcblx0XHRcdGFycmF5WyBpbmRleCBdID0gZGVmZXI7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRyZXR1cm4gYXJyYXk7XHJcbn07XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IGZpbHBvcztcclxuIl19
//# sourceMappingURL=filpos.support.js.map
