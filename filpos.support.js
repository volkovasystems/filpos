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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZpbHBvcy5zdXBwb3J0LmpzIl0sIm5hbWVzIjpbImRvdWJ0IiwicmVxdWlyZSIsImZhbHp5IiwiZmlscG9zIiwiYXJyYXkiLCJsZW5ndGgiLCJkZWZlciIsIkFSUkFZIiwiRXJyb3IiLCJhcmd1bWVudHMiLCJpbmRleCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF5REEsSUFBTUEsUUFBUUMsUUFBUyxPQUFULENBQWQ7QUFDQSxJQUFNQyxRQUFRRCxRQUFTLE9BQVQsQ0FBZDs7QUFFQSxJQUFNRSxTQUFTLFNBQVNBLE1BQVQsQ0FBaUJDLEtBQWpCLEVBQXdCQyxNQUF4QixFQUFnQ0MsS0FBaEMsRUFBdUM7QUFDckQ7Ozs7Ozs7Ozs7QUFVQSxLQUFJLENBQUNOLE1BQU9JLEtBQVAsRUFBY0csS0FBZCxDQUFMLEVBQTRCO0FBQzNCLFFBQU0sSUFBSUMsS0FBSixDQUFXLGVBQVgsQ0FBTjtBQUNBOztBQUVELEtBQUlOLE1BQU9HLE1BQVAsS0FBbUIsT0FBT0EsTUFBUCxJQUFpQixRQUFwQyxJQUFnREEsU0FBUyxDQUE3RCxFQUFnRTtBQUMvRCxRQUFNLElBQUlHLEtBQUosQ0FBVyxnQkFBWCxDQUFOO0FBQ0E7O0FBRUQsS0FBSUMsVUFBVUosTUFBVixJQUFvQixDQUF4QixFQUEyQjtBQUMxQixRQUFNLElBQUlHLEtBQUosQ0FBVyxxQkFBWCxDQUFOO0FBQ0E7O0FBRUQsTUFBSyxJQUFJRSxRQUFRLENBQWpCLEVBQW9CQSxRQUFRTCxNQUE1QixFQUFvQ0ssT0FBcEMsRUFBNkM7QUFDNUMsTUFBSVIsTUFBT0UsTUFBT00sS0FBUCxDQUFQLENBQUosRUFBNkI7QUFDNUJOLFNBQU9NLEtBQVAsSUFBaUJKLEtBQWpCO0FBQ0E7QUFDRDs7QUFFRCxRQUFPRixLQUFQO0FBQ0EsQ0E5QkQ7O0FBZ0NBTyxPQUFPQyxPQUFQLEdBQWlCVCxNQUFqQiIsImZpbGUiOiJmaWxwb3Muc3VwcG9ydC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG4vKjtcblx0QG1vZHVsZS1saWNlbnNlOlxuXHRcdFRoZSBNSVQgTGljZW5zZSAoTUlUKVxuXHRcdEBtaXQtbGljZW5zZVxuXG5cdFx0Q29weXJpZ2h0IChAYykgMjAxNyBSaWNoZXZlIFNpb2RpbmEgQmViZWRvclxuXHRcdEBlbWFpbDogcmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVxuXG5cdFx0UGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuXHRcdG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcblx0XHRpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG5cdFx0dG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuXHRcdGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuXHRcdGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5cblx0XHRUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGxcblx0XHRjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuXG5cdFx0VEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuXHRcdElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuXHRcdEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuXHRcdEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcblx0XHRMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuXHRcdE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFXG5cdFx0U09GVFdBUkUuXG5cdEBlbmQtbW9kdWxlLWxpY2Vuc2VcblxuXHRAbW9kdWxlLWNvbmZpZ3VyYXRpb246XG5cdFx0e1xuXHRcdFx0XCJwYWNrYWdlXCI6IFwiZmlscG9zXCIsXG5cdFx0XHRcInBhdGhcIjogXCJmaWxwb3MvZmlscG9zLmpzXCIsXG5cdFx0XHRcImZpbGVcIjogXCJmaWxwb3MuanNcIixcblx0XHRcdFwibW9kdWxlXCI6IFwiZmlscG9zXCIsXG5cdFx0XHRcImF1dGhvclwiOiBcIlJpY2hldmUgUy4gQmViZWRvclwiLFxuXHRcdFx0XCJlTWFpbFwiOiBcInJpY2hldmUuYmViZWRvckBnbWFpbC5jb21cIixcblx0XHRcdFwiY29udHJpYnV0b3JzXCI6IFtcblx0XHRcdFx0XCJKb2huIExlbm9uIE1hZ2hhbm95IDxqb2hubGVub25tYWdoYW5veUBnbWFpbC5jb20+XCIsXG5cdFx0XHRcdFwiVmluc2UgVmluYWxvbiA8dmluc2V2aW5hbG9uQGdtYWlsLmNvbT5cIlxuXHRcdFx0XSxcblx0XHRcdFwicmVwb3NpdG9yeVwiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS92b2xrb3Zhc3lzdGVtcy9maWxwb3MuZ2l0XCIsXG5cdFx0XHRcInRlc3RcIjogXCJmaWxwb3MtdGVzdC5qc1wiLFxuXHRcdFx0XCJnbG9iYWxcIjogdHJ1ZVxuXHRcdH1cblx0QGVuZC1tb2R1bGUtY29uZmlndXJhdGlvblxuXG5cdEBtb2R1bGUtZG9jdW1lbnRhdGlvbjpcblx0XHRGaWxsIGFycmF5IGxpa2UgYSBwYWQgcmlnaHQuXG5cdEBlbmQtbW9kdWxlLWRvY3VtZW50YXRpb25cblxuXHRAaW5jbHVkZTpcblx0XHR7XG5cdFx0XHRcImRvdWJ0XCI6IFwiZG91YnRcIixcblx0XHRcdFwiZmFsenlcIjogXCJmYWx6eVwiLFxuXHRcdH1cblx0QGVuZC1pbmNsdWRlXG4qL1xuXG5jb25zdCBkb3VidCA9IHJlcXVpcmUoIFwiZG91YnRcIiApO1xuY29uc3QgZmFsenkgPSByZXF1aXJlKCBcImZhbHp5XCIgKTtcblxuY29uc3QgZmlscG9zID0gZnVuY3Rpb24gZmlscG9zKCBhcnJheSwgbGVuZ3RoLCBkZWZlciApe1xuXHQvKjtcblx0XHRAbWV0YS1jb25maWd1cmF0aW9uOlxuXHRcdFx0e1xuXHRcdFx0XHRcImFycmF5OnJlcXVpcmVkXCI6IEFycmF5LFxuXHRcdFx0XHRcImxlbmd0aDpyZXF1aXJlZFwiOiBcIm51bWJlclwiLFxuXHRcdFx0XHRcImRlZmVyOnJlcXVpcmVkXCI6IFwiKlwiXG5cdFx0XHR9XG5cdFx0QGVuZC1tZXRhLWNvbmZpZ3VyYXRpb25cblx0Ki9cblxuXHRpZiggIWRvdWJ0KCBhcnJheSwgQVJSQVkgKSApe1xuXHRcdHRocm93IG5ldyBFcnJvciggXCJpbnZhbGlkIGFycmF5XCIgKTtcblx0fVxuXG5cdGlmKCBmYWx6eSggbGVuZ3RoICkgfHwgdHlwZW9mIGxlbmd0aCAhPSBcIm51bWJlclwiIHx8IGxlbmd0aCA8IDEgKXtcblx0XHR0aHJvdyBuZXcgRXJyb3IoIFwiaW52YWxpZCBsZW5ndGhcIiApO1xuXHR9XG5cblx0aWYoIGFyZ3VtZW50cy5sZW5ndGggIT0gMyApe1xuXHRcdHRocm93IG5ldyBFcnJvciggXCJlbXB0eSBkZWZhdWx0IHZhbHVlXCIgKTtcblx0fVxuXG5cdGZvciggbGV0IGluZGV4ID0gMDsgaW5kZXggPCBsZW5ndGg7IGluZGV4KysgKXtcblx0XHRpZiggZmFsenkoIGFycmF5WyBpbmRleCBdICkgKXtcblx0XHRcdGFycmF5WyBpbmRleCBdID0gZGVmZXI7XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIGFycmF5O1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBmaWxwb3M7XG4iXX0=
//# sourceMappingURL=filpos.support.js.map
